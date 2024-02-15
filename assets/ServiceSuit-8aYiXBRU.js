import{u as S,a as E,b as h,r as s,j as e,m as n,s as z,c as I,d as p,S as C,e as L,A as W,R as H,f as M}from"./index-sPr007tn.js";function R(){const l="ervice suite".split(""),[i,a]=S({triggerOnce:!0}),{scrollY:d}=E(),u=h(d,[1e3,1800],[1.5,0]),f=h(d,[800,2e3],[1.2,.8]),[m,w]=s.useState(window.innerWidth<=1023);return s.useEffect(()=>{const r=()=>{w(window.innerWidth<=1023)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),e.jsx(e.Fragment,{children:e.jsxs(n.div,{className:" px-5 phones:text-center phones:mb-20 text-center text-black  border-black",style:m?{}:{opacity:u,scale:f},children:[e.jsx("span",{className:"text-[100px] phones:text-[80px] relative left-0 text-primary font-extrabold",children:"S"}),l.map((r,c)=>e.jsxs(n.span,{className:` relative ${z.heroHeadText} !text-black `,ref:i,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:c*.05},children:[r,""]},c)),e.jsx(n.p,{ref:i,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:.05},className:"font-semibold  phones:text-left phones:mb-3",children:" Where technology design is the future. "}),e.jsx(n.p,{ref:i,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:.05},className:" w-2/3 font-light phones:w-auto phones:text-left m-auto  mt-2",children:" At Niurone, we're not just another tech company. We're pioneers, dreamers, and architects of innovation, dedicated to sculpting a future where technology isn't just a tool – it's a transformative force. Here at Niurone, we're on a relentless quest to redefine what's possible. Our team isn't just skilled – we're passionate. We live and breathe technology, driven by a burning desire to push boundaries and unlock new frontiers. From crafting custom software solutions to designing cutting-edge AI algorithms, we don't just meet expectations – we transcend them. We're constantly pushing, iterating, and evolving to stay ahead of the curve. "})]})})}function T({setModalShow:l,modalShow:i,setIcon:a,setTitle:d,setDescription:u,setDescription2:f,setDescription3:m}){const w=o=>{l(!i),d(p[o].title),u(p[o].description),f(p[o].description2),m(p[o].description3),a(p[o].icon)},[r,c]=s.useState(null);return e.jsx(e.Fragment,{children:I.map((o,x)=>e.jsx(n.div,{className:"grid grid-cols-1 shadow-shadow1 rounded-[20px]",transition:{ease:"easeIn",duration:.7},children:e.jsxs(n.li,{style:{listStyleType:"none"},onHoverStart:()=>c(x),onHoverEnd:()=>c(null),whileHover:{scale:r===x?1.1:1},transition:{type:"spring",stiffness:200,damping:10,mass:1.5},className:" phones:[250px] w-[250px] h-[450px]  bg-wg  p-[20px] rounded-[20px] shadow-card flex flex-col justify-between ",children:[e.jsx("img",{src:o.icon,alt:"web-development",className:"w-12 h-12 object-contain"}),e.jsx("h3",{className:"text-black text-[26px] mt-2 font-bold text-center",children:o.title}),e.jsxs(n.section,{className:"flex flex-col ",children:[e.jsxs(n.p,{className:"text-black text-sm mt-5",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:1.5},transition:{duration:1.5},children:[" ",o.description]}),e.jsx(n.button,{whileHover:{backgroundColor:"#ffffff",color:"#003e34"},transition:{duration:.2},className:"bg-primary text-white mt-5 p-2 rounded-md",onClick:()=>w(x),children:"Learn More"})]})]})},x))})}const F="https://www.niurone.com/assets/pdf-zYNEzedB.pdf";function A(){const[l,i]=s.useState(!1),[a,d]=s.useState(""),[u,f]=s.useState(""),[m,w]=s.useState(""),[r,c]=s.useState(""),[o,x]=s.useState("");s.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[l]);const b=s.useRef(null),{scrollYProgress:g}=L({target:b,offset:["0 6","1.33 1"]}),[j,v]=s.useState(window.innerWidth<=768);s.useEffect(()=>{const t=()=>{v(window.innerWidth<=768)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const N=j?h(g,[0,1],[.8,1]):h(g,[0,1],[.8,1]),k=j?h(g,[0,.9],[.8,1]):h(g,[0,.9],[.8,1]);return s.useEffect(()=>{l&&setTimeout(()=>{document.getElementById("contactButton").href="#contact"},500)},[l]),s.useEffect(()=>{const t=y=>{y.key==="Escape"&&i(!1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(n.div,{className:" py-10   flex xl:flex-col xl:items-center justify-center rounded-lg bg-bg bg-cover bg-no-repeat",ref:b,style:{scale:N,opacity:k},children:e.jsxs("div",{className:"flex p-[10px]  gap-[20px]  w-screen flex-wrap xl:flex-col justify-center ",children:[e.jsx(R,{}),e.jsx("div",{className:"flex   flex-wrap flex-row  items-center justify-center m-auto gap-10  h-auto pb-10",children:e.jsx(n.div,{className:" grid pc:grid-cols-3 mt-2  flex-wrap phones:gap-[4rem] justify-center gap-20 md:flex-2  desktop:flex-1 desktop:w-4/4 phones:p-0 p-10  ",children:e.jsx(T,{setModalShow:i,modalShow:l,setIcon:x,setTitle:d,setDescription:f,setDescription2:w,setDescription3:c})})})]})}),e.jsx(W,{children:l&&e.jsx(n.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5},exit:{opacity:0,scale:0},onClick:t=>{t.target===t.currentTarget&&i(!1)},className:"fixed  z-[10000000000000000000000000] top-0 left-0 w-screen pt-10 pb-10 overflow-y-scroll h-screen  bg-black bg-opacity-50 flex items-center justify-center",children:e.jsx("div",{className:"bg-wg  p-10 phones:w-[95vw]  w-[50vw] m-auto  rounded-md",children:p.map((t,y)=>e.jsx(H.Fragment,{children:a===t.title&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"phones:flex flex-col phones:mt-20  ",children:[e.jsx("img",{src:o,alt:"web-development",className:"w-12 h-12 object-contain"}),e.jsx("h3",{className:"text-2xl text-black font-bold text-center mb-5",children:a}),e.jsxs("section",{className:"flex flex-row gap-5 phones:flex-col",children:[e.jsx("div",{children:e.jsx(M.LazyLoadImage,{effect:"blur",alt:"web-development",src:t.img,className:"w-[250px] h-[250px] object-cover rounded-md"})}),e.jsxs("div",{children:[e.jsxs("ul",{className:"list-disc list-inside leading-normal tracking-wide pc:w-[30vw]",children:[e.jsx("li",{className:"text-sm mt-5  text-black",children:u}),m>""?e.jsx("li",{className:"text-sm mt-5 text-black",children:m}):null,r>""?e.jsx("li",{className:"text-sm mt-5 text-black",children:r}):null,e.jsx("hr",{className:"mt-5"}),e.jsxs("h2",{className:"text-sm mt-5 text-black",children:[t.end,e.jsxs("span",{className:`${t.link>""?"flex":"hidden"}`,children:[" ",e.jsx("a",{href:F,target:"_blank",className:"text-blue-500 font-bold hover:cursor-pointer hover:scale-105 underline",children:"here"})," "]})," "]}),t.end1>""?e.jsx("h2",{className:"text-sm mt-5 text-black",children:t.end1}):null]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{className:"bg-primary text-white mt-5 p-2 rounded-md",onClick:()=>i(!1),children:"Close"}),e.jsx("a",{id:"contactButton",onClick:()=>i(!1),className:"bg-primary text-white mt-5 p-2 rounded-md ",children:"Contact us!"})]})]})]})]})})},y))})})})]})}const D=C(A,"services");export{D as default};
