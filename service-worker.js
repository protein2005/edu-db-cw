/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b75d786f3aa45c93fde275636cf23a95"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.10a1179b.css",
    "revision": "c29d50e984dabf68865d4274afab6926"
  },
  {
    "url": "assets/img/GET_allRequests.24d78636.png",
    "revision": "24d786362e25dd2bab5e431e0303ebd6"
  },
  {
    "url": "assets/img/GET_user.ba4ae536.png",
    "revision": "ba4ae5365ea2ba1f49220f032a580046"
  },
  {
    "url": "assets/img/PATCH_user_1.c70a2074.png",
    "revision": "c70a2074da433f0a74670d5bdafa3dc8"
  },
  {
    "url": "assets/img/PATCH_user_2.9c91f5de.png",
    "revision": "9c91f5de0cc7c83be023e4e6f2fcbe9a"
  },
  {
    "url": "assets/img/POST_signin.e63d8ea4.png",
    "revision": "e63d8ea4cea87bae6273723c70fa5680"
  },
  {
    "url": "assets/img/POST_signup_1.f603572d.png",
    "revision": "f603572d4b882f5bce45ab8ef4c2574e"
  },
  {
    "url": "assets/img/POST_signup_2.d6d968f3.png",
    "revision": "d6d968f3dc984a7d202ccb5a5d063a89"
  },
  {
    "url": "assets/img/POST_uploadRequest.0b16ea12.png",
    "revision": "0b16ea123331729c755196a0d5dbce88"
  },
  {
    "url": "assets/img/relational_schema.094ee927.png",
    "revision": "094ee927e01563b4c7f54c42bb73eeb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.cec2ed9f.js",
    "revision": "84b987c051a2f5be2207e7f758438054"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.b033c891.js",
    "revision": "66d237c43afa7ae2acd5034a2b3b7cea"
  },
  {
    "url": "assets/js/14.4c864c5e.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.73d7025e.js",
    "revision": "fcb55ba3e1e5ffffa4416a288436253d"
  },
  {
    "url": "assets/js/16.9a369fb1.js",
    "revision": "2e8ffc63aca523f6cd975e6b8ab2ff1a"
  },
  {
    "url": "assets/js/17.ab4b795a.js",
    "revision": "b9c5ae93666b534b010b9ebdee09c9ad"
  },
  {
    "url": "assets/js/18.576f0669.js",
    "revision": "561d02b40b314d612fb7127ed4cfcb36"
  },
  {
    "url": "assets/js/19.3d56db05.js",
    "revision": "88c7be85a96dc0cc35e1ffb380c9cc42"
  },
  {
    "url": "assets/js/2.749f8ca3.js",
    "revision": "5cac3ec89f678e7e610423d7801dbae5"
  },
  {
    "url": "assets/js/20.40869d68.js",
    "revision": "10189e0d113cdd33f96838094ee17486"
  },
  {
    "url": "assets/js/21.069e3cc6.js",
    "revision": "4bcd1543b4036ed224dcb02ed50b6fb1"
  },
  {
    "url": "assets/js/22.c9f64472.js",
    "revision": "e88b799db137f6507a38a7624483dae2"
  },
  {
    "url": "assets/js/23.386e40d6.js",
    "revision": "a552eeff31e7896c62212ed2bbadafcc"
  },
  {
    "url": "assets/js/24.f132e4b0.js",
    "revision": "3e1e0768d3b2f77422eaba5f12d6a2c4"
  },
  {
    "url": "assets/js/26.3c108c65.js",
    "revision": "14070395307afbb22387ff5bad8d960c"
  },
  {
    "url": "assets/js/3.007bbb9e.js",
    "revision": "7c0db25504ea7009e5f3dd2e68008f5a"
  },
  {
    "url": "assets/js/4.4ded2ed6.js",
    "revision": "e82d2d7c0cbf65eceb164c2b4d9f1db9"
  },
  {
    "url": "assets/js/5.77652e35.js",
    "revision": "956a31b5a51211553849fb62eae2af2a"
  },
  {
    "url": "assets/js/6.cb1ca25b.js",
    "revision": "fa5e8c6dd8fcfb1e81a1277f88437590"
  },
  {
    "url": "assets/js/7.eb73e1ac.js",
    "revision": "5b4888d3d6bfcdf50f41d84f97b97416"
  },
  {
    "url": "assets/js/8.f7398b0c.js",
    "revision": "b6a14a3bc9caded74fad7965e01d9116"
  },
  {
    "url": "assets/js/9.6a0c4c57.js",
    "revision": "0451ff4db2380cc8e2e1dc8fb14be457"
  },
  {
    "url": "assets/js/app.d853d21d.js",
    "revision": "d070150204c18f9686d5f8fbf67bc6cd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8dc5ed5cd7b82290535ad1a757801878"
  },
  {
    "url": "design/index.html",
    "revision": "baf782dcd53a182fa5e04e158d64fc24"
  },
  {
    "url": "index.html",
    "revision": "6cb847970215707567a3c420916a85bb"
  },
  {
    "url": "intro/index.html",
    "revision": "aa5b1358dd7b9fd35848be182f86840a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f75c02c7559c26632256d9a64b7cd819"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "351e16d7d05071a6065fbb585b4e4664"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "53e8c4188266940f72ed5870d73daa8c"
  },
  {
    "url": "software/index.html",
    "revision": "99c737df96b08039da5e4a5a3a24bbe5"
  },
  {
    "url": "test/index.html",
    "revision": "776c323812d0c5d1148dd36015a968ef"
  },
  {
    "url": "use cases/index.html",
    "revision": "0ef0e3029814291512d6f489df53e263"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
