import{l as n}from"./index--Vg4_ed0.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-cO_3wUEx.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-MuJaW5ec.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-cO_3wUEx.js","assets/PolygonDrawerBase-1bNFm3tf.js","assets/index--Vg4_ed0.js","assets/index-dgFw_5gv.css","assets/TriangleDrawer-MuJaW5ec.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}