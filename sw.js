const C="forja-v2";const F=["./","index.html","config.js","manifest.json","icon-192.png","icon-512.png"];
// Login e banco do Firebase sempre pela rede
const LIVE=/(firestore|identitytoolkit|securetoken|firebaseinstallations)\.googleapis\.com$/;
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||LIVE.test(new URL(e.request.url).hostname))return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==="navigate"?caches.match("index.html"):Response.error()))))});
