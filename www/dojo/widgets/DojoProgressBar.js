egl.defineWidget("dojo.widgets","DojoProgressBar","dojo.widgets","DojoBase","div",{"constructor":function(){
dojo.require("dijit.ProgressBar");
},"createDojoWidget":function(_1){
var _2=this;
this._mergeArgs({indeterminate:this.indeterminate||false,maximum:this.maximum||100,progress:this.progress||0,places:0,onChange:function(){
_2.handleEvent(_2.getOnChange(),"onChange",null);
}});
this.dojoWidget=new dijit.ProgressBar(this._args,_1);
this.dojoWidget.startup();
},"setMaximum":function(_3){
this.maximum=_3;
if(this.dojoWidget){
this.dojoWidget.update({maximum:this.maximum});
}
},"getMaximum":function(){
return this.maximum;
},"setProgress":function(_4){
if(_4<0){
_4=0;
}
if(_4>this.maximum){
_4=this.maximum;
}
this.progress=_4;
if(this.dojoWidget){
this.dojoWidget.update({progress:this.progress});
}else{
this.setData(_4);
}
},"getProgress":function(){
return this.progress;
},"setIndeterminate":function(v){
this.indeterminate=v;
if(this.dojoWidget){
this.dojoWidget.update({indeterminate:this.indeterminate});
}
}});
