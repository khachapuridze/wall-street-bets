(function(e){function t(t){for(var n,s,i=t[0],r=t[1],d=t[2],l=0,u=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&u.push(c[s][0]),c[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);v&&v(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==c[r]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f31bb586"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=n);var o,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=s(e);var d=new Error;o=function(t){r.onerror=r.onload=null,clearTimeout(l);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:r})}),12e4);r.onerror=r.onload=o,document.head.appendChild(r)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var v=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"054f":function(e,t,a){"use strict";a("1683")},"0cf5":function(e,t,a){"use strict";a("394d")},1683:function(e,t,a){},"18eb":function(e,t,a){},"212c":function(e,t,a){},"256c":function(e,t,a){},"2f64":function(e,t,a){},3908:function(e,t,a){},"394d":function(e,t,a){},4138:function(e,t,a){e.exports=a.p+"img/community_bg.c378654c.png"},"4b16":function(e,t,a){"use strict";a("5dc1")},"4e8d":function(e,t,a){"use strict";a("3908")},"51e5":function(e,t,a){"use strict";a("2f64")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["e"])("div",{class:"body-layer"},null,-1),o={id:"js-scroll",class:"js-scroll","data-scroll-container":""};function s(e,t,a,s,i,r){const d=Object(n["C"])("Header"),l=Object(n["C"])("router-view"),v=Object(n["C"])("Footer");return Object(n["v"])(),Object(n["d"])(n["a"],null,[c,Object(n["e"])("div",o,[Object(n["h"])(d),Object(n["h"])(l),Object(n["h"])(v)])],64)}var i=a("f055"),r=a.n(i),d=a("9d64"),l=a.n(d);const v={class:"header container"},u=Object(n["f"])('<img class="header__logo__mobile" src="'+r.a+'" alt="" data-v-0ce8f370><div class="header__logo" data-v-0ce8f370><img src="'+l.a+'" alt="logo" data-v-0ce8f370></div><div class="header__nav" data-v-0ce8f370><div class="header__nav-item active" data-v-0ce8f370>About Us</div><div class="header__nav-item" data-v-0ce8f370>Services</div><div class="header__nav-item" data-v-0ce8f370>Community</div><div class="header__nav-item" data-v-0ce8f370>Partners</div></div>',3);function p(e,t,a,c,o,s){const i=Object(n["C"])("ButtonComponent");return Object(n["v"])(),Object(n["d"])("div",v,[u,Object(n["h"])(i,{title:"Book Now"})])}const f={class:"btn"};function b(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",f,Object(n["E"])(c.title),1)}var h={props:{title:String},setup(e){const t=Object(n["F"])(e,"title");return{title:t}}},g=(a("4e8d"),a("d959")),m=a.n(g);const C=m()(h,[["render",b],["__scopeId","data-v-ab11766c"]]);var j=C,O={components:{ButtonComponent:j},setup(){return{}}};a("4b16");const w=m()(O,[["render",p],["__scopeId","data-v-0ce8f370"]]);var _=w,y=a("fbd6"),k=a("4476"),L=a("1dac");const A=Object(n["f"])('<footer class="footer" data-v-4464edeb><div class="footer__content" data-v-4464edeb><div class="footer__logo" data-v-4464edeb><img src="'+l.a+'" alt="logo" data-v-4464edeb></div><div class="footer__nav" data-v-4464edeb><div class="footer__nav-item" data-v-4464edeb>About Us</div><div class="footer__nav-item" data-v-4464edeb>Services</div><div class="footer__nav-item" data-v-4464edeb>Community</div><div class="footer__nav-item" data-v-4464edeb>Partners</div></div><div class="footer__socials" data-v-4464edeb><svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4464edeb><path d="M35.8968 3.40226C36.3793 1.01561 35.0926 0.0779959 33.6452 0.674658L1.63985 13.716C-0.531365 14.6536 -0.45095 15.9322 1.31819 16.5288L9.44014 19.1712L28.4182 6.55605C29.3027 5.87415 30.1873 6.30033 29.4636 6.897L14.1042 21.5578L13.5413 30.5078C14.4259 30.5078 14.7476 30.1668 15.23 29.6554L19.1704 25.564L27.4532 32.0421C28.9811 32.9797 30.1069 32.4682 30.509 30.593L35.8968 3.40226Z" fill="white" data-v-4464edeb></path></svg><svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4464edeb><path d="M35.5313 8.44217C37.0577 7.28554 38.4315 5.89759 39.5 4.27831C38.1262 4.89518 36.5235 5.35783 34.9207 5.51205C36.5998 4.50964 37.8209 2.96747 38.4315 1.03976C36.9051 1.96506 35.1497 2.65904 33.3943 3.04458C31.8679 1.4253 29.8072 0.5 27.5176 0.5C23.091 0.5 19.5039 4.1241 19.5039 8.59639C19.5039 9.21325 19.5802 9.83012 19.7329 10.447C13.093 10.0614 7.13992 6.82289 3.17123 1.96506C2.48434 3.12169 2.10274 4.50964 2.10274 6.05181C2.10274 8.82771 3.47652 11.2952 5.68982 12.7602C4.39237 12.6831 3.09491 12.3747 2.02642 11.7578V11.8349C2.02642 15.7675 4.77397 19.006 8.43738 19.7771C7.82681 19.9313 7.0636 20.0855 6.37671 20.0855C5.84247 20.0855 5.38454 20.0084 4.85029 19.9313C5.84247 23.1699 8.81898 25.4831 12.3297 25.5602C9.58219 27.7193 6.14775 29.0301 2.40802 29.0301C1.72114 29.0301 1.11057 28.953 0.5 28.8759C4.01076 31.1892 8.20842 32.5 12.7877 32.5C27.5176 32.5 35.5313 20.2398 35.5313 9.52169C35.5313 9.13614 35.5313 8.82771 35.5313 8.44217Z" fill="white" data-v-4464edeb></path></svg><svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4464edeb><path d="M18.5625 15.75C18.5625 14.75 17.8125 13.9375 16.9375 13.9375C16 13.9375 15.25 14.75 15.25 15.75C15.25 16.6875 16 17.5 16.9375 17.5C17.8125 17.5 18.5625 16.6875 18.5625 15.75ZM11.0625 13.9375C10.1875 13.9375 9.4375 14.75 9.4375 15.75C9.4375 16.6875 10.1875 17.5 11.0625 17.5C12 17.5 12.6875 16.6875 12.6875 15.75C12.75 14.75 12 13.9375 11.0625 13.9375ZM28 3.8125C28 2 26.5 0.5 24.6875 0.5H3.25C1.4375 0.5 0 2 0 3.8125V25.4375C0 27.3125 1.4375 28.75 3.25 28.75H21.375L20.5625 25.8125C25.25 30.125 23.9375 29 28 32.5V3.8125ZM23.4375 19C23.4375 19 22.0625 21.3125 18.5 21.4375C18.5 21.4375 17.9375 20.75 17.4375 20.125C19.5625 19.5625 20.375 18.25 20.375 18.25C19.6875 18.6875 19.0625 18.9375 18.5 19.1875C15.0625 20.625 11.25 20.125 8.5 18.625C8.5 18.5625 8.125 18.375 7.875 18.1875C7.875 18.1875 8.625 19.5 10.6875 20.125C10.1875 20.6875 9.625 21.4375 9.625 21.4375C6.0625 21.3125 4.75 19 4.75 19C4.75 13.8125 7 9.6875 7 9.6875C9.3125 7.9375 11.5 8 11.5 8L11.6875 8.1875C8.8125 9 7.5 10.25 7.5 10.25C7.5 10.25 7.8125 10.0625 8.4375 9.8125C12.125 8.1875 16.5625 8.1875 20.375 10.25C20.375 10.25 19.125 9.0625 16.375 8.25L16.625 8C16.625 8 18.8125 7.9375 21.125 9.6875C21.125 9.6875 23.4375 13.8125 23.4375 19Z" fill="white" data-v-4464edeb></path></svg></div></div><div class="footer__bottom container" data-v-4464edeb><p data-v-4464edeb>© Wall Street Bets. All Rights Reserved.</p><p data-v-4464edeb>Designed By <a href="" data-v-4464edeb>Company</a></p></div></footer>',1),S=[A];function x(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",null,S)}var P={};a("0cf5");const B=m()(P,[["render",x],["__scopeId","data-v-4464edeb"]]);var M=B,I={components:{Header:_,Footer:M},data(){return{lmS:null}},methods:{setScroll(){let e=new y["a"]({el:document.querySelector("[data-scroll-container]"),smooth:!0});k["a"].registerPlugin(L["a"]),e.on("scroll",L["a"].update),e.on("call",()=>{this.$store.commit("startNumberAnimation")}),L["a"].scrollerProxy(".js-scroll",{scrollTop(t){return arguments.length?e.scrollTo(t,0,0):e.scroll.instance.scroll.y},getBoundingClientRect(){return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}}}),L["a"].addEventListener("refresh",()=>e.update()),L["a"].refresh()}},mounted(){this.setScroll()},setup(){return{}}};a("d423");const H=m()(I,[["render",s]]);var J=H,E=a("6605"),Z=a("ef1e"),V=a.n(Z),U=a("9f58"),K=a.n(U),W=a("df42"),D=a.n(W),N=a("4138"),G=a.n(N),R=a("88f6"),T=a.n(R);const Y=e=>(Object(n["y"])("data-v-a93f8e48"),e=e(),Object(n["w"])(),e),q={class:"home"},F=Object(n["f"])('<h1 data-scroll data-scroll-speed="1" data-v-a93f8e48>Wall Street <span data-v-a93f8e48>Bets</span></h1><h3 data-v-a93f8e48> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h3><div class="elipse elipse-blue" data-v-a93f8e48><img src="'+V.a+'" alt="elipse" data-v-a93f8e48></div><div class="elipse elipse-white" data-v-a93f8e48><img src="'+K.a+'" alt="elipse" data-v-a93f8e48></div><div class="home__socials" data-v-a93f8e48><svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a93f8e48><path d="M35.8968 3.40226C36.3793 1.01561 35.0926 0.0779959 33.6452 0.674658L1.63985 13.716C-0.531365 14.6536 -0.45095 15.9322 1.31819 16.5288L9.44014 19.1712L28.4182 6.55605C29.3027 5.87415 30.1873 6.30033 29.4636 6.897L14.1042 21.5578L13.5413 30.5078C14.4259 30.5078 14.7476 30.1668 15.23 29.6554L19.1704 25.564L27.4532 32.0421C28.9811 32.9797 30.1069 32.4682 30.509 30.593L35.8968 3.40226Z" fill="white" data-v-a93f8e48></path></svg><svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a93f8e48><path d="M35.5313 8.44217C37.0577 7.28554 38.4315 5.89759 39.5 4.27831C38.1262 4.89518 36.5235 5.35783 34.9207 5.51205C36.5998 4.50964 37.8209 2.96747 38.4315 1.03976C36.9051 1.96506 35.1497 2.65904 33.3943 3.04458C31.8679 1.4253 29.8072 0.5 27.5176 0.5C23.091 0.5 19.5039 4.1241 19.5039 8.59639C19.5039 9.21325 19.5802 9.83012 19.7329 10.447C13.093 10.0614 7.13992 6.82289 3.17123 1.96506C2.48434 3.12169 2.10274 4.50964 2.10274 6.05181C2.10274 8.82771 3.47652 11.2952 5.68982 12.7602C4.39237 12.6831 3.09491 12.3747 2.02642 11.7578V11.8349C2.02642 15.7675 4.77397 19.006 8.43738 19.7771C7.82681 19.9313 7.0636 20.0855 6.37671 20.0855C5.84247 20.0855 5.38454 20.0084 4.85029 19.9313C5.84247 23.1699 8.81898 25.4831 12.3297 25.5602C9.58219 27.7193 6.14775 29.0301 2.40802 29.0301C1.72114 29.0301 1.11057 28.953 0.5 28.8759C4.01076 31.1892 8.20842 32.5 12.7877 32.5C27.5176 32.5 35.5313 20.2398 35.5313 9.52169C35.5313 9.13614 35.5313 8.82771 35.5313 8.44217Z" fill="white" data-v-a93f8e48></path></svg><svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a93f8e48><path d="M18.5625 15.75C18.5625 14.75 17.8125 13.9375 16.9375 13.9375C16 13.9375 15.25 14.75 15.25 15.75C15.25 16.6875 16 17.5 16.9375 17.5C17.8125 17.5 18.5625 16.6875 18.5625 15.75ZM11.0625 13.9375C10.1875 13.9375 9.4375 14.75 9.4375 15.75C9.4375 16.6875 10.1875 17.5 11.0625 17.5C12 17.5 12.6875 16.6875 12.6875 15.75C12.75 14.75 12 13.9375 11.0625 13.9375ZM28 3.8125C28 2 26.5 0.5 24.6875 0.5H3.25C1.4375 0.5 0 2 0 3.8125V25.4375C0 27.3125 1.4375 28.75 3.25 28.75H21.375L20.5625 25.8125C25.25 30.125 23.9375 29 28 32.5V3.8125ZM23.4375 19C23.4375 19 22.0625 21.3125 18.5 21.4375C18.5 21.4375 17.9375 20.75 17.4375 20.125C19.5625 19.5625 20.375 18.25 20.375 18.25C19.6875 18.6875 19.0625 18.9375 18.5 19.1875C15.0625 20.625 11.25 20.125 8.5 18.625C8.5 18.5625 8.125 18.375 7.875 18.1875C7.875 18.1875 8.625 19.5 10.6875 20.125C10.1875 20.6875 9.625 21.4375 9.625 21.4375C6.0625 21.3125 4.75 19 4.75 19C4.75 13.8125 7 9.6875 7 9.6875C9.3125 7.9375 11.5 8 11.5 8L11.6875 8.1875C8.8125 9 7.5 10.25 7.5 10.25C7.5 10.25 7.8125 10.0625 8.4375 9.8125C12.125 8.1875 16.5625 8.1875 20.375 10.25C20.375 10.25 19.125 9.0625 16.375 8.25L16.625 8C16.625 8 18.8125 7.9375 21.125 9.6875C21.125 9.6875 23.4375 13.8125 23.4375 19Z" fill="white" data-v-a93f8e48></path></svg></div><div class="home__join container" data-v-a93f8e48><div class="scroll" data-v-a93f8e48><svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a93f8e48><path d="M36 40.8999C35.8222 40.8999 35.6556 40.8666 35.5 40.7999C35.3445 40.7333 35.2 40.6333 35.0667 40.4999L28.4667 33.8999C28.2222 33.6555 28.1056 33.3444 28.1167 32.9666C28.1278 32.5888 28.2556 32.2777 28.5 32.0333C28.7889 31.7444 29.1056 31.6166 29.45 31.6499C29.7945 31.6833 30.1 31.8222 30.3667 32.0666L36 37.6999L41.6334 32.0666C41.8778 31.8222 42.1945 31.6888 42.5834 31.6666C42.9722 31.6444 43.2889 31.7777 43.5334 32.0666C43.8222 32.3111 43.95 32.6166 43.9167 32.9833C43.8834 33.3499 43.7445 33.6666 43.5 33.9333L36.9334 40.4999C36.8 40.6333 36.6556 40.7333 36.5 40.7999C36.3445 40.8666 36.1778 40.8999 36 40.8999Z" fill="white" data-v-a93f8e48></path><mask id="mask0_57_188" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="-8" y="-4" width="83" height="77" data-v-a93f8e48><path d="M60.0001 72.5L37.5001 36.5L-7.49994 36.5L12.0001 2L41.0001 -3.5L71.0001 12.5L74.5001 41.5L60.0001 72.5Z" fill="#050505" data-v-a93f8e48></path></mask><g mask="url(#mask0_57_188)" data-v-a93f8e48><rect x="1.5" y="2" width="69" height="69" rx="34.5" stroke="white" stroke-width="3" data-v-a93f8e48></rect></g><rect x="1.5" y="2" width="69" height="69" rx="34.5" stroke="#ffffff" stroke-width="3" data-v-a93f8e48></rect></svg><span data-v-a93f8e48> Scroll Down </span></div><p data-v-a93f8e48>Join Us To Uncover Boundless</p><h4 data-v-a93f8e48>Opportunities in Crypto Marketing</h4></div>',6),Q=Y(()=>Object(n["e"])("div",{class:"text-comp"},[Object(n["e"])("h4",null,[Object(n["g"])("We Help You to Build Your "),Object(n["e"])("span",null,"Brand")]),Object(n["e"])("p",null," We specialize in helping projects express their brand in a way that fosters genuine connections to the audience to grow a base of investors interested in the long term success of a project and not a short transactional relationship in attempt to earn fast money. Our primary demographics is that of men aged 18-35 that have a thirst to take high risk in trading and investing "),Object(n["e"])("img",{src:D.a,alt:"handshake"})],-1)),z=Y(()=>Object(n["e"])("div",{class:"text-comp community"},[Object(n["e"])("h4",null,[Object(n["g"])("Our "),Object(n["e"])("span",null,"Community")]),Object(n["e"])("p",null," WallStreetBets reached world-wide fame (and meme status) during the now infamous GameStop $GME short squeeze that nearly bankrupted major hedge funds like Melvin Capital. Since then WallSteetBets or WSB at it is known ha been empowering retail equities and crypto trades in gaining edge and expanding their degenerate gambling activities. "),Object(n["e"])("img",{src:G.a,alt:"community_bg"})],-1)),X={class:"text-comp our-projects"},$=Y(()=>Object(n["e"])("h4",null,[Object(n["g"])("Our"),Object(n["e"])("span",null,"Projects")],-1)),ee=Y(()=>Object(n["e"])("p",null," It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",-1)),te=Y(()=>Object(n["e"])("div",{class:"eth"},[Object(n["e"])("div",{class:"eth__layer"}),Object(n["e"])("img",{class:"eth__img",src:T.a,alt:"eth"})],-1));function ae(e,t,a,c,o,s){const i=Object(n["C"])("Packages"),r=Object(n["C"])("Numbers"),d=Object(n["C"])("ProjectsSlider"),l=Object(n["C"])("Community");return Object(n["v"])(),Object(n["d"])("div",q,[F,Object(n["h"])(i),Object(n["h"])(r),Q,z,Object(n["e"])("div",X,[$,ee,Object(n["h"])(d)]),te,Object(n["h"])(l)])}const ne={class:"hello"},ce=Object(n["f"])('<p data-v-1dfc7223> For a guide and recipes on how to configure / customize this project,<br data-v-1dfc7223> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-cli documentation</a>. </p><h3 data-v-1dfc7223>Installed CLI Plugins</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1dfc7223>babel</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1dfc7223>router</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li></ul><h3 data-v-1dfc7223>Essential Links</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Core Docs</a></li><li data-v-1dfc7223><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Forum</a></li><li data-v-1dfc7223><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>Community Chat</a></li><li data-v-1dfc7223><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1dfc7223>Twitter</a></li><li data-v-1dfc7223><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>News</a></li></ul><h3 data-v-1dfc7223>Ecosystem</h3><ul data-v-1dfc7223><li data-v-1dfc7223><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-router</a></li><li data-v-1dfc7223><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vuex</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1dfc7223>vue-devtools</a></li><li data-v-1dfc7223><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1dfc7223>vue-loader</a></li><li data-v-1dfc7223><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1dfc7223>awesome-vue</a></li></ul>',7);function oe(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",ne,[Object(n["e"])("h1",null,Object(n["E"])(a.msg),1),ce])}var se={name:"HelloWorld",props:{msg:String}};a("c7ad");const ie=m()(se,[["render",oe],["__scopeId","data-v-1dfc7223"]]);var re=ie;const de={class:"packages"},le=Object(n["e"])("h2",{class:"packages__title"},[Object(n["g"])("Promotion "),Object(n["e"])("span",null," Packages ")],-1),ve=Object(n["e"])("p",{class:"packages__subtitle"},"All packages 25% off if paid in $WSB token.",-1),ue={class:"packages__list"},pe={class:"packages__list packages__list-second"};function fe(e,t,a,c,o,s){const i=Object(n["C"])("PackageCard"),r=Object(n["C"])("Button");return Object(n["v"])(),Object(n["d"])("div",de,[le,ve,Object(n["e"])("div",ue,[Object(n["h"])(i),Object(n["h"])(i),Object(n["h"])(i),Object(n["h"])(i,{class:"mobile"}),Object(n["h"])(i,{class:"mobile"}),Object(n["h"])(i,{class:"mobile"})]),Object(n["e"])("div",pe,[Object(n["h"])(i),Object(n["h"])(i),Object(n["h"])(i)]),Object(n["h"])(r,{title:"see more"})])}var be=a("ded2"),he=a.n(be);const ge={class:"package-card"},me=Object(n["f"])('<div class="hover-layer" data-v-87674e8c></div><img src="'+he.a+'" alt="card" data-v-87674e8c><div class="package-card__content" data-v-87674e8c><div class="package-card__title" data-v-87674e8c>Service <span data-v-87674e8c> Name </span></div><div class="package-card__desc" data-v-87674e8c> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div><div class="package-card__btn" data-v-87674e8c> Pricing &amp; Details <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-87674e8c><path d="M6.4375 1.09375C6.125 1.40625 6.15625 1.875 6.4375 2.1875L10.2188 5.75H1.25C0.8125 5.75 0.5 6.09375 0.5 6.5V7.5C0.5 7.9375 0.8125 8.25 1.25 8.25H10.2188L6.4375 11.8438C6.15625 12.1562 6.15625 12.625 6.4375 12.9375L7.125 13.625C7.4375 13.9062 7.90625 13.9062 8.1875 13.625L14.2812 7.53125C14.5625 7.25 14.5625 6.78125 14.2812 6.46875L8.1875 0.40625C7.90625 0.125 7.4375 0.125 7.125 0.40625L6.4375 1.09375Z" fill="white" data-v-87674e8c></path></svg></div></div>',3),Ce=[me];function je(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",ge,Ce)}var Oe={setup(){return{}}};a("e1e1");const we=m()(Oe,[["render",je],["__scopeId","data-v-87674e8c"]]);var _e=we,ye={components:{PackageCard:_e,Button:j},setup(){const e=Object(n["z"])({count:0});return{...Object(n["G"])(e)}}};a("57c1");const ke=m()(ye,[["render",fe]]);var Le=ke,Ae=a("cec7"),Se=a.n(Ae);const xe={class:"numbers"},Pe=Object(n["e"])("img",{src:Se.a,alt:"numbers"},null,-1),Be={class:"numbers__cont"},Me={class:"numbers__item","data-scroll":"","data-scroll-call":"onViewPort","data-scroll-id":"hey"},Ie=Object(n["e"])("h4",null,"Community Members",-1),He={class:"numbers__item"},Je=Object(n["e"])("h4",null,"Projects Created",-1),Ee={class:"numbers__item"},Ze=Object(n["e"])("h4",null,"Of Success Stories",-1);function Ve(e,t,a,c,o,s){const i=Object(n["C"])("CountUp");return Object(n["v"])(),Object(n["d"])("div",xe,[Pe,Object(n["e"])("div",Be,[Object(n["e"])("div",Me,[Object(n["h"])(i,{autoplay:!1,"end-val":65e3,"start-val":0,options:o.optionsCommunity},null,8,["options"]),Ie]),Object(n["e"])("div",He,[Object(n["h"])(i,{autoplay:!1,"end-val":1e3,startValue:0,options:o.optionsProjects},null,8,["options"]),Je]),Object(n["e"])("div",Ee,[Object(n["h"])(i,{"end-val":96,autoplay:!1,"start-val":0,options:o.optionsPercentage},null,8,["options"]),Ze])])])}var Ue=a("9bba"),Ke={components:{CountUp:Ue["a"]},data(){return{delay:3e3,optionsCommunity:{enableScrollSpy:!0,scrollSpyDelay:1e3},optionsProjects:{suffix:" +",enableScrollSpy:!0,scrollSpyDelay:3e3},optionsPercentage:{suffix:"%",enableScrollSpy:!0,scrollSpyDelay:5e3}}},computed:{numberAnimation(){return this.$store.state.numberAnimation}}};a("054f");const We=m()(Ke,[["render",Ve]]);var De=We;const Ne={class:"projects-slider"};function Ge(e,t,a,c,o,s){const i=Object(n["C"])("ProjectSliderItem"),r=Object(n["C"])("swiper-slide"),d=Object(n["C"])("swiper");return Object(n["v"])(),Object(n["d"])("div",Ne,[Object(n["h"])(d,{"space-between":50,centeredSlides:!0,loop:!0,slidesPerView:1.55,navigation:"",pagination:{clickable:!0},breakpoints:{300:{slidesPerView:1.2,spaceBetween:50},400:{slidesPerView:1.3,spaceBetween:100},1e3:{slidesPerView:1.2},1500:{slidesPerView:1.3},1700:{slidesPerView:1.55}}},{default:Object(n["J"])(()=>[Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1}),Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1}),Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1}),Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1}),Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1}),Object(n["h"])(r,null,{default:Object(n["J"])(()=>[Object(n["h"])(i)]),_:1})]),_:1},8,["slidesPerView","breakpoints"])])}var Re=a("6d3b"),Te=a("8343"),Ye=a("5dc8"),qe=a("6577"),Fe=a("90ea"),Qe=a("a16a"),ze=a("807b"),Xe=a.n(ze);const $e={class:"slider-item"},et=Object(n["f"])('<img src="'+Xe.a+'" alt="project" data-v-132a153e><div class="slider-item__content" data-v-132a153e><div class="slider-item__title" data-v-132a153e> Sample <span data-v-132a153e>Title goes here</span></div><p data-v-132a153e> It is a long established fact that a reader will be distracted by the readable content of a page when looking at... </p><div class="slider-item__btn" data-v-132a153e> Sample Button<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-132a153e><path d="M5.94082 0.922108C5.62814 1.24284 5.65941 1.72394 5.94082 2.04467L9.72418 5.70103H0.750419C0.312674 5.70103 0 6.05384 0 6.47079V7.49714C0 7.94616 0.312674 8.2669 0.750419 8.2669H9.72418L5.94082 11.9553C5.65941 12.2761 5.65941 12.7572 5.94082 13.0779L6.6287 13.7835C6.94137 14.0722 7.41039 14.0722 7.69179 13.7835L13.7889 7.52921C14.0704 7.24055 14.0704 6.75945 13.7889 6.43872L7.69179 0.216495C7.41039 -0.072165 6.94137 -0.072165 6.6287 0.216495L5.94082 0.922108Z" fill="white" data-v-132a153e></path></svg></div></div>',2),tt=[et];function at(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",$e,tt)}var nt={};a("51e5");const ct=m()(nt,[["render",at],["__scopeId","data-v-132a153e"]]);var ot=ct;Re["a"].use([Te["a"],Ye["a"],qe["a"]]);var st={components:{ProjectSliderItem:ot,Swiper:Fe["a"],SwiperSlide:Qe["a"]}};a("d4c2");const it=m()(st,[["render",Ge]]);var rt=it;const dt={class:"community"},lt=Object(n["f"])('<div class="community__card" data-v-623df160><div class="community__title" data-v-623df160><h4 data-v-623df160>Ready to Join <span data-v-623df160>Community?</span></h4></div><p data-v-623df160> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. </p><div class="telegram" data-v-623df160><svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-623df160><path d="M24.4312 1.81391C24.7529 0.322255 23.8951 -0.263753 22.9301 0.109161L1.59323 8.26C0.145757 8.846 0.199367 9.64511 1.37879 10.018L6.79343 11.6695L19.4454 3.78503C20.0352 3.35884 20.6249 3.62521 20.1424 3.99812L9.90282 13.1612L9.52755 18.7549C10.1173 18.7549 10.3317 18.5418 10.6534 18.2221L13.2803 15.665L18.8021 19.7138C19.8207 20.2998 20.5713 19.9802 20.8393 18.8081L24.4312 1.81391Z" fill="white" data-v-623df160></path></svg> Join Our Telegram </div></div>',1),vt=[lt];function ut(e,t,a,c,o,s){return Object(n["v"])(),Object(n["d"])("div",dt,vt)}var pt={setup(){return{}}};a("db85");const ft=m()(pt,[["render",ut],["__scopeId","data-v-623df160"]]);var bt=ft,ht={name:"Home",components:{HelloWorld:re,Packages:Le,Numbers:De,ProjectsSlider:rt,Community:bt}};a("c3aa");const gt=m()(ht,[["render",ae],["__scopeId","data-v-a93f8e48"]]);var mt=gt;const Ct=[{path:"/",name:"Home",component:mt},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],jt=Object(E["a"])({history:Object(E["b"])("/"),routes:Ct});var Ot=jt,wt=a("5502"),_t=Object(wt["a"])({state(){return{numberAnimation:!1}},mutations:{startNumberAnimation(e){e.numberAnimation=!0}},actions:{},modules:{}});a("b383");Object(n["c"])(J).use(_t).use(Ot).mount("#app")},"57c1":function(e,t,a){"use strict";a("fc05")},"5dc1":function(e,t,a){},"658c":function(e,t,a){},"807b":function(e,t,a){e.exports=a.p+"img/project.e91bdf30.png"},"88f6":function(e,t,a){e.exports=a.p+"img/eth.27afb84f.png"},"9d64":function(e,t,a){e.exports=a.p+"img/logo.35700c35.png"},"9f58":function(e,t,a){e.exports=a.p+"img/Ellipse4.8586379d.png"},b383:function(e,t,a){},be83:function(e,t,a){},c3aa:function(e,t,a){"use strict";a("658c")},c7ad:function(e,t,a){"use strict";a("256c")},cec7:function(e,t,a){e.exports=a.p+"img/numbers.4f6fbb99.png"},d066:function(e,t,a){},d423:function(e,t,a){"use strict";a("d066")},d4c2:function(e,t,a){"use strict";a("212c")},db85:function(e,t,a){"use strict";a("be83")},ded2:function(e,t,a){e.exports=a.p+"img/card.abebd788.png"},df42:function(e,t,a){e.exports=a.p+"img/handshake.7ae4fe79.png"},e1e1:function(e,t,a){"use strict";a("18eb")},ef1e:function(e,t,a){e.exports=a.p+"img/Ellipse3.42a8c7ab.png"},f055:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgB7ZmxS8NAFMa/XBMHAzWDLiJVwcXNgmPBwbGDOOrm6Kb/iZujW10c7NDRQekoVHAW24I4KNgKKSVpc96zm1sfnLyE+0GHLnn8uPe+e009GKLrzsY08K88YIe+Imdo4DZNJ+fjo2rXI5ks8DvIocgfBkk6qarMVxfIvwwRBabLFDx1gIJAI6NQLKKiCcEJSccJSccJSccJSccJSadwQj6YHK9HqCwuwAb9UYJGbwAOLKH6ahmXu2uwSX+Uov0RY15YLUeFqKAthmmGfsx7vle+edZgsBSUzMfOCJLQMJ2CA3uGqCC3qE1cbEuH3XK15RCV0FJsxwnan/MnHMESIpnW3iZsUn94/b/YpvdFUmHHdm0ltLopcE6HYM/QrCCvqE1cbEuH3XK09tD6Y4PZFpKBA0uoEgZo729ZE6J7qHb3wlqtWC1H6WZL5vf55sKmu44D64Qo4U4f34xYABvQT5PW+zc4sGeo0fuCRFxsS8cJSccJSccJSccJSccJSUeZNzi8/y2EorTGE4qC1k1VKvknhTgl45D4wZkaHG53lfKrRq+JPGJEPK3vE+MwNi4/QWiGuRSA9BIAAAAASUVORK5CYII="},fc05:function(e,t,a){}});
//# sourceMappingURL=app.855f5830.js.map