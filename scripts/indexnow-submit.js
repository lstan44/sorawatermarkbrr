// Submit URLs in sitemap to IndexNow API
// Usage: INDEXNOW_KEY=... SEO_SITE_URL=https://sorawatermarkbrr.com node scripts/indexnow-submit.js

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import https from 'node:https';

const key = process.env.INDEXNOW_KEY || process.env.IndexNowKey;
const site = (process.env.SEO_SITE_URL || process.env.CF_PAGES_URL || '').replace(/\/$/, '');
if (!key) throw new Error('INDEXNOW_KEY env var is required');
if (!site) throw new Error('SEO_SITE_URL or CF_PAGES_URL env var is required');

// Parse sitemap.xml for <loc> URLs
const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');
const locMatches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
const urlList = locMatches.length ? locMatches : [`${site}/`];

const payload = JSON.stringify({
  host: site.replace(/^https?:\/\//, ''),
  key,
  keyLocation: `${site}/${key}.txt`,
  urlList
});

const req = https.request(
  'https://api.indexnow.org/indexnow',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
  },
  (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      // eslint-disable-next-line no-console
      console.log(`IndexNow status: ${res.statusCode} body: ${data || '<empty>'}`);
    });
  }
);

req.on('error', (e) => {
  // eslint-disable-next-line no-console
  console.error('IndexNow error:', e);
  process.exitCode = 1;
});

req.write(payload);
req.end();


