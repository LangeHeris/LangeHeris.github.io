if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let c={};const s=e=>a(e,l),b={module:{uri:l},exports:c,require:s};i[l]=Promise.all(d.map((e=>b[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"b294f904a20fc71ced7ce74ca7cdf330"},{url:"2020/03/11/Elin-annals/index.html",revision:"87873edbc29c3eaf038344b04e43eb79"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"23b54610e66033f5c3a21f9627cf86c1"},{url:"2020/03/30/Computer-Network/index.html",revision:"1df4db609b243356d898d0e9ec2f914a"},{url:"2020/04/01/flex-box/index.html",revision:"828616135aa60cd730d26fe312024ae4"},{url:"2020/04/17/Git/index.html",revision:"1e9b9c5954c1b34998e3e9f98f2b1a25"},{url:"2020/05/01/SSR-RE/index.html",revision:"4eac2594f05d287d9568e5eeddbd11f2"},{url:"2020/06/27/Snake/index.html",revision:"36a139e7c04beea87e3273c523feaefa"},{url:"2021/04/01/Browser-Works/index.html",revision:"9e07077f936bb5c1654876c7f68b76e4"},{url:"2021/04/05/JS-Works/index.html",revision:"c669eb8089905ff632550873aca3aff7"},{url:"2022/06/09/YBDSG/index.html",revision:"f23eed91e485fb25702f3fdbd0533f07"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"c5f9b170da7c74a1d4003301e7635246"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"9b2887e9f8f9a02c40d2130dcd356d9d"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"a8bc5c480ed03e1f1a3b24b7ab1a3cef"},{url:"2023/03/28/So-VITS/index.html",revision:"d3f0dd9dc9f5fd983d1f84eddd359032"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"a3ead0b0bb9486adafffb617981b6b11"},{url:"404.html",revision:"1c33a4a35b1ad65e636270b01cb397a4"},{url:"about/index.html",revision:"e059990ca2b9e56833dbffeda907b5eb"},{url:"archives/2020/03/index.html",revision:"cec7f005b824c8c41a95207821312040"},{url:"archives/2020/04/index.html",revision:"09db866780675ea570f82738ad2101c6"},{url:"archives/2020/05/index.html",revision:"44d7da582174c21696fdd9aa4755a5a9"},{url:"archives/2020/06/index.html",revision:"07f35fc8f72321f12a02fba1df12447f"},{url:"archives/2020/index.html",revision:"57979742218a35c406e7e0ec3837eeda"},{url:"archives/2021/04/index.html",revision:"18bac6c1391eff3dac573342fffc4f27"},{url:"archives/2021/index.html",revision:"f9f70d3506d94afb2821807616816f8d"},{url:"archives/2022/06/index.html",revision:"d6cf712eb49b63f891d675339b4df49b"},{url:"archives/2022/10/index.html",revision:"ddcf26e359bcd4bdfc4208b0c1343f32"},{url:"archives/2022/11/index.html",revision:"cb7eed3bf1ac1cef01e7e3de3656204e"},{url:"archives/2022/index.html",revision:"6c90c5295d620c77c5f387bf968f44c2"},{url:"archives/2023/02/index.html",revision:"911fa14f2c8bfa9b3874afa57fcfdff0"},{url:"archives/2023/03/index.html",revision:"8211464b089a247208a3caab7af4b96a"},{url:"archives/2023/05/index.html",revision:"e2846eeb84d41a0b8a19f4b6fa172da0"},{url:"archives/2023/index.html",revision:"9585748e0a15fa48acce509324e6c29c"},{url:"archives/index.html",revision:"8de022c95a2e19e8f10dbf6c718f702b"},{url:"archives/page/2/index.html",revision:"1f0708f87c1d0060f34d6a9b9a209763"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"5d19421344399d486f7e4f38b8589c8f"},{url:"categories/JavaScript/index.html",revision:"115f37e70b67bf4eb4e2b278f268cfdb"},{url:"categories/前端开发/index.html",revision:"6df9df6a922bb1087c66b534d597abaa"},{url:"categories/学习笔记/index.html",revision:"1700e532f103295767f60715002ab670"},{url:"categories/教程/index.html",revision:"e122551e3d9d2961520dffc5caa7a3c7"},{url:"categories/游戏相关/index.html",revision:"12ea97fde2273a36b9c51bab1bab735f"},{url:"categories/藏书/index.html",revision:"8f0b1ec170ad97f72ed54f3d19b7fabd"},{url:"categories/计算机网络/index.html",revision:"c71e660dc4e8417a66c00488190df907"},{url:"categories/随便玩玩/index.html",revision:"c1699e022295325c62263fe30ee73bf0"},{url:"css/custom.css",revision:"4cd003bca4cc526de27e5fd72ddea7f1"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/font.css",revision:"7b12599b3f00fc644a65e47a785d4f91"},{url:"css/index.css",revision:"d4c12151ede3424a82fd17e73584e3a5"},{url:"css/minimal.css",revision:"9bc643366516fbbf13eee2c8e9480715"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/BaldurGate3/index.html",revision:"cacc9ffe83879c885d08c560ac1d6e1c"},{url:"Gallery/Biohazard/index.html",revision:"f71075f3b4134b91145a0682eb10e935"},{url:"Gallery/Cyberpunk2077/index.html",revision:"71a9abcde11802980bccb4a4dc68b339"},{url:"Gallery/DMC/index.html",revision:"5b21880637637ea9fb25a6f38bc1e6b9"},{url:"Gallery/ElderRing/index.html",revision:"c2d7c9c008003cebf7a50476d37140ea"},{url:"Gallery/index.html",revision:"79a355a9645ddb857a68c1914bcd9336"},{url:"Gallery/Other/index.html",revision:"a55675c6d70da56c4fb3f3031dba27af"},{url:"Gallery/RedDead2/index.html",revision:"37831f250ab5f4fc4badae43a888bf01"},{url:"Gallery/TheEvilWithin/index.html",revision:"3c3b47323a5f4bac724e45d8dce22a4e"},{url:"Gallery/TOTK/index.html",revision:"1508365e2f62039e3e3bc8eb6fb9d37d"},{url:"Gallery/TOV/index.html",revision:"2e2e616f388cd9aa926be8eb4f613854"},{url:"Gallery/WoLong/index.html",revision:"3acd90d84e27da246920bbb5892e0aee"},{url:"Gallery/Xenoblade/index.html",revision:"e217ddf812814d53733049e9145aab8d"},{url:"Gallery/射覆/index.html",revision:"9fc0e36dd18e367b2a2d3d001690925d"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.jpg",revision:"88396125977224a65701ea6e0cd2fd8f"},{url:"img/favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.jpg",revision:"d941a8dcc10a945f6da1ceb2b6f964cd"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"c236dc7a9cc0f87e303702b8ba45f021"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"0896656632cc19fb615bee0f92981677"},{url:"logs/index.html",revision:"a3c6ebddfa70b8bae23648e3fab7adb0"},{url:"page/2/index.html",revision:"5852f0af6a0e4982418a161faeec1372"},{url:"steamgames/index.html",revision:"c65b39268004b2eab8fce7bbcb80101b"},{url:"tags/ChatGPT/index.html",revision:"7d1757fa63d1a9f0dee90d8df5592787"},{url:"tags/ENB/index.html",revision:"b28c10cbb76b4522dd8f803d9058bcfd"},{url:"tags/Git/index.html",revision:"7765e9629eb2471046234befe5abbdb5"},{url:"tags/index.html",revision:"6f749bd5358431900f1c756464674ad4"},{url:"tags/JavaScript/index.html",revision:"34faf7eefbac499de109491360fb1276"},{url:"tags/Mabinogi/index.html",revision:"4d92227e6fd59d06a34ab7d471ec3e5c"},{url:"tags/NAT/index.html",revision:"191c8c18108a790a2b85d8b54e39a07e"},{url:"tags/NPS/index.html",revision:"e546f4e9a715633ab6758d063de93a1c"},{url:"tags/Obsidian/index.html",revision:"7b928b60d5055b6db52535f1a90da280"},{url:"tags/ReShade/index.html",revision:"05c4e6d07362e9a20a4050fbc835555c"},{url:"tags/SSR/index.html",revision:"4858fe0c41203ba8634eb94d75cfc0dd"},{url:"tags/V8引擎/index.html",revision:"744186ef670657b877ce2940912aa590"},{url:"tags/VITS/index.html",revision:"0cb42bdf8db5b4f457c423d2f05012ef"},{url:"tags/VPN/index.html",revision:"086debe0a6030ca26400f45f42cb7613"},{url:"tags/内网穿透/index.html",revision:"675b138f89c2d51d6c8b1747ef39145b"},{url:"tags/凯尔特神话/index.html",revision:"e11ba7e14d381015f93b77e3b777cf9a"},{url:"tags/奇门遁甲/index.html",revision:"0410974b435b9559aad3b8bcccc083cc"},{url:"tags/学习资料/index.html",revision:"05b95361bb206215ea5affbfecc9e505"},{url:"tags/实战/index.html",revision:"48eb8d3e52f71aca0b84f0721bd6d817"},{url:"tags/教程/index.html",revision:"ee38e15866c296a14798e86443bab9ec"},{url:"tags/旧文搬运/index.html",revision:"305d61d72679b07bef97cdc6030f65e2"},{url:"tags/浏览器/index.html",revision:"8b0b9e621ceff165c2d70e816584eac9"},{url:"tags/游戏考究/index.html",revision:"00154393928c56d1ae45c7669e7b7edd"},{url:"tags/源码/index.html",revision:"9dd94ed3ebc85ec84c488af4bf79d366"},{url:"tags/笔记/index.html",revision:"7a31fd4a031baa7c491c7f644285878a"},{url:"tags/网页布局/index.html",revision:"b58dbe31b6b0b3bee0bd6795e80e3695"}],{})}));
//# sourceMappingURL=service-worker.js.map
