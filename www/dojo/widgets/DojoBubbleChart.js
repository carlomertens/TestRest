egl.defineWidget("dojo.widgets","DojoBubbleChart","dojo.widgets","DojoChartBase","div",{"createDojoWidget":function(_1){
this.createChart(_1,300,300,{type:"Bubble",areas:true,gap:this.barGap||5});
for(var n=0;n<this.data.length;n++){
this.dojoWidget.addSeries("series "+n,[this.data[n]],{stroke:{color:"black"},fill:this.data[n].color||"red",tooltip:this.data[n].tooltip||this.data[n]});
}
this.addAxesWithMinMax();
new dojox.charting.action2d.Magnify(this.dojoWidget,"default",{scale:1.1});
new dojox.charting.action2d.Highlight(this.dojoWidget,"default");
new dojox.charting.action2d.Tooltip(this.dojoWidget,"default");
this.dojoWidget.render();
_1.style.whiteSpace="nowrap";
_1.setAttribute("align","left");
}});
