if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let l={};const c=e=>d(e,f),s={module:{uri:f},exports:l,require:c};i[f]=Promise.all(a.map((e=>s[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"da6690678d2e206fc9d4875e743ce27d"},{url:"2020/03/11/Elin-annals/index.html",revision:"edb98d7ad06d666a507a567d95296222"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"ef0b2795a347bfd0a6636b990ac00235"},{url:"2020/03/30/Computer-Network/index.html",revision:"e9fcbfee91be5fe6aaedf81cab7cb4cf"},{url:"2020/04/01/flex-box/index.html",revision:"e97509f0263a3b8ff742e83005460ce9"},{url:"2020/04/17/Git/index.html",revision:"6b5db9465a2be1b83fd78142cc32f1fc"},{url:"2020/05/01/SSR-RE/index.html",revision:"1907ef8f8a43f0fc83adf758ceadf746"},{url:"2020/06/27/Snake/index.html",revision:"7872161b46bbb870dd85f26a9a398a09"},{url:"2021/04/01/Browser-Works/index.html",revision:"fb4b87297523c6f02b7462e28e081152"},{url:"2021/04/05/JS-Works/index.html",revision:"5394c8e7998d97aafad962e0e1f6fd7c"},{url:"2022/06/09/YBDSG/index.html",revision:"aec5ef107d970d2963e9339e14672dd5"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"5df245d1fab5293377ef9b4114b19b59"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"263e79de714645cccf2ea53931b1979a"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"6f36f318d76cb36f950aaabcbcecb5bc"},{url:"2023/03/28/So-VITS/index.html",revision:"15b8940e44acae51949b81ee8643cc60"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"ab640d9b9d8cf5776750e8c6a8a9ee56"},{url:"404.html",revision:"27d3549c82139164fa0ac6c5d3e1f634"},{url:"about/index.html",revision:"41765a86bc9f2d5845fe7cf80a8c0d7f"},{url:"archives/2020/03/index.html",revision:"6862c6338fb7ae63c17275fd866de16b"},{url:"archives/2020/04/index.html",revision:"40bdf128234c1e6faa2ccf25e2f5a914"},{url:"archives/2020/05/index.html",revision:"66556f32a3cb1d5f44b4dce27e4db08b"},{url:"archives/2020/06/index.html",revision:"1e920ea51d2a2af150d00cf9988bd3c8"},{url:"archives/2020/index.html",revision:"d616ce22a2570ed5fb2041899033e78c"},{url:"archives/2021/04/index.html",revision:"ea544b0ba955dd2d0d11f09997069d09"},{url:"archives/2021/index.html",revision:"bbff76d7e0c9a68585e2646acf8a9573"},{url:"archives/2022/06/index.html",revision:"c467dc463ae1877cfe8c942564d5625f"},{url:"archives/2022/10/index.html",revision:"7c9ebe978cd9a7279ed011783956a283"},{url:"archives/2022/11/index.html",revision:"be462b6a069257e4147d41536b781d1e"},{url:"archives/2022/index.html",revision:"29d18f33d832de21d4095cdba07c2792"},{url:"archives/2023/02/index.html",revision:"2df89bb443e05a54e5e5db6113fac556"},{url:"archives/2023/03/index.html",revision:"a15f1c288b68a4faa03d9019523ceb76"},{url:"archives/2023/05/index.html",revision:"1618739ef5df49596a6628b0f0f74b3c"},{url:"archives/2023/index.html",revision:"3120e65c4fa68074314abf818010e906"},{url:"archives/index.html",revision:"4da5fdadb91c0aa6e85895d95fb3e986"},{url:"archives/page/2/index.html",revision:"91ca86d7ef8e96c8872a8215f13fbc3e"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"f6d22dae7f3efbd8f884c45dbfe70044"},{url:"categories/JavaScript/index.html",revision:"cb52723731950f721bb7d4c7582467e6"},{url:"categories/前端开发/index.html",revision:"d14d1a4e6b63775fb24ae04ac16bbbe8"},{url:"categories/学习笔记/index.html",revision:"f0c2e36685142cf09d312bdcdf9df2d0"},{url:"categories/教程/index.html",revision:"ab9c24535cc397069bd0b6fdb296772e"},{url:"categories/游戏相关/index.html",revision:"2490eac464f2d8d8b345e26feb5b0873"},{url:"categories/藏书/index.html",revision:"0edf0b371f9e2c95c204066165e53df3"},{url:"categories/计算机网络/index.html",revision:"d78eaf0bf9a743f2528242f8112f61e2"},{url:"categories/随便玩玩/index.html",revision:"d908b83db81e775ae8aafebb7c76cbaa"},{url:"css/custom.css",revision:"4cd003bca4cc526de27e5fd72ddea7f1"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/index.css",revision:"ead1718b9149c8e32d5d7edaf51ce685"},{url:"css/minimal.css",revision:"9bc643366516fbbf13eee2c8e9480715"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/Cyberpunk2077/index.html",revision:"d72dfc36e38eb527f623f39dbafd0782"},{url:"Gallery/DMC/index.html",revision:"dbd6a94a1af7c83adb70e24ae4ff450b"},{url:"Gallery/ElderRing/index.html",revision:"2fe500a9420d671895f66f6f3d80c2ac"},{url:"Gallery/index.html",revision:"a29522898e2c0020622f7090ec8912a4"},{url:"Gallery/Other/index.html",revision:"96789c84a013b19321e99cc9421e3a92"},{url:"Gallery/RedDead2/index.html",revision:"46cd6b64acf8491bdb48d02bcd36c943"},{url:"Gallery/TheEvilWithin/index.html",revision:"e17ab0dea3178ed3fc8e41c7270d6876"},{url:"Gallery/TOTK/index.html",revision:"9c923cd30040c0b5eb477bedc15fbfd8"},{url:"Gallery/TOV/index.html",revision:"087b1ee5ba47d9c85b6f275c405e94d6"},{url:"Gallery/Xenoblade/index.html",revision:"16a369eeda51cd777dfd8559c022b6d3"},{url:"Gallery/射覆/index.html",revision:"c6d33a4fc60ce62a7602c20e0f6c7095"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.jpg",revision:"88396125977224a65701ea6e0cd2fd8f"},{url:"img/favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.jpg",revision:"d941a8dcc10a945f6da1ceb2b6f964cd"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"4b9af5dddef3f40dd1ccf1ce3419b355"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"4ff166573debdbea4bfa85d4c1a09a20"},{url:"logs/index.html",revision:"0645b5a2499d8d37fde40bf5f7564414"},{url:"page/2/index.html",revision:"8c30d0de326a2f4e5090b6f625b73385"},{url:"steamgames/index.html",revision:"dc030f6bf584d7b7d189475a96afb23f"},{url:"tags/ChatGPT/index.html",revision:"6f27c4c6eb413a2b4e45c92c5a0e1b24"},{url:"tags/ENB/index.html",revision:"c919b3c5e0931662a0e3200c663e0e78"},{url:"tags/Git/index.html",revision:"d9b70d0484fc53d0d832a26bdafc7350"},{url:"tags/index.html",revision:"bf9451f817be1263969b55f37127feab"},{url:"tags/JavaScript/index.html",revision:"4090f5be3395683f119997b875fbc413"},{url:"tags/Mabinogi/index.html",revision:"80ef1ae4eedb215329f658a82a891ade"},{url:"tags/NAT/index.html",revision:"529491fae56a6dea64cbb345a9af484e"},{url:"tags/NPS/index.html",revision:"17f410b0b50c076c378b352322a2f16d"},{url:"tags/Obsidian/index.html",revision:"9701fa1af82bf77049fba1d5d11f42b5"},{url:"tags/ReShade/index.html",revision:"09086fec8f084172e6d9a107adebfaf6"},{url:"tags/SSR/index.html",revision:"0ac7e1f6dc7700536f020af49ae50715"},{url:"tags/V8引擎/index.html",revision:"e82237a3b44080c432b188355407a1ff"},{url:"tags/VITS/index.html",revision:"b8c754a22e2e7465dec9e9e149feb177"},{url:"tags/VPN/index.html",revision:"e4075670316e09cb5fd5c92cb6974db2"},{url:"tags/内网穿透/index.html",revision:"aee244707e86057c0b2a2462d0c5fcf7"},{url:"tags/凯尔特神话/index.html",revision:"bff27d2d645ab934afae974a630bf7f2"},{url:"tags/奇门遁甲/index.html",revision:"9fa73ba135acd1b1c4198ce468e94878"},{url:"tags/学习资料/index.html",revision:"a346380626140d443801f8ae22d182a4"},{url:"tags/实战/index.html",revision:"793389ebf86a81912d4a3362f0855778"},{url:"tags/教程/index.html",revision:"9404565d83b1f27f4b9ffb739473c48c"},{url:"tags/旧文搬运/index.html",revision:"474b6967e293a9880d41d0b61eba1fdb"},{url:"tags/浏览器/index.html",revision:"f0569405e8bd4db05ec9c6f5aef2f791"},{url:"tags/游戏考究/index.html",revision:"c51a63a840c930f81b4b66e6355d3a4f"},{url:"tags/源码/index.html",revision:"eb1619950a132da60ba48bdc9c0afdfa"},{url:"tags/笔记/index.html",revision:"49fc63fc287e8fc47b64d379d1b0b404"},{url:"tags/网页布局/index.html",revision:"f4b327485afba708cde2b14eeaf8c56b"}],{})}));
//# sourceMappingURL=service-worker.js.map
