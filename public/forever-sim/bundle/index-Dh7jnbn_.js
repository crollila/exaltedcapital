function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./theme-6i97rGn9.js";import{D as n,W as c,_ as r}from"./preload-helper-BwBJCuAd.js";n.get();const s=new URLSearchParams(window.location.search);s.has("cssClass")&&document.body.classList.add(s.get("cssClass"));const l=s.has("isIndividualSim");l&&document.body.classList.add("individual-sim");document.body.classList.add("new-tab");new c(document.body);r(()=>import("./metadata-Du6ZIGiI.js"),__vite__mapDeps([])).then(async({el:e,getRelease:t,releaseSummary:i,confidencePanel:o})=>{const a=await t(),d=e("aside","forever-detached-status");d.append(i(a),o(a)),document.body.prepend(d)});
