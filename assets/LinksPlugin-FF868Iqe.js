import{l as i}from"./index-df3wS56N.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-WSA0jON3.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-WSA0jON3.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css","assets/CanvasUtils-nY-nGN8W.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}