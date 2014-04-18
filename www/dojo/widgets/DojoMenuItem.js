egl.defineWidget("dojo.widgets","DojoMenuItem","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoMenu");
dojo.require("dijit.PopupMenuItem");
dojo.require("dijit.MenuItem");
},"createDojoWidget":function(_1){
var _2=this;
if(this.children&&this.children.length){
this._mergeArgs({label:this.text,disabled:this.disabled,popup:(new dijit.Menu())});
if(this.id){
this._args.id=this.id;
}
this.dojoWidget=new dijit.PopupMenuItem(this._args);
this.popupNode=this.dojoWidget.popup.domNode;
}else{
if(this.text){
this._mergeArgs({label:this.text,id:this.id||"egl.dojoMenuItem"+(++egl._dojoSerial),iconClass:this.iconClass||"",disabled:this.disabled||false});
this.dojoWidget=new dijit.MenuItem(this._args);
}else{
if(this.id){
this._args.id=this.id;
}
this.dojoWidget=new dijit.MenuSeparator(this._args);
}
}
if(this.eze$$menuParent){
this.eze$$menuParent.dojoMenu.addChild(this.dojoWidget);
}
if(this.children&&this.children.length){
this.setChildren(this.children);
}
},"createChildMenu":function(_3){
var _4=this.dojoWidget.getParent(),_5=_4.getIndexOfChild(this.dojoWidget);
_4.removeChild(this.dojoWidget);
var _6=this.dojoWidget.id;
this.dojoWidget.destroy();
var _7=new dijit.PopupMenuItem({id:_6,label:this.text,disabled:this.disabled,popup:(new dijit.Menu())});
if(this.popupNode&&this.popupNode.parentNode){
this.popupNode.parentNode.removeChild(this.popupNode);
}
if(_5>=0){
_4.addChild(_7,_5);
}else{
_4.addChild(_7);
}
if(_3){
_7.popup.domNode.parentNode.removeChild(_7.popup.domNode);
_7.set("popup",_3);
this.popupNode=_7.popup.domNode;
}
var _8=this.eze$$DOMElement;
egl.destroyDomElement(_8);
_8.eze$$widget=null;
for(var i=egl.elements.length-1;i>=0;i--){
if(egl.elements[i]==_8){
egl.elements.splice(i,1);
break;
}
}
this.eze$$DOMElement=_7.domNode;
this.dojoWidget=_7;
},"destroyAtRender":function(){
if(this.dojoWidget){
if(this.logicalParent&&this.logicalParent.dojoMenu&&this.logicalParent.dojoMenu.containerNode){
this.logicalParent.dojoMenu.containerNode.removeChild(this.eze$$DOMElement);
this.eze$$menuParent=this.logicalParent;
}
this.dojoWidget.destroy();
}
dijit.registry.remove(this.id);
egl.destroyDomElement(this.eze$$DOMElement);
},"destroy":function(){
if(this.popupNode&&this.popupNode.parentNode){
this.popupNode.parentNode.removeChild(this.popupNode);
}
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"setChildren":function(_a){
var _b=[],n=0;
if(_a&&_a.length>0){
while(n<_a.length){
_b[n]=_a[n];
++n;
}
}
var _d=this.children;
this.children=_b;
if(this.dojoWidget){
if(!_d||_d.length<=0){
this.render();
return;
}
var _e={message:"A popup menu requires exactly one child, which has to be of type dojo.widgets.DojoMenu"};
if(_b==null||_b.length==0){
this.showError("dojo.widgets.DojoMenu","DojoMenuItem",null,"getSubMenu",_e);
}else{
if(this.children[0].eze$$typename!="DojoMenu"){
this.showError("dojo.widgets.DojoMenu","DojoMenuItem",this.children[0],"getSubMenu",_e);
}
}
this.removeChildren();
if(this.children&&this.children[0]){
this.children[0].logicalParent=this;
if(this.children[0].dojoMenu){
this.createChildMenu(this.children[0].dojoMenu);
}else{
this.children[0].eze$$menuParent=this;
}
}else{
this.createChildMenu();
}
}
},"setText":function(_f){
var _10=this.text;
this.text=_f;
if(this.dojoWidget){
if(_10||(this.children&&this.children.length>0)){
this.dojoWidget.set("label",_f);
}else{
this.render();
}
}
},"getText":function(){
if(this.text.charAt(0)>=egl.LRE&&this.text.charAt(0)<=egl.RLO){
return this.text.substring(1);
}
return egl.dojo.widgets.DojoBase.prototype.getText.call(this);
},"setDisabled":function(_11){
this.disabled=_11;
if(this.dojoWidget){
this.dojoWidget.setDisabled(_11);
}
},"getDisabled":function(){
return this.disabled;
},"setBiDiMarkers":function(_12,_13){
var _14=_12=="Visual";
var _15=_13=="Yes";
if(this.text){
this.text=this.setBiDiMarkersStr(this.text,_14,_15);
}
}});
