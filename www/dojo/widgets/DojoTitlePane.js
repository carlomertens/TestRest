egl.defineWidget("dojo.widgets","DojoTitlePane","dojo.widgets","DojoContainer","div",{"constructor":function(){
dojo.require("dijit.TitlePane");
this.open=true;
},"destroyAtRender":function(){
this.destroy();
},"copyStyle":function(_1){
egl.dojo.widgets.DojoBase.prototype.copyStyle.call(this,_1);
for(var n=0;n<this.children.length;n++){
this.content.appendChild(this.children[n].eze$$DOMElement);
}
},"createDojoWidget":function(_3){
this.content=egl.createChild(this.eze$$DOMElement,"div");
this._mergeArgs({title:this.title||"",open:this.open,content:this.content,duration:this.duration||250});
if(this.id){
this._args.id=this.id;
}
this.dojoWidget=new dijit.TitlePane(this._args,_3);
this.dojoWidget.startup();
if(this.height){
this.setHeight(this.height);
}
},"setHeight":function(_4){
egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_4);
if(this.dojoWidget){
this.dojoWidget.containerNode.style.height=(parseInt(_4)-45)+"px";
}
},"getOpen":function(){
if(this.dojoWidget){
this.open=this.dojoWidget.open;
}
return this.open;
},"setOpen":function(_5){
this.open=_5;
},"toggle":function(){
this.dojoWidget.toggle();
},"setTitle":function(_6){
this._setProperty("title","title",_6);
},"getTitle":function(){
return (this._getProperty("title","title"));
},"setBiDiMarkers":function(){
var _7=this.getTextLayout()=="Visual";
var _8=this.getReverseTextDirection()=="Yes";
if(this.title){
this.setTitle(this.setBiDiMarkersStr(this.title,_7,_8));
}
egl.dojo.widgets.DojoContainer.prototype.setBiDiMarkers.call(this);
}});
