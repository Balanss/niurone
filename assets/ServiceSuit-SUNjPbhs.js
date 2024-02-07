import{u as N,a as v,b as r,r as t,j as e,m as i,s as I,c as z,d as f,S as C,e as L,A as M,R,f as T}from"./index-8gTSykkN.js";function W(){const l="elcome to Niurone Suite".split(""),[n,a]=N({triggerOnce:!0}),{scrollY:p}=v(),u=r(p,[1e3,1800],[1.5,0]),h=r(p,[800,2e3],[1.2,.8]),[x,w]=t.useState(window.innerWidth<=1023);return t.useEffect(()=>{const c=()=>{w(window.innerWidth<=1023)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),e.jsx(e.Fragment,{children:e.jsxs(i.div,{className:" px-5 phones:text-center phones:mb-20 text-center text-black  border-black",style:x?{}:{opacity:u,scale:h},children:[e.jsx("span",{className:"text-[100px] phones:text-[80px] relative left-1 text-primary font-extrabold",children:"W"}),l.map((c,m)=>e.jsxs(i.span,{className:` relative ${I.heroHeadText} !text-black `,ref:n,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:m*.05},children:[c,""]},m)),e.jsx(i.p,{ref:n,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:.05},className:"font-semibold  phones:text-left phones:mb-3",children:" Where technology design is the future!"}),e.jsx(i.p,{ref:n,initial:{opacity:0,y:-50},animate:{opacity:a?1:0,y:a?0:-50},transition:{delay:.05},className:"font-semibold w-1/3 phones:w-auto phones:text-left m-auto leading-loose  tracking-wider mt-2",children:" At Niurone, we specialize in cutting-edge technologies, focusing on Artificial Intelligence (AI), automation, website development, and custom software solutions. Our dedicated team of experts is driven by a passion for pushing the boundaries of what technology can achieve."})]})})}function H({setModalShow:l,modalShow:n,setIcon:a,setTitle:p,setDescription:u,setDescription2:h,setDescription3:x}){const w=s=>{l(!n),p(f[s].title),u(f[s].description),h(f[s].description2),x(f[s].description3),a(f[s].icon)},{scrollY:c}=v();r(c,[200,2500],[1.5,0]),r(c,[200,2e3],[1.2,.8]);const[m,y]=t.useState(null);N({triggerOnce:!0});const{scrollYProgress:b}=v(),g=r(b,[0,.2],[100,0]);return e.jsx(e.Fragment,{children:z.map((s,d)=>e.jsx(i.div,{className:"grid grid-cols-1 shadow-shadow1 rounded-[20px]",transition:{ease:"easeIn",duration:.7},style:{rotateX:g},children:e.jsxs(i.li,{style:{listStyleType:"none"},onHoverStart:()=>y(d),onHoverEnd:()=>y(null),whileHover:{scale:m===d?1.1:1},transition:{type:"spring",stiffness:200,damping:10},className:" phones:[250px] w-[250px] h-[450px]  bg-wg  p-[20px] rounded-[20px] shadow-card ",children:[e.jsx("img",{src:s.icon,alt:"web-development",className:"w-12 h-12 object-contain"}),e.jsx(i.h3,{className:"text-black text-[26px] mt-2 font-bold text-center",children:s.title}),e.jsxs(i.section,{className:"flex flex-col ",children:[e.jsxs(i.p,{className:"text-black text-sm mt-5",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:1.5},transition:{duration:1.5},children:[" ",s.description]}),e.jsx(i.button,{whileHover:{backgroundColor:"#ffffff",color:"#003e34"},transition:{duration:.2},className:"bg-primary text-white mt-5 p-2 rounded-md",onClick:()=>w(d),children:"Learn More"})]})]})},d))})}function A(){const[l,n]=t.useState(!1),[a,p]=t.useState(""),[u,h]=t.useState(""),[x,w]=t.useState(""),[c,m]=t.useState(""),[y,b]=t.useState("");t.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[l]);const g=t.useRef(null),{scrollYProgress:s}=L({target:g,offset:["0 6","1.33 1"]}),[d,k]=t.useState(window.innerWidth<=768);t.useEffect(()=>{const o=()=>{k(window.innerWidth<=768)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const S=d?r(s,[0,1],[.8,1]):r(s,[0,1],[.8,1]),E=d?r(s,[0,.9],[.8,1]):r(s,[0,.9],[.8,1]);return t.useEffect(()=>{l&&setTimeout(()=>{document.getElementById("contactButton").href="#contact"},500)},[l]),t.useEffect(()=>{const o=j=>{j.key==="Escape"&&n(!1)};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(i.div,{className:" py-10 overflow-hidden  mt-[100px] flex xl:flex-col xl:items-center justify-center rounded-lg bg-bg",ref:g,style:{scale:S,opacity:E},children:e.jsxs("div",{className:"flex p-[10px]  gap-[20px]  w-screen flex-wrap xl:flex-col justify-center ",children:[e.jsx(W,{}),e.jsx("div",{className:"flex   flex-wrap flex-row  items-center justify-center m-auto gap-10  h-auto pb-10",children:e.jsx(i.div,{className:" grid pc:grid-cols-3  flex-wrap phones:gap-[4rem] justify-center gap-20 md:flex-2  desktop:flex-1 desktop:w-4/4 phones:p-0 p-10  ",initial:{opacity:0,x:-1e3,scale:0},animate:{opacity:1,x:0,scale:1},exit:{opacity:1.5},transition:{duration:1.5},children:e.jsx(H,{setModalShow:n,modalShow:l,setIcon:b,setTitle:p,setDescription:h,setDescription2:w,setDescription3:m})})})]})}),e.jsx(M,{children:l&&e.jsx(i.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5},exit:{opacity:0,scale:0},onClick:o=>{o.target===o.currentTarget&&n(!1)},className:"fixed  z-[10000000000000000000000000] top-0 left-0 w-screen pt-10 pb-10 overflow-y-scroll h-screen bg-black bg-opacity-50 flex items-center justify-center",children:e.jsx("div",{className:"bg-wg  p-10 phones:w-[95vw]  w-[50vw] m-auto  rounded-md",children:f.map((o,j)=>e.jsx(R.Fragment,{children:a===o.title&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"phones:flex flex-col phones:mt-20 ",children:[e.jsx("img",{src:y,alt:"web-development",className:"w-12 h-12 object-contain"}),e.jsx("h3",{className:"text-2xl text-black font-bold text-center mb-5",children:a}),e.jsxs("section",{className:"flex flex-row gap-5 phones:flex-col",children:[e.jsx("div",{children:e.jsx(T.LazyLoadImage,{effect:"blur",alt:"web-development",src:o.img,className:" object-fill"})}),e.jsxs("div",{children:[e.jsxs("ul",{className:"list-disc list-inside leading-normal tracking-wide",children:[e.jsx("li",{className:"text-sm mt-5  text-black",children:u}),x>""?e.jsx("li",{className:"text-sm mt-5 text-black",children:x}):null,c>""?e.jsx("li",{className:"text-sm mt-5 text-black",children:c}):null]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{className:"bg-primary text-white mt-5 p-2 rounded-md",onClick:()=>n(!1),children:"Close"}),e.jsx("a",{id:"contactButton",onClick:()=>n(!1),className:"bg-primary text-white mt-5 p-2 rounded-md ",children:"Contact us!!"})]})]})]})]})})},j))})})})]})}const P=C(A,"services");export{P as default};
