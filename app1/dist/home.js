window.snadbox("define(function (require, exports, module) {\"use strict\";Object.defineProperty(exports,\"__esModule\",{value:true});exports[\"default\"]=void 0;require(\"./home.css\");var _home2=_interopRequireDefault(require(\"./home.tpl\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{\"default\":obj}}// console.log(document.body)\n// window.alert(10)\nnew Object;Math.random();new Date;console.log(\"home.js 1\");parseInt(1.23);console.log(alert);console.log(_home2[\"default\"]);console.log(\"this:\",void 0);var _default={entry:function entry(){console.log(\"home entry 12\");$(\"#content\").append(\"<div></div>\");var app=new Vue({el:$(\"#content\").children(0)[0],template:_home2[\"default\"],data:function data(){return{name:\"home page\",id:parseInt(Math.random()*1000)}},methods:{onClickBtn:function onClickBtn(){router.go(\"#app2/user\")}},mounted:function mounted(){console.log(\"app:\",this.$el)}})},exit:function exit(){console.log(\"home module exit4.\")}};exports[\"default\"]=_default;})");