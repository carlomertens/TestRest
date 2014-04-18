egl.defineWidget("dojo.widgets","DojoButton","dojo.widgets","DojoBase","div",{"constructor":function(){
dojo.require("dijit.form.Button");
this.setData("Button");
},"createDojoWidget":function(_1){
this.runEventHandlers=function(){
};
var _2=this;
this._mergeArgs({label:this.text||""});
this.dojoWidget=new dijit.form.Button(this._args,_1);
this.dojoWidget.setDisabled(this.disabled?true:false);
if(this.width){
this.setWidth(this.width);
}
if(this.height){
this.setHeight(this.height);
}
},"setID":function(id){
if(id){
this._setProperty("id","id",id);
this.eze$$DOMElement.id="widget_"+id;
}
},"getID":function(){
return this._getProperty("id","id");
},"setText":function(_4){
this.text=_4;
this.setBiDiMarkers();
if(this.dojoWidget){
this.dojoWidget.setLabel(_4);
}
},"getDisabled":function(){
return Boolean(this.disabled);
},"setDisabled":function(_5){
this.disabled=_5;
if(this.dojoWidget){
this.dojoWidget.setDisabled(this.disabled?true:false);
}
},"getText":function(){
if(this.text.charAt(0)>=egl.LRE&&this.text.charAt(0)<=egl.RLO){
return this.text.substring(1);
}
return this.text;
},"setData":function(_6){
egl.dojo.widgets.DojoBase.prototype.setData.call(this,_6);
this.setBiDiMarkers();
},"setWidth":function(_7){
egl.dojo.widgets.DojoBase.prototype.setWidth.call(this,_7);
if(this.dojoWidget){
this.dojoWidget.domNode.firstChild.style.width=(parseInt(_7)-10)+"px";
}
},"setHeight":function(_8){
egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_8);
if(this.dojoWidget){
this.dojoWidget.domNode.firstChild.style.height=(parseInt(_8)-8)+"px";
}
},"setBiDiMarkers":function(){
this.applyBiDiMarkersToWidgetText();
if(this.data){
this.data=this.text;
}
}});
