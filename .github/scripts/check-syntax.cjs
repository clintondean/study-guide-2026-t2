const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const targets = []
    .concat(
        fs.readdirSync(root)
            .filter(name => name.endsWith(".js"))
            .map(name => path.join(root, name))
    )
    .concat(
        fs.readdirSync(path.join(root, "data"))
            .filter(name => name.endsWith(".js"))
            .map(name => path.join(root, "data", name))
    );

for (const file of targets) {
    console.log(`Checking ${path.relative(root, file)}`);
    execFileSync(process.execPath, ["--check", file], { stdio: "inherit" });
}
