function _1(md){return(
md`# Data Visualization 成績`
)}

function _data(__query,FileAttachment,invalidation){return(
__query(FileAttachment("data.csv"),{from:{table:"data"},sort:[],slice:{to:null,from:null},derive:[{name: "平均", value: (row) => (
(row["作業一"]+row["作業二"]+row["作業三"]+row["作業四"]+row["作業五"]+row["作業六"]+row["作業七"]+row["作業八"]+row["作業九"]+row["作業十"])/10
)},{name: "總分", value: (row) => (
(row["作業一"]+row["作業二"]+row["作業三"]+row["作業四"]+row["作業五"]+row["作業六"]+row["作業七"]+row["作業八"]+row["作業九"]+row["作業十"])
)}],filter:[],select:{columns:["序號","班級","學號","姓名","GitHub","作業一","作業二","作業三","作業四","作業五","作業六","作業七","作業八","作業九","作業十","平均","總分"]}},invalidation)
)}

function _3(Plot,data){return(
Plot.plot({
  color: { legend: true },
  marks: [
    Plot.frame({ strokeOpacity: 0.1 }),
    Plot.barX(
      data,
      Plot.groupY(
        { x: "sum" },
        { fx: "班級", x: "平均", y: "姓名", fill: "平均", tip: true }
      )
    ),
    Plot.ruleX([0])
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.csv", {url: new URL("../data.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["__query","FileAttachment","invalidation"], _data);
  main.variable(observer()).define(["Plot","data"], _3);
  return main;
}
