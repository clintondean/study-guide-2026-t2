// Validate question banks and exam compositions before deploying.
// Runs in CI; exits non-zero on any structural issue.

const fs = require('fs');
const path = require('path');
const window = {};
const root = path.join(__dirname, '..', '..');
const files = ['data/commerce.js', 'data/english.js', 'data/geography.js', 'data/geography-7.js', 'data/maths.js', 'data/maths-core.js', 'data/music-7.js', 'data/science.js', 'data/science-9.js'];
for (const f of files) eval(fs.readFileSync(path.join(root, f), 'utf8'));

let problems = 0;
const SUPPORT_SUBJECT_IDS = new Set(['science', 'geography-7', 'music-7']);
const log = (...args) => { console.log(...args); };
const fail = (msg) => { problems++; console.error('  ⚠ ' + msg); };

for (const id of Object.keys(window.SUBJECT_DATA)) {
    const s = window.SUBJECT_DATA[id];
    const allQ = [].concat(s.mcqs || [], s.short || [], s.long || []);
    const byId = Object.create(null);
    allQ.forEach(q => byId[q.id] = q);
    const mcqSet = new Set((s.mcqs || []).map(q => q.id));
    const shortSet = new Set((s.short || []).map(q => q.id));
    const longSet = new Set((s.long || []).map(q => q.id));
    const topicIds = new Set(s.topics.map(t => t.id));
    const mocks = s.mockExams || [];
    const practiceExams = s.practiceExams || [];

    log(`\n[${id}] ${s.name}`);
    log(`   MCQ:${(s.mcqs || []).length} short:${(s.short || []).length} long:${(s.long || []).length}`);
    log(`   practice exams: ${practiceExams.length} | mock exams: ${mocks.length}`);

    for (const q of allQ) {
        if (!q.id) fail(`question missing id: ${JSON.stringify(q).slice(0, 80)}`);
        if (!q.q) fail(`${q.id} missing q text`);
        if (!topicIds.has(q.topic)) fail(`${q.id} unknown topic '${q.topic}'`);
        if (q.diagram) {
            if (typeof q.diagram !== 'object') fail(`${q.id} diagram must be an object`);
            if (!q.diagram.svg || typeof q.diagram.svg !== 'string') fail(`${q.id} diagram missing svg`);
            if (!q.diagram.alt || typeof q.diagram.alt !== 'string') fail(`${q.id} diagram missing alt`);
        }
        if (q.options) {
            if (!Array.isArray(q.options) || q.options.length < 2) fail(`${q.id} bad options`);
            if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
                fail(`${q.id} bad answer index: ${q.answer}`);
            }
        } else if (!q.sample) {
            fail(`${q.id} written question missing sample`);
        }
    }

    for (const list of [practiceExams, mocks]) {
        for (const e of list) {
            const missing = e.questionIds.filter(qid => !byId[qid]);
            if (missing.length) fail(`${e.id} (${e.name}) references missing IDs: ${missing.join(', ')}`);
            if (!e.id || !e.name || !Array.isArray(e.questionIds)) fail(`bad exam structure: ${JSON.stringify(e).slice(0, 80)}`);
        }
    }

    if (mocks.length !== 5) fail(`mocks count = ${mocks.length} (expected 5)`);
    for (const m of mocks) {
        const counts = { mcq: 0, short: 0, long: 0 };
        for (const qid of m.questionIds) {
            if (mcqSet.has(qid)) counts.mcq++;
            else if (shortSet.has(qid)) counts.short++;
            else if (longSet.has(qid)) counts.long++;
        }
        if (counts.mcq !== 20 || counts.short !== 10 || counts.long !== 2) {
            fail(`mock ${m.id} composition: ${counts.mcq} MCQ + ${counts.short} SA + ${counts.long} LA (expected 20+10+2)`);
        }
    }

    // Validate practiceTopics (subjects using the generator)
    if (Array.isArray(s.practiceTopics)) {
        for (const t of s.practiceTopics) {
            if (!t.id || !t.name || !Array.isArray(t.sourceTopics)) {
                fail(`practice topic missing fields: ${JSON.stringify(t).slice(0,80)}`);
            }
            for (const st of t.sourceTopics || []) {
                if (!topicIds.has(st)) fail(`practice topic ${t.id} references unknown sourceTopic '${st}'`);
            }
        }
    }

    if (SUPPORT_SUBJECT_IDS.has(id)) {
        if (!Array.isArray(s.learningGuides) || !s.learningGuides.length) {
            fail(`${id} missing learningGuides`);
        } else {
            const guideIds = new Set();
            for (const guide of s.learningGuides) {
                if (!guide.id) fail(`${id} learning guide missing id`);
                if (guideIds.has(guide.id)) fail(`${id} duplicate learning guide id '${guide.id}'`);
                guideIds.add(guide.id);
                if (!guide.title) fail(`${id} learning guide ${guide.id || '(missing id)'} missing title`);
                if (!guide.topicId || !topicIds.has(guide.topicId)) fail(`${id} learning guide ${guide.id || '(missing id)'} has unknown topicId '${guide.topicId}'`);
                if (!guide.intro || typeof guide.intro !== 'string') fail(`${id} learning guide ${guide.id || '(missing id)'} missing intro`);
                if (!Array.isArray(guide.sections) || !guide.sections.length) {
                    fail(`${id} learning guide ${guide.id || '(missing id)'} missing sections`);
                } else {
                    guide.sections.forEach((section, index) => {
                        if (!section || typeof section !== 'object') fail(`${id} learning guide ${guide.id || '(missing id)'} section ${index} is invalid`);
                        if (!section.heading || typeof section.heading !== 'string') fail(`${id} learning guide ${guide.id || '(missing id)'} section ${index} missing heading`);
                        const hasBody = typeof section.body === 'string' && section.body.trim();
                        const hasPoints = Array.isArray(section.points) && section.points.length;
                        if (!hasBody && !hasPoints) fail(`${id} learning guide ${guide.id || '(missing id)'} section ${index} needs body or points`);
                    });
                }
                if (guide.quickChecks !== undefined) {
                    if (!Array.isArray(guide.quickChecks)) fail(`${id} learning guide ${guide.id || '(missing id)'} quickChecks must be an array`);
                    else if (!guide.quickChecks.every(item => typeof item === 'string' && item.trim())) fail(`${id} learning guide ${guide.id || '(missing id)'} quickChecks contain invalid entries`);
                }
            }

            for (const q of allQ) {
                if (!q.support || typeof q.support !== 'object') {
                    fail(`${q.id} missing support metadata`);
                    continue;
                }
                if (!q.support.hint || typeof q.support.hint !== 'string') fail(`${q.id} missing support hint`);
                if (!q.support.guideId || !guideIds.has(q.support.guideId)) fail(`${q.id} has invalid support guideId '${q.support.guideId}'`);
            }
        }
    }
}

if (problems) {
    console.error(`\n❌ ${problems} validation issue(s) found.`);
    process.exit(1);
}
console.log('\n✅ All data validates.');
