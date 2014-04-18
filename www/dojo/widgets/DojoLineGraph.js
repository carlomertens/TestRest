egl.defineWidget("dojo.widgets","DojoLineGraph","dojo.widgets","DojoChartBase","div",{"createDojoWidget":function(_1){
this.createChart(_1,300,300,{type:"Lines",markers:this.showMarkers,tension:this.tension,shadows:this.showShadows?{dx:2,dy:2,dw:2}:{}});
var _2=[];
for(var n=0;n<this.data.length;n++){
_2.push({tooltip:""+this.data[n].value,x:n,y:this.data[n].value});
}
if(this.minX==null){
this.minX=0;
}
if(this.maxX==null){
this.maxX=this.data.length-1;
}
this.addAxesWithMinMax();
this.dojoWidget.addSeries("default",_2);
_1.setAttribute("align","left");
this.dojoWidget.render();
}});
