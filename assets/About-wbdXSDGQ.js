import{S as u,u as b,r as i,e as f,b as x,j as e,m as a,s,t as g,f as j}from"./index-9ADo4hJD.js";const w="https://www.niurone.com/assets/banner-sBb54Uq3.png";function y(){const[p,n]=b({triggerOnce:!0}),r=i.useRef(null),{scrollYProgress:o}=f({target:r,offset:["0 5","1.33 1"]}),d=x(o,[0,1],[.9,1]),h=x(o,[0,.9],[0,1]),[l,m]=i.useState("01");return e.jsxs(a.div,{className:"flex  flex-row gap-1  items-center phones:items-center phones:pr-10 phones:pl-5   pc:pl-20 overflow-hidden pb-[100px]  bg-background bg-cover bg-no-repeat",ref:r,style:{scale:d,opacity:h},children:[e.jsx(a.section,{ref:p,initial:{opacity:0,y:-50},animate:{opacity:n?1:0,y:n?0:-50},transition:{delay:.5},className:"flex flex-col",children:e.jsxs("div",{className:" flex flex-col flex-wrap  phones:justify-center justify-start gap-4 mt-5 h-auto pb-10",children:[e.jsxs("h2",{className:`${s.heroHeadText} !text-4xl !text-black phones:text-left `,children:["Unlocking the Future: ",e.jsx("span",{className:"text-primary drop-shadow-md",children:"Where Technology Meets Design"})," "]}),e.jsx("h2",{className:"font-bold text-5xl mt-10",children:" Why us?"}),e.jsx("p",{className:`${s.heroSubText} !text-sm !text-black lg:!w-[50vw] phones:text-left`,children:" At Niurone, we believe in the transformative power of technology and its seamless integration with captivating designs. Our approach is grounded in innovation, where cutting-edge technology meets creative aesthetics to redefine possibilities and elevate user experiences."}),e.jsx("div",{}),g.map((t,c)=>l===t.number?e.jsxs(a.div,{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"text-black  text-[12px] max-w-3xl leading-[30px]",children:e.jsxs("span",{className:"flex border-t-2 mt-2 phones:justify-center items-center border-black",children:[e.jsx("p",{className:`${l===t.number?"bg-black p-2 text-white ":"text-black"} flex flex-end rounded-br-lg`,children:t.number}),e.jsxs("p",{className:`${s.heroSubText} phones:ml-[12px] ml-[40px] !text-xl !text-black !pt-2 cursor-pointer `,children:[" ",t.title," "]})]})}),e.jsx(a.div,{className:"text-black phones:text-center  max-w-3xl leading-[30px]",initial:{opacity:0,y:0},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},children:e.jsx("p",{className:`${s.heroSubText} !text-[13px] phones:text-left phones:p-2 phones:w-[90vw] phones:m-auto ml-[80px]`,children:t.description})})]},c):e.jsx("div",{className:"text-black phones:text-center text-[17px] max-w-3xl leading-[30px] mt-1",children:e.jsxs("span",{className:"flex border-t-2 mt-5 gap-3 items-center border-black phones:flex-col",children:[e.jsx("p",{className:`${l?"text-black":"bg-black p-2 text-white "} flex flex-end rounded-br-lg`,children:t.number}),e.jsxs("p",{className:`${s.heroSubText} !text-black !pt-2  cursor-pointer`,onClick:()=>m(t.number),children:[" ",t.title," "]})]})},c))]})}),e.jsx("div",{className:"phones:hidden hidden xl:block ",children:e.jsx(j.LazyLoadImage,{src:w,alt:"logo",effect:"blur",className:""})})]})}const k=u(y,"about");export{k as default};
