egl.defineWidget("dojo.widgets","DojoContentPane","dojo.widgets","DojoContainer","div",{"createDojoWidget":function(_1){
this.renderingStep=4.1;
this.assert(dijit.layout.ContentPane,"dijit.layout.ContentPane is undefined");
this._mergeArgs({region:this.region||"",title:this.title||"",refreshOnShow:true,closable:this.closable||"",splitter:this.splitter||false});
if(this.id){
this._args.id=this.id;
}
this.dojoWidget=new dijit.layout.ContentPane(this._args,_1);
this.renderingStep=4.2;
try{
this.setChildren(this.children);
}
catch(e){
throw "Could not set DojoContentPane children: "+e.message;
}
},"destroy":function(){
var _2=this.eze$$DOMElement;
var _3=null;
while(_2.parentNode){
_2=_2.parentNode;
if(_2.eze$$widget){
_3=_2.eze$$widget;
break;
}
}
if(_3&&_3.dojoWidget&&_3.dojoWidget.domNode&&this.dojoWidget&&this.dojoWidget.domNode&&_3.dojoWidget.removeChild){
if(_3.dojoWidget.tablist&&_3.children.length<=1){
_3.dojoWidget.doLayout=false;
}
_3.dojoWidget.removeChild(this.dojoWidget);
}
if(_3&&egl.isa(_3,"Tdojo/widgets/dojotabcontainer;")&&this.dojoWidget&&this.dojoWidget.domNode&&_3.dojoWidget&&_3.dojoWidget.tablist){
_3.dojoWidget.tablist.removeChild(this.dojoWidget);
}
var _4=this.children;
if(egl.IE&&_4){
for(var i=_4.length-1;i>=0;i--){
egl.destroyWidget(_4[i]);
}
}
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"setChildren":function(_6){
this.children=_6;
if(this.dojoWidget){
this.assert(this.dojoWidget.domNode,"dijit.layout.ContentPane has no domNode");
this.renderingStep=4.3;
this.removeAllChildren();
for(var n=0;n<_6.length;n++){
this.dojoWidget.domNode.appendChild(_6[n].eze$$DOMElement);
}
try{
this.dojoWidget.startup();
}
catch(e){
throw "dijit.layout.ContentPane could not be started: "+e.message;
}
}else{
this.renderWhenDojoIsDoneLoading();
}
},"appendChild":function(_8){
this.dojoWidget.domNode.appendChild(_8.eze$$DOMElement);
},"addChild":function(_9,_a){
},"removeAllChildren":function(){
while(this.dojoWidget.domNode.firstChild){
this.dojoWidget.domNode.removeChild(this.dojoWidget.domNode.firstChild);
}
},"copyStyle":function(_b){
},"setTitle":function(_c){
this.title=_c;
if(this.dojoWidget){
this.dojoWidget.attr("title",_c);
}
},"getTitle":function(){
return (this.title||"");
},"setRegion":function(_d){
this.region=_d;
},"setSplitter":function(_e){
this.splitter=_e;
},"setTextLayout":function(_f){
this.textLayoutThis=_f;
},"setReverseTextDirection":function(_10){
this.reverseTextDirectionThis=_10;
},"setBiDiMarkers":function(_11,_12){
var _13=_11=="Visual";
var _14=_12=="Yes";
this.title=this.title||"";
this.title=this.setBiDiMarkersStr(this.title,_13,_14);
this.setTitle(this.title);
}});
