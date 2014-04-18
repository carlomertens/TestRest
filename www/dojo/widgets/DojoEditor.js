egl.defineWidget("dojo.widgets","DojoEditor","dojo.widgets","DojoBase","div",{widgetOrientationThis:"",textLayoutThis:"",reverseTextDirectionThis:"","constructor":function(){
this.height=300;
this.width=300;
this.value="";
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
dojo.require("dijit.Editor");
dojo.require("dijit.layout._LayoutWidget");
},"createDojoWidget":function(_2){
var _3=this;
var _4=(this.textLayoutThis=="Visual");
if(_4||(this.widgetOrientationThis!="")){
dojo.require("bidi.EditorVisBidi");
this._mergeArgs({isVisualMode:(this.textLayoutThis=="Visual"),dir:this.widgetOrientationThis,isTextReversed:(this.reverseTextDirectionThis=="Yes"),onChange:function(){
_3.handleEvent(_3.getOnChange(),"onChange",null);
}});
this.dojoWidget=new bidi.EditorVisBidi(this._args,_2);
}else{
this._mergeArgs({value:this.value,disabled:this.disabled||false,onChange:function(){
_3.handleEvent(_3.getOnChange(),"onChange",null);
}});
this.dojoWidget=new dijit.Editor(this._args,_2);
}
this.dojoWidget.startup();
setTimeout(function(){
dojo.addOnLoad(_3.dojoWidget,function(){
_3.dojoWidget.resize({w:_3.width,h:_3.height});
});
},1);
},"setHeight":function(_5){
this.height=_5;
if(this.dojoWidget){
this.dojoWidget.resize({h:this.height});
}
},"getHeight":function(){
return this.height;
},"setWidth":function(_6){
this.width=_6;
if(this.dojoWidget){
this.dojoWidget.resize({w:this.width});
}
},"getWidth":function(){
return this.width;
},"getContents":function(){
if(this.dojoWidget){
if(this.textLayoutThis=="Visual"){
return this.dojoWidget.getValue(true);
}else{
return this.dojoWidget.get("value");
}
}else{
return this.value;
}
},"setContents":function(_7){
this.value=_7;
if(this.dojoWidget){
this.dojoWidget.set("value",_7);
}
},"setDisabled":function(_8){
this._setProperty("disabled","disabled",_8);
},"getDisabled":function(){
return this._getProperty("disabled","disabled");
},"setWidgetOrientation":function(_9){
this.widgetOrientationThis=_9;
},"getWidgetOrientation":function(){
return this.widgetOrientationThis;
},"setTextLayout":function(_a){
this.textLayoutThis=_a;
},"getTextLayout":function(){
return this.textLayoutThis;
},"setReverseTextDirection":function(_b){
this.reverseTextDirectionThis=_b;
},"getReverseTextDirection":function(){
return this.reverseTextDirectionThis;
}});
