"use strict";exports.id=230,exports.ids=[230],exports.modules={3351:(e,t,l)=>{l.d(t,{Z:()=>s});let s={src:"/_next/static/media/ocasio.1b0f1f8e.jpeg",height:1800,width:3200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABsQ//xAAWEAEBAQAAAAAAAAAAAAAAAAADARH/2gAIAQEAAQUCqpn/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGv/8QAFRABAQAAAAAAAAAAAAAAAAAAADL/2gAIAQEABj8Cp//EABYQAQEBAAAAAAAAAAAAAAAAABEAAf/aAAgBAQABPyHYXf/aAAwDAQACAAMAAAAQ/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxBL/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QFf/EABYQAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAQABPxADHRFN/9k=",blurWidth:8,blurHeight:5}},4315:(e,t,l)=>{l.d(t,{Z:()=>o});var s=l(997),a=l(6689),A=l(4960),r=l(5675),c=l.n(r),i=l(1664),n=l.n(i);let o=({images:e,interval:t=7e3,objectFit:l,encoded:r,translations:i})=>{let[o,d]=(0,a.useState)(0),[x,u]=(0,a.useState)(!0),[h,m]=(0,a.useState)(null),[g,b]=(0,a.useState)(null),[f,j]=(0,a.useState)(0);(0,a.useRef)(null);let p=(0,a.useRef)(),v=(0,a.useRef)(),N=(0,a.useRef)();(0,a.useEffect)(()=>{p.current=z}),(0,a.useEffect)(()=>(x?w():(y(),Q()),()=>y()),[t,x]);let w=()=>{y(),Q(),v.current=setInterval(()=>{p.current()},t),B()},y=()=>{v.current&&clearInterval(v.current)},E=()=>{x&&(y(),w())},B=()=>{N.current=setInterval(()=>{j(e=>{let l=e+100/(t/100);return l>=100?(clearInterval(N.current),100):l})},100)},Q=()=>{N.current&&clearInterval(N.current),j(0)},C=()=>{if(!h||!g)return;let e=h-g;e>50?z():e<-50&&S(),m(null),b(null),E()},S=()=>{d(t=>0===t?e.length-1:t-1),E()},z=()=>{d(t=>t===e.length-1?0:t+1),E()};return(0,s.jsxs)("div",{className:"flex flex-col items-center w-full h-full",children:[s.jsx("div",{className:"carousel-container relative flex items-center justify-center overflow-hidden w-4/5 h-4/5 rounded-lg","aria-roledescription":"carousel","aria-label":"Gallery",onTouchStart:e=>{setTouchEnd(null),setTouchStart(e.targetTouches[0].clientX),E()},onTouchMove:e=>{setTouchEnd(e.targetTouches[0].clientX)},onTouchEnd:()=>{if(!touchStart||!touchEnd)return;let e=touchStart-touchEnd;e>50?z():e<-50&&S(),E()},onMouseDown:e=>{b(null),m(e.clientX),E()},onMouseMove:e=>{null!==h&&b(e.clientX)},onMouseUp:C,onMouseLeave:C,children:s.jsx("div",{className:"carousel-track flex transition-transform duration-500 ease-in-out w-full h-full rounded-lg",style:{transform:`translateX(-${100*o}%)`},children:e.map((e,t)=>(0,s.jsxs)("div",{className:"w-full h-full flex-shrink-0 relative",children:[s.jsx(c(),{src:r?`http://simreus.com/productService${e.imageUrl}`:e.src,alt:e.alt||"Image",layout:"fill",objectFit:l,objectPosition:e.position||"center center",className:"rounded-lg"}),e.title&&e.text&&e.url&&(0,s.jsxs)("div",{className:"absolute bottom-4 left-4 p-4 bg-black bg-opacity-60 rounded-lg shadow-md text-white",children:[s.jsx("h2",{className:"text-lg sm:text-xl md:text-2xl font-bold mb-2",children:i[e.title]}),s.jsx("p",{className:"text-sm sm:text-base md:text-lg mb-4",children:i[e.text]}),s.jsx(n(),{href:e.url,legacyBehavior:!0,children:s.jsx("a",{children:s.jsx("button",{className:"bg-secondary text-white py-2 px-4 rounded-md opacity-75 hover:opacity-100 transition-opacity",children:i["View Product"]})})})]})]},t))})}),(0,s.jsxs)("div",{className:"mt-3 flex justify-between items-center w-4/5",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2 bg-primary rounded-full p-3",children:[s.jsx("button",{onClick:()=>{u(!x)},className:"text-secondary","aria-label":x?"Pause slide":"Play slide",children:x?s.jsx(A.Wh,{className:"w-6 h-6"}):s.jsx(A.gmG,{className:"w-6 h-6"})}),s.jsx("div",{className:"flex space-x-2",children:e.map((e,t)=>s.jsx("div",{className:`h-2 ${o===t?"w-10 bg-gray-300":"w-2 bg-gray-300"} rounded-full cursor-pointer relative overflow-hidden`,onClick:()=>{d(t),E()},children:o===t&&s.jsx("div",{className:"absolute top-0 left-0 h-full bg-secondary",style:{width:`${f}%`}})},t))})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2 bg-primary rounded-full p-3",children:[s.jsx("button",{onClick:S,className:"text-secondary","aria-label":"Previous slide",children:s.jsx(A.x_l,{className:"w-6 h-6"})}),s.jsx("button",{onClick:z,className:"text-secondary","aria-label":"Next slide",children:s.jsx(A.Z1Y,{className:"w-6 h-6"})})]})]})]})}},2562:(e,t,l)=>{l.d(t,{Z:()=>c});var s=l(997);l(6689);var a=l(5675),A=l.n(a),r=l(4960);let c=({product:e,onSelectProduct:t,translations:l})=>{let a=e.images.find(e=>!0===e.isMain);return(0,s.jsxs)("div",{className:"relative shadow-xl rounded-lg overflow-hidden group cursor-pointer w-[20vh] h-[20vh] md:w-[25vh] md:h-[25vh] lg:w-[30vh] lg:h-[30vh]",onClick:()=>t(e),children:[a&&s.jsx(A(),{src:`http://simreus.com/productService${a.imageUrl}`,alt:e.title,layout:"fill",objectFit:"cover",className:"absolute inset-0 z-0"}),e.sold&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10",children:s.jsx("span",{className:"text-red-600 text-4xl font-bold border-4 border-red-600 rounded-full p-2 transform rotate-45",children:l["Product Sold"]})}),e.booked&&s.jsx("div",{className:"absolute top-2 right-2 z-10",children:s.jsx(r.iCz,{className:"text-yellow-400 text-3xl"})}),s.jsx("div",{className:"absolute inset-0 flex flex-col justify-end",children:s.jsx("div",{className:"bg-black bg-opacity-60 text-white p-2",children:s.jsx("div",{className:"flex justify-between items-center w-full",children:s.jsx("h3",{className:"text-white text-l md:text-xl font-semibold",children:e.title})})})})]})}},88:(e,t,l)=>{l.d(t,{Z:()=>c});var s=l(997),a=l(6689),A=l(3821),r=l(4315);let c=({product:e,onClose:t,translations:l,locale:c})=>{let[i,n]=(0,a.useState)(!1);return e?s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:(0,s.jsxs)("div",{className:"relative w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg",children:[" ",s.jsx("button",{onClick:t,className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold",children:"\xd7"}),s.jsx("h2",{className:"text-2xl font-bold mb-4",children:e.title}),(0,s.jsxs)("div",{className:"relative h-96 w-full mb-4",children:[" ",s.jsx(r.Z,{images:e.images,objectFit:"contain",encoded:"true",translations:l})]}),s.jsx("p",{className:"text-lg mb-4",children:e.description}),(0,s.jsxs)("p",{className:"text-lg mb-4",children:[l.size,": ",e.length," m x ",e.width," m"]}),e.sold&&s.jsx("p",{className:"text-red-600 font-bold mb-4",children:l["Product Sold"]}),e.booked&&s.jsx("p",{className:"text-yellow-600 font-bold mb-4",children:l["Product Booked"]}),s.jsx("button",{onClick:()=>n(!i),className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition",children:l["Contact us"]}),i&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",children:(0,s.jsxs)("div",{className:"relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg",children:[s.jsx("button",{onClick:()=>n(!1),className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl font-bold",children:"\xd7"}),s.jsx(A.Z,{product:e,translations:l,locale:c})]})})]})}):null}},6230:(e,t,l)=>{l.a(e,async(e,s)=>{try{l.d(t,{Z:()=>b});var a=l(997),A=l(6689),r=l(968),c=l.n(r),i=l(5675),n=l.n(i),o=l(9648),d=l(5769),x=l(7222),u=l(2562),h=l(88),m=l(3351),g=e([o]);o=(g.then?(await g)():g)[0];let b=({translations:e,locale:t})=>{let[l,s]=(0,A.useState)(null),[r,i]=(0,A.useState)([]),[g,b]=(0,A.useState)("ALL");(0,A.useEffect)(()=>{(async()=>{try{let e=await o.default.get("/api/products");i(e.data)}catch(e){console.error("Error fetching products:",e)}})()},[]);let f=e=>{s(e)},j=r.filter(e=>"ALL"===g||e.itemType===g);return(0,a.jsxs)(a.Fragment,{children:[a.jsx(c(),{children:a.jsx("title",{children:"Sales"})}),a.jsx(d.Z,{locale:t,page:"products/sale",translations:e}),(0,a.jsxs)("div",{className:"relative h-64 w-full md:h-96 mb-8",children:[a.jsx(n(),{src:m.Z,alt:e.Sale,layout:"fill",objectFit:"cover"}),a.jsx("div",{className:"absolute bottom-0 left-0 bg-primary text-white p-4 rounded-md",children:a.jsx("h2",{className:"text-xl md:text-4xl font-bold",children:e.Sale})})]}),a.jsx("p",{className:"text-lg text-center p-8 mx-auto max-w-3xl",children:e["Sales Text"]}),(0,a.jsxs)("div",{className:"flex justify-center mb-8",children:[a.jsx("button",{className:`px-4 py-2 m-2 ${"ALL"===g?"bg-primary text-white":"bg-gray-200"}`,onClick:()=>b("ALL"),children:e.All}),a.jsx("button",{className:`px-4 py-2 m-2 ${"CONTAINER"===g?"bg-primary text-white":"bg-gray-200"}`,onClick:()=>b("CONTAINER"),children:e.Container}),a.jsx("button",{className:`px-4 py-2 m-2 ${"PREFAB"===g?"bg-primary text-white":"bg-gray-200"}`,onClick:()=>b("PREFAB"),children:e.Prefabs})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center px-4 md:px-8",children:[a.jsx("div",{className:"flex flex-col items-center md:items-start mb-8",children:a.jsx("section",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8",children:j.map(t=>a.jsx(u.Z,{product:t,onSelectProduct:f,translations:e},t.id))})}),l&&a.jsx(h.Z,{product:l,onClose:()=>{s(null)},translations:e,locale:t})]}),a.jsx(x.Z,{translations:e,locale:t})]})};s()}catch(e){s(e)}})}};