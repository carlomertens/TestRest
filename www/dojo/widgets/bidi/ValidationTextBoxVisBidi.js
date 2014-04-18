define(["dojo/_base/declare","dojo/has","dijit/form/ValidationTextBox","./TextBoxVisBidi"],function(_1,_2,_3,_4){
return _1("bidi.ValidationTextBoxVisBidi",[_4,_3],{isValid:function(){
var _5=this.getValue();
if(this.isVisualMode){
_5=this.bidiTransform(_5,"V"+this.dirChForBidiFormat+"YNN","I"+this.dirChForBidiFormat+"YNN");
return this.validator(_5,this.constraints);
}else{
return this.inherited(arguments);
}
},_isEmpty:function(_6){
return this.inherited(arguments);
}});
});
