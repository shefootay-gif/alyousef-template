import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");

const templatePath = path.join(rootDir, "PROJECT_BRIEF.template.md");
const outputPath = path.join(rootDir, "PROJECT_BRIEF.md");

function fileExists(filePath) {
return fs.existsSync(filePath);
}

function createProjectBrief() {
if (!fileExists(templatePath)) {
console.error("Error: PROJECT_BRIEF.template.md was not found.");
process.exit(1);
}

if (fileExists(outputPath)) {
console.log("PROJECT_BRIEF.md already exists.");
console.log("No changes were made to avoid overwriting the active project brief.");
console.log("Delete PROJECT_BRIEF.md first if you intentionally want to recreate it from the template.");
return;
}

const templateContent = fs.readFileSync(templatePath, "utf8");

fs.writeFileSync(outputPath, templateContent, "utf8");

console.log("PROJECT_BRIEF.md was created successfully from PROJECT_BRIEF.template.md.");
}

createProjectBrief();
