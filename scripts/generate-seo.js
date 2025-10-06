// Simple SEO artifact generator: reads canonical from index.html and regenerates sitemap.xml and robots.txt
// Usage: node scripts/generate-seo.js

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const indexHtmlPath = resolve(projectRoot, 'index.html');
const publicDir = resolve(projectRoot, 'public');

function getCanonicalUrlFromIndexHtml(html) {
  const match = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!match) throw new Error('Canonical URL not found in index.html');
  return match[1];
}

function formatDate(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function generateSitemapXml(siteUrl) {
  const loc = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;
  const lastmod = formatDate();
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>daily</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`;
}

function generateRobotsTxt(siteUrl) {
  const loc = siteUrl.endsWith('/') ? `${siteUrl}sitemap.xml` : `${siteUrl}/sitemap.xml`;
  return `User-agent: *\nAllow: /\nSitemap: ${loc}\n`;
}

function run() {
  const html = readFileSync(indexHtmlPath, 'utf8');
  const canonical = getCanonicalUrlFromIndexHtml(html);

  const sitemap = generateSitemapXml(canonical);
  const robots = generateRobotsTxt(canonical);

  writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
  writeFileSync(resolve(publicDir, 'robots.txt'), robots);

  // eslint-disable-next-line no-console
  console.log(`Generated sitemap.xml and robots.txt using canonical: ${canonical}`);
}

run();


