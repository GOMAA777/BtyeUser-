/**
 * Serves `.out` the same way the live site should load under /home.
 * Open: http://localhost:4173/home/
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", ".out");
const BASE = "/home";
const PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json",
};

function resolveFile(urlPath) {
  let pathname = decodeURIComponent(urlPath.split("?")[0]);
  if (pathname === "/" || pathname === "") {
    return { redirect: `${BASE}/` };
  }
  if (pathname === BASE || pathname === `${BASE}/`) {
    pathname = "/index.html";
  } else if (pathname.startsWith(`${BASE}/`)) {
    pathname = pathname.slice(BASE.length);
  } else {
    return { missing: true };
  }

  let filePath = path.normalize(path.join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) return { missing: true };

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const withHtml = `${filePath}.html`;
    if (fs.existsSync(withHtml)) filePath = withHtml;
  }
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    const notFound = path.join(ROOT, "404.html");
    if (fs.existsSync(notFound)) return { filePath: notFound, status: 404 };
    return { missing: true };
  }
  return { filePath, status: 200 };
}

if (!fs.existsSync(path.join(ROOT, "index.html"))) {
  console.error("Missing .out/index.html — run: npm run build");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const result = resolveFile(req.url || "/");
  if (result.redirect) {
    res.writeHead(302, { Location: result.redirect });
    res.end();
    return;
  }
  if (result.missing) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  const ext = path.extname(result.filePath).toLowerCase();
  res.writeHead(result.status || 200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  fs.createReadStream(result.filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log("Preview .out (same as production under /home):");
  console.log(`  http://localhost:${PORT}${BASE}/`);
});
