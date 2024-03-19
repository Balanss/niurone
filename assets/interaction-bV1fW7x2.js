import{l as i}from"./index--Vg4_ed0.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-prJ0cNJ_.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-prJ0cNJ_.js","assets/Ranges-t47r0Hej.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css","assets/index-WEx3pPdc.js","assets/OptionsColor-2_HoCCga.js","assets/ParticlesInteractorBase-0LBpK8Bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}