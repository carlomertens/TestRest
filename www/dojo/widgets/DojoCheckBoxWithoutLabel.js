egl.defineWidget("dojo.widgets","DojoCheckBoxWithoutLabel","dojo.widgets","DojoBase","div",{"constructor":function(){
this.setData("");
dojo.require("dijit.form.CheckBox");
},"createDojoWidget":function(_1){
var _2=this;
this._mergeArgs({checked:this.selected||false,disabled:this.disabled||false});
this._args.onChange=function(){
_2.handleEvent(_2.getOnChange(),"onChange",null);
};
this.dojoWidget=new dijit.form.CheckBox(this._args,_1);
},"getSelected":function(){
return this.dojoWidget&&this.dojoWidget.getValue()!=false;
},"setSelected":function(_3){
this.selected=_3;
if(this.dojoWidget){
this.dojoWidget.setChecked(_3);
}
},"getDisabled":function(){
return Boolean(this.disabled);
},"setDisabled":function(_4){
this.disabled=_4;
if(this.dojoWidget){
this.dojoWidget.set("disabled",_4);
}
}});
