import{l as i}from"./index--Vg4_ed0.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater--9ZMaHB-.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater--9ZMaHB-.js","assets/ValueWithRandom-oJCdth7G.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}