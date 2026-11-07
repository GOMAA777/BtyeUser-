/**
 * Fails the build if .out would ship as unstyled HTML under /home.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".out");
const ENV_FILE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".env.production");
const errors = [];

function readBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH != null && process.env.NEXT_PUBLIC_BASE_PATH !== "") {
    return String(process.env.NEXT_PUBLIC_BASE_PATH).replace(/\/$/, "");
  }
  if (!fs.existsSync(ENV_FILE)) return "";
  const match = fs.readFileSync(ENV_FILE, "utf8").match(/^NEXT_PUBLIC_BASE_PATH=(.*)$/m);
  return (match?.[1] || "").trim().replace(/^["']|["']$/g, "").replace(/\/$/, "");
}

const basePath = readBasePath();

function mustExist(rel) {
  if (!fs.existsSync(path.join(ROOT, rel))) errors.push(`Missing: ${rel}`);
}

mustExist("index.html");
mustExist("_next");
mustExist("assets");
mustExist(".htaccess");

if (fs.existsSync(path.join(ROOT, "dev"))) {
  errors.push(".out/dev is a dev cache. Delete .out and rebuild before upload.");
}

const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const prefix = basePath ? `${basePath}/_next/` : "/_next/";
if (!html.includes(prefix)) {
  errors.push(`index.html does not reference ${prefix} — the browser will not load CSS/JS`);
}

const cssFiles = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".css")) cssFiles.push(full);
  }
}
walk(path.join(ROOT, "_next"));
if (cssFiles.length === 0) errors.push("No .css files under .out/_next");

if (errors.length) {
  console.error("verify-out FAILED — .out is not deploy-ready:\n");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("verify-out OK");
console.log(`  basePath: ${basePath || "(none)"}`);
console.log(`  CSS files in _next: ${cssFiles.length}`);
console.log("  Upload ALL of .out including folder _next to public_html/home");
