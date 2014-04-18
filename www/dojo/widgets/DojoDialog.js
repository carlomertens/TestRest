egl.defineWidget("dojo.widgets","DojoDialog","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.content=egl.createElement("div");
this.content.height="auto";
this.draggable=true;
this.isOpen=false;
dojo.require("dijit.Dialog");
},"createDojoWidget":function(_1){
this.dojoID="egl.DojoDialog_"+(++egl._dojoSerial);
for(var n=0;n<this.children.length;n++){
this.content.appendChild(this.children[n].eze$$DOMElement);
}
var c=[this.content];
if(this.buttons!=null){
var _4=document.createElement("div");
_4.className="dijitDialogPaneActionBar";
for(var n=0;n<this.buttons.length;n++){
_4.appendChild(this.buttons[n].eze$$DOMElement);
}
c.push(_4);
}
var _5=this;
this._mergeArgs({title:this.title||"",id:this.id||this.dojoID,draggable:this.draggable,content:c,onCancel:function(){
_5.handleEvent(_5.getOnClose(),"onClose",null);
}});
this.dojoWidget=new dijit.Dialog(this._args,_1);
this.dojoWidget.startup();
if(this.isOpen){
this.showDialog();
}
},"destroy":function(){
var _6=this.children;
if(egl.IE&&_6){
for(var i=_6.length-1;i>=0;i--){
egl.destroyWidget(_6[i]);
}
}
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"getOnClose":function(){
return this.onClose||(this.onClose=[]);
},"setOnClose":function(){
throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers;
},"getButtons":function(){
return this.buttons;
},"setButtons":function(_8){
this.buttons=_8;
},"copyStyle":function(_9){
for(f in _9){
if(_9[f]!=""){
try{
this.content.style[f]=_9[f];
}
catch(e){
}
}
}
if(this.width){
egl.setWidth(this.dojoWidget.domNode,egl.toPX(this.width));
}
if(this.height){
egl.setHeight(this.dojoWidget.domNode,egl.toPX(this.height));
}
},"setChildren":function(_a){
this.children=_a;
},"removeChildren":function(){
while(this.content.firstChild){
this.content.removeChild(this.content.firstChild);
}
},"showDialog":function(){
this.isOpen=true;
if(this.dojoWidget){
this.dojoWidget.show();
}else{
this.renderWhenDojoIsDoneLoading();
}
},"hideDialog":function(){
this.isOpen=false;
if(this.dojoWidget){
this.dojoWidget.hide();
}else{
this.renderWhenDojoIsDoneLoading();
}
},"setVisible":function(_b){
egl.dojo.widgets.DojoContainer.prototype.setVisible.call(this,_b);
if(this.dojoWidget){
if(_b){
this.content.style.visibility="";
}else{
this.content.style.visibility="hidden";
}
this.dojoWidget.domNode.style.visibility="";
}
},"getVisible":function(){
if(this.dojoWidget){
return this.content.style.visibility=="hidden"?false:true;
}else{
return egl.dojo.widgets.DojoContainer.prototype.getVisible.call(this);
}
}});
