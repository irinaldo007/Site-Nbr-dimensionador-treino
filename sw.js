const CACHE_NAME = 'fitcloud-v1'
const FILES = ['FitCloud_Pro_PWA.html', 'manifest.json']

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)))
  self.skipWaiting()
})

self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => r))
  )
})
