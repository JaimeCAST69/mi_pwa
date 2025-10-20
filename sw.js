const cacheName = "cache-offline-v1";
const filesoffline = [
  "./",
  "./index.html",
  "./pages/electronica.html",
  "./pages/limpieza.html",
  "./styles.css",
  "./main.js",
  "./manifest.json",
  "./img/192.png",
  "./img/512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(filesoffline);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});