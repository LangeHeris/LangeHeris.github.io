if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const l=e=>a(e,c),n={module:{uri:c},exports:s,require:l};i[c]=Promise.all(d.map((e=>n[e]||l(e)))).then((e=>(r(...e),s)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"a59617a7fccf03ee46b55042f597d5b5"},{url:"2020/03/11/Elin-annals/index.html",revision:"2daf96fc5df2bd7b891a0d9550a56e92"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"6b0dfd9a71028010355d99cd2bc8bbc6"},{url:"2020/03/30/Computer-Network/index.html",revision:"548a82ac04f5b6331d97a5e26f9b56ed"},{url:"2020/04/01/flex-box/index.html",revision:"fdb67a94625d3862cd05e624a59cc854"},{url:"2020/04/17/Git/index.html",revision:"1f2395c2ab4fd7cc2269a230d0625244"},{url:"2020/05/01/SSR-RE/index.html",revision:"7886381ab10204a8407e8e18ec3b4a3c"},{url:"2020/06/27/Snake/index.html",revision:"ccb852de2996bcb1f46d5eb2899a018e"},{url:"2021/04/01/Browser-Works/index.html",revision:"b6b831450dc42c8e26a1694c421bae57"},{url:"2021/04/05/JS-Works/index.html",revision:"3b3d02bbb83ed632d76c565484f446cd"},{url:"2022/06/09/YBDSG/index.html",revision:"f1aff24cbd7866ea486a0c9e3aea0d22"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"20c1405492ed626b098ab22113ceaec6"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"b3cdad97b12bc98d76f36c4025477415"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"37529dd45a9c8aeab0ace17cd016a272"},{url:"2023/03/28/So-VITS/index.html",revision:"d30b7b75420d82dbd7a4372a64b218fd"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"1c89faa609cc194ee55ade504d402e1d"},{url:"404.html",revision:"65661b8336ed2048d41c4a05d14a47c2"},{url:"about/index.html",revision:"6f0a66236c4535bf36e49a0cf82ef7a4"},{url:"archives/2020/03/index.html",revision:"6cb8d16f4ce05765fc0deeaf0dd0deef"},{url:"archives/2020/04/index.html",revision:"487e29b934688895f9d8386f826f120b"},{url:"archives/2020/05/index.html",revision:"a245ae8bbad7b995cb9e70de0c0b555f"},{url:"archives/2020/06/index.html",revision:"d989577508932f5144e77409696b5bc9"},{url:"archives/2020/index.html",revision:"0817de52134878641510bcc42c11ed9c"},{url:"archives/2021/04/index.html",revision:"6dbcaf68b83a923699b649a55c205423"},{url:"archives/2021/index.html",revision:"21b19d3a9ba4c2940629ba8f18e6e42f"},{url:"archives/2022/06/index.html",revision:"7ae20bf7470cbe1e497041f0be83dcc3"},{url:"archives/2022/10/index.html",revision:"69f1be30f77e20e22deaf6aa287ed893"},{url:"archives/2022/11/index.html",revision:"eb2c9343719357ffcd6e515438dbb5c4"},{url:"archives/2022/index.html",revision:"8c308a6090fd1a74ad2c2115576344f8"},{url:"archives/2023/02/index.html",revision:"b07c250fe8b049c3ec75ecf5b90d8cc5"},{url:"archives/2023/03/index.html",revision:"b65db3bdb01828d5f42f7b1c9ef2732d"},{url:"archives/2023/05/index.html",revision:"85bddc344bab26bc7c0dde2ab89645ba"},{url:"archives/2023/index.html",revision:"65050856fb6831e1e6373e7b318800cb"},{url:"archives/index.html",revision:"5ff81bc86d7bb8f8063d5c881d36611c"},{url:"archives/page/2/index.html",revision:"1aa152221a099b2820edf58216a71454"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"47826b2cc5b2520f544625bf0d4e4076"},{url:"categories/JavaScript/index.html",revision:"1bf4fdefe81146716361ac5dce964e3a"},{url:"categories/前端开发/index.html",revision:"eea47348444f4f3179d7f6b43299bf2c"},{url:"categories/学习笔记/index.html",revision:"8bc55c8e9d4e0b0d6d633b2caa7fa0dd"},{url:"categories/教程/index.html",revision:"4810f567a96fb9d0733047f6bc0cdfba"},{url:"categories/游戏相关/index.html",revision:"e5e9ffc2da3a0f0331f0489e2cd1397b"},{url:"categories/藏书/index.html",revision:"faa74093e0f0ac000c3819820a6ef73a"},{url:"categories/计算机网络/index.html",revision:"4014b42240de05ca13d8c797cc4df232"},{url:"categories/随便玩玩/index.html",revision:"6c3da8f3d05813a5d23986a0dcd31be8"},{url:"css/custom.css",revision:"2c870c29e88ce6d83c58fa018ff068ae"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/index.css",revision:"e32f671b3c0df82f887eedb14f402f36"},{url:"css/minimal.css",revision:"bbbce9542752d8b96e1825e0075307b2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"552134be5cba7ca769452cde1ade28e8"},{url:"Gallery/射覆/index.html",revision:"44d5585da4d427842e86434280eac213"},{url:"Gallery/荒野大镖客2/index.html",revision:"d07a8d0d9a2f5c9c165842981e552cf7"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.jpg",revision:"88396125977224a65701ea6e0cd2fd8f"},{url:"img/favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.jpg",revision:"d941a8dcc10a945f6da1ceb2b6f964cd"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"82adf0ee0dbc313d228ca894700f9b6e"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"link/index.html",revision:"cd1f2443df19ee87ab4efee476a73a77"},{url:"logs/index.html",revision:"c800139f3ca6bf88e4166d5117fb29d0"},{url:"page/2/index.html",revision:"748ed7116563e23a25091878a146ab7f"},{url:"steamgames/index.html",revision:"fca7c84c51745ff4ca058d47c09c40cb"},{url:"tags/ChatGPT/index.html",revision:"dda77e47aef453b5e209fb2f6a9ee91b"},{url:"tags/ENB/index.html",revision:"15a83c415a19630e33407a42fb36a3a5"},{url:"tags/Git/index.html",revision:"b035bbfa12a95affdcd2c41d76202e60"},{url:"tags/index.html",revision:"5f69cc087936325cf4bb202f3664752f"},{url:"tags/JavaScript/index.html",revision:"d64c5cae54899514e4bc0b2641be2b29"},{url:"tags/Mabinogi/index.html",revision:"3824e211130b24c8e72ba55e052b686b"},{url:"tags/NAT/index.html",revision:"612237e568a486b1139246c88b621cef"},{url:"tags/NPS/index.html",revision:"eae69e8a35149e7a754a2f82c0314316"},{url:"tags/Obsidian/index.html",revision:"8c7787e9ca773ba7ae3a82c9759b7646"},{url:"tags/ReShade/index.html",revision:"3021e471149a6c7639107e795d0cd892"},{url:"tags/SSR/index.html",revision:"6a40e03c568605b14fed4062e224cebc"},{url:"tags/V8引擎/index.html",revision:"a4f40c5a32f38fa3701d411b55463960"},{url:"tags/VITS/index.html",revision:"05a090fdd477650dcb87e5f8b3080bc3"},{url:"tags/VPN/index.html",revision:"66d11cc9c6c4b97c4d5719b9384e8e99"},{url:"tags/内网穿透/index.html",revision:"dda0084489c23475d25f09152d345bb5"},{url:"tags/凯尔特神话/index.html",revision:"826ae73adf669bc38532696a2eba5f78"},{url:"tags/奇门遁甲/index.html",revision:"760a99a217c2a6593c2fb6a9cab39433"},{url:"tags/学习资料/index.html",revision:"d4125498949a73495c9540569a204da5"},{url:"tags/实战/index.html",revision:"4a343fcc156fec73af7fb70fdb9dc2ea"},{url:"tags/教程/index.html",revision:"4aa2e08641892c78a79e709f16014d75"},{url:"tags/旧文搬运/index.html",revision:"c9a9a7d72b433fa5cbee2e788b3afe87"},{url:"tags/浏览器/index.html",revision:"60f005a7a38b2caba98688c86cd51f0f"},{url:"tags/游戏考究/index.html",revision:"008b271fc45ba66f374ba219e3cde042"},{url:"tags/源码/index.html",revision:"ca7b62308f1d8142fc3090d76f3b1cf2"},{url:"tags/笔记/index.html",revision:"0638be59779e2adffd743c48e76b4f42"},{url:"tags/网页布局/index.html",revision:"09a305d30d548bb90e50f7d7af6662aa"}],{})}));
//# sourceMappingURL=service-worker.js.map
