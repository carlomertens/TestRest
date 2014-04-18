egl.defineWidget("dojo.widgets","DojoValidationBase","dojo.widgets","DojoTextBase","div",{"_setCommonProp":function(){
egl.dojo.widgets.DojoTextBase.prototype._setCommonProp.call(this);
var _1=this;
this._args=this._args||{};
if(typeof (this.promptMessage)=="string"){
this._args.promptMessage=this.promptMessage;
}
if(typeof (this.invalidMessage)=="string"){
this._args.invalidMessage=this.invalidMessage;
}else{
this.invalidMessage="$_unset_$";
}
if(typeof (this.missingMessage)=="string"){
this._args.missingMessage=this.missingMessage;
}
if(this.tooltipPosition){
this._args.tooltipPosition=this.tooltipPosition;
}
this._args.required=this.required===undefined?true:this.required;
this.constraints=this.constraints||[];
this.validators=this.validators||[];
this._args._refreshState=function(){
if(_1.controllerMsg){
_1.controllerMsg="";
}else{
this.validate(this._focused);
}
};
},"setID":function(id){
if(id){
this._setProperty("id","id",id);
this.eze$$DOMElement.id="widget_"+id;
}
},"getID":function(){
return this._getProperty("id","id");
},"_setTextboxStyle":function(){
if(egl.IE&&egl.IEVersion<=7&&this.fontWeight){
this.setFontWeight(this.fontWeight);
}
if(egl.IE&&egl.IEVersion==8&&this.opacity){
this.setOpacity(this.opacity);
}
},"setFontWeight":function(_3){
egl.egl.ui.rui.Widget.prototype.setFontWeight.call(this,_3);
this.fontWeight=_3;
if(egl.IE&&egl.IEVersion<=7&&this.dojoWidget){
this.dojoWidget.textbox.style.fontWeight=_3;
}
},"setOpacity":function(_4){
egl.egl.ui.rui.Widget.prototype.setOpacity.call(this,_4);
this.opacity=_4;
if(egl.IE&&egl.IEVersion==8&&this.dojoWidget){
this.dojoWidget.textbox.style.opacity=_4;
this.dojoWidget.textbox.style.filter=(_4>=0.9)?"''":"alpha(opacity="+(100*_4)+")";
}
},"setPromptMessage":function(_5){
this.promptMessage=_5;
if(this.dojoWidget){
this.dojoWidget.set("promptMessage",_5);
}
},"getPromptMessage":function(){
return this.promptMessage||"";
},"_setErrorMessage":function(_6){
if(this.dojoWidget){
this.dojoWidget.set("invalidMessage",_6);
}
},"setErrorMessage":function(_7){
this.invalidMessage=_7;
if(this.dojoWidget){
this.dojoWidget.set("invalidMessage",_7);
}
},"getErrorMessage":function(){
return this.invalidMessage||"";
},"setInputRequired":function(_8){
this.required=_8;
if(this.dojoWidget){
this.dojoWidget.set("required",_8);
}
},"isInputRequired":function(){
return this.required;
},"setInputRequiredMessage":function(_9){
this.missingMessage=_9;
if(this.dojoWidget){
this.dojoWidget.set("missingMessage",_9);
}
},"getInputRequiredMessage":function(){
return this.missingMessage||"";
},"setTooltipPosition":function(_a){
this.tooltipPosition=_a;
if(this.dojoWidget){
this.dojoWidget.set("tooltipPosition",_a);
}
},"getTooltipPosition":function(){
return this.tooltipPosition;
},"getValidState":function(){
if(this.dojoWidget&&!this.dojoWidget.isValid()){
var _b=this.dojoWidget.textbox.value;
if(this.dojoWidget._isEmpty(_b)&&this.dojoWidget.focused){
this.dojoWidget.state="Incomplete";
this.dojoWidget._maskValidSubsetError=true;
this.dojoWidget._setStateClass();
}else{
this.dojoWidget.state="Error";
this.dojoWidget._maskValidSubsetError=false;
this.dojoWidget._setStateClass();
return this.dojoWidget.getErrorMessage();
}
}
return null;
},"setConstraints":function(_c){
this.constraints=_c;
},"getConstraints":function(){
return this.constraints;
},"showErrorMessage":function(_d){
if(this.dojoWidget){
this.controllerMsg=_d;
var _e=this.dojoWidget._focused;
this.dojoWidget._focused=true;
this.dojoWidget.displayMessage(_d);
this.dojoWidget._focused=_e;
}
},"showErrorIndicator":function(_f){
if(this.dojoWidget){
if(_f){
this.dojoWidget.state="Error";
this.dojoWidget._setStateClass();
}else{
this.dojoWidget.state="";
this.dojoWidget._setStateClass();
}
}
},"setValidators":function(_10){
this.validators=_10;
if(this.dojoWidget){
var _11=this;
this.dojoWidget.set("validator",function(_12,_13){
var _14=_11.dojoWidget;
if(_14&&_14._isEmpty(_12)){
if(_14.required){
return false;
}else{
return true;
}
}
if(this.regExpGen&&!(new RegExp("^(?:"+this.regExpGen(_13)+")?$")).test(_12)){
if(_11.invalidMessage=="$_unset_$"){
_11.invalidMessage=_14.messages.invalidMessage;
}
_11._setErrorMessage(_11.invalidMessage);
return false;
}
this._maskValidSubsetError=false;
if(_11.validators.length>0&&!(_13 instanceof egl.egl.Dictionary)){
_13=_11.constraints;
}
for(var i=0;i<_11.validators.length;i++){
var _16=_11.validators[i](_12,_13);
if(_16){
_11._setErrorMessage(_16);
return false;
}
}
return true;
});
}
},"getValidators":function(){
return this.validators;
}});
