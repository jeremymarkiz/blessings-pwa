self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open('blessings-cache-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'blessing.html',
        'styles.css',
        'index.js',
        'blessings.js',
        'blessing.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
