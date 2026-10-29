import fs from "fs";
import path from "path";

const targets = [
  {
    name: "extend-stay",
    filePath:
      "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/440/output.txt",
    destDir: "public/assets/bookings/modals/extend-stay",
  },
  {
    name: "change-unit",
    filePath:
      "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/442/output.txt",
    destDir: "public/assets/bookings/modals/change-unit",
  },
  {
    name: "cancel-booking",
    filePath:
      "C:/Users/abdallah/.gemini/antigravity/brain/25c18d09-7ab8-4b34-8fdb-9fdbd4cb54c8/.system_generated/steps/444/output.txt",
    destDir: "public/assets/bookings/modals/cancel-booking",
  },
];

const screenshots = [
  {
    name: "extend-stay.png",
    url: "https://www.figma.com/api/mcp/asset/5931b53f-ca01-4b48-968b-0dba94f6a397.png",
  },
  {
    name: "change-unit.png",
    url: "https://www.figma.com/api/mcp/asset/5726ddd0-f21d-4265-b467-745b6d1c7fe1.png",
  },
  {
    name: "cancel-booking.png",
    url: "https://www.figma.com/api/mcp/asset/34c4b574-5287-4adc-bb1a-a3b93b84ccf7.png",
  },
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

const refDir = "public/assets/bookings/references";
if (!fs.existsSync(refDir)) fs.mkdirSync(refDir, { recursive: true });
for (const s of screenshots) {
  await downloadUrl(s.url, path.join(refDir, s.name));
}

for (const target of targets) {
  if (!fs.existsSync(target.destDir))
    fs.mkdirSync(target.destDir, { recursive: true });
  if (!fs.existsSync(target.filePath)) {
    console.error(`File not found: ${target.filePath}`);
    continue;
  }
  const content = fs.readFileSync(target.filePath, "utf8");
  const prefixMatch = content.match(/const assetPathPrefix = "([^"]+)";/);
  if (!prefixMatch) continue;
  const prefix = prefixMatch[1];
  const assetMatches = [
    ...content.matchAll(/\$\{assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g),
  ];
  const files = [...new Set(assetMatches.map((m) => m[1]))];
  console.log(`Found ${files.length} assets for ${target.name}`);
  for (const filename of files) {
    await downloadUrl(
      `${prefix}/${filename}`,
      path.join(target.destDir, filename),
    );
  }
}

console.log("All modal assets downloaded successfully!");
