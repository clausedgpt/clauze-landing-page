// Tell IndexNow engines (Bing, Yandex, Seznam…; Bing feeds ChatGPT search and
// Copilot) that the site changed. Run after a production deploy:
//   pnpm indexnow
// Submits every URL in the live sitemap. The key is public by design: it
// only proves we control clauze.tn (public/<key>.txt).
const SITE = "https://clauze.tn";
const KEY = "0148346594714100962af690948b3b8e";

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(SITE));
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok) process.exit(1);
