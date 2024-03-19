import{l as i}from"./index-df3wS56N.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-dqIUQ3d8.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-dqIUQ3d8.js","assets/Ranges-BQnBYb5O.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css","assets/index-OorOASsl.js","assets/OptionsColor-st-zYS00.js","assets/ParticlesInteractorBase-0LBpK8Bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}