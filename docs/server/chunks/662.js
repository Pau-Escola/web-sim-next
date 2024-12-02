exports.id=662,exports.ids=[662],exports.modules={8114:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a={src:"/_next/static/media/logo.24cbf371.png",height:382,width:653,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVNYUSqqQpLZkydnhynpghUcEMtTGwKQGqrqAYEQGsFPmytqgWjkzTQAAAADHRSTlMCTB80fCcUOq2Nh9qsm1mAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nB3KsREAMAjDQGMDAbL/vjmi6gshug82l7wMQJn5XQQZYiY4858HDL8AjCjgcFsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},3821:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(997),l=s(6689),n=s(8655),r=s.n(n),i=s(1664),c=s.n(i),o=s(5675),d=s.n(o);let h=({product:e,translations:t,locale:s})=>{let[n,i]=(0,l.useState)({from_name:"",reply_to:"",message:"",contact_phone:"",reference:""}),[o,h]=(0,l.useState)(!1),[m,g]=(0,l.useState)(!1),A=e?.images.find(e=>!0===e.isMain);(0,l.useEffect)(()=>{r().init("6iFbLIRqJGiJhlg58")},[]);let x=e=>{i({...n,[e.target.name]:e.target.value})};return n.reference=e?"Interessat en producte amb referencia "+e.reference:"",(0,a.jsxs)("div",{className:"p-4 bg-white rounded-lg shadow-md",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:t["Ask for quote"]}),e&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("p",{className:"mb-4 flex items-center",children:a.jsx("strong",{children:e.title})}),a.jsx(d(),{src:`http://simreus.com/productService${A.imageUrl}`,alt:e.title,width:150,height:150,className:"ml-2"})]}),(0,a.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),!m){alert(t["Accept Policies Alert"]);return}h(!0),r().send("service_we6kskc","template_xoxi5rc",n,"6iFbLIRqJGiJhlg58").then(e=>{console.log(e.text),alert(t["Sent Success"]),h(!1)},e=>{console.log(e.text),alert(t["Sent Failure"]),h(!1)})},className:"max-w-lg mx-auto py-4 px-8 bg-white shadow-md rounded-lg",children:[(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"from_name",className:"block text-gray-700 text-sm font-bold mb-2"}),a.jsx("input",{type:"text",name:"from_name",id:"from_name",value:n.from_name,onChange:x,placeholder:t.Name,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"contact_phone",className:"block text-gray-700 text-sm font-bold mb-2"}),a.jsx("input",{type:"phone",name:"contact_phone",id:"contact_phone",value:n.contact_phone,onChange:x,placeholder:t.Phone,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"reply_to",className:"block text-gray-700 text-sm font-bold mb-2"}),a.jsx("input",{type:"email",name:"reply_to",id:"reply_to",value:n.reply_to,onChange:x,placeholder:t.Email,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("label",{htmlFor:"message",className:"block text-gray-700 text-sm font-bold mb-2"}),a.jsx("textarea",{name:"message",id:"message",value:n.message,onChange:x,rows:"4",placeholder:t.Message,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"checkbox"}),a.jsx("input",{type:"checkbox",checked:m,onChange:e=>{g(e.target.checked)}}),(0,a.jsxs)("span",{className:"text-black",children:[t["I agree"],a.jsx(c(),{href:s+"legal-policies",legacyBehavior:!0,children:a.jsx("a",{className:"text-blue-500",children:t["Data Policies"]})}),"."]})]}),a.jsx("div",{children:a.jsx("button",{type:"submit",disabled:o,className:"bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:o?t.Sending:t.Send})})]})]})}},8002:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(997);s(6689);var l=s(3821);let n=function({onClose:e,translations:t,locale:s}){return a.jsx("div",{className:"fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center",children:(0,a.jsxs)("div",{className:"relative bg-white p-5 rounded-lg shadow-lg max-w-md w-full m-4",children:[a.jsx("button",{onClick:e,className:"absolute top-0 right-0 mt-4 mr-4 text-3xl font-bold text-black",children:"\xd7"}),a.jsx(l.Z,{translations:t,locale:s})]})})}},7222:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var a=s(997),l=s(6689),n=s(8002),r=s(1664),i=s.n(r);let c=function({translations:e,locale:t}){let[s,r]=(0,l.useState)(!1),c=new Date().getFullYear();return a.jsx("div",{className:"bg-gray-200 text-gray-700 p-4",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"font-bold text-lg",children:e.Availability}),a.jsx("p",{children:e["Open Times"]}),a.jsx("p",{children:e["Closed Times"]})]}),(0,a.jsxs)("div",{children:[a.jsx("h2",{className:"font-bold text-lg",children:e["Contact us"]}),a.jsx("p",{children:" (+34) 977 344 711"}),a.jsx("p",{children:" comercial@simreus.com"}),a.jsx("button",{className:"mt-2 right-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:()=>r(!0),children:e["Contact us"]}),s&&a.jsx(n.Z,{onClose:()=>r(!1),translations:e})]}),(0,a.jsxs)("div",{className:"lg:col-span-2",children:[a.jsx("h2",{className:"font-bold text-lg",children:e["Find us"]}),a.jsx("iframe",{title:"companyLocation",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18961.8461048295!2d1.1702911850807836!3d41.140103365181766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a151020133d66d%3A0x5d255a9fbe7e2f7e!2sSIM%20-%20Soluciones%20Integrales%20Modulares%20S.L.U.!5e0!3m2!1ses!2ses!4v1710687621482!5m2!1ses!2ses",width:"100%",height:"450",style:{border:0},allowFullscreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade","aria-hidden":"false",tabIndex:"0"})]}),a.jsx("div",{className:"text-center mt-4",children:(0,a.jsxs)("span",{className:"text-black w-full text-center",children:["\xa9 ",c," ",e["Rights Reserved"],a.jsx(i(),{href:t+"legal-policies",legacyBehavior:!0,children:a.jsx("a",{className:"text-blue-500",children:e["Data Policies"]})}),"."]})})]})})}},5769:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var a=s(997),l=s(6689),n=s(8114),r=s(1664),i=s.n(r),c=s(1163),o=s(5675),d=s.n(o);let h={"/ca/":[{src:"/_next/static/media/catalan.8d23393a.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX6hz344Ez2w01MaXH5i0D61VP5iED6kED/yVX6j0L+jj+tB915AAAACnRSTlP8KDgAThBubxhe1dkIFQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxjYIYCBlYmMOBgYOECA3YGFi4GBgYGLjYkBogGMVgZwYCVAaYdACVAAPEpk0n6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},"CATAL\xc0","/ca/inici","inici"],"/":[{src:"/_next/static/media/spanish.9b2c84da.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEXrACzzIh1MaXHvJB/hADD/ywT9ygblADP/zQL/1QDjky7sqBtiTq00AAAACHRSTlMp/QA2CDQ6Clm8bycAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAvSURBVHicY2CCAgYWBjBgYWBmBANmBjZObm5ODk5WBjYOLi4ODg5WhBQ7TDFMOwAdLgDPoFQcuwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},"ESPA\xd1OL","/",""],"/en/":[{src:"/_next/static/media/english.d5155e16.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXEJA2iEBSiZBR5WDUNqBzYAA3E/BksiB1pvBjTLAwQnCFhmBTcvCVRdBD1yBjGVBh/uIiJrCDXuCgCPAiPnCQDsHAkAAHIAAmxlc79eAAAAGXRSTlMAxou5U6e4m4XAuUZCoKGg0A+OfbKCG1tgYGUYDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJw9y8cBgCAQBMA90gVQUIL2X6kvmf8Avyu/pTx5QTipEguc72bTO3CNbdzKCAfFM0nYafsARNsBml+APHIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},"ENGLISH","/en/home","home"]},m=({translations:e,locale:t,page:s})=>{(0,c.useRouter)();let[r,o]=(0,l.useState)(!1),[m,g]=(0,l.useState)("up"),A=(0,l.useRef)(null),x=(0,l.useRef)(null),u=(0,l.useRef)(0);(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;e>u.current&&e>100?g("down"):e<u.current&&g("up"),u.current=e};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,l.useEffect)(()=>{let e=e=>{A.current&&!A.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let p=e=>Object.values(h).flat().includes(e);return(0,a.jsxs)("nav",{className:` flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${"down"===m?"-translate-y-full":"translate-y-0"}`,children:[a.jsx("div",{children:a.jsx(i(),{href:h[t][2],children:a.jsx("div",{className:"w-[100px] sm:w-[150px] md:w-[150px]",children:a.jsx(d(),{src:n.Z,alt:"Company Logo",width:200,height:50,className:"w-full h-auto bg-white rounded-br-xl p-2",priority:!0})})})}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[a.jsx("div",{className:"relative",ref:x,children:a.jsx("div",{className:"fixed top-0 left-1/3 mt-5 w-auto bg-primary text-white font-bold text-xl border rounded-lg shadow-lg z-10",style:{transform:"scale(1)",opacity:1,transformOrigin:"top"},children:(0,a.jsxs)("ul",{className:"flex flex-row space-x-4 p-2",children:[a.jsx("li",{children:a.jsx(i(),{href:h[t][2],legacyBehavior:!0,children:a.jsx("a",{className:"px-4 py-2 hover:bg-blue-700 rounded",children:e.Home})})}),a.jsx("li",{children:a.jsx(i(),{href:t+"products/sale",legacyBehavior:!0,children:a.jsx("a",{className:"px-4 py-2 hover:bg-blue-700 rounded",children:e.Sale})})}),a.jsx("li",{children:a.jsx(i(),{href:t+"products/building",legacyBehavior:!0,children:a.jsx("a",{className:"px-4 py-2 hover:bg-blue-700 rounded",children:e["Modular Building"]})})}),a.jsx("li",{children:a.jsx(i(),{href:t+"products/cabin",legacyBehavior:!0,children:a.jsx("a",{className:"px-4 py-2 hover:bg-blue-700 rounded",children:e.Cabin})})}),a.jsx("li",{children:a.jsx(i(),{href:h[t][2],legacyBehavior:!0,children:a.jsx("a",{className:"px-4 py-2 hover:bg-blue-700 rounded",children:e.Contact})})})]})})}),(0,a.jsxs)("div",{className:"relative",ref:A,children:[a.jsx("button",{onClick:()=>{o(!r)},children:a.jsx(d(),{src:h[t][0],alt:"current language",className:"w-20 h-20"})}),r&&a.jsx("div",{className:"absolute right-0 mt-2 w-20 z-10",style:{transition:"transform 0.3s ease-in-out, opacity 0.3s ease-in-out",transform:r?"scale(1)":"scale(0)",opacity:r?1:0,transformOrigin:"top right"},children:Object.entries(h).map(([e,l])=>e!==t&&a.jsx("li",{className:"list-none",children:a.jsx(i(),{href:p(s)?l[2]:e+s,legacyBehavior:!0,children:a.jsx("a",{className:"flex items-center px-4 py-2 hover:bg-gray-200",children:a.jsx(d(),{src:l[0],alt:e,className:"w-30 h-20 mr-2"})})})},e))})]})]})]})}},8247:(e,t,s)=>{"use strict";s.d(t,{i:()=>i});var a=s(7147),l=s.n(a),n=s(1017),r=s.n(n);let i=e=>{let t=r().resolve(process.cwd(),"public","locales",e,"common.json");if(!l().existsSync(t))throw Error(`Translation file not found for locale '${e}'`);return JSON.parse(l().readFileSync(t,"utf8"))}},7112:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(997);s(1163),s(8363);let l=function({Component:e,pageProps:t}){return a.jsx(e,{...t})}},5089:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(997),l=s(6859),n=s(4298),r=s.n(n);function i(){return(0,a.jsxs)(l.Html,{children:[(0,a.jsxs)(l.Head,{children:[a.jsx(r(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-DN0PBMYZT1",strategy:"afterInteractive"}),a.jsx(r(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DN0PBMYZT1');
            `}}),a.jsx(r(),{id:"google-tag-manager",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5PBQBQNP');
            `}}),a.jsx("meta",{charSet:"utf-8"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("meta",{name:"geo.region",content:"ES"}),a.jsx("meta",{name:"geo.placename",content:"Spain"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),a.jsx("link",{rel:"manifest",href:"/site.webmanifest"}),a.jsx("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),a.jsx("meta",{name:"msapplication-TileColor",content:"#da532c"}),a.jsx("meta",{name:"theme-color",content:"#ffffff"})]}),(0,a.jsxs)("body",{children:[a.jsx("noscript",{children:a.jsx("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-5PBQBQNP",height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}),a.jsx(l.Main,{}),a.jsx(l.NextScript,{}),a.jsx("script",{async:!0,type:"text/javascript",charset:"UTF-8",src:"//cdn.cookie-script.com/s/bcd6d190aca7cfbefd8a1ba266098fa6.js"})]})]})}},8363:()=>{}};