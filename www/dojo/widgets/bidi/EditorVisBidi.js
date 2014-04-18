define(["dojo/_base/declare","dojo/has","dojo/_base/lang","dojo/_base/window","dojo/keys","dijit/_editor/RichText","dijit/Editor","./EditorVisBidi"],function(_1,_2,_3,_4,_5,_6,_7){
return _1("bidi.EditorVisBidi",[_6,_7],{LRO:"?",RLO:"?",isVisualMode:false,isTextReversed:false,dir:"ltr",postCreate:function(){
this.dir=this.dir.toLowerCase();
this.inherited(arguments);
this._savedPushBoundaries=null;
this._selectionLength=0;
if(this.isTextReversed){
this.contentDomPreFilters.push(_3.hitch(this,"_reverseNodes"));
this.contentDomPostFilters.push(_3.hitch(this,"_reverseNodes"));
}
},_adjustCursorOnPushTyping:function(_8){
return;
},_getCursorPos:function(){
var _9=null;
try{
if(_2("ie")){
var b=_4.withGlobal(this.window,dijit.getBookmark);
var _b=dijit.range.getSelection(this.window);
if(b&&b.mark&&!_3.isArray(b.mark)&&_b){
if(_b.rangeCount){
range=_b.getRangeAt(0);
}
if(range){
b.mark=range.cloneRange();
}else{
b.mark=_4.withGlobal(this.window,dijit.getBookmark);
}
if(b.mark){
var _c=dijit.range.getIndex(b.mark.startContainer,this.editNode).o;
node=dijit.range.getNode(_c,this.editNode);
if(node){
_9={container:node,leftBound:b.mark.startOffset,rightBound:b.mark.endOffset};
}
}
}
}else{
if(_4.global.getSelection){
var _b=_4.global.getSelection();
if(_b){
var _d=_b.getRangeAt(0);
if(_d){
_9={container:_d.startContainer,leftBound:_d.startOffset,rightBound:_d.endOffset};
}
}
}
}
}
catch(e){
}
return _9;
},onKeyPress:function(e){
if(this.isVisualMode){
try{
var _f=(_2("ie"))?e.keyCode:e.charCode;
this._isKeyboardLayerRtl=null;
this._isKeyUpDone=false;
if(((_f>64)&&(_f<91))||((_f>96)&&(_f<123))){
this._isKeyboardLayerRtl=false;
}else{
if((_f>1487)&&!((_f>1631)&&(_f<1642))){
this._isKeyboardLayerRtl=true;
}else{
if((_f!=32)&&this._isKeyboardLayerRtl&&(((_f>47)&&(_f<58))||((_f>1631)&&(_f<1642)))){
this._isKeyboardLayerRtl=false;
}
}
}
var _10=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if(this._isKeyboardLayerRtl!=null){
if((this._isKeyboardLayerRtl!=(this.dir.toLowerCase()=="rtl"))&&(this._savedPushBoundaries==null)){
this._savedPushBoundaries=_10;
}
if(this._isKeyboardLayerRtl==(this.dir.toLowerCase()=="rtl")){
if((this._savedPushBoundaries!=null)&&(_10.leftBound==this._savedPushBoundaries.leftBound)){
var _11=(this._savedPushBoundaries.rightBound)?this._savedPushBoundaries.rightBound:null;
_4.withGlobal(this.window,"_adjustCursorOnPushTyping",this,[_11]);
}
this._savedPushBoundaries=null;
}
}
if(this._isKeyboardLayerRtl!=null){
if(_10&&(_10.rightBound!=undefined)){
this._selectionLength=Math.abs(_10.rightBound-_10.leftBound);
}else{
this._selectionLength=0;
}
}
if(this._isOverWriteMode()&&(this._isKeyboardLayerRtl!=null)&&((this.dir.toLowerCase()=="rtl")!=this._isKeyboardLayerRtl)){
_4.withGlobal(this.window,"_adjustCursorOnPushTyping",this,[null]);
}
}
catch(e){
}
}
this.inherited(arguments);
},onKeyUp:function(e){
this.inherited(arguments);
if(!this.isVisualMode){
return;
}
try{
if(!this._isKeyUpDone&&(this._isKeyboardLayerRtl!=null)&&!e.ctrlKey&&((this.dir.toLowerCase()=="rtl")!=this._isKeyboardLayerRtl)){
_4.withGlobal(this.window,"_adjustCursorOnPushTyping",this,[null]);
if(this._savedPushBoundaries!=null){
if(this._isOverWriteMode()){
var _13=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if(this._savedPushBoundaries.leftBound>0&&(this._savedPushBoundaries.leftBound>_13.leftBound)){
this._savedPushBoundaries.leftBound-=1;
}
}else{
this._savedPushBoundaries.rightBound+=(this._selectionLength!=0)?(1-this._selectionLength):1;
}
}
}
this._isKeyUpDone=true;
var key=e.keyCode,ks=_5;
switch(key){
case ks.LEFT_ARROW:
case ks.RIGHT_ARROW:
if(this._savedPushBoundaries!=null){
var _16=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if((_16==null)||(_16.container!=this._savedPushBoundaries.container)||(_16.rightBound>this._savedPushBoundaries.rightBound)||(_16.leftBound<this._savedPushBoundaries.leftBound)){
this._savedPushBoundaries=null;
}
}
break;
case ks.UP_ARROW:
case ks.DOWN_ARROW:
if(this._savedPushBoundaries!=null){
var _16=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if((_16==null)||(_16.container!=this._savedPushBoundaries.container)){
this._savedPushBoundaries=null;
}
}
break;
case ks.HOME:
case ks.END:
case ks.PAGE_UP:
case ks.PAGE_DOWN:
case ks.ENTER:
this._savedPushBoundaries=null;
break;
}
}
catch(e){
}
},onKeyDown:function(e){
if(_2("ie")&&(65<=e.keyCode&&e.keyCode<=90)){
return;
}
var key=e.keyCode,ks=_5;
if(this.isVisualMode&&(key==ks.BACKSPACE||key==ks.DELETE)&&(this._savedPushBoundaries!=null)){
if(this._savedPushBoundaries.leftBound==this._savedPushBoundaries.rightBound){
this._savedPushBoundaries=null;
}
if(this._savedPushBoundaries!=null){
var _1a=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if((_1a!=null)&&(_1a.rightBound!=undefined)){
this._selectionLength=Math.abs(_1a.rightBound-_1a.leftBound);
}else{
this._selectionLength=0;
}
if((this._savedPushBoundaries.leftBound>0)&&(this._savedPushBoundaries.rightBound>0)){
if((key==ks.BACKSPACE)&&(this._selectionLength==0)&&(this._savedPushBoundaries.leftBound==_1a.leftBound)){
this._savedPushBoundaries.leftBound-=1;
}
this._savedPushBoundaries.rightBound-=(this._selectionLength!=0)?(this._selectionLength):1;
}else{
if(this._selectionLength>0){
var _1b=Math.abs(this._savedPushBoundaries.rightBound-this._savedPushBoundaries.leftBound);
if(this._selectionLength>=_1b){
this._savedPushBoundaries=null;
}
}
}
}
}
this.inherited(arguments);
if((key==_5.SHIFT)&&e.ctrlKey){
this.dir=((this.dir.toLowerCase()=="rtl")?"ltr":"rtl");
if(this.focusNode.style.direction!=this.dir){
this.focusNode.style.direction=this.dir;
this._savedPushBoundaries=null;
}
}
},_onMouseUp:function(e){
if((this._savedPushBoundaries!=null)&&(this._savedPushBoundaries.leftBound>0)&&(this._savedPushBoundaries.rightBound>0)){
var _1d=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if((_1d==null)||(_1d.container!=this._savedPushBoundaries.container)||(_1d.rightBound>this._savedPushBoundaries.rightBound)||(_1d.leftBound<this._savedPushBoundaries.leftBound)){
this._savedPushBoundaries=null;
}
}
this.inherited(arguments);
},_onPaste:function(e){
this._savedPushBoundaries=null;
},_onCut:function(e){
if(this._savedPushBoundaries!=null){
var _20=_4.withGlobal(this.window,"_getCursorPos",this,[]);
if((_20!=null)&&(_20.rightBound!=undefined)){
this._selectionLength=Math.abs(_20.rightBound-_20.leftBound);
}else{
this._selectionLength=0;
}
if(this._selectionLength>0){
if((this._savedPushBoundaries.leftBound<_20.leftBound)&&(this._savedPushBoundaries.rightBound>_20.rightBound)){
this._savedPushBoundaries.rightBound-=(this._selectionLength);
}else{
this._savedPushBoundaries=null;
}
}
}
},_onBlur:function(e){
this.inherited(arguments);
if(this.isVisualMode){
this._savedPushBoundaries=null;
}
},onLoad:function(_22){
this.inherited(arguments);
if(this.isVisualMode){
this.editNode.style.unicodeBidi="bidi-override";
this.connect(this.editNode,"onmouseup",this._onMouseUp);
this.connect(this.editNode,"oncut",this._onCut);
this.connect(this.editNode,"onpaste",this._onPaste);
if(this.document.createStyleSheet){
var _23=this.document.styleSheets[this.document.styleSheets.length-1];
_23.addRule("p","{unicode-bidi: bidi-override}");
_23.addRule("li","{unicode-bidi: bidi-override}");
_23.addRule("div","{unicode-bidi: bidi-override}");
_23.addRule("blockquote","{unicode-bidi: bidi-override}");
}else{
if(_2("mozilla")){
this.document.styleSheets[0].insertRule("div,ul>li,ol>li,blockquote {unicode-bidi: bidi-override}",0);
}
}
}
},_doSymSwap:function(_24){
switch(_24){
case "(":
_24=")";
break;
case ")":
_24="(";
break;
case "{":
_24="}";
break;
case "}":
_24="{";
break;
case "[":
_24="]";
break;
case "]":
_24="[";
break;
case "<":
_24=">";
break;
case ">":
_24="<";
break;
}
return _24;
},_reverseText:function(_25){
var len=_25.length;
if(len<2){
return _25;
}
var ret="";
for(var i=0;i<len;i++){
ret+=this._doSymSwap(_25.charAt(len-i-1));
}
return ret;
},_reverseNodes:function(_29){
try{
var len=_29.childNodes.length;
if(len>0){
for(var i=0;i<len;i++){
this._reverseNodes(_29.childNodes[i]);
}
}else{
if(_29.nodeType==1){
tagName=_29.tagName.toLowerCase();
if((tagName!="style")&&(tagName!="script")&&(tagName!="br")){
_29.innerHTML=this._reverseText(_29.innerHTML);
}
}else{
if(_29.nodeType==3){
_29.nodeValue=this._reverseText(_29.nodeValue);
}
}
}
}
catch(e){
}
return _29;
},_isOverWriteMode:function(){
return ((_2("ie"))?document.queryCommandValue("OverWrite"):false);
}});
});
