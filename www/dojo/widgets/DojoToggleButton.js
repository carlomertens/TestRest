egl.defineWidget("dojo.widgets","DojoToggleButton","dojo.widgets","DojoBase","div",{"constructor":function(){
this.text="";
this.checkedText="";
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
dojo.require("dijit.form.Button");
},"createDojoWidget":function(_2){
this.runEventHandlers=function(){
};
var _3=this;
this._mergeArgs({label:this.text,disabled:this.disabled||false,onChange:function(_4){
if(_4){
this.attr("label",_3.checkedText);
}else{
this.attr("label",_3.text);
}
_3.handleEvent(_3.getOnChange(),"onChange",null);
}});
this.dojoWidget=new dijit.form.ToggleButton(this._args,_2);
this.dojoWidget.setDisabled(this.disabled?true:false);
this.dojoWidget.domNode.firstChild.style.display="block";
if(this.height){
this.dojoWidget.domNode.firstChild.style.height=(parseInt(this.height)-8)+"px";
}
},"setID":function(id){
if(id){
this._setProperty("id","id",id);
this.eze$$DOMElement.id="widget_"+id;
}
},"getID":function(){
return this._getProperty("id","id");
},"setHeight":function(_6){
egl.dojo.widgets.DojoBase.prototype.setHeight.call(this,_6);
if(this.dojoWidget){
this.dojoWidget.domNode.firstChild.style.height=(parseInt(_6)-8)+"px";
}
},"isChecked":function(){
if(this.dojoWidget){
return this.dojoWidget.attr("checked");
}
},"setText":function(_7){
this.text=_7;
this.setBiDiMarkers();
if(this.dojoWidget){
this.dojoWidget.setLabel(_7);
}
},"setCheckedText":function(_8){
this.checkedText=_8;
},"setDisabled":function(_9){
this._setProperty("disabled","disabled",_9);
},"getDisabled":function(){
return this._getProperty("disabled","disabled");
},"getText":function(){
return this.text;
},"getCheckedText":function(){
return this.checkedText;
},"setBiDiMarkers":function(){
if(this.textLayoutThis||this.reverseTextDirectionThis){
var _a=this.textLayoutThis=="Visual";
var _b=this.reverseTextDirectionThis=="Yes";
if(this.text){
this.text=this.setBiDiMarkersStr(this.text,_a,_b);
}
if(this.checkedText){
this.checkedText=this.setBiDiMarkersStr(this.checkedText,_a,_b);
}
}
}});
