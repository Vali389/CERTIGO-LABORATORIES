import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

async function buildDist() {
  console.log('[build:dist] Generating production dist folder for Hostinger / static hosting...');

  const serverFilePath = path.resolve('.output/server/index.mjs');
  if (!fs.existsSync(serverFilePath)) {
    console.error('[build:dist] Error: .output/server/index.mjs was not found. Please ensure `vite build` completed first.');
    process.exit(1);
  }

  // Ensure clean dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }

  // Copy client assets and public files directly from .output/public into dist
  if (fs.existsSync('.output/public')) {
    fs.cpSync('.output/public', 'dist', { recursive: true });
    console.log('[build:dist] Copied client assets from .output/public to dist/');
  }

  // Import compiled server via pathToFileURL to render root index.html
  const serverUrl = pathToFileURL(serverFilePath).href;
  const server = await import(serverUrl);

  // Generate root dist/index.html (Single Page App entry point)
  const rootRes = await server.default.fetch(new Request('http://localhost/'), {
    ASSETS: { fetch: async () => new Response('') }
  });
  const rootHtml = await rootRes.text();
  fs.writeFileSync('dist/index.html', rootHtml, 'utf8');
  console.log('[build:dist] Generated dist/index.html');

  // Add .htaccess for Hostinger Apache so all routes (e.g. /about, /services, etc.) redirect to index.html
  const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
  fs.writeFileSync(path.join('dist', '.htaccess'), htaccessContent, 'utf8');

  // 404 fallback page pointing to index.html
  fs.writeFileSync(path.join('dist', '404.html'), rootHtml, 'utf8');

  console.log('[build:dist] Done! Clean SPA production dist/ ready to copy directly to Hostinger public_html.');
}

buildDist().catch((err) => {
  console.error('[build:dist] Failed:', err);
  process.exit(1);
});
