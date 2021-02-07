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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8236e12ff0b207ec12d8edb346c560bc"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "0297090b24f48bd207ac36aab43353a9"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "f071bc08a60c546cb71c1e399b858270"
  },
  {
    "url": "Another/Review.html",
    "revision": "c29bf82e79de16a265ea8121339501e4"
  },
  {
    "url": "assets/css/0.styles.33264f9c.css",
    "revision": "9ac0a4993564e4db12f4d35e46d78db8"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/D001_001.0841a01f.png",
    "revision": "0841a01fd0c4946af6f80d1fdf0b24e1"
  },
  {
    "url": "assets/img/D001_002.c5284bfd.png",
    "revision": "c5284bfd8a9a18cc6cb2f081eb867f41"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/snap_d001.9cd57df9.jpg",
    "revision": "9cd57df92683e9ce97495409f16d2ebb"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.cae7971b.js",
    "revision": "27366290aab094ee1b69b5eef48c293a"
  },
  {
    "url": "assets/js/11.176cb32c.js",
    "revision": "b71892caec28002a4cdc1ee0056737bc"
  },
  {
    "url": "assets/js/12.301a7a29.js",
    "revision": "09b89770b29b05cad8cd85822cc07706"
  },
  {
    "url": "assets/js/13.8d155104.js",
    "revision": "d757dba69c8ea9258a8b97ac9d55e7ff"
  },
  {
    "url": "assets/js/14.697d0824.js",
    "revision": "f3ec1f14fa91e26d8b1d118166d50f31"
  },
  {
    "url": "assets/js/15.b48d7c04.js",
    "revision": "450c5339bb92723b4402fec0767b7a66"
  },
  {
    "url": "assets/js/16.7a777a6c.js",
    "revision": "395356516270f588c619f9015a5367f2"
  },
  {
    "url": "assets/js/17.5a5329ec.js",
    "revision": "e5927ca4821a46e8cdf38c2f9d6f8c22"
  },
  {
    "url": "assets/js/18.fad2455a.js",
    "revision": "ac6a678278e1fd7ab2891d72c980557e"
  },
  {
    "url": "assets/js/19.d4f8d96d.js",
    "revision": "4afcbb6ad74fec5a537f535521c49af1"
  },
  {
    "url": "assets/js/2.684ae4ca.js",
    "revision": "02b1500506d68225d2ae0ac0cee0fa36"
  },
  {
    "url": "assets/js/20.40afa950.js",
    "revision": "66c191d40ff7e1cf0d1e2c9d699aa0ac"
  },
  {
    "url": "assets/js/21.138d9ba7.js",
    "revision": "fda9b90772647777153e51d24a65b7fe"
  },
  {
    "url": "assets/js/22.c621f9fb.js",
    "revision": "49a5d6422264e1acbef1817fa426076f"
  },
  {
    "url": "assets/js/23.174f1d7e.js",
    "revision": "31f6f4ee52885d037a0d2475614155b0"
  },
  {
    "url": "assets/js/24.a6fb0813.js",
    "revision": "cc454a65a80e3d6901d52088e136e0fa"
  },
  {
    "url": "assets/js/25.6d58ba21.js",
    "revision": "91f734aecbc9002600921b57cf95ed4f"
  },
  {
    "url": "assets/js/26.7b28d857.js",
    "revision": "776d6c5d132272bf546fe4a6aa060da6"
  },
  {
    "url": "assets/js/27.c5d8d77a.js",
    "revision": "64dec2bc583c0fdc7047e52e28547096"
  },
  {
    "url": "assets/js/28.3b3ba45e.js",
    "revision": "2545c726211fb3ba1571e621ed31f5b2"
  },
  {
    "url": "assets/js/29.c373ed89.js",
    "revision": "313b8ce53baa35d96daa543a26d8e11c"
  },
  {
    "url": "assets/js/3.5748c91e.js",
    "revision": "d8ec768c210d3cc64e7aa4b7171ed221"
  },
  {
    "url": "assets/js/30.db507de8.js",
    "revision": "b2ce7311a3aa9f7ccdad0772bd10c033"
  },
  {
    "url": "assets/js/31.6b974850.js",
    "revision": "a8ed2a1599c5bf650d8c75312d2f6b7e"
  },
  {
    "url": "assets/js/32.92733792.js",
    "revision": "126185912159f2d515eb7752efe8c598"
  },
  {
    "url": "assets/js/4.b99ca403.js",
    "revision": "59d2e28a5fb6d5d24efc6c3688691327"
  },
  {
    "url": "assets/js/5.c8914d84.js",
    "revision": "a3a689402c6b4df98603670ca0c405ec"
  },
  {
    "url": "assets/js/6.676bf522.js",
    "revision": "4c02fc42aab3b51900ba049ff4c20f07"
  },
  {
    "url": "assets/js/7.73d7e162.js",
    "revision": "e9acb37802423516c7ecab138634c4c0"
  },
  {
    "url": "assets/js/8.769a814e.js",
    "revision": "5a06f306824317b228cf27d7fcb07067"
  },
  {
    "url": "assets/js/9.3cee9950.js",
    "revision": "38c2fa4c0bd5d2a030ee325e2b399673"
  },
  {
    "url": "assets/js/app.a6243117.js",
    "revision": "39ccda5162cbf5bf18b7c59b06b02311"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "d9b72851087a4284a1f44aa5107b630c"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "00dd81fde1fa1e71209931c241a63ba8"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "374e46bb3b7ac60fe363ba39dc24a9f3"
  },
  {
    "url": "FAQ/DigestionHeap/D001.html",
    "revision": "98e1d14783b3af9491f0fe1faccb2ad8"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "18f79746fd3f88fee7d53a3f72711f59"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "4620f7504d6dbca1c06280cfd2b6a6e6"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "b58834cf09d6e8e94b1e92bad5708e4c"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "img/Myself/antForest.png",
    "revision": "c1210c58f6117b2d4f69d86f87df44b2"
  },
  {
    "url": "img/Myself/userHead.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "321c72d094600e3fd217890df37d3045"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "4a9f9d292c7f84d28329432c95cb5d5c"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "d4cd128b21472e4f9379b9ccff89eeb4"
  },
  {
    "url": "Thought/index.html",
    "revision": "de9fcb3d2045b006d7138e6f71fedf55"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "09b060edaa0926844a064ad03df9e2a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
