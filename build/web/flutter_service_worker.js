'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f214ca842ce5f8b05abf13947c8e4575",
"assets/AssetManifest.bin.json": "55b77692c6fc98f0847622f93a84a5aa",
"assets/AssetManifest.json": "108098b3bde33f6d0eb8cdfce50be8de",
"assets/assets/icons/address.svg": "bd3f2dda0b37c5833a94ca6e9c174217",
"assets/assets/icons/bg.svg": "a94ac2ed791fca88499b11d665d04c84",
"assets/assets/icons/Call.svg": "96290f9f724a96b64a1b144c03c26c31",
"assets/assets/icons/Call_box.svg": "d3df025461e4e8f802925c838fe34cf6",
"assets/assets/icons/Cardiologist.svg": "7c5fb3db7dd4d7b97fa149e5bab60acd",
"assets/assets/icons/Chat.svg": "b693ae8ee1353fd359c993600e25e2bb",
"assets/assets/icons/Chat_box.svg": "393dcb7a8674d35f8a8105a0ab1e4869",
"assets/assets/icons/Clock.svg": "66d4402cafc62cd16e0e917d8bb3d99a",
"assets/assets/icons/edit.svg": "632c03c282e6961577174a020e103a15",
"assets/assets/icons/event.svg": "6eadf10eb0978ce6e1545ceb701d6523",
"assets/assets/icons/gerda_logo.svg": "597ede90f4a1aa1814a8ffddc83cf932",
"assets/assets/icons/home.svg": "b358fc7d70f4b3035baa028c89e4dcee",
"assets/assets/icons/location_pin.svg": "63598c309f6a1523f3ea510626160cd2",
"assets/assets/icons/Menu.svg": "1039e2b8ac8366dc63212bd4e2fa15d3",
"assets/assets/icons/Neurosurgeon.svg": "45b3fef1564f7e98697ef33bbe911ba2",
"assets/assets/icons/notifications.svg": "5f6a58f42433759cc4840a96b4e2df09",
"assets/assets/icons/Notificatio_box.svg": "0b4c33e7ea0055042152b126f78143b2",
"assets/assets/icons/Pediatrician.svg": "03fd17ff0e6c0e31f36696049b1e29c1",
"assets/assets/icons/Psychiatrist.svg": "925dc6aa689e5d4630ab56d3c1186616",
"assets/assets/icons/Serach.svg": "8412f22a8490a61b9d19694ffe9e4c14",
"assets/assets/icons/splash_bg.svg": "d41fb108b11a59f3f24b18ec77a201cb",
"assets/assets/icons/star.svg": "2670454b36bb32011de43477d92847da",
"assets/assets/icons/stethoscope.svg": "a9675f995d17a0be0a78148c03533091",
"assets/assets/icons/Video.svg": "498c3f660ab92c0c0650c3bee637e984",
"assets/assets/icons/Video_box.svg": "bc0037e1409ccb886cd0e4343e7faef3",
"assets/assets/images/Asma_Khan.png": "604bb0886bb771b2149fe7e6e89675d3",
"assets/assets/images/doctor_big_preview.png": "8dae046f2a2e8d41d16e9a8fb13fc1b1",
"assets/assets/images/Dr.%2520Kiran%2520Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/Johir_Raihan.png": "93ed4a91c445cf56ff6ce6509f345c9d",
"assets/assets/images/Kiran_Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/Masuda_Khan.png": "f029f60ce6f904851d2fc4f2af12836e",
"assets/assets/images/Salina_Zaman.png": "faa2f625f833e0712197405ac5575b2f",
"assets/assets/images/search_doc_1.png": "e2d82253ef8c28c418d9ed58b3716884",
"assets/assets/images/search_doc_2.png": "61194e42304a9d4b4f8d2362864c9917",
"assets/assets/images/search_doc_3.png": "10ee2ad6cc8539dd0372266fb1152310",
"assets/assets/images/search_doc_4.png": "7703c63dd6070a09710df8a0a7ae716e",
"assets/assets/images/Serena_Gome.png": "d397911bc323411bcb7a61726a9103eb",
"assets/assets/images/user_pic.png": "83b0744591b3849bf561789f3b872615",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "075c4cd80865a9f0c27c047d081072dd",
"assets/NOTICES": "bf1e513a644e444fbd0b2eeda38d764e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b429a17f71c25655fc5d48d313c27696",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fd4818176e00fd92d962d0f508357150",
"/": "fd4818176e00fd92d962d0f508357150",
"main.dart.js": "6382a2b2276fc938ee62eba107953794",
"manifest.json": "24e9ed4f3fe2d118faea6896f91764a6",
"version.json": "5ef0031cb4c07c533cedfd4ca71a7a57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
