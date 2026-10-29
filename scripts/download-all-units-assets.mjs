import fs from "fs";
import path from "path";

const targets = [
  {
    name: "added",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/35/output.txt",
    destDir: "public/assets/units/added"
  },
  {
    name: "details",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/43/output.txt",
    destDir: "public/assets/units/details"
  },
  {
    name: "lock",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/67/output.txt",
    destDir: "public/assets/units/lock"
  },
  {
    name: "lock-error",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/79/output.txt",
    destDir: "public/assets/units/lock-error"
  }
];

for (const target of targets) {
  console.log(`Processing ${target.name}...`);
  if (!fs.existsSync(target.filePath)) {
    console.error(`File not found: ${target.filePath}`);
    continue;
  }
  const content = fs.readFileSync(target.filePath, "utf8");
  
  // Extract assetPathPrefix
  const prefixMatch = content.match(/const assetPathPrefix = "([^"]+)";/);
  if (!prefixMatch) {
    console.error(`Could not find assetPathPrefix in ${target.filePath}`);
    continue;
  }
  const prefix = prefixMatch[1];
  
  // Find all `${assetPathPrefix}/<filename>`
  const assetMatches = [...content.matchAll(/\$\{assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g)];
  const files = [...new Set(assetMatches.map(m => m[1]))];
  console.log(`Found ${files.length} assets for ${target.name}`);
  
  if (!fs.existsSync(target.destDir)) {
    fs.mkdirSync(target.destDir, { recursive: true });
  }

  for (const filename of files) {
    const url = `${prefix}/${filename}`;
    const dest = path.join(target.destDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      console.log(`Skipping existing ${filename}`);
      continue;
    }
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`Downloaded ${filename} (${buf.length} bytes) to ${target.destDir}`);
      } else {
        console.error(`Failed ${url}: HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`Error fetching ${url}:`, e);
    }
  }
}
console.log("All downloads complete!");
