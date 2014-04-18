egl.defineWidget("dojo.widgets","DojoBarGraph","dojo.widgets","DojoChartBase","div",{"createDojoWidget":function(_1){
this.createChart(_1,300,300,{type:this.vertical?"Columns":"Bars",areas:true,gap:this.barGap||0});
var _2=[];
var _3=0,_4=0;
for(var n=0;n<this.data.length;n++){
_2.push(this.data[n].value);
if(n==0){
_4=_2[n];
_3=_2[n];
}
if(_4>_2[n]){
_4=_2[n];
}
if(_3<_2[n]){
_3=_2[n];
}
}
if(_4>0){
_4=_4-(_3-_4)/_2.length;
_4=_4>0?_4:0;
}
this.dojoWidget.addSeries("egl rocks",_2);
if(this.vertical){
this.minX=0.5;
this.maxX=this.data.length+0.5;
this.minY=_4;
}else{
this.minY=0.5;
this.maxY=this.data.length+0.5;
this.minX=_4;
}
this.addAxesWithMinMax();
this.dojoWidget.render();
_1.setAttribute("align","left");
}});
