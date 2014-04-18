egl.defineWidget("dojo.widgets","DojoTextBase","dojo.widgets","DojoBase","div",{"_setCommonProp":function(){
this._args=this._args||{};
if(typeof (this.value)=="string"){
this._args.value=this.value||"";
}
if(typeof (this.maxLength)=="number"&&this.maxLength>0){
this._args.maxLength=this.maxLength;
}
this._args.selectOnClick=this.selectOnClick||false;
this._args.disabled=this.disabled||false;
this._args.readOnly=this.readOnly||false;
if(typeof (this.placeHolder)=="string"){
this._args.placeHolder=this.placeHolder;
}
if(typeof (this.textCase)=="string"){
switch(this.textCase){
case ("upper"):
this._args.uppercase=true;
break;
case ("lower"):
this._args.lowercase=true;
break;
case ("proper"):
this._args.propercase=true;
break;
}
}
this._args.trim=this.trim||false;
var _1=this;
this._args.onChange=function(){
_1.handleEvent(_1.getOnChange(),"onChange",null);
};
this._args.onFocus=function(){
_1.selectionEnabled=egl.egl.ui.rui.RUILib["$inst"].getTextSelectionEnabled();
egl.egl.ui.rui.RUILib["$inst"].setTextSelectionEnabled(true);
_1.handleEvent(_1.getOnFocusGained(),"onFocusGained",null);
};
this._args.onBlur=function(){
egl.egl.ui.rui.RUILib["$inst"].setTextSelectionEnabled(_1.selectionEnabled);
_1.handleEvent(_1.getOnFocusLost(),"onFocusLost",null);
};
},"setText":function(_2){
this.value=_2;
if(this.dojoWidget){
this.dojoWidget.set("value",_2);
}
},"getText":function(){
if(this.dojoWidget){
this.value=this.dojoWidget.get("value");
}
return this.value?(""+this.value):"";
},"setMaxLength":function(_3){
this.maxLength=_3;
if(this.dojoWidget){
this.dojoWidget.set("maxLength",_3);
}
},"getMaxLength":function(){
return this.maxLength||-1;
},"setSelectOnClick":function(_4){
this.selectOnClick=_4;
if(this.dojoWidget){
this.dojoWidget.set("selectOnClick",_4);
}
},"isSelectOnClick":function(){
return this.selectOnClick||false;
},"setDisabled":function(_5){
this.disabled=_5;
if(this.dojoWidget){
this.dojoWidget.set("disabled",_5);
}
},"isDisabled":function(){
return this.disabled||false;
},"getDisabled":function(){
return this.isDisabled();
},"setReadOnly":function(_6){
this.readOnly=_6;
if(this.dojoWidget){
this.dojoWidget.set("readOnly",_6);
}
},"isReadOnly":function(){
return this.readOnly||false;
},"getReadOnly":function(){
return this.isReadOnly();
},"setPlaceHolder":function(_7){
this.placeHolder=_7;
if(this.dojoWidget){
this.dojoWidget.set("placeHolder",_7);
}
},"getPlaceHolder":function(){
return this.placeHolder;
},"setTextCase":function(_8){
this.textCase=_8;
if(this.dojoWidget){
this.dojoWidget.set("uppercase",false);
this.dojoWidget.set("lowercase",false);
this.dojoWidget.set("propercase",false);
switch(_8){
case ("upper"):
this.dojoWidget.set("uppercase",true);
break;
case ("lower"):
this.dojoWidget.set("lowercase",true);
break;
case ("proper"):
this.dojoWidget.set("propercase",true);
break;
}
this.dojoWidget._setValueAttr(this.dojoWidget.get("value"),true);
}
},"getTextCase":function(){
return this.textCase;
},"setTrim":function(_9){
this.trim=_9;
if(this.dojoWidget){
this.dojoWidget.set("trim",_9);
}
},"isTrim":function(){
return this.trim||false;
},"getTrim":function(){
return this.isTrim();
}});
