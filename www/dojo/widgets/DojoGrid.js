egl.defineWidget("dojo.widgets","DojoGrid","dojo.widgets","DojoBase","div",{"constructor":function(){
this.headerBehaviors=[];
this.behaviors=[];
this.data=[];
dojo.require("dojox.grid.DataGrid");
dojo.require("dojo.data.ItemFileWriteStore");
},"createDojoWidget":function(_1){
var _2=this.getWidgetOrientation();
if(!_2){
_2="ltr";
}
this.setInnerHTML("");
var _3=this;
this.dojoColumns=this.createColumns();
this.dojoStore=new dojo.data.ItemFileWriteStore({data:this.createData(this.data,this.dojoColumns)});
this._mergeArgs({id:_3.id,structure:_3.dojoColumns,store:_3.dojoStore,autoHeight:true,autoWidth:true,dir:_2,splitter:false});
this.dojoWidget=new dojox.grid.DataGrid(this._args,_1);
var _4=function(){
setTimeout(function(){
_3.runBehaviors();
},1);
};
if(_2.toLowerCase()=="rtl"){
this.dojoWidget.domNode.setAttribute("align","right");
}else{
this.dojoWidget.domNode.setAttribute("align","left");
}
this.dojoWidget.connect(this.dojoWidget,"postrender",_4);
this.dojoWidget.render();
this.dojoWidget.startup();
this.dojoWidget.resize({w:this.width,h:this.height});
},"setData":function(_5){
if(!_5){
_5=[];
}
egl.dojo.widgets.DojoBase.prototype.setData.call(this,_5);
},"getData":function(){
var _6=this.dojoWidget.getSortIndex();
if(-1!=_6&&_6<this.columns.length&&_6>-1){
var _7=!this.dojoWidget.getSortAsc();
var _8=this.columns[_6].name;
var _9=this;
this.dojoStore.fetch({onComplete:function(_a,_b){
if(_a&&_a.length>0&&_9.data&&_9.data.length>0){
for(var i=0;i<_a.length;i++){
for(var _d=0;_d<_9.columns.length;_d++){
_9.data[i][_9.columns[_d].name]=_a[i][_9.columns[_d].name][0];
}
}
}
},sort:[{attribute:_8,descending:_7}]});
}
return this.data;
},"runBehaviors":function(){
this.addBehaviors(this.behaviors,"td",this.data.length);
this.addBehaviors(this.headerBehaviors,"th",1);
this.fixSizes();
},"fixSizes":function(){
var _e=this.dojoWidget.domNode.getElementsByTagName("tbody");
var w=0,h=0,_11;
for(var n=1;n<_e.length;n++){
if(_e[n].className!="EglRuiTbody"){
h+=egl.getHeightInPixels(_e[n])+1;
w=Math.max(w,egl.getWidthInPixels(_e[n])+1);
}
}
var _11=egl.getHeightInPixels(_e[0]);
w=this.width?parseInt(this.width):w;
h=this.height?parseInt(this.height)-_11:h;
var _13=this.dojoWidget.domNode.getElementsByTagName("div");
if(!this.width||!this.height){
for(var n=0;n<_13.length;n++){
var div=_13[n];
if(this.isGridDiv(div.className)){
if(!this.height){
div.style.height=egl.toPX(h);
}
if(!this.width){
div.style.width=egl.toPX(w);
}
}
if("dojoxGridHeader"==div.className){
div.style.width=egl.toPX(w);
}
}
}
egl.setWidth(this.eze$$DOMElement,egl.toPX(w));
egl.setHeight(this.eze$$DOMElement,egl.toPX(h+_11));
},"setHeight":function(_15){
this.height=_15;
if(this.dojoWidget){
this.dojoWidget.resize({h:this.height});
}
},"getHeight":function(){
return this.height;
},"setWidth":function(_16){
this.width=_16;
if(this.dojoWidget){
this.dojoWidget.resize({h:this.width});
}
},"getWidth":function(){
return this.width;
},"isGridDiv":function(_17){
switch(_17){
case "dojoxGrid-master-view":
case "dojoxGridMasterView":
case "dojoxGrid":
case "dojoxGrid-view":
case "dojoxGridView":
case "dojoxGrid-content":
case "dojoxGridContent":
case "dojoxGrid-scrollbox":
case "dojoxGridScrollbox":
return true;
}
return false;
},"showError":function(w,h){
var s="This is an empty DojoGrid. Nothing was rendered.";
if(this.data.length>0){
s+="<p>There are "+this.data.length+" records and "+this.columns.length+" columns.";
s+="<p>Columns:";
var _1b=null;
var _1c=this.data.length>0?this.data[0]:{};
for(var n=0;n<this.dojoColumns.length;n++){
s+=" "+n+":\""+this.dojoColumns[n].field+"\"";
if(!(this.dojoColumns[n].field in _1c)){
_1b=_1b||this.dojoColumns[n].field;
}
}
s+="<p>Data: ["+this.data.length+"] {";
for(f in _1c){
if(egl.isUserField(_1c,f)){
s+=" \""+f+"\"";
}
}
s+="}";
s+="<p>Grid width = "+w+". Grid height = "+h;
if(_1b){
s+="<br>Check your column definitions. Missing data field: "+_1b;
}else{
s+="<p><b>Internal Error</b>. This appears to be a race condition. "+"Please report this problem to the proper authorities.<br>"+"Browser: "+window.navigator.userAgent;
}
}
this.setWidth(600);
this.setHeight(400);
this.setInnerHTML(s);
egl.setEnableTextSelection(true);
},"createData":function(_1e,_1f){
var _20={identifier:"",label:"",items:[{}]};
var _21=5;
var _22=_1e.length>0?_1e.length:5;
var _23=this.getTextLayout()=="Visual";
var _24=this.getReverseTextDirection()=="Yes";
for(var row=0;row<_22;row++){
_20.items[row]={};
for(var _26=0;_26<_1f.length;_26++){
var _27;
if(_1e.length<=0){
_27="";
}else{
_27=egl.unboxAny(_1e[row][_1f[_26].field]);
if(_27===undefined){
_27="";
}
if(_23||_24){
_27=this.setBiDiMarkersStr(_27,_23,_24);
}
}
var _28=_1f[_26].field;
_20.items[row][_28]=_27;
}
}
return _20;
},"createColumns":function(){
this.columns=this.columns||[];
var _29=this;
var _2a=[];
if(!this.columns.length&&this.data.length){
for(f in this.data[0]){
if(egl.isUserField(this.data[0],f)){
_2a.push({name:f,field:f});
}
}
this.columns=_2a;
}else{
for(var n=0;n<this.columns.length;n++){
var _2c=this.columns[n];
var _2d=_2c.displayName||_2c.name;
_2d=_2d.replace(/ /g,"&nbsp;");
var _2e=this.getTextLayout()=="Visual";
var _2f=this.getReverseTextDirection()=="Yes";
_2d=this.setBiDiMarkersStr(_2d,_2e,_2f);
_2a.push({field:_2c.name,name:_2d,width:_2c.width?egl.toPX(_2c.width):"100px"});
}
}
return _2a;
},"addBehaviors":function(_30,_31,_32){
var _33=[].appendAll(this.dojoWidget.domNode.getElementsByTagName(_31));
for(var n=0;n<_30.length;n++){
for(var row=0;row<_32;row++){
for(var _36=0;_36<this.columns.length;_36++){
var _37=_33[row*this.columns.length+_36];
try{
_30[n](this,egl.createWidget(_37),this.data[row],row+1,this.columns[_36]);
}
catch(e){
var msg="Error while running behavior for "+(_32?"row="+row:"header")+", column=\""+this.columns[_36].name+"\", cell="+(row*this.columns.length+_36)+" of "+_33.length;
if(row){
msg+=" row data is: <ul><table cellPadding=3px border=1>";
for(var _36=0;_36<this.columns.length;_36++){
msg+="<tr><td>"+this.columns[_36].displayName+"</td>";
msg+="<td>"+this.data[row][this.columns[_36].name]+"</td></tr>";
}
msg+="</table></ul>Cancelling the rest of the behaviors for this grid.";
}
egl.printError(msg,e);
return;
}
}
}
}
},"addRow":function(_39){
var _3a=(this.createData(_39,this.dojoColumns)).items[0];
this.dojoWidget.store.newItem(_3a);
},"removeRow":function(_3b){
_3b--;
if(_3b>=1&&_3b<this.dojoWidget.rowCount){
this.dojoWidget.selection.deselectAll();
this.dojoWidget.selection.setSelected(_3b,true);
this.dojoWidget.removeSelectedRows();
}
},"destroy":function(){
}});
