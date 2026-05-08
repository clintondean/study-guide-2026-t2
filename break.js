// Shared break session — the 5-minute timer is shared across Catris,
// Cat Invaders and Catanoid. Switching games keeps the same timer.
// Exposes window.BreakSession.

(function () {
    "use strict";

    const BREAK_MS = 5 * 60 * 1000;
    let startedAt = null;

    window.BreakSession = {
        BREAK_MS,
        start() { if (startedAt == null) startedAt = Date.now(); },
        end() { startedAt = null; },
        startedAt: () => startedAt,
        elapsed: () => startedAt == null ? 0 : Date.now() - startedAt,
        remaining() { return BREAK_MS - this.elapsed(); },
        isActive: () => startedAt != null,
        hasExpired() { return this.elapsed() >= BREAK_MS; }
    };

    /* =========================================================
       Shared cat-on-canvas drawing helper used by Cat Invaders
       and Catanoid. Draws a stylised cat face at (x, y) with size.
       opts: { primary, accent, eyeColor, ears: 'normal'|'big'|'tufted' }
       ========================================================= */
    window.drawCanvasCat = function (ctx, x, y, size, opts) {
        opts = opts || {};
        const primary = opts.primary || "#f4a261";
        const accent = opts.accent || "#e07a3a";
        const eyeColor = opts.eyeColor || "#2a8a3a";
        const earStyle = opts.ears || "normal";
        const inner = "#ffb3c1";

        ctx.save();
        ctx.translate(x, y);

        const r = size / 2;
        const headR = r * 0.78;

        // Ears
        ctx.fillStyle = primary;
        if (earStyle === "big") {
            ctx.beginPath();
            ctx.moveTo(-r * 0.7, -r * 0.55);
            ctx.lineTo(-r * 0.45, -r * 1.15);
            ctx.lineTo(-r * 0.05, -r * 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(r * 0.7, -r * 0.55);
            ctx.lineTo(r * 0.45, -r * 1.15);
            ctx.lineTo(r * 0.05, -r * 0.45);
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.moveTo(-r * 0.7, -r * 0.45);
            ctx.lineTo(-r * 0.45, -r * 0.95);
            ctx.lineTo(-r * 0.1, -r * 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(r * 0.7, -r * 0.45);
            ctx.lineTo(r * 0.45, -r * 0.95);
            ctx.lineTo(r * 0.1, -r * 0.45);
            ctx.closePath();
            ctx.fill();
        }
        // Inner ears
        ctx.fillStyle = inner;
        ctx.beginPath(); ctx.moveTo(-r * 0.55, -r * 0.5); ctx.lineTo(-r * 0.45, -r * 0.85); ctx.lineTo(-r * 0.25, -r * 0.5); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(r * 0.55, -r * 0.5); ctx.lineTo(r * 0.45, -r * 0.85); ctx.lineTo(r * 0.25, -r * 0.5); ctx.closePath(); ctx.fill();

        // Head
        ctx.fillStyle = primary;
        ctx.beginPath();
        ctx.arc(0, 0, headR, 0, Math.PI * 2);
        ctx.fill();

        // Stripes (subtle)
        if (opts.stripes) {
            ctx.strokeStyle = accent;
            ctx.lineWidth = Math.max(1, r * 0.08);
            ctx.beginPath();
            ctx.arc(-r * 0.35, -r * 0.15, r * 0.18, Math.PI, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(r * 0.35, -r * 0.15, r * 0.18, Math.PI, 0);
            ctx.stroke();
        }

        // Eyes
        ctx.fillStyle = eyeColor;
        ctx.beginPath(); ctx.ellipse(-r * 0.28, -r * 0.05, r * 0.16, r * 0.20, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(r * 0.28, -r * 0.05, r * 0.16, r * 0.20, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#1a1a1d";
        ctx.beginPath(); ctx.ellipse(-r * 0.28, -r * 0.05, r * 0.06, r * 0.16, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(r * 0.28, -r * 0.05, r * 0.06, r * 0.16, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(-r * 0.24, -r * 0.12, r * 0.04, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(r * 0.32, -r * 0.12, r * 0.04, 0, Math.PI * 2); ctx.fill();

        // Nose
        ctx.fillStyle = "#ff8da1";
        ctx.beginPath();
        ctx.moveTo(-r * 0.08, r * 0.15);
        ctx.lineTo(r * 0.08, r * 0.15);
        ctx.lineTo(0, r * 0.28);
        ctx.closePath();
        ctx.fill();

        // Mouth
        ctx.strokeStyle = "rgba(0,0,0,0.7)";
        ctx.lineWidth = Math.max(1, r * 0.06);
        ctx.beginPath();
        ctx.moveTo(-r * 0.18, r * 0.4);
        ctx.quadraticCurveTo(0, r * 0.55, r * 0.18, r * 0.4);
        ctx.stroke();

        ctx.restore();
    };
})();
