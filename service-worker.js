if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let l={};const f=e=>a(e,c),s={module:{uri:c},exports:l,require:f};i[c]=Promise.all(d.map((e=>s[e]||f(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"b294f904a20fc71ced7ce74ca7cdf330"},{url:"2020/03/11/Elin-annals/index.html",revision:"59f972306e7b7f18e95770d4bfcc72fc"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"23b54610e66033f5c3a21f9627cf86c1"},{url:"2020/03/30/Computer-Network/index.html",revision:"1df4db609b243356d898d0e9ec2f914a"},{url:"2020/04/01/flex-box/index.html",revision:"828616135aa60cd730d26fe312024ae4"},{url:"2020/04/17/Git/index.html",revision:"1e9b9c5954c1b34998e3e9f98f2b1a25"},{url:"2020/05/01/SSR-RE/index.html",revision:"4eac2594f05d287d9568e5eeddbd11f2"},{url:"2020/06/27/Snake/index.html",revision:"36a139e7c04beea87e3273c523feaefa"},{url:"2021/04/01/Browser-Works/index.html",revision:"9e07077f936bb5c1654876c7f68b76e4"},{url:"2021/04/05/JS-Works/index.html",revision:"c669eb8089905ff632550873aca3aff7"},{url:"2022/06/09/YBDSG/index.html",revision:"f23eed91e485fb25702f3fdbd0533f07"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"c5f9b170da7c74a1d4003301e7635246"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"9b2887e9f8f9a02c40d2130dcd356d9d"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"a8bc5c480ed03e1f1a3b24b7ab1a3cef"},{url:"2023/03/28/So-VITS/index.html",revision:"d3f0dd9dc9f5fd983d1f84eddd359032"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"a3ead0b0bb9486adafffb617981b6b11"},{url:"404.html",revision:"7d4b8da899bc4cb56a31c0fd27d4013f"},{url:"about/index.html",revision:"4e7898c92ebc0f40e231eccc30f70205"},{url:"archives/2020/03/index.html",revision:"ce97d8eae00da09cf499fdd8e00650d8"},{url:"archives/2020/04/index.html",revision:"64cc83df1174274a8b27dc29bcce8ccc"},{url:"archives/2020/05/index.html",revision:"9ee74cf1036a80a1c52a60a992d328c6"},{url:"archives/2020/06/index.html",revision:"e9cf32b13dc96bb2b3693ef3ca1be423"},{url:"archives/2020/index.html",revision:"569101531f7f861d65282646a1932bf8"},{url:"archives/2021/04/index.html",revision:"fea15c6ea11ff82e3719b9037209b4ac"},{url:"archives/2021/index.html",revision:"849844cfd1a609fca5c50e51319f650f"},{url:"archives/2022/06/index.html",revision:"12c52dc6e3729b63945640e658258ddc"},{url:"archives/2022/10/index.html",revision:"1997b985ec44e8fd811f27fce9a05983"},{url:"archives/2022/11/index.html",revision:"860635b0356b482af386b384e61a990d"},{url:"archives/2022/index.html",revision:"509179ffe134c0592710a913fc567595"},{url:"archives/2023/02/index.html",revision:"718a5dea991f4694cc32fc2c393565a8"},{url:"archives/2023/03/index.html",revision:"76e0b4a4348c4f7b2caa6c07d532fc4b"},{url:"archives/2023/05/index.html",revision:"dc8479c6def2c192ffe20359715e9bd7"},{url:"archives/2023/index.html",revision:"2c1c27a6bd3d0093a0b393caf87e1dd1"},{url:"archives/index.html",revision:"07f6204e427fddee51fde04928190e3d"},{url:"archives/page/2/index.html",revision:"ea5697f9ae4e86a2c3570c8b8d9c7e1a"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"902a76acdc7176835c5c663998b57997"},{url:"categories/JavaScript/index.html",revision:"f7394c6cf7af61f77d1a4a78d2e5aab3"},{url:"categories/前端开发/index.html",revision:"dacda7fb7d9891127f44b48efc9fb957"},{url:"categories/学习笔记/index.html",revision:"2400797630d8a015ca8e11e406781f38"},{url:"categories/教程/index.html",revision:"4991ffe68d9b138e601f476462c909e0"},{url:"categories/游戏相关/index.html",revision:"0be229712dca9e116a415457bc22a9b2"},{url:"categories/藏书/index.html",revision:"0dcc1fb5bf62c7ec0f8ddfa73c809d3f"},{url:"categories/计算机网络/index.html",revision:"b53c0553ad6d1cfc10bf99a45d0a6de9"},{url:"categories/随便玩玩/index.html",revision:"11132784585e2e58c46d45b575c1c7b9"},{url:"css/custom.css",revision:"4cd003bca4cc526de27e5fd72ddea7f1"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/font.css",revision:"7b12599b3f00fc644a65e47a785d4f91"},{url:"css/index.css",revision:"d4c12151ede3424a82fd17e73584e3a5"},{url:"css/minimal.css",revision:"9bc643366516fbbf13eee2c8e9480715"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/BaldurGate3/index.html",revision:"eb28642d30f62b6b6dd0ecccdad25900"},{url:"Gallery/Biohazard/index.html",revision:"ae9c5232deab7ac628845ff3f4576b3a"},{url:"Gallery/Cyberpunk2077/index.html",revision:"fb52a5650dfa85594171dcd4fa4fa2b4"},{url:"Gallery/DMC/index.html",revision:"fcd51a4a7b361d3bdb40696e83e78cca"},{url:"Gallery/ElderRing/index.html",revision:"272562969f770d67d447a01947ba05f8"},{url:"Gallery/index.html",revision:"cf6fc369835cd9544421e6ebf58b618b"},{url:"Gallery/Other/index.html",revision:"182a3f5ae525bb6405e27afd5401a8cb"},{url:"Gallery/RedDead2/index.html",revision:"20456c180bc9c737cda18fdfdec9fca6"},{url:"Gallery/TheEvilWithin/index.html",revision:"7f4699ebd165608da75a1dbd80295f69"},{url:"Gallery/TOTK/index.html",revision:"6a668f17fcdd88cc858d50025cb3df88"},{url:"Gallery/TOV/index.html",revision:"6f34c0e69a04df4814f0e7fa488890d7"},{url:"Gallery/WoLong/index.html",revision:"09aec265aed07dd71a2da290f2fd9ad6"},{url:"Gallery/Xenoblade/index.html",revision:"fb98620b0c821dd08eb2bd6a8f959558"},{url:"Gallery/射覆/index.html",revision:"c52006fab06bf05ca017e83fcc5a15e8"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.jpg",revision:"88396125977224a65701ea6e0cd2fd8f"},{url:"img/favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.jpg",revision:"d941a8dcc10a945f6da1ceb2b6f964cd"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"8ec9441b008cff8269d1fea1272cc5b4"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"61c3ac899ffe3ef0cb07f9a93a1fea0e"},{url:"logs/index.html",revision:"34d0f1d3d89c299111855e744734f7c5"},{url:"page/2/index.html",revision:"45c21facc88cfef260632e39212314c4"},{url:"steamgames/index.html",revision:"b12a33fd62728e4f3e3a04089aa0e8b7"},{url:"tags/ChatGPT/index.html",revision:"0c4d25bfee50be1ef1bffa5f4cc57a34"},{url:"tags/ENB/index.html",revision:"6ea481a0a24c7229ecb4cd0afed0cbfa"},{url:"tags/Git/index.html",revision:"acefdf95ab257e1e8f428d8459bc2520"},{url:"tags/index.html",revision:"593ceb2c5269e38cdd8440911b243eda"},{url:"tags/JavaScript/index.html",revision:"6d6b97c529bb0ef56759717faf20ca91"},{url:"tags/Mabinogi/index.html",revision:"27d0f92d9e77ec91d8a49e157d368555"},{url:"tags/NAT/index.html",revision:"075df7a077ab4c5e1218a01691c51048"},{url:"tags/NPS/index.html",revision:"7aebc96a07931a084777f915328b98df"},{url:"tags/Obsidian/index.html",revision:"da99f4b8876b508620350dce542f7c58"},{url:"tags/ReShade/index.html",revision:"f549dba634496d2c0d0d3728ac1ffacb"},{url:"tags/SSR/index.html",revision:"0ab1c4011f8cbf6f41517a66b368822d"},{url:"tags/V8引擎/index.html",revision:"9af02b10bb6ea6ce1968ab53ab9b9331"},{url:"tags/VITS/index.html",revision:"eb9268baf06c4176c16575d8cea61034"},{url:"tags/VPN/index.html",revision:"eeae236168d6b56f9040e06125aa2424"},{url:"tags/内网穿透/index.html",revision:"3510c53bcd50d4c18fbb0ff21d4e9bab"},{url:"tags/凯尔特神话/index.html",revision:"bb08d11ed4b13e3168c4dfbe1e739938"},{url:"tags/奇门遁甲/index.html",revision:"90f8eb3b31908f612d71721d1824a579"},{url:"tags/学习资料/index.html",revision:"21f67264679fd657fa866a038a03ae7a"},{url:"tags/实战/index.html",revision:"8ad50db4c2e6ffdbf95d635b0eaf0604"},{url:"tags/教程/index.html",revision:"44618169793994ac7a1074acd0ab5e7f"},{url:"tags/旧文搬运/index.html",revision:"e62be6bab852e8813f4f817054a799d3"},{url:"tags/浏览器/index.html",revision:"89957c5cbd6020bee01e323e81cdb1b2"},{url:"tags/游戏考究/index.html",revision:"580a4c0e56a288d2e1adc8fdb74dee6e"},{url:"tags/源码/index.html",revision:"c1169baddcd9882d776bf6e73aba59a2"},{url:"tags/笔记/index.html",revision:"1ee5e5d568b9e1e4e09cfe8ace04d013"},{url:"tags/网页布局/index.html",revision:"ec122dc0f4e1c3a8bf6b7a247f08395e"}],{})}));
//# sourceMappingURL=service-worker.js.map
