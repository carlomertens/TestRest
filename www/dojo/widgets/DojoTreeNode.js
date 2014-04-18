egl.defineWidget("dojo.widgets","DojoTreeNode","dojo.widgets","DojoContainer","div",{"constructor":function(){
this.children=[];
},"render":function(){
this.eze$$ready=false;
var _1=null;
this.renderingStep=4;
this.copyAttribute();
this.eze$$DOMElement.eze$$widget=this;
this.renderingStep=5;
this.eze$$ready=true;
this.printStartupMessage();
egl.startVEWidgetTimer();
},"destroy":function(){
egl.destroyWidgetChildren(this);
var _2=this.eze$$parent||this.eze$$tree;
if(_2){
_2.removeChild(this);
}
egl.dojo.widgets.DojoBase.prototype.destroy.call(this);
},"getItem":function(){
if(!this.item){
this.item={id:this.id,text:this.text,parent:this.eze$$parent?this.eze$$parent.id:null};
}
if(this.children&&this.children.length>0){
this.item.children=this.getChildItems();
}
return this.item;
},"getItemOnly":function(){
this.selfitem={id:this.id,text:this.text,parent:this.eze$$parent?this.eze$$parent.id:null};
return this.selfitem;
},"getChildItems":function(){
var _3=[];
for(var n=0;n<this.children.length;n++){
_3.push(this.children[n].getItem());
}
return _3;
},"setText":function(_5){
this.text=_5;
if(this.eze$$tree&&this.eze$$tree.store){
var _6=this;
var _7=_6.eze$$tree;
_7.store.fetchItemByIdentity({identity:_6.id,onItem:function(_8){
try{
_7.store.setValue(_8,"text",_5);
_7.store.save();
}
catch(e){
e.message="Cannot change DojoTreeNode \""+_7.id+"\" from \""+treeWidget.id+"\"";
egl.printError("Invalid argument to DojoTreeNode.setText",e);
}
}});
}
},"getText":function(){
return this.text;
},"setID":function(id){
this.id=id;
},"getID":function(){
return this.id;
},"contains":function(_a){
var _b=false;
for(var i=0;i<this.children.length;i++){
if(_a.id==this.children[i].id){
_b=true;
}
}
return _b;
},"appendChild":function(_d){
if(_d){
if(!this.contains(_d)){
this.children.appendElement(_d);
}
_d.eze$$parent=this;
_d.setTree(this.eze$$tree);
var _e=this;
this.eze$$tree.getStore().fetchItemByIdentity({identity:this.id,onItem:function(_f){
try{
_e.eze$$tree.model.newItem(_d.getItemOnly(),_f);
_e.eze$$tree.store.save();
}
catch(e){
egl.printError("Cannot add treenode \""+_d.id+"\" to \""+_e.id+"\". Duplicate nodes not allowed.",e);
}
},onFail:function(){
egl.printError("Cannot add treenode \""+_d.id+"\" to \""+_e.id+"\". Duplicate nodes not allowed.");
}});
if(_d.children&&_d.children.length){
for(var i=0;i<this.children.length;i++){
var _11=_d.children[i];
_d.appendChild(_11);
}
}
}
},"getIndex":function(_12){
if(this.children){
for(var i=0;i<this.children.length;i++){
if(_12.id==this.children[i].id){
return i+1;
}
}
}
return -1;
},"removeChild":function(_14){
if(_14){
this.tempchild=_14.id;
if(_14.children&&_14.children.length>0){
var _15=_14.children.length;
for(var i=_14.children.length-1;i>=0;i--){
var _17=_14.children[i];
_14.removeChild(_17,_14.getIndex(_17));
}
}
this.children.removeElement(this.getIndex(_14));
var _18=this;
this.eze$$tree.getStore().fetchItemByIdentity({identity:_14.id,onItem:function(_19){
try{
_18.eze$$tree.store.deleteItem(_19);
_18.eze$$tree.store.save();
}
catch(e){
e.message="Cannot remove DojoTreeNode \""+_14.id+"\" from \""+_18.id+"\"";
egl.printError("Invalid argument to DojoTreeNode.removeChild",e);
}
}});
}
},"removeChildren":function(){
var len=this.children.length;
for(var n=len-1;n>=0;n--){
this.removeChild(this.children[n]);
}
},"setChildren":function(_1c){
this.children=[];
for(var n=0;n<_1c.length;n++){
var _1e=_1c[n];
if(this.eze$$tree){
this.appendChild(_1e);
}else{
_1e.eze$$parent=this;
this.children.push(_1e);
}
}
},"getElementById":function(id){
return this.eze$$tree.getElementById(id);
},"getParent":function(){
return this.eze$$parent;
},"setTree":function(_20){
this.eze$$tree=_20;
this.eze$$tree.eglNodes[this.id]=this;
if(this.children){
for(var n=0;n<this.children.length;n++){
this.children[n].setTree(_20);
}
}
},"setBiDiMarkers":function(_22,_23){
if(this.text&&(_22||_23)){
var _24=_22=="Visual";
var _25=_23=="Yes";
this.text=this.setBiDiMarkersStr(this.text,_24,_25);
this.setText(this.text);
}
if(this.children){
for(var n=0;n<this.children.length;n++){
var _27;
var _28;
if(!this.children[n].reverseTextDirectionThis){
_27=_23;
}else{
_27=this.children[n].reverseTextDirectionThis;
}
if(!this.children[n].textLayoutThis){
_28=_22;
}else{
_28=this.children[n].textLayoutThis;
}
this.children[n].setBiDiMarkers(_28,_27);
}
}
}});
