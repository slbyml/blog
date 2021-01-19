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
    "url": "404.html",
    "revision": "fe855de5ad662c7c42e792b08e1c00cc"
  },
  {
    "url": "algorithm/easy.html",
    "revision": "54c600688fa00d16fe3f6d6cde66c83b"
  },
  {
    "url": "algorithm/hard.html",
    "revision": "622281b952e217396ec7c3b82ace4381"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "a77f4332c6801a608ae40154135ba292"
  },
  {
    "url": "algorithm/study.html",
    "revision": "a33ed0de1dadbfbf5bd38774a306692a"
  },
  {
    "url": "assets/css/0.styles.3e4de439.css",
    "revision": "62dae9644fe360abad89377e5a3db438"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2f1e790c.js",
    "revision": "54e3c3d7a164b44766dfe15c09bff091"
  },
  {
    "url": "assets/js/11.fc50dd2c.js",
    "revision": "550a076637ffe8c18a8ab0ed68a67cb4"
  },
  {
    "url": "assets/js/12.e781698e.js",
    "revision": "a59e465e2365c21cccd74dd979e038d4"
  },
  {
    "url": "assets/js/13.ecc982bb.js",
    "revision": "af2f817d2e85dfe913ea101cba6caec2"
  },
  {
    "url": "assets/js/14.89585469.js",
    "revision": "8a5cec01d06e9bc0be44292bb6b6a269"
  },
  {
    "url": "assets/js/15.c4db10d1.js",
    "revision": "dc70e1cc2065eb131d002b3ef65dfc59"
  },
  {
    "url": "assets/js/16.c7aa26ff.js",
    "revision": "13981b89389c3e97bccd52e97015f54a"
  },
  {
    "url": "assets/js/17.34d78693.js",
    "revision": "aa29c55fed95ae4a041ac4b1113e88cf"
  },
  {
    "url": "assets/js/18.db13559c.js",
    "revision": "ee214cbd15200a1c77de71dd726fc252"
  },
  {
    "url": "assets/js/19.b02fc599.js",
    "revision": "3c57db92a4520bb8f86f0658a16accb6"
  },
  {
    "url": "assets/js/2.2db4b004.js",
    "revision": "c862f04334be384d1004a59aab792880"
  },
  {
    "url": "assets/js/20.495cfc66.js",
    "revision": "622455ba5d5bb2dac6a23fb574025da9"
  },
  {
    "url": "assets/js/21.19e99feb.js",
    "revision": "e1b3bc91ab6c6f05baffce7bc0dacc5d"
  },
  {
    "url": "assets/js/22.6206a930.js",
    "revision": "4832a2ce723aa599e674f1342dcf73b7"
  },
  {
    "url": "assets/js/23.e5ba7143.js",
    "revision": "4c912327425d4e1dbe756d5355682563"
  },
  {
    "url": "assets/js/24.2c21437e.js",
    "revision": "789db7659d96201904d3ee8eaca338a8"
  },
  {
    "url": "assets/js/25.2467ee58.js",
    "revision": "748295d762e492f9663c57b740db5464"
  },
  {
    "url": "assets/js/26.dfde87b1.js",
    "revision": "bc70e7bea6e40d28894fc3c988d93c19"
  },
  {
    "url": "assets/js/27.f163ed93.js",
    "revision": "9b3de463c0b13a4560017c0e85e46fc0"
  },
  {
    "url": "assets/js/28.97b7c1a4.js",
    "revision": "cabc915c10ff71babab86149e0aa34c2"
  },
  {
    "url": "assets/js/29.4328f110.js",
    "revision": "57d73e364005024ef2ea4289016242f1"
  },
  {
    "url": "assets/js/3.3e82d366.js",
    "revision": "ec10faa518b23ce904963decd41aeb00"
  },
  {
    "url": "assets/js/30.b1ad010e.js",
    "revision": "583306a56d3d95a171578aa15f01fa8a"
  },
  {
    "url": "assets/js/31.5dcce123.js",
    "revision": "7cb0bc4e089e9bdfc0cb6cde417eb235"
  },
  {
    "url": "assets/js/32.8a58848c.js",
    "revision": "6f08fb24bf081ac08f939c29b33c496c"
  },
  {
    "url": "assets/js/33.0e79c3cc.js",
    "revision": "775f579b8d1d1e10b5dc330f937efa61"
  },
  {
    "url": "assets/js/34.aab63de1.js",
    "revision": "809e67d9198dc5a56a608465f17d0b53"
  },
  {
    "url": "assets/js/35.b83e63f1.js",
    "revision": "212ab7e5b53bacbf2cd280eef25beb9b"
  },
  {
    "url": "assets/js/36.730e2734.js",
    "revision": "7a38ef2ea21a3a0b83c6991312153f81"
  },
  {
    "url": "assets/js/37.7de73e9d.js",
    "revision": "104ff99df94bba29fbcada5e44f5e2a1"
  },
  {
    "url": "assets/js/38.f1277980.js",
    "revision": "872322255beeeecaae943d35cbda3420"
  },
  {
    "url": "assets/js/39.c578bf8e.js",
    "revision": "98664e493f4aa49ecc5d63af2021bc21"
  },
  {
    "url": "assets/js/4.50510ed3.js",
    "revision": "392ca67ae11d1cc4ef530652307b81e5"
  },
  {
    "url": "assets/js/40.3d09301a.js",
    "revision": "bb3edb24a6ee430eae6c2430c7d56c08"
  },
  {
    "url": "assets/js/41.c0869a13.js",
    "revision": "e250fe03ff14449d34aad151cb7a2763"
  },
  {
    "url": "assets/js/42.1643236e.js",
    "revision": "bcac676db851fe4ea8ae0b816909e060"
  },
  {
    "url": "assets/js/43.9c1bf6f9.js",
    "revision": "09c992f23471e7248c074450364e815e"
  },
  {
    "url": "assets/js/5.95815672.js",
    "revision": "90356e0c3234173cf2d9f24a5439c6a0"
  },
  {
    "url": "assets/js/6.1c869eca.js",
    "revision": "07568be54d8e0ab8c20e65800cecd3bc"
  },
  {
    "url": "assets/js/7.6aa69135.js",
    "revision": "bca2727b15820b030d18050f0b0d5120"
  },
  {
    "url": "assets/js/8.c5cc6b3a.js",
    "revision": "2ec8de085a5d44f2642d0b480447a22e"
  },
  {
    "url": "assets/js/9.e5662abb.js",
    "revision": "154c630e64b9c8486cd2d68fa3e4162e"
  },
  {
    "url": "assets/js/app.15a74871.js",
    "revision": "dc0d7e36402daefeb1cdb45ac2cb2906"
  },
  {
    "url": "baidu_verify_cgUkUlKV6V.html",
    "revision": "19effa381da48835eae25f16f0f8678f"
  },
  {
    "url": "css/index.html",
    "revision": "e68d910cc495e494f0344084aa179a64"
  },
  {
    "url": "css/shape.html",
    "revision": "7828685d8b2eaaaf32ecf5a8fc1604a0"
  },
  {
    "url": "googlee44c768606037fad.html",
    "revision": "9cb63466d365893ce39433d429b3892a"
  },
  {
    "url": "icon.png",
    "revision": "01384c1ee1785613ef848522f2b43ee6"
  },
  {
    "url": "index.html",
    "revision": "a964d4c2d1118735f13206de83764356"
  },
  {
    "url": "javascript/axios.html",
    "revision": "de964b3d0f69505ff0f3ccdbcffffb7c"
  },
  {
    "url": "javascript/domCode.html",
    "revision": "eca46bd3136f7c4e92825cfe1eccf8e5"
  },
  {
    "url": "javascript/extend.html",
    "revision": "74083e8c1751ac59678372b0e6b5b5ba"
  },
  {
    "url": "javascript/flatten.html",
    "revision": "0a52aaf1621631fe26d36123f5802db9"
  },
  {
    "url": "javascript/genre.html",
    "revision": "f5363ab239685c179de18cb1ededccf0"
  },
  {
    "url": "javascript/index.html",
    "revision": "2d6a5a020c148b1c97640a5d88d2cf7f"
  },
  {
    "url": "javascript/js.html",
    "revision": "a531355479808d5a2421967b99c98dfb"
  },
  {
    "url": "javascript/type.html",
    "revision": "901c2a4fe74e60f6592c055200884b52"
  },
  {
    "url": "link.jpg",
    "revision": "aa2f5f6ec6d08ef85fd78ec38bc8f87d"
  },
  {
    "url": "links/index.html",
    "revision": "1d9796a2c365ca07ecf2cfa4feda180c"
  },
  {
    "url": "list/index.html",
    "revision": "1a7e9a6120f9c6183d4118f2fc461a87"
  },
  {
    "url": "polyfill/index.html",
    "revision": "f1ee7e10f77b2a1f3d72dadf95d413d2"
  },
  {
    "url": "QA/css.html",
    "revision": "26a80b63af8625f5296af89d10a229b6"
  },
  {
    "url": "QA/free.html",
    "revision": "876b93d47ca834321c7a28591a80f700"
  },
  {
    "url": "QA/http.html",
    "revision": "261e6bdeeb194de9b5f65c0c90e597b4"
  },
  {
    "url": "QA/index.html",
    "revision": "02b43a9a94096eef5ac9063c2cd112cc"
  },
  {
    "url": "QA/js-theory.html",
    "revision": "c8defad3184dc085cd4ba9f888051c99"
  },
  {
    "url": "QA/virtaul.html",
    "revision": "748a5886dedf3a6862b3bf8bbad01ee0"
  },
  {
    "url": "QA/vue.html",
    "revision": "d3498629daa2f6a39c5e8af897f41ec1"
  },
  {
    "url": "QA/webpack.html",
    "revision": "c244d24fb49b888969c0e302b78fc479"
  },
  {
    "url": "saves/blog.html",
    "revision": "f78cd6c1269e66ebcba7ee1490adde5e"
  },
  {
    "url": "saves/index.html",
    "revision": "2cd48508bfc04da217e8fafe7873f652"
  },
  {
    "url": "saves/zoom.html",
    "revision": "1a7b8e0e956d524d7432b5b5f17484d3"
  },
  {
    "url": "space/index.html",
    "revision": "15d5d9fa27a70a8607a3ae47b4f5b31c"
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
