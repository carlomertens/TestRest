egl.defineWidget("dojo.widgets","DojoRadioGroup","dojo.widgets","DojoBase","div",{"constructor":function(){
this.runEventHandlers=function(){
};
dojo.require("dijit.form.RadioButton");
},"setOptions":function(_1,_2){
var _3=this;
this.groupName="egl.dojoRG_"+(++egl._dojoSerial);
this.options=_1;
this.inputs=[];
if(this.container){
this.removeChildren();
}
this.container=egl.createChild(this.eze$$DOMElement,"span");
for(var n=0;n<this.options.length;n++){
var id=this.groupName+"_input_"+n;
var _6=egl.createChild(this.container,"input");
_6.id=id;
if(!egl.IE&&egl.IEVersion<9){
_6.setAttribute("type","radio");
}
_6.setAttribute("name",this.groupName);
_6.setAttribute("value",this.options[n]);
this.inputs.push(_6);
if(this.selected==this.options[n]){
_6.setAttribute("checked","checked");
}
var _7=egl.createChild(this.container,"label");
if(!this.textLayoutThis&&!this.widgetOrientationThis){
_7.innerHTML=_1[n];
}else{
_7.innerHTML=this.setBiDiMarkers(_1[n]);
}
_7.setAttribute("for",id);
_7.style.padding="3px";
if(this.vertical){
egl.createChild(this.container,"br");
}
dojo.connect(_7,"onclick",(function(){
var _8=n;
return function(){
_3.radios[_8]&&_3.radios[_8].set&&_3.radios[_8].set("checked",true);
};
})());
}
this.container.style.display="none";
this.renderWhenDojoIsDoneLoading();
},"_setEvent":function(_9,_a,_b){
var _c=this;
this._args=this._args||{};
var _d=this._args;
var _e;
if(_9=="mouseup"){
_e=function(e){
_c.handleEvent(_c["getOn"+_a](),"on"+_a,e);
if(e.button==2||e.button==3){
_c.handleEvent(_c.getOnContextMenu(),"onContextMenu",e);
}
};
}else{
if(_9=="focus"||_9=="blur"){
_e=function(e){
for(var n=_c.radios.length-1;n>=0;n--){
if(_c.radios[n].active){
return;
}
}
_c.handleEvent(_c["getOn"+_a](),"on"+_a,e);
};
}else{
_e=function(e){
_c.handleEvent(_c["getOn"+_a](),"on"+_a,e);
};
}
}
if(_9=="focus"||_9=="blur"||_9=="onkeydown"||_9=="onkeypress"||_9=="onkeyup"){
if(this.radios){
for(var n=this.radios.length-1;n>=0;n--){
dojo.connect(this.radios[n].domNode,"on"+_9,_e);
}
}else{
_d["on"+_b]=_e;
}
}else{
dojo.connect(this.container,"on"+_9,_e);
}
},"getOptions":function(){
return this.options;
},"render":function(){
if(this._renderSerial&&this._renderSerial==this.groupName){
return;
}
this._renderSerial=this.groupName;
this.destroyAtRender();
var _14=this;
this.radios=[];
for(var n=0;n<this.options.length;n++){
this._mergeArgs({id:this.groupName+"__"+n,checked:(this.selected==this.options[n]),name:this.groupName,index:n,onChange:function(){
if(this.checked){
_14.handleEvent(_14.getOnChange(),"onChange",null);
}
}});
this._args.onClick=function(e){
var _17=_14.inputs[this.index];
_14.selected=_17.value;
};
this.radios[n]=new dijit.form.RadioButton(this._args,this.inputs[n]);
}
if(this.getWidgetOrientation()=="rtl"){
this.eze$$DOMElement.dir="rtl";
this.eze$$DOMElement.align="right";
}else{
if(this.getWidgetOrientation()=="ltr"){
this.eze$$DOMElement.dir="ltr";
this.eze$$DOMElement.align="left";
}
}
if(this.disabled){
this.setDisabled(this.disabled);
}
this.container.style.display="inline-block";
},"destroy":function(){
if(this.radios&&this.radios.length>0){
for(var n=0;n<this.radios.length;n++){
this.radios[n].destroy();
}
}
},"setOpacity":function(_19){
var _1a=this.container.style;
this.opacity=_19;
_1a.opacity=_19;
_1a.display="inline-block";
_1a.filter=(_19>=0.9)?"''":"alpha(opacity="+(100*_19)+")";
_1a.mozOpacity=_19;
},"setSelected":function(_1b){
this.selected=_1b;
if(this.container){
this.eze$$DOMElement.removeChild(this.container);
this.setOptions(this.options);
}
},"getSelected":function(){
return this.selected;
},"setDisabled":function(_1c){
this.disabled=_1c;
if(this.radios){
for(var n=this.radios.length-1;n>=0;n--){
this.radios[n].set("disabled",_1c);
}
}
},"getDisabled":function(){
return this.disabled;
},"setWidgetOrientation":function(_1e){
egl.dojo.widgets.DojoBase.prototype.setWidgetOrientation.call(this,_1e);
this.setOptions(this.options,"");
},"setTextLayout":function(_1f){
egl.dojo.widgets.DojoBase.prototype.setTextLayout.call(this,_1f);
this.setOptions(this.options,"");
},"setBiDiMarkers":function(_20){
var _21;
var _22=this.getWidgetOrientation()=="rtl";
var _23=this.textLayoutThis=="Visual";
egl.LRM=String.fromCharCode(8206);
egl.RLM=String.fromCharCode(8207);
if(!_22){
if(_23){
_21=egl.LRO+_20+egl.PDF;
}else{
_21=egl.LRE+_20+egl.PDF;
}
}else{
if(_23){
_21=egl.RLO+_20+egl.PDF;
}else{
_21=egl.RLM+egl.LRM+_20+egl.PDF;
}
}
return _21;
},"getValueAsText":function(){
return (this.getSelected());
},"setValueAsText":function(_24){
this.setSelected(_24);
}});
