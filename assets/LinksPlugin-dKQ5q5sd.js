import{l as i}from"./index--Vg4_ed0.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-PQ5M9H1E.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-PQ5M9H1E.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css","assets/CanvasUtils-IVKa66P8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}