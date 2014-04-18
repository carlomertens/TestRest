egl.defineWidget("dojo.widgets","DojoColorPalette","dojo.widgets","DojoBase","div",{"constructor":function(){
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
dojo.require("dijit.ColorPalette");
},"createDojoWidget":function(_2){
var _3=this;
this._mergeArgs({palette:this.small?"3x4":"7x10",onChange:function(_4){
this.value=_4;
_3.handleEvent(_3.getOnChange(),"onChange",null);
}});
if(this.value){
this._args.value=this.value;
}
this.dojoWidget=new dijit.ColorPalette(this._args,_2);
},"setValue":function(_5){
this.value=_5;
if(this.dojoWidget){
this.dojoWidget.set("value",_5);
}
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.value;
}else{
return this.value||"";
}
}});
