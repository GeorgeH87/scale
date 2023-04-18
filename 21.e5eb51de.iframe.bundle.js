/*! For license information please see 21.e5eb51de.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-tab-header.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_tab_header",(function(){return TabHeader}));__webpack_require__("../../node_modules/core-js/modules/es.string.small.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../components/dist/esm/utils-3cf81b34.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var i=0,TabHeader=function(){function TabHeader(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabHeader),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.i)(this,hostRef),this.scaleSelect=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"scale-select",7),this.generatedId=i++,this.disabled=!1,this.small=!1,this.size="small",this.hasFocus=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TabHeader,[{key:"handleClick",value:function handleClick(event){event.stopPropagation(),this.disabled||this.scaleSelect.emit()}},{key:"selectedChanged",value:function selectedChanged(newValue){this.hostElement.isConnected&&(this.disabled||(!0===newValue&&this.tabsHaveFocus()&&this.hostElement.focus(),this.updateSlottedIcon()))}},{key:"componentDidLoad",value:function componentDidLoad(){this.setChildrenIconSize()}},{key:"componentDidRender",value:function componentDidRender(){!1!==this.small&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_10__.a)({tag:"deprecated",message:'Property "small" is deprecated. Please use css overwrites.',type:"warn",source:this.hostElement})}},{key:"tabsHaveFocus",value:function tabsHaveFocus(){var tabs=this.hostElement.closest(".scale-tab-nav");return!!tabs&&tabs.contains(document.activeElement)}},{key:"updateSlottedIcon",value:function updateSlottedIcon(){var icons=Array.from(this.hostElement.childNodes).filter(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__.f),action=this.selected?"setAttribute":"removeAttribute";icons.forEach((function(child){return child[action]("selected","")}))}},{key:"setChildrenIconSize",value:function setChildrenIconSize(){Array.from(this.hostElement.childNodes).filter(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_9__.f).forEach((function(icon){16!==icon.size&&(icon.size=16)}))}},{key:"render",value:function render(){var _this=this;return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.c,{id:"scale-tab-header-"+this.generatedId,role:!this.disabled&&"tab","aria-selected":this.selected?"true":"false",tabindex:!this.disabled&&(this.selected?"0":"-1"),onFocus:function onFocus(){return _this.hasFocus=!0},onBlur:function onBlur(){return _this.hasFocus=!1}},this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("span",{part:this.getBasePartMap(),class:this.getCssClassMap()},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("slot",null)))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"tab-header--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_8__.a)("tab-header",this.selected&&prefix+"selected","large"===this.size&&prefix+"large",this.hasFocus&&prefix+"has-focus",this.disabled&&prefix+"disabled")}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.f)(this)}}],[{key:"watchers",get:function get(){return{selected:["selectedChanged"]}}}]),TabHeader}();TabHeader.style=":host{outline:none;--font-size:var(--telekom-typography-font-size-body);--font-family:var(--telekom-typography-font-family-sans, TeleNeoWeb);--font-weight:var(--telekom-typography-font-weight-bold);--height:3rem;--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-right-slotted:var(--telekom-spacing-unit-x2);--color-disabled:var(--telekom-color-text-and-icon-disabled);--radius:var(--telekom-radius-standard);--font-size-large:var(--telekom-typography-font-size-callout)}.tab-header{color:var(--color);cursor:pointer;display:inline-flex;outline:none;position:relative;box-sizing:border-box;align-items:center;height:var(--tab-height);padding-right:var(--tab-spacing-horizontal);padding-left:var(--tab-spacing-horizontal);padding-top:var(--tab-spacing-vertical);padding-bottom:var(--tab-spacing-vertical);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);border-radius:var(--tab-radius)}.tab-header{--tab-height:var(--height)}.tab-header--disabled{cursor:auto;color:var(--color-disabled)}.tab-header--disabled:after{cursor:auto;background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header--disabled:active{color:var(--color-disabled)}.tab-header--disabled:hover{color:var(--color-disabled) !important}.tab-header--disabled:hover:after{background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header:after{left:0;right:0;width:100%;bottom:0;content:'';display:block;position:absolute;height:var(--tab-border-size);background-color:var(--tab-border-color)}.tab-header:before{left:0;right:0;width:100%;bottom:0;height:0;content:'';display:block;position:absolute;border-top:1px solid transparent}.tab-header:hover{color:var(--color-hover)}.tab-header:hover:after{background-color:var(--color-hover)}.tab-header:active{color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header ::slotted(*){margin-right:var(--spacing-right-slotted)}.tab-header--has-focus{border-radius:var(--tab-radius);outline:var(--focus-outline);z-index:1}.tab-header--has-focus.tab-header--selected:after{border-radius:0 0 3px 3px;width:98%;margin-left:1%}.tab-header--selected{color:var(--color-selected)}.tab-header--selected:after{height:var(--tab-border-size-selected);background-color:var(--color-selected)}.tab-header--selected:before{border-top:var(--tab-border-size-selected) solid transparent}.tab-header--large{padding-right:var(--tab-spacing-horizontal-large);padding-left:var(--tab-spacing-horizontal-large);padding-top:var(--tab-spacing-vertical-large);padding-bottom:var(--tab-spacing-vertical-large);font-size:var(--font-size-large)}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-3cf81b34.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}}}]);
//# sourceMappingURL=21.e5eb51de.iframe.bundle.js.map