define(["dojo/_base/declare","dojo/has","dijit/form/ComboBox","./TextBoxVisBidi"],function(_1,_2,_3,_4){
return _1("bidi.ComboBoxVisBidi",[_4,_3],{LRO:"?",RLO:"?",LRM:"?",RLM:"?",shouldAutoComplete:false,postCreate:function(){
if(this.isVisualMode&&this.isVisualInput){
var _5=this.store.data;
if(_5==null){
_5=this.store._jsonData;
if(_5!=null){
_5=_5.items;
for(var k=0;k<_5.length;k++){
var _7=_5[k].fullName;
_7=this.insertMarksMarkers(_7);
_7=this.bidiTransform(_7,"V"+this.dirChForBidiFormat+"YNN","I"+this.dirChForBidiFormat+"YNN");
_5[k].fullName=_7;
}
}
this.inherited(arguments);
return;
}
for(var k=0;k<_5.length;k++){
var _7=_5[k].name;
_7=this.insertMarksMarkers(_7);
_7=this.bidiTransform(_7,"V"+this.dirChForBidiFormat+"YNN","I"+this.dirChForBidiFormat+"YNN");
_5[k].name=_7;
}
}
this.inherited(arguments);
},insertMarksMarkers:function(_8){
var _9=(this.dir=="rtl")?this.RLM:this.LRM;
var _a=_8.search(/\d/);
while(_a>-1){
_8=_8.substring(0,_a)+_9+_8.substring(_a,_8.length);
_a++;
while(!isNaN(_8.charAt(_a))&&_a<_8.length){
_a++;
}
var _b=_8.substring(_a).search(/\d/);
if(_b>-1){
_a=_a+_b;
}else{
_a=-1;
}
}
return _8;
},removeMarksMarkers:function(_c){
var _d=(this.dir=="rtl")?this.RLM:this.LRM;
_c=_c.replace(_d,"");
return _c;
},validate:function(_e){
return true;
},_selectOption:function(_f){
this.shouldAutoComplete=true;
this.inherited(arguments);
if(this.textbox.style.direction!=this.dir){
this.textbox.style.direction=this.dir;
}
this.processComboSelection(_f);
this.textbox.value=this.removeMarksMarkers(this.textbox.value);
},_startSearch:function(key){
if(!this.isVisualMode){
this.inherited(arguments);
return;
}
if((_2("ie")&&key.length>1)||(!_2("ie")&&key.length>0)){
this.shouldAutoComplete=false;
var _11=_2("ie")?key.substring(1):key;
var _12=this.lastKeyPressed;
var _13;
var _14;
if((_12>="A"&&_12<="Z")||(_12>="a"&&_12<="z")){
if(this.hasOnlyEnglishChars(_11)){
_13=(this.dir=="ltr")?false:true;
_14=(this.dir=="rtl")?true:false;
}else{
_13=_14=true;
}
}else{
if(this.hasOnlyBidiChars(_11)){
_13=(this.dir=="ltr")?false:true;
}else{
_13=true;
_14=(this.dir=="ltr")?true:false;
}
}
if(_13){
_11=this.bidiTransform(_11,"V"+this.dirChForBidiFormat+"YNN","ILYNN");
}
if(_14){
_11=this.reverseText(_11);
}
key=_11;
}
this.inherited(arguments);
},_autoCompleteText:function(_15){
if(!this.isVisualMode){
this.inherited(arguments);
return;
}
var _16=this.focusNode.value.length;
if(_16==0||this.shouldAutoComplete){
_15=this.bidiTransform(_15,"V"+this.dirChForBidiFormat+"YNN","I"+this.dirChForBidiFormat+"YNN");
this.inherited(arguments);
}
if(this.focusNode.style.direction!=this.dir){
this.focusNode.style.direction=this.dir;
}
if(_2("ie")){
if(_15.charAt(0)!=this.RLO&&this.focusNode.style.direction=="rtl"){
this.focusNode.value=this.RLO+_15;
}else{
if(_15.charAt(0)!=this.LRO&&this.focusNode.style.direction=="ltr"){
this.focusNode.value=this.LRO+_15;
}
}
}
},_announceOption:function(_17){
if(this.shouldAutoComplete){
this.inherited(arguments);
}
},processComboSelection:function(evt){
if(this.isVisualMode&&_2("ie")){
this._onFocus(evt);
var _19=this.getCaretPos(evt,this.focusNode);
if(_19){
selectionStart=Math.min(_19[0],_19[1]);
curPos=Math.max(_19[0],_19[1]);
}
this.setCaretPositions(selectionStart,curPos);
}
},_onKey:function(evt){
var key=evt.charOrCode;
if(this._opened){
switch(key){
case dojo.keys.PAGE_DOWN:
case dojo.keys.DOWN_ARROW:
case dojo.keys.PAGE_UP:
case dojo.keys.UP_ARROW:
case dojo.keys.ENTER:
this.shouldAutoComplete=true;
break;
}
}
this.inherited(arguments);
},onClick__:function(_1c){
this.shouldAutoComplete=true;
this.inherited(arguments);
}});
});
