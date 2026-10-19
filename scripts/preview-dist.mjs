import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = process.env.PORT || 4173;
const DIST_DIR = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

if (!fs.existsSync(DIST_DIR)) {
  console.error(`[preview:dist] Error: Directory '${DIST_DIR}' not found. Please run 'npm run build' first.`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let filePath = path.join(DIST_DIR, url);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  } catch (err) {
    res.writeHead(500);
    res.end('Error loading ' + filePath);
  }
});

server.listen(PORT, () => {
  console.log(`\n  ➜  Production dist preview running at: http://localhost:${PORT}/\n`);
});
