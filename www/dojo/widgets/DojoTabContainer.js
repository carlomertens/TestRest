egl.defineWidget("dojo.widgets","DojoTabContainer","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoContentPane");
this.width=800;
this.height=450;
dojo.require("dijit.layout.StackContainer");
dojo.require("dijit.layout.TabContainer");
dojo.require("dijit.layout.ContentPane");
var _1=dijit.layout._TabContainerBase.layout;
dijit.layout._TabContainerBase.layout=function(){
if(!this.tablist||!this.tablistSpacer||!this.containerNode){
return;
}
_1();
};
this.selectedChild=-1;
},"createDojoWidget":function(_2){
this.dojoID="egl.DojoTabContainer"+(++egl._dojoSerial);
if(this._id==null){
this._id=this.dojoID;
}
this._mergeArgs({tabPosition:this.getDojoTabPosition(),doLayout:true,id:this.id||(this._id||this.dojoID),style:"width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)});
var _3=_2.style.visibility;
this.dojoWidget=new dijit.layout.TabContainer(this._args,_2);
_2.style.visibility=_3;
this.dojoWidget.startup();
this.addEventHandlers();
if(this.selectedChild!=-1){
this.setSelection(this.selectedChild);
}
},"destroyAtRender":function(){
if(this.dojoWidget&&this.dojoWidget.tablist){
try{
this.dojoWidget.tablist.destroyRecursive();
}
catch(e){
}
}
egl.dojo.widgets.DojoContainer.prototype.destroyAtRender.call(this);
},"destroy":function(){
dojo.unsubscribe(this.selectSubscription);
dojo.unsubscribe(this.removeSubscription);
try{
this.dojoWidget.tablist.destroyRecursive();
}
catch(e){
}
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"addChild":function(_4,_5){
egl.dojo.widgets.DojoContainer.prototype.addChild.call(this,_4);
},"addEventHandlers":function(){
var _6=this;
this.selectSubscription=dojo.subscribe(this.dojoID+"-selectChild",function(_7){
if(_6.eze$$ready){
_6.selection=_6.getChildIndex(_7)+1;
_6.handleEvent(_6.getOnTabSelected(),"onTabSelected",null);
}
});
this.removeSubscription=dojo.subscribe(this.dojoID+"-removeChild",function(_8){
if(_6.eze$$ready){
var _9=_6.getChildIndex(_8);
_6.selection=_9+1;
_6.children.splice(_9,1);
_6.handleEvent(_6.getOnTabRemoved(),"onTabRemoved",null);
}
});
},"getDojoTabPosition":function(){
if(this.tabPosition=="top"){
return "top-h";
}
if(this.tabPosition=="bottom"){
return "bottom-h";
}
if(this.tabPosition=="right"){
return "right-h";
}
return "left-h";
},"getTabPosition":function(){
if(this.dojoWidget){
return this.dojoWidget.get("tabPosition");
}else{
return this.tabPosition||"top";
}
},"setTabPosition":function(_a){
this.tabPosition=_a;
if(this.dojoWidget){
this.dojoWidget.set("tabPosition",this.getDojoTabPosition());
}
},"getSelection":function(){
return this.selection;
},"setSelection":function(_b){
var _c=this;
this.selectedChild=_b;
setTimeout(function(){
if(_c.dojoWidget){
var _d=_c.dojoWidget.getChildren();
if(_b>0&&_b<=_d.length){
_c.selection=_b;
_c.dojoWidget.selectChild(_d[_b-1]);
}
}
},1);
},"getOnTabSelected":function(){
return this.onTabSelected||(this.onTabSelected=[]);
},"getOnTabAdded":function(){
return this.onTabAdded||(this.onTabAdded=[]);
},"getOnTabRemoved":function(){
return this.onTabRemoved||(this.onTabRemoved=[]);
},"setOnTabSelected":function(){
throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers;
},"removeTab":function(_e){
if(_e<1||undefined==this.children||this.children.length<1||_e>this.children.length){
return;
}
this.children.splice(_e-1,1);
egl.dojo.widgets.DojoContainer.prototype.setChildren.call(this,this.children);
if(_e<this.selection){
this.selection-=1;
}else{
if(_e==this.selection){
this.selection=1;
}
}
}});
