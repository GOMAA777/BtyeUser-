import fs from "fs";
import path from "path";

const targets = [
  {
    name: "list",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/204/output.txt",
    destDir: "public/assets/bookings/list"
  },
  {
    name: "actions",
    prefix: "https://www.figma.com/api/mcp/asset/4be5e305-6490-482a-a92c-63febe82df03",
    files: ["f2ed2.svg", "2a22d.svg", "d15bf.svg", "c83f7.svg"],
    destDir: "public/assets/bookings/actions"
  },
  {
    name: "add",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/211/output.txt",
    destDir: "public/assets/bookings/add"
  },
  {
    name: "success",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/243/output.txt",
    destDir: "public/assets/bookings/success"
  },
  {
    name: "details",
    filePath: "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/217/output.txt",
    destDir: "public/assets/bookings/details"
  }
];

const screenshots = [
  { name: "bookings-list.png", url: "https://www.figma.com/api/mcp/asset/f3aa486e-4829-4eb0-8041-e6e5225b75f4.png" },
  { name: "booking-add.png", url: "https://www.figma.com/api/mcp/asset/f1a31338-57b7-4daf-a6fc-b858474777c2.png" },
  { name: "booking-success.png", url: "https://www.figma.com/api/mcp/asset/4585ee99-dac1-46b9-a9de-c57455e70789.png" },
  { name: "booking-details.png", url: "https://www.figma.com/api/mcp/asset/4e04cbde-0e9d-484c-825b-b8b53a116675.png" }
];

async function downloadUrl(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    return;
  }
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`Saved ${path.basename(dest)} (${buf.length} bytes)`);
    } else {
      console.error(`Failed ${url}: HTTP ${res.status}`);
    }
  } catch (e) {
    console.error(`Error fetching ${url}:`, e);
  }
}

// Download screenshots
const refDir = "public/assets/bookings/references";
if (!fs.existsSync(refDir)) fs.mkdirSync(refDir, { recursive: true });
for (const s of screenshots) {
  await downloadUrl(s.url, path.join(refDir, s.name));
}

for (const target of targets) {
  console.log(`Processing ${target.name}...`);
  if (!fs.existsSync(target.destDir)) {
    fs.mkdirSync(target.destDir, { recursive: true });
  }

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
  if (!prefixMatch) {
    console.error(`Could not find assetPathPrefix in ${target.filePath}`);
    continue;
  }
  const prefix = prefixMatch[1];
  
  const assetMatches = [...content.matchAll(/\$\{assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g)];
  const files = [...new Set(assetMatches.map(m => m[1]))];
  console.log(`Found ${files.length} assets for ${target.name}`);

  for (const filename of files) {
    await downloadUrl(`${prefix}/${filename}`, path.join(target.destDir, filename));
  }
}

console.log("All downloads complete!");
