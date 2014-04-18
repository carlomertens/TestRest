egl.chartsToRedraw=[];
egl.defineWidget("dojo.widgets","DojoChartBase","dojo.widgets","DojoBase","div",{"constructor":function(){
dojo.require("dojox.fx");
dojo.require("dojox.gfx");
dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.themes.PlotKit.blue");
dojo.require("dojox.charting.themes.PlotKit.red");
dojo.require("dojox.charting.themes.PlotKit.green");
dojo.require("dojox.charting.themes.PlotKit.orange");
dojo.require("dojox.charting.themes.PlotKit.cyan");
dojo.require("dojox.charting.themes.PlotKit.purple");
dojo.require("dojox.charting.action2d.Tooltip");
dojo.require("dojox.charting.action2d.Highlight");
dojo.require("dojox.charting.action2d.Magnify");
dojo.require("dojox.charting.themes.MiamiNice");
},"createChart":function(_1,_2,_3,_4){
this.setWidth(this.width||_2);
this.setHeight(this.height||_3);
this.dojoWidget=new dojox.charting.Chart2D(_1);
if(!egl.IE||egl.IEVersion>=9){
if(egl.IE&&egl.IEVersion==9){
this.dojoWidget.surface.rawNode.attributes[1].nodeValue=""+(parseInt(this.width)-1);
this.dojoWidget.surface.rawNode.attributes[2].nodeValue=""+(parseInt(this.height)-2);
}else{
this.dojoWidget.surface.rawNode.attributes[1].nodeValue=""+parseInt(this.width);
this.dojoWidget.surface.rawNode.attributes[2].nodeValue=""+parseInt(this.height);
}
}
this.dojoWidget.addPlot("default",_4);
this.setTheme(this.themeColor);
if(egl.IE&&egl.IEVersion<9){
if(!this.addedToRedrawList){
egl.chartsToRedraw.push(this);
this.addedToRedrawList=true;
}
}
},"setWidth":function(_5){
this.width=_5;
if(this.dojoWidget){
this.redraw();
}else{
egl.dojo.widgets.DojoBase.prototype.setWidth.call(this,_5);
}
},"setHeight":function(_6){
this.height=_6;
if(this.dojoWidget){
this.redraw();
}else{
egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_6);
}
},"redraw":function(){
this.render();
},"addAxes":function(){
this.dojoWidget.addAxis("y",{vertical:true});
this.dojoWidget.addAxis("x",{});
},"addAxesWithMinMax":function(){
var _7={vertical:true};
if(typeof (this.minY)!=="undefined"){
_7.min=this.minY;
}
if(typeof (this.maxY)!=="undefined"){
_7.max=this.maxY;
}
this.dojoWidget.addAxis("y",_7);
var _8={};
if(typeof (this.minX)!=="undefined"){
_8.min=this.minX;
}
if(typeof (this.maxX)!=="undefined"){
_8.max=this.maxX;
}
this.dojoWidget.addAxis("x",_8);
},"setTheme":function(_9){
try{
this.dojoWidget.setTheme(dojox.charting.themes.PlotKit[_9]);
}
catch(e){
}
new dojox.charting.action2d.Magnify(this.dojoWidget,"default",{scale:1.1});
new dojox.charting.action2d.Highlight(this.dojoWidget,"default");
new dojox.charting.action2d.Tooltip(this.dojoWidget,"default");
},"installEventHandlers":function(_a,_b,_c){
return egl.egl.ui.rui.Widget.prototype.installEventHandlers.call(this,_a,_b,_c);
}});
