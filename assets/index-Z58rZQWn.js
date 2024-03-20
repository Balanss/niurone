import{n as t}from"./index--AM5w97b.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-uxWzk4Sc.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Vk9MxjlW.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-11Xxp9sH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-xR5-8V3Y.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-9JVx-guU.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-AnvQKZeT.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-uxWzk4Sc.js","assets/index--AM5w97b.js","assets/index-a7jQp6Dr.css","assets/index-Vk9MxjlW.js","assets/index-11Xxp9sH.js","assets/index-xR5-8V3Y.js","assets/index-9JVx-guU.js","assets/index-AnvQKZeT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}