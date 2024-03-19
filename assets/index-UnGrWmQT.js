import{l as i}from"./index-df3wS56N.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-gUt3bQGI.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-gUt3bQGI.js","assets/ValueWithRandom-geGB8jds.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}