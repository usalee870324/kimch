// 최소 서비스 워커 — PWA 설치 자격용
// 네트워크 요청에는 개입하지 않음
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
