import fs from "fs";
import path from "path";

const targets = [
  {
    name: "main",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/515/output.txt",
    destDir: "public/assets/maintenance/main"
  },
  {
    name: "actions",
    prefix: "https://www.figma.com/api/mcp/asset/62faa5c5-bb84-489e-aa41-cffb5b1ae44c",
    files: ["f2ed2.svg", "79c38.svg", "e268f.svg", "84e64.svg"],
    destDir: "public/assets/maintenance/actions"
  },
  {
    name: "details",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/519/output.txt",
    destDir: "public/assets/maintenance/details"
  },
  {
    name: "assign",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/521/output.txt",
    destDir: "public/assets/maintenance/assign"
  },
  {
    name: "start",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/523/output.txt",
    destDir: "public/assets/maintenance/start"
  },
  {
    name: "complete",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/525/output.txt",
    destDir: "public/assets/maintenance/complete"
  }
];

const screenshots = [
  { name: "maintenance-main.png", url: "https://www.figma.com/api/mcp/asset/d13a1adb-4828-49ba-a4b3-bcafb430186c.png" },
  { name: "cleaning-details.png", url: "https://www.figma.com/api/mcp/asset/6e37fb39-1f7f-419f-904f-92d5182be728.png" },
  { name: "assign-supervisor.png", url: "https://www.figma.com/api/mcp/asset/b17db140-3e77-419c-a8f5-a860c9c27932.png" },
  { name: "start-cleaning.png", url: "https://www.figma.com/api/mcp/asset/20cfc84a-be3d-4f06-85b4-50ef2433859d.png" },
  { name: "confirm-completion.png", url: "https://www.figma.com/api/mcp/asset/14e08267-915d-4c5d-b8cb-a5e02b2e26ed.png" }
];

async function downloadUrl(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return;
  try {
    const res = await fetch(url);
    if (res.ok) {
      fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
      console.log(`Saved ${path.basename(dest)}`);
    } else {
      console.error(`Failed ${url}: HTTP ${res.status}`);
    }
  } catch (e) {
    console.error(`Error fetching ${url}:`, e);
  }
}

const refDir = "public/assets/maintenance/references";
if (!fs.existsSync(refDir)) fs.mkdirSync(refDir, { recursive: true });
for (const s of screenshots) {
  await downloadUrl(s.url, path.join(refDir, s.name));
}

for (const target of targets) {
  if (!fs.existsSync(target.destDir)) fs.mkdirSync(target.destDir, { recursive: true });

  if (target.files && target.prefix) {
    for (const filename of target.files) {
      await downloadUrl(`${target.prefix}/${filename}`, path.join(target.destDir, filename));
    }
    continue;
  }

  if (!fs.existsSync(target.filePath)) {
    console.error(`File not found: ${target.filePath}`);
    continue;
  }
  const content = fs.readFileSync(target.filePath, "utf8");
  const prefixMatch = content.match(/const assetPathPrefix = "([^"]+)";/);
  if (!prefixMatch) continue;
  const prefix = prefixMatch[1];
  const assetMatches = [...content.matchAll(/\$\{assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g)];
  const files = [...new Set(assetMatches.map(m => m[1]))];
  console.log(`Found ${files.length} assets for ${target.name}`);
  for (const filename of files) {
    await downloadUrl(`${prefix}/${filename}`, path.join(target.destDir, filename));
  }
}

console.log("All maintenance & cleaning assets downloaded!");
