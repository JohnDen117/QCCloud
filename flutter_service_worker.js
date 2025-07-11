'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "449699dd594ff36d0099774561600e63",
".git/config": "8dc7bb5786c5768e3b8ed6bb0c71828c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "65a14eb141275c813a39fc35d38e6658",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "35d183553668d3680c3889ac8d505883",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cea39128646cad803e2a6d76e05f6d28",
".git/logs/refs/heads/main": "747dfdeaafdeaab679a831164921e129",
".git/logs/refs/remotes/origin/main": "6804ea4505c38b2b76d237f76230acf4",
".git/objects/02/82dab85270f372c73d77a13dc91c6f20a495ec": "ef6bb299dbd4704461a11838953c2843",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/90d901d1e00de39022ba1627e0f6f46bd29c18": "3412bdce933c7ce6829a7eefda6340b0",
".git/objects/13/d1e50c3fd6a4cf987ea417e0ae054d9d6010f8": "567527489b8cb1e29203227caf60764a",
".git/objects/16/748b89b6ecfcc1c549b7b921a8f73edc1000c6": "8f88d13fafd7bd7a0d71779b2fad8e47",
".git/objects/18/417e8b3d845680d586b389dcdd45223224246e": "ce5586618bda5d66c25d480d86e1733b",
".git/objects/18/c0a359ad43656a82c92931a825c496e147ff0b": "f395f679f2ade180bc069d0c2ea982f0",
".git/objects/19/21a6bfdfa80a3de967acf64b76b640402ce286": "83f85c75c75675a93aeecf86cb76ea43",
".git/objects/19/7968bbee1d14a593604a4d78f617029cafd8c6": "0e367c8ec2a2ea34b1d09679e61be41c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/72f324e43acf8232c4eeb9edd767604250f81b": "5e49307e3da849bdf68c4af0374035f9",
".git/objects/1d/2a0c9be28fe3fb7a5583627603e60e7aa96116": "1954da366c374f8a9ff4dec3ff63077a",
".git/objects/1f/efb34a37679099a75f6c8e98a63bc2dae7c195": "363b0bf1c058829e89606f203c5a8d04",
".git/objects/24/cb14f447f48727721e025f60f47779e5600c3b": "198d1ff007f95e99d1c30d87d083b9c1",
".git/objects/26/aa02d5032bb69469cb56a030443f1e74391518": "bc60026ff3c05e611223c3c2298ecd87",
".git/objects/27/8241c99503de5685366f29570aa3be3982f349": "f3a8e9326a7d939709d1288ee8d04cfd",
".git/objects/2d/641509cc0dca5e93322c9f063f4fd25aad01d2": "df5c616676a6890dba2f477f2a7bea21",
".git/objects/33/ac573edd3c3c29ac306cfda403f0ac08408162": "f2de2c7327c744cb4833365409c5a2d4",
".git/objects/33/cbf7a80e9ae058f6109aee9f412f0f69ec6188": "528dd1f39ac792c7155d0f04e4ab6ff8",
".git/objects/35/1aeef61a47030d84c59fced1ceaa7ac71c142a": "0d3c1ff3beff925af39f47316f224b88",
".git/objects/36/f7cbbacfe221cd2c971215b2daa9ac42be6c71": "edc43142b201913f3e6fc5c33bf056cc",
".git/objects/37/f2527ac71d2c2c1f8b39c7e5178bf0023c7082": "cc11ce205a9a0273023dd7c59be8e3c3",
".git/objects/39/85c0c81ba18f5ae446faba18e2753f979def4e": "7734316fa0f7720df045063186cbc27f",
".git/objects/3c/888081eb3e1d65b1027b41870bc082c3226a06": "0632174543b63b8c36f589dd186fe86d",
".git/objects/3d/ce0937f7e1cad49076ac2de916f3bbdf628d45": "ded3d169f3f440931fcf8216f6930fe2",
".git/objects/3e/356c32642f7c2fe2751de8dbdd007c2b7616e5": "47c2353720bc44712d878bf1508ac453",
".git/objects/3e/a8342ac54464f6bc65b5ddd4b6dcd00fa8c618": "fa38c9c7b1b092d63e6e7e24cd2bc5e3",
".git/objects/40/7b321c0e2df3a4aedb8ca1f4fd53cef3d4e436": "a3e763aeb4515628eaeb4e67940af6f2",
".git/objects/40/e44a62809ae7aaba29910701d5c658baac2788": "256b5250bcb9e903d6d2c938a4471d65",
".git/objects/43/53e5a72578350febb9b9c00d29d55c5eb87e45": "85b117cc90dd0746bfd0001abea2e354",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/035cb2c42f3cbe5d186355dc6d4a06f62f9cee": "cfbc2b317481ff188e6c01ab623e1cba",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/52/8ad8901f848f2d4e5e798f405f9e10210f6230": "b96c8096e645d1b431b726eb1156f077",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/9ca88822930608fffa8d22ca15f0c9530f056e": "980864948fe7d9e4954e21b415f176aa",
".git/objects/59/6b6589382bfabac75339ae69666d4c4633894d": "1b74f9f499c64023acae32b8a9100ef8",
".git/objects/5b/394926a3d495075134bfe4436b65917cdbf37a": "58a47c8ef297d6b5b89f2b7b9c07acfc",
".git/objects/5e/dd5bdd8a69a972352d9628638bfbd649e7fa74": "887acfa5f757e4d97cd211ad168c3aff",
".git/objects/61/2370a0a9b5d9605c7750d9af3f6ae705c8817f": "3f2db8cdacd5ea9be6b0689867da3736",
".git/objects/62/c0f0a106175e775af9bd3600c86944fb58d2d2": "85c21fb5dd501feec0d2e2856a8f7782",
".git/objects/64/2b63559ac436ba2342a1e1b78e202ff7d6e3f8": "1bf115c29a464d0184b5c31e408654df",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/7ce69b1ac4a9a2a1e8162197ae9ba6cf1a97ad": "8b50073ee8414bfa31120b4fcaf08b56",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/2d1b049b20c9b5f58d3c3f4a283ed69d9a6cab": "ecbe5d9b19e94ca406128e8cf7907055",
".git/objects/77/3cc80c41ab80c9d88a845bf5a1f1e5b6f37932": "821a262160a80a26af12920d81e86c91",
".git/objects/7f/ddf638d749bcca6a9f2af958368a93236b4500": "2a22461ce4ea2d8e68ac7297e0c4494e",
".git/objects/84/254fa815da873c49cad668433af7ea12fc0437": "5fa20b7b643a2b21f0d69e62b2b72dca",
".git/objects/87/490dd733a98bf688b7c0d0f5947e8220543dd2": "9e4b248323d55e10efb02caf25f8709c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/56e1c93cab3fff03ad4ffcd40c425ba10bd400": "0ef71fe6cf605d18a0ce9c84ef38d4ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/13541f7d4fd542a862f8f9df247fc4271b8c90": "b339dad07cc689d88ddff79cb651a0a9",
".git/objects/8e/0d8f86760cf8be2c901ef3744d2d157dcabeaa": "609eeb9daaee340ee1b1db53fa1d0f8a",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/ef46b2b36af421628d8b856f8bec99048ca2e6": "9a27800b3c2f427be8b0cd9f4be5dea5",
".git/objects/92/df5dfb5994bb37bd512546f1ad87bc2571fadf": "4e6a86e37ae169f98c135dd7d5db3236",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/177399050e8dd85dcf736da840cf03fb6bf906": "68aee776b7cf7566003c2e62abc9d342",
".git/objects/ac/2b3f819628bb023464904b2b9463233ceb9416": "683b73c82faa4b608d0501b73a18b5bf",
".git/objects/b0/27de8c8893dea87ef201461b4982ec3cac38cc": "55f85ad03ef8f6132202ffadc190edd8",
".git/objects/b0/88b031d9617d3bc074c1a49b005f7acca01adb": "18e71c7eeccabb44bb793468052c27f2",
".git/objects/b4/1a6d95a703d6aa81b78364dea1316684c87159": "2f22a0c524fba8a243eadee226dd7336",
".git/objects/b5/37a751c9b3587c10b0295239abd513b4f523cc": "2095653288939f70e4decad09ea3dc03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/443436f38ab85dd5038ff11c97ac35465f4624": "8437e7fb2eadf3e68159cf75a9991466",
".git/objects/ba/b3198d4965fa72f8ffb30534c647f5fdd09332": "38f3e508f5276842aae94ec71ec476f8",
".git/objects/bb/e66cac90323c2e650c3c93c9c9a8020f90ae76": "6464184f0f8b40d2a49ee6c228a51435",
".git/objects/c0/5640d7f9d51423311449acc49b5aaf5fda757a": "93c998b2a68b4248a6a8ce148315316e",
".git/objects/c3/4a416b18c68c5bdfc25ab9bb1bb377852fabf5": "d91d466b2e88ceb17d9fc7bf80211ba2",
".git/objects/c7/88160ed3acb1742a90cfa5db0c5dff6e634116": "456f103703f1c6ed949d7808c38450b1",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/ba1afefeaf4602285e9099d7007368df792e0f": "b92438751db6987c9cc57451da7e7c63",
".git/objects/d2/01535c5992ec81be946dbaff8af9774bc41186": "b9f4ba604bec34287ae2cc1ceb7580d2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3c34cba0475bbab1c161deffbe16b5e119e436": "1b92d1bcdaaca5a3c1ecd128a2223173",
".git/objects/db/6b8ca136805ffc1d37c8091f06c0f52155e7ec": "078d52a28fbaf34a73da323e50c3ff1d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/96d8834e7446c053c9dd779d32a8966ee722e6": "898cec8926e3cf3d7acae23e4febaee6",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/24800fde694894ad485102d9d10e819d81c43d": "37855725bfd747e5fb104faa6298e80a",
".git/objects/e4/5c5b1efb678b4bb5448678ccee12701935a9b6": "27ee6312fd319e91baf16cce24e483bf",
".git/objects/e5/68d8417b60b04b38af9baadf4635a811605763": "075e99e500b185de9f8a479b8c833a42",
".git/objects/e6/1e49baad0ff5ed21079b91d5910a952d9cdbf5": "1353b3ae77f1e5bbba0a601422f63181",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/5cb814172840ad98902c39b700d0c972f7fc76": "2eda824ecfaa74d810f4a7e00e5c9f16",
".git/objects/eb/01a3110e016c2f25d92ac7a1ed5ad29fea08c3": "fab3f5d3f4bdd2f686055ba8342af3b9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9ed23b5a8fbc1702ade3f734b1f1ee3f6ed1f8": "875fa6236b737ac4c203d70ef43771fb",
".git/objects/f0/51b262674128ea164719182fb4fe6d681a1569": "c5c11cca5f763afad07b06977acde1de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ed308fc4deb65c6b3a96656f5dd5d885ef47c0": "16394d685f27e2428ecff57e0379218c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/cd4234ce261a6d73474b84aa2a4aacff975abf": "2b11f7e1d32090617450bb571e701c7f",
".git/objects/f6/5e1597b4ddc6bf906add92a5f78a678dbf91b6": "c2cf3051ca4cc94698c3f6e79a4d1656",
".git/objects/f7/e9c57effd11bcfe2d4609c7f8642be01039edc": "a44236394e42a6e89567dbf0fae3938f",
".git/objects/fa/35d97dc44f3a090cda4b5a2d71d13d212a986d": "2ce31b7a9862ba6f50ea89eae8a871f7",
".git/objects/fe/d133d491b3c857bb0459552231eaaa227b48a6": "5136872cfc787ccc6242a575da36c6dd",
".git/ORIG_HEAD": "ac70df7ef10d1f738021b7de0c47103d",
".git/refs/heads/main": "ac70df7ef10d1f738021b7de0c47103d",
".git/refs/remotes/origin/main": "ac70df7ef10d1f738021b7de0c47103d",
"assets/AssetManifest.bin": "49f812f55e273ec617ca942499beb243",
"assets/AssetManifest.bin.json": "5cf28d3e8976342f51135058e9ce309e",
"assets/AssetManifest.json": "636898baab6f5702441f5562f9485774",
"assets/assets/default.png": "cd9afe15ae2e4561eb4bfb4720269d2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0ad39818b5bbd97060ad0bccf8e545d0",
"assets/NOTICES": "e1ee8f422ea4c966df44df6608f0343b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "cdcc61dd04e06218f9ea27b703d55c26",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0e20d6109f1d8915c569e37fb3e67c8f",
"/": "0e20d6109f1d8915c569e37fb3e67c8f",
"main.dart.js": "8f8814f078a546af9b307825104ada92",
"manifest.json": "9a8fa8292c14db8e6c8720524ed9d7f9",
"README.md": "61fb9f8ee039330dfc1be54936935b58",
"version.json": "1de41c2c52110d100cf0759774c7ed13"};
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
