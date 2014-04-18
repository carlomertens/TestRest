egl.defineWidget("dojo.widgets","DojoAccordionContainer","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoContentPane");
this.selection=1;
this.duration=250;
this.width=800;
this.height=450;
dojo.require("dijit.layout.StackContainer");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dijit.layout.ContentPane");
this.selection=-1;
},"createDojoWidget":function(_1){
this.dojoID="egl.DojoAccordianContainer"+(++egl._dojoSerial);
this._mergeArgs({duration:this.duration,doLayout:true,id:this.id||this.dojoID,style:"width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)});
this.dojoWidget=new dijit.layout.AccordionContainer(this._args,_1);
this.dojoWidget.startup();
this.addEventHandlers();
if(this.selection!=-1){
this.setSelection(this.selection);
}
},"copyStyle":function(_2){
if(egl.IE&&egl.IEVersion<9){
cssText=this.dojoWidget.domNode.style.cssText;
var _3=cssText.split(";");
for(var i=_3.length-1;i>=0;i--){
var _5=_3[i].replace(/^\s+|\s+$/g,"").substring(0,6).toLowerCase();
if(_5=="border"){
_3[i]=_3[i]+" !important";
}
}
cssText=_3.join(";");
this.dojoWidget.domNode.style.cssText=cssText;
}
},"destroy":function(){
dojo.unsubscribe(this.subscription);
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"resize":function(_6,_7){
if(this.dojoWidget){
if(_6){
this.setHeight(_6);
}
if(_7){
this.setWidth(_7);
}
this.dojoWidget.resize();
}
},"addChild":function(_8,_9){
egl.dojo.widgets.DojoContainer.prototype.addChild.call(this,_8);
},"addEventHandlers":function(){
var _a=this;
this.subscription=dojo.subscribe(this.getID()+"-selectChild",function(_b){
if(_a.eze$$ready){
_a.selection=_a.getChildIndex(_b)+1;
_a.handleEvent(_a.getOnTabSelected(),"onTabSelected",null);
}
});
},"setBorderColor":function(_c){
this._setImportantStyle("border-color",egl.toPX(_c));
},"setBorderWidth":function(_d){
this._setImportantStyle("border-width",egl.toPX(_d));
},"setBorderTopWidth":function(_e){
this._setImportantStyle("border-top-width",egl.toPX(_e));
},"setBorderRightWidth":function(_f){
this._setImportantStyle("border-right-width",egl.toPX(_f));
},"setBorderLeftWidth":function(_10){
this._setImportantStyle("border-left-width",egl.toPX(_10));
},"setBorderBottomWidth":function(_11){
this._setImportantStyle("border-bottom-width",egl.toPX(_11));
},"setBorderStyle":function(_12){
this._setImportantStyle("border-style",_12);
},"setBorderTopStyle":function(_13){
this._setImportantStyle("border-top-style",_13);
},"setBorderRightStyle":function(_14){
this._setImportantStyle("border-right-style",_14);
},"setBorderLeftStyle":function(_15){
this._setImportantStyle("border-left-style",_15);
},"setBorderBottomStyle":function(_16){
this._setImportantStyle("border-bottom-style",_16);
},"_setImportantStyle":function(_17,_18){
this.eze$$DOMElement.style.cssText=this.eze$$DOMElement.style.cssText+";"+_17+":"+_18+" !important";
},"getSelection":function(){
return this.selection;
},"setSelection":function(_19){
var _1a=this;
this.selection=_19;
setTimeout(function(){
if(_1a.dojoWidget){
var _1b=_1a.dojoWidget.getChildren();
if(_19>0&&_19<=_1b.length){
_1a.selection=_19;
_1a.dojoWidget.selectChild(_1b[_19-1]);
}
}
},1);
},"getOnTabSelected":function(){
return this.onTabSelected||(this.onTabSelected=[]);
},"setOnTabSelected":function(){
throw egl.egl.ui.rui.Widget.ErrorMessageForEventHandlers;
}});
