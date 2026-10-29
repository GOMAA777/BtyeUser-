import fs from 'fs';
import path from 'path';
import https from 'https';

const screenshots = [
  { url: 'https://www.figma.com/api/mcp/asset/4dfaee01-fcad-438f-95c8-021d23e99e0d.png', name: 'details.png' },
  { url: 'https://www.figma.com/api/mcp/asset/22daa117-4b37-4763-8fc9-10dac0d60ff9.png', name: 'new.png' },
  { url: 'https://www.figma.com/api/mcp/asset/5462e779-749e-41fa-8984-aab50a1b9dbe.png', name: 'modal.png' },
  { url: 'https://www.figma.com/api/mcp/asset/82d3dc5b-2042-422c-899c-457e2a4e7de3.png', name: 'logs.png' },
];

const steps = [
  { step: 492, dir: 'details', name: 'تفاصيل بلاغ صيانة' },
  { step: 494, dir: 'new', name: 'إنشاء بلاغ صيانة' },
  { step: 496, dir: 'modal', name: 'بدء تنفيذ الصيانة' },
  { step: 498, dir: 'logs', name: 'سجل التشغيل' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading screenshots...');
  for (const s of screenshots) {
    const dest = path.join(process.cwd(), 'public/assets/maintenance/screenshots', s.name);
    try {
      await downloadFile(s.url, dest);
      console.log('Saved screenshot:', s.name);
    } catch (e) {
      console.error('Error downloading screenshot:', s.name, e.message);
    }
  }

  for (const s of steps) {
    const filePath = `C:/Users/abdallah/.gemini/antigravity/brain/6e66c0ba-67c7-4515-83ff-f543f5ebeb74/.system_generated/steps/${s.step}/output.txt`;
    if (!fs.existsSync(filePath)) {
      console.log('File not found for step:', s.step);
      continue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    const prefixMatch = content.match(/const assetPathPrefix = "([^"]+)"/);
    if (!prefixMatch) {
      console.log('No assetPathPrefix for step:', s.step);
      continue;
    }
    const prefix = prefixMatch[1];
    const assetMatches = content.match(/assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g) || [];
    const uniqueAssets = [...new Set(assetMatches.map(m => m.replace('assetPathPrefix}/', '')))];
    console.log(`Step ${s.step} (${s.name}) has ${uniqueAssets.length} unique assets with prefix ${prefix}`);

    for (const asset of uniqueAssets) {
      const url = `${prefix}/${asset}`;
      const dest = path.join(process.cwd(), 'public/assets/maintenance', s.dir, asset);
      try {
        await downloadFile(url, dest);
      } catch (e) {
        console.error(`Error downloading ${asset} for ${s.dir}:`, e.message);
      }
    }
    console.log(`Downloaded ${uniqueAssets.length} assets for ${s.dir}`);
  }
  console.log('All maintenance assets downloaded successfully!');
}

main().catch(console.error);
