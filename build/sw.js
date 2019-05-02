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
    "revision": "72c246643a8c57d699467a284dea880b"
  },
  {
    "url": "precache-manifest.e9178efcff53751f1b2ac5a80e5a79b5.js",
    "revision": "e9178efcff53751f1b2ac5a80e5a79b5"
  },
  {
    "url": "service-worker.js",
    "revision": "36064c9f1cf5b860df7b40b74273da4d"
  },
  {
    "url": "static/css/main.7df5d165.chunk.css",
    "revision": "527c9a598403acadec2f4e02d041088a"
  },
  {
    "url": "static/js/2.79287b87.chunk.js",
    "revision": "6591164ac470a9ec6960c90870699b23"
  },
  {
    "url": "static/js/main.b0a66acf.chunk.js",
    "revision": "d8a48ab8cd5c59ee88e13f756a73bba0"
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