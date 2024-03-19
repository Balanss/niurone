import{l as o}from"./index-df3wS56N.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-R-Hx6IED.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-R-Hx6IED.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css","assets/ValueWithRandom-geGB8jds.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}