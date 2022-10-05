/*! For license information please see 35.f30d3f57.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"../components/dist/esm/scale-checkbox_2.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_checkbox",(function(){return Checkbox})),__webpack_require__.d(__webpack_exports__,"scale_icon_action_indeterminate",(function(){return ActionIndeterminate}));__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../components/dist/esm/utils-004d7b05.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var i=0,Checkbox=function(){function Checkbox(hostRef){var _this=this;_classCallCheck(this,Checkbox),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.h)(this,hostRef),this.scaleChange=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this,"scale-change",7),this.scaleChangeLegacy=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this,"scaleChange",7),this.label="",this.hideLabel=!1,this.status="",this.invalid=!1,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.value="",this.internalId=i++,this.handleChange=function(ev){_this.indeterminate?(_this.indeterminate=!1,_this.checked=!0,ev.target.checked=!0):_this.checked=ev.target.checked;var checked=_this.checked,indeterminate=_this.indeterminate,value=_this.value,disabled=_this.disabled;Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_5__.c)(_this,"scaleChange",{checked:checked,indeterminate:indeterminate,value:value,disabled:disabled})}}return _createClass(Checkbox,[{key:"componentDidRender",value:function componentDidRender(){""!==this.status&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_6__.a)({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host}),this.host.hasAttribute("aria-label")&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_6__.a)({tag:"deprecated",message:'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',type:"warn",source:this.host})}},{key:"connectedCallback",value:function connectedCallback(){this.inputId||(this.inputId="input-checkbox-"+this.internalId)}},{key:"renderIcon",value:function renderIcon(){return this.indeterminate?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("scale-icon-action-indeterminate",{part:"icon",decorative:!0}):this.checked?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("scale-icon-action-success",{part:"icon",decorative:!0}):void 0}},{key:"renderHelperText",value:function renderHelperText(text){if(this.helperText&&""!==this.helperText)return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{part:"helper-text",id:text.id,"aria-live":"polite","aria-relevant":"additions removals"},text.content)}},{key:"render",value:function render(){var helperText={id:this.helperText?"helper-text-"+this.internalId:null,content:this.helperText};return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.b,{class:{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,error:"error"===this.status||this.invalid,hideLabel:this.hideLabel}},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("input",{type:"checkbox",part:"input",name:this.name||null,id:this.inputId,value:this.value,checked:this.checked,indeterminate:this.indeterminate,"aria-label":this.ariaLabelCheckbox,"aria-checked":!!this.indeterminate&&"mixed","aria-invalid":"error"===this.status||this.invalid,"aria-describedBy":helperText.id,disabled:this.disabled,onChange:this.handleChange}),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("label",{part:"container",htmlFor:this.inputId},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{part:"checkbox"},this.renderIcon()),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{part:"label"},this.label||Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("slot",null))),this.renderHelperText(helperText))}},{key:"host",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.e)(this)}}]),Checkbox}();Checkbox.style=":host,scale-checkbox{--spacing-x:var(--telekom-spacing-unit-x2);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-unit-x4);--height-control:var(--telekom-spacing-unit-x4);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-unit-x05);--spacing-left-control:var(--telekom-spacing-unit-x1);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-spacing-unit-x025);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-unit-x3);--height-icon:var(--telekom-spacing-unit-x3);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;padding:0 2px 0 2px;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{display:flex;flex:0 0 auto;justify-content:center;align-items:center;margin:var(--spacing-control) 0;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-x) + var(--border-width-control) * 2\n  )}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-ui-state-fill-standard);border-color:var(--telekom-color-ui-border-standard);color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:0 0 0 var(--telekom-spacing-unit-x05) var(--color-focus)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{border:2px solid var(--color-error)}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:0 0 0 var(--telekom-spacing-unit-x05) var(--color-focus);border:2px solid var(--telekom-color-functional-danger-hovered)}scale-checkbox.error:hover [part='checkbox']{background-color:var(--telekom-color-ui-state-fill-hovered);border:2px solid var(--telekom-color-functional-danger-hovered)}scale-checkbox.error:active [part='checkbox']{background-color:var(--telekom-color-ui-state-fill-pressed);border:2px solid var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border:2px solid var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{border:2px solid var(--telekom-color-functional-danger-hovered)}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}";var ActionIndeterminate=function(){function ActionIndeterminate(hostRef){_classCallCheck(this,ActionIndeterminate),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.h)(this,hostRef),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}return _createClass(ActionIndeterminate,[{key:"connectedCallback",value:function connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}},{key:"render",value:function render(){var ariaHidden=this.decorative?{"aria-hidden":"true"}:{};return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.b,null,Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},ariaHidden),this.accessibilityTitle&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("title",null,this.accessibilityTitle),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("g",{fill:"currentColor"===this.fill?this.color:this.fill},(this.selected,Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("g",null,Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("rect",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"2",rx:"0.75","fill-rule":"evenodd",x:"4",y:"11.25"}))))))}},{key:"hostElement",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.e)(this)}}]),ActionIndeterminate}();ActionIndeterminate.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-004d7b05.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)}}}]);
//# sourceMappingURL=35.f30d3f57.iframe.bundle.js.map