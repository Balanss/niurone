import{n as a}from"./index--AM5w97b.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-2X-F1JOI.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const _=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{_ as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-2X-F1JOI.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}