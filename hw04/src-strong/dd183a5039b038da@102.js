function _1(md){return(
md`# HW04 Sunburst Strong basline`
)}

function _artist(__query,FileAttachment,invalidation){return(
__query(FileAttachment("artist.csv"),{from:{table:"artist"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _plot2(Inputs){return(
Inputs.form({
	mt:  Inputs.range([0, 100], {label: "marginTop", step: 1}),
	mr:  Inputs.range([0, 100], {label: "marginRight", step: 1}),
	mb:  Inputs.range([0, 100], {label: "marginBottom", step:"yeargenderft", step: 1}),
  fill_color: Inputs.select([ "6） 請勾選您心目中藝術跟環境保護（E）的相關度。（如節能減碳）", "14）您認為以數位形式舉辦藝文展覽，是否能降低碳排放？",], {label: "fill color"}),
})
)}

function _4(Plot,plot2,artist){return(
Plot.plot({
  marginTop: plot2.mt,
  marginRight: plot2.mr,
  marginBottom: plot2.mb,
  marginLeft: plot2.ml,
  grid: true,
  color: { legend: true },
  marks: [
    Plot.barY(artist, {
      y: "6） 請勾選您心目中藝術跟環境保護（E）的相關度。（如節能減碳）",
      x: "14）您認為以數位形式舉辦藝文展覽，是否能降低碳排放？",
      fill: plot2.fill_color,
      tip: true
    }),
    Plot.ruleY([0])
  ]
})
)}

function _5(md){return(
md`<h2>結論</h2>
<h3>從上圖中，我們可以看出：
  <ul>
    <li>大多數人認為以數位形式舉辦藝文展覽能減碳的人也認為藝術對於環境保護是有相關的</li>
    <li>對於以數位形式舉辦藝文展覽能減碳否對與不清楚的人認為藝術與環境保護相關度也不低，或許有些藝術展覽本身就很節能減碳，應用到數位上還會多出額外的機械設備或電源的消耗</li>
    <li>還是有半數人對於數位展覽跟減碳之間的關係是不清楚的</li>
  </ul>
</h3>`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["artist.csv", {url: new URL("../src/artist.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("artist")).define("artist", ["__query","FileAttachment","invalidation"], _artist);
  main.variable(observer("viewof plot2")).define("viewof plot2", ["Inputs"], _plot2);
  main.variable(observer("plot2")).define("plot2", ["Generators", "viewof plot2"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot2","artist"], _4);
  main.variable(observer()).define(["md"], _5);
  return main;
}
