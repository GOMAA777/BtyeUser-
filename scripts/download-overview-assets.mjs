import fs from 'fs';
import path from 'path';
import https from 'https';

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
  const screenshotUrl = 'https://www.figma.com/api/mcp/asset/77c91c0a-e65c-4b47-b215-8212a58e9b60.png';
  const screenshotDest = path.join(process.cwd(), 'public/assets/maintenance/screenshots/overview.png');
  await downloadFile(screenshotUrl, screenshotDest);
  console.log('Saved overview screenshot.');

  const content = fs.readFileSync('C:/Users/abdallah/.gemini/antigravity/brain/6e66c0ba-67c7-4515-83ff-f543f5ebeb74/.system_generated/steps/654/output.txt', 'utf8');
  const prefixMatch = content.match(/const assetPathPrefix = "([^"]+)"/);
  if (!prefixMatch) {
    console.log('No assetPathPrefix');
    return;
  }
  const prefix = prefixMatch[1];
  const assetMatches = content.match(/assetPathPrefix\}\/([a-zA-Z0-9_\-\.]+)/g) || [];
  const uniqueAssets = [...new Set(assetMatches.map(m => m.replace('assetPathPrefix}/', '')))];
  console.log(`Found ${uniqueAssets.length} unique assets with prefix ${prefix}`);

  for (const asset of uniqueAssets) {
    const url = `${prefix}/${asset}`;
    const dest = path.join(process.cwd(), 'public/assets/maintenance/overview', asset);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`Error downloading ${asset}:`, e.message);
    }
  }
  console.log('All overview assets downloaded successfully!');
}

main().catch(console.error);
