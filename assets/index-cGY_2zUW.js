import{l as t}from"./index-df3wS56N.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-yplB12K8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-umU0Wzeh.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-pQ_Ogskf.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-esYDEPJO.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:l}=await t(()=>import("./index-lYGqUklN.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:e}=await t(()=>import("./index-1cAfevrp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await l(a,!1),await e(a,!1),await a.refresh(_)}export{s as loadBasic};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-yplB12K8.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css","assets/index-umU0Wzeh.js","assets/index-pQ_Ogskf.js","assets/index-esYDEPJO.js","assets/index-lYGqUklN.js","assets/index-1cAfevrp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}