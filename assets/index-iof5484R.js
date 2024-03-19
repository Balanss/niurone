import{l as e}from"./index-df3wS56N.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-t_qfj3r6.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-t_qfj3r6.js","assets/index-df3wS56N.js","assets/index-SF2gwSMz.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}