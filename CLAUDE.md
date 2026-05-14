# Harper's Study Guide — agent instructions

## Project context

A static, single-page web app that helps **Harper** (Year 9, Norwest Christian
College, NSW Australia) revise for her Term 2 2026 half-yearly exams. Plain
HTML / CSS with vanilla browser JS/TS. **No framework, no bundler** — the app
still uses ordered `<script>` tags in `index.html`, but the repo now has a
lightweight TypeScript transpile step (`npm run build`) that emits deployable
files into `_site/`.

The app covers four subjects (Commerce, English Advanced, Geography, Maths
Pathway-to-Advanced), with content aligned to the Norwest 2026 Year 9
Assessment Handbook (`handbook/`). Harper's class-specific scope:

- **Commerce** — Topics 1 & 2 (Consumer & Financial Decisions; Economic &
  Business Environment). Outcomes COM5-1, COM5-2, COM5-8, COM5-9.
- **English** — close study of *Little Women* by Louisa May Alcott (NOT
  Romeo & Juliet — the handbook lists it but Harper's class doesn't do it).
  Outcomes EN5-RVL-01, EN5-URB-01, EN5-ECA-01.
- **Geography** — Human Wellbeing (25%) + Environmental Change & Management
  (15%, **wind-power-focused** for Harper's class). Outcomes GE5-APC-02,
  GE5-COM-02, GE5-PER-02.
- **Maths Pathway to Advanced** — outcomes MA5-IND-C-01, IND-P-01, IND-P-02,
  MAG-C-01, ALG-C-01, EQU-C-01, EQU-P-01, EQU-P-02, LIN-C-01, LIN-C-02,
  LIN-P-01, TRG-C-01, TRG-C-02. **No financial maths** — that comes later in
  the year.

The whole thing is intentionally cat-themed because Harper loves cats. Cats
are central to the UX: encouragement pop-ins, a 100-cat collectible **Cat
Clan** earned by scoring 100% on exams, three cat-themed break games (Catris,
Cat Invaders, Catanoid), and a Park mini-game.

## Tech stack

- Vanilla browser JS/TS (ES2018+: async/await, optional chaining, template literals)
- Plain CSS, light/dark mode via `prefers-color-scheme`
- `localStorage` for persistence (key: `harper-studyguide-v1`)
- Hash-based routing (`#/subject/maths`, `#/clan`, `#/break/catris`, …)
- Inline SVG for cat illustrations; Canvas for the three break games
- Google Gemini API for AI-marking (key supplied by the user via Settings)
- TypeScript compiler + small Node build scripts for transpilation and deployment

## File layout

| File | Purpose |
|------|---------|
| `index.html` | Page shell + nav + `<script>` includes (load order matters) |
| `styles.css` | All styles (single file, organised by section comments) |
| `app.js` | Router, state, all view renderers, quiz engine |
| `cats.js` | `window.Cats` — `svg(expr, theme)`, `breedSvg(appearance, expr)`, `tetrisFace(appearance)`, `popIn(opts)`, `celebrate(ratio)` |
| `clan.js` | `window.Clan` — 100-cat catalog (`BREEDS`), `findBreed`, `pickCandidates`, `currentHappiness`, `moodFor`, `reactionPhrase` |
| `park.js` | `window.Park.start(root, cats, opts)` — Park mini-game |
| `break.js` | `window.BreakSession` — 5-minute timer shared across all 3 break games. Also `window.drawCanvasCat(ctx, x, y, size, opts)` for canvas cats |
| `tetris.js` | `window.CatTetris.start/stop` — Catris |
| `invaders.js` | `window.CatInvaders.start/stop` — Cat Invaders |
| `catanoid.js` | `window.Catanoid.start/stop` — Catanoid |
| `danger-noodle.js` | `window.DangerNoodle.start/stop` — Danger Noodle |
| `ai.js` | `window.AI.markAnswer/testKey/getDiscoveredModel` — Gemini integration |
| `calculator.js` | `window.Calc.open/close` — scientific calculator (shunting-yard, no `eval`) |
| `data/{subject}.js` | Per-subject question banks (`window.SUBJECT_DATA[id]`) |
| `types/globals.d.ts` | Ambient typings for gradual TypeScript adoption |
| `handbook/` | Source PDF (NOT deployed — gitignored from `_site`) |
| `package.json` / `tsconfig.json` | Build configuration for the TypeScript transpile step |
| `.github/scripts/build-site.cjs` | Copies static assets and transpiles `.ts` sources into `_site/` |
| `.github/scripts/verify-script-paths.cjs` | Verifies script-tag targets in source and build output |
| `.github/workflows/deploy.yml` | GitHub Pages deploy |
| `.github/scripts/validate-data.cjs` | CI data validator |

## Module convention

Every browser source file (`.js` or `.ts`) follows this IIFE-with-window-export pattern:

```ts
(function () {
    "use strict";
    // private helpers
    function helper() { ... }
    // public surface
    window.MyModule = { foo, bar };
})();
```

Files are loaded in dependency order in `index.html`. **`app.js` is always
last** because it depends on everything else. `index.html` continues to point
to emitted `.js` paths, so a browser source file may be authored as `.ts` only
if the build emits the matching `.js` file before runtime/deploy.

## State shape

`localStorage["harper-studyguide-v1"]` holds one big JSON object. The shape
is defined by `defaultState()` in `app.js`. New fields go through
`migrateState()` so existing user data isn't wiped.

```js
{
  subjects: {
    commerce: {
      attempts: { [qid]: { answer, correct, attempts } },     // canonical q.id
      quizSessions: [ { mode, score, total, date } ],         // per-attempt history
      bestScores: { [examId]: ratio },
      examProgress: {                                          // per-exam saved state
        [examId]: {
          answers: { [sessionKey]: { user, userText, correct, locked, revealed, aiFeedback } },
          finished, completedAt, lastScore,
          timer: { durationMs, elapsedMs, lastResumeAt, autoSubmitted }   // mocks only
        }
      }
    }, english: {...}, geography: {...}, maths: {...}
  },
  settings: { customName, geminiApiKey, reducedMotion },
  stats: { totalAnswered, totalCorrect, currentStreak, bestStreak },
  clan: { cats: [{ breedId, name, dateISO, lastInteractedISO, happiness }],
          claimTickets, perfectExams: { [examId]: true } },
  breaks: { lastBreakStartISO, catrisHighScore, invadersHighScore, catanoidHighScore }
}
```

## Critical conventions

### `keyOf(q)` for session answers, `q.id` for canonical history

The practice-exam generator allows duplicate question IDs within a single
exam (when a topic's pool is small). **Never** key `session.answers` by
`q.id` — use `keyOf(q)` which returns a per-position session key
(`${index}-${q.id}`). The same is true for `examProgress[examId].answers`.

`subjState.attempts[q.id]` (the per-question history dictionary) **does** use
the canonical id because we want it to aggregate across positions and
attempts.

This is a real bug we already shipped once — search for `keyOf(q)` before
introducing any `session.answers[q.id]`.

### Practice quizzes are generated at boot

`generatePracticeExams()` in `app.js` runs once on load and replaces every
subject's `practiceExams` with a fresh deterministic list built from
`practiceTopics`. Each exam = `PRACTICE_MCQ` + `PRACTICE_SA` + `PRACTICE_LA`
(currently 14 + 5 + 1 = 20). The default is 10 quizzes per topic, but a
topic can override that with `setCount`. **Don't hand-author
`practiceExams`** — define `practiceTopics` and let the generator do it.

When expanding generated practice-quiz counts, keep the change **append-only**.
`bestScores` and `examProgress` are keyed by `examId`, so existing generated
IDs must stay stable; add new higher-numbered sets via `setCount` instead of
renaming, renumbering, or reshuffling existing ones.

### Mock exam structure is hand-curated

Each subject's `mockExams: []` is hand-listed with explicit `questionIds`.
**Composition must be exactly 20 MCQ + 10 SA + 2 LA = 32**, validated by CI
(`.github/scripts/validate-data.cjs`).

### Lock-in for Practice and Mock both

Both modes use lock-in answers — the user can't change an answer once it's
been placed. The flag is `session.isLockMode = !!session.exam`. Only mocks
have `session.isMock = true`. Mocks additionally suppress feedback, hide
help, and run a timer.

### Mock timer pause/resume

The mock timer lives at `examProgress[mockId].timer` and is **paused** when
the router detects navigation away from the same mock-quiz route, then
**resumed** when re-entered. Auto-submits when `elapsedMs >= durationMs`. See
`startMockTimer`, `pauseMockTimer`, `tickMockTimer`, `mockTotalElapsed`.

### Custom name substitution

`state.settings.customName` defaults to "Harper" but can be changed in
Settings. Where it appears:

- The brand line in `index.html` has `<span data-name>Harper</span>` — at
  boot, `applyCustomName()` rewrites every `[data-name]` element.
- The `renderHome()` greetings array uses `customName()` directly.

Do **NOT** apply the custom name to cat backstories — they're prose data and
substitutions read awkwardly mid-paragraph.

### AI marking — Gemini specifics

- The `-latest` model aliases (`gemini-1.5-flash-latest`) are deprecated on
  v1beta and return 404. **Use auto-discovery** via `discoverModel()` which
  calls `ListModels` first then falls back to a candidate list.
- **Gemini 2.5 has internal "thinking" enabled by default** which consumes
  the output token budget *before* any output is emitted. Always send
  `thinkingConfig: { thinkingBudget: 0 }` plus `maxOutputTokens >= 2048`.
  Older models that don't recognise the field cause a 400 — `ai.js` already
  handles that with a transparent retry without `thinkingConfig`.
- Always send a strict `responseSchema` so the model produces valid JSON
  matching `{ assessment, suggestedMark, feedback, missingPoints }`.
- The parser has 5 fallback passes (strict JSON, fences-stripped, regex
  block, brace-balancing repair, regex field extraction). **Don't simplify
  it** — Gemini sometimes truncates and the fallbacks recover.
- Practice quizzes: AI marking is **on-demand** (a button per question).
  Mock exams: AI marking is **automatic** at submit (sequential, with progress
  UI). Both cache results in `examProgress.answers[k].aiFeedback` so retakes
  don't re-spend quota.
- **Never** hard-code an API key. Settings stores the user's key in
  `state.settings.geminiApiKey`. Empty key → AI button shows
  "Set up AI marking" and routes to `#/settings` on click.

### Cat catalog (100 cats)

`clan.js` defines:
- 18 hand-crafted cats with unique phrases and detailed personalities
- `_generateAdditionalCats(100)` produces 82 more by deterministically
  shuffling names + backstories + colour-tweaked appearances + archetype
  phrase pools (drawn from the 18 hand-crafted cats)
- All 100 have a `backstory` string

When adding a new breed template, follow the existing schema:
`{ id, breed, origin, defaultName, altNames, rarity, appearance, archetype,
   traits, stats, phrases: { pet, play, treat, chat }, funFact, backstory }`.

### Cat appearance rendering

`cats.js` exposes three renderers:
- `svg(expression, theme)` — simple coloured cat from a 4-palette set (used
  by encouragement pop-ins, results screens). Themes: `ginger`, `grey`,
  `cream`, `black`.
- `breedSvg(appearance, expression)` — full-body cat from a breed appearance
  object. Used in the clan, claim, cat-detail, park.
- `tetrisFace(appearance)` — head-only version sized for a Tetris cell.

Appearance schema: `{ primary, secondary, accent, eyeColor, pattern, fluff,
earStyle, tail, noseColor, calicoColors? }`. Patterns: `solid`, `stripes`,
`tuxedo`, `calico`, `tortie`, `points`, `spots`. Ears: `normal`, `folded`,
`tufted`, `big`, `small`, `curl`. Fluff: `short`, `medium`, `long`,
`hairless`. Tail: `long`, `short`, `none`.

### Break section — shared 5-minute timer

The three break games (Catris, Cat Invaders, Catanoid) **share a single
`BreakSession`** in `break.js`. Switching games keeps the same timer.
Important: each game's `stop()` does NOT end the session. Only the router
ends the session (when navigating away from `/break/*`) and the End Break
button on the hub.

The 5-minute timer is a **soft cap** — when it hits zero each game shows
"Overtime!" but keeps playing until the player loses (per Harper's request,
so good runs aren't cut off).

There's also a **30-minute cooldown** between break sessions, enforced via
`state.breaks.lastBreakStartISO`.

### Catris cells use SVG cat faces, not emoji

We tried emoji cells and Windows rendered the cat-face glyphs as half-tofu.
**Always inline SVG for cell content.** `tetris.js` defines 7 piece-to-breed
mappings rendered via `Cats.tetrisFace()`.

### Calculator uses shunting-yard, no `eval`

`calculator.js` is a self-contained scientific calculator with a hand-rolled
shunting-yard tokeniser + RPN evaluator. **Never use `eval` or `Function`**
to parse user-entered expressions.

## Anti-patterns / things we've burned time on

- **`session.answers[q.id]`** — wrong. Use `session.answers[keyOf(q)]`.
- **Emoji in canvas/cells** — Windows tofu. Use SVG.
- **`gemini-*-latest` model names** — deprecated. Use the discovery path.
- **`maxOutputTokens: 600` with Gemini 2.5** — gets eaten by thinking. Use
  2048 + `thinkingConfig: { thinkingBudget: 0 }`.
- **`display: flex` on something with the `hidden` attribute** — `display`
  wins the cascade fight. Add `[hidden] { display: none !important }`.
- **Hard-coding the file list in `deploy.yml`** — gets out of date. Use
  `*.js` glob and the `<script src>` verifier step.
- **`aspect-ratio: 10/20` on a grid** — works in some browsers, wrong in
  others. Use explicit `--cell` size with `grid-template-columns: repeat(N, var(--cell))`.
- **CSS `display: ...` rules that override `[hidden]`** — always pair
  with an `[hidden] { display: none !important }` rule.
- **Practice generator producing duplicate q.id within an exam** — fine,
  expected. But every consumer must use `keyOf(q)`.
- **Confirming destructive actions with a single-line `confirm()`** — Harper
  could lose her clan. Use the `showResetWarning()` modal pattern with a
  required checkbox.

## Common tasks — recipes

### Add a new question to a subject

Edit `data/{subject}.js`. Append to `mcqs`, `short`, or `long` array. Mind
the schema:

```js
// MCQ
{ id: "c-mcq-103", topic: "consumer-rights",
  q: "...", options: [...], answer: 0,
  explain: "..." }

// Short
{ id: "c-sa-19", topic: "...", marks: 4,
  q: "...", sample: "..." }

// Long
{ id: "c-la-7", topic: "...", marks: 10,
  q: "...", sample: "..." }
```

If the subject is **maths**, also add a `help: { rule, steps }` object — the
last entry of `steps` is the heuristic answer-step.

Validate: `node .github/scripts/validate-data.cjs`.

### Add a new mock exam

Edit `data/{subject}.js`, append to `mockExams: []`. Composition must be
**exactly 20 MCQ + 10 SA + 2 LA**:

```js
{
  id: "mock-6",
  name: "Mock Exam 6",
  focus: "...",
  duration: 60,                    // minutes
  questionIds: [ /* 20 mcq */, /* 10 sa */, /* 2 la */ ]
}
```

CI will fail if the composition is off.

### Add a new practice topic

Edit `data/{subject}.js`, append to `practiceTopics: []`:

```js
{ id: "new-topic",
  name: "Display name",
  outcomes: "MA5-...",
  sourceTopics: ["existing-topic-id-1", "existing-topic-id-2"],
  setCount: 10 }   // optional; defaults to 10
```

Each `sourceTopics` entry must match an existing `topics[].id` in the same
subject. The generator builds 10 quizzes from this topic at next boot unless
`setCount` overrides it. If you increase the count later, extend it
append-only so existing `examId`s — and therefore student progress — remain
unchanged.

### Add a new cat breed

Edit `clan.js`, append to the `BREEDS` array (before the
`_generateAdditionalCats` call). Follow the full schema. The IIFE pushes
your new breed before the generator runs, so generator entries can use it
as a template too.

### Add a new break game

1. Create `mygame.js` with `window.MyGame.start(root, opts)` and `stop()`.
2. Use `window.BreakSession` for the timer (don't roll your own).
3. Add `<script src="mygame.js">` to `index.html` (after `break.js`).
4. Append to `BREAK_GAMES` in `app.js`.
5. Add `state.breaks.mygameHighScore: 0` in `defaultState`.
6. Add a route handler: `if (route[1] === "mygame") return renderBreakGame(root, "mygame")`.
7. Wire `getHighScore` / `onHighScore` via `highScoreFor` / `setHighScoreFor`.
8. Make sure `stop()` is called from the router cleanup block.

### Add a new settings field

1. Add to `defaultState().settings`.
2. Add a migration line in `migrateState()`.
3. Add the form field in `renderSettings()`.
4. Wire a save handler.

## Validation & deployment

### Local verification

```bash
npm ci
npm run check
```

This checks:
- Source JavaScript syntax
- Source and built `<script src>` resolution
- The TypeScript transpile step into `_site/`
- Every question has `id`, `q`, `topic`, valid options/answer or sample
- Every `practiceTopics[].sourceTopics` references a real topic
- Every mock has 20+10+2 composition
- Every exam-referenced question id exists

### CI / Deploy

Push to `main`. `.github/workflows/deploy.yml`:

1. Installs the Node/TypeScript toolchain with `npm ci`
2. Syntax-checks source JavaScript
3. **Verifies every `<script src>` in `index.html` resolves in source**
   (allowing `.ts` source counterparts for emitted `.js` targets)
4. Builds `_site/` via the TypeScript transpile step
5. Validates question banks against built assets
6. Verifies built script targets
7. Uploads `_site/` to GitHub Pages

Prerequisite (one-time): repo Settings → Pages → Source = "GitHub Actions".

## Plan / Auto mode behaviour

- **In plan mode**: write to the assigned plan file only; ask clarifying
  questions via `AskUserQuestion` for genuine ambiguity; finish with
  `ExitPlanMode`.
- **In auto mode**: execute, minimise interruptions, prefer action over
  planning. Multi-step features should still update the task list.
- **Reset progress is destructive** — always go through the warning modal
  pattern (`showResetWarning`) with a required checkbox + native confirm.
  Same for "Load state from file".

## Style and tone (user-facing strings)

The user-facing UI is **deliberately full of cat puns and emojis**: "Pawsome
work!", "Meow-velous!", "🐾 My Clan", "📝 Mock Exam". This is part of the
product. When adding new strings, lean into the cat theme.

But: don't add emojis to **agent communication** unless the user asks for
them in chat replies. The instruction files and code comments stay plain.

## Things the user has explicitly asked for

- **Cat-themed everything.**
- **Soft 5-minute break timer** that lets a successful game continue past
  the cap.
- **30-minute cooldown** between breaks.
- **AI marking on-demand for practice**, automatic for mocks.
- **Practice answers preload unlocked** on re-attempt (so Harper can change
  answers).
- **Mocks lock in answers** and hide help/feedback during the test.
- **Mock results delivered as a clean Exam Report** at the end (with AI
  feedback for written answers).
- **Custom name in Settings** affects greetings and the brand bar — NOT cat
  backstories.
- **No runtime dependencies** beyond the user's optional Gemini key. The app
  must work offline aside from AI marking.
- **Keep it a static site.** Use the lightweight TypeScript transpile step;
  don't introduce bundling or frameworks.
