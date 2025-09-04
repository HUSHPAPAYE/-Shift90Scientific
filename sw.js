const CACHE="shift90scientific-v2";
const ASSETS=["./","./index.html","./style.css?v=1","./app.js?v=1","./manifest.webmanifest?v=1","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
