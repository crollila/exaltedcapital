function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["bundle/metadata-b7rnlw1E.js","bundle/live-data-client-BNr1edsZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"./theme-DWydOIvX.js";import{D as n,W as c}from"./detailed_results-hUWUe0HW.js";import{_ as r}from"./preload-helper-ecMXPCA-.js";import"./utils-Co8w8lPw.js";n.get();const s=new URLSearchParams(window.location.search);s.has("cssClass")&&document.body.classList.add(s.get("cssClass"));const m=s.has("isIndividualSim");m&&document.body.classList.add("individual-sim");document.body.classList.add("new-tab");new c(document.body);r(()=>import("./metadata-b7rnlw1E.js"),__vite__mapDeps([0,1])).then(async({el:t,getRelease:e,releaseSummary:i,confidencePanel:o})=>{const a=await e(),d=t("aside","forever-detached-status");d.append(i(a),o(a)),document.body.prepend(d)});
