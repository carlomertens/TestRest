define(["dojo/_base/declare","dojo/has","dijit/form/TextBox","dijit/form/_TextBoxMixin","dojox/string/BidiEngine"],function(_1,_2,_3,_4,_5){
var _6=String.fromCharCode(8237);
var _7=String.fromCharCode(8238);
var _8="  Typing Orientation: ";
var _9="  Autopush: ";
var _a="";
var _b=null;
var _c=null;
var _d=[1513,1504,1489,1490,1511,1499,1506,1497,1503,1495,1500,1498,1510,1502,1501,1508,47,1512,1491,1488,1493,1492,39,1505,1496,1494,1507];
var _e=[1507,61,1514,45,1509,46,59];
var _f=[58,43,62,95,60,63,126];
var _10=[93,null,91,44];
var _11=[125,null,123,34];
var _12=[59,61,44,45,46,47,96];
var _13=[58,43,60,95,62,63,126];
var _14=[91,null,93,39];
var _15=[123,null,125,34];
var _16=[1588,1575,1572,1610,1579,1576,1604,1575,1607,1578,1606,1605,1577,1609,1582,1581,1590,1602,1587,1601,1593,1585,1589,1569,1594,1574];
var _17=[1616,1570,125,93,1615,91,1571,1571,247,1600,1548,47,8217,1570,215,1563,1614,1612,1613,1573,8216,123,1611,1618,1573,126];
var _18=[1603,61,1608,45,1586,1592,1584];
var _19=[58,43,44,95,46,1567,1617];
var _1a=[1580,92,1583,1591];
var _1b=[60,124,62,34];
var _1c=65;
var _1d=90;
var _1e=false;
var _1f=0;
var _20=0;
var _21=false;
var _22=false;
var _23=0;
var _24=0;
var _25=false;
var _26=false;
var _27=false;
var _28=false;
var _29=false;
var _2a=false;
var _2b=(navigator.platform.indexOf("Linux")!=-1)?true:false;
var _2c=false;
var _2d=new _5();
return _1("bidi.TextBoxVisBidi",[_3],{isVisualMode:false,isVisualInput:false,dir:"ltr",autoPush:true,autoKeyboardLayerSwitch:false,isArabic:false,gKeyCode:0,layerSwitched:false,lastKeyPressed:0,dirChForBidiFormat:(this.dir=="rtl")?"R":"L",postCreate:function(){
if(this.isVisualMode&&!this.isVisualInput){
var str=this.textbox.value;
str=this.bidiTransform(str,"ILYNN","VLYNN");
this.textbox.value=str;
}
this.textbox.setAttribute("value",this.textbox.value);
if(this.isVisualMode){
this.connect(this.textbox,"onkeyup",this._onKeyUpBidi);
this.connect(this.textbox,"onkeydown",this._onKeyDownBidi);
this.connect(this.textbox,"onkeypress",this._onKeyPressBidi);
this.connect(this.textbox,"onmouseup",this._onMouseUp);
this.connect(this.textbox,"onmousedown",this._onMouseDown);
if(this.focusNode.maxLength==-1){
this.focusNode.maxLength=100000;
}
if(_2("ie")){
if(this.dir=="rtl"){
this.focusNode.value=_7+this.focusNode.value;
}else{
this.focusNode.value=_6+this.focusNode.value;
}
this.connect(this.textbox,"onselect",this._onSelect);
this.connect(this.textbox,"onmouseout",this._onMouseOut);
this.connect(this.textbox,"oncopy",this._onCopy);
this.connect(this.textbox,"oncut",this._onCut);
this.connect(this.textbox,"onpaste",this._onPaste);
this.connect(this.textbox,"oncontextmenu",this._onContextMenu);
}else{
}
this.focusNode.style.unicodeBidi="bidi-override";
this.focusNode.style.direction=this.dir;
this.focusNode.style.textAlign=(this.dir=="rtl")?"right":"left";
}
this.Autopush_field=document.getElementsByName("AUTOPUSH")[0];
if(this.Autopush_field){
this.autoPush=((this.Autopush_field.value).indexOf("autopush=on")>=0)?true:false;
}
this.inherited(arguments);
},_onContextMenu:function(_2f){
if(this.isVisualMode){
var obj=this.focusNode;
var _31=this.getCaretPos(_2f,obj);
if(_31){
_20=Math.min(_31[0],_31[1]);
_1f=Math.max(_31[0],_31[1]);
}
}
},_onKeyUpBidi:function(_32){
if(!this.isVisualMode){
return;
}
var _33=_32.keyCode;
var obj=this.focusNode;
fieldDirection=(obj.style.direction=="ltr")?false:true;
_26=false;
_27=false;
if(_2("ie")&&_20==0){
this.preventEraseMarker();
}
if(((_33==dojo.keys.LEFT_ARROW)&&(fieldDirection==false))||((_33==dojo.keys.RIGHT_ARROW)&(fieldDirection==true))){
if(_21&(_1f<_23)){
this.toggleFieldOrient(obj,true,false);
}
}else{
if(((_33==dojo.keys.RIGHT_ARROW)&&(fieldDirection==false))||((_33==dojo.keys.LEFT_ARROW)&(fieldDirection==true))){
if(_21&(_1f>_24)){
this.toggleFieldOrient(obj,true,false);
}
}else{
if(_2("ie")&&(_32.ctrlKey||_28)&&(_33==_1d)){
this._onContextMenu(_32);
_28=false;
}
}
}
},setCaretPositions:function(_35,_36){
_20=_35;
_1f=_36;
},_onKeyDownBidi:function(_37){
if(!this.isVisualMode){
return;
}
var _38=this.gKeyCode=_37.keyCode;
var obj=this.focusNode;
if(!_2("ie")){
_1f=obj.selectionEnd;
_20=obj.selectionStart;
}else{
var _3a=this.getCaretPos(_37,obj);
if(_3a){
_20=Math.min(_3a[0],_3a[1]);
_1f=Math.max(_3a[0],_3a[1]);
this.setCaretPositions(_20,_1f);
}
}
fieldDirection=(obj.style.direction=="ltr")?false:true;
if(_37.shiftKey){
this.processPush(obj,_38);
}
if(!_2b&&_37.shiftKey&&_37.altKey){
_25=!_25;
this.showStatusBar(obj);
if(this.autoKeyboardLayerSwitch){
this.layerSwitched=!this.layerSwitched;
}
}
if((_37.altKey&&!_2b)||(_37.shiftKey&&_2b)){
if(((_38==111)&&!_2b)||((_38==102)&&_2b)){
this.autoPush=!this.autoPush;
if(this.Autopush_field){
this.Autopush_field.value="autoreverse=off"+((this.autoPush)?"autopush=on":"autopush=off");
}
if(_21){
this.toggleFieldOrient(obj,true,false);
}
this.showStatusBar(obj);
_26=true;
}else{
if(((_38==144)&&!_2b)||((_38==100)&&_2b)){
this.processFieldReverse(obj,true);
_26=true;
}
}
}else{
if(_2("ie")){
if(_37.ctrlKey&&(_38==_1c)){
this._onDblClick(_37);
}else{
if(_38==dojo.keys.ENTER){
if(_21||_1e){
this.toggleFieldOrient(obj,false,false);
}
}else{
if(_37.ctrlKey&&(_38==_1d)){
_28=true;
}
}
}
}
}
if(_38==dojo.keys.HOME){
this.processHome(obj);
_27=true;
}else{
if(_38==dojo.keys.END){
this.processEnd(obj);
_27=true;
}else{
if(_38==dojo.keys.BACKSPACE){
this.processBackspace(obj,_37);
_27=true;
}else{
if(_38==dojo.keys.DELETE){
this.processDelete(obj);
_27=true;
}else{
if(((_38==dojo.keys.LEFT_ARROW)&&(fieldDirection==0))||((_38==dojo.keys.RIGHT_ARROW)&&(fieldDirection==1))){
this.processLeftarrow(_37);
_27=true;
}else{
if(((_38==dojo.keys.RIGHT_ARROW)&&(fieldDirection==0))||((_38==dojo.keys.LEFT_ARROW)&&(fieldDirection==1))){
this.processRightarrow(_37);
_27=true;
}else{
if(_38==dojo.keys.PAGE_UP||_38==dojo.keys.PAGE_DOWN||_38==dojo.keys.UP_ARROW||_38==dojo.keys.DOWN_ARROW){
this.preventDefault(_37);
}
}
}
}
}
}
}
},_onKeyPressBidi:function(_3b){
this.lastKeyPressed=_3b.keyChar;
if(!this.isVisualMode){
return;
}
if(this.pushJustTurnedOff){
this.pushJustTurnedOff=false;
if(_3b.keyChar=="/"){
_3b.preventDefault();
}
return;
}
if(_2a||_26||(_3b.returnValue==false)){
this.preventDefault(_3b);
_26=false;
_2a=false;
return;
}else{
if(_27){
_27=false;
return;
}
}
var _3c=null;
var obj=this.focusNode;
charClass=fieldDirection=(obj.style.direction=="rtl");
if(_2("ie")){
if(_3b.keyCode!=_3b.charCode){
return;
}
if(obj.value.length==0){
obj.value=obj.style.direction=="ltr"?_6:_7;
_1f=1;
}
ieKey=this.changeKey(_3b.keyCode,fieldDirection,_3b,obj);
if(this.isArabic&&_25&&(ieKey>47)&&(ieKey<58)){
ieKey=_3b.keyCode=ieKey+1584;
}
}else{
ieKey=_3b.charCode;
if(_3b.keyCode==dojo.keys.ENTER){
if(_21||_1e){
this.toggleFieldOrient(obj,false,false);
}
}else{
if(_3b.keyCode==dojo.keys.INSERT){
_2c=!_2c;
}else{
if((ieKey>31)&&!_3b.altKey&&!_3b.ctrlKey){
charCode=ieKey;
ieKey=this.changeKey(ieKey,fieldDirection,_3b,obj);
if(charCode!=ieKey){
_3c=ieKey;
}
if(this.isArabic&&_25&&(ieKey>47)&&(ieKey<58)){
_3c=ieKey+1584;
}
}
}
}
}
if(((ieKey>64)&&(ieKey<91))||((ieKey>96)&&(ieKey<123))){
_25=charClass=false;
}else{
if((ieKey>1487)&&!((ieKey>1631)&&(ieKey<1642))){
_25=charClass=true;
}else{
if(ieKey==32){
charClass=_25;
}else{
if(fieldDirection&&(((ieKey>47)&&(ieKey<58))||((ieKey>1631)&&(ieKey<1642)))){
charClass=false;
}
}
}
}
if(_29!=charClass&&ieKey!=0){
_29=charClass;
this.showStatusBar(obj);
}
if(this.autoPush){
fieldDirection=(obj.style.direction=="rtl");
if(fieldDirection!=charClass){
_1f=(_2("ie"))?_1f:obj.selectionEnd;
var _3e=_21&&((_1f==_24)||(_1f==obj.value.length));
this.toggleFieldOrient(obj,true,_3e);
if(this.autoKeyboardLayerSwitch&&(((ieKey>47)&&(ieKey<58))||((ieKey>1631)&&(ieKey<1642)))){
this.layerSwitched=true;
}
}
}
if((ieKey>31)&&!_3b.altKey&&!_3b.ctrlKey){
var _3f=(_2("ie"))?Math.abs(_20-_1f):obj.selectionEnd-obj.selectionStart;
if(!_2("ie")){
_1f=obj.selectionEnd;
_20=obj.selectionStart;
}
if(!this.isOverWriteMode()||(_3f>0)){
var _40=obj.value;
if(_40.length-_3f>=obj.maxLength){
var _41=(_21^_1e)?_40.charAt(0):_40.charAt(_40.length-1);
if(_41==" "){
if(_21^_1e){
obj.value=_40.substring(1);
if(_1f>0){
_20--;
_1f--;
_24--;
_23--;
}
}else{
obj.value=_40.substring(0,_40.length-1);
}
if(_2("ie")){
this.setSelectedRange(obj,_20,_20);
}else{
_3c=ieKey;
}
}else{
this.preventDefault(_3b);
_a="X";
this.showStatusBar(obj);
return;
}
}
}else{
if(_1f>=obj.maxLength){
this.preventDefault(_3b);
_a="X";
this.showStatusBar(obj);
return;
}
}
if(_21){
if(!this.isOverWriteMode()||(_24==_1f)||(_3f>0)){
_24+=1-_3f;
}
}
if(_2("ie")){
_20=_1f=Math.min(_20,_1f)+1;
}else{
_3c=(_3c!=null)?_3c:ieKey;
if(_2b&&fieldDirection&&this.isArabic&&(ieKey>1487)){
_3b.preventDefault();
if(this.isOverWriteMode()&&(_20==_1f)){
_40=obj.value.substring(0,_20)+String.fromCharCode(_3c)+obj.value.substring(_1f+1);
}else{
_40=obj.value.substring(0,_20)+String.fromCharCode(_3c)+obj.value.substring(_1f);
}
obj.value=ara_type(_20,_40,fieldDirection);
obj.setSelectionRange(_20+1,_20+1);
}else{
if((_3c!=null)||this.isOverWriteMode()){
_3b.preventDefault();
this.replaceFieldText(obj,_3c);
}
}
}
}
},_onMouseOut:function(_42){
if(!this.isVisualMode){
return;
}
if(_2("ie")){
if(_22&&(_42.x<0)){
var obj=this.focusNode;
_1f=1;
if(obj.style.direction=="rtl"){
_1f=obj.value.length-_1f;
}
}
}
var _44=document.getElementById("hint");
if(_44!=null){
if(_44.length>0){
_44[0].style.visibility="hidden";
}else{
_44.style.visibility="hidden";
}
}
},_onMouseUp:function(_45){
if(!this.isVisualMode){
return;
}
var obj=this.focusNode;
var _47=document.getElementById("hint");
if(_47!=null){
if(_47.length>0){
_47[0].style.visibility="hidden";
}else{
_47.style.visibility="hidden";
}
}
_22=false;
var _48=this.getCaretPos(_45,obj);
if(_48&&(!_2("ie")||_45.button!=2)){
_20=Math.min(_48[0],_48[1]);
_1f=Math.max(_48[0],_48[1]);
if(_2("ie")&&_20==0){
this.preventEraseMarker();
}
}
if(_21&&((_1f>_24)||(_20<_23))){
this.toggleFieldOrient(obj,true,false);
}
},_onMouseDown:function(_49){
if(!this.isVisualMode){
return;
}
if(_49.button==2){
var _4a=document.getElementById("hint");
if(_4a!=null){
var _4b=(_4a.length>0)?_4a[0]:_4a;
_4b.style.left=(_49.clientX-_4a.scrollWidth>0)?(_49.clientX-_4a.scrollWidth):0;
_4b.style.top=_49.clientY;
_4b.style.visibility="visible";
}
}
if(_2("ie")){
_22=true;
}
},bidiTransform:function(_4c,_4d,_4e){
return _2d.bidiTransform(_4c,_4d,_4e);
},_onCopy:function(_4f){
if(!this.isVisualMode){
return;
}
document.body.oncopy=null;
range=document.selection.createRange();
text=range.text;
if((text.charAt(0)==_6)||(text.charAt(0)==_7)){
text=text.substring(1);
}
try{
var _50=this.bidiTransform(text,"V"+this.dirChForBidiFormat+"YNN","ILYNN");
window.clipboardData.setData("Text",_50);
_4f.returnValue=false;
}
catch(e){
}
},_onCut:function(_51){
if(!this.isVisualMode){
return;
}
if(_21){
_24-=Math.abs(_20-_1f);
}
this._onCopy(_51);
_1f=Math.min(_20,_1f);
_20=_1f;
_51.returnValue=false;
range=document.selection.clear();
},_onPaste:function(_52){
if(!this.isVisualMode){
return;
}
if(_20==0){
this.preventEraseMarker();
}
var obj=this.focusNode;
_52.returnValue=false;
var _54=document.selection.createRange();
var _55="";
try{
var _56="";
if(window.clipboardData){
_56=window.clipboardData.getData("Text");
}
if(_56){
_55=_56;
}
}
catch(e){
}
var _57=_55.length;
_20=Math.min(_20,_1f);
_57=Math.min(_57,obj.maxLength-_20);
delta=_57-(_54.text).length;
if(delta>0){
if(obj.value.length<_20+_57){
delta=obj.value.length-(_20+(_54.text).length);
}
_54.moveEnd("character",delta);
}
var _58=_55.substring(0,_57);
if(_54.parentElement()!=obj){
obj.value=this.bidiTransform(_58,"ILYNN","V"+this.dirChForBidiFormat+"YNN");
}else{
_54.text=this.bidiTransform(_58,"ILYNN","V"+this.dirChForBidiFormat+"YNN");
}
_20=_1f=_20+_57;
if(_21){
this.toggleFieldOrient(obj,true,false);
}
},_onDblClick:function(_59){
if(this.isVisualMode){
var obj=this.focusNode;
_20=(_2("ie"))?1:0;
_1f=obj.value.length;
if(_21){
this.toggleFieldOrient(obj,false,false);
_21=false;
}
this.setSelectedRange(obj,_20,_1f);
}
},_onBlur:function(_5b){
if(this.isVisualMode){
var obj=this.focusNode;
if(!_2b||!_26){
if(_21){
this.toggleFieldOrient(obj,false,false);
_21=false;
}
if(_1e){
this.processFieldReverse(obj,false);
}
}
}
this.inherited(arguments);
},_onFocus:function(_5d){
if(this.isVisualMode){
this.Autopush_field=document.getElementsByName("AUTOPUSH")[0];
if(this.Autopush_field){
this.autoPush=((this.Autopush_field.value).indexOf("autopush=on")>=0)?true:false;
}
if(_21){
this.toggleFieldOrient(obj,true,false);
}
_1e=false;
var obj=this.focusNode;
var _5f=obj.value;
if(_2("ie")){
var _60=this.getCaretPos(_5d,obj);
if(_60){
_20=Math.min(_60[0],_60[1]);
_1f=Math.max(_60[0],_60[1]);
if(_20==0){
this.preventEraseMarker();
}
}
}
if(this.autoKeyboardLayerSwitch){
this.layerSwitched=false;
_25=(obj.style.direction=="rtl")^this.layerSwitched;
}
if(_5f.length==0){
obj.style.textAlign=(obj.style.direction=="rtl")?"right":"left";
}
if(!_2("ie")&&_2b&&(_1f>0)){
obj.setSelectionRange(obj.selectionStart,obj.selectionEnd);
}
this.showStatusBar(obj);
}
this.inherited(arguments);
},_onSelect:function(_61){
if(this.isVisualMode){
var obj=this.focusNode;
if(obj.value.length<2){
_20=_1f=0;
return;
}
if(document.selection.createRange().text.length==obj.value.length){
this._onDblClick(_61);
_61.returnValue=false;
}
}
},setSelectedRange:function(obj,_64,_65){
if(_2("ie")){
var _66=obj.createTextRange();
if(_66){
_66.collapse();
_66.moveEnd("character",_65);
_66.moveStart("character",_64);
_66.select();
}
}else{
obj.setSelectionRange(_64,_65);
}
},getCaretPos:function(_67,obj){
if(!_2("ie")){
return new Array(_67.target.selectionStart,_67.target.selectionEnd);
}else{
try{
var _69=document.selection.createRange().duplicate();
var _6a=_69.duplicate();
var _6b=_69.text.length;
_6a.expand("textedit");
while(_69.compareEndPoints("StartToStart",_6a)>0){
_69.moveStart("character",-1);
}
var _6c=_69.text.length;
}
catch(e){
return new Array(0,0);
}
return new Array(_6c-_6b,_6c);
}
},isOverWriteMode:function(){
if(_2("ie")){
return document.queryCommandValue("OverWrite");
}else{
return _2c;
}
},preventEraseMarker:function(){
var rng=this.focusNode.createTextRange();
rng.moveStart("character",1);
_20=1;
if(_1f==0){
_1f=_20;
}
rng.select();
},swapBrackets:function(_6e,_6f,_70){
swapChar=this.gKeyCode;
if(_2b){
if(_6f^(_25&&!this.isArabic)){
if(_70==40){
_70=41;
}else{
if(_70==41){
_70=40;
}else{
if(_70==60){
_70=62;
}else{
if(_70==62){
_70=60;
}else{
if(_70==91){
_70=93;
}else{
if(_70==93){
_70=91;
}else{
if(_70==123){
_70=125;
}else{
if(_70==125){
_70=123;
}
}
}
}
}
}
}
}
}
return _70;
}else{
if(_6f){
if(swapChar==219){
if(!this.isArabic){
_70=(_6e.shiftKey)?125:93;
}
}else{
if(swapChar==221){
if(!this.isArabic){
_70=(_6e.shiftKey)?123:91;
}
}else{
if(_6e.shiftKey&&(swapChar==48)){
_70=40;
}else{
if(_6e.shiftKey&&(swapChar==57)){
_70=41;
}else{
if(!this.isArabic&&_6e.shiftKey&&(swapChar==188)){
_70=62;
}else{
if(!this.isArabic&&_6e.shiftKey&&(swapChar==190)){
_70=60;
}
}
}
}
}
}
}else{
if(swapChar==219){
if(this.isArabic){
if(_6e.shiftKey&&_25){
_70=62;
}
}else{
_70=(_6e.shiftKey)?123:91;
}
}else{
if(swapChar==221){
if(this.isArabic){
if(_6e.shiftKey&&_25){
_70=60;
}
}else{
_70=(_6e.shiftKey)?125:93;
}
}else{
if(_6e.shiftKey&&(swapChar==48)){
_70=41;
}else{
if(_6e.shiftKey&&(swapChar==57)){
_70=40;
}else{
if(!this.isArabic&&_6e.shiftKey&&(swapChar==188)){
_70=60;
}else{
if(!this.isArabic&&_6e.shiftKey&&(swapChar==190)){
_70=62;
}
}
}
}
}
}
}
}
return _70;
},processLamAlef:function(_71,_72,_73,obj){
if((_71==1604)&&((this.gKeyCode!=71)||(_73.shiftKey&&this.gKeyCode==71))){
_2a=true;
}
var _75=null;
if(this.gKeyCode==71){
_75=1571;
}else{
if(this.gKeyCode==84){
_75=1573;
}else{
if(this.gKeyCode==66){
_75=(_73.shiftKey)?1570:1575;
}
}
}
if((obj.type!="password")&&!_72&&this.autoPush){
toggleFieldOrient(obj,true,_21&&(_1f==_24));
_72=!_72;
}
if(_21){
var _76=(_2("ie"))?_1f:obj.selectionStart;
if(!this.isOverWriteMode()||(_24==_76)){
_24+=1;
}
}
if(_2("ie")){
var _77=(_72)?String.fromCharCode(1604)+String.fromCharCode(_75):String.fromCharCode(_75)+String.fromCharCode(1604);
_73.returnValue=false;
tmp=Math.min(_20,_1f);
_1f=Math.max(_20,_1f);
_20=tmp;
_71=1604;
if(this.isOverWriteMode()&&(_1f==_20)){
obj.value=obj.value.substring(0,_20)+_77+obj.value.substring(_1f+1);
}else{
obj.value=obj.value.substring(0,_20)+_77+obj.value.substring(_1f);
}
_1f=_20=_20+1;
this.setSelectedRange(obj,_20+1,_20+1);
}else{
_73.preventDefault();
if(_72){
replaceFieldText(obj,1604);
_71=_75;
}else{
replaceFieldText(obj,_75);
_71=1604;
}
}
return _71;
},changeKey:function(_78,_79,_7a,obj){
if(this.autoKeyboardLayerSwitch&&!((this.gKeyCode<62&&this.gKeyCode>47)||(this.gKeyCode<112&&this.gKeyCode>95)||this.gKeyCode==220||this.gKeyCode==32)){
if(this.isArabic){
_78=this.processAutoKeyboardLayerSwitchArabic(_78,_79,_7a,obj);
}else{
_78=this.processAutoKeyboardLayerSwitchHebrew(_78,_79,_7a,obj);
}
}else{
if(this.autoKeyboardLayerSwitch&&!_2("ie")&&this.gKeyCode==59){
if(_79^this.layerSwitched){
if(_7a.shiftKey){
_78=58;
}else{
_78=(this.isArabic)?1603:1507;
}
}else{
_78=(_7a.shiftKey)?this.gKeyCode-1:this.gKeyCode;
}
}else{
_78=this.swapBrackets(_7a,_79,_78);
}
}
if(_2("ie")){
_7a.keyCode=_78;
}
return _78;
},processAutoKeyboardLayerSwitchHebrew:function(_7c,_7d,_7e,obj){
if(this.gKeyCode!=_7c){
if(_7d^this.layerSwitched){
if(this.gKeyCode<186){
_7c=_d[this.gKeyCode-65];
}else{
if(this.gKeyCode<219){
_7c=(_7e.shiftKey)?_f[this.gKeyCode-186]:_e[this.gKeyCode-186];
}else{
if(this.gKeyCode<223){
_7c=(_7e.shiftKey)?_11[this.gKeyCode-219]:_10[this.gKeyCode-219];
}
}
}
}else{
if(this.gKeyCode>=65&&this.gKeyCode<=90){
_7c=this.gKeyCode+32;
}else{
_7c=forceToEnglishLayer(_7c,_7e);
}
}
}
return _7c;
},processAutoKeyboardLayerSwitchArabic:function(_80,_81,_82,obj){
if((this.gKeyCode==66)||(_82.shiftKey&&((this.gKeyCode==71)||(this.gKeyCode==84)))){
if(_81^this.layerSwitched){
return processLamAlef(_80,_81,_82,obj);
}else{
if(_80==1604){
_2a=true;
}
}
}
if(_81^this.layerSwitched){
if(this.gKeyCode<186){
_80=(_82.shiftKey)?_17[this.gKeyCode-65]:_16[this.gKeyCode-65];
}else{
if(this.gKeyCode<219){
_80=(_82.shiftKey)?_19[this.gKeyCode-186]:_18[this.gKeyCode-186];
}else{
if(this.gKeyCode<223){
_80=(_82.shiftKey)?_1b[this.gKeyCode-219]:_1a[this.gKeyCode-219];
}
}
}
}else{
if((this.gKeyCode!=_80)&&(this.gKeyCode!=_80-32)){
_80=forceToEnglishLayer(_80,_82);
}
}
return _80;
},forceToEnglishLayer:function(_84,_85){
if(this.gKeyCode<186){
_84=(_85.shiftKey)?this.gKeyCode:this.gKeyCode+32;
}else{
if(this.gKeyCode<219){
_84=(_85.shiftKey)?_13[this.gKeyCode-186]:_12[this.gKeyCode-186];
}else{
if(this.gKeyCode<223){
_84=(_85.shiftKey)?_15[this.gKeyCode-219]:_14[this.gKeyCode-219];
}
}
}
return _84;
},replaceFieldText:function(obj,_87){
if(this.isOverWriteMode()&&(_20==_1f)){
obj.value=obj.value.substring(0,_20)+String.fromCharCode(_87)+obj.value.substring(_1f+1);
}else{
obj.value=obj.value.substring(0,_20)+String.fromCharCode(_87)+obj.value.substring(_1f);
}
obj.setSelectionRange(_20+1,_20+1);
},doSymSwap:function(_88){
switch(_88){
case "(":
_88=")";
break;
case ")":
_88="(";
break;
case "{":
_88="}";
break;
case "}":
_88="{";
break;
case "[":
_88="]";
break;
case "]":
_88="[";
break;
case "<":
_88=">";
break;
case ">":
_88="<";
break;
}
return _88;
},processHome:function(obj){
if(_21){
_20=_1f=obj.value.length;
}else{
_20=_1f=(_2("ie"))?1:0;
}
if(_2("ie")){
event.returnValue=false;
this.setSelectedRange(obj,_1f,_1f);
}
if(_21&(_1f>_24)){
this.toggleFieldOrient(obj,true,false);
}
},processEnd:function(obj){
if(_21){
_20=_1f=(_2("ie"))?1:0;
}else{
_20=_1f=obj.value.length;
}
if(_2("ie")){
event.returnValue=false;
this.setSelectedRange(obj,_1f,_1f);
}
if(_21&(_1f<_23)){
this.toggleFieldOrient(obj,true,false);
}
},toggleFieldOrient:function(obj,_8c,_8d){
var len=obj.value.length;
var _8f=0;
if(!_2("ie")){
_20=obj.selectionStart;
_1f=obj.selectionEnd;
}
obj.style.direction=(obj.style.direction=="rtl")?"ltr":"rtl";
if(_2("ie")){
if(obj.value.charAt(0)==_6){
obj.value=_7+obj.value.substring(1);
}else{
if(obj.value.charAt(0)==_7){
obj.value=_6+obj.value.substring(1);
}
}
}
obj.value=this.reverseText(obj.value);
if(this.autoKeyboardLayerSwitch){
this.layerSwitched=false;
}
if(_8c){
_21=!_21;
var _90=(_2("ie"))?1:0;
if(_21){
_8f=Math.abs(_20-_1f);
_24=_23=_20=len-Math.max(_20,_1f)+_90;
_1f=_20+_8f;
}else{
if(_8d){
_1f=_23;
}
_20=_1f=len-_1f+_90;
}
this.setSelectedRange(obj,_20,_1f);
}
this.showStatusBar(obj);
},processPush:function(obj,_92){
if(((_92==144)&&!_2b)||((_92==103)&&_2b)){
_26=true;
if(!_21){
this.toggleFieldOrient(obj,true,true);
}
}else{
if(((_92==111)&&!_2b)||((_92==104)&&_2b)){
_26=true;
if(_21){
this.toggleFieldOrient(obj,true,true);
this.pushJustTurnedOff=true;
}
}
}
},reverseText:function(_93){
var _94="";
if(_93.charAt(0)==_6||_93.charAt(0)==_7){
_94+=_93.charAt(0);
_93=_93.substring(1);
}
var len=_93.length;
for(var i=0;i<len;i++){
symbol=_93.charAt(len-i-1);
symbol=this.doSymSwap(symbol);
_94+=symbol;
}
if(_2b&&this.isArabic){
_94.value=ara_type(0,_94,(_94.charAt(0)==_7));
}
return _94;
},processFieldReverse:function(obj,_98){
_1e=!_1e;
var len=obj.value.length;
var _9a=(_2("ie"))?1:0;
if(len==_9a){
obj.style.textAlign=(obj.style.direction=="rtl")?"left":"right";
_98=false;
}
this.toggleFieldOrient(obj,false,false);
if(_98){
_20=_1f=len-_1f+_9a;
this.setSelectedRange(obj,_1f,_1f);
}
},preventDefault:function(_9b){
if(_2("ie")){
_9b.returnValue=false;
}else{
_9b.preventDefault();
}
},processDelete:function(obj){
if(!_2("ie")){
_20=obj.selectionStart;
_1f=obj.selectionEnd;
}
if(_21&&(_20<_24)){
if(_20==_1f){
_24--;
}else{
_24-=Math.abs(_20-_1f);
}
}
if(_2("ie")){
_1f=Math.min(_20,_1f);
_20=_1f;
if(_20==0){
this.preventEraseMarker();
}
}
},processBackspace:function(obj,_9e){
if(_2("ie")){
var _9f=document.selection.createRange();
noSelection=((_9f.text).length==0);
}else{
_20=obj.selectionStart;
_1f=obj.selectionEnd;
noSelection=(_20==_1f);
}
if(noSelection){
var _a0=(_2("ie"))?1:0;
if(_1f>_a0){
if(_21&&(_1f<=_23)){
this.preventDefault(_9e);
_27=true;
return;
}
_1f--;
if(_21){
_24--;
}
}else{
this.preventDefault(_9e);
return;
}
}else{
if(_21){
_24-=Math.abs(_20-_1f);
}
_1f=Math.min(_20,_1f);
if(_2("ie")&&_1f==0){
this.preventEraseMarker();
}
}
_20=_1f;
},processLeftarrow:function(_a1){
if(_1f>1){
if(_a1.shiftKey){
if(_20==_1f){
_20=_1f;
}
_1f--;
}else{
if(_20!=_1f){
_20=_1f=Math.min(_20,_1f);
}else{
_20=_1f=_1f-1;
}
}
}else{
_a1.returnValue=false;
}
},processRightarrow:function(_a2){
if(_1f<this.focusNode.value.length){
if(_a2.shiftKey){
if(_20==_1f){
_20=_1f;
}
_1f++;
}else{
if(_20!=_1f){
_20=_1f=Math.max(_20,_1f);
}else{
_20=_1f=_1f+1;
}
}
}else{
_a2.returnValue=false;
}
},generateStatusStr:function(obj){
var _a4=_8;
_a4+=(obj.style.direction=="rtl")?"<=":"=>";
_a4+=_9;
_a4+=(this.autoPush)?"on":"off";
_a4+="  Keyboard:";
if(this.isArabic){
_a4+=(_25)?" A":" E";
}else{
_a4+=(_25)?" H":" E";
}
return _a4;
},showStatusBar:function(obj){
if(_2("ie")){
var _a6=this.generateStatusStr(obj);
window.status=_a6;
}
},get:function(_a7){
var _a8=this.inherited(arguments);
if(_a7=="value"){
if(_2("ie")&&((_a8.charAt(0)==_6)||(_a8.charAt(0)==_7))){
_a8=_a8.substring(1);
}
if(this.focusNode.style.direction=="rtl"){
_a8=this.reverseText(_a8);
}
}
return _a8;
},set:function(_a9,_aa){
var _ab=this.inherited(arguments);
if(_a9=="value"){
if(_2("ie")){
this.setValue(_aa);
}
}
return _ab;
},_setValueAttr:function(_ac,_ad,_ae){
this.inherited(arguments);
this.setValue(_ac);
},getValue:function(){
var _af=this.attr("value");
if(this.isVisualMode){
if(_2("ie")&&((_af.charAt(0)==_6)||(_af.charAt(0)==_7))){
_af=_af.substring(1);
}
if(this.focusNode.style.direction=="rtl"){
_af=this.reverseText(_af);
}
}
return _af;
},setValue:function(_b0){
if(this.isVisualMode&&_2("ie")){
if(this.dir=="rtl"){
this.focusNode.value=_7+_b0;
}else{
this.focusNode.value=_6+_b0;
}
}
},getDisplayedValue:function(){
var _b1=this.attr("displayedValue");
if(this.isVisualMode){
if(_2("ie")&&((_b1.charAt(0)==_6)||(_b1.charAt(0)==_7))){
_b1=_b1.substring(1);
}
if(this.focusNode.style.direction=="rtl"){
_b1=this.reverseText(_b1);
}
}
return _b1;
},setDisplayedValue:function(_b2){
if(this.isVisualMode){
if(this.focusNode.style.direction=="rtl"){
_b2=this.reverseText(_b2);
if(_2("ie")){
_b2=_7+_b2;
}
}else{
if(_2("ie")){
_b2=_6+_b2;
}
}
}
this.attr("displayedValue",_b2);
},hasOnlyEnglishChars:function(_b3){
for(var i=0;i<_b3.length;i++){
var ch=_b3.charAt(i);
if(!(ch>="A"&&ch<="Z")&&!(ch>="a"&&ch<="z")){
return false;
}
}
return true;
},hasOnlyBidiChars:function(_b6){
for(var i=0;i<_b6.length;i++){
var ch=_b6.charAt(i);
if((ch>="A"&&ch<="Z")||(ch>="a"&&ch<="z")){
return false;
}
}
return true;
}});
});
