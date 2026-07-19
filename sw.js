// 최소 서비스 워커 — PWA 설치 자격 요건 충족용
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // 네트워크 우선, 그대로 통과
  e.respondWith(fetch(e.request).catch(() => new Response('offline')));
});
