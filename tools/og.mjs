// Draws the link preview image (public/og.png, 1200x630) from the site data: photo, name,
// roles, hook, and a dot map of visited countries. Re-run after roles, photo, or trips change:
//   node tools/og.mjs
// Needs Google Chrome installed (playwright-core uses it; no browser download).
import { geoBounds, geoContains, geoEqualEarth } from 'd3-geo';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright-core';
import { feature } from 'topojson-client';
import { countryCount, places } from '../src/been.ts';
import { business, hook, roles } from '../src/site.ts';

// First line of the hook on the card; the full bio is too long for a preview.
const lead = 'Finished my bucket list at 24.';
const root = new URL('..', import.meta.url);
const file = (p) => new URL(p, root).href;
const flights = JSON.parse(readFileSync(new URL('src/flights.json', root)));
const world = JSON.parse(readFileSync(new URL('node_modules/world-atlas/countries-110m.json', root)));

// Dot map, same method as src/components/PassportCard.astro.
const W = 640;
const H = 314;
const projection = geoEqualEarth().fitExtent([[0, 0], [W, H]], { type: 'Sphere' });
const visited = new Set(places.map((p) => p.id));
const lands = feature(world, world.objects.countries).features.map((f) => ({ f, b: geoBounds(f), lit: visited.has(f.id) }));
const dot = ([x, y]) => `M${x.toFixed(1)} ${y.toFixed(1)}h0`;
let gray = '';
let lit = '';
for (let lat = 84; lat >= -86; lat -= 2.4) {
  for (let lon = -180; lon < 180; lon += 2.4) {
    const hit = lands.find(({ f, b: [[x0, y0], [x1, y1]] }) =>
      lat >= y0 && lat <= y1 && (x0 > x1 || (lon >= x0 && lon <= x1)) && geoContains(f, [lon, lat]));
    if (hit) hit.lit ? (lit += dot(projection([lon, lat]))) : (gray += dot(projection([lon, lat])));
  }
}
for (const p of places) if (p.dot) lit += dot(projection(p.dot));

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Display; src: url(${file('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2')}); }
@font-face { font-family: Sans; src: url(${file('node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2')}); font-weight: 400 700; }
@font-face { font-family: Mono; src: url(${file('node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2')}); }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #0a0a0a; color: #fafafa; font-family: Sans; position: relative; overflow: hidden; }
svg { position: absolute; right: 36px; top: 150px; width: ${W}px; }
.g { stroke: #262626; } .l { stroke: #f59e0b; stroke-opacity: .8; }
path { fill: none; stroke-width: 3; stroke-linecap: round; }
.fade { position: absolute; inset: 0; background: linear-gradient(90deg, #0a0a0a 40%, rgb(10 10 10 / .7) 50%, rgb(10 10 10 / 0) 62%); }
.card { position: absolute; left: 84px; top: 0; bottom: 40px; display: flex; flex-direction: column; justify-content: center; }
img { width: 168px; height: 168px; border-radius: 50%; object-fit: cover; object-position: 50% 30%; box-shadow: 0 0 0 4px #0a0a0a, 0 0 0 5px #333; }
h1 { margin-top: 28px; font: 400 92px Display; letter-spacing: -.01em; line-height: 1; }
.roles { margin-top: 20px; font: 400 28px Mono; color: #a3a3a3; letter-spacing: .02em; }
.roles b { color: #f59e0b; font-weight: 400; padding: 0 .25em; }
.hook { margin-top: 26px; font-size: 32px; line-height: 1.35; color: #fafafa; }
.hook span { display: block; color: #a3a3a3; }
.foot { position: absolute; left: 84px; right: 84px; bottom: 44px; display: flex; justify-content: space-between; font: 400 20px Mono; color: #737373; }
.foot b { color: #e5e5e5; font-weight: 400; }
</style></head><body>
<svg viewBox="0 0 ${W} ${H}"><path class="g" d="${gray}"/><path class="l" d="${lit}"/></svg>
<div class="fade"></div>
<div class="card">
  <img src="${file('public/avatar-400.jpg')}">
  <h1>${business.founder}</h1>
  <p class="roles">${roles.join('<b>·</b>')}</p>
  <p class="hook"><span>${lead}</span>${hook}</p>
</div>
<div class="foot"><span>harshasomisetty.com</span><span><b>${countryCount}</b> countries · <b>${flights.flights}</b> flights</span></div>
</body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// A file:// page may load the local fonts and photo; an about:blank page may not.
const tmp = join(mkdtempSync(join(tmpdir(), 'og-')), 'og.html');
writeFileSync(tmp, html);
await page.goto(`file://${tmp}`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: new URL('public/og.png', root).pathname });
await browser.close();
console.log('wrote public/og.png');
