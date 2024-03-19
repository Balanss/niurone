import{l as i}from"./index-df3wS56N.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-WwJ8q9Nw.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-WwJ8q9Nw.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}