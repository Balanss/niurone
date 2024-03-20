import{n as i}from"./index--AM5w97b.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-y73hII-x.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-y73hII-x.js","assets/ValueWithRandom-15sk3iA2.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}