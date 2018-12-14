importScripts('nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "nuxt/app.108dbffd239b3060457f4b5389ff83c8.css",
    "revision": "108dbffd239b3060457f4b5389ff83c8"
  },
  {
    "url": "nuxt/app.e5bbaf08e6db9aeeb703.js",
    "revision": "398aa38ba17de7fe7e42b268e37a697a"
  },
  {
    "url": "nuxt/layouts_default.64b4df765e3ddc07cbea.js",
    "revision": "a869066cd846b77a8b118d4995003723"
  },
  {
    "url": "nuxt/manifest.de50b08cd8f54eb066ae.js",
    "revision": "f9d668fff2ed3d7ee212ac844148f917"
  },
  {
    "url": "nuxt/pages_adout_me.294d6e3bfea1257779cc.js",
    "revision": "7919ce8eb3053f0b57d4f184a07bcdb8"
  },
  {
    "url": "nuxt/pages_home.c423005a32c1d42ed87a.js",
    "revision": "03bb584f8c241e04062e48be0312b59b"
  },
  {
    "url": "nuxt/pages_index.73ba2f497dfa722eb4d1.js",
    "revision": "26aaa2c025381d560752f363fb086f32"
  },
  {
    "url": "nuxt/vendor.5691066454bba3b177c9.js",
    "revision": "66a22118e013ab572f63e6f54a2b7c2c"
  }
], {
  "cacheId": "wecan-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





