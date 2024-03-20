import{n as o}from"./index--AM5w97b.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater--wOyM-YQ.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater--wOyM-YQ.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css","assets/ValueWithRandom-15sk3iA2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}