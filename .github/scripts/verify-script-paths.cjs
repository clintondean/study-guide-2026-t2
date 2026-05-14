const fs = require("fs");
const path = require("path");

const root = path.resolve(process.argv[2] || path.join(__dirname, "..", ".."));
const builtMode = process.argv.includes("--built");
const indexPath = path.join(root, "index.html");

if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing index.html at ${indexPath}`);
}

const html = fs.readFileSync(indexPath, "utf8");
const scriptSrcs = Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/gi))
    .map(match => match[1])
    .filter(src => !/^(?:https?:|\/\/|data:)/i.test(src));

let problems = 0;
for (const src of scriptSrcs) {
    const jsPath = path.join(root, src);
    if (fs.existsSync(jsPath)) continue;
    if (!builtMode && src.endsWith(".js")) {
        const tsPath = path.join(root, src.replace(/\.js$/i, ".ts"));
        if (fs.existsSync(tsPath)) continue;
    }
    problems++;
    console.error(`Missing script target for ${src} in ${path.relative(process.cwd(), root) || "."}`);
}

if (problems) {
    process.exit(1);
}

console.log(`Verified ${scriptSrcs.length} script reference(s) in ${path.relative(process.cwd(), root) || "."}.`);
