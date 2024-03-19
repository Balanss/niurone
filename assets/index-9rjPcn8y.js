import{l as c}from"./index--Vg4_ed0.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-YOFfo-Ha.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-YOFfo-Ha.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}