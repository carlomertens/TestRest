egl.defineWidget("dojo.widgets","DojoCurrencyTextBox","dojo.widgets","DojoValidationBase","div",{"constructor":function(){
dojo.require("dojo.date.locale");
dojo.require("dijit.form.CurrencyTextBox");
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
},"createDojoWidget":function(_2){
var _3=this;
this._mergeArgs({id:this.id||"egl.DCTB"+(++egl._dojoSerial),type:"text",method:"post",currency:this.currency||"USD"});
this._setCommonProp();
this.dojoWidget=new dijit.form.CurrencyTextBox(this._args,_2);
this.setValidators(this.validators);
this._setTextboxStyle();
this.dojoWidget.startup();
if(this.value){
this.setValue(this.value);
}
},"setText":function(_4){
this.value=_4;
if(this.dojoWidget){
this.dojoWidget.set("value",_4);
this.dojoWidget._setValueAttr(this.dojoWidget.get("value"),true);
}
},"setValue":function(_5){
this.setText(_5);
},"getValue":function(){
return (this.getText());
}});
