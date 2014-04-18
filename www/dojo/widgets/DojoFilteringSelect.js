egl.defineWidget("dojo.widgets","DojoFilteringSelect","dojo.widgets","DojoBase","input",{"constructor":function(){
dojo.require("dijit.form.FilteringSelect");
dojo.require("dojo.store.Memory");
dojo.require("dojo.on");
this.store=null;
this.data=null;
this.rows=[];
this.autoComplete=true;
this.isBidi=false;
},"createDojoWidget":function(_1){
var _2=this,_3={};
_3.store=_2.memory=_2._getMemory();
if(typeof _2.labelBehavior=="function"){
_3.labelAttr="eze$$customLabel";
}else{
_3.labelAttr!==undefined&&(_3.labelAttr=this.labelAttr);
}
this.searchAttr!==undefined&&(_3.searchAttr=this.searchAttr);
this.required!==undefined&&(_3.required=this.required);
this.labelType!==undefined&&(_3.labelType=this.labelType);
this.placeHolder!==undefined&&(_3.placeHolder=this.placeHolder);
this.displayedValue!==undefined&&(_3.displayedValue=this.displayedValue);
this.autoComplete!==undefined&&(_3.autoComplete=this.autoComplete);
this.invalidMessage!==undefined&&(_3.invalidMessage=this.invalidMessage);
this.missingMessage!==undefined&&(_3.missingMessage=this.missingMessage);
this.name!==undefined&&(_3.name=this.name);
_2._mergeArgs(_3);
_3=_2.getShallowCopy(_2._args);
_3.onChange=function(){
_2.handleEvent(_2.getOnChange(),"onChange",null);
};
console.log(_3);
if(this.isBidi==false){
_2.dojoWidget=new dijit.form.FilteringSelect(_3,_1);
}else{
_3.isVisualMode=this.textLayoutThis=="Visual";
if(this.widgetOrientationThis=="rtl"){
_3.dir="rtl";
}else{
_3.dir="ltr";
}
dojo.require("bidi.FilteringSelectVisBidi");
this.dojoWidget=new bidi.FilteringSelectVisBidi(_3,_1);
}
},"_getMemory":function(){
var _4={data:this.rows};
this.idAttr&&(_4.idProperty=this.idAttr);
return new dojo.store.Memory(_4);
},"setData":function(_5){
var _6=this,i=0,j=null,_9,_a,_b=[];
if(!_5){
_5=[];
}
_6.rows=[];
_5=_6.data=_6.getShallowCopy(_5);
if(_5.length>0){
for(i in _5[0]){
if(egl.isUserField(_6.data[0],i)){
_b.push(i);
}
}
}
setTimeout(function(){
for(i=0;i<_5.length;++i){
if(_5[i].eze$$value===undefined){
_5[i].eze$$value=_5[i];
}
for(j=0,_a={};j<_b.length;++j){
_a[_b[j]]=egl.unboxAny(_5[i][_b[j]]);
}
if(typeof _6.labelBehavior=="function"){
_a["eze$$customLabel"]=_6.labelBehavior(_5[i]);
}
_6.rows.push(_a);
}
if(_6.dojoWidget){
_6.memory=_6._getMemory();
_6.dojoWidget.set("store",_6.memory);
}else{
_6.renderWhenDojoIsDoneLoading();
}
},1);
},"setValue":function(_c){
this._setProperty("displayedValue","displayedValue",_c);
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.get("displayedValue");
}
return this.displayedValue;
},"getData":function(){
return this.data;
},"setNullable":function(_d){
this._setProperty("required","required",!_d);
},"getNullable":function(){
return this.required;
},"setName":function(_e){
this._setProperty("name","name",_e);
},"getName":function(){
return this.name;
},"setIdAttr":function(_f){
this.idAttr=_f;
if(this.memory){
this.memory.set("idProperty",_f);
}
},"getIdAttr":function(){
return this.memory.get("idProperty");
},"setSearchAttr":function(arg){
this._setProperty("searchAttr","searchAttr",arg);
},"getSearchAttr":function(){
return this.searchAttr;
},"setLabelAttr":function(arg){
this._setProperty("labelAttr","labelAttr",arg);
},"getLabelAttr":function(){
return this.labelAttr;
},"setLabelType":function(arg){
this._setProperty("labelType","labelType",arg);
},"getLabelType":function(){
return this.labelType;
},"setPlaceHolder":function(arg){
this._setProperty("placeHolder","placeHolder",arg);
},"getPlaceHolder":function(){
return this.placeHolder;
},"setAutoComplete":function(arg){
this._setProperty("autoComplete","autoComplete",arg);
},"getAutoComplete":function(){
return this.autoComplete;
},"setInvalidMessage":function(arg){
this._setProperty("invalidMessage","invalidMessage",arg);
},"getInvalidMessage":function(){
return this.invalidMessage;
},"setMissingMessage":function(arg){
this._setProperty("missingMessage","missingMessage",arg);
},"getMissingMessage":function(){
return this.missingMessage;
},"setBiDiMarkers":function(){
if(this.isBidi==false){
if(this.reverseTextDirectionThis=="Yes"||this.widgetOrientationThis=="rtl"||this.textLayoutThis=="Visual"){
this.isBidi=true;
}
}else{
if(this.isBidi==true&&this.dojoWidget){
this.eze$$DOMElement.removeChild(this.dojoWidget);
this.createDojoWidget(this.parent);
}
}
}});
