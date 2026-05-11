/**
 * Dev-only: writes design/figma-snapshot.json from the Figma REST API.
 * Requires FIGMA_ACCESS_TOKEN in .env.local (see .env.example).
 * Usage: node --env-file=.env.local scripts/figma-pull.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const token = process.env.FIGMA_ACCESS_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY ?? "TU0rwtI99EY7G5o7Ci6gMq";
const nodeIds = process.env.FIGMA_NODE_IDS ?? "11:23";

if (!token) {
  console.error("Missing FIGMA_ACCESS_TOKEN. Copy .env.example to .env.local and add your token.");
  process.exit(1);
}

const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeIds)}`;
const res = await fetch(url, { headers: { "X-Figma-Token": token } });

if (!res.ok) {
  console.error(`Figma API error ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const json = await res.json();
const outDir = join(root, "design");
const outFile = join(outDir, "figma-snapshot.json");
await mkdir(outDir, { recursive: true });
await writeFile(outFile, JSON.stringify(json, null, 2), "utf8");
console.log(`Wrote ${outFile}`);
