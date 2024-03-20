import{n as s}from"./index--AM5w97b.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-j6Qd3xH5.js"),__vite__mapDeps([0,1,2,3,4]));return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Connector-j6Qd3xH5.js","assets/CanvasUtils-9Rm26yBE.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css","assets/ExternalInteractorBase-St1QSTOy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}