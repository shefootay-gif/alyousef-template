#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const source = path.join(root, "PROJECT_BRIEF.template.md");
const target = path.join(root, "PROJECT_BRIEF.md");

try {
  const template = await fs.readFile(source, "utf8");
  await fs.writeFile(target, template, "utf8");
  console.log("PROJECT_BRIEF.md created from PROJECT_BRIEF.template.md");
} catch (error) {
  console.error("Failed to create project brief:", error.message);
  process.exit(1);
}
