(function(e){function t(t){for(var s,r,a=t[0],d=t[1],l=t[2],u=0,p=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,a=1;a<i.length;a++){var d=i[a];0!==n[d]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/minis-comparison/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=d;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0880":function(e,t,i){},1310:function(e,t,i){"use strict";i("462d")},"2c9d":function(e,t,i){"use strict";i("0880")},"35d7":function(e,t,i){"use strict";i("92c1")},"462d":function(e,t,i){},"508c":function(e,t,i){"use strict";i("8b87")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("c4d1");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",class:{fullscreen:e.isFullscreen},style:{height:e.innerHeight+"px",maxWidth:e.isDesktop?e.containerWidth+"px":"100vw",maxHeight:e.isDesktop?e.containerHeight+"px":"100vh"}},[e.isPageLoad?i("div",{staticClass:"minis__wrapper"},[e.isDesktop?i("SettingsDesktop",{attrs:{themeIcon:e.themeMain.icon,appHeight:e.appHeight,appWidth:e.appWidth,translate:e.translate,translateDef:e.translateDef,showHints:e.minisHints},on:{switchHints:e.switchHints,switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){return e.$store.commit(e.switchFullscreenKey)}},model:{value:e.isClosedSettings,callback:function(t){e.isClosedSettings=t},expression:"isClosedSettings"}}):e._e(),i("LayoutContent",{ref:"layoutContent",style:{filter:e.openedModalName?"blur(2px)":"none"},attrs:{appWidth:e.appWidth,appHeight:e.appHeight,bodyHeight:e.innerHeight,isDesktop:e.isDesktop,isWidthMore768:e.isWidthMore768},on:{switchSettings:function(t){e.isClosedSettings=!e.isClosedSettings},updateInputFocus:function(t){e.onInputFocus=t},openModal:function(t){e.openedModalName=t},setSlideIndexHistory:function(t){e.slideIndexHistory=t}}}),i("AppModal",{attrs:{isRoundedBorder:e.isWidthMore768&&!e.isFullscreen},model:{value:e.openedModalName,callback:function(t){e.openedModalName=t},expression:"openedModalName"}},["settings"==e.openedModalName?i("SettingsMobile",{attrs:{themeIcon:e.themeMain.icon,isWidthMore768:e.isWidthMore768},on:{switchTheme:e.switchTheme,switchLang:e.switchLang,switchFullscreen:function(t){return e.$store.commit(e.switchFullscreenKey)}}}):e._e(),"deletionConfirmation"==e.openedModalName?i("div",{staticClass:"confirmation"},[i("span",{domProps:{textContent:e._s(e.translate("history.displays.history.buttonDeleteConfirm"))}}),i("strong",{domProps:{textContent:e._s(e.getFormatDate(e.lodash.get(e.savedHistory[e.slideIndexHistory],"date")))}}),i("button",{domProps:{textContent:e._s(e.translateDef("delete"))},on:{click:e.removeFromHistoryHandler}})]):e._e()],1),e.isDesktop?i("div",{staticClass:"resize_button",on:{mousedown:function(t){return t.preventDefault(),e.startResize.apply(null,arguments)},dblclick:function(t){return t.preventDefault(),e.autoResize.apply(null,arguments)}}}):e._e(),e.isDesktop?i("a",{staticClass:"minis",attrs:{href:"https://adequm.github.io/minis",target:"_blank"},domProps:{textContent:e._s("Minis")}}):e._e()],1):i("AppLoader",{attrs:{size:100,rotate:""}})],1)},o=[],r=i("5530"),a=(i("4d90"),i("d3b7"),i("25f0"),i("99af"),i("2ef0")),d=i.n(a),l=i("b54a"),c=i("1c09"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"minis__content",style:{minHeight:e.appHeight+"px",gridTemplateRows:e.gridTemplateRows}},[i("AppNavigation",{attrs:{isDesktop:e.isDesktop,isModeEditor:e.isModeEditor,isModeCompare:e.isModeCompare,isHistoryExist:!!e.lodash.size(e.savedHistory),isEditorDataExist:!!e.questions.length&&e.priorities.length>=2,isHistoryModeAnswers:e.isHistoryModeAnswers,compareQuestionIndex:e.compareQuestionIndex,compareMaxQuestionsIndex:e.questions.length},on:{switchModeCompare:function(t){e.isModeCompare=!e.isModeCompare},switchModeEditor:function(t){e.isModeEditor=!e.isModeEditor},openModal:function(t){return e.$emit("openModal",t)},switchModeHistory:function(t){e.isHistoryModeAnswers=!e.isHistoryModeAnswers}}}),i("div",{staticClass:"minis__display"},[e.isModeCompare?i("LayoutCompare",{attrs:{horizontal:e.isWidthMore768&&e.appWidth>=530,appWidth:e.appWidth,appHeight:e.appHeight,bodyHeight:e.bodyHeight,questions:e.questions,priorities:e.priorities},on:{nextStep:function(t){e.compareQuestionIndex++},"finish-comparison":e.finishComparison}}):[e.isModeEditor?i("LayoutEditor",{attrs:{appWidth:e.appWidth,appHeight:e.appHeight,bodyHeight:e.bodyHeight,questions:e.questions,priorities:e.priorities,valueQuestion:e.valueQuestion,valuePriority:e.valuePriority,slideIndex:e.slideIndexEditor},on:{changeSlide:function(t){e.slideIndexEditor=t},updateValueQuestion:function(t){e.valueQuestion=t},updateValuePriority:function(t){e.valuePriority=t},addPriority:e.addPriority,addQuestion:e.addQuestion,removeQuestion:e.removeQuestion,removePriority:e.removePriority,updateInputFocus:function(t){return e.$emit("updateInputFocus",t)}}}):e._e(),e.isModeEditor?e._e():i("LayoutHistory",{ref:"layoutHistory",attrs:{appWidth:e.appWidth,bodyHeight:e.bodyHeight,savedHistory:e.savedHistory,isHistoryModeAnswers:e.isHistoryModeAnswers},on:{changeSlide:function(t){e.slideIndexHistory=t},openModal:function(t){return e.$emit("openModal",t)}}})]],2)],1)},p=[],h=(i("a9e3"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout swiper-horizontal",attrs:{id:"layout-editor"}},[i("div",{staticClass:"layout__textarea_wrapper"},[!e.slideIndex||e.isSlideHalf?i("AppTextarea",{ref:"textareaQuestions",attrs:{resize:e.appWidth,value:e.valueQuestion,placeholder:e.textareaPlaceholderQuestions,title:e.valueQuestion&&e.textareaPlaceholderQuestions},on:{input:function(t){return e.$emit("updateValueQuestion",t)},submit:function(t){e.$emit("updateValueQuestion","")&&e.$emit("addQuestion",t)},updateInputFocus:function(t){return e.$emit("updateInputFocus",t)}}}):e._e(),e.slideIndex||e.isSlideHalf?i("AppTextarea",{ref:"textareaPriorities",attrs:{resize:e.appWidth,value:e.valuePriority,placeholder:e.textareaPlaceholderPriorities,title:e.valuePriority&&e.textareaPlaceholderPriorities},on:{input:function(t){return e.$emit("updateValuePriority",t)},submit:function(t){e.$emit("updateValuePriority","")&&e.$emit("addPriority",t)},updateInputFocus:function(t){return e.$emit("updateInputFocus",t)}}}):e._e()],1),i("div",{staticClass:"layout__display",class:{isEnd:e.isEnd,isBeginning:e.isBeginning}},[i("div",{staticClass:"layout__display_content"},[i("Swiper",{ref:"swiper",attrs:{slidesPerView:e.isSlideHalf?2:1},on:{activeIndexChange:function(t){return e.$emit("changeSlide",t.realIndex)}}},[i("SwiperSlide",[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[e.questions.length?i("DisplayQuestions",{attrs:{questions:e.questions},on:{remove:function(t){return e.$emit("removeQuestion",t)},edit:function(t){return e.edit("question",t)}}}):i("DisplayEmpty",{attrs:{text:e.translate("editor.displays.questions.title"),icon:"notebook",button:e.questionsList.length&&e.translate("editor.displays.questions.buttonAdd")},on:{click:function(t){e.questionsList.forEach((function(t){return e.$emit("addQuestion",t)}))}}})],1)]),i("SwiperSlide",[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[e.priorities.length?i("DisplayPriorities",{attrs:{priorities:e.priorities},on:{remove:function(t){return e.$emit("removePriority",t)},edit:function(t){return e.edit("priority",t)}}}):i("DisplayEmpty",{attrs:{text:e.translate("editor.displays.priorities.title"),icon:"star"}})],1)])],1)],1),i("SlideButtons",{attrs:{limit:e.slideList.length,isBeginning:e.isBeginning,isEnd:e.isEnd,value:e.slideIndex},on:{input:function(t){return e.$emit("changeSlide",t)}}})],1)])}),f=[],m=i("d7cf"),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"priorities__container-scroll"},e._l(e.priorities,(function(t,s){return i("div",{key:t+"_"+s,staticClass:"priority__item"},[i("span",{domProps:{textContent:e._s(t)}}),i("div",{staticStyle:{float:"right",display:"flex"}},[i("Icon",{attrs:{type:"edit",size:16},on:{click:function(t){return e.$emit("edit",s)}}}),i("Icon",{attrs:{type:"trash",size:16},on:{click:function(t){return e.$emit("remove",s)}}})],1)])})),0)},g=[],v={name:"DisplayPriorities",components:{Icon:l["d"]},props:{priorities:Array}},x=v,w=(i("2c9d"),i("2877")),S=Object(w["a"])(x,y,g,!1,null,"206afdb9",null),H=S.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"questions__container-scroll"},e._l(e.questions,(function(t,s){return i("div",{key:t+"_"+s,staticClass:"question__item"},[i("span",{domProps:{textContent:e._s(t)}}),i("div",{staticStyle:{float:"right",display:"flex"}},[i("Icon",{attrs:{type:"edit",size:16},on:{click:function(t){return e.$emit("edit",s)}}}),i("Icon",{attrs:{type:"trash",size:16},on:{click:function(t){return e.$emit("remove",s)}}})],1)])})),0)},I=[],C={name:"DisplayQuestions",components:{Icon:l["d"]},props:{questions:Array}},M=C,k=(i("508c"),Object(w["a"])(M,b,I,!1,null,"5a289c71",null)),P=k.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"empty__container"},[i("Icon",{attrs:{type:e.icon,size:96,strokeWidth:1}}),i("span",{domProps:{textContent:e._s(e.text)}}),e.button?i("button",{domProps:{textContent:e._s(e.button)},on:{click:function(t){return e.$emit("click")}}}):e._e()],1)},E=[],R={name:"DisplayEmpty",components:{Icon:l["d"]},props:{text:String,icon:String,button:[String,Number,Boolean]}},D=R,q=(i("90ff"),Object(w["a"])(D,$,E,!1,null,"6fc42ace",null)),A=q.exports,z={name:"LayoutEditor",mixins:[c["e"]],components:{SlideButtons:l["g"],AppTextarea:l["c"],DisplayPriorities:H,DisplayQuestions:P,DisplayEmpty:A,Swiper:m["Swiper"],SwiperSlide:m["SwiperSlide"]},props:{isShow:Boolean,appWidth:Number,appHeight:Number,bodyHeight:Number,questions:Array,priorities:Array,valueQuestion:String,valuePriority:String,slideIndex:Number},data:function(){return{swiperRef:null,slideHeight:0,questionsList:[]}},watch:{appWidth:["setSlideWidth","setSlideHeight"],appHeight:["setSlideWidth","setSlideHeight"],textareaHeight:["setSlideWidth","setSlideHeight"],slideIndex:function(e){this.swiperRef.slideTo(this.isSlideHalf?0:e),this.setSlideWidth()},bodyHeight:{immediate:!0,handler:"setSlideHeight"},minisLang:{immediate:!0,handler:function(){this.questionsList=this.translate("editor.displays.questions.questionsList",[])}}},computed:{isEnd:function(){var e=this.slideIndex===this.slideList.length-1;return!!this.swiperRef&&this.swiperRef.isEnd||e||this.isSlideHalf},isBeginning:function(){var e=0===this.slideIndex;return!!this.swiperRef&&this.swiperRef.isBeginning||e||this.isSlideHalf},slideList:function(){var e;return(null===(e=this.swiperRef)||void 0===e?void 0:e.slides)||[]},textareaPlaceholderPriorities:function(e){return e.translate("editor.displays.priorities.placeholder")},textareaPlaceholderQuestions:function(e){return e.translate("editor.displays.questions.placeholder")},isSlideHalf:function(e){return e.appWidth>=1e3},slideWidth:function(e){return e.isSlideHalf?(e.appWidth-40)/2:e.appWidth-40}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){var t,i,s;e.slideHeight=null===(t=e.$refs)||void 0===t||null===(i=t.swiper)||void 0===i||null===(s=i.$el)||void 0===s?void 0:s.offsetHeight}))},setSlideWidth:function(){var e=this,t=this.slideWidth,i="translate3d(-".concat(this.slideIndex*t,"px, 0px, 0px)"),s=document.querySelector("#layout-editor .swiper-wrapper");_.invoke(null===s||void 0===s?void 0:s.style,"setProperty","max-width","".concat(t,"px")),_.invoke(null===s||void 0===s?void 0:s.style,"setProperty","transform",i),this.isSlideHalf&&_.invoke(this.swiperRef,"slideTo",0);var n=document.querySelectorAll("#layout-editor .swiper-slide");[].forEach.call(n,(function(i,s){i.style.setProperty("width","".concat(t,"px")),e.swiperRef.slidesGrid[s]=s*t,e.swiperRef.snapGrid[s]=s*t,e.swiperRef.slidesSizesGrid[s]=t}))},edit:function(e,t){"priority"==e?(this.$emit("updateValuePriority",this.priorities[t]),this.$emit("removePriority",t),this.$refs.textareaPriorities.focus()):(this.$emit("updateValueQuestion",this.questions[t]),this.$emit("removeQuestion",t),this.$refs.textareaQuestions.focus())}},mounted:function(){var e=this.isSlideHalf?0:this.slideIndex;this.swiperRef=this.$refs.swiper.swiperRef,this.swiperRef.slideTo(e,0),this.$emit("changeSlide",e),this.$nextTick(this.setSlideWidth)}},W=z,O=(i("1310"),Object(w["a"])(W,h,f,!1,null,"2c02b5ce",null)),Q=O.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout",class:"swiper-"+e.direction,attrs:{id:"layout-compare"}},[i("div",{staticClass:"compare__question",domProps:{textContent:e._s(e.questionTitle)}}),i("div",{staticClass:"compare__display"},[i("Swiper",{ref:"swiper",attrs:{direction:e.direction},on:{activeIndexChange:function(t){e.slideIndex=t.realIndex}}},[i("SwiperSlide",[i("DisplayCompare",{ref:"displayCompare",attrs:{answers:[e.answerLeft,e.answerRight],horizontal:e.horizontal},on:{select:function(t){t?e.selectAnswerRight():e.selectAnswerLeft()}}})],1)],1)],1)])},j=[],T=i("1da1"),F=(i("96cf"),i("d81d"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"compare__container"},[i("div",{staticClass:"compare__answers_wrapper",style:{flexDirection:e.horizontal?"row":"column"}},e._l(e.answers,(function(t,s){return i("div",{key:s,ref:"answers",refInFor:!0,staticClass:"compare__answer",class:{horizontal:e.horizontal},on:{click:function(i){t&&e.canChange&&e.changeAnswer(s)}}},[t?[e.canChange||e.changedAnswer===s?i("span",{domProps:{textContent:e._s(t)}}):e._e()]:i("Icon",{staticStyle:{opacity:".5"},attrs:{type:"confetti",size:60,strokeWidth:1}})],2)})),0)])}),N=[],B={name:"DisplayCompare",components:{Icon:l["d"]},props:{answers:Array,horizontal:Boolean},data:function(){return{canChange:!0,changedAnswer:null}},methods:{changeAnswer:function(e){var t=this;return this.changedAnswer=e,new Promise((function(i){t.canChange=!1;var s=t.$refs,n=s.container,o=s.answers,r=(n.offsetWidth,t.horizontal?"width":"height");o[+!e].style.setProperty("transition","".concat(r," .5s")),o[+!e].style.setProperty(r,"50px"),o[e].style.setProperty("background-color","var(--special-color-100)"),o[e].style.setProperty("color","var(--text-color)"),setTimeout((function(){o[+!e].style.removeProperty("transition"),o[+!e].style.removeProperty(r)}),800),setTimeout((function(){o[e].style.removeProperty("opacity"),o[e].style.removeProperty("background-color"),o[e].style.removeProperty("color"),t.$emit("select",e),t.canChange=!0,i()}),1e3)}))}}},G=B,V=(i("c2f1"),Object(w["a"])(G,F,N,!1,null,null,null)),K=V.exports,J={name:"LayoutCompare",components:{Swiper:m["Swiper"],SwiperSlide:m["SwiperSlide"],DisplayCompare:K},props:{horizontal:Boolean,appWidth:Number,appHeight:Number,bodyHeight:Number,questions:Array,priorities:Array},data:function(){return{swiperRef:null,slideIndex:0,slideContrainerHeight:0,slideHeight:null,prioritiesArray:[],prioritiesResult:[],sortedIndex:0,sortedIndexTry:0,optionMaxIndex:0,questionIndex:0}},watch:{slideHeight:"setSlidesSize",questionTitle:["setSlideHeight","setSlidesSize"],horizontal:["setSlideHeight","setSlidesSize"],appWidth:["setSlideHeight","setSlidesSize"],appHeight:["setSlideHeight","setSlidesSize"],slideIndex:function(){var e=Object(T["a"])(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==t){e.next=2;break}return e.abrupt("return");case 2:return this.swiperRef.slideTo(0,0),i=this.$refs.displayCompare,e.next=6,i.changeAnswer(+!!t);case 6:this.$emit("nextStep",t);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),bodyHeight:{immediate:!0,handler:"setSlideHeight"}},computed:{direction:function(e){return e.horizontal?"horizontal":"vertical"},slideSize:function(e){return e.horizontal?e.appWidth-60:e.slideHeight},slideTransform:function(){return this.horizontal?"translate3d(-".concat(this.slideIndex*this.slideSize,"px, 0px, 0px)"):"translate3d(0px, -".concat(this.slideIndex*this.slideSize,"px, 0px)")},answerLeft:function(e){return d.a.get(e.prioritiesResult[e.questionIndex],e.sortedIndex)},answerRight:function(e){return d.a.get(e.prioritiesResult[e.questionIndex],e.sortedIndex+1)},questionTitle:function(e){return e.questions[e.questionIndex]},lastQuestionIndex:function(e){return e.questions.length-1}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){e.slideHeight=e.$refs.swiper.$el.offsetHeight}))},setSlidesSize:function(){var e=this;this.swiperRef.slideTo(0,0);var t=this.appWidth-60,i=this.slideHeight,s=document.querySelector("#layout-compare .swiper-wrapper");d.a.invoke(null===s||void 0===s?void 0:s.style,"setProperty","max-width","".concat(t,"px")),d.a.invoke(null===s||void 0===s?void 0:s.style,"setProperty","max-height","".concat(i,"px")),d.a.invoke(null===s||void 0===s?void 0:s.style,"setProperty","transform",this.slideTransform);var n=document.querySelectorAll("#layout-compare .swiper-slide");[].forEach.call(n,(function(s,n){s.style.setProperty("width","".concat(t,"px")),s.style.setProperty("height","".concat(i,"px")),e.swiperRef.slidesGrid[n]=n*e.slideSize,e.swiperRef.snapGrid[n]=n*e.slideSize,e.swiperRef.slidesSizesGrid[n]=e.slideSize}))},"startСomparison":function(){var e=this;d.a.times(this.questions.length,(function(t){var i=d.a.cloneDeep(e.priorities);e.prioritiesResult.push(d.a.shuffle(i))})),this.optionMaxIndex=this.priorities.length-1},selectAnswerLeft:function(){this.sortedIndex=++this.sortedIndexTry,this.sortedIndexTry>=this.optionMaxIndex&&this.finishСomparison()},selectAnswerRight:function(){var e=this.prioritiesResult[this.questionIndex],t=this.sortedIndex,i=[e[t],e[t+1]];e[t+1]=i[0],e[t]=i[1],this.sortedIndex-1>=0?this.sortedIndex=d.a.clamp(t-1,0,this.optionMaxIndex):(this.changedAnswerRightMount++,this.selectAnswerLeft())},"finishСomparison":function(){var e=this;if(this.questionIndex++,this.sortedIndex=0,this.sortedIndexTry=0,this.$emit("nextStep"),!(this.questionIndex<=this.lastQuestionIndex)){var t=d.a.map(this.prioritiesResult,(function(t,i){var s=e.questions[i];return{question:s,answers:t}})),i=Date.now();this.$emit("finish-comparison",{date:i,chunks:t})}}},mounted:function(){this.startСomparison(),this.swiperRef=this.$refs.swiper.swiperRef,this.$nextTick(this.setSlidesSize)}},Y=J,U=(i("e2d9"),Object(w["a"])(Y,L,j,!1,null,"1e0377ea",null)),X=U.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout swiper-horizontal",class:{isEnd:e.isEnd,isBeginning:e.isBeginning},attrs:{id:"layout-history"}},[i("div",{staticClass:"history__display"},[e.slideLength?i("Swiper",{ref:"swiper",on:{activeIndexChange:function(t){e.slideIndex=t.realIndex}}},e._l(e.savedHistory,(function(t,s){return i("SwiperSlide",{key:s},[i("div",{staticClass:"slide__container",style:{height:e.slideHeight+"px"}},[i("div",{staticClass:"history__main"},[i("div",{staticClass:"history__main_date",domProps:{textContent:e._s(e.getFormatDate(t.date))}}),i("button",{staticClass:"history__main_delete",on:{click:function(t){return e.$emit("openModal","deletionConfirmation")}}},[i("Icon",{attrs:{type:"trash"}})],1)]),i("DisplayHistory",{attrs:{historyOfDate:t.chunks,isHistoryModeAnswers:e.isHistoryModeAnswers,displayWidth:e.appWidth-40}})],1)])})),1):i("DisplayEmpty",{attrs:{text:e.translate("history.displays.history.title"),icon:"book"}})],1),i("SlideButtons",{attrs:{isEnd:e.isEnd,isBeginning:e.isBeginning},on:{slidePrev:function(t){return e.lodash.invoke(e.swiperRef,"slidePrev")},slideNext:function(t){return e.lodash.invoke(e.swiperRef,"slideNext")}}})],1)},ee=[],te=(i("a434"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"history__container-scroll",style:{gridTemplateColumns:"repeat("+e.columnsRepeat+", minmax(170px, 1fr))"},on:{click:function(t){e.choicedItem=null}}},e._l(e.chunk,(function(t,s){return i("div",{key:s,staticClass:"history__chunk"},[i("div",{staticClass:"history__chunk_item history__chunk_item-question",domProps:{textContent:e._s(t.question)}}),e._l(t.answers,(function(t,s){return i("div",{key:s,staticClass:"history__chunk_item",class:{"history__chunk_item-active":e.choicedItem==t},domProps:{textContent:e._s(t)},on:{click:function(i){i.stopPropagation(),e.choicedItem=t}}})}))],2)})),0)}),ie=[],se=(i("ddb0"),{name:"DisplayHistory",components:{Icon:l["d"]},props:{historyOfDate:Array,isHistoryModeAnswers:Boolean,displayWidth:Number},data:function(){return{choicedItem:null}},computed:{columnsRepeat:function(){var e=this.chunk.length,t=Math.floor((this.displayWidth-10*(e+1))/170);return Math.min(t,e)},chunk:function(){if(!this.isHistoryModeAnswers)return this.historyOfDate;var e=d.a.reduce(this.historyOfDate,(function(e,t){var i=t.question,s=t.answers;return d.a.each(s,(function(t,s){var n=d.a.get(e,t,{}),o=d.a.get(n,s,[]);n[s]=o.concat(i),e[t]=n})),e}),{});return d.a.reduce(e,(function(e,t,i){var s=d.a.flatten(d.a.values(t));return e.push({question:i,answers:s}),e}),[])}}}),ne=se,oe=(i("f1c3"),Object(w["a"])(ne,te,ie,!1,null,"136dda9d",null)),re=oe.exports,ae={name:"LayoutHistory",mixins:[c["e"]],components:{DisplayHistory:re,Swiper:m["Swiper"],SwiperSlide:m["SwiperSlide"],SlideButtons:l["g"],DisplayEmpty:A,Icon:l["d"]},props:{appWidth:Number,bodyHeight:Number,savedHistory:Array,isHistoryModeAnswers:Boolean},data:function(){return{lodash:d.a,swiperRef:null,slideIndex:0,slideHeight:0,slideLength:!0}},watch:{appWidth:["setSlideHeight","setSlidesSize"],slideIndex:function(e){this.$emit("changeSlide",e),this.swiperRef.slideTo(e),this.setSlidesSize()},bodyHeight:{immediate:!0,handler:"setSlideHeight"},savedHistory:{deep:!0,handler:function(e){this.slideIndex=d.a.clamp(this.slideIndex,0,e.length-1)}}},computed:{isEnd:function(){var e,t=!this.savedHistory.length,i=this.slideIndex===this.slideList.length-1;return!(null===(e=this.swiperRef)||void 0===e||!e.isEnd)||i||t},isBeginning:function(){var e,t=!this.savedHistory.length,i=0===this.slideIndex;return!(null===(e=this.swiperRef)||void 0===e||!e.isBeginning)||i||t},slideList:function(){var e;return(null===(e=this.swiperRef)||void 0===e?void 0:e.slides)||[]}},methods:{setSlideHeight:function(){var e=this;this.$nextTick((function(){var t,i,s;e.slideHeight=null===(t=e.$refs)||void 0===t||null===(i=t.swiper)||void 0===i||null===(s=i.$el)||void 0===s?void 0:s.offsetHeight}))},setSlidesSize:function(){var e=this,t=this.appWidth-40,i="translate3d(-".concat(this.slideIndex*t,"px, 0px, 0px)"),s=document.querySelector("#layout-history .swiper-wrapper");d.a.invoke(null===s||void 0===s?void 0:s.style,"setProperty","max-width","".concat(t,"px")),d.a.invoke(null===s||void 0===s?void 0:s.style,"setProperty","transform",i);var n=document.querySelectorAll("#layout-history .swiper-slide");[].forEach.call(n,(function(i,s){i.style.setProperty("width","".concat(t,"px")),e.swiperRef.slidesGrid[s]=s*t,e.swiperRef.snapGrid[s]=s*t,e.swiperRef.slidesSizesGrid[s]=t}))},deleteSlide:function(e){var t=this;this.$nextTick((function(){t.swiperRef.slides.splice(e,1),t.swiperRef.slidesGrid.splice(e,1),t.swiperRef.snapGrid.splice(e,1),t.swiperRef.slidesSizesGrid.splice(e,1),t.slideLength=t.swiperRef.slides.length,t.setSlidesSize()}))},getFormatDate:function(e){var t=new Date(e),i=t.getDate().toString().padStart(2,0),s=(t.getMonth()+1).toString().padStart(2,0),n=t.getFullYear(),o=t.getHours().toString().padStart(2,0),r=t.getMinutes().toString().padStart(2,0);return"".concat(i,".").concat(s,".").concat(n," | ").concat(o,":").concat(r)}},mounted:function(){var e,t;this.swiperRef=this.$refs.swiper.swiperRef,this.slideLength=(null===(e=this.swiperRef)||void 0===e||null===(t=e.slides)||void 0===t?void 0:t.length)||0,this.swiperRef.slideTo(0,0),this.$nextTick(this.setSlidesSize)}},de=ae,le=(i("5d89"),Object(w["a"])(de,Z,ee,!1,null,"5862ccc9",null)),ce=le.exports,ue=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[e.isModeCompare?i("div",{staticClass:"navigation__item nohover",staticStyle:{cursor:"default"}},[i("span",{staticStyle:{"z-index":"1"},domProps:{textContent:e._s(e.compareStep)}}),i("div",{staticClass:"compare_loader",style:{width:e.compareLoaderWidth}})]):i("button",{staticClass:"navigation__item",domProps:{textContent:e._s(e.pageName)},on:{click:function(t){return e.$emit("switchModeEditor")}}}),e.isDesktop?e._e():i("button",{staticClass:"navigation__item navigation__item-settings nofocus nohover",on:{click:function(t){return e.$emit("openModal","settings")}}},[i("Icon",{attrs:{type:"settings"}})],1),e.isModeEditor?i("button",{staticClass:"navigation__item navigation__item-special",attrs:{disabled:!e.isEditorDataExist},on:{click:function(t){e.isEditorDataExist&&e.$emit("switchModeCompare")}}},[i("Icon",{attrs:{type:e.isModeCompare?"cross-small":"paper-plane"}})],1):i("button",{staticClass:"navigation__item nofocus",staticStyle:{color:"var(--special-color)"},attrs:{disabled:!e.isHistoryExist},on:{click:function(t){e.isHistoryExist&&e.$emit("switchModeHistory")}}},[i("Icon",{attrs:{type:e.isHistoryModeAnswers?"menu-dots-vertical":"menu-dots"}})],1)])},pe=[],he=(i("b680"),{name:"AppNavigation",mixins:[c["e"]],components:{Icon:l["d"]},props:{isDesktop:Boolean,isModeCompare:Boolean,isModeEditor:Boolean,isHistoryExist:Boolean,isEditorDataExist:Boolean,isHistoryModeAnswers:Boolean,compareQuestionIndex:Number,compareMaxQuestionsIndex:Number},data:function(){return{console:console}},computed:{compareLoaderWidth:function(e){return"".concat(+(e.compareQuestionIndex/e.compareMaxQuestionsIndex*100).toFixed(2),"%")},pageName:function(){return this.isModeEditor?this.translate("history.title"):this.translate("editor.title")},compareStep:function(){var e=this.translate("compare.title");return"".concat(e,": ").concat(this.compareQuestionIndex,"/").concat(this.compareMaxQuestionsIndex)}}}),fe=he,me=(i("35d7"),Object(w["a"])(fe,ue,pe,!1,null,"255e0eb6",null)),ye=me.exports,ge=i("2f62"),ve={name:"LayoutContent",components:{LayoutEditor:Q,LayoutCompare:X,LayoutHistory:ce,AppNavigation:ye},props:{appWidth:Number,appHeight:Number,bodyHeight:Number,isDesktop:Boolean,isWidthMore768:Boolean},data:function(){return{lodash:d.a,isModeEditor:!0,isModeCompare:!1,isHistoryModeAnswers:!1,compareQuestionIndex:1,slideIndexHistory:0,slideIndexEditor:1,valueQuestion:"",valuePriority:""}},watch:{isModeCompare:function(){this.compareQuestionIndex=1},slideIndexHistory:function(e){this.$emit("setSlideIndexHistory",e)}},computed:Object(r["a"])(Object(r["a"])({},Object(ge["c"])(["savedHistory","questions","priorities"])),{},{gridTemplateRows:function(){var e=Math.min(.15*this.appHeight,85),t=this.appHeight-e;return"".concat(e,"px ").concat(t,"px")}}),methods:Object(r["a"])(Object(r["a"])({},Object(ge["b"])(["addToCompareHistory","removeFromHistory","addQuestion","removeQuestion","addPriority","removePriority"])),{},{removeFromHistoryHandler:function(){this.removeFromHistory(this.slideIndexHistory),this.$refs.layoutHistory.deleteSlide(this.slideIndexHistory)},finishComparison:function(e){this.addToCompareHistory(e),this.isModeEditor=!1,this.isModeCompare=!1},keydown:function(e){var t=e.key;e.shiftKey;switch(t){case"Escape":this.$emit("switchSettings");break}}}),beforeMount:function(){document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},xe=ve,we=(i("e133"),Object(w["a"])(xe,u,p,!1,null,null,null)),Se=we.exports,_e={components:{LayoutContent:Se,AppModal:l["b"],SettingsDesktop:l["e"],SettingsMobile:l["f"],AppLoader:l["a"]},mixins:[c["b"],c["d"],c["a"],c["e"]],data:function(){return{lodash:d.a,isClosedSettings:!0,openedModalName:null,slideIndexHistory:0}},watch:{isDesktop:function(e){e&&"settings"==this.openedModalName&&(this.openedModalName=null,this.isClosedSettings=!1)}},computed:Object(r["a"])({},Object(ge["c"])(["switchFullscreenKey","savedHistory"])),methods:{getFormatDate:function(e){if(!e)return this.translate("error");var t=new Date(e),i=t.getDate().toString().padStart(2,0),s=(t.getMonth()+1).toString().padStart(2,0),n=t.getFullYear(),o=t.getHours().toString().padStart(2,0),r=t.getMinutes().toString().padStart(2,0);return"".concat(i,".").concat(s,".").concat(n," | ").concat(o,":").concat(r)},removeFromHistoryHandler:function(){this.$refs.layoutContent.removeFromHistoryHandler(this.slideIndexHistory),this.openedModalName=null}},beforeMount:function(){var e=this;document.body.addEventListener("click",(function(t){document.body===d.a.get(t.path,0)&&e.isDesktop&&(e.isClosedSettings||(e.isClosedSettings=!0))}))}},He=_e,be=(i("5c0b"),Object(w["a"])(He,n,o,!1,null,null,null)),Ie=be.exports,Ce=i("9483");Object(Ce["a"])("".concat("/minis-comparison/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Me,ke=i("2909"),Pe=i("ade3"),$e=(i("a15b"),i("fb6a"),i("ac1f"),i("1276"),i("caad"),i("2532"),i("0e44")),Ee=i("0759"),Re=i.n(Ee),De=location.pathname.split("/")[1].split("-").slice(1).join("-"),qe="switchFullscreen_".concat(De),Ae={};s["default"].use(ge["a"]),Ae.state=function(){return{isFullscreen:!1,switchFullscreenKey:qe,projectKey:De,savedHistory:[],questions:[],priorities:[]}},Ae.mutations=(Me={},Object(Pe["a"])(Me,qe,(function(e){return s["default"].set(e,"isFullscreen",!e.isFullscreen)})),Object(Pe["a"])(Me,"addToCompareHistory",(function(e,t){var i=e.savedHistory;return i.unshift(t)})),Object(Pe["a"])(Me,"removeFromHistory",(function(e,t){var i=e.savedHistory;return i.splice(t,1)})),Object(Pe["a"])(Me,"addQuestion",(function(e,t){var i=e.questions;return!i.includes(t)&&i.push(t)})),Object(Pe["a"])(Me,"removeQuestion",(function(e,t){var i=e.questions;return i.splice(t,1)})),Object(Pe["a"])(Me,"addPriority",(function(e,t){var i=e.priorities;return!i.includes(t)&&i.push(t)})),Object(Pe["a"])(Me,"removePriority",(function(e,t){var i=e.priorities;return i.splice(t,1)})),Me);var ze=["savedHistory","questions","priorities"];Ae.modules={minis:c["f"]},Ae.plugins=[Re()({predicate:function(){return[].concat(Object(ke["a"])(c["c"]),ze)}}),Object($e["a"])({paths:c["c"],key:"minis"}),Object($e["a"])({paths:ze.concat("isFullscreen"),key:"minis-".concat(De)})];var We=new ge["a"].Store(Ae);s["default"].config.productionTip=!1,new s["default"]({store:We,render:function(e){return e(Ie)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";i("9c0c")},"5d89":function(e,t,i){"use strict";i("719d")},"719d":function(e,t,i){},"7e69":function(e,t,i){},"8b87":function(e,t,i){},"90ff":function(e,t,i){"use strict";i("e81e")},"92c1":function(e,t,i){},"9c0c":function(e,t,i){},c2f1:function(e,t,i){"use strict";i("c659")},c659:function(e,t,i){},d022:function(e,t,i){},e133:function(e,t,i){"use strict";i("eed6")},e2d9:function(e,t,i){"use strict";i("d022")},e81e:function(e,t,i){},eed6:function(e,t,i){},f1c3:function(e,t,i){"use strict";i("7e69")}});
//# sourceMappingURL=app.8221343f.js.map