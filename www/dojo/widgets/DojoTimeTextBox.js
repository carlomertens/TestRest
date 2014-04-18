egl.defineWidget("dojo.widgets","DojoTimeTextBox","dojo.widgets","DojoValidationBase","div",{"constructor":function(){
dojo.require("dijit.form.TimeTextBox");
var _1=this;
this.timePattern="hh:mm a";
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
},"createDojoWidget":function(_2){
var _3=this;
this._mergeArgs({id:this.id||"egl.DojoTimeTextBox"+(++egl._dojoSerial),type:"text",selector:"time"});
this._setCommonProp();
this.dojoWidget=new dijit.form.TimeTextBox(this._args,_2);
this.dojoWidget.constraints.visibleIncrement=this.visibleIncrement||"T01:00";
this.dojoWidget.constraints.timePattern=this.timePattern;
this.dojoWidget.constraints.clickableIncrement=this.clickableIncrement||"T00:15";
this.dojoWidget.constraints.visibleRange=this.visibleRange||"T03:00";
this.setValidators(this.validators);
this._setTextboxStyle();
this.dojoWidget.startup();
if(this.time){
this.setValue(this.time);
}
},"setValue":function(_4){
this.time=_4;
if(this.dojoWidget){
if(_4){
this.dojoWidget.set("displayedValue",this.convertEGLTimeToDojoTime(_4));
}else{
this.dojoWidget.set("displayedValue","");
}
}
},"convertEGLTimeToDojoTime":function(_5){
return egl.egl.core.$StrLib.formatTime(_5,this.timePattern);
},"getValue":function(){
if(this.dojoWidget){
if(this.dojoWidget.getValue()!=null){
this.time=this.dojoWidget.getValue();
}
var _6=this.time;
try{
var s=""+this.twoDigits(_6.getHours())+this.twoDigits(_6.getMinutes())+this.twoDigits(_6.getSeconds());
return egl.egl.core.$DateTimeLib.timeValue(s);
}
catch(e){
egl.printError("Cannot convert time "+_6,e);
}
}else{
return this.time||egl.egl.core.$DateTimeLib.timeValue("000000");
}
},"setText":function(_8){
this.setValueAsText(_8);
},"getText":function(){
return (this.getValueAsText());
},"twoDigits":function(_9){
_9=parseInt(_9);
return ""+(_9<10?"0":"")+_9;
},"setTimePattern":function(_a){
this.timePattern=_a;
if(this.dojoWidget){
this.dojoWidget.constraints.timePattern=_a;
this.dojoWidget.set("displayedValue",this.convertEGLTimeToDojoTime(this.time));
}
},"getTimePattern":function(){
return this.timePattern;
},"setClickableIncrement":function(_b){
this.clickableIncrement=_b;
if(this.dojoWidget){
this.dojoWidget.constraints.clickableIncrement=_b;
}
},"getClickableIncrement":function(){
return this.clickableIncrement;
},"setVisibleIncrement":function(_c){
this.visibleIncrement=_c;
if(this.dojoWidget){
this.dojoWidget.constraints.visibleIncrement=_c;
}
},"getVisibleIncrement":function(){
return this.visibleIncrement;
},"setVisibleRange":function(_d){
this.visibleRange=_d;
if(this.dojoWidget){
this.dojoWidget.constraints.visibleRange=_d;
}
},"getVisibleRange":function(){
return this.visibleRange;
},"getValueAsText":function(){
if(this.dojoWidget){
if(this.dojoWidget.getValue()!=null){
this.time=this.dojoWidget.getValue();
}
try{
var _e=egl.egl.core.$DateTimeLib.timeOf(this.time);
return (egl.egl.core.$StrLib.formatTime(_e));
}
catch(e){
egl.printError("Cannot convert date "+date,e);
}
}else{
return this.time||egl.egl.core.$DateTimeLib.timeValue("000000");
}
},"setValueAsText":function(_f){
this.setValue(egl.egl.core.$DateTimeLib.timeValue(_f));
}});
