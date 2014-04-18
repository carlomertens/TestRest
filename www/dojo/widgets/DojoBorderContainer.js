egl.defineWidget("dojo.widgets","DojoBorderContainer","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.setChildType("dojo.widgets.DojoContentPane");
this.width=800;
this.height=450;
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
},"createDojoWidget":function(_1){
this.dojoID="egl.DojoBorderContainer"+(++egl._dojoSerial);
this._mergeArgs({id:this.id||this.dojoID,gutters:this.borders===true?true:false,style:"width:"+egl.toPX(this.width)+";height:"+egl.toPX(this.height)});
this.dojoWidget=new dijit.layout.BorderContainer(this._args,_1);
this.dojoWidget.startup();
},"addChild":function(_2,_3){
egl.dojo.widgets.DojoContainer.prototype.addChild.call(this,_2);
},"setBorders":function(_4){
if(this.borders!=_4){
this.borders=_4;
if(this.dojoWidget){
this.setChildren(this.children);
}
}
},"isBorders":function(){
return this.borders;
}});
