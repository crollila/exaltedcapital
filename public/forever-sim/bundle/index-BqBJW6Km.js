function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./theme-2ni0xO6_.js";import{D as n,W as c,_ as m}from"./detailed_results-DKmG7_xR.js";n.get();const a=new URLSearchParams(window.location.search);a.has("cssClass")&&document.body.classList.add(a.get("cssClass"));const r=a.has("isIndividualSim");r&&document.body.classList.add("individual-sim");document.body.classList.add("new-tab");new c(document.body);m(()=>import("./metadata-Cw3bxAz1.js").then(s=>s.m),__vite__mapDeps([])).then(async({el:s,getRelease:t,releaseSummary:i,confidencePanel:o})=>{const d=await t(),e=s("aside","forever-detached-status");e.append(i(d),o(d)),document.body.prepend(e)});
