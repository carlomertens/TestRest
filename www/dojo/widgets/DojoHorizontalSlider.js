egl.defineWidget("dojo.widgets","DojoHorizontalSlider","dojo.widgets","DojoBase","div",{"constructor":function(){
this.minimum=0;
this.maximum=100;
this.step=0;
dojo.require("dijit.form.Slider");
},"createDojoWidget":function(_1){
var _2=this;
if(this.showLabels&&!this.step){
var _3=egl.createChild(this.eze$$DOMElement,"div");
_3.style.color="red";
_3.style.whitespace="nowrap";
_3.innerHTML="Error: \"showLabels==true' requires a value for \"step\"";
}
_4=Math.min(_4,this.getPixelWidth()/25);
this.step=this.step||1;
var _4=Math.round((this.maximum-this.minimum)/this.step-0.5)+1;
while(_1.firstChild){
_1.removeChild(_1.firstChild);
}
if(this.showLabels){
new dijit.form.HorizontalRule({count:_4,style:"height:5px",container:"bottomDecoration"},egl.createChild(_1,"div"));
new dijit.form.HorizontalRuleLabels({count:_4,minimum:this.minimum,maximum:this.maximum,style:"height:1.2em;font-size:75%;",constraints:"{pattern:'#'}",container:"bottomDecoration"},egl.createChild(_1,"div"));
}
this._mergeArgs({value:this.data,minimum:this.minimum,maximum:this.maximum,discreteValues:_4,sliderDuration:500,intermediateChanges:true,disabled:this.disabled||false,onChange:function(){
_2.handleEvent(_2.getOnChange(),"onChange",null);
}});
this.dojoWidget=new dijit.form.HorizontalSlider(this._args,_1);
},"setValue":function(_5){
if(this.dojoWidget){
this.dojoWidget.setValue(_5);
}else{
this.setData(_5);
}
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.value;
}else{
return this.data;
}
},"setDisabled":function(_6){
this._setProperty("disabled","disabled",_6);
},"getDisabled":function(){
return this._getProperty("disabled","disabled");
},"reportChange":function(){
var _7=this.getValue();
if(_7!=this.lastValue){
this.handleEvent(this.getOnChange(),"onChange");
}
this.lastValue=_7;
}});
