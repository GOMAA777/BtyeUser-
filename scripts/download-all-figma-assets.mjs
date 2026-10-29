import fs from "fs";
import path from "path";

const downloads = [
  // 1:4313 (الوحدات)
  {
    prefix: "https://www.figma.com/api/mcp/asset/b8c0c99a-b6eb-41a8-8a28-f040c11831ab",
    targetDir: "public/assets/units/list",
    files: [
      "ad0e8.svg",
      "fcc47.svg",
      "25ddd.svg",
      "4b298.svg",
      "055e5.svg",
      "42bd8.svg",
      "fcfc8.svg",
      "38688.svg",
      "68ef8.svg",
    ],
  },
  // 1:5804 (الاجراءت)
  {
    prefix: "https://www.figma.com/api/mcp/asset/336d0e9b-ece5-4543-8ca6-1578f35d2d46",
    targetDir: "public/assets/units/actions",
    files: [
      "cd0fa.svg",
      "54ab0.svg",
      "c83f7.svg",
      "48d77.svg",
    ],
  },
  // 1:4685 (اضافة وحدة)
  {
    prefix: "https://www.figma.com/api/mcp/asset/7ab29044-7b57-45f0-b951-c38839d689a0",
    targetDir: "public/assets/units/add",
    files: [
      "705d7.png",
      "6d126.png",
      "a75e9.svg",
      "a8345.svg",
      "bf40f.svg",
      "c71dd.svg",
      "50ac6.svg",
      "6059c.svg",
      "a9a85.svg",
      "85ef8.svg",
      "2a889.svg",
      "2d70d.svg",
      "e4a1e.svg",
      "a853b.svg",
      "29c98.svg",
      "48634.svg",
      "9a51c.svg",
      "8e0b9.svg",
      "75d18.svg",
      "c3ea4.svg",
      "c0974.svg",
      "75569.svg",
      "e76fc.svg",
      "183a1.svg",
      "5cf8a.svg",
      "efdb8.svg",
      "ba889.svg",
      "c5ec6.svg",
      "da714.svg",
      "85375.svg",
      "a19cc.svg",
      "075c7.svg",
      "08051.svg",
    ],
  },
];

for (const group of downloads) {
  const dir = path.resolve(group.targetDir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const file of group.files) {
    const url = `${group.prefix}/${file}`;
    const dest = path.join(dir, file);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buffer);
        console.log(`[OK] ${group.targetDir}/${file} (${buffer.length} bytes)`);
      } else {
        console.error(`[FAIL ${res.status}] ${url}`);
      }
    } catch (err) {
      console.error(`[ERROR] ${url}:`, err);
    }
  }
}
