if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let l={};const s=e=>a(e,c),f={module:{uri:c},exports:l,require:s};i[c]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"6302b670b83cbe802cb6add869f8fda9"},{url:"2020/03/11/Elin-annals/index.html",revision:"9b0685b2f62b1660befea7f0dfeb6569"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"32f9d382574f42b503e4aa633cb1b0eb"},{url:"2020/03/30/Computer-Network/index.html",revision:"8aac543457b95e3cf5af861bb2b7df0b"},{url:"2020/04/01/flex-box/index.html",revision:"5780408386be4f747a11f71759835640"},{url:"2020/04/17/Git/index.html",revision:"fa6d48d76ae3b0b81e136ddedf641518"},{url:"2020/05/01/SSR-RE/index.html",revision:"a58d0ca6bbdf09f6a4603b82bb605f7a"},{url:"2020/06/27/JS-Game-Snake/index.html",revision:"1dc7bef8ee3dabc0a4adc9aae614d841"},{url:"2021/04/01/Browser-Works/index.html",revision:"fd4bd99d76fff324accc6882dff69a0b"},{url:"2021/04/05/JS-Works/index.html",revision:"eec117b6f47450ce75adc916eaf0555d"},{url:"2022/06/09/YBDSG/index.html",revision:"899669c0caa6214bdc858ad509847199"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"129a754b2dd2363f6b44a70d9459ba5a"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"9641ac996fc2faaf861d380a2136799f"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"2b7965f5e79f9473e27f051e18a7c202"},{url:"2023/03/28/So-VITS/index.html",revision:"fac0958af1a5d0aebc3358913732a423"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"4ad98834828695a548d0b2f35d1f608f"},{url:"2024/01/09/MB-Dunbarton-Overhaul/index.html",revision:"0a2a506e819e956ddc822caccc95e9fc"},{url:"404.html",revision:"feec97ade4a6db390c1a9a59b92c8a3e"},{url:"about/index.html",revision:"a1b83223100346fbdd0aa6b187e6d5b3"},{url:"archives/2020/03/index.html",revision:"9b2273059495495ddd64a6848b9da840"},{url:"archives/2020/04/index.html",revision:"1c14c726da5ac45d56e88a7d1982819b"},{url:"archives/2020/05/index.html",revision:"b3e368f0009317d48b0972ab56536d66"},{url:"archives/2020/06/index.html",revision:"02bc9f8d47fb683cb7895ee88e2ba47d"},{url:"archives/2020/index.html",revision:"1d9f21f5058af7ce92b8c6a82ce34378"},{url:"archives/2021/04/index.html",revision:"74424a1ab2dc530a751f0fcef290dae9"},{url:"archives/2021/index.html",revision:"5ff40073977ce6d74134e5a59d1c55c5"},{url:"archives/2022/06/index.html",revision:"3c2c330282667f82d9c9144c94db1245"},{url:"archives/2022/10/index.html",revision:"c215cdd4ab26db5942932ad921d7eee0"},{url:"archives/2022/11/index.html",revision:"190ca4943cc53a37a3506f9c9342699d"},{url:"archives/2022/index.html",revision:"acaf5a49f4a410dde8b6bccec2aa011d"},{url:"archives/2023/02/index.html",revision:"3875ac4df75d0810cf5e6343df065798"},{url:"archives/2023/03/index.html",revision:"8911617efdcc82933c5702e14c8d123e"},{url:"archives/2023/05/index.html",revision:"085428937bae31724812f065b8fef3b4"},{url:"archives/2023/index.html",revision:"0db7b00a266da3d448e84b00d8229b2a"},{url:"archives/2024/01/index.html",revision:"0398a37fd3b73909a53ae406ac46004d"},{url:"archives/2024/index.html",revision:"0f0e02a1d2dd2b2ad3a949330f923ad7"},{url:"archives/index.html",revision:"249980c28019321c7eb94e729dea91ad"},{url:"archives/page/2/index.html",revision:"0c8c9460d3b2043c5d9df4bb83a4f380"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"50ad08557110a0d98919cd78c5c1afab"},{url:"categories/学习笔记/index.html",revision:"bcedabeb76b4280e230e0e63ecae9b38"},{url:"categories/教程/index.html",revision:"bec6e39e609edc28b991337314c403e4"},{url:"categories/游戏相关/index.html",revision:"0721d97d20b76cbc9839ad8ea7909f92"},{url:"categories/藏书/index.html",revision:"2abb6e0ddcfc1cac2f13511851117f34"},{url:"categories/随便玩玩/index.html",revision:"43df0310bafe8481ef3ac1c0b3a1cff5"},{url:"css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"css/custom.css",revision:"fefb763a1b6f7a2cdda1fcc69f6dbd0d"},{url:"css/fancybox.min.css",revision:"baa405d630c5c820243e7cdff528e2d9"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/font.css",revision:"215bfb8c8fa1f45eb20dbdf132f2471f"},{url:"css/fontawesome-v651-all.min.css",revision:"9402848c3d4bbc710c764326f8b887c9"},{url:"css/gallery.css",revision:"ffc5b5bb87bba298795800d54b1a0529"},{url:"css/index.css",revision:"a9291d189a6075df6a73dfe961e8f90c"},{url:"css/minimal.css",revision:"9bc643366516fbbf13eee2c8e9480715"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fontdest/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf",revision:"808e8bea5a3b963d283aacef05373108"},{url:"Gallery/BaldurGate3/index.html",revision:"2521466fdf1377ea2fc55cf1f03bdc1c"},{url:"Gallery/Biohazard/index.html",revision:"805bf420ab598425ac1e4356486132d2"},{url:"Gallery/Cyberpunk2077/index.html",revision:"9b929280959ae9cfa7936939189d8ad5"},{url:"Gallery/DMC/index.html",revision:"81f82a19323233781bc4d6a4daa9d0f6"},{url:"Gallery/ElderRing/index.html",revision:"4819424ab768d5415d62919a7eb31fd5"},{url:"Gallery/index.html",revision:"2d68d4adc4b2178c84dcdd08295672d7"},{url:"Gallery/Other/index.html",revision:"cc8c329b20e2bb62ce76aeff9637699f"},{url:"Gallery/RedDead2/index.html",revision:"a4e3370ea7a3f1be52316e35c442bd9e"},{url:"Gallery/TalesOfArise/index.html",revision:"7ddfe7bb2809504a79803f7d00f595a0"},{url:"Gallery/TheEvilWithin/index.html",revision:"b2ad90a699861124ca0a6377e367536e"},{url:"Gallery/TOTK/index.html",revision:"0609d95e33931c17095530283cf6a168"},{url:"Gallery/TOV/index.html",revision:"05080d7ba2d3bf1a8f8a0ab1f1940a95"},{url:"Gallery/Warframe/index.html",revision:"5d95dae40ddf95ac826e7756cb24b3a8"},{url:"Gallery/WoLong/index.html",revision:"33524f4f876c911eec7f27130b6778b8"},{url:"Gallery/Xenoblade/index.html",revision:"48976f67bc4e6341167cd709187bf555"},{url:"Gallery/Xenoblade3/index.html",revision:"752f3a62c283ad552285f3205062adc5"},{url:"Gallery/射覆/index.html",revision:"175d483613f1a90d86421230ac544598"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.jpg",revision:"88396125977224a65701ea6e0cd2fd8f"},{url:"img/favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.jpg",revision:"d941a8dcc10a945f6da1ceb2b6f964cd"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"f7eec7f12f3195e390a8bda7b4b8e9aa"},{url:"js/algoliasearch-lite.umd.min.js",revision:"4c0bc92206d801975c8f86eafa479f67"},{url:"js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/instantsearch.production.min.js",revision:"631c56570c3e4e207e10c91f27b6b734"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/medium-zoom.min.js",revision:"348914dc9144b3441a2a0c9687604a16"},{url:"js/Meting.min.js",revision:"7b5e05378aa5c4dbdccbe9a34cf30adb"},{url:"js/pace.min.js",revision:"094ce2780af2906e8916dc4c4eab6ee1"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/typed.umd.min.js",revision:"23279852cad2af6c444c7dd7d9dbd270"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"js/Valine.min.js",revision:"c748c413b03bcdb2064c84bc9e06613c"},{url:"link/index.html",revision:"b549cbb9dbe8962b31d3574820800842"},{url:"logs/index.html",revision:"43769fef11549f887545dba7d4a894dc"},{url:"page/2/index.html",revision:"e703632563711e6445f13cc9f621efaa"},{url:"steamgames/index.html",revision:"c71665998a18f8dcb6e8bc86d7398908"},{url:"tags/ChatGPT/index.html",revision:"f4565b75ec2eb937a5ff423b0951790d"},{url:"tags/ENB/index.html",revision:"71efb9a8ee6ff1982ca0e8a67c014404"},{url:"tags/Git/index.html",revision:"2dd3969191f6ac7899c24a3288877605"},{url:"tags/index.html",revision:"b72deb86e7b1a09c984bfbefa72a7fb5"},{url:"tags/JavaScript/index.html",revision:"71c5ebcc84a2d0d65c21a60e049e79eb"},{url:"tags/Mabinogi/index.html",revision:"46615cec36f314b2617f7960a8f23df7"},{url:"tags/NAT/index.html",revision:"2906981479f9d51e3d7d05958efd5ee7"},{url:"tags/NPS/index.html",revision:"74bf59e6c5a49724dd12661cb833c395"},{url:"tags/Obsidian/index.html",revision:"11f9e732ddf5b12864bb3f564c4ed589"},{url:"tags/ReShade/index.html",revision:"714a0b20a4426817751d9d358db98d86"},{url:"tags/SSR/index.html",revision:"7398a52263921e460030b9615f15c4e8"},{url:"tags/V8引擎/index.html",revision:"7efb3036fe7fafcc09612a2ce6cfb770"},{url:"tags/VITS/index.html",revision:"1e7fe9b444923714c3f1724108b7d2c4"},{url:"tags/VPN/index.html",revision:"ac968c980ee264a606e3512dd3e40a7c"},{url:"tags/内网穿透/index.html",revision:"56b12a38cdb5debf761fcf4dab7fec47"},{url:"tags/凯尔特神话/index.html",revision:"5431d6b25575e4537ad0cbd1a75453de"},{url:"tags/前端/index.html",revision:"9e26d3fe5803ff0571f19edf7c9c4f53"},{url:"tags/奇门遁甲/index.html",revision:"fb77db771d57602cf82ef851a11bbb8f"},{url:"tags/教程/index.html",revision:"ab35c4db454ae7e7e8fb0295401ebbd4"},{url:"tags/旧文搬运/index.html",revision:"de5ac8bd6a55bb1275e27df4630085cd"},{url:"tags/浏览器/index.html",revision:"94671fdc0ea532959ac2bc648bb7ec15"},{url:"tags/游戏考究/index.html",revision:"b8a0c2c3ec49104aed49651cead7f5a4"},{url:"tags/笔记/index.html",revision:"a47ae168752ad589d92d94ca9859250f"},{url:"tags/网页布局/index.html",revision:"b88aaab6146db24255d924070b74227e"},{url:"tags/计算机网络/index.html",revision:"402f5b7fc1467a0288767cc443bd77e3"},{url:"webfonts/fa-brands-400.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"webfonts/fa-regular-400.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"webfonts/fa-solid-900.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"}],{})}));
//# sourceMappingURL=service-worker.js.map
