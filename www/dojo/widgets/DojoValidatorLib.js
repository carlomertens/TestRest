egl.defineClass("dojo.widgets","DojoValidatorLib",{"constructor":function(){
dojo.require("dojox.validate");
dojo.require("dojox.validate.web");
},"getFlag":function(_1){
var _2={};
var _3=egl.getKeys(_1);
for(var i=0;i<_3.length;i++){
_2[_3[i]]=_1[_3[i]].eze$$value;
}
return _2;
},"IPValidator":function(_5,_6){
var _7=this.getFlag(_6);
for(var c in _7){
switch(c){
case "allowdotteddecimal":
_7.allowDottedDecimal=_7[c];
case "allowdottedhex":
_7.allowDottedHex=_7[c];
case "allowdottedoctal":
_7.allowDottedOctal=_7[c];
case "allowipv6":
_7.allowIPv6=_7[c];
case "allowhex":
_7.allowHex=_7[c];
case "allowhybrid":
_7.allowHybrid=_7[c];
case "allowdecimal":
_7.allowDecimal=_7[c];
}
}
return dojox.validate.isIpAddress(_5,_7);
},"UrlValidator":function(_9,_a){
var _b=this.getFlag(_a);
for(var c in _b){
switch(c){
case "allowip":
_b.allowIP=_b[c];
case "allowlocal":
_b.allowLocal=_b[c];
case "allowport":
_b.allowPort=_b[c];
case "allownamed":
_b.allowNamed=_b[c];
case "allowdotteddecimal":
_b.allowDottedDecimal=_b[c];
case "allowdottedhex":
_b.allowDottedHex=_b[c];
case "allowdottedoctal":
_b.allowDottedOctal=_b[c];
case "allowipv6":
_b.allowIPv6=_b[c];
case "allowhex":
_b.allowHex=_b[c];
case "allowhybrid":
_b.allowHybrid=_b[c];
case "allowdecimal":
_b.allowDecimal=_b[c];
}
}
return dojox.validate.isUrl(_9,_b);
},"EmailValidator":function(_d,_e){
var _f=this.getFlag(_e);
for(var c in _f){
switch(c){
case "allowcruft":
_f.allowCruft=_f[c];
case "allowip":
_f.allowIP=_f[c];
case "allowlocal":
_f.allowLocal=_f[c];
case "allownamed":
_f.allowNamed=_f[c];
case "allowdotteddecimal":
_f.allowDottedDecimal=_f[c];
case "allowdottedhex":
_f.allowDottedHex=_f[c];
case "allowdottedoctal":
_f.allowDottedOctal=_f[c];
case "allowipv6":
_f.allowIPv6=_f[c];
case "allowhex":
_f.allowHex=_f[c];
case "allowhybrid":
_f.allowHybrid=_f[c];
case "allowdecimal":
_f.allowDecimal=_f[c];
}
}
return dojox.validate.isEmailAddress(_d,_f);
},"TextValidator":function(_11,_12){
var _13=this.getFlag(_12);
return dojox.validate.isText(_11,_13);
},"RangeValidator":function(_14,_15){
var _16=this.getFlag(_15);
return dojox.validate.isInRange(_14,_16);
},"NumberFormatValidator":function(_17,_18){
var _19=this.getFlag(_18);
return dojox.validate.isNumberFormat(_17,_19);
},"PatternValidator":function(_1a,_1b){
return (new RegExp("^(?:"+_1b+")"+"$")).test(_1a);
}});
