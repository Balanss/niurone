import{n as r}from"./index--AM5w97b.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-aWfJEkRh.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-aWfJEkRh.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}