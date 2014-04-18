egl.defineWidget("dojo.widgets","DojoTextArea","dojo.widgets","DojoTextBase","textarea",{"constructor":function(){
dojo.require("dijit.form.SimpleTextarea");
var _1=this;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
},"createDojoWidget":function(_2){
var _3=this;
this._mergeArgs({cols:this.cols?""+this.cols:"100",rows:this.rows?""+this.rows:"10",onClick:function(){
_3.handleEvent(_3.getOnClick(),"onClick");
}});
this._setCommonProp();
this.dojoWidget=new dijit.form.SimpleTextarea(this._args,_2);
this.dojoWidget.startup();
},"setNumRows":function(_4){
this.rows=_4;
if(this.dojoWidget){
this.dojoWidget.set("rows",""+_4);
}
},"getNumRows":function(){
return this.rows;
},"setNumColumns":function(_5){
this.cols=_5;
if(this.dojoWidget){
this.dojoWidget.set("cols",""+_5);
}
},"getNumColumns":function(){
return this.cols;
}});
