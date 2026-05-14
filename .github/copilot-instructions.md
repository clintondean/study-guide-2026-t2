# Copilot instructions — Harper's Study Guide

Repository-wide rules for GitHub Copilot when generating, completing, or
reviewing code in this project. Read these before suggesting code.

## What this is

A static, single-page web app helping Harper (Year 9, Norwest Christian
College, NSW Australia) revise for her Term 2 2026 half-yearly exams in
Commerce, English Advanced, Geography, and Maths Pathway-to-Advanced.
Cat-themed by design.

**Plain HTML/CSS with vanilla browser JS/TS. No framework. No bundler.**
Files are still loaded via ordered `<script>` tags in `index.html`, but the
repo now uses a lightweight TypeScript transpile step (`npm run build`) to
emit deployable `.js` files into `_site/` for GitHub Pages.

## Stack constraints

- Vanilla browser JavaScript/TypeScript only — no React/Vue/Svelte/jQuery/etc.
- Plain CSS — no preprocessor, no Tailwind, no PostCSS.
- ES2018+ syntax is fine (async/await, optional chaining, template
  literals). Use TypeScript syntax only in `.ts` files; keep `.js` files
  valid plain JavaScript.
- `localStorage` for persistence; key is `harper-studyguide-v1`.
- Hash-based routing (`window.location.hash`).
- The only runtime external API call is to Google Gemini (when the user
  supplies their own key in Settings). Keep runtime dependencies at zero; the
  build toolchain should stay lightweight and TypeScript-focused.

## Module pattern (use this for every browser source file)

```ts
(function () {
    "use strict";
    function privateHelper() { /* … */ }
    function publicFn() { /* … */ }
    window.MyModule = { publicFn };
})();
```

Don't introduce browser ES modules (`import`/`export`) — the app still uses
classic ordered scripts and global `window.*` exports. Add browser entry files
via a `<script src="…">` line in `index.html`, keep `app.js` loaded last, and
remember that `index.html` continues to reference emitted `.js` paths even
when a source file is authored as `.ts`.

## File map

| File | Public surface |
|------|----------------|
| `app.js` | Router, state, all view renderers, quiz engine. Loaded last. |
| `cats.js` | `window.Cats.{ svg, breedSvg, tetrisFace, popIn, celebrate, phrases, themes }` |
| `clan.js` | `window.Clan.{ BREEDS, findBreed, pickCandidates, totalBreeds, reactionPhrase, currentHappiness, moodFor }` |
| `park.js` | `window.Park.{ start, stop }` — Park mini-game |
| `break.js` | `window.BreakSession.{ start, end, elapsed, remaining, isActive, hasExpired, BREAK_MS }` plus `window.drawCanvasCat` |
| `tetris.js` | `window.CatTetris.{ start, stop }` (Catris) |
| `invaders.js` | `window.CatInvaders.{ start, stop }` |
| `catanoid.js` | `window.Catanoid.{ start, stop }` |
| `danger-noodle.js` | `window.DangerNoodle.{ start, stop }` |
| `ai.js` | `window.AI.{ markAnswer, testKey, isAvailable, getDiscoveredModel }` |
| `calculator.js` | `window.Calc.{ open, close, isOpen }` |
| `data/{subject}.js` | Populates `window.SUBJECT_DATA[id]` for one of `commerce`, `english`, `geography`, `maths` |
| `types/globals.d.ts` | Ambient browser/global typings for gradual TypeScript adoption |
| `.github/scripts/build-site.cjs` | Copies static assets and transpiles any `.ts` sources into `_site/` |
| `.github/scripts/verify-script-paths.cjs` | Verifies script tags resolve in source and build output |
| `handbook/` | Source PDF — never deployed, never modified |

## Critical conventions — DO

### Use `keyOf(q)` for `session.answers`

```js
const k = keyOf(q);
const ans = session.answers[k];
```

The practice-exam generator allows duplicate `q.id`s in a single exam (when
a topic pool is small). `keyOf(q)` returns a unique per-position session key
(`"${index}-${q.id}"`). **`session.answers[q.id]` is wrong** and was a
shipped bug.

### Use `q.id` for `subjState.attempts`

The per-question history dictionary aggregates across exams and positions,
so it correctly uses the canonical id:

```js
subjState.attempts[q.id] = { answer, correct, attempts: prior + 1 };
```

### Use `escapeHtml` and `renderText` for any user / data string in HTML

```js
container.innerHTML = `<p>${escapeHtml(userInput)}</p>`;
container.innerHTML = `<div class="prompt">${renderText(q.q)}</div>`;
```

`renderText` also converts `\n` to `<br>`. Both live in `app.js`.

### Pair `display: …` rules with `[hidden]` reset

```css
.my-overlay { display: flex; … }
.my-overlay[hidden] { display: none !important; }
```

Without the second rule, the HTML `hidden` attribute is overridden by
`display: flex`. We've shipped this bug before (Catris semi-transparent
black layer over the playfield).

### Use SVG, not emoji, for cell/canvas content

Windows substitutes some emoji glyphs (especially cat faces 😺😻😼) with
half-rendered tofu, producing the "right half is black" symptom. Always
render visual content as inline SVG. `Cats.tetrisFace(appearance)` and
`window.drawCanvasCat(ctx, x, y, size, opts)` exist for this purpose.

### Persist exam answers via `examProgress`

Practice-quiz answers go through `persistAnswerForExam(q, snapshot)`
which writes to `state.subjects[id].examProgress[examId].answers[keyOf(q)]`.
Mock exam timer state lives at `examProgress[mockId].timer`.

On re-launching a practice exam, previous answers preload **unlocked** so
Harper can change them. On re-launching a mock, only resume if the previous
attempt was unfinished — otherwise start fresh.

### Generate practice quizzes; don't hand-write them

Each subject defines `practiceTopics: []`. `generatePracticeExams()` in
`app.js` runs at boot and produces a deterministic `practiceExams: []`. Each
exam is 20 questions = 14 MCQ + 5 short + 1 long (constants
`PRACTICE_MCQ`, `PRACTICE_SA`, `PRACTICE_LA`). The default is 10 quizzes per
topic, but a topic can override that with `setCount`. Don't hand-author
`practiceExams` directly — the boot-generator overwrites them.

When expanding generated practice-quiz counts, keep the change append-only.
`bestScores` and `examProgress` are keyed by `examId`, so existing generated
IDs must stay stable; add new higher-numbered sets via `setCount` instead of
renaming or renumbering existing ones.

### Hand-curate mock exams to a strict 20+10+2 composition

`mockExams: []` is hand-listed with explicit `questionIds`. CI fails the
build if the composition isn't exactly 20 MCQ + 10 SA + 2 LA. The validator
is `.github/scripts/validate-data.cjs`.

### Lock-in semantics

```js
session.isLockMode = !!session.exam;          // both Practice & Mock
session.isMock = !!(session.exam && session.exam.isMock);
```

Both Practice and Mock lock answers when committed (on Next press). Only
mocks additionally:
- Hide hints / help / sample-reveal / self-mark during the test
- Run a countdown timer
- Show a dedicated Exam Report at the end (with AI marking)

## Critical conventions — DON'T

| Don't | Do this instead |
|-------|-----------------|
| Use `eval` or `new Function(userInput)` | Hand-roll a parser. `calculator.js` already has a shunting-yard tokeniser + RPN evaluator. |
| Hard-code a Gemini API key | Store in `state.settings.geminiApiKey`. Empty key disables AI features. |
| Use `gemini-1.5-flash-latest` | The `-latest` aliases are deprecated on `v1beta`. Call `discoverModel(apiKey)` from `ai.js`. |
| Send `maxOutputTokens` < 1500 to Gemini 2.5 | "Thinking" eats most of the budget. Use `>= 2048` and `thinkingConfig: { thinkingBudget: 0 }`. |
| Use a free-form prompt for AI marking | Always supply a strict `responseSchema` matching `{ assessment, suggestedMark, feedback, missingPoints }`. |
| Apply `customName` to cat backstories | Greetings & brand only. Backstories are prose. |
| Add framework dependencies or a bundler | This stays a static site. The only build dependency should remain the lightweight TypeScript toolchain unless the user asks otherwise. |
| Skip the `<script src>` verifier in `deploy.yml` | We shipped a 404 once because the workflow had a hard-coded file list. Keep the glob (`*.js`) and the verifier step. |
| Build with hard-coded canvas dimensions and no `max-height` | The app must work on laptop screens (768px tall). See the `@media (max-height: 800px)` and `(max-height: 680px)` clusters in `styles.css`. |

## State shape (read-only summary — see `defaultState()` in `app.js`)

```ts
{
  subjects: { [id]: {
    attempts: { [qid]: { answer, correct, attempts } },
    quizSessions: [ { mode, score, total, date } ],
    bestScores: { [examId]: number },
    examProgress: { [examId]: {
      answers: { [sessionKey]: {
        user?: number,        // MCQ index
        userText?: string,    // written
        correct: boolean,
        locked: boolean,
        revealed?: boolean,
        aiFeedback?: { assessment, suggestedMark, feedback, missingPoints, markedAt }
      } },
      finished: boolean,
      completedAt: string,
      lastScore: number,
      timer?: { durationMs, elapsedMs, lastResumeAt, autoSubmitted }   // mocks only
    } }
  } },
  settings: { customName, geminiApiKey, reducedMotion },
  stats: { totalAnswered, totalCorrect, currentStreak, bestStreak },
  clan: { cats: [], claimTickets, perfectExams: { [examId]: true } },
  breaks: { lastBreakStartISO, catrisHighScore, invadersHighScore, catanoidHighScore }
}
```

When adding new state, ALWAYS:
1. Add to `defaultState()`
2. Add a migration line in `migrateState()` so older saves get the field
3. Use `saveState()` (don't write to `localStorage` directly)

## Cat appearance schema (cats.js)

```ts
{
  primary: hex,         // body fur
  secondary: hex,       // belly
  accent: hex,          // stripes / shading
  eyeColor: hex,
  noseColor?: hex,
  pattern: "solid"|"stripes"|"tuxedo"|"calico"|"tortie"|"points"|"spots",
  fluff: "short"|"medium"|"long"|"hairless",
  earStyle: "normal"|"folded"|"tufted"|"big"|"small"|"curl",
  tail: "long"|"short"|"none",
  calicoColors?: [hex, hex]    // only for pattern: "calico"
}
```

## Subjects — what each one tests

This matters when authoring questions, AI prompts, and Mock Exam Report
copy.

| Subject | Scope | Outcomes |
|---------|-------|----------|
| Commerce | Topic 1: Consumer & Financial Decisions; Topic 2: Economic & Business Environment | COM5-1, COM5-2, COM5-8, COM5-9 |
| English Advanced | Close study of *Little Women* by Louisa May Alcott | EN5-RVL-01, EN5-URB-01, EN5-ECA-01 |
| Geography | Human Wellbeing (25%) + Environmental Change & Management (15%, **wind power** focus) | GE5-APC-02, GE5-COM-02, GE5-PER-02 |
| Maths Pathway to Advanced | Indices, surds, scientific notation, algebra, linear/quadratic equations, inequalities, simultaneous, linear graphs, trigonometry. **No financial maths.** | MA5-IND-C-01, IND-P-01, IND-P-02, MAG-C-01, ALG-C-01, EQU-C-01, EQU-P-01, EQU-P-02, LIN-C-01, LIN-C-02, LIN-P-01, TRG-C-01, TRG-C-02 |

## Style and tone

User-facing strings lean cat-pun: "Pawsome work!", "Meow-velous!",
"Cat-tastic effort!", "Hiss-toric performance!", "🐾 My Clan",
"📝 Mock Exam", "🐱 Catris". The cat-themed copy is part of the design —
keep it when adding new UI strings.

Don't change "Harper" in copy that uses it as a placeholder — that's the
custom-name token. Use template literals with `customName()`:

```js
`Hi ${customName()}! What shall we study?`
```

## Validation before commit

Run from the repo root:

```bash
npm ci
npm run check
```

`npm run build` emits deployable files into `_site/`. `npm run check` runs
source syntax checks, source/build script-path verification, the TypeScript
transpile step, and data validation against built assets. Keep those checks in
CI — they exist because we've already shipped each class of bug they catch.

## Common code patterns to suggest

### Render a confirmation modal for destructive actions

The pattern in `showResetWarning()` (app.js):
- Backdrop overlay with class `reset-modal-overlay`
- Required confirmation checkbox; the destructive button is `disabled`
  until checked
- Additional native `confirm()` last-chance for misclick safety
- Cancel button auto-focused on open
- Click-outside-to-cancel

Reuse this for any irreversible action (Reset progress, Load from file,
Delete a cat, etc.).

### Add a route

```js
// in render() inside the IIFE in app.js:
if (route[0] === "myroute") return renderMyRoute(root);
```

```js
// add to topbar nav in index.html:
<a href="#/myroute" data-nav="myroute">⚙️ My Route</a>
```

```js
// implement renderMyRoute(root) — no return value, just sets root.innerHTML
function renderMyRoute(root) {
    root.innerHTML = `<a class="back-link" href="#/">← Home</a> …`;
}
```

### Add encouragement on success

```js
window.Cats.popIn({
    expression: "cheering",       // or "wave", "proud", "thinking", "love", "happy", "napping"
    theme: window.Cats.pickTheme(),
    message: "Pawsome work!",
    duration: 2800,
    side: "left"                  // or "right"
});
```

### Persist a partial answer mid-question

```js
const k = keyOf(q);
session.answers[k] = session.answers[k] || { userText: "", correct: false };
session.answers[k].userText = newValue;
persistAnswerForExam(q, session.answers[k]);    // debounce in input handlers
```

### Test a Gemini key

```js
const ok = await window.AI.testKey(apiKey);  // throws on network/auth error
const model = window.AI.getDiscoveredModel(); // e.g. "gemini-2.5-flash"
```

## When uncertain

If a suggestion would:
- Add a new top-level dependency
- Introduce a new bundler or non-TypeScript build tool
- Use `eval` or `Function` on user input
- Change the state-shape without a migration
- Bypass the warning-modal pattern for a destructive action
- Hard-code an API key, secret, or PII
- Replace SVG cell content with emoji
- Hand-write `practiceExams` for a subject that has `practiceTopics`

…**don't suggest it.** Ask the user, or surface a comment explaining why
you've chosen the boring (correct) path.
