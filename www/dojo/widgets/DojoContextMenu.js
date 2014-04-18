egl.defineWidget("dojo.widgets","DojoContextMenu","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoMenuItem");
dojo.require("dijit.Menu");
},"createDojoWidget":function(){
var _1=[];
for(var i=0;i<this.targets.length;i++){
_1[i]=this.targets[i].eze$$DOMElement;
}
this._mergeArgs({targetNodeIds:_1});
if(this.id){
this._args.id=this.id;
}
this.dojoWidget=new dijit.Menu(this._args);
this.dojoMenu=this.dojoWidget;
if(this.children){
this.setChildren(this.children);
}
this.dojoWidget.startup();
},"destroyAtRender":function(){
if(this.dojoWidget){
var _3=this.dojoWidget;
dojo.forEach(this.dojoWidget.targetNodeIds,function(_4){
_3.unBindDomNode(_4);
});
dojo.forEach(this.dojoWidget.getChildren(),function(_5){
if(_5._wrapperWidget){
_5._wrapperWidget.destroy();
}
});
dijit.registry.remove(this.dojoWidget.id);
this.dojoWidget=null;
}
try{
for(var n=0;n<this.children.length;n++){
var _7=this.children[n];
this.checkChildType(_7,n);
this.eze$$DOMElement.appendChild(_7.eze$$DOMElement);
}
}
catch(e){
}
egl.destroyDomElement(this.eze$$DOMElement);
},"_setEvent":function(_8,_9,_a){
if(_8=="focus"||_8=="blur"){
var _b=this;
this._args=this._args||{};
func=function(e){
_b.handleEvent(_b["getOn"+_9](),"on"+_9,e);
};
if(this.dojoWidget){
this.dojoWidget.set("on"+_a,func);
}else{
this._args["on"+_a]=func;
}
}else{
egl.dojo.widgets.DojoBase.prototype._setEvent.call(this,_8,_9,_a);
}
},"setTargets":function(_d){
this.targets=_d;
this.renderWhenDojoIsDoneLoading();
},"getTargets":function(){
return this.targets;
},"setChildren":function(_e){
if(this.dojoWidget&&_e){
this.removeChildren();
for(var n=0;n<_e.length;n++){
var _10=_e[n];
if(_10.dojoWidget){
this.dojoMenu.addChild(_10.dojoWidget);
}else{
_10.eze$$menuParent=this;
_10.render();
}
}
}
this.children=_e;
},"removeChildren":function(){
this.children=[];
if(this.dojoMenu&&this.dojoMenu.containerNode.children.length>0){
var _11=this.dojoMenu.containerNode;
while(_11.children.length>0){
_11.removeChild(_11.firstChild);
}
}
},"setBiDiMarkers":function(){
if(this.text){
var _12=this.getTextLayout()=="Visual";
var _13=this.getReverseTextDirection()=="Yes";
this.text=this.setBiDiMarkersStr(this.text,_12,_13);
}
egl.dojo.widgets.DojoContainer.prototype.setBiDiMarkers.call(this);
}});
