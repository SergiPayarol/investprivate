(()=>{"use strict";var e={3392:(e,a,i)=>{var o=i(9104),t=i(9248),r=i(8734),s=i(1758);const n=Object.assign({name:"App"},{__name:"App",setup(e){return(e,a)=>{const i=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(i)}}}),c=n,l=c;var d=i(1573),u=i(1555);const p=(0,d.M_)((()=>{const e=(0,u.Ey)();return e}));var m=i(455);const v=[{path:"/",component:()=>Promise.all([i.e(121),i.e(663)]).then(i.bind(i,1663)),children:[{path:"",component:()=>Promise.all([i.e(121),i.e(287)]).then(i.bind(i,5287))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([i.e(121),i.e(487)]).then(i.bind(i,7487))}],b=v,f=(0,d.wE)((function(){const e=m.LA,a=(0,m.aE)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("/")});return a}));async function E(e,a){const i=e(l);i.use(t.A,a);const o="function"===typeof p?await p({}):p;i.use(o);const s=(0,r.IG)("function"===typeof f?await f({store:o}):f);return o.use((({store:e})=>{e.router=s})),{app:i,store:o,router:s}}const g={config:{}},I="/";async function h({app:e,router:a,store:i},o){let t=!1;const r=e=>{try{return a.resolve(e).href}catch(e){}return Object(e)===e?null:e},s=e=>{if(t=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const a=r(e);null!==a&&(window.location.href=a)},n=window.location.href.replace(window.location.origin,"");for(let r=0;!1===t&&r<o.length;r++)try{await o[r]({app:e,router:a,store:i,ssrContext:null,redirect:s,urlPath:n,publicPath:I})}catch(e){return e&&e.url?void s(e.url):void console.error("[Quasar] boot error:",e)}!0!==t&&(e.use(a),e.mount("#q-app"))}E(o.Ef,g).then((e=>{const[a,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[a]([Promise.resolve().then(i.bind(i,514))]).then((a=>{const i=o(a).filter((e=>"function"===typeof e));h(e,i)}))}))},514:(e,a,i)=>{i.r(a),i.d(a,{default:()=>c});var o=i(1573),t=i(2577);const r={header:{nosotros:"Nosotros",servicios:"Servicios",como_trab:"Cómo trabajamos",prueba:"La prueba",contacto:"Contacto"},content:{nosotros:"Nosotros",servicios:"Servicios",como_trab:"Cómo trabajamos",prueba:"La prueba",contacto:"Contacto"},content_text:{keywords:"Discreción · Compromiso · Seriedad · Experiencia",nosotros_p1:"Ubicados en Barcelona, Investprivate trabajamos con total dedicación en cada caso. Ofrecemos servicios por todo el territorio nacional con experiencia y rigor en las diferentes áreas donde el Detective Privado puede actuar.",nosotros_p2:"Nuestro objetivo es aportar soluciones y acompañar durante todo el proceso de investigación. No dude en contactar, estaremos encantados de escucharle y asesorarle.",servicios_p:"Son múltiples ámbitos donde el Detective Privado actúa, cada materia, cada caso, requiere de un previo y riguroso estudio, es por este motivo, que se encuentre en la situación que se encuentre, póngase en contacto con nosotros. Los servicios que ofrecemos son los siguientes.",servicios_li1:"Investigación de ámbito personal y familiar",servicios_li2:"Investigaciones de ámbito laboral",servicios_li3:"Investigaciones de ámbito patrimonial, económico y financiero",servicios_li4:"Investigaciones de ámbito asegurador y mutual",servicios_li5:"Investigaciones en materia de arrendamiento de inmuebles",servicios_li6:"Investigaciones de ámbito empresarial e inteligencia empresarial",servicios_li7:"Localización de personas",servicios_li8:"Investigaciones de carácter técnico digital",como_trab_p1:"El cliente contacta con nosotros, concertamos una reunión, nos plantea el caso y realizamos un estudio, una planificación para llevar a cabo la investigación y un presupuesto (este primer proceso no tiene ningún coste).",como_trab_p2:"Una vez aceptado el caso, empezamos a trabajar con toda la información que hemos reunido. Investprivate siempre estará en constante comunicación con el cliente para informarle de la evolución del proceso. En caso que no quiera ser informado hasta el final de la investigación, respetaremos la decisión y el acuerdo que el cliente haya tomado.",como_trab_p3:"Cuando la investigación ha finalizado, se presenta al cliente un informe escrito con todas las pruebas que corroboran y afirman lo que se adjunta en dicho informe. En este punto nos reunimos para asesorarle, acompañarle y si es necesario, realizar de nuevo una investigación complementaria.",como_trab_p4:"El informe del Detective Privado puede ser ratificado ante un Juicio, en Investprivate nos personamos, si el cliente lo desea, para ratificar el contenido del informe en un Juicio.",prueba_p1:"El Art. 265, 1.5º de la Ley 1/2000, de 7 de Enero de Enjuiciamiento Civil establece que los informes elaborados por el Detective Privado serán apreciados como prueba testifical. El Art. 299 de la LEC, indica que se admitirán como prueba los medios de reproducción de la palabra, el sonido y la imagen. En este sentido, el Detective Privado legalmente habilitado, es considerado por jueces y magistrados un testimonio privilegiado.",prueba_p2:"Las pruebas testificales, documentales y gráficas constituyen elementos fundamentales de exhibición en los Juzgados de lo Social, Civil y Penal. Es por este motivo que la calidad de la prueba que aportamos, es de suma importancia para el éxito del caso.",contacto:"Contacto"},cookies_popup:{titulo:"Política de privacidad",content_p:"Este sitio web no guarda ningún tipo de información personal ni utiliza cookies. Navega tranquilo.",entendido:"Entendido"},footer:{footer:"© 2024 Investprivate - Todos los derechos reservados - RNSP: 11.698",avis_legal_boto:"Aviso legal",avis_legal:"AVISO LEGAL",ley:"LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)",ley_text:"INVESTPRIVATEDETECTIVES, como titular del presente sitio web, pone a disposición de los usuarios este documento con el objetivo de cumplir con las obligaciones establecidas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), publicada en el BOE Nº 166. Asimismo, se informa a todos los usuarios sobre las condiciones de uso de esta página web. El acceso y navegación por este sitio web implica la aceptación plena y sin reservas de las disposiciones incluidas en este aviso legal, así como de cualquier otra normativa aplicable. INVESTPRIVATEDETECTIVES se reserva el derecho de modificar, actualizar o eliminar cualquier contenido del sitio web sin necesidad de previo aviso, considerándose suficiente su publicación en el propio portal.",derechos:"DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL",derechos_text:"Todos los elementos que conforman este sitio web, incluyendo su diseño, programación, edición, compilación, textos, gráficos y logotipos, son propiedad de INVESTPRIVATEDETECTIVES. Dichos contenidos están protegidos por la legislación vigente en materia de propiedad intelectual e industrial. Cualquier reproducción, distribución, comercialización o transformación total o parcial de los contenidos de este sitio web sin la autorización previa y expresa de INVESTPRIVATEDETECTIVES está estrictamente prohibida y podrá dar lugar a acciones legales. INVESTPRIVATEDETECTIVES autoriza a terceros a enlazar directamente a contenidos específicos del sitio web, así como a la página principal www.investprivatedetectives.com.",cookies:"Cookies",cookies_text:"Este sitio web no hace uso de cookies.",exencion:"EXENCIÓN DE RESPONSABILIDAD",exencion_text:"INVESTPRIVATEDETECTIVES no se hace responsable de la información publicada en este sitio web si ha sido alterada o introducida por terceros ajenos a la entidad.",ley_ap:"LEY APLICABLE Y JURISDICCIÓN",ley_ap_text:"Para la resolución de cualquier controversia relacionada con este sitio web o con las actividades desarrolladas en él, será de aplicación la legislación española. Ambas partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales más cercanos a Barcelona para la resolución de cualquier conflicto derivado del uso de esta página web."}},s={header:{nosotros:"Nosaltres",servicios:"Serveis",como_trab:"Com treballem",prueba:"La prova",contacto:"Contacte"},content:{nosotros:"Nosaltres",servicios:"Serveis",como_trab:"Com treballem",prueba:"La prova",contacto:"Contacte"},content_text:{keywords:"Discreció · Compromís · Serietat · Experiència",nosotros_p1:"Ubicats a Barcelona, Investprivate treballem amb total dedicació a cada cas. Oferim serveis per tot el territori nacional amb experiència i rigor a les diferents àrees on el Detectiu Privat pot actuar.",nosotros_p2:"El nostre objectiu és aportar solucions i acompanyar durant tot el procés d’investigació. No dubti en contactar, estarem encantats d'escoltar-lo i assessorar-lo.",servicios_p:"Són múltiples àmbits on el Detectiu Privat actua, cada matèria, cada cas, requereix d'un previ i rigorós estudi, és per aquest motiu, que es trobi en la situació que es trobi, posi's en contacte amb nosaltres. Els serveis que oferim són els següents.",servicios_li1:"Investigació d'àmbit personal i familiar",servicios_li2:"Investigació d'àmbit laboral",servicios_li3:"Investigacions d'àmbit patrimonial, econòmic i financer",servicios_li4:"Investigacions d'àmbit assegurador i mutual",servicios_li5:"Investigacions en matèria d'arrendament d'immobles",servicios_li6:"Investigacions d'àmbit empresarial i intel·ligència empresarial",servicios_li7:"Localització de persones",servicios_li8:"Investigacions de caràcter tècnic digital",como_trab_p1:"El client contacta amb nosaltres, concertem una reunió, ens planteja el cas i realitzem un estudi, una planificació per a dur a terme l’investigació i un pressupost (aquest primer procés no té cap cost).",como_trab_p2:"Una vegada acceptat el cas, comencem a treballar amb tota la informació que hem reunit. Investprivate sempre estarà en constant comunicació amb el client per a informar-lo de l'evolució del procés. En cas que no vulgui ser informat fins al final de l’investigació, respectarem la decisió i l'acord que el client hagi pres.",como_trab_p3:"Quan la recerca ha finalitzat, es presenta al client un informe escrit amb totes les proves que corroboren i afirmen el que s'adjunta en aquest informe. En aquest punt ens reunim per a assessorar-lo, acompanyar-li i si és necessari, realitzar de nou una recerca complementària.",como_trab_p4:"L'informe del Detectiu Privat pot ser ratificat davant un Judici, Investprivate ens personem, si el client ho desitja, per a ratificar el contingut de l'informe en un Judici.",prueba_p1:"L'Art. 265, 1.5° de la Llei 1/2000, de 7 de Gener d'Enjudiciament Civil estableix que els informes elaborats pel Detectiu Privat seran admesos com a prova testifical. L'Art. 299 de la LEC, indica que s'admetran com a prova els mitjans de reproducció de la paraula, el so i la imatge. En aquest sentit, el Detectiu Privat legalment habilitat, és considerat per jutges i magistrats un testimoni privilegiat.",prueba_p2:"Les proves testificals, documentals i gràfiques constitueixen elements fonamentals d'exhibició en els Jutjats socials, Civil i Penal. És per aquest motiu que la qualitat de la prova que aportem, és de summa importància per a l'èxit del cas.",contacto:"Contacte"},cookies_popup:{titulo:"Política de privacitat",content_p:"Aquesta web no guarda cap tipus d'informació personal ni utilitza cookies. Navega tranquil.",entendido:"Entés"},footer:{footer:"© 2024 Investprivate - Tots els drets reservats - RNSP: 11.698",avis_legal_boto:"Avís legal",avis_legal:"AVÍS LEGAL",ley:"LLEI DELS SERVEIS DE LA SOCIETAT DE LA INFORMACIÓ (LSSI)",ley_text:"INVESTPRIVATEDETECTIVES, com a titular del present lloc web, posa a disposició dels usuaris aquest document amb l'objectiu de complir amb les obligacions establertes a la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSICE), publicada al BOE Nº 166. Així mateix, s'informa tots els usuaris sobre les condicions d'ús d'aquesta pàgina web. L'accés i navegació per aquest lloc web implica l'acceptació plena i sense reserves de les disposicions incloses en aquest avís legal, així com de qualsevol altra normativa aplicable. INVESTPRIVATEDETECTIVES es reserva el dret de modificar, actualitzar o eliminar qualsevol contingut del lloc web sense necessitat d'avís previ, considerant-se suficient la seva publicació en el mateix portal.",derechos:"DRETS DE PROPIETAT INTEL·LECTUAL I INDUSTRIAL",derechos_text:"Tots els elements que conformen aquest lloc web, incloent-hi el seu disseny, programació, edició, compilació, textos, gràfics i logotips, són propietat d'INVESTPRIVATEDETECTIVES. Aquests continguts estan protegits per la legislació vigent en matèria de propietat intel·lectual i industrial. Qualsevol reproducció, distribució, comercialització o transformació total o parcial dels continguts d'aquest lloc web sense l'autorització prèvia i expressa d'INVESTPRIVATEDETECTIVES està estrictament prohibida i pot donar lloc a accions legals. INVESTPRIVATEDETECTIVES autoritza tercers a enllaçar directament a continguts específics del lloc web, així com a la pàgina principal www.investprivatedetectives.com.",cookies:"Cookies",cookies_text:"Aquest lloc web no fa ús de cookies.",exencion:"EXEMPCIÓ DE RESPONSABILITAT",exencion_text:"INVESTPRIVATEDETECTIVES no es fa responsable de la informació publicada en aquest lloc web si ha estat alterada o introduïda per tercers aliens a l'entitat.",ley_ap:"LLEI APLICABLE I JURISDICCIÓ",ley_ap_text:"Per a la resolució de qualsevol controvèrsia relacionada amb aquest lloc web o amb les activitats desenvolupades en ell, serà d'aplicació la legislació espanyola. Ambdues parts se sotmeten expressament a la jurisdicció dels Jutjats i Tribunals més propers a Barcelona per a la resolució de qualsevol conflicte derivat de l'ús d'aquesta pàgina web."}},n={"es-ES":r,"ca-CA":s},c=(0,o.zj)((({app:e})=>{const a=(0,t.hU)({locale:"es-ES",globalInjection:!0,messages:n});e.use(a)}))}},a={};function i(o){var t=a[o];if(void 0!==t)return t.exports;var r=a[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}i.m=e,(()=>{var e=[];i.O=(a,o,t,r)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,t,r]=e[d],n=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((e=>i.O[e](o[c])))?o.splice(c--,1):(n=!1,r<s&&(s=r));if(n){e.splice(d--,1);var l=t();void 0!==l&&(a=l)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,t,r]}})(),(()=>{i.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(a,{a}),a}})(),(()=>{i.d=(e,a)=>{for(var o in a)i.o(a,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}})(),(()=>{i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((a,o)=>(i.f[o](e,a),a)),[]))})(),(()=>{i.u=e=>"js/"+e+"."+{287:"55ed108b",487:"e3bf42f9",663:"2c65036d"}[e]+".js"})(),(()=>{i.miniCssF=e=>"css/"+e+".5a4b097b.css"})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{var e={},a="frontend-detective:";i.l=(o,t,r,s)=>{if(e[o])e[o].push(t);else{var n,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==a+r){n=u;break}}n||(c=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",a+r),n.src=o),e[o]=[t];var p=(a,i)=>{n.onerror=n.onload=null,clearTimeout(m);var t=e[o];if(delete e[o],n.parentNode&&n.parentNode.removeChild(n),t&&t.forEach((e=>e(i))),a)return a(i)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),c&&document.head.appendChild(n)}}})(),(()=>{i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{i.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,a,o,t,r)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",i.nc&&(s.nonce=i.nc);var n=i=>{if(s.onerror=s.onload=null,"load"===i.type)t();else{var o=i&&i.type,n=i&&i.target&&i.target.href||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+n+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=n,s.parentNode&&s.parentNode.removeChild(s),r(c)}};return s.onerror=s.onload=n,s.href=a,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},a=(e,a)=>{for(var i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var t=i[o],r=t.getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(r===e||r===a))return t}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){t=s[o],r=t.getAttribute("data-href");if(r===e||r===a)return t}},o=o=>new Promise(((t,r)=>{var s=i.miniCssF(o),n=i.p+s;if(a(s,n))return t();e(o,n,null,t,r)})),t={524:0};i.f.miniCss=(e,a)=>{var i={663:1};t[e]?a.push(t[e]):0!==t[e]&&i[e]&&a.push(t[e]=o(e).then((()=>{t[e]=0}),(a=>{throw delete t[e],a})))}}})(),(()=>{var e={524:0};i.f.j=(a,o)=>{var t=i.o(e,a)?e[a]:void 0;if(0!==t)if(t)o.push(t[2]);else{var r=new Promise(((i,o)=>t=e[a]=[i,o]));o.push(t[2]=r);var s=i.p+i.u(a),n=new Error,c=o=>{if(i.o(e,a)&&(t=e[a],0!==t&&(e[a]=void 0),t)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;n.message="Loading chunk "+a+" failed.\n("+r+": "+s+")",n.name="ChunkLoadError",n.type=r,n.request=s,t[1](n)}};i.l(s,c,"chunk-"+a,a)}},i.O.j=a=>0===e[a];var a=(a,o)=>{var t,r,[s,n,c]=o,l=0;if(s.some((a=>0!==e[a]))){for(t in n)i.o(n,t)&&(i.m[t]=n[t]);if(c)var d=c(i)}for(a&&a(o);l<s.length;l++)r=s[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},o=globalThis["webpackChunkfrontend_detective"]=globalThis["webpackChunkfrontend_detective"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))})();var o=i.O(void 0,[121],(()=>i(3392)));o=i.O(o)})();