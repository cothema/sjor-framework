import {readdirSync, readFileSync, statSync, writeFileSync} from "fs";
import {join, relative} from "path";

const basePath = "./src";
const componentDirs = ["components/molecules", "types"];

let serverExports = "// Auto-generated server component exports\n\n";
let clientExports = "// Auto-generated client component exports\n\n";

// Recursive function to get all files inside subdirectories
const getFilesRecursively = (dir) => {
    let results = [];
    const list = readdirSync(dir);

    list.forEach((file) => {
        const fullPath = join(dir, file);
        if (statSync(fullPath).isDirectory()) {
            results = results.concat(getFilesRecursively(fullPath));
        } else if (
            (file.endsWith(".tsx") || file.endsWith(".ts")) &&
            !file.includes(".stories.") // Ignore storybook files
        ) {
            results.push(fullPath);
        }
    });

    return results;
};

// Iterate through directories and categorize components
componentDirs.forEach((dir) => {
    const dirPath = join(basePath, dir);

    try {
        const files = getFilesRecursively(dirPath);

        files.forEach((file) => {
            const relativePath = relative(basePath, file)
                .replace(/\\/g, "/") // Normalize Windows paths
                .replace(".tsx", "")
                .replace(".ts", "");

            const componentName = relativePath.split("/").pop();
            const fileContent = readFileSync(file, "utf-8");

            // Check if file starts with "use client" (ignoring whitespace)
            if (/^\s*("use client"|'use client')/.test(fileContent)) {
                clientExports += `export * from "./${relativePath}";\n`;
            } else {
                serverExports += `export * from "./${relativePath}";\n`;
            }
        });
    } catch (err) {
        console.warn(`⚠️  Warning: Directory "${dirPath}" does not exist. Skipping.`);
    }
});

const stylesImport = "\n// Import CSS styles\n" + "import \"./styles/global.css\";\n";

serverExports += stylesImport;
clientExports += stylesImport;

writeFileSync("src/ssr.ts", serverExports);
writeFileSync("src/client.ts", clientExports);

console.log("✅  ssr.ts and client.ts updated successfully!");
