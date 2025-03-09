import {readdirSync, statSync, writeFileSync} from "fs";
import {join, relative} from "path";

const basePath = "./src/components";
const componentDirs = ["molecules"];

let exports = "// Auto-generated component exports\n\n";

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

// Iterate through atoms and molecules directories
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
            exports += `export { ${componentName} } from "./components/${relativePath}";\n`;
        });
    } catch (err) {
        console.warn(`⚠️  Warning: Directory "${dirPath}" does not exist. Skipping.`);
    }
});

exports += "\n// Export CSS styles\n" +
    "import \"./styles/global.css\";\n";

writeFileSync("src/index.ts", exports);

console.log("✅  index.ts updated successfully!");
