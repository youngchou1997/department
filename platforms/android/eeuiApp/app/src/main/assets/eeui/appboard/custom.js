"use strict";var eeui=app.requireModule("eeui");Vue.mixin({methods:{openViewCode:function(e){this.openViewUrl("https://eeui.app/"+e+".html")},openViewUrl:function(e){eeui.openPage({url:"../pages/index_browser.js",pageType:"app",statusBarColor:"#3EB4FF",params:{title:"EEUI",url:e}})}}});