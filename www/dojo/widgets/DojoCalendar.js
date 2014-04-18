egl.defineWidget("dojo.widgets","DojoCalendar","dojo.widgets","DojoBase","div",{"constructor":function(){
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
dojo.require("dijit._Calendar");
},"createDojoWidget":function(_2){
var _3=this.value?this.value:new Date();
var _4=this;
this._mergeArgs({onChange:function(){
_4.handleEvent(_4.getOnChange(),"onChange",null);
},onValueSelected:function(){
_4.handleEvent(_4.getOnSelect(),"onSelect",null);
}});
this.eze$$DOMElement.style.borderCollapse="separate";
this.dojoWidget=new dijit._Calendar(this._args,_2);
if(_3){
this.setValue(_3);
}
this.dojoWidget.startup();
},"setValue":function(_5){
if(this.dojoWidget){
this.dojoWidget.set("value",_5);
}
this.value=_5;
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.get("value");
}else{
return null;
}
},"isSelectorOpen":function(){
if(this.dojoWidget&&this.dojoWidget.monthWidget&&this.dojoWidget.monthWidget._opened){
return true;
}
return false;
}});
