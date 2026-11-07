import fs from 'fs';
import path from 'path';

const designContextPath = "C:/Users/abdallah/.gemini/antigravity/brain/ce13718d-2d40-4054-95a5-9bef803b1405/.system_generated/steps/432/output.txt";
const content = fs.readFileSync(designContextPath, "utf8");

const matches = [...content.matchAll(/http:\/\/localhost:3845\/assets\/([a-zA-Z0-9_\-\.]+)/g)];
const uniqueUrls = [...new Set(matches.map(m => m[0]))];
console.log(`Found ${uniqueUrls.length} assets in node 1:2818.`);

const targetDir = path.resolve("public/assets/properties/ready");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const url of uniqueUrls) {
  const filename = url.split("/").pop();
  const dest = path.join(targetDir, filename);
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Downloaded ${filename} (${buffer.length} bytes)`);
    } else {
      console.error(`Failed ${url}: status ${res.status}`);
    }
  } catch (err) {
    console.error(`Error downloading ${url}:`, err);
  }
}
