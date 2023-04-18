/*! For license information please see 17.9579ac86.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-notification-toast.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_notification_toast",(function(){return NotificationToast}));__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js"),_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../components/dist/esm/utils-3cf81b34.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var NotificationToast=function(){function NotificationToast(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,NotificationToast),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.i)(this,hostRef),this.scaleClosing=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.e)(this,"scale-closing",7),this.scaleClose=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.e)(this,"scale-close",7),this.variant="informational",this.animated=!0,this.alignment="top-right",this.positionVertical=12,this.positionHorizontal=12,this.autoHide=!1,this.autoHideDuration=3e3,this.fadeDuration=500,this.closeButtonLabel="close",this.closeButtonTitle="close",this.toastHeightWithOffset=0,this.hideToast=!1,this.close=function(){Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__.c)(_this,"scaleClosing"),_this.hideToast=!0,setTimeout((function(){_this.opened=!1,Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__.c)(_this,"scaleClose")}),_this.fadeDuration)},this.transitions=function(offset){return"\n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n          "+_this.alignmentVertical+": -"+offset+"px;\n        }\n        to {\n          opacity: 1;\n          "+_this.alignmentVertical+": "+_this.positionVertical+"px;\n        }\n      }\n  \n      @keyframes fadeOut {\n        from {\n          opacity: 1;\n          "+_this.alignmentVertical+": "+_this.positionVertical+"px;\n        }\n        to {\n          opacity: 0;\n          "+_this.alignmentVertical+": -"+offset+"px;\n        }\n      }\n    "},this.animationStyle=function(offset){return _this.animated?"\n        .notification-toast--show {\n          "+_this.alignmentHorizontal+": "+_this.positionHorizontal+"px;\n          animation: fadeIn "+_this.fadeDuration/1e3+"s ease-in-out;\n          "+_this.alignmentVertical+": "+_this.positionVertical+"px;\n          opacity: 1;\n        },\n        .notification-toast--show {\n          "+_this.alignmentHorizontal+": "+_this.positionHorizontal+"px;\n          animation: fadeOut "+_this.fadeDuration/1e3+"s ease-in-out;\n          "+_this.alignmentVertical+": -"+offset+"px;\n          opacity: 0;\n        }\n      ":"\n    .notification-toast--show {\n      "+_this.alignmentHorizontal+": "+_this.positionHorizontal+"px;\n      "+_this.alignmentVertical+": "+_this.positionVertical+"px;\n      opacity: 1;\n    },\n    .notification-toast--show {\n      "+_this.alignmentHorizontal+": "+_this.positionHorizontal+"px;\n      "+_this.alignmentVertical+": -"+offset+"px;\n      opacity: 0;\n    }\n  "}}var _open;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(NotificationToast,[{key:"connectedCallback",value:function connectedCallback(){Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_8__.a)({source:this.element,type:"warn"})}},{key:"componentWillLoad",value:function componentWillLoad(){var alignmentParts=this.alignment.split("-");this.alignmentVertical=alignmentParts[0],this.alignmentHorizontal=alignmentParts[1]}},{key:"componentDidRender",value:function componentDidRender(){!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}},{key:"handleIcons",value:function handleIcons(){if(this.variant)switch(this.variant){case"success":return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-icon-alert-success",{class:"notification-toast__icon",size:20,color:"#ffffff",selected:!0,"aria-hidden":"true"});case"informational":return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-icon-alert-information",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"error":return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-icon-alert-error",{class:"notification-toast__icon",size:20,selected:!0,color:"#ffffff","aria-hidden":"true"});case"warning":return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-icon-alert-warning",{class:"notification-toast__icon",color:"#ffff",size:20,selected:!0,"aria-hidden":"true"})}}},{key:"open",value:(_open=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.opened=!0,this.hideToast=!1;case 2:case"end":return _context.stop()}}),_callee,this)}))),function open(){return _open.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this;if(this.opened)return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.c,null,this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("style",null,this.transitions(this.toastHeightWithOffset)),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("style",null,this.animationStyle(this.toastHeightWithOffset)),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("div",{role:"alert",style:{display:this.opened?"":"none"},class:this.getCssClassMap(),part:this.getBasePartMap(),tabindex:"0"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("div",{class:"notification-toast__icon-container"},this.handleIcons()),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("div",{class:"notification-toast__text-container"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("slot",{name:"header"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("slot",{name:"body"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-link",{href:this.href,class:"notification-toast__link",role:"link"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("slot",{name:"link"}))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("button",{part:"button-dismissable",type:"button",class:"notification-toast__button-close",onClick:function onClick(){return _this2.close()},tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:function onKeyDown(e){"Enter"===e.key&&_this2.close()}},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.g)("scale-icon-action-circle-close",null))))}},{key:"getToastHeightWithOffset",value:function getToastHeightWithOffset(){var toastHeight=this.element.shadowRoot.querySelector(".toast").scrollHeight;this.toastHeightWithOffset=toastHeight+this.positionVertical}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"notification-toast";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)("basePart"===mode?"base":"notification-toast",this.variant&&prefix+"--variant-"+this.variant,!!this.opened&&prefix+"--opened",!this.hideToast&&prefix+"--show",!!this.hideToast&&prefix+"--hide",this.story&&prefix+"--story")}},{key:"element",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_6__.f)(this)}}]),NotificationToast}();NotificationToast.style=":host{--width:366px;--width-icon-container:48px;--radius:var(--telekom-radius-standard);--background:var(--telekom-color-background-surface);--z-index:1;--box-shadow:var(--telekom-shadow-raised-standard);--background-success-icon-container:var(\n    --telekom-color-functional-success-standard\n  );--background-warning-icon-container:var(\n    --telekom-color-functional-warning-standard\n  );--background-error-icon-container:var(\n    --telekom-color-functional-danger-standard\n  );--background-informational-icon-container:var(\n    --telekom-color-functional-informational-standard\n  );--background-success-text-container:var(\n    --telekom-color-functional-success-subtle\n  );--background-warning-text-container:var(\n    --telekom-color-functional-warning-subtle\n  );--background-error-text-container:var(\n    --telekom-color-functional-danger-subtle\n  );--background-informational-text-container:var(\n    --telekom-color-functional-informational-subtle\n  )}.notification-toast{width:calc(var(--width) - var(--width-icon-container));opacity:1;z-index:var(--z-index);position:fixed;background:var(--background);box-shadow:var(--box-shadow);box-sizing:border-box;border-radius:0 var(--radius) var(--radius) 0;flex-direction:column;justify-content:space-between}.notification-toast.notification-toast--story{position:absolute}.notification-toast.notification-toast--story.notification-toast--hide{opacity:0}.notification-toast.notification-toast--story.notification-toast--opened{opacity:1}.notification-toast.notification-toast--variant-success{background:var(--background-success-text-container)}.notification-toast.notification-toast--variant-warning{background:var(--background-warning-text-container)}.notification-toast.notification-toast--variant-error{background:var(--background-error-text-container)}.notification-toast.notification-toast--variant-informational{background:var(--background-informational-text-container)}.notification-toast__icon{position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px}.notification-toast__icon-container{height:100%;width:var(--width-icon-container);position:absolute;left:calc(var(--width-icon-container) * -1 + 1px);top:0;float:left;border-radius:var(--radius) 0 0 var(--radius)}.notification-toast.notification-toast--variant-success .notification-toast__icon-container{background:var(--background-success-icon-container)}.notification-toast.notification-toast--variant-warning .notification-toast__icon-container{background:var(--background-warning-icon-container)}.notification-toast.notification-toast--variant-error .notification-toast__icon-container{background:var(--background-error-icon-container)}.notification-toast.notification-toast--variant-informational .notification-toast__icon-container{background:var(--background-informational-icon-container)}::slotted([slot='header']){margin:0;padding:3px 0 0 10px;font-weight:bold;font-size:16px}::slotted([slot='body']){padding:3px 0 0 10px;margin:0}::slotted([slot='link']){padding:10px 0 15px 10px;margin:0}.notification-toast__text-container{width:calc(var(--width) - calc(var(--width-icon-container) * 1));min-height:33px;float:left;position:relative;margin:0 0 0 1px;padding:15px 0 0 0}.notification-toast__button-close{position:absolute;top:10px;right:7.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-toast__button-close svg{height:19px;width:19px;padding:7.5px 6.5px 6.5px 6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-toast__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-toast__button-close svg{color:hsl(0, 0%, 100%)}.notification-toast{border:1px solid hsl(0, 0%, 100%)}.notification-toast__icon-container{border:1px solid hsl(0, 0%, 100%);margin-top:-1px}}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-3cf81b34.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}}}]);
//# sourceMappingURL=17.9579ac86.iframe.bundle.js.map