define(["dojo/_base/declare","dojo/has","dijit/form/FilteringSelect","./ComboBoxVisBidi"],function(_1,_2,_3,_4){
return _1("bidi.FilteringSelectVisBidi",[_4,_3],{validate:function(_5){
var _6=null;
var _7=false;
if(_2("ie")&&this.isVisualMode){
if(this.textbox.value.length>0&&(this.textbox.value.charAt(0)==this.LRO||this.textbox.value.charAt(0)==this.RLO)){
_6=this.textbox.value.charAt(0);
this.textbox.value=this.textbox.value.substring(1);
}
}
dijit.form.FilteringSelect.prototype.validate.apply(this,arguments);
if(_2("ie")&&_6){
this.textbox.value=_6+this.textbox.value;
}
},isValid:function(_8){
if(!((_2("ie")&&this.isVisualMode))){
return this.inherited(arguments);
}
var _9=this.store.data;
if(_9==null){
_9=this.store._itemsByIdentity;
}
if(_9==null){
_9=this.store._jsonData;
}
if(_9==null){
return true;
}
if(!this._hasBeenBlurred){
for(var k=0;k<_9.length;k++){
var _b=_9[k].name;
_b=this.bidiTransform(_b,"V"+this.dirChForBidiFormat+"YNN","I"+this.dirChForBidiFormat+"YNN");
if(_b==this.textbox.value){
return true;
}
}
}else{
for(var k=0;k<_9.length;k++){
var _b=_9[k].name;
if(_b==this.textbox.value){
return true;
}
}
}
return false;
},_setBlurValue:function(){
var _c=null;
this.inherited(arguments);
if(_c){
this.set("displayedValue",_c);
}
}});
});
