import{l as a}from"./index-df3wS56N.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-vUANrYv1.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const _=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{_ as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-vUANrYv1.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}