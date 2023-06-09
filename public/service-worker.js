// service-worker.js

const cacheName = 'my-app-cache-v2';
const cacheFiles = [
  '/index.html',
  '/manifest.json',
  '/logo_192x192.png',
  '/logo_512x512.png',
  '/_redirects',
  '/offline.html',
];

// Install event: Cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
      .then(() => self.skipWaiting())
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Serve cached files or fetch from network
self.addEventListener('fetch', event => {
  // Check if the request URL has a supported scheme
  if (event.request.url.startsWith('http') || event.request.url.startsWith('https')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});

// Fetch and cache a new resource
function fetchAndCache(request, cache) {
  return fetch(request).then(response => {
    // Check if the response is valid and cacheable
    if (response.ok && isCacheable(request)) {
      cache.put(request, response.clone()); // Cache the response
    }
    return response;
  }).catch(() => {
    // Handle fetch errors, e.g., show a custom offline page
    // You can customize this based on your application's needs
    return caches.match('/offline.html');
  });
}

// Check if a request is cacheable
function isCacheable(request) {
  // Add your custom logic here to determine cacheability
  // For example, you can exclude certain URLs or request methods
  return request.method === 'GET';
}
