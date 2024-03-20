import{n}from"./index--AM5w97b.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-VeLgb6FZ.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-yJtyNK-E.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-VeLgb6FZ.js","assets/PolygonDrawerBase-sj272rBj.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css","assets/TriangleDrawer-yJtyNK-E.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}