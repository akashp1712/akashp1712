import assert from 'node:assert/strict';

const base = process.env.CHECK_BASE_URL || 'http://localhost:3000';
const canonical = process.env.CHECK_CANONICAL_URL || 'https://www.akashpanchal.com';
let checks = 0;
async function get(path, accept = 'text/html', status = 200) {
  const response = await fetch(new URL(path, base), { headers: { Accept: accept } });
  assert.equal(response.status, status, `${path}: status for ${accept}`);
  const body = await response.text();
  assert.ok(body.length > 20, `${path}: meaningful body`);
  checks++;
  return { response, body };
}
function varyAccept(response) {
  assert.ok(response.headers.get('vary')?.toLowerCase().split(/,\s*/).includes('accept'), 'Vary must include Accept');
}
function schema(body) {
  return [...body.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
}
for (const path of ['/', '/work-with-me', '/work/vibeframes', '/work/evercall']) {
  const { response, body } = await get(path);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const actualCanonical = body.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(actualCanonical && new URL(actualCanonical).href, new URL(path, canonical).href, `${path}: canonical`);
  assert.ok(body.includes('type="text/markdown"'), `${path}: discoverable alternate`);
  assert.ok(body.includes('<h1>'), `${path}: server-rendered heading`);
  assert.ok(schema(body).length, `${path}: valid JSON-LD`);
  assert.match(response.headers.get('cache-control'), /no-store/, `${path}: HTML cache safety`);
  const md = await get(path, 'text/markdown');
  assert.match(md.response.headers.get('content-type'), /text\/markdown/);
  assert.match(md.body, /^# /);
  assert.ok(!md.body.includes('<!DOCTYPE'), `${path}: actual Markdown`);
  varyAccept(md.response);
}
const profile = JSON.parse((await get('/profile.json', 'application/json')).body);
assert.equal(profile.url, canonical);
assert.equal(profile.current_role.title, 'AI Software Engineer');
assert.equal(profile.current_role.org, 'Salesforce');
assert.equal(profile.project_briefs.length, 2);
assert.ok(profile.project_briefs.every(p => p.url.startsWith(canonical) && p.sources.length >= 2));
const about = (await get('/about.md', 'text/markdown')).body;
assert.ok(about.includes(profile.current_role.title));
assert.ok(about.includes(`${canonical}/work-with-me`));
for (const path of ['/work-with-me.md', '/work/vibeframes.md', '/work/evercall.md', '/articles/voice-agents-hard-problems.md', '/tutorials/livekit-voice-agents.md']) {
  const { response, body } = await get(path, 'text/markdown');
  assert.match(response.headers.get('content-type'), /text\/markdown/);
  assert.ok(!body.includes('\\n\\n'), `${path}: actual newlines`);
}
for (const path of ['/articles/voice-agents-hard-problems', '/tutorials/livekit-voice-agents']) {
  const html = await get(path);
  assert.ok(html.body.includes(`type="text/markdown" href="${canonical}${path}.md"`));
  const md = await get(path, 'text/markdown');
  assert.match(md.response.headers.get('content-type'), /text\/markdown/);
  varyAccept(md.response);
}
for (const accept of ['text/html', '*/*', 'text/markdown;q=0, text/html', 'text/markdown;q=0.5,text/html;q=0.9', 'text/markdown,text/html', 'text/markdown;q=0,*/*;q=1']) {
  const { response } = await get('/', accept);
  assert.match(response.headers.get('content-type'), /text\/html/, `keep HTML for ${accept}`);
}
const robot = (await get('/robots.txt', 'text/plain')).body;
assert.match(robot, /User-Agent: OAI-SearchBot/i);
assert.ok(robot.includes(`${canonical}/sitemap.xml`));
const sitemap = (await get('/sitemap.xml', 'application/xml')).body;
for (const path of ['/work-with-me', '/work/vibeframes', '/work/evercall']) {
  assert.ok(sitemap.includes(`<loc>${canonical}${path}</loc>`));
}
const index = (await get('/llms.txt', 'text/plain')).body;
assert.match(index, /## When to use this portfolio/);
assert.ok(index.includes(`${canonical}/work/vibeframes.md`));
for (const path of ['/__missing-discovery-check', '/work/not-a-project', '/articles/not-an-article', '/work/not-a-project.md', '/tutorials/not-a-tutorial.md']) {
  const md = await get(path, 'text/markdown', 404);
  assert.match(md.response.headers.get('content-type'), /text\/markdown/);
  assert.ok(md.body.includes('/llms.txt'));
}
await get('/__missing-discovery-check', 'text/html', 404);
// Known HTML-only pages and existing assets must survive negotiation.
await get('/harness', 'text/markdown');
const asset = await fetch(new URL('/akash-headshot-tshirt.jpg', base), { headers: { Accept: 'text/markdown' } });
assert.equal(asset.status, 200);
assert.match(asset.headers.get('content-type'), /image\/jpeg/);
console.log(`Discovery checks passed (${checks} HTTP responses plus image asset).`);
