import{n}from"./index--AM5w97b.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await n(()=>import("./Slower-mE-I-HkJ.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-mE-I-HkJ.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}