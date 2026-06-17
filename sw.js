// Fulfill Chrome's PWA criteria with a valid fetch interceptor
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Must return a response to be recognized by mobile Chrome
  event.respondWith(fetch(event.request));
});
