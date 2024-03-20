import{n as c}from"./index--AM5w97b.js";async function n(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-5Y5VFzYR.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{n as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-5Y5VFzYR.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}