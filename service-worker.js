if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const l=e=>a(e,c),s={module:{uri:c},exports:f,require:l};i[c]=Promise.all(d.map((e=>s[e]||l(e)))).then((e=>(r(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/03/07/Hexo-Create/index.html",revision:"97de05d031bd4826e78d1ebec504b2bc"},{url:"2020/03/11/Elin-annals/index.html",revision:"3bab8ddef9419c932d9e6ada310e2842"},{url:"2020/03/28/Intranet-penetration/index.html",revision:"95b0ea7cc826c391096a21f779266cc5"},{url:"2020/03/30/Computer-Network/index.html",revision:"4fb1d49f00d6ee17aafadd65d287c98b"},{url:"2020/04/01/flex-box/index.html",revision:"190a0e3336e30c2a2c7456db4d04d32f"},{url:"2020/04/17/Git/index.html",revision:"b9717b81f836a4f37d74174a328f2a1c"},{url:"2020/05/01/SSR-RE/index.html",revision:"9c710ea0521e415aaa83092ef8cc4f83"},{url:"2020/06/27/JS-Game-Snake/index.html",revision:"2c80e435b6528b533afedb9ec1ff390e"},{url:"2021/04/01/Browser-Works/index.html",revision:"5187ffa657315cc8f20a3f451b7000b2"},{url:"2021/04/05/JS-Works/index.html",revision:"af68dad4b0b008aeb8d3b5b5de06acab"},{url:"2022/06/09/YBDSG/index.html",revision:"9e000133a69832d2c6c8af01f50f1f6c"},{url:"2022/10/10/MB-ENB-ReShade/index.html",revision:"d6e8775983510ab651606ea1002ac9df"},{url:"2022/11/07/MB-ENB-DOF/index.html",revision:"12bcdeddd12f420756db40071d47a9e0"},{url:"2023/02/24/Obsidian-Ydnote/index.html",revision:"07a0401f69850dab7c1cf460ac389025"},{url:"2023/03/28/So-VITS/index.html",revision:"d706b6a4355fc40e500bc2e9fcad13e3"},{url:"2023/05/01/Test-ChatGPT-Translator/index.html",revision:"035444000657b5ddcc729a70fe023b92"},{url:"2024/01/09/MB-Dunbarton-Overhaul/index.html",revision:"19033fb88d1094fe1e855966bca026a7"},{url:"2024/03/12/Bazi-GPT/index.html",revision:"0a64685668e847da345b3205ccbaff22"},{url:"404.html",revision:"1279743a018ddf31bb48568d0a948129"},{url:"about/index.html",revision:"cf35952b1c98677271d9c22928187370"},{url:"archives/2020/03/index.html",revision:"afb7c1f43fe9db18030a29843f988b43"},{url:"archives/2020/04/index.html",revision:"592ef6fb4328da5d3fddc78434ac9ff5"},{url:"archives/2020/05/index.html",revision:"e4681421e3ac7353a7bcf10a68c8b154"},{url:"archives/2020/06/index.html",revision:"d445eabecfecb37ce7af2ce07350695d"},{url:"archives/2020/index.html",revision:"bdddd5866bde48cf1a0fe66e93c91d67"},{url:"archives/2021/04/index.html",revision:"9af0cc42eaa61cac57f5797e4011e8bf"},{url:"archives/2021/index.html",revision:"8a89bb9f19717aa7d1eafde6fd55190d"},{url:"archives/2022/06/index.html",revision:"942365b6ccf949ad57429e226c9993f6"},{url:"archives/2022/10/index.html",revision:"99f6338f07beeb88776ad59464c41910"},{url:"archives/2022/11/index.html",revision:"cf8fd5cb7a72f2550d0c517219ad732e"},{url:"archives/2022/index.html",revision:"5405d7bc077796469707b0fa02529250"},{url:"archives/2023/02/index.html",revision:"183f40b99e22281a28e2a33a9c1a2dc4"},{url:"archives/2023/03/index.html",revision:"8393c7b63c77db16d9d830a2dfff4dc9"},{url:"archives/2023/05/index.html",revision:"758970d3f7da75223d7cad88cd8abc5a"},{url:"archives/2023/index.html",revision:"f4faec78ebe58da945b0def80ae75f78"},{url:"archives/2024/01/index.html",revision:"89bb3af9e49364f1a0ee8df4815639c2"},{url:"archives/2024/03/index.html",revision:"ef119409e3a067d29b7bc9524c13f96c"},{url:"archives/2024/index.html",revision:"a3fae1c29b275539e0ed7a2a4932ac11"},{url:"archives/index.html",revision:"db83d493b597b610b15995a86481e4b8"},{url:"archives/page/2/index.html",revision:"ec79e444f98bcbf51eec19f2c7d0c22b"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"880ec4fd87600d882992d681cf53c674"},{url:"categories/学习笔记/index.html",revision:"5eac2f53e09bdc886cdbee5cf9e5d811"},{url:"categories/教程/index.html",revision:"c6aa01cc0a33cf9d65a379a3dbff4da9"},{url:"categories/游戏相关/index.html",revision:"b50c6e41c3115b1eea26ea0ba15bc487"},{url:"categories/藏书/index.html",revision:"bf4167bd2dea58e60cc8759029cdd4d9"},{url:"categories/随便玩玩/index.html",revision:"0ef266a8c2a85c8d8b13fab25e093550"},{url:"css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"css/custom.css",revision:"fefb763a1b6f7a2cdda1fcc69f6dbd0d"},{url:"css/fancybox.min.css",revision:"baa405d630c5c820243e7cdff528e2d9"},{url:"css/fill-left.css",revision:"e56e775d991c448c3744874bba308f9d"},{url:"css/font.css",revision:"215bfb8c8fa1f45eb20dbdf132f2471f"},{url:"css/fontawesome-v651-all.min.css",revision:"9402848c3d4bbc710c764326f8b887c9"},{url:"css/index.css",revision:"a9291d189a6075df6a73dfe961e8f90c"},{url:"css/minimal.css",revision:"9bc643366516fbbf13eee2c8e9480715"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fontdest/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf",revision:"808e8bea5a3b963d283aacef05373108"},{url:"Gallery/BaldurGate3/index.html",revision:"27327e9962fc146d148966ebc221582a"},{url:"Gallery/Biohazard/index.html",revision:"de98c5059ce060a1474d751d08a0e00b"},{url:"Gallery/Cyberpunk2077/index.html",revision:"c223ef3e85546702ec88ef35381f307d"},{url:"Gallery/DMC/index.html",revision:"8f8dc7eeb0f5b632151826bc93bc6f78"},{url:"Gallery/ElderRing/index.html",revision:"e3e6c1a44e1e929633758a38ea04b83d"},{url:"Gallery/index.html",revision:"c2975d08666499f4e1ec1eb220de83d7"},{url:"Gallery/Other/index.html",revision:"e5420e34d3e5d80ca0163b32acee9061"},{url:"Gallery/RedDead2/index.html",revision:"f97a810467cb28b17a3ed765c19d593a"},{url:"Gallery/TalesOfArise/index.html",revision:"2c2fecb0c03ba4819c29bbe534d920a7"},{url:"Gallery/TheEvilWithin/index.html",revision:"5d4cbe12b8a08fbe2189321477149af4"},{url:"Gallery/TOTK/index.html",revision:"c95fd7bf5e7bd160dfdf8e7fe32d323a"},{url:"Gallery/TOV/index.html",revision:"18899722da2c94596481c534d915f205"},{url:"Gallery/Warframe/index.html",revision:"11ac3d1715ebe73674335e8fb2f0644a"},{url:"Gallery/WoLong/index.html",revision:"d01e233818d47a787bc7e0e76cf21f93"},{url:"Gallery/Xenoblade/index.html",revision:"307b60161bce9c252fe22bad75583773"},{url:"Gallery/Xenoblade3/index.html",revision:"dca32bdbee4dd69055014ec5fafb2e40"},{url:"Gallery/射覆/index.html",revision:"89e0d8c63d9829c19da471bc7023defc"},{url:"img/404.jpg",revision:"039bc1e945b9783c4f233d6faf478f6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"3ef788176dd1a9e61334777cb25fb528"},{url:"img/bg1.jpg",revision:"3f58d72ccc69a84ff604456ff7a7f9b8"},{url:"img/bg2.jpg",revision:"46914ac1044193f87102d7a3ecd9e264"},{url:"img/bilibili.png",revision:"2452f9f03bb385a6182b537e058d1da9"},{url:"img/default_cover_post.jpg",revision:"9d0bbc5d4b63eb4753fd217fad166e41"},{url:"img/favicon.png",revision:"77664ac285e94d72dc1f6cb74a7bb393"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"cd2b2b90028e2b61026a169584805e8d"},{url:"img/old-favicon.png",revision:"9111f744bfe3647d4f3ee2b56766a9f8"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"index.html",revision:"de60c83b9382b82cd0b4385b02fc9400"},{url:"js/algoliasearch-lite.umd.min.js",revision:"4c0bc92206d801975c8f86eafa479f67"},{url:"js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"js/custom.js",revision:"3f7a86d07a4e99fa5e9f8ba855438dcd"},{url:"js/instantsearch.production.min.js",revision:"631c56570c3e4e207e10c91f27b6b734"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/medium-zoom.min.js",revision:"348914dc9144b3441a2a0c9687604a16"},{url:"js/Meting.min.js",revision:"7b5e05378aa5c4dbdccbe9a34cf30adb"},{url:"js/pace.min.js",revision:"094ce2780af2906e8916dc4c4eab6ee1"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/typed.umd.min.js",revision:"23279852cad2af6c444c7dd7d9dbd270"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"js/Valine.min.js",revision:"c748c413b03bcdb2064c84bc9e06613c"},{url:"link/index.html",revision:"4a36416c465cff576f963c719d265fde"},{url:"logs/index.html",revision:"694fe29a93b1d6acdf2f3d5dc60d55f8"},{url:"page/2/index.html",revision:"d72436bd683f885da31617781834d116"},{url:"steamgames/index.html",revision:"4913895b33d21e8e659f48272f27c0dc"},{url:"tags/ChatGPT/index.html",revision:"ab040d00a4f108d45c85d4bd4cf8daf9"},{url:"tags/ENB/index.html",revision:"578ae0b136cbe1c8cdf71e7c472847b5"},{url:"tags/Git/index.html",revision:"a33ce86032953a34db5ce10283b8b02b"},{url:"tags/index.html",revision:"f7c7751a54f4eea1f4fd9fe7f3879a39"},{url:"tags/JavaScript/index.html",revision:"3b4a56bef4c17eb886e0f4c80e91c3fb"},{url:"tags/Mabinogi/index.html",revision:"f6419a80e2cf986a4292cf15a6c7619c"},{url:"tags/NAT/index.html",revision:"d115ef64083d2d1e32e1cfd2c873105f"},{url:"tags/NPS/index.html",revision:"5f97332ca6136bba3716973068046d49"},{url:"tags/Obsidian/index.html",revision:"f2c9915b8ab0e593c23936b7a6f4c32c"},{url:"tags/ReShade/index.html",revision:"490c5c0c5d5af2dd940778ffe0fdfa5a"},{url:"tags/SSR/index.html",revision:"6b8ea4bcca141e8bfabe3f7fa3c968da"},{url:"tags/V8引擎/index.html",revision:"30f84b38e6d36ff54c2b4cfb0eb1b52f"},{url:"tags/VITS/index.html",revision:"f01efea879488b7d32efbdc9d825da4e"},{url:"tags/VPN/index.html",revision:"7676c0871835020ec221fa2e39a115e2"},{url:"tags/内网穿透/index.html",revision:"cccb922f9fbbfd8a2cc53935632f624c"},{url:"tags/凯尔特神话/index.html",revision:"78b9afb4f13f149fa2fed02d3cd4aed4"},{url:"tags/前端/index.html",revision:"fe2fecff1c3a7ae3a9c8050ff85b4bc2"},{url:"tags/奇门遁甲/index.html",revision:"6a8065d6e62ef27e083fbc736869be08"},{url:"tags/教程/index.html",revision:"d7ecc50cbed2da9a0e52ca8220321316"},{url:"tags/旧文搬运/index.html",revision:"2e0c056f43314a2a0a4432089393ad4c"},{url:"tags/浏览器/index.html",revision:"c8ab69a7444f527dbf5e8fe2533555bc"},{url:"tags/游戏考究/index.html",revision:"1de143ded4360feba57fce725fddfa33"},{url:"tags/笔记/index.html",revision:"1ed0070cc2f59a7010608ba34534ae82"},{url:"tags/网页布局/index.html",revision:"7719ee3a292251dd7694410fccf1cf2b"},{url:"tags/计算机网络/index.html",revision:"f8dc19318726cdba52fb42123fdebf29"},{url:"webfonts/fa-brands-400.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"webfonts/fa-regular-400.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"webfonts/fa-solid-900.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"}],{})}));
//# sourceMappingURL=service-worker.js.map
