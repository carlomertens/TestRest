define("dojox/mobile/compat",["dojo/_base/lang","dojo/sniff"],function(_1,_2){
var dm=_1.getObject("dojox.mobile",true);
if(!(_2("webkit")||_2("ie")>=10)){
var s="dojox/mobile/_compat";
require([s]);
}
return dm;
});
