// Scientific calculator for Maths.
// Self-contained: parses with shunting-yard, evaluates RPN. No `eval`.
// Exposes window.Calc.{ open, close, isOpen }.

(function () {
    "use strict";

    let modal = null;
    let exprInput = null;
    let resultEl = null;
    let historyEl = null;
    let degRad = "DEG";   // "DEG" | "RAD"
    let invMode = false;  // toggles sin/asin etc.
    const HISTORY = [];

    function open() {
        if (modal) { exprInput.focus(); return; }
        modal = document.createElement("div");
        modal.className = "calc-overlay";
        modal.id = "calc-modal";
        modal.innerHTML = `
            <div class="calc-window" role="dialog" aria-label="Scientific calculator">
                <header class="calc-header">
                    <strong>🧮 Calculator</strong>
                    <div class="calc-modes">
                        <button type="button" class="calc-mode-btn" data-mode="degrad">${degRad}</button>
                        <button type="button" class="calc-mode-btn" data-mode="inv">${invMode ? "INV ●" : "INV"}</button>
                        <button type="button" class="calc-close-btn" id="calc-close">✕</button>
                    </div>
                </header>
                <div class="calc-history" id="calc-history">${renderHistory()}</div>
                <div class="calc-display">
                    <input id="calc-expr" type="text" autocomplete="off" spellcheck="false" placeholder="0">
                    <div class="calc-result" id="calc-result">&nbsp;</div>
                </div>
                <div class="calc-keys" id="calc-keys"></div>
            </div>
        `;
        document.body.appendChild(modal);
        exprInput = modal.querySelector("#calc-expr");
        resultEl = modal.querySelector("#calc-result");
        historyEl = modal.querySelector("#calc-history");
        renderKeys();
        wireEvents();
        setTimeout(() => exprInput.focus(), 30);
    }

    function close() {
        if (!modal) return;
        modal.remove();
        modal = null;
        exprInput = null;
    }

    function isOpen() { return !!modal; }

    function renderHistory() {
        if (!HISTORY.length) return `<div class="calc-history-empty">History will appear here.</div>`;
        return HISTORY.slice(-5).map(h => `<div class="calc-history-row" data-expr="${h.expr.replace(/"/g, "&quot;")}"><code>${h.expr}</code> = <strong>${h.result}</strong></div>`).join("");
    }

    function renderKeys() {
        // Each row is an array of buttons. Each button is { label, value, kind?, alt? }.
        // value is what's inserted into the expression (or a special command like "=").
        const sinLabel = invMode ? "sin⁻¹" : "sin";
        const cosLabel = invMode ? "cos⁻¹" : "cos";
        const tanLabel = invMode ? "tan⁻¹" : "tan";
        const sinFn = invMode ? "asin(" : "sin(";
        const cosFn = invMode ? "acos(" : "cos(";
        const tanFn = invMode ? "atan(" : "tan(";
        const rows = [
            [{ l: "AC", v: "AC", k: "ctrl" }, { l: "⌫", v: "BS", k: "ctrl" }, { l: "(", v: "(" }, { l: ")", v: ")" }, { l: "÷", v: "/", k: "op" }],
            [{ l: "7", v: "7" }, { l: "8", v: "8" }, { l: "9", v: "9" }, { l: "×", v: "*", k: "op" }, { l: "√", v: "sqrt(", k: "fn" }],
            [{ l: "4", v: "4" }, { l: "5", v: "5" }, { l: "6", v: "6" }, { l: "−", v: "-", k: "op" }, { l: "x²", v: "^2", k: "fn" }],
            [{ l: "1", v: "1" }, { l: "2", v: "2" }, { l: "3", v: "3" }, { l: "+", v: "+", k: "op" }, { l: "x^y", v: "^", k: "op" }],
            [{ l: "0", v: "0" }, { l: ".", v: "." }, { l: "±", v: "NEG", k: "ctrl" }, { l: "π", v: "pi" }, { l: "=", v: "=", k: "go" }],
            [{ l: sinLabel, v: sinFn, k: "fn" }, { l: cosLabel, v: cosFn, k: "fn" }, { l: tanLabel, v: tanFn, k: "fn" }, { l: "ln", v: "ln(", k: "fn" }, { l: "log", v: "log(", k: "fn" }]
        ];
        const keys = modal.querySelector("#calc-keys");
        keys.innerHTML = rows.map(row => `<div class="calc-row">${row.map(b => `
            <button type="button" class="calc-btn ${b.k ? "calc-" + b.k : ""}" data-val="${b.v}">${b.l}</button>
        `).join("")}</div>`).join("");
    }

    function wireEvents() {
        const keys = modal.querySelector("#calc-keys");
        keys.addEventListener("click", (e) => {
            const btn = e.target.closest(".calc-btn");
            if (!btn) return;
            handleInput(btn.dataset.val);
        });
        modal.querySelector("#calc-close").addEventListener("click", close);
        modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
        modal.querySelectorAll(".calc-mode-btn").forEach(b => {
            b.addEventListener("click", () => {
                const mode = b.dataset.mode;
                if (mode === "degrad") degRad = degRad === "DEG" ? "RAD" : "DEG";
                else if (mode === "inv") invMode = !invMode;
                b.textContent = mode === "degrad" ? degRad : (invMode ? "INV ●" : "INV");
                renderKeys();
            });
        });
        exprInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") { evaluate(); e.preventDefault(); }
            else if (e.key === "Escape") { close(); e.preventDefault(); }
        });
        // History click → reuse expression
        historyEl.addEventListener("click", (e) => {
            const row = e.target.closest(".calc-history-row");
            if (!row) return;
            exprInput.value = row.dataset.expr;
            exprInput.focus();
        });
    }

    function handleInput(val) {
        if (!exprInput) return;
        if (val === "AC") { exprInput.value = ""; resultEl.textContent = " "; return; }
        if (val === "BS") { exprInput.value = exprInput.value.slice(0, -1); return; }
        if (val === "=") { evaluate(); return; }
        if (val === "NEG") {
            // Toggle leading minus on the current number token
            const v = exprInput.value;
            const m = v.match(/(.*?)(-?\d*\.?\d*)$/);
            if (m) {
                const head = m[1] || "";
                const num = m[2] || "";
                exprInput.value = head + (num.startsWith("-") ? num.slice(1) : "-" + num);
            }
            return;
        }
        if (val === "^2") {
            exprInput.value = exprInput.value + "^2";
            return;
        }
        // Default — just append the symbol/number/function.
        exprInput.value = exprInput.value + val;
        exprInput.focus();
    }

    function evaluate() {
        const expr = (exprInput.value || "").trim();
        if (!expr) return;
        try {
            const result = evaluateExpression(expr);
            const formatted = formatNumber(result);
            resultEl.textContent = "= " + formatted;
            HISTORY.push({ expr, result: formatted });
            historyEl.innerHTML = renderHistory();
        } catch (err) {
            resultEl.textContent = "⚠ " + (err.message || "Error");
        }
    }

    function formatNumber(n) {
        if (!isFinite(n)) return String(n);
        // Avoid trailing fluff like 0.30000000000000004
        const rounded = Math.round(n * 1e12) / 1e12;
        if (Math.abs(rounded) < 1e-12) return "0";
        // Scientific for very large / small
        if (Math.abs(rounded) >= 1e15 || (Math.abs(rounded) > 0 && Math.abs(rounded) < 1e-6)) {
            return rounded.toExponential(6);
        }
        return String(rounded);
    }

    /* ---------- Tokenizer + Shunting-yard evaluator ---------- */

    const FUNCTIONS = ["sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "sqrt"];
    const CONSTANTS = { pi: Math.PI, e: Math.E };

    function tokenize(input) {
        // Normalise unicode operators
        const src = input
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/π/g, "pi");
        const tokens = [];
        let i = 0;
        while (i < src.length) {
            const c = src[i];
            if (/\s/.test(c)) { i++; continue; }
            if (/[0-9.]/.test(c)) {
                let j = i;
                while (j < src.length && /[0-9.]/.test(src[j])) j++;
                const num = src.slice(i, j);
                if ((num.match(/\./g) || []).length > 1) throw new Error("Bad number");
                tokens.push({ type: "num", value: parseFloat(num) });
                i = j;
                continue;
            }
            if (/[a-zA-Z]/.test(c)) {
                let j = i;
                while (j < src.length && /[a-zA-Z]/.test(src[j])) j++;
                const word = src.slice(i, j).toLowerCase();
                if (FUNCTIONS.includes(word)) tokens.push({ type: "fn", value: word });
                else if (word in CONSTANTS) tokens.push({ type: "num", value: CONSTANTS[word] });
                else throw new Error(`Unknown name: ${word}`);
                i = j;
                continue;
            }
            if ("+-*/^()".includes(c)) {
                tokens.push({ type: c === "(" ? "lp" : c === ")" ? "rp" : "op", value: c });
                i++;
                continue;
            }
            throw new Error(`Unexpected character: ${c}`);
        }
        return tokens;
    }

    function precedence(op) {
        if (op === "+" || op === "-") return 1;
        if (op === "*" || op === "/") return 2;
        if (op === "u-") return 3; // unary minus
        if (op === "^") return 4;
        return 0;
    }
    function isRightAssoc(op) { return op === "^" || op === "u-"; }

    function shuntingYard(tokens) {
        const out = [];
        const ops = [];
        let prevType = null; // for unary minus detection
        for (const tok of tokens) {
            if (tok.type === "num") { out.push(tok); }
            else if (tok.type === "fn") { ops.push(tok); }
            else if (tok.type === "op") {
                let op = tok.value;
                // Detect unary minus
                if (op === "-" && (prevType === null || prevType === "op" || prevType === "lp")) {
                    op = "u-";
                }
                while (ops.length) {
                    const top = ops[ops.length - 1];
                    const isFn = top.type === "fn";
                    const isOp = top.type === "op";
                    if (!isFn && !isOp) break;
                    const topOp = isOp ? top.value : null;
                    if (isFn || (isOp && (precedence(topOp) > precedence(op) || (precedence(topOp) === precedence(op) && !isRightAssoc(op))))) {
                        out.push(ops.pop());
                    } else break;
                }
                ops.push({ type: "op", value: op });
            }
            else if (tok.type === "lp") { ops.push(tok); }
            else if (tok.type === "rp") {
                while (ops.length && ops[ops.length - 1].type !== "lp") {
                    out.push(ops.pop());
                }
                if (!ops.length) throw new Error("Mismatched parentheses");
                ops.pop(); // discard "("
                if (ops.length && ops[ops.length - 1].type === "fn") out.push(ops.pop());
            }
            prevType = tok.type;
        }
        while (ops.length) {
            const t = ops.pop();
            if (t.type === "lp" || t.type === "rp") throw new Error("Mismatched parentheses");
            out.push(t);
        }
        return out;
    }

    function evalRPN(rpn) {
        const stack = [];
        const toRad = (x) => (degRad === "DEG" ? x * Math.PI / 180 : x);
        const fromRad = (x) => (degRad === "DEG" ? x * 180 / Math.PI : x);
        for (const tok of rpn) {
            if (tok.type === "num") stack.push(tok.value);
            else if (tok.type === "op") {
                if (tok.value === "u-") {
                    if (!stack.length) throw new Error("Bad expression");
                    stack.push(-stack.pop());
                    continue;
                }
                if (stack.length < 2) throw new Error("Bad expression");
                const b = stack.pop(), a = stack.pop();
                if (tok.value === "+") stack.push(a + b);
                else if (tok.value === "-") stack.push(a - b);
                else if (tok.value === "*") stack.push(a * b);
                else if (tok.value === "/") {
                    if (b === 0) throw new Error("Divide by zero");
                    stack.push(a / b);
                } else if (tok.value === "^") stack.push(Math.pow(a, b));
                else throw new Error(`Unknown op: ${tok.value}`);
            }
            else if (tok.type === "fn") {
                if (!stack.length) throw new Error("Function needs argument");
                const a = stack.pop();
                switch (tok.value) {
                    case "sin": stack.push(Math.sin(toRad(a))); break;
                    case "cos": stack.push(Math.cos(toRad(a))); break;
                    case "tan": stack.push(Math.tan(toRad(a))); break;
                    case "asin": stack.push(fromRad(Math.asin(a))); break;
                    case "acos": stack.push(fromRad(Math.acos(a))); break;
                    case "atan": stack.push(fromRad(Math.atan(a))); break;
                    case "ln": stack.push(Math.log(a)); break;
                    case "log": stack.push(Math.log10(a)); break;
                    case "sqrt": stack.push(Math.sqrt(a)); break;
                    default: throw new Error(`Unknown function: ${tok.value}`);
                }
            }
        }
        if (stack.length !== 1) throw new Error("Bad expression");
        return stack[0];
    }

    function evaluateExpression(expr) {
        const tokens = tokenize(expr);
        const rpn = shuntingYard(tokens);
        return evalRPN(rpn);
    }

    window.Calc = { open, close, isOpen };
})();
