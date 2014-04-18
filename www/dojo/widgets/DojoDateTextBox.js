egl.defineWidget("dojo.widgets","DojoDateTextBox","dojo.widgets","DojoValidationBase","div",{"constructor":function(){
dojo.require("dijit.form.DateTextBox");
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
},"createDojoWidget":function(_2){
var _3=this;
var _4=this.getWidgetOrientation();
if(!_4){
_4=null;
}
this._mergeArgs({id:this.id||"ddtb"+(++egl._dojoSerial),type:"text",method:"post",onMouseOver:function(){
_3.selectionEnabled=egl.egl.ui.rui.RUILib["$inst"].getTextSelectionEnabled();
egl.egl.ui.rui.RUILib["$inst"].setTextSelectionEnabled(true);
},onMouseOut:function(){
egl.egl.ui.rui.RUILib["$inst"].setTextSelectionEnabled(_3.selectionEnabled);
},dir:_4});
this._setCommonProp();
this.dojoWidget=new dijit.form.DateTextBox(this._args,_2);
this.setConstraints(this.constraints);
this.dojoWidget.constraints.formatLength=this.formatLength||"short";
this.setValidators(this.validators);
this._setTextboxStyle();
this.dojoWidget.startup();
if(this.date){
this.setValue(this.date);
}
},"clear":function(){
if(this.dojoWidget){
this.dojoWidget.setDisplayedValue("");
}
},"setValue":function(_5){
this.date=_5;
if(this.dojoWidget){
this.dojoWidget.set("value",_5);
}
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.get("value");
}else{
return this.date;
}
},"setConstraints":function(_6){
this.constraints=_6;
if(this.dojoWidget){
if(!(this.dojoWidget.constraints)){
this.dojoWidget.constraints={};
}
if(_6.min){
this.dojoWidget.constraints.min=_6.min.eze$$value;
}
if(_6.max){
this.dojoWidget.constraints.max=_6.max.eze$$value;
}
}
},"setFormatLength":function(_7){
this.formatLength=_7;
if(this.dojoWidget){
var _8=this.dojoWidget.get("value");
this.dojoWidget.constraints.formatLength=_7;
this.dojoWidget.set("value",_8);
}
},"getFormatLength":function(){
return this.formatLength;
},"getText":function(){
return egl.egl.core.$StrLib.formatDate(this.getValue());
},"setText":function(_9){
this.setValue(egl.egl.core.$DateTimeLib.dateValue(_9));
},"getValueAsText":function(){
var _a=this.getValue();
return _a?egl.egl.core.$StrLib.formatDate(_a):"";
},"setValueAsText":function(_b){
this.setValue(_b?egl.egl.core.$DateTimeLib.dateValue(_b):null);
}});
