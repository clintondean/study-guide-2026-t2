// Validate question banks and exam compositions before deploying.
// Runs in CI; exits non-zero on any structural issue.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const PRACTICE_EXAMS_PER_TOPIC = 10;
const PRACTICE_QS_PER_EXAM = 20;
const PRACTICE_SA = 5;
const PRACTICE_LA = 1;
const SUPPORT_SUBJECT_IDS = new Set(["science", "geography-7", "music-7"]);

const root = path.resolve(process.argv[2] || path.join(__dirname, "..", ".."));
const dataDir = path.join(root, "data");
const context = { window: { SUBJECT_DATA: {} } };

if (!fs.existsSync(dataDir)) {
    throw new Error(`Missing data directory at ${dataDir}`);
}

const files = fs.readdirSync(dataDir)
    .filter(name => name.endsWith(".js"))
    .sort()
    .map(name => path.join(dataDir, name));

for (const file of files) {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

let problems = 0;
const log = (...args) => { console.log(...args); };
const fail = (msg) => { problems++; console.error("  ⚠ " + msg); };

function _mulberry32(a) {
    return function () {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function _hashStr(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return h >>> 0;
}

function _shuffle(arr, rng) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function _pickN(pool, n, rng) {
    if (!pool.length || n <= 0) return [];
    const out = _shuffle(pool, rng).slice(0, Math.min(n, pool.length));
    while (out.length < n) {
        out.push(pool[Math.floor(rng() * pool.length)]);
    }
    return out;
}

function groupBy(arr, keyFn) {
    const out = {};
    for (const item of arr) {
        const key = keyFn(item);
        (out[key] = out[key] || []).push(item);
    }
    return out;
}

function generatePracticeExams(subjectId, subject) {
    if (!Array.isArray(subject.practiceTopics)) return subject.practiceExams || [];

    const mcqsByTopic = groupBy(subject.mcqs || [], q => q.topic);
    const shortByTopic = groupBy(subject.short || [], q => q.topic);
    const longByTopic = groupBy(subject.long || [], q => q.topic);
    const exams = [];

    for (const topic of subject.practiceTopics) {
        const mcqPool = (topic.sourceTopics || []).flatMap(id => (mcqsByTopic[id] || []).map(q => q.id));
        const shortPool = (topic.sourceTopics || []).flatMap(id => (shortByTopic[id] || []).map(q => q.id));
        const longPool = (topic.sourceTopics || []).flatMap(id => (longByTopic[id] || []).map(q => q.id));
        const topicExamCount = Math.max(1, Math.floor(topic.setCount || PRACTICE_EXAMS_PER_TOPIC));
        for (let n = 1; n <= topicExamCount; n++) {
            const examId = `exam-${topic.id}-${n}`;
            const rng = _mulberry32(_hashStr(examId));
            const long = _pickN(longPool, PRACTICE_LA, rng);
            const short = _pickN(shortPool, PRACTICE_SA, rng);
            const mcqs = _pickN(mcqPool, PRACTICE_QS_PER_EXAM - long.length - short.length, rng);
            exams.push({
                id: examId,
                topicId: topic.id,
                topicName: topic.name,
                name: `${topic.name} — Set ${String(n).padStart(2, "0")}`,
                focus: topic.outcomes || "",
                questionIds: mcqs.concat(short, long)
            });
        }
    }

    return exams;
}

const subjects = context.window.SUBJECT_DATA || {};
for (const id of Object.keys(subjects)) {
    const subject = subjects[id];
    const allQ = [].concat(subject.mcqs || [], subject.short || [], subject.long || []);
    const byId = Object.create(null);
    allQ.forEach(q => { byId[q.id] = q; });
    const mcqSet = new Set((subject.mcqs || []).map(q => q.id));
    const shortSet = new Set((subject.short || []).map(q => q.id));
    const longSet = new Set((subject.long || []).map(q => q.id));
    const topicIds = new Set((subject.topics || []).map(t => t.id));
    const mocks = subject.mockExams || [];
    const practiceExams = generatePracticeExams(id, subject);

    log(`\n[${id}] ${subject.name}`);
    log(`   MCQ:${(subject.mcqs || []).length} short:${(subject.short || []).length} long:${(subject.long || []).length}`);
    log(`   practice exams: ${practiceExams.length} | mock exams: ${mocks.length}`);

    for (const q of allQ) {
        if (!q.id) fail(`question missing id: ${JSON.stringify(q).slice(0, 80)}`);
        if (!q.q) fail(`${q.id} missing q text`);
        if (!topicIds.has(q.topic)) fail(`${q.id} unknown topic '${q.topic}'`);
        if (q.diagram) {
            if (typeof q.diagram !== "object") fail(`${q.id} diagram must be an object`);
            if (!q.diagram.svg || typeof q.diagram.svg !== "string") fail(`${q.id} diagram missing svg`);
            if (!q.diagram.alt || typeof q.diagram.alt !== "string") fail(`${q.id} diagram missing alt`);
        }
        if (q.options) {
            if (!Array.isArray(q.options) || q.options.length < 2) fail(`${q.id} bad options`);
            if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length) {
                fail(`${q.id} bad answer index: ${q.answer}`);
            }
        } else if (!q.sample) {
            fail(`${q.id} written question missing sample`);
        }
    }

    for (const list of [practiceExams, mocks]) {
        for (const exam of list) {
            const missing = (exam.questionIds || []).filter(qid => !byId[qid]);
            if (missing.length) fail(`${exam.id} (${exam.name}) references missing IDs: ${missing.join(", ")}`);
            if (!exam.id || !exam.name || !Array.isArray(exam.questionIds)) {
                fail(`bad exam structure: ${JSON.stringify(exam).slice(0, 80)}`);
            }
        }
    }

    if (mocks.length !== 5) fail(`mocks count = ${mocks.length} (expected 5)`);
    for (const mock of mocks) {
        const counts = { mcq: 0, short: 0, long: 0 };
        for (const qid of mock.questionIds) {
            if (mcqSet.has(qid)) counts.mcq++;
            else if (shortSet.has(qid)) counts.short++;
            else if (longSet.has(qid)) counts.long++;
        }
        if (counts.mcq !== 20 || counts.short !== 10 || counts.long !== 2) {
            fail(`mock ${mock.id} composition: ${counts.mcq} MCQ + ${counts.short} SA + ${counts.long} LA (expected 20+10+2)`);
        }
    }

    if (Array.isArray(subject.practiceTopics)) {
        for (const topic of subject.practiceTopics) {
            if (!topic.id || !topic.name || !Array.isArray(topic.sourceTopics)) {
                fail(`practice topic missing fields: ${JSON.stringify(topic).slice(0, 80)}`);
            }
            for (const sourceTopic of topic.sourceTopics || []) {
                if (!topicIds.has(sourceTopic)) fail(`practice topic ${topic.id} references unknown sourceTopic '${sourceTopic}'`);
            }
        }
    }

    if (SUPPORT_SUBJECT_IDS.has(id)) {
        if (!Array.isArray(subject.learningGuides) || !subject.learningGuides.length) {
            fail(`${id} missing learningGuides`);
        } else {
            const guideIds = new Set();
            for (const guide of subject.learningGuides) {
                if (!guide.id) fail(`${id} learning guide missing id`);
                if (guideIds.has(guide.id)) fail(`${id} duplicate learning guide id '${guide.id}'`);
                guideIds.add(guide.id);
                if (!guide.title) fail(`${id} learning guide ${guide.id || "(missing id)"} missing title`);
                if (!guide.topicId || !topicIds.has(guide.topicId)) fail(`${id} learning guide ${guide.id || "(missing id)"} has unknown topicId '${guide.topicId}'`);
                if (!guide.intro || typeof guide.intro !== "string") fail(`${id} learning guide ${guide.id || "(missing id)"} missing intro`);
                if (!Array.isArray(guide.sections) || !guide.sections.length) {
                    fail(`${id} learning guide ${guide.id || "(missing id)"} missing sections`);
                } else {
                    guide.sections.forEach((section, index) => {
                        if (!section || typeof section !== "object") fail(`${id} learning guide ${guide.id || "(missing id)"} section ${index} is invalid`);
                        if (!section.heading || typeof section.heading !== "string") fail(`${id} learning guide ${guide.id || "(missing id)"} section ${index} missing heading`);
                        const hasBody = typeof section.body === "string" && section.body.trim();
                        const hasPoints = Array.isArray(section.points) && section.points.length;
                        if (!hasBody && !hasPoints) fail(`${id} learning guide ${guide.id || "(missing id)"} section ${index} needs body or points`);
                    });
                }
                if (guide.quickChecks !== undefined) {
                    if (!Array.isArray(guide.quickChecks)) fail(`${id} learning guide ${guide.id || "(missing id)"} quickChecks must be an array`);
                    else if (!guide.quickChecks.every(item => typeof item === "string" && item.trim())) fail(`${id} learning guide ${guide.id || "(missing id)"} quickChecks contain invalid entries`);
                }
            }

            for (const q of allQ) {
                if (!q.support || typeof q.support !== "object") {
                    fail(`${q.id} missing support metadata`);
                    continue;
                }
                if (!q.support.hint || typeof q.support.hint !== "string") fail(`${q.id} missing support hint`);
                if (!q.support.guideId || !guideIds.has(q.support.guideId)) fail(`${q.id} has invalid support guideId '${q.support.guideId}'`);
            }
        }
    }
}

if (problems) {
    console.error(`\n❌ ${problems} validation issue(s) found.`);
    process.exit(1);
}

console.log("\n✅ All data validates.");
