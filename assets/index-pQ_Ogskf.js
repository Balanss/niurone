import{l as e}from"./index-df3wS56N.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-Z_ECqtZ0.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-Z_ECqtZ0.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}