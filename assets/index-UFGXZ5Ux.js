import{l as o}from"./index--Vg4_ed0.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-v-4lzxkr.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-v-4lzxkr.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css","assets/ValueWithRandom-oJCdth7G.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}