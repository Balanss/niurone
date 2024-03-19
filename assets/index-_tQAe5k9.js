import{l as o}from"./index--Vg4_ed0.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-O7OcU8Ys.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-O7OcU8Ys.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}