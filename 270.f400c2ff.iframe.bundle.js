(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{"../components/dist/esm/scale-telekom-nav-list.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_telekom_nav_list",(function(){return TelekomNavList}));__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TelekomNavList=function(){function TelekomNavList(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TelekomNavList),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__.i)(this,hostRef),this.alignment="left",this.variant="main-nav"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TelekomNavList,[{key:"handleScaleExpanded",value:function handleScaleExpanded(event){event.detail.expanded&&this.closeExpandedFlyoutSiblings(event.target)}},{key:"closeExpandedFlyoutSiblings",value:function closeExpandedFlyoutSiblings(target){_toConsumableArray(this.hostElement.children).filter((function(x){return!x.contains(target)})).forEach((function(item){var flyout=item.querySelector("scale-telekom-nav-flyout");(function isDirectChild(parent,child){return _toConsumableArray(parent.children).includes(child)})(item,flyout)&&flyout.expanded&&(flyout.expanded=!1)}))}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__.c,{class:"scale-telekom-nav-list"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__.g)("slot",null))}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_17__.f)(this)}}]),TelekomNavList}();TelekomNavList.style=".scale-telekom-nav-list{--width:100%;--height:100%;--spacing-x-start:0;--flex-direction:row;--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav, 24px);--_spacing-x-slotted-meta-nav-external:var(--telekom-spacing-unit-x4);--_spacing-x-slotted-meta-nav:var(--telekom-spacing-unit-x8);--_spacing-x-slotted-lang-switcher:var(--telekom-spacing-unit-x4);--_spacing-x-slotted-main-nav:var(--telekom-spacing-unit-x8);--_spacing-x-slotted-functions:var(--telekom-spacing-unit-x6);display:flex;align-items:stretch;flex-direction:var(--flex-direction);width:var(--width);height:var(--height);margin-inline-start:var(--spacing-x-start)}.scale-telekom-nav-list[debug]{border:1px dotted gold}@media screen and (min-width: 1296px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-unit-x12);--_spacing-x-slotted-meta-nav:var(--telekom-spacing-unit-x5);--_spacing-x-slotted-meta-nav-external:var(--telekom-spacing-unit-x5)}.scale-telekom-nav-list[debug]{border:1px dotted cyan}}@media screen and (min-width: 1680px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-unit-x14)}.scale-telekom-nav-list[debug]{border:1px dotted magenta}}.scale-telekom-nav-list[variant='meta-nav-external']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav-external)}.scale-telekom-nav-list[variant='meta-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav)}.scale-telekom-nav-list[variant='lang-switcher']{--_spacing-x-slotted:var(--_spacing-x-slotted-lang-switcher)}.scale-telekom-nav-list[variant='main-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav)}.scale-telekom-nav-list[variant='functions']{--_spacing-x-slotted:var(--_spacing-x-slotted-functions)}.scale-telekom-nav-list[alignment='left']{justify-content:flex-start}.scale-telekom-nav-list[alignment='right']{justify-content:flex-end}.scale-telekom-nav-list[alignment='center']{justify-content:center}.scale-telekom-nav-list[alignment='left']>*:not(:last-child){margin-inline-end:var(--_spacing-x-slotted)}.scale-telekom-nav-list[alignment='right']>*:not(:first-child){margin-inline-start:var(--_spacing-x-slotted)}.scale-telekom-nav-list[alignment='center']>*{margin-inline:calc(0.5 * var(--_spacing-x-slotted))}"}}]);