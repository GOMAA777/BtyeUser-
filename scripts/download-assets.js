const fs = require('fs');
const path = require('path');
const http = require('http');

const destDir = path.join(process.cwd(), 'public', 'assets', 'properties', 'add');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const assets = {
  'building-preview.png': 'http://localhost:3845/assets/4a94cd59aefc440a609b7eed98694397c3e85005.png',
  'map-preview.png': 'http://localhost:3845/assets/e599e91c9d3acc979ea8e4ef39f759dfafa65fc5.png',
  'back-arrow.svg': 'http://localhost:3845/assets/2cddfb0f89c224217f4575b4e9c396ae153a7545.svg',
  'type-villa.svg': 'http://localhost:3845/assets/f29cf22d1a56c5e524952d2793c5ee4510772976.svg',
  'type-resort.svg': 'http://localhost:3845/assets/1f0806fc15f7348fece3eeac9958146428b27b7b.svg',
  'type-complex.svg': 'http://localhost:3845/assets/486bff37bf06a1bebd10f39326f2c2c6fd18a112.svg',
  'type-commercial.svg': 'http://localhost:3845/assets/ad1445d1f617463907c709966ed369d4d5f68850.svg',
  'type-building.svg': 'http://localhost:3845/assets/cb3a71cecd66bc111879f36f40c26a7486f61c8a.svg',
  'select-chevron.svg': 'http://localhost:3845/assets/c480c1ce0cb12dec2cbb304c73e0e65a86e36cc6.svg',
  'upload-cloud.svg': 'http://localhost:3845/assets/f31cc9e4850b8cb0d9511ad2ced5e29bd4366db7.svg',
  'plus-icon.svg': 'http://localhost:3845/assets/ac3ccef3989a33f8a62b83cbe3b46e146e41a628.svg',
  'trash-icon.svg': 'http://localhost:3845/assets/e429893222e752d650200567faa77f6e9b4c54fd.svg',
  'eye-icon.svg': 'http://localhost:3845/assets/db491ff5aec0d4b91a8b0950d1d652b2a9e8c5f4.svg',
  'gps-target.svg': 'http://localhost:3845/assets/8416dcc55e9ba6d1d901442b81c3edb5dc57189a.svg',
  'map-pin-card.svg': 'http://localhost:3845/assets/cabc01673f1dab5786b7afe3402a373fa7d0c8a9.svg',
  'map-pin-center.svg': 'http://localhost:3845/assets/33ee3bb14b6cdbf424e470de63f4eafa73d01506.svg',
  'zoom-plus.svg': 'http://localhost:3845/assets/7d0ef2747eb4e63ee6ae0c10fa70120e2af50688.svg',
  'zoom-minus.svg': 'http://localhost:3845/assets/7de6f21c23483b9678aa7a5d7e88621751e944d1.svg',
  'arrow-continue.svg': 'http://localhost:3845/assets/71b8952051bc3a67bf205d69c631517d1a8f3131.svg',
  'info-state.svg': 'http://localhost:3845/assets/832c84bbe0592e2e5c089e09dbe68460e85a7f84.svg',
  'iot-lock.svg': 'http://localhost:3845/assets/92f0fe119dcf3f0f204fbd91dde8a58f69a8bbe0.svg'
};

async function download(name, url) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(destDir, name));
    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(destDir, name), () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [name, url] of Object.entries(assets)) {
    await download(name, url);
  }
  console.log('All assets successfully downloaded!');
}

run().catch(console.error);

