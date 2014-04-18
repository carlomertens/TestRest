egl.defineWidget("dojo.widgets","DojoPieChart","dojo.widgets","DojoChartBase","div",{"constructor":function(){
this.fontColor="white";
this.setFontSize(12);
this.setFontWeight("normal");
},"createDojoWidget":function(_1){
this.radius=this.radius||100;
var _2="normal normal "+this.getFontWeight()+" "+this.getFontSize()+" Tahoma";
this.createChart(_1,this.radius*2+30,this.radius*2+30,{type:"Pie",fontColor:this.fontColor,font:_2,labelOffset:this.labelOffSet||40,radius:this.radius});
var _3=[];
for(var n=0;n<this.data.length;n++){
var _5=this.data[n];
_3.push({y:_5.y,color:_5.color,text:_5.text,fontColor:_5.fontColor||this.fontColor||"white"});
}
this.dojoWidget.addSeries("egl rocks",_3);
_1.setAttribute("align","left");
this.dojoWidget.render();
},"setFontColor":function(_6){
this.fontColor=_6;
},"getFontColor":function(){
return this.fontColor;
}});
