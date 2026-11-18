const CACHE='cippprep-v2';
const BASE=new URL('./',self.location.href);
const files=['./','index.html','styles.css','app.js','core.js','data/questions.js','data/lessons.js','manifest.webmanifest','icons/icon.svg','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(files.map(p=>new URL(p,BASE).href))));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const name of await caches.keys()){if(name.startsWith('cippprep-')&&name!==CACHE)await caches.delete(name);}await self.clients.claim();})());});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;try{return await fetch(event.request);}catch{return event.request.mode==='navigate'?(await cache.match(new URL('index.html',BASE).href)):Response.error();}})());});
