import{_ as y,o as u,c as d,F as h,p as I,e as R,a as t,b as _,z as g,q as j,B as E,t as D,C as N,D as q,E as F,P as O,G as b,r as W,H as A,L as U,I as z,g as G,R as J,J as Q,K as w,M as H,N as X,O as Y,Q as Z,S as P,T as ee,U as te,V as ne,W as oe,u as x,w as k}from"./CdnnNMmy.js";import{_ as se}from"./DLE7JDWx.js";const ae={},K=e=>(I("data-v-e4540ee9"),e=e(),R(),e),ie=K(()=>t("p",{class:"title"},"Nikas-Trans",-1)),ce=K(()=>t("p",null,"Логистическая компания",-1));function le(e,a){return u(),d(h,null,[ie,ce],64)}const $=y(ae,[["render",le],["__scopeId","data-v-e4540ee9"]]),re="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2020%2020'%3e%3cpath%20fill='white'%20d='M16.4%209H3.6c-.552%200-.6.447-.6%201c0%20.553.048%201%20.6%201h12.8c.552%200%20.6-.447.6-1c0-.553-.048-1-.6-1m0%204H3.6c-.552%200-.6.447-.6%201c0%20.553.048%201%20.6%201h12.8c.552%200%20.6-.447.6-1c0-.553-.048-1-.6-1M3.6%207h12.8c.552%200%20.6-.447.6-1c0-.553-.048-1-.6-1H3.6c-.552%200-.6.447-.6%201c0%20.553.048%201%20.6%201'/%3e%3c/svg%3e",ue={data(){return{isMobileMenuOpen:!1,menuLinks:[{text:"О нас",url:"#about"},{text:"Услуги",url:"#uslugi"},{text:"Оставить заявку",url:"#request"}],phoneNumbers:["+373 604 66 333","+359 893 51 73 21"],socialLinks:[{url:"https://www.instagram.com/nikas.trans/",icon:"/ico/Instagram.png",alt:"Instagram ico"},{url:"https://wa.me/37360466333?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%86%D0%B5%D0%BD%D1%83%20",icon:"/ico/WhatsApp.png",alt:"WhatsApp ico"},{url:"https://msng.link/o?37360466333=vi",icon:"/ico/Viber.png",alt:"Viber ico"},{url:"https://t.me/Alexandr210517",icon:"/ico/Telegram.png",alt:"Telegram ico"}]}},methods:{toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},closeMobileMenu(){this.isMobileMenuOpen=!1},scrollToSection(e,a){e.preventDefault();const o=document.querySelector(a);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"}),this.closeMobileMenu()}}},L=e=>(I("data-v-54f7edcc"),e=e(),R(),e),de={class:"container"},_e={class:"content"},he={class:"logo"},fe={class:"nav"},me=["onClick"],pe={class:"phone-numbers"},ge=["href"],ve=L(()=>t("br",null,null,-1)),De=L(()=>t("img",{src:re,alt:"Меню"},null,-1)),ke=[De],be={class:"social-links"},ye=["href"],xe=["src","alt"],Be=["onClick"],Me={class:"social-links"},we=["href"],Ie=["src","alt"],Re={class:"phone-numbers"},Le=["href"],Se=L(()=>t("br",null,null,-1));function Te(e,a,o,s,i,r){const f=$;return u(),d("div",de,[t("div",_e,[t("div",he,[_(f)]),t("nav",fe,[t("ul",null,[(u(!0),d(h,null,g(i.menuLinks,(n,c)=>(u(),d("li",{key:c},[t("a",{href:"",onClick:m=>r.scrollToSection(m,n.url)},D(n.text),9,me)]))),128))])]),t("div",pe,[(u(!0),d(h,null,g(i.phoneNumbers,(n,c)=>(u(),d("div",{key:c},[t("a",{href:"tel:"+n},D(n),9,ge),ve]))),128))]),t("div",{class:"menu-toggle",onClick:a[0]||(a[0]=(...n)=>r.toggleMobileMenu&&r.toggleMobileMenu(...n))},ke),t("div",be,[(u(!0),d(h,null,g(i.socialLinks,(n,c)=>(u(),d("a",{key:c,href:n.url,target:"_blank"},[t("img",{src:n.icon,alt:n.alt},null,8,xe)],8,ye))),128))])]),t("div",{class:j(["mobile-menu",{open:i.isMobileMenuOpen}]),onClick:a[1]||(a[1]=E((...n)=>r.closeMobileMenu&&r.closeMobileMenu(...n),["self"]))},[t("nav",null,[t("ul",null,[(u(!0),d(h,null,g(i.menuLinks,(n,c)=>(u(),d("li",{key:c},[t("a",{href:"",onClick:m=>r.scrollToSection(m,n.url)},D(n.text),9,Be)]))),128)),t("li",Me,[(u(!0),d(h,null,g(i.socialLinks,(n,c)=>(u(),d("a",{key:c,href:n.url,target:"_blank"},[t("img",{src:n.icon,alt:n.alt},null,8,Ie)],8,we))),128))])]),t("div",Re,[(u(!0),d(h,null,g(i.phoneNumbers,(n,c)=>(u(),d("div",{key:c},[t("a",{href:"tel:"+n},D(n),9,Le),Se]))),128))])])],2)])}const Ce=y(ue,[["render",Te],["__scopeId","data-v-54f7edcc"]]),Ae=N({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const a=e.renderKey,o=e.route,s={};for(const i in e.route)Object.defineProperty(s,i,{get:()=>a===e.renderKey?e.route[i]:o[i]});return q(O,F(s)),()=>b(e.vnode,{ref:e.vnodeRef})}}),He=N({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:o}){const s=Q(),i=W(),r=A(O,null);let f;o({pageRef:i});const n=A(U,null);let c;const m=s.deferHydration();if(s.isHydrating){const l=s.hooks.hookOnce("app:error",m);z().beforeEach(l)}return e.pageKey&&G(()=>e.pageKey,(l,B)=>{l!==B&&s.callHook("page:loading:start")}),()=>b(J,{name:e.name,route:e.route,...a},{default:l=>{const B=Oe(r,l.route,l.Component),S=r&&r.matched.length===l.route.matched.length;if(!l.Component){if(c&&!S)return c;m();return}if(c&&n&&!n.isCurrent(l.route))return c;if(B&&r&&(!n||n!=null&&n.isCurrent(r)))return S?c:null;const v=w(l,e.pageKey);!s.isHydrating&&!Ke(r,l.route,l.Component)&&f===v&&s.callHook("page:loading:end"),f=v;const M=!!(e.transition??l.route.meta.pageTransition??H),V=M&&Ne([e.transition,l.route.meta.pageTransition,H,{onAfterLeave:()=>{s.callHook("page:transition:finish",l.Component)}}].filter(Boolean)),T=e.keepalive??l.route.meta.keepalive??X;return c=Y(te,M&&V,Z(T,b(P,{suspensible:!0,onPending:()=>s.callHook("page:start",l.Component),onResolve:()=>{ee(()=>s.callHook("page:finish",l.Component).then(()=>s.callHook("page:loading:end")).finally(m))}},{default:()=>{const C=b(Ae,{key:v||void 0,vnode:l.Component,route:l.route,renderKey:v||void 0,trackRootNodes:M,vnodeRef:i});return T&&(C.type.name=l.Component.type.name||l.Component.type.__name||"RouteProvider"),C}}))).default(),c}})}});function Ne(e){const a=e.map(o=>({...o,onAfterLeave:o.onAfterLeave?ne(o.onAfterLeave):void 0}));return oe(...a)}function Oe(e,a,o){if(!e)return!1;const s=a.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(o==null?void 0:o.type)});return!s||s===-1?!1:a.matched.slice(0,s).some((i,r)=>{var f,n,c;return((f=i.components)==null?void 0:f.default)!==((c=(n=e.matched[r])==null?void 0:n.components)==null?void 0:c.default)})||o&&w({route:a,Component:o})!==w({route:e,Component:o})}function Ke(e,a,o){return e?a.matched.findIndex(i=>{var r;return((r=i.components)==null?void 0:r.default)===(o==null?void 0:o.type)})<a.matched.length-1:!1}const $e=x("/ico/Instagram.png"),Ve=x("/ico/WhatsApp.png"),je=x("/ico/Viber.png"),Ee=x("/ico/Telegram.png"),qe={},p=e=>(I("data-v-ad5462fc"),e=e(),R(),e),Fe={class:"container"},We={class:"contant"},Ue=p(()=>t("div",null,[t("a",null,"Политика конфиденциальности"),t("br"),t("a",null,"Публичная оферта")],-1)),ze=p(()=>t("div",{class:"phone"},[t("a",{href:"tel:37360466333",class:"phone-number"},"+373 604 66 333"),t("br"),t("a",{href:"tel:359893517321",class:"phone-number"},"+359 893 51 73 21")],-1)),Ge=p(()=>t("a",{href:"mailto:nikastrans22@mail.ru"},"nikastrans22@mail.ru",-1)),Je={class:"social"},Qe=p(()=>t("img",{src:$e,alt:"Instagram ico"},null,-1)),Xe=p(()=>t("img",{src:Ve,alt:"WhatsApp ico"},null,-1)),Ye=p(()=>t("img",{src:je,alt:"Viber ico"},null,-1)),Ze=p(()=>t("img",{src:Ee,alt:"Telegram ico"},null,-1));function Pe(e,a){const o=$,s=se;return u(),d("div",Fe,[t("div",We,[t("div",null,[_(o)]),Ue,ze,t("div",null,[Ge,t("div",Je,[_(s,{href:"https://www.instagram.com/nikas.trans/",target:"_blank"},{default:k(()=>[Qe]),_:1}),_(s,{href:"https://wa.me/37360466333?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%86%D0%B5%D0%BD%D1%83%20",target:"_blank"},{default:k(()=>[Xe]),_:1}),_(s,{href:"https://msng.link/o?37360466333=vi",target:"_blank"},{default:k(()=>[Ye]),_:1}),_(s,{href:"https://t.me/Alexandr210517",target:"_blank"},{default:k(()=>[Ze]),_:1})])])])])}const et=y(qe,[["render",Pe],["__scopeId","data-v-ad5462fc"]]),tt={};function nt(e,a){const o=Ce,s=He,i=et;return u(),d(h,null,[_(o),_(s),_(i)],64)}const at=y(tt,[["render",nt]]);export{at as default};