const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..", "..");
const outDir = path.join(root, "_site");
const copyRootFiles = ["index.html", "styles.css", ".nojekyll"];
const copyDirs = ["data", "handbook"];

function removeDir(dir) {
    fs.rmSync(dir, { recursive: true, force: true });
}

function ensureDir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

function copyFileIfPresent(from, to) {
    if (!fs.existsSync(from)) return;
    ensureDir(path.dirname(to));
    fs.copyFileSync(from, to);
}

function shouldSkipCopy(filePath) {
    return /\.d\.ts$/i.test(filePath) || /\.ts$/i.test(filePath);
}

function copyTree(srcRoot, destRoot) {
    if (!fs.existsSync(srcRoot)) return;
    const entries = fs.readdirSync(srcRoot, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(srcRoot, entry.name);
        const destPath = path.join(destRoot, entry.name);
        if (entry.isDirectory()) {
            copyTree(srcPath, destPath);
            continue;
        }
        if (shouldSkipCopy(srcPath)) continue;
        copyFileIfPresent(srcPath, destPath);
    }
}

function collectTsSources(dir, results) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            collectTsSources(fullPath, results);
            continue;
        }
        if (/\.d\.ts$/i.test(fullPath)) continue;
        if (/\.ts$/i.test(fullPath)) results.push(fullPath);
    }
}

function ensureNoJsTsCollisions(tsFiles) {
    const collisions = [];
    for (const tsFile of tsFiles) {
        const jsSource = tsFile.replace(/\.ts$/i, ".js");
        if (fs.existsSync(jsSource)) {
            collisions.push(path.relative(root, tsFile));
        }
    }
    if (collisions.length) {
        throw new Error(
            "Refusing to build with duplicate .js/.ts source pairs:\n" +
            collisions.map(file => ` - ${file}`).join("\n")
        );
    }
}

removeDir(outDir);
ensureDir(outDir);

for (const file of copyRootFiles) {
    copyFileIfPresent(path.join(root, file), path.join(outDir, file));
}

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith(".js")) continue;
    copyFileIfPresent(path.join(root, entry.name), path.join(outDir, entry.name));
}

for (const dir of copyDirs) {
    copyTree(path.join(root, dir), path.join(outDir, dir));
}

const tsFiles = [];
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (/\.d\.ts$/i.test(entry.name)) continue;
    if (/\.ts$/i.test(entry.name)) tsFiles.push(path.join(root, entry.name));
}
collectTsSources(path.join(root, "data"), tsFiles);

ensureNoJsTsCollisions(tsFiles);

execFileSync(process.execPath, [path.join(root, "node_modules", "typescript", "bin", "tsc"), "-p", path.join(root, "tsconfig.json")], {
    stdio: "inherit"
});

console.log(`Built site into ${path.relative(root, outDir)}.`);
