(()=>{"use strict";var e={3392:(e,a,t)=>{var o=t(9104),i=t(9248),r=t(8734),n=t(1758);const s=Object.assign({name:"App"},{__name:"App",setup(e){return(e,a)=>{const t=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(t)}}}),c=s,l=c;var u=t(1573),d=t(1555);const p=(0,u.M_)((()=>{const e=(0,d.Ey)();return e}));var m=t(455);const v=[{path:"/",component:()=>Promise.all([t.e(121),t.e(153)]).then(t.bind(t,8153)),children:[{path:"",component:()=>Promise.all([t.e(121),t.e(287)]).then(t.bind(t,5287))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(121),t.e(487)]).then(t.bind(t,7487))}],f=v,b=(0,u.wE)((function(){const e=m.Bt,a=(0,m.aE)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/")});return a}));async function g(e,a){const t=e(l);t.use(i.A,a);const o="function"===typeof p?await p({}):p;t.use(o);const n=(0,r.IG)("function"===typeof b?await b({store:o}):b);return o.use((({store:e})=>{e.router=n})),{app:t,store:o,router:n}}const h={config:{}},_="/";async function y({app:e,router:a,store:t},o){let i=!1;const r=e=>{try{return a.resolve(e).href}catch(e){}return Object(e)===e?null:e},n=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const a=r(e);null!==a&&(window.location.href=a,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let r=0;!1===i&&r<o.length;r++)try{await o[r]({app:e,router:a,store:t,ssrContext:null,redirect:n,urlPath:s,publicPath:_})}catch(e){return e&&e.url?void n(e.url):void console.error("[Quasar] boot error:",e)}!0!==i&&(e.use(a),e.mount("#q-app"))}g(o.Ef,h).then((e=>{const[a,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[a]([Promise.resolve().then(t.bind(t,514))]).then((a=>{const t=o(a).filter((e=>"function"===typeof e));y(e,t)}))}))},514:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var o=t(1573),i=t(2577);const r={header:{nosotros:"Nosotros",servicios:"Servicios",como_trab:"Cómo trabajamos",prueba:"La prueba",contacto:"Contacto"},content:{nosotros:"Nosotros",servicios:"Servicios",como_trab:"Cómo trabajamos",prueba:"La prueba",contacto:"Contacto"},content_text:{keywords:"Discreción · Compromiso · Seriedad · Experiencia",nosotros_p1:"Ubicados en Barcelona, Investprivate trabajamos con total dedicación en cada caso. Ofrecemos servicios por todo el territorio nacional con experiencia y rigor en las diferentes áreas donde el Detective Privado puede actuar.",nosotros_p2:"Nuestro objetivo es aportar soluciones y acompañar durante todo el proceso de investigación. No dude en contactar, estaremos encantados de escucharle y asesorarle.",servicios_p:"Son múltiples ámbitos donde el Detective Privado actúa, cada materia, cada caso, requiere de un previo y riguroso estudio, es por este motivo, que se encuentre en la situación que se encuentre, póngase en contacto con nosotros. Los servicios que ofrecemos son los siguientes.",servicios_li1:"Investigación de ámbito personal y familiar",servicios_li2:"Investigaciones de ámbito laboral",servicios_li3:"Investigaciones de ámbito patrimonial, económico y financiero",servicios_li4:"Investigaciones de ámbito asegurador y mutual",servicios_li5:"Investigaciones en materia de arrendamiento de inmuebles",servicios_li6:"Investigaciones de ámbito empresarial e inteligencia empresarial",servicios_li7:"Localización de personas",servicios_li8:"Investigaciones de carácter técnico digital",como_trab_p1:"El cliente contacta con nosotros, concertamos una reunión, nos plantea el caso y realizamos un estudio, una planificación para llevar a cabo la investigación y un presupuesto (este primer proceso no tiene ningún coste).",como_trab_p2:"Una vez aceptado el caso, empezamos a trabajar con toda la información que hemos reunido. Investprivate siempre estará en constante comunicación con el cliente para informarle de la evolución del proceso. En caso que no quiera ser informado hasta el final de la investigación, respetaremos la decisión y el acuerdo que el cliente haya tomado.",como_trab_p3:"Cuando la investigación ha finalizado, se presenta al cliente un informe escrito con todas las pruebas que corroboran y afirman lo que se adjunta en dicho informe. En este punto nos reunimos para asesorarle, acompañarle y si es necesario, realizar de nuevo una investigación complementaria.",como_trab_p4:"El informe del Detective Privado puede ser ratificado ante un Juicio, en Investprivate nos personamos, si el cliente lo desea, para ratificar el contenido del informe en un Juicio.",prueba_p1:"El Art. 265, 1.5º de la Ley 1/2000, de 7 de Enero de Enjuiciamiento Civil establece que los informes elaborados por el Detective Privado serán apreciados como prueba testifical. El Art. 299 de la LEC, indica que se admitirán como prueba los medios de reproducción de la palabra, el sonido y la imagen. En este sentido, el Detective Privado legalmente habilitado, es considerado por jueces y magistrados un testimonio privilegiado.",prueba_p2:"Las pruebas testificales, documentales y gráficas constituyen elementos fundamentales de exhibición en los Juzgados de lo Social, Civil y Penal. Es por este motivo que la calidad de la prueba que aportamos, es de suma importancia para el éxito del caso.",contacto:"Contacto"},cookies_popup:{titulo:"Política de privacidad",content_p:"Este sitio web no guarda ningún tipo de información personal ni utiliza cookies. Navega tranquilo.",entendido:"Entendido"},footer:{footer:"© 2024 Investprivate - Todos los derechos reservados - RNSP: 11.698"}},n={header:{nosotros:"Nosaltres",servicios:"Serveis",como_trab:"Com treballem",prueba:"La prova",contacto:"Contacte"},content:{nosotros:"Nosaltres",servicios:"Serveis",como_trab:"Com treballem",prueba:"La prova",contacto:"Contacte"},content_text:{keywords:"Discreció · Compromís · Serietat · Experiència",nosotros_p1:"Ubicats a Barcelona, Investprivate treballem amb total dedicació a cada cas. Oferim serveis per tot el territori nacional amb experiència i rigor a les diferents àrees on el Detectiu Privat pot actuar.",nosotros_p2:"El nostre objectiu és aportar solucions i acompanyar durant tot el procés d’investigació. No dubti en contactar, estarem encantats d'escoltar-lo i assessorar-lo.",servicios_p:"Són múltiples àmbits on el Detectiu Privat actua, cada matèria, cada cas, requereix d'un previ i rigorós estudi, és per aquest motiu, que es trobi en la situació que es trobi, posi's en contacte amb nosaltres. Els serveis que oferim són els següents.",servicios_li1:"Investigació d'àmbit personal i familiar",servicios_li2:"Investigació d'àmbit laboral",servicios_li3:"Investigacions d'àmbit patrimonial, econòmic i financer",servicios_li4:"Investigacions d'àmbit assegurador i mutual",servicios_li5:"Investigacions en matèria d'arrendament d'immobles",servicios_li6:"Investigacions d'àmbit empresarial i intel·ligència empresarial",servicios_li7:"Localització de persones",servicios_li8:"Investigacions de caràcter tècnic digital",como_trab_p1:"El client contacta amb nosaltres, concertem una reunió, ens planteja el cas i realitzem un estudi, una planificació per a dur a terme l’investigació i un pressupost (aquest primer procés no té cap cost).",como_trab_p2:"Una vegada acceptat el cas, comencem a treballar amb tota la informació que hem reunit. Investprivate sempre estarà en constant comunicació amb el client per a informar-lo de l'evolució del procés. En cas que no vulgui ser informat fins al final de l’investigació, respectarem la decisió i l'acord que el client hagi pres.",como_trab_p3:"Quan la recerca ha finalitzat, es presenta al client un informe escrit amb totes les proves que corroboren i afirmen el que s'adjunta en aquest informe. En aquest punt ens reunim per a assessorar-lo, acompanyar-li i si és necessari, realitzar de nou una recerca complementària.",como_trab_p4:"L'informe del Detectiu Privat pot ser ratificat davant un Judici, Investprivate ens personem, si el client ho desitja, per a ratificar el contingut de l'informe en un Judici.",prueba_p1:"L'Art. 265, 1.5° de la Llei 1/2000, de 7 de Gener d'Enjudiciament Civil estableix que els informes elaborats pel Detectiu Privat seran admesos com a prova testifical. L'Art. 299 de la LEC, indica que s'admetran com a prova els mitjans de reproducció de la paraula, el so i la imatge. En aquest sentit, el Detectiu Privat legalment habilitat, és considerat per jutges i magistrats un testimoni privilegiat.",prueba_p2:"Les proves testificals, documentals i gràfiques constitueixen elements fonamentals d'exhibició en els Jutjats socials, Civil i Penal. És per aquest motiu que la qualitat de la prova que aportem, és de summa importància per a l'èxit del cas.",contacto:"Contacte"},cookies_popup:{titulo:"Política de privacitat",content_p:"Aquesta web no guarda cap tipus d'informació personal ni utilitza cookies. Navega tranquil.",entendido:"Entés"},footer:{footer:"© 2024 Investprivate - Tots els drets reservats - RNSP: 11.698"}},s={"es-ES":r,"ca-CA":n},c=(0,o.zj)((({app:e})=>{const a=(0,i.hU)({locale:"es-ES",globalInjection:!0,messages:s});e.use(a)}))}},a={};function t(o){var i=a[o];if(void 0!==i)return i.exports;var r=a[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,(()=>{var e=[];t.O=(a,o,i,r)=>{if(!o){var n=1/0;for(u=0;u<e.length;u++){for(var[o,i,r]=e[u],s=!0,c=0;c<o.length;c++)(!1&r||n>=r)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,r<n&&(n=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(a=l)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}})(),(()=>{t.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(a,{a}),a}})(),(()=>{t.d=(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,o)=>(t.f[o](e,a),a)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{153:"b31ee615",287:"abed6f01",487:"3222703b"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+".499d49da.css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="frontend-detective:";t.l=(o,i,r,n)=>{if(e[o])e[o].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==a+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",a+r),s.src=o),e[o]=[i];var p=(a,t)=>{s.onerror=s.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(t))),a)return a(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,a,o,i,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",t.nc&&(n.nonce=t.nc);var s=t=>{if(n.onerror=n.onload=null,"load"===t.type)i();else{var o=t&&t.type,s=t&&t.target&&t.target.href||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,n.parentNode&&n.parentNode.removeChild(n),r(c)}};return n.onerror=n.onload=s,n.href=a,o?o.parentNode.insertBefore(n,o.nextSibling):document.head.appendChild(n),n},a=(e,a)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===a))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){i=n[o],r=i.getAttribute("data-href");if(r===e||r===a)return i}},o=o=>new Promise(((i,r)=>{var n=t.miniCssF(o),s=t.p+n;if(a(n,s))return i();e(o,s,null,i,r)})),i={524:0};t.f.miniCss=(e,a)=>{var t={153:1};i[e]?a.push(i[e]):0!==i[e]&&t[e]&&a.push(i[e]=o(e).then((()=>{i[e]=0}),(a=>{throw delete i[e],a})))}}})(),(()=>{var e={524:0};t.f.j=(a,o)=>{var i=t.o(e,a)?e[a]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise(((t,o)=>i=e[a]=[t,o]));o.push(i[2]=r);var n=t.p+t.u(a),s=new Error,c=o=>{if(t.o(e,a)&&(i=e[a],0!==i&&(e[a]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+a+" failed.\n("+r+": "+n+")",s.name="ChunkLoadError",s.type=r,s.request=n,i[1](s)}};t.l(n,c,"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,o)=>{var i,r,[n,s,c]=o,l=0;if(n.some((a=>0!==e[a]))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var u=c(t)}for(a&&a(o);l<n.length;l++)r=n[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=globalThis["webpackChunkfrontend_detective"]=globalThis["webpackChunkfrontend_detective"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))})();var o=t.O(void 0,[121],(()=>t(3392)));o=t.O(o)})();