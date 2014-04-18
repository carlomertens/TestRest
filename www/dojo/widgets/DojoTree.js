egl.defineWidget("dojo.widgets","DojoTree","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoTreeNode");
dojo.require("dijit.Tree");
dojo.require("dojo.data.ItemFileWriteStore");
this.eglNodes={};
this.showRoot=true;
},"createDojoWidget":function(_1){
var _2=this;
this.dojoID="egl.DojoTree"+(++egl._dojoSerial);
this._mergeArgs({id:this.id||this.dojoID,model:this.getModel(),showRoot:this.showRoot,_createTreeNode:function(_3){
var _4=_2.eglNodes[_3.item.id];
var _5;
if(_4&&_3.item&&!_3.item.root){
if(_4.dojoWidget){
return _4.dojoWidget;
}
var _6=_4.eze$$DOMElement.style;
_4._mergeArgs(_3);
_4._args.getParent=function(){
var _7=this.domNode?dijit.getEnclosingWidget(this.domNode.parentNode):null;
return _7&&_7.isContainer?_7:null;
};
_5=new dijit._TreeNode(_4._args);
_4.dojoWidget=_5;
_5.set("id",_4.id);
_4.render();
_4.copyStyle(_6);
}else{
if(!_3.item.root){
egl.printError("DojoTree \""+child.id+"\" Cannot create.");
}else{
_5=new dijit._TreeNode(_3);
}
}
return _5;
}});
this._args.onClick=function(_8,_9,e){
_2.selection=_8.id&&_8.id.length>0?_8.id[0]:_2.id;
_2.handleEvent(_2.getOnClick(),"onClick",e);
var _b=_9.domNode.eze$$widget;
if(_b&&_b.onClick){
_b.handleEvent(_b.getOnClick(),"onClick",e);
}
};
if(this.getWidgetOrientation()){
this._args.dir=this.getWidgetOrientation();
}
var _c={};
for(var _d in this._args){
_c[_d]=this._args[_d];
}
this.dojoWidget=new dijit.Tree(_c,_1);
if(this.textLayoutThis||this.reverseTextDirectionThis){
this.applyBiDiMarkersToWidgetText();
this.dojoWidget.rootNode.labelNode.innerHTML=this.text;
egl.dojo.widgets.DojoContainer.prototype.setBiDiMarkers.call(this);
}
setTimeout(egl.startVEWidgetTimer,2000);
this.dojoWidget.startup();
},"getStore":function(){
if(!this.store){
this.setModel();
}
return this.store;
},"getModel":function(){
if(!this.model){
this.setModel();
}
return this.model;
},"setModel":function(){
var _e={identifier:"id",label:"text",items:this.getModelData()};
this.store=new dojo.data.ItemFileWriteStore({data:_e});
this.model=new dijit.tree.ForestStoreModel({store:this.store,rootLabel:this.text});
},"setChildren":function(_f){
egl.egl.ui.rui.Widget.prototype.removeChildren.call(this);
this.children=_f;
this.store=null;
this.model=null;
this.renderWhenDojoIsDoneLoading();
},"removeChildren":function(){
this.setChildren([]);
},"appendChild":function(_10){
if(_10){
_10.eze$$parent=this;
_10.setTree(this);
var _11=this;
this.getStore().fetchItemByIdentity({identity:_11.id,onItem:function(_12){
try{
_11.getModel().newItem(_10.getItemOnly(),_12);
_11.store.save();
}
catch(e){
egl.printError("Cannot add TreeNode \""+_10.id+"\" to \""+_11.id+"\". Duplicate node is not allowed.",e);
}
},onFail:function(){
egl.printError("Cannot add TreeNode \""+_10.id+"\" to \""+_11.id+"\". Duplicate node is not allowed.");
}});
this.children.appendElement(_10);
if(_10.children&&_10.children.length){
for(var i=0;i<_10.children.length;i++){
var _14=_10.children[i];
_10.appendChild(_14);
}
}
}
},"getIndex":function(_15){
if(this.children){
for(var i=0;i<this.children.length;i++){
if(_15.id==this.children[i].id){
return i+1;
}
}
return -1;
}
},"removeChild":function(_17){
if(_17){
if(_17.children&&_17.children.length>0){
var _18=_17.children.length;
for(var i=_18-1;i>=0;i--){
var _1a=_17.children[i];
_17.removeChild(_1a,_17.getIndex(_1a));
}
}
this.children.removeElement(this.getIndex(_17));
var _1b=this;
this.getStore().fetchItemByIdentity({identity:_17.id,onItem:function(_1c){
try{
_1b.store.deleteItem(_1c);
_1b.store.save();
}
catch(e){
e.message="Cannot remove DojoTreeNode \""+_17.id+"\" from \""+_1b.id+"\"";
egl.printError("Invalid argument to DojoTreeNode.removeChild",e);
}
}});
}
},"getElementById":function(id){
var _1e=null;
this.getStore().fetchItemByIdentity({identity:id,onItem:function(_1f){
_1e=_1f;
}});
if(_1e){
return this.eglNodes[id];
}
return null;
},"getModelData":function(){
var _20=[];
for(var n=0;n<this.children.length;n++){
var _22=this.children[n];
_22.setTree(this);
_20.push(_22.getItem());
}
return _20;
},"setText":function(_23){
this.text=_23;
this.applyBiDiMarkersToWidgetText();
if(this.dojoWidget){
this.getModel().rootLabel=_23;
this.dojoWidget.rootNode.set("label",_23);
}
},"isShowRoot":function(_24){
return this.showRoot;
},"setShowRoot":function(_25){
this.showRoot=_25;
if(this.dojoWidget){
this.render();
}
}});
