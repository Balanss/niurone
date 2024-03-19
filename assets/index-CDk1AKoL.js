import{l as n}from"./index-df3wS56N.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-mlav94P3.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-WLErbtoP.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-mlav94P3.js","assets/PolygonDrawerBase-EcL6AT9S.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css","assets/TriangleDrawer-WLErbtoP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}