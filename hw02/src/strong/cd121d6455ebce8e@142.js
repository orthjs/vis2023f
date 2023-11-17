function _1(md){return(
md`HW2 Strong baseline`
)}

function _data(FileAttachment){return(
FileAttachment("data.json").json()
)}

function _yConstellation(){return(
[]
)}

function _Constellation(){return(
["牡羊座", "金牛座", "雙子座", "巨蟹座", "獅子座", "處女座", "天秤座", "天蠍座", "射手座", "摩羯座", "水瓶座", "雙魚座"]
)}

function _Constellation_mapping(){return(
new Map([
  [0,"牡羊座"],
  [1,"金牛座"],
  [2,"雙子座"],
  [3,"巨蟹座"],
  [4,"獅子座"],
  [5,"處女座"],
  [6,"天秤座"],
  [7,"天蠍座"],
  [8,"射手座"],
  [9,"摩羯座"],
  [10,"水瓶座"],
  [11,"雙魚座"],
  [12,""]
])
)}

function _6(yConstellation,Constellation,data)
{
  yConstellation.length = 0; //將yCounts清空
  for (var y=0; y<=11; y++) { 
    yConstellation.push({Constellation:Constellation[y], Gender:"女", count:0});
    yConstellation.push({Constellation:Constellation[y], Gender:"男", count:0}); 
  }
  data.forEach (x=> {
    for (var y=0; y<=11; y++) { 
      if (x.Constellation == y) {
        var i = y * 2 + (x.Gender == "男" ? 1 : 0); 
        yConstellation[i].count++;
      } 
    }
  })
  return yConstellation
}


function _7(Plot,yConstellation){return(
Plot.plot({  
	y: {grid: true, label: "count"},  
	marks: [    
		Plot.barY(yConstellation, {x: "Constellation", y: "count", tip: true , fill:"Gender"}),
		Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 })
	 ]
})
)}

function _8(Plot,Constellation_mapping,data){return(
Plot.plot({  
	y: {grid: true, label: "count"},  
  x:{transform:(n)=>Constellation_mapping.get(n),domain: Array.from(Constellation_mapping.values())},
	marks: [    
		Plot.rectY(data, Plot.binX({y:"count"}, { x:"Constellation", interval:1, fill:"Gender", tip: true, title: bin => {return `Constellation:  ${Constellation_mapping.get(bin.Constellation)}\n\nGender: ${bin.Gender}`} })),    
		Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 })
	 ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.json", {url: new URL("../data.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("yConstellation")).define("yConstellation", _yConstellation);
  main.variable(observer("Constellation")).define("Constellation", _Constellation);
  main.variable(observer("Constellation_mapping")).define("Constellation_mapping", _Constellation_mapping);
  main.variable(observer()).define(["yConstellation","Constellation","data"], _6);
  main.variable(observer()).define(["Plot","yConstellation"], _7);
  main.variable(observer()).define(["Plot","Constellation_mapping","data"], _8);
  return main;
}
