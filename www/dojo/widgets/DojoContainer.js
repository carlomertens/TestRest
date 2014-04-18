egl.defineWidget("dojo.widgets","DojoContainer","dojo.widgets","DojoBase","div",{"setChildren":function(_1){
this.removeChildren();
this.children=_1;
var _2=this;
setTimeout(function(){
_2.renderWhenDojoIsDoneLoading();
},1);
this.setBiDiMarkers();
},"destroyAtRender":function(){
if(this.dojoWidget){
dojo.forEach(this.dojoWidget.getChildren(),function(_3){
if(_3._wrapperWidget){
_3._wrapperWidget.destroy();
}
});
dijit.registry.remove(this.dojoWidget.id);
this.dojoWidget=null;
}
try{
for(var n=0;n<this.children.length;n++){
var _5=this.children[n];
this.checkChildType(_5,n);
this.eze$$DOMElement.appendChild(_5.eze$$DOMElement);
}
}
catch(e){
}
},"setChildType":function(_6){
this.childType=_6;
},"checkChildType":function(_7,_8){
if(this.childType&&_7.eze$$package+"."+_7.eze$$typename!=this.childType){
throw this.eze$$typename+".addChild(child="+_7.eze$$typename+",index="+(_8+1)+"): Invalid child type, expected "+this.childType;
}
},"getID":function(){
return this._getProperty("id","id");
},"setID":function(id){
if(id){
this._setProperty("id","id",id);
}
},"getChildren":function(){
return this.children;
},"getChildIndex":function(_a){
for(var n=0;n<this.children.length;n++){
if(this.children[n].dojoWidget==_a){
return n;
}
}
return 0;
},"showError":function(_c,_d,_e,_f,_10){
try{
var _11=_e.eze$$package+"."+_e.eze$$typename;
var div=this.eze$$DOMElement;
div.style.border="4px red solid";
div.style.background="yellow";
div.style.color="red";
div.style.padding="10px";
div.style.overflow="hidden";
div.style.width="190px";
if(_11==_c){
var s="";
if(_e.dojoWidget){
s+=_e.dojoWidget.errorMessage+"<p>Here are all the fields defined in the child's dojoWidget:<br>"+"<table style='width:500px' border='1' cellpadding='3'>";
for(f in _e.dojoWidget){
s+="<tr><td>"+f+"</td><td>"+_e.dojoWidget[f]+"</td></tr>";
}
s+="</table>";
}else{
s+="<b>child.dojoWidget is null</b>. Here are all the fields defined in the child:<br>"+"<table style='width:500px' border='1' cellpadding='3'>";
for(f in _e){
s+="<tr><td>"+f+"</td><td>"+_e[f]+"</td></tr>";
}
s+="</table>";
}
div.innerHTML="<h1>"+_d+"."+_f+": Internal Error</h1><p>Cannot add child "+_e+".<p>Error: "+_10?_10.message:"???"+"<p>"+s;
}else{
div.innerHTML="<h1>Usage Error</h1><p>Cannot add a <b>"+_e.eze$$typename+"</b> to a "+_d+". Expected type is: <b>"+_c+"</b><p>";
}
}
catch(e){
}
},"appendChild":function(){
throw "DojoContainer.js: appendChild is not implemented on this dojo widget";
},"removeChild":function(){
throw "DojoContainer.js: removeChild is not implemented on this dojo widget";
},"setTextLayout":function(_14){
this.textLayoutThis=_14;
if(!this.children){
this.setBiDiMarkers();
return;
}
this.setBiDiMarkers();
},"setReverseTextDirection":function(_15){
this.reverseTextDirectionThis=_15;
if(!this.children){
this.setBiDiMarkers();
return;
}
this.setBiDiMarkers();
},"setBiDiMarkers":function(){
if(!this.children){
return;
}
if(this.childType=="dojo.widgets.DojoContentPane"||this.childType=="dojo.widgets.DojoMenuItem"||this.childType=="dojo.widgets.DojoTreeNode"){
if(this.children.length>0){
for(var n=0;n<this.children.length;n++){
var _17;
var _18;
if(!this.children[n].reverseTextDirectionThis){
_17=this.reverseTextDirectionThis;
}else{
_17=this.children[n].reverseTextDirectionThis;
}
if(!this.children[n].textLayoutThis){
_18=this.textLayoutThis;
}else{
_18=this.children[n].textLayoutThis;
}
this.children[n].setBiDiMarkers(_18,_17);
}
}
}
},"setWidgetOrientation":function(_19){
egl.dojo.widgets.DojoBase.prototype.setWidgetOrientation.call(this,_19);
if(_19.toLowerCase()!=this.eze$$DOMElement.dir){
if(_19.toLowerCase()=="rtl"){
this.eze$$DOMElement.dir="rtl";
}else{
if(_19.toLowerCase()=="ltr"){
this.eze$$DOMElement.dir="ltr";
}
}
}
}});
