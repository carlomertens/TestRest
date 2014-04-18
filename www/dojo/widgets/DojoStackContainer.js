egl.defineWidget("dojo.widgets","DojoStackContainer","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoContentPane");
this.contrBox=null;
this.width=800;
this.height=450;
dojo.require("dijit.layout.StackContainer");
dojo.require("dijit.layout.ContentPane");
this.selectedChild=-1;
},"createDojoWidget":function(_1){
this.dojoID="egl.DojoStackContainer"+(++egl._dojoSerial);
this._mergeArgs({id:this.id||this.dojoID,style:"width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)});
this.dojoWidget=new dijit.layout.StackContainer(this._args,_1);
if(this.controller){
this.contrBox=new dijit.layout.StackController({containerId:this.dojoID},this.controller.eze$$DOMElement);
this.contrBox.startup();
}
this.dojoWidget.startup();
this.addEventHandlers();
if(this.selectedChild!=-1){
this.setSelection(this.selectedChild);
}
},"previousStack":function(){
this.dojoWidget.back();
},"nextStack":function(){
this.dojoWidget.forward();
},"copyStyle":function(_2){
egl.dojo.widgets.DojoBase.prototype.copyStyle.call(this,_2);
},"addChild":function(_3,_4){
egl.dojo.widgets.DojoContainer.prototype.addChild.call(this,_3);
},"destroy":function(){
dojo.unsubscribe(this.selectSubscription);
dojo.unsubscribe(this.removeSubscription);
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"addEventHandlers":function(){
var _5=this;
this.selectSubscription=dojo.subscribe(this.dojoID+"-selectChild",function(_6){
if(_5.eze$$ready){
_5.selection=_5.getChildIndex(_6)+1;
_5.handleEvent(_5.getOnStackSelected(),"onStackSelected",null);
}
});
this.removeSubscription=dojo.subscribe(this.dojoID+"-removeChild",function(_7){
if(_5.eze$$ready){
var _8=_5.getChildIndex(_7);
_5.selection=_8+1;
_5.children.splice(_8,1);
_5.handleEvent(_5.getOnStackRemoved(),"onStackRemoved",null);
}
});
},"notifyListeners":function(_9,_a,_b){
for(var n=0;n<_a.length;n++){
try{
_a[n]({widget:_9});
}
catch(e){
egl.printError("DojoStackContainer: event handler for "+_b+" failed.",e);
}
}
},"getDojoStackPosition":function(){
if(this.StackPosition=="top"||this.StackPosition=="bottom"){
return this.StackPosition;
}
if(this.StackPosition=="right"){
return "right-h";
}
return "left-h";
},"getSelection":function(){
return this.selection;
},"setSelection":function(_d){
var _e=this;
this.selectedChild=_d;
setTimeout(function(){
if(_e.dojoWidget){
var _f=_e.dojoWidget.getChildren();
if(_d>0&&_d<=_f.length){
_e.selection=_d;
_e.dojoWidget.selectChild(_f[_d-1]);
}
}
},1);
},"getOnStackSelected":function(){
return this.onStackSelected||(this.onStackSelected=[]);
},"getOnStackAdded":function(){
return this.onStackAdded||(this.onStackAdded=[]);
},"getOnStackRemoved":function(){
return this.onStackRemoved||(this.onStackRemoved=[]);
},"setOnStackSelected":function(){
throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers;
}});
