webpackJsonp([0],{58:function(e,n,t){t(60);var a=t(2)(t(59),t(61),"data-v-6f26a0aa",null);a.options.__file="C:\\Users\\liuzh\\Desktop\\git\\baidupcs\\src\\views\\index.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},59:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(7),o=t.n(a),s=t(22),i=t.n(s),l=t(21),r=t.n(l),d=t(20),u=t.n(d);n.default={data:function(){return{base_url:"http://127.0.0.1:8081/",login_flag:!1,select_menu_name:"1",baidu_name:"",pending_download_data:[]}},components:{login_component:i.a,file_manager_component:r.a,download_component:u.a},methods:{getMenuName:function(e){var n=this;this.select_menu_name=e,"3-2"===e&&this.$Modal.confirm({title:"退出登录",okText:"确定",cancelText:"取消",onOk:function(){o.a.get(n.base_url+"api/v1/logout").then(function(e){console.log(e),location.reload()})}})}},created:function(){var e=this;o.a.get(this.base_url+"api/v1/user").then(function(n){-4!==n.data.code&&(e.login_flag=!0,e.baidu_name=n.data.data.name)})},destroyed:function(){}}},60:function(e,n){},61:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticStyle:{height:"100%"}},[e.login_flag?a("div",{staticClass:"layout"},[a("Layout",[a("Header",[a("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"select_menu_name"},on:{"on-select":e.getMenuName}},[a("img",{staticClass:"layout-logo",attrs:{src:t(19)}}),e._v(" "),a("div",{staticClass:"layout-nav"},[a("MenuItem",{attrs:{name:"1"}},[a("Icon",{attrs:{type:"ios-folder"}}),e._v("\n                            文件管理\n                        ")],1),e._v(" "),a("MenuItem",{attrs:{name:"2"}},[a("Icon",{attrs:{type:"ios-cloud-download"}}),e._v("\n                            下载管理\n                        ")],1),e._v(" "),a("Submenu",{attrs:{name:"3"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"md-person"}}),e._v("\n                                "+e._s(e.baidu_name)+"\n                            ")],1),e._v(" "),a("MenuItem",{attrs:{name:"3-1"}},[e._v("设置")]),e._v(" "),a("MenuItem",{attrs:{name:"3-2"}},[e._v("退出")])],2)],1)])],1),e._v(" "),a("file_manager_component",{directives:[{name:"show",rawName:"v-show",value:"1"===e.select_menu_name,expression:'select_menu_name === "1"'}],attrs:{pending_download_data:e.pending_download_data}}),e._v(" "),a("download_component",{directives:[{name:"show",rawName:"v-show",value:"2"===e.select_menu_name,expression:'select_menu_name === "2"'}],attrs:{pending_download_data:e.pending_download_data}})],1)],1):e._e(),e._v(" "),e.login_flag?e._e():a("login_component")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});