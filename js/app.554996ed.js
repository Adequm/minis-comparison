(function(e){function t(t){for(var n,o,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/priorities/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"03ae":function(e,t,i){},"0689":function(e,t,i){},"0a92":function(e,t,i){"use strict";i("bdb9")},12763:function(e,t,i){"use strict";i("cf3a")},"1cbc":function(e,t,i){},"21bb":function(e,t,i){"use strict";i("2dad")},"2dad":function(e,t,i){},3249:function(e,t,i){"use strict";i("0689")},"3ab1":function(e,t,i){},"3b32":function(e,t,i){},"4c2d":function(e,t,i){"use strict";i("3ab1")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",style:{height:e.innerHeight+"px",maxWidth:e.innerWidth<768?"100vw":e.containerWidth+"px"}},[e.isPageLoad?i("div",{staticClass:"minis__wrapper"},[e.isDesktop?i("Settings",{attrs:{themeIcon:e.themeMain.icon},on:{switchTheme:e.switchTheme,switchLang:e.switchLang},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),i("router-view",{attrs:{appWidth:e.appWidth,bodyHeight:e.innerHeight,isDesktop:e.isDesktop,minAppHeight:e.minAppHeight},on:{switchSettings:function(t){e.isClosedSettings=!e.isClosedSettings}}}),i("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)}}}),i("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"}},[e._v("Minis")])],1):i("Icon",{staticClass:"loader",attrs:{type:"loader",rotate:""}})],1)},r=[],o=i("2ef0"),a=i.n(o),c=i("1da1"),l=i("5530"),u=i("3835"),d=(i("96cf"),i("07ac"),i("d3b7"),i("159b"),i("4fad"),i("2f62")),p={name:"App",data:function(){return{isPageLoad:!1}},watch:{translateList:{deep:!0,immediate:!0,handler:function(e){Object.values(e).length&&(document.title=this.translate("title"))}},themeMain:{deep:!0,handler:function(e){if(!e)return this.switchTheme("main");Object.entries(e.colors).forEach((function(e){var t=Object(u["a"])(e,2),i=t[0],n=t[1];document.body.style.setProperty("--".concat(i),n)}))}},themeSpecial:{deep:!0,handler:function(e){if(!e)return this.switchTheme("special");document.body.style.setProperty("--special-color",e.normal)}}},computed:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["translate","translateList","themeMain","themeSpecialName","themeSpecial"])),Object(d["d"])({minisTheme:function(e){return e.minis.minisTheme},minisLang:function(e){return e.minis.minisLang}})),methods:Object(l["a"])(Object(l["a"])({},Object(d["c"])({switchTheme:function(e,t){return e("switchTheme",t)},switchLang:function(e,t){return e("switchLang",t)},initMinis:function(e,t){return e("initMinis",t)}})),{},{getMinisOptions:function(){var e=this,t="https://adequm.github.io/minis";return new Promise(function(){var i=Object(c["a"])(regeneratorRuntime.mark((function i(n){var s,r,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch("".concat(t,"/translate.json")).then((function(e){return e.json()}));case 3:return s=i.sent,i.next=6,fetch("".concat(t,"/minisList.json")).then((function(e){return e.json()}));case 6:return r=i.sent,i.next=9,fetch("".concat(t,"/themesList.json")).then((function(e){return e.json()}));case 9:o=i.sent,Object.entries(o.default||[]).forEach((function(e){var t=Object(u["a"])(e,2),i=t[0],n=t[1];document.body.style.setProperty("--".concat(i),n)})),n({translate:s,minisList:r,themesList:o}),i.next=17;break;case 14:i.prev=14,i.t0=i["catch"](0),setTimeout(Object(c["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMinisOptions();case 2:i=t.sent,n(i);case 4:case"end":return t.stop()}}),t)}))),2e3);case 17:case"end":return i.stop()}}),i,null,[[0,14]])})));return function(e){return i.apply(this,arguments)}}())}}),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMinisOptions();case 2:i=t.sent,e.initMinis(i),e.isPageLoad=!0;case 5:case"end":return t.stop()}}),t)})))()}},h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{class:{rotate:e.rotate},attrs:{width:e.size||e.width,height:e.size||e.height,fill:"none",stroke:e.color,"stroke-width":e.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){return e.$emit("click",t)}}},[i("use",{attrs:{href:"./feather-sprite.svg#"+e.type}})])},f=[],m=(i("a9e3"),{name:"Icon",props:{type:String,size:Number,width:{type:Number,default:24},height:{type:Number,default:24},strokeWidth:{type:Number,default:2},rotate:{type:Boolean,default:!1},color:{type:String,default:"currentColor"}}}),v=m,y=(i("7f4a"),i("2877")),g=Object(y["a"])(v,h,f,!1,null,"22aa6cc3",null),x=g.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"settings",class:{isClosedSettings:e.value}},[i("Icon",{attrs:{type:"settings"},on:{click:function(t){return e.$emit("input",!e.value)}}}),i("Icon",{attrs:{type:e.themeIcon},on:{click:function(t){return e.$emit("switchTheme","main")}}}),i("Icon",{attrs:{type:"heart"},on:{click:function(t){return e.$emit("switchTheme","special")}}}),i("Icon",{attrs:{type:"globe"},on:{click:function(t){return e.$emit("switchLang")}}})],1)},b=[],S={name:"Settings",components:{Icon:x},props:{themeIcon:String,value:Boolean}},H=S,k=(i("fdcd"),Object(y["a"])(H,w,b,!1,null,null,null)),I=k.exports,C={components:{Settings:I,Icon:x},mixins:[p],data:function(){return{containerWidth:300,innerHeight:null,innerWidth:null,startResizeX:null,startResizeWidth:null,resizeHash:null,isClosedSettings:!0,minAppHeight:560}},computed:{isDesktop:function(e){return e.innerWidth>=768},appWidth:function(e){return e.isDesktop?e.containerWidth:e.innerWidth}},watch:{appWidth:"setResizeHash",innerHeight:"setResizeHash",isDesktop:{immediate:!0,handler:function(e){this.minAppHeight=e?560:innerHeight}}},methods:{setResizeHash:function(){this.resizeHash=Date.now()},setAppWidth:function(e){var t=this,i=e.pageX;requestAnimationFrame((function(){if(!a.a.isNull(t.startResizeX)&&!a.a.isNull(t.startResizeWidth)){var e=i-t.startResizeX+t.startResizeWidth;t.containerWidth=a.a.clamp(e,300,600)}}))},startResize:function(e){this.startResizeX=e.pageX,this.startResizeWidth=this.containerWidth,document.addEventListener("mousemove",this.setAppWidth),document.addEventListener("mouseup",this.stopResize),window.addEventListener("mouseleave",this.stopResize)},stopResize:function(){this.startResizeX=null,this.startResizeWidth=null,document.removeEventListener("mousemove",this.setAppWidth),document.removeEventListener("mouseup",this.stopResize),window.removeEventListener("mouseleave",this.stopResize)}},beforeMount:function(){var e=this;this.innerHeight=innerHeight,this.innerWidth=innerWidth,window.addEventListener("resize",(function(t){e.innerHeight=innerHeight,e.innerWidth=innerWidth}))}},E=C,R=(i("5c0b"),Object(y["a"])(E,s,r,!1,null,null,null)),$=R.exports,P=i("9483");Object(P["a"])("".concat("/priorities/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});i("a434"),i("ac1f"),i("1276"),i("99af");var z=i("0e44"),L=i("0759"),M=i.n(L),O=i("8468"),T=(i("b64b"),{state:function(){return{minisLang:"ru",minisThemeMain:null,minisThemeSpecial:null,themesList:{},translate:{},minisList:{}}}});T.getters={translateList:function(e){var t,i=e.translate,n=e.minisLang;return(null===i||void 0===i||null===(t=i[n])||void 0===t?void 0:t.priorities)||{}},translate:function(e,t){Object(O["a"])(e);var i=t.translateList;return function(e){return(null===i||void 0===i?void 0:i[e])||"Err"}},themeMain:function(e){var t,i,n=e.themesList,s=e.minisThemeMain,r=null===n||void 0===n||null===(t=n.main)||void 0===t?void 0:t[s];return r?n.main[s]:null===n||void 0===n||null===(i=n.main)||void 0===i?void 0:i.dark},themeSpecialName:function(e){var t,i,n,s=e.themesList,r=e.minisThemeSpecial,o=null===s||void 0===s||null===(t=s.special)||void 0===t||null===(i=t.colors)||void 0===i?void 0:i[r];return o?r:null===s||void 0===s||null===(n=s.special)||void 0===n?void 0:n.default},themeSpecial:function(e,t){var i,n,s=e.themesList,r=t.themeSpecialName;return null===s||void 0===s||null===(i=s.special)||void 0===i||null===(n=i.colors)||void 0===n?void 0:n[r]}},T.mutations={switchTheme:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main",i="main"==t?"minisThemeMain":"minisThemeSpecial",s="main"==t?e.themesList.main:e.themesList.special.colors,r=Object.keys(s),o=r.indexOf(e[i]),a=(o+1)%r.length;n["default"].set(e,i,r[a])},switchLang:function(e){var t=Object.keys(e.translate),i=t.indexOf(e.minisLang),s=(i+1)%t.length;n["default"].set(e,"minisLang",t[s])},initMinis:function(e,t){var i=t.translate,s=t.minisList,r=t.themesList;n["default"].set(e,"minisList",s),n["default"].set(e,"translate",i),n["default"].set(e,"themesList",r)}};var W=T,j={};n["default"].use(d["a"]),j.state=function(){return{savedHistory:[],questions:[],priorities:[]}},j.mutations={addToHistory:function(e,t){var i=e.savedHistory;return i.unshift(t)},removeFromHistory:function(e,t){var i=e.savedHistory;return i.splice(t,1)},addQuestion:function(e,t){var i=e.questions;return i.push(t)},removeQuestion:function(e,t){var i=e.questions;return i.splice(t,1)},addPriority:function(e,t){var i=e.priorities;return i.push(t)},removePriority:function(e,t){var i=e.priorities;return i.splice(t,1)}};var q=["minis.minisThemeMain","minis.minisThemeSpecial","minis.minisLang"],D=["savedHistory","questions","priorities"],A="minis-".concat(location.pathname.split("/")[1]);j.modules={minis:W},j.plugins=[M()({predicate:function(){return[].concat(q,D)}}),Object(z["a"])({paths:q,key:"minis"}),Object(z["a"])({paths:D,key:A})];var B=new d["a"].Store(j),N=i("8c4f"),Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"minis__content",style:{minHeight:e.minAppHeight+"px"}},[i("Navigation",{attrs:{compareStep:e.compareStep,compareMaxSteps:e.questions.length,isModeEditor:e.isModeEditor,isModeCompare:e.isModeCompare,isHistoryExist:!!e.lodash.size(e.savedHistory),isEditorDataExist:!!e.questions.length&&e.priorities.length>=2},on:{removeFromHistory:e.removeFromHistoryHandler,switchModeCompare:function(t){e.isModeCompare=!e.isModeCompare},switchModeEditor:function(t){e.isModeEditor=!e.isModeEditor}}}),i("div",{staticClass:"minis__display"},[e.isModeCompare?i("LayoutCompare",{attrs:{horizontal:e.isDesktop&&e.appWidth>=530,appWidth:e.appWidth,bodyHeight:e.bodyHeight,questions:e.questions,priorities:e.priorities},on:{nextStep:function(t){e.compareStep++},"finish-comparison":e.finishComparison}}):[e.isModeEditor?i("LayoutEditor",{attrs:{appWidth:e.appWidth,bodyHeight:e.bodyHeight,questions:e.questions,priorities:e.priorities,valueQuestion:e.valueQuestion,valuePriority:e.valuePriority,slideIndex:e.slideIndexEditor},on:{changeSlide:function(t){e.slideIndexEditor=t},updateValueQuestion:function(t){e.valueQuestion=t},updateValuePriority:function(t){e.valuePriority=t},addPriority:e.addPriority,addQuestion:e.addQuestion,removeQuestion:e.removeQuestion,removePriority:e.removePriority}}):e._e(),e.isModeEditor?e._e():i("LayoutHistory",{ref:"layoutHistory",attrs:{appWidth:e.appWidth,bodyHeight:e.bodyHeight,savedHistory:e.savedHistory},on:{changeSlide:function(t){e.slideIndexHistory=t}}})]],2)],1)},F=[],G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout swiper-horizontal",attrs:{id:"layout-editor"}},[i("AppTextarea",{ref:"textarea",staticStyle:{"margin-bottom":"10px"},attrs:{resize:e.appWidth,value:e.slideIndex?e.valuePriority:e.valueQuestion,placeholder:e.slideIndex?"Ваш приоритет":"Уточняющий вопрос"},on:{input:e.inputTextarea,submit:e.submitTextarea}}),i("div",{staticClass:"layout__display",class:{isEnd:e.isEnd,isBeginning:e.isBeginning}},[i("div",{staticClass:"layout__display_content"},[i("Swiper",{ref:"swiper",on:{activeIndexChange:function(t){return e.$emit("changeSlide",t.realIndex)}}},[i("SwiperSlide",[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[e.questions.length?i("DisplayQuestions",{attrs:{questions:e.questions},on:{remove:function(t){return e.$emit("removeQuestion",t)},edit:function(t){return e.edit("question",t)}}}):i("DisplayEmpty",{attrs:{text:"Список уточняющих вопросов",icon:"clipboard",button:"Добавить стандартные вопросы"},on:{click:e.addDefaultQuestion}})],1)]),i("SwiperSlide",[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[e.priorities.length?i("DisplayPriorities",{attrs:{priorities:e.priorities},on:{remove:function(t){return e.$emit("removePriority",t)},edit:function(t){return e.edit("priority",t)}}}):i("DisplayEmpty",{attrs:{text:"Список сравниваемых приоритетов",icon:"star"}})],1)])],1)],1),i("SlideButtons",{attrs:{limit:e.slideList.length,isBeginning:e.isBeginning,isEnd:e.isEnd,value:e.slideIndex},on:{input:function(t){return e.$emit("changeSlide",t)}}})],1)],1)},X=[],K=i("d7cf"),V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"priorities__container-scroll"},e._l(e.priorities,(function(t,n){return i("div",{key:t+"_"+n,staticClass:"priority__item"},[i("span",{domProps:{textContent:e._s(t)}}),i("div",{staticStyle:{float:"right"}},[i("Icon",{attrs:{type:"edit",strokeWidth:3},on:{click:function(t){return e.$emit("edit",n)}}}),i("Icon",{attrs:{type:"trash",strokeWidth:3},on:{click:function(t){return e.$emit("remove",n)}}})],1)])})),0)},J=[],Y={name:"DisplayPriorities",components:{Icon:x},props:{priorities:Array}},U=Y,Z=(i("571e"),Object(y["a"])(U,V,J,!1,null,"1d93af46",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"questions__container-scroll"},e._l(e.questions,(function(t,n){return i("div",{key:t+"_"+n,staticClass:"question__item"},[i("span",{domProps:{textContent:e._s(t)}}),i("div",{staticStyle:{float:"right"}},[i("Icon",{attrs:{type:"edit",strokeWidth:3},on:{click:function(t){return e.$emit("edit",n)}}}),i("Icon",{attrs:{type:"trash",strokeWidth:3},on:{click:function(t){return e.$emit("remove",n)}}})],1)])})),0)},ie=[],ne={name:"DisplayQuestions",components:{Icon:x},props:{questions:Array}},se=ne,re=(i("7ad3"),Object(y["a"])(se,te,ie,!1,null,"d231efe0",null)),oe=re.exports,ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"empty__container"},[i("Icon",{attrs:{type:e.icon,size:96,strokeWidth:1}}),i("span",{domProps:{textContent:e._s(e.text)}}),e.button?i("button",{domProps:{textContent:e._s(e.button)},on:{click:function(t){return e.$emit("click")}}}):e._e()],1)},ce=[],le={name:"DisplayEmpty",components:{Icon:x},props:{text:String,icon:String,button:String}},ue=le,de=(i("12763"),Object(y["a"])(ue,ae,ce,!1,null,"0124f440",null)),pe=de.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide-buttons__container"},[i("button",{staticClass:"slide-button",attrs:{disabled:e.isBeginning},on:{click:function(t){return e.setSlide(-1)}}},[i("Icon",{attrs:{type:"chevrons-left"}})],1),i("button",{staticClass:"slide-button",attrs:{disabled:e.isEnd},on:{click:function(t){return e.setSlide(1)}}},[i("Icon",{attrs:{type:"chevrons-right"}})],1)])},fe=[],me={name:"SlideButtons",components:{Icon:x},props:{value:Number,limit:Number,isEnd:Boolean,isBeginning:Boolean},methods:{setSlide:function(e){var t=a.a.clamp(this.value+e,0,this.limit-1);this.$emit("input",t)}}},ve=me,ye=(i("dce6"),Object(y["a"])(ve,he,fe,!1,null,"3ef6ad36",null)),ge=ye.exports,xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"textarea",style:{height:e.textareaHeight}},[i("form",{style:{height:e.textareaHeight},attrs:{defaultfocus:"textarea"},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[i("textarea",{ref:"textarea",attrs:{id:"textarea",rows:e.textareaRows,placeholder:e.placeholder,maxlength:"80"},domProps:{value:e.value},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.textareaKeyDownEnter.apply(null,arguments)},input:function(t){return e.$emit("input",t.target.value)}}}),e._v(" "),i("button",{attrs:{type:"submit"}},[i("Icon",{attrs:{type:"plus"}})],1)])])},we=[],be=(i("fb6a"),i("5319"),i("498a"),{name:"AppTextarea",components:{Icon:x},props:{placeholder:String,value:String,resize:Number},data:function(){return{textareaRows:1}},watch:{value:"setMaxTextareaRows",resize:"setMaxTextareaRows"},computed:{textareaHeight:function(){var e="".concat(this.textareaRows,"em"),t="".concat(.2*this.textareaRows,"em");return"calc(".concat(e," + ").concat(t," + 30px)")}},methods:{setMaxTextareaRows:function(){var e=this;this.textareaRows=1,this.$nextTick((function(){var t=e.$refs.textarea.scrollHeight,i=Math.ceil((t-28)/19);i>5&&e.$emit("input",e.value.slice(0,-1)),e.textareaRows=Math.max(1,Math.min(5,i))}))},textareaKeyDownEnter:function(e){e.shiftKey||(e.preventDefault(),this.submit())},focus:function(){this.$refs.textarea.focus()},submit:function(){this.value.replace(/\n/g,"")&&(this.$emit("submit",this.value.trim()),this.$emit("input",""))}}}),Se=be,_e=(i("4c2d"),Object(y["a"])(Se,xe,we,!1,null,"3d1ae53e",null)),He=_e.exports,ke={name:"LayoutEditor",components:{SlideButtons:ge,AppTextarea:He,DisplayPriorities:ee,DisplayQuestions:oe,DisplayEmpty:pe,Swiper:K["Swiper"],SwiperSlide:K["SwiperSlide"]},props:{isShow:Boolean,appWidth:Number,bodyHeight:Number,questions:Array,priorities:Array,valueQuestion:String,valuePriority:String,slideIndex:Number},data:function(){return{swiperRef:null,slideHeight:0}},watch:{appWidth:["setSlideWidth","setSlideHeight"],textareaHeight:["setSlideWidth","setSlideHeight"],slideIndex:function(e){this.swiperRef.slideTo(e),this.setSlideWidth()},bodyHeight:{immediate:!0,handler:"setSlideHeight"}},computed:{isEnd:function(){var e=this.slideIndex===this.slideList.length-1;return!!this.swiperRef&&this.swiperRef.isEnd||e},isBeginning:function(){var e=0===this.slideIndex;return!!this.swiperRef&&this.swiperRef.isBeginning||e},slideList:function(){var e;return(null===(e=this.swiperRef)||void 0===e?void 0:e.slides)||[]}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){var t,i,n;e.slideHeight=null===(t=e.$refs)||void 0===t||null===(i=t.swiper)||void 0===i||null===(n=i.$el)||void 0===n?void 0:n.offsetHeight}))},setSlideWidth:function(){var e=this,t=this.appWidth-40,i="translate3d(-".concat(this.slideIndex*t,"px, 0px, 0px)"),n=document.querySelector("#layout-editor .swiper-wrapper");_.invoke(null===n||void 0===n?void 0:n.style,"setProperty","max-width","".concat(t,"px")),_.invoke(null===n||void 0===n?void 0:n.style,"setProperty","transform",i);var s=document.querySelectorAll("#layout-editor .swiper-slide");[].forEach.call(s,(function(i,n){i.style.setProperty("width","".concat(t,"px")),e.swiperRef.slidesGrid[n]=n*t,e.swiperRef.snapGrid[n]=n*t,e.swiperRef.slidesSizesGrid[n]=t}))},edit:function(e,t){"priority"==e?(this.valuePriority=this.priorities[t],this.$emit("removePriority",t)):(this.valueQuestion=this.questions[t],this.$emit("removeQuestion",t)),this.$refs.textarea.focus()},inputTextarea:function(e){this.slideIndex?this.$emit("updateValuePriority",e):this.$emit("updateValueQuestion",e)},submitTextarea:function(){this.slideIndex?this.$emit("addPriority",this.valuePriority):this.$emit("addQuestion",this.valueQuestion)},addDefaultQuestion:function(){var e=this;["Что важнее прямо сейчас?","Чего быстрее добиться?","Что больше хочется?"].forEach((function(t){return e.$emit("addQuestion",t)}))}},mounted:function(){this.swiperRef=this.$refs.swiper.swiperRef,this.swiperRef.slideTo(this.slideIndex,0),this.$nextTick(this.setSlideWidth)}},Ie=ke,Ce=(i("6864"),Object(y["a"])(Ie,G,X,!1,null,"57fd38fa",null)),Ee=Ce.exports,Re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout",class:"swiper-"+e.direction,attrs:{id:"layout-compare"}},[i("div",{staticClass:"compare__question",domProps:{textContent:e._s(e.questionTitle)}}),i("div",{staticClass:"compare__display"},[i("Swiper",{ref:"swiper",attrs:{direction:e.direction},on:{activeIndexChange:function(t){e.slideIndex=t.realIndex}}},[i("SwiperSlide",[i("DisplayCompare",{ref:"displayCompare",attrs:{answers:[e.answerLeft,e.answerRight],horizontal:e.horizontal},on:{select:function(t){t?e.selectAnswerRight():e.selectAnswerLeft()}}})],1)],1)],1)])},$e=[],Pe=(i("d81d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"compare__container"},[i("div",{staticClass:"compare__answers_wrapper",style:{flexDirection:e.horizontal?"row":"column"}},e._l(e.answers,(function(t,n){return i("div",{key:n,ref:"answers",refInFor:!0,staticClass:"compare__answer",class:{horizontal:e.horizontal},on:{click:function(i){t&&e.canChange&&e.changeAnswer(n)}}},[t?[e.canChange||e.changedAnswer===n?i("span",{domProps:{textContent:e._s(t)}}):e._e()]:i("Icon",{staticStyle:{opacity:".5"},attrs:{type:"activity",size:60,strokeWidth:1}})],2)})),0)])}),ze=[],Le={name:"DisplayCompare",components:{Icon:x},props:{answers:Array,horizontal:Boolean},data:function(){return{canChange:!0,changedAnswer:null}},methods:{changeAnswer:function(e){var t=this;return this.changedAnswer=e,new Promise((function(i){t.canChange=!1;var n=t.$refs,s=n.container,r=n.answers,o=(s.offsetWidth,t.horizontal?"width":"height");r[+!e].style.setProperty("transition","".concat(o," .5s")),r[+!e].style.setProperty(o,"50px"),r[e].style.setProperty("background-color","var(--special-color)"),r[e].style.setProperty("color","var(--text-color)"),setTimeout((function(){r[+!e].style.removeProperty("transition"),r[+!e].style.removeProperty(o)}),800),setTimeout((function(){r[e].style.removeProperty("background-color"),r[e].style.removeProperty("color"),t.$emit("select",e),t.canChange=!0,i()}),1e3)}))}}},Me=Le,Oe=(i("c2f1"),Object(y["a"])(Me,Pe,ze,!1,null,null,null)),Te=Oe.exports,We={name:"LayoutCompare",components:{Swiper:K["Swiper"],SwiperSlide:K["SwiperSlide"],DisplayCompare:Te},props:{horizontal:Boolean,appWidth:Number,bodyHeight:Number,questions:Array,priorities:Array},data:function(){return{swiperRef:null,slideIndex:0,slideContrainerHeight:0,slideHeight:null,prioritiesArray:[],prioritiesResult:[],sortedIndex:0,sortedIndexTry:0,optionMaxIndex:0,questionIndex:0}},watch:{slideHeight:"setSlidesSize",questionTitle:["setSlideHeight","setSlidesSize"],horizontal:["setSlideHeight","setSlidesSize"],appWidth:["setSlideHeight","setSlidesSize"],slideIndex:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==t){e.next=2;break}return e.abrupt("return");case 2:return this.swiperRef.slideTo(0,0),i=this.$refs.displayCompare,e.next=6,i.changeAnswer(+!!t);case 6:this.$emit("nextStep",t);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),bodyHeight:{immediate:!0,handler:"setSlideHeight"}},computed:{direction:function(e){return e.horizontal?"horizontal":"vertical"},slideSize:function(e){return e.horizontal?e.appWidth-60:e.slideHeight},slideTransform:function(){return this.horizontal?"translate3d(-".concat(this.slideIndex*this.slideSize,"px, 0px, 0px)"):"translate3d(0px, -".concat(this.slideIndex*this.slideSize,"px, 0px)")},answerLeft:function(e){return a.a.get(e.prioritiesResult[e.questionIndex],e.sortedIndex)},answerRight:function(e){return a.a.get(e.prioritiesResult[e.questionIndex],e.sortedIndex+1)},questionTitle:function(e){return e.questions[e.questionIndex]},lastQuestionIndex:function(e){return e.questions.length-1}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){e.slideHeight=e.$refs.swiper.$el.offsetHeight}))},setSlidesSize:function(){var e=this;console.log("setSlidesSize"),this.swiperRef.slideTo(0,0);var t=this.appWidth-60,i=this.slideHeight,n=document.querySelector("#layout-compare .swiper-wrapper");a.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","max-width","".concat(t,"px")),a.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","max-height","".concat(i,"px")),a.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","transform",this.slideTransform);var s=document.querySelectorAll("#layout-compare .swiper-slide");[].forEach.call(s,(function(n,s){n.style.setProperty("width","".concat(t,"px")),n.style.setProperty("height","".concat(i,"px")),e.swiperRef.slidesGrid[s]=s*e.slideSize,e.swiperRef.snapGrid[s]=s*e.slideSize,e.swiperRef.slidesSizesGrid[s]=e.slideSize}))},"startСomparison":function(){var e=this;a.a.times(this.questions.length,(function(t){var i=a.a.cloneDeep(e.priorities);e.prioritiesResult.push(i)})),this.optionMaxIndex=this.priorities.length-1},selectAnswerLeft:function(){this.sortedIndex=++this.sortedIndexTry,this.sortedIndexTry>=this.optionMaxIndex&&this.finishСomparison()},selectAnswerRight:function(){var e=this.prioritiesResult[this.questionIndex],t=this.sortedIndex,i=[e[t],e[t+1]];if(e[t+1]=i[0],e[t]=i[1],t-1>=0)return this.$set(this,"sortedIndex",a.a.clamp(t-1,0,this.optionMaxIndex));this.selectAnswerLeft()},"finishСomparison":function(){var e=this;if(this.questionIndex++,this.sortedIndex=0,this.sortedIndexTry=0,this.$emit("nextStep"),!(this.questionIndex<=this.lastQuestionIndex)){var t=a.a.map(this.prioritiesResult,(function(t,i){var n=e.questions[i];return{question:n,answers:t}})),i=Date.now();this.$emit("finish-comparison",{date:i,chunks:t})}}},mounted:function(){this.startСomparison(),this.swiperRef=this.$refs.swiper.swiperRef,this.$nextTick(this.setSlidesSize)}},je=We,qe=(i("c0d0"),Object(y["a"])(je,Re,$e,!1,null,"5c3bbe50",null)),De=qe.exports,Ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout swiper-horizontal",class:{isEnd:e.isEnd,isBeginning:e.isBeginning},attrs:{id:"layout-history"}},[i("div",{staticClass:"history__display"},[e.slideLength?i("Swiper",{ref:"swiper",on:{activeIndexChange:function(t){e.slideIndex=t.realIndex}}},e._l(e.savedHistory,(function(t,n){return i("SwiperSlide",{key:n},[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[i("div",{staticClass:"history__date",domProps:{textContent:e._s(e.getFormatDate(t.date))}}),i("DisplayHistory",{attrs:{historyOfDate:t.chunks}})],1)])})),1):i("DisplayEmpty",{attrs:{text:"История ваших сравнений",icon:"inbox"}})],1),i("SlideButtons",{attrs:{limit:e.slideList.length,isBeginning:e.isBeginning,isEnd:e.isEnd},model:{value:e.slideIndex,callback:function(t){e.slideIndex=t},expression:"slideIndex"}})],1)},Be=[],Ne=(i("4d90"),i("25f0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"history__container-scroll"},e._l(e.historyOfDate,(function(t,n){return i("div",{key:n,staticClass:"history__chunk"},[i("div",{staticClass:"history__chunk_item history__chunk_item-question",domProps:{textContent:e._s(t.question)}}),e._l(t.answers,(function(t,n){return i("div",{key:n,staticClass:"history__chunk_item",domProps:{textContent:e._s(t)}})}))],2)})),0)}),Qe=[],Fe={name:"DisplayHistory",components:{Icon:x},props:{historyOfDate:Array}},Ge=Fe,Xe=(i("0a92"),Object(y["a"])(Ge,Ne,Qe,!1,null,"782e9a35",null)),Ke=Xe.exports,Ve={name:"LayoutHistory",components:{DisplayHistory:Ke,Swiper:K["Swiper"],SwiperSlide:K["SwiperSlide"],SlideButtons:ge,DisplayEmpty:pe},props:{appWidth:Number,bodyHeight:Number,savedHistory:Array},data:function(){return{lodash:a.a,swiperRef:null,slideIndex:0,slideHeight:0,slideLength:!0}},watch:{appWidth:["setSlideHeight","setSlidesSize"],slideIndex:function(e){this.$emit("changeSlide",e),this.swiperRef.slideTo(e),this.setSlidesSize()},bodyHeight:{immediate:!0,handler:"setSlideHeight"},savedHistory:{deep:!0,handler:function(e){this.slideIndex=a.a.clamp(this.slideIndex,0,e.length-1)}}},computed:{isEnd:function(){var e,t=!this.savedHistory.length,i=this.slideIndex===this.slideList.length-1;return!(null===(e=this.swiperRef)||void 0===e||!e.isEnd)||i||t},isBeginning:function(){var e,t=!this.savedHistory.length,i=0===this.slideIndex;return!(null===(e=this.swiperRef)||void 0===e||!e.isBeginning)||i||t},slideList:function(){var e;return(null===(e=this.swiperRef)||void 0===e?void 0:e.slides)||[]}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){var t,i,n;e.slideHeight=null===(t=e.$refs)||void 0===t||null===(i=t.swiper)||void 0===i||null===(n=i.$el)||void 0===n?void 0:n.offsetHeight}))},setSlidesSize:function(){var e=this,t=this.appWidth-40,i="translate3d(-".concat(this.slideIndex*t,"px, 0px, 0px)"),n=document.querySelector("#layout-history .swiper-wrapper");a.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","max-width","".concat(t,"px")),a.a.invoke(null===n||void 0===n?void 0:n.style,"setProperty","transform",i);var s=document.querySelectorAll("#layout-history .swiper-slide");[].forEach.call(s,(function(i,n){i.style.setProperty("width","".concat(t,"px")),e.swiperRef.slidesGrid[n]=n*t,e.swiperRef.snapGrid[n]=n*t,e.swiperRef.slidesSizesGrid[n]=t}))},deleteSlide:function(e){var t=this;this.$nextTick((function(){t.swiperRef.slides.splice(e,1),t.swiperRef.slidesGrid.splice(e,1),t.swiperRef.snapGrid.splice(e,1),t.swiperRef.slidesSizesGrid.splice(e,1),t.slideLength=t.swiperRef.slides.length}))},getFormatDate:function(e){var t=new Date(e),i=t.getDate().toString().padStart(2,0),n=(t.getMonth()+1).toString().padStart(2,0),s=t.getFullYear(),r=t.getHours().toString().padStart(2,0),o=t.getMinutes().toString().padStart(2,0);return"".concat(i,".").concat(n,".").concat(s," | ").concat(r,":").concat(o)}},mounted:function(){var e,t;this.swiperRef=this.$refs.swiper.swiperRef,this.slideLength=(null===(e=this.swiperRef)||void 0===e||null===(t=e.slides)||void 0===t?void 0:t.length)||0,this.swiperRef.slideTo(0,0),this.$nextTick(this.setSlidesSize)}},Je=Ve,Ye=(i("3249"),Object(y["a"])(Je,Ae,Be,!1,null,"263774eb",null)),Ue=Ye.exports,Ze=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[e.isModeCompare?i("button",{staticClass:"navigation__item navigation__item-nohover",staticStyle:{cursor:"default"}},[i("span",{domProps:{textContent:e._s("Шаг: "+e.compareStep+" из "+e.compareMaxSteps)}}),i("div",{staticClass:"compare_loader",style:{width:e.compareLoaderWidth}})]):i("button",{staticClass:"navigation__item",domProps:{textContent:e._s(e.isModeEditor?"История":"Редактор")},on:{click:function(t){return e.$emit("switchModeEditor")}}}),e.isModeEditor?i("button",{staticClass:"navigation__item navigation__item-special",attrs:{disabled:!e.isEditorDataExist},on:{click:function(t){e.isEditorDataExist&&e.$emit("switchModeCompare")}}},[i("Icon",{attrs:{type:e.isModeCompare?"x":"send"}})],1):i("button",{staticClass:"navigation__item",staticStyle:{color:"var(--special-color)"},attrs:{disabled:!e.isHistoryExist},on:{click:function(t){e.isHistoryExist&&e.$emit("removeFromHistory")}}},[i("Icon",{attrs:{type:"trash"}})],1)])},et=[],tt={name:"Navigation",components:{Icon:x},props:{isModeCompare:Boolean,isModeEditor:Boolean,isHistoryExist:Boolean,isEditorDataExist:Boolean,compareStep:Number,compareMaxSteps:Number},computed:{compareLoaderWidth:function(e){return"".concat(e.compareStep/e.compareMaxSteps*100,"%")}}},it=tt,nt=(i("fb68"),Object(y["a"])(it,Ze,et,!1,null,null,null)),st=nt.exports,rt={name:"Priorities",components:{LayoutEditor:Ee,LayoutCompare:De,LayoutHistory:Ue,Navigation:st},props:{appWidth:Number,bodyHeight:Number,isDesktop:Boolean,minAppHeight:Number},data:function(){return{lodash:a.a,isModeEditor:!0,isModeCompare:!1,compareStep:1,slideIndexHistory:0,slideIndexEditor:1,valueQuestion:"",valuePriority:""}},watch:{isModeCompare:function(){this.compareStep=1}},computed:Object(l["a"])({},Object(d["d"])(["savedHistory","questions","priorities"])),methods:Object(l["a"])(Object(l["a"])({},Object(d["c"])(["addToHistory","removeFromHistory","addQuestion","removeQuestion","addPriority","removePriority"])),{},{removeFromHistoryHandler:function(){this.removeFromHistory(this.slideIndexHistory),this.$refs.layoutHistory.deleteSlide(this.slideIndexHistory)},finishComparison:function(e){this.addToHistory(e),this.isModeEditor=!1,this.isModeCompare=!1},keydown:function(e){var t=e.key;e.shiftKey;switch(t){case"Escape":this.$emit("switchSettings");break}}}),beforeMount:function(){document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},ot=rt,at=(i("21bb"),Object(y["a"])(ot,Q,F,!1,null,null,null)),ct=at.exports;n["default"].use(N["a"]);var lt=[{path:"/",name:"Home",component:ct}],ut=new N["a"]({mode:"hash",base:"/priorities/",routes:lt});n["default"].config.productionTip=!1,new n["default"]({store:B,router:ut,render:function(e){return e($)}}).$mount("#app")},"571e":function(e,t,i){"use strict";i("93c5")},"5c0b":function(e,t,i){"use strict";i("9c0c")},6864:function(e,t,i){"use strict";i("796e")},"796e":function(e,t,i){},"7ad3":function(e,t,i){"use strict";i("03ae")},"7f4a":function(e,t,i){"use strict";i("3b32")},"8c79":function(e,t,i){},"93c5":function(e,t,i){},"9c0c":function(e,t,i){},ae5a:function(e,t,i){},bbe1:function(e,t,i){},bdb9:function(e,t,i){},c0d0:function(e,t,i){"use strict";i("ae5a")},c2f1:function(e,t,i){"use strict";i("c659")},c659:function(e,t,i){},cf3a:function(e,t,i){},dce6:function(e,t,i){"use strict";i("1cbc")},fb68:function(e,t,i){"use strict";i("8c79")},fdcd:function(e,t,i){"use strict";i("bbe1")}});
//# sourceMappingURL=app.554996ed.js.map