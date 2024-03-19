import{l as r}from"./index--Vg4_ed0.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-WriaXHDk.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-WriaXHDk.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}