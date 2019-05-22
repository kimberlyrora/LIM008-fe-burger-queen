if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "08802fc41645860b29f3fdfea63a539c"
  },
  {
    "url": "precache-manifest.0caa9531cee2914445359bca55463ed9.js",
    "revision": "0caa9531cee2914445359bca55463ed9"
  },
  {
    "url": "service-worker.js",
    "revision": "5bbd51f421e7f85e3d66651141780a4b"
  },
  {
    "url": "static/css/main.a9c3b7a7.chunk.css",
    "revision": "fe3be996c5c5890b93ad1c9aa55c4f16"
  },
  {
    "url": "static/js/2.b2938751.chunk.js",
    "revision": "d0485aaae60409d7eb25107bb48ff57d"
  },
  {
    "url": "static/js/main.fb0d0f89.chunk.js",
    "revision": "7591241d6dc69aadfe5164aabad9eefe"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);
   
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
   
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
   
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }