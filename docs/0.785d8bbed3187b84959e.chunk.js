webpackJsonp([0],{Bt6m:function(t,l,n){"use strict";n.d(l,"a",function(){return d});var e=n("6Xbx"),i=(n("RSzd"),n("Tl+Y")),u=n("GZB0"),r=n("wORZ"),a=n("8JPw"),c=n("qqDE"),o=n("Dxsx"),s=n("kcbe"),d=function(){function t(t,l,n,e){var i=this;this.actions=t,this.articleListService=l,this.actionsService=n,this.store=e,this.setListPage=this.actions.ofType("[article-list] SET_LIST_PAGE").pipe(Object(c.a)(function(){return{type:"[article-list] LOAD_ARTICLES"}})),this.setListTag=this.actions.ofType("[article-list] SET_LIST_CONFIG").pipe(Object(c.a)(function(){return{type:"[article-list] LOAD_ARTICLES"}})),this.loadArticles=this.actions.ofType("[article-list] LOAD_ARTICLES").pipe(Object(o.a)(this.store.select(s.d)),Object(a.a)(function(t){return i.articleListService.query(t[1]).pipe(Object(c.a)(function(t){return{type:"[article-list] LOAD_ARTICLES_SUCCESS",payload:{articles:t.articles,articlesCount:t.articlesCount}}}),Object(r.a)(function(t){return Object(u.of)({type:"[article-list] LOAD_ARTICLES_FAIL",payload:t})}))})),this.favorite=this.actions.ofType("[article-list] FAVORITE").pipe(Object(c.a)(function(t){return t.payload}),Object(a.a)(function(t){return i.actionsService.favorite(t).pipe(Object(c.a)(function(t){return{type:"[article-list] FAVORITE_SUCCESS",payload:t}}),Object(r.a)(function(t){return Object(u.of)({type:"[article-list] FAVORITE_FAIL",payload:t})}))})),this.unFavorite=this.actions.ofType("[article-list] UNFAVORITE").pipe(Object(c.a)(function(t){return t.payload}),Object(a.a)(function(t){return i.actionsService.unfavorite(t).pipe(Object(c.a)(function(t){return{type:"[article-list] UNFAVORITE_SUCCESS",payload:t}}),Object(r.a)(function(t){return Object(u.of)({type:"[article-list] UNFAVORITE_FAIL",payload:t})}))}))}return Object(e.__decorate)([Object(i.Effect)(),Object(e.__metadata)("design:type",Object)],t.prototype,"setListPage",void 0),Object(e.__decorate)([Object(i.Effect)(),Object(e.__metadata)("design:type",Object)],t.prototype,"setListTag",void 0),Object(e.__decorate)([Object(i.Effect)(),Object(e.__metadata)("design:type",Object)],t.prototype,"loadArticles",void 0),Object(e.__decorate)([Object(i.Effect)(),Object(e.__metadata)("design:type",Object)],t.prototype,"favorite",void 0),Object(e.__decorate)([Object(i.Effect)(),Object(e.__metadata)("design:type",Object)],t.prototype,"unFavorite",void 0),t}()},EDxg:function(t,l,n){"use strict";var e=n("LMZF"),i=n("Un6q"),u=n("UHIZ"),r=function(){function t(){this.favorite=new e.EventEmitter,this.unFavorite=new e.EventEmitter,this.navigateToArticle=new e.EventEmitter}return t.prototype.toggleFavorite=function(t){t.favorited?this.unFavorite.emit(t.slug):this.favorite.emit(t.slug)},t}(),a=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function c(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,1,"li",[["class","tag-default tag-pill tag-outline"]],null,null,null,null,null)),(t()(),e["\u0275ted"](1,null,["\n\t\t\t\t","\n\t\t\t"]))],null,function(t,l){t(l,1,0,l.context.$implicit)})}function o(t){return e["\u0275vid"](2,[e["\u0275pid"](0,i.e,[e.LOCALE_ID]),(t()(),e["\u0275eld"](1,0,null,null,49,"div",[["class","article-preview"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t"])),(t()(),e["\u0275eld"](3,0,null,null,28,"div",[["class","article-meta"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](5,0,null,null,3,"a",[],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275eld"](7,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](10,0,null,null,10,"div",[["class","info"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275eld"](12,0,null,null,3,"a",[["class","author"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,l,n){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](t,13).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&i),i},null,null)),e["\u0275did"](13,671744,null,0,u.o,[u.m,u.a,i.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](14,2),(t()(),e["\u0275ted"](15,null,["\n\t\t\t\t","\n\t\t\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275eld"](17,0,null,null,2,"span",[["class","date"]],null,null,null,null,null)),(t()(),e["\u0275ted"](18,null,["\n\t\t\t\t","\n\t\t\t"])),e["\u0275ppd"](19,2),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](22,0,null,null,8,"button",[["class","btn btn-sm pull-xs-right"]],null,[[null,"click"]],function(t,l,n){var e=!0,i=t.component;return"click"===l&&(e=!1!==i.toggleFavorite(i.article)&&e),e},null,null)),e["\u0275did"](23,278528,null,0,i.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](24,{"btn-outline-primary":0,"btn-primary":1}),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275eld"](26,0,null,null,0,"i",[["class","ion-heart"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275eld"](28,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(t()(),e["\u0275ted"](29,null,["",""])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t"])),(t()(),e["\u0275eld"](33,0,null,null,16,"a",[["class","preview-link"]],null,[[null,"click"]],function(t,l,n){var e=!0,i=t.component;return"click"===l&&(e=!1!==i.navigateToArticle.emit(i.article.slug)&&e),e},null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](35,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),e["\u0275ted"](36,null,["",""])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](38,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),e["\u0275ted"](39,null,["",""])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](41,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["Read more..."])),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](44,0,null,null,4,"ul",[["class","tag-list"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(t()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](47,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275ted"](-1,null,["\n\t"])),(t()(),e["\u0275ted"](-1,null,["\n"]))],function(t,l){var n=l.component;t(l,13,0,t(l,14,0,"/profile",n.article.author.username)),t(l,23,0,"btn btn-sm pull-xs-right",t(l,24,0,!n.article.favorited,n.article.favorited)),t(l,47,0,n.article.tagList)},function(t,l){var n=l.component;t(l,7,0,n.article.author.image),t(l,12,0,e["\u0275nov"](l,13).target,e["\u0275nov"](l,13).href),t(l,15,0,n.article.author.username),t(l,18,0,e["\u0275unv"](l,18,0,t(l,19,0,e["\u0275nov"](l,0),n.article.createdAt,"longDate"))),t(l,29,0,n.article.favoritesCount),t(l,36,0,n.article.title),t(l,39,0,n.article.description)})}var s=function(){return function(){this.setPage=new e.EventEmitter}}(),d=e["\u0275crt"]({encapsulation:0,styles:[[".page-link[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function f(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,6,"li",[["class","page-item"]],null,[[null,"click"]],function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.setPage.emit(t.context.$implicit)&&e),e},null,null)),e["\u0275did"](1,278528,null,0,i.j,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{active:0}),(t()(),e["\u0275ted"](-1,null,["\n\t\t"])),(t()(),e["\u0275eld"](4,0,null,null,1,"a",[["class","page-link"]],null,null,null,null,null)),(t()(),e["\u0275ted"](5,null,["",""])),(t()(),e["\u0275ted"](-1,null,["\n\t"]))],function(t,l){t(l,1,0,"page-item",t(l,2,0,l.context.$implicit===l.component.currentPage))},function(t,l){t(l,5,0,l.context.$implicit)})}function p(t){return e["\u0275vid"](2,[(t()(),e["\u0275eld"](0,0,null,null,4,"ul",[["class","pagination"]],null,null,null,null,null)),(t()(),e["\u0275ted"](-1,null,["\n\t"])),(t()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](3,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),e["\u0275ted"](-1,null,["\n"]))],function(t,l){t(l,3,0,l.component.totalPages)},null)}n("NARe"),n("ADVA"),n.d(l,"a",function(){return g}),l.b=function(t){return e["\u0275vid"](2,[(t()(),e["\u0275and"](16777216,null,null,2,null,v)),e["\u0275did"](1,802816,null,0,i.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef]),(t()(),e["\u0275ted"](-1,null,["\n\n"])),(t()(),e["\u0275eld"](4,0,null,null,2,"app-pager",[],[[8,"hidden",0]],[[null,"setPage"]],function(t,l,n){var e=!0;return"setPage"===l&&(e=!1!==t.component.setPage(n)&&e),e},p,d)),e["\u0275did"](5,49152,null,0,s,[],{currentPage:[0,"currentPage"],totalPages:[1,"totalPages"]},{setPage:"setPage"}),e["\u0275pid"](131072,i.b,[e.ChangeDetectorRef])],function(t,l){var n=l.component;t(l,1,0,e["\u0275unv"](l,1,0,e["\u0275nov"](l,2).transform(n.articles$))),t(l,5,0,e["\u0275unv"](l,5,0,e["\u0275nov"](l,6).transform(n.listConfig$)).currentPage,n.totalPages)},function(t,l){t(l,4,0,l.component.totalPages.length<=1)})};var g=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function v(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,2,"app-article-list-item",[],null,[[null,"navigateToArticle"],[null,"unFavorite"],[null,"favorite"]],function(t,l,n){var e=!0,i=t.component;return"navigateToArticle"===l&&(e=!1!==i.navigateToArticle(n)&&e),"unFavorite"===l&&(e=!1!==i.unFavorite(n)&&e),"favorite"===l&&(e=!1!==i.favorite(n)&&e),e},o,a)),e["\u0275did"](1,49152,null,0,r,[],{article:[0,"article"]},{favorite:"favorite",unFavorite:"unFavorite",navigateToArticle:"navigateToArticle"}),(t()(),e["\u0275ted"](-1,null,["\n"]))],function(t,l){t(l,1,0,l.context.$implicit)},null)}},MkYH:function(t,l,n){"use strict";n.d(l,"a",function(){return e});var e=function(){}},NARe:function(t,l,n){"use strict";n.d(l,"a",function(){return u});var e=n("kcbe"),i=n("Dxsx"),u=function(){function t(t){this.store=t,this.totalPages=[1]}return t.prototype.ngOnInit=function(){this.getTotalPages(),this.articles$=this.store.select(e.b),this.listConfig$=this.store.select(e.d)},t.prototype.favorite=function(t){this.store.dispatch({type:"[article-list] FAVORITE",payload:t})},t.prototype.unFavorite=function(t){this.store.dispatch({type:"[article-list] UNFAVORITE",payload:t})},t.prototype.navigateToArticle=function(t){this.store.dispatch({type:"[Router] Go",payload:{path:["/article",t]}})},t.prototype.getTotalPages=function(){var t=this;this.store.select(e.c).pipe(Object(i.a)(this.store.select(e.d))).subscribe(function(l){t.totalPages=Array.from(new Array(Math.ceil(l[0]/l[1].filters.limit)),function(t,l){return l+1})})},t.prototype.setPage=function(t){this.store.dispatch({type:"[article-list] SET_LIST_PAGE",payload:t})},t}()},hCWo:function(t,l,n){"use strict";n.d(l,"a",function(){return i}),n("lWwI");var e=n("9iV4"),i=function(){function t(t){this.apiService=t}return t.prototype.query=function(t){return this.apiService.get("/articles"+("FEED"===t.type?"/feed":""),this.toHttpParams(t.filters))},t.prototype.toHttpParams=function(t){return Object.getOwnPropertyNames(t).reduce(function(l,n){return l.set(n,t[n])},new e.i)},t}()},kcbe:function(t,l,n){"use strict";l.a=function(t,l){switch(l.type){case"[article-list] SET_LIST_PAGE":var n=e({},t.listConfig.filters,{offset:t.listConfig.filters.limit*(l.payload-1)}),i=e({},t.listConfig,{currentPage:l.payload,filters:n});return e({},t,{listConfig:i});case"[article-list] SET_LIST_CONFIG":return e({},t,{listConfig:l.payload});case"[article-list] LOAD_ARTICLES":var u=e({},t.articles,{loading:!0});return e({},t,{articles:u});case"[article-list] LOAD_ARTICLES_SUCCESS":return u=e({},t.articles,{entities:l.payload.articles,articlesCount:l.payload.articlesCount,loading:!1,loaded:!0}),e({},t,{articles:u});case"[article-list] LOAD_ARTICLES_FAIL":return u=e({},t.articles,{entities:[],articlesCount:0,loading:!1,loaded:!0}),e({},t,{articles:u});case"[article-list] FAVORITE_SUCCESS":case"[article-list] UNFAVORITE_SUCCESS":return e({},t,{articles:function(t,l){var n=t.entities.findIndex(function(t){return t.slug===l.slug}),i=t.entities.slice(0,n).concat([Object.assign({},t.entities[n],l)],t.entities.slice(n+1));return e({},t,{entities:i,loading:!1,loaded:!0})}(t.articles,l.payload)});default:return t}},n.d(l,"d",function(){return i}),n.d(l,"b",function(){return u}),n.d(l,"c",function(){return r});var e=this&&this.__assign||Object.assign||function(t){for(var l,n=1,e=arguments.length;n<e;n++)for(var i in l=arguments[n])Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);return t},i=function(t){return t.articleList.listConfig},u=function(t){return t.articleList.articles.entities},r=function(t){return t.articleList.articles.articlesCount}},rXA0:function(t,l,n){"use strict";n.d(l,"a",function(){return e});var e={listConfig:{type:"ALL",currentPage:1,filters:{limit:10}},articles:{entities:[],articlesCount:0,loaded:!1,loading:!1}}},zpFk:function(t,l,n){"use strict";n.d(l,"a",function(){return e});var e=function(){}}});