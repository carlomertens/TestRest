egl.defineWidget("dojo.server","DojoPost","dojo.widgets","DojoBase","div",{"xhrPost":function(_1,_2){
var _3={url:this.urlPath,postData:this.postData,handleAs:"text",load:function(_4){
_1(_4);
},error:function(_5){
_2(_5);
}};
var _6=dojo.xhrPost(_3);
},"setUrlPath":function(_7){
this.urlPath=_7;
},"getUrlPath":function(){
return this.urlPath;
},"setPostData":function(_8){
this.postData=_8;
},"getPostData":function(){
return this.postData;
}});
