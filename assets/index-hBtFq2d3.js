import{n as a}from"./index--AM5w97b.js";async function e(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-hW_1mAFf.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{e as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-hW_1mAFf.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css","assets/ParticlesInteractorBase-0LBpK8Bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}