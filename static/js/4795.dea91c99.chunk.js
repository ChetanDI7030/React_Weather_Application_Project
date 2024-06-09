/*! For license information please see 4795.dea91c99.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[4795],{24795:(e,t,n)=>{n.r(t),n.d(t,{CalciteListItemGroup:()=>s,defineCustomElement:()=>u});var o=n(82108),a=n(65079),i=n(9468);const c="container",r="heading",d=(0,o.w$)(class extends o.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=(0,o.lh)(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){(0,a.c)(this)}componentDidRender(){(0,a.u)(this)}disconnectedCallback(){(0,a.d)(this)}render(){const{disabled:e,heading:t}=this;return(0,o.h)(o.xr,{key:"72b362e6538638b434eaac9f4295059ab7407d2c"},(0,o.h)(a.I,{key:"b6a3ad744cfdce9fd2e87b4e66e1ae570998231c",disabled:e},(0,o.h)("tr",{key:"3abe960e3c55dc41c0ee098feb658127795a7204",class:c},(0,o.h)("td",{key:"02a7a0797bee8da0ba6f45d8fd45b2285c7710ac",class:r,colSpan:i.M},t)),(0,o.h)("slot",{key:"ed7a1afcaadd1b9071900f5ab6b032aca3a1deb7",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function l(){if("undefined"===typeof customElements)return;["calcite-list-item-group"].forEach((e=>{if("calcite-list-item-group"===e)customElements.get(e)||customElements.define(e,d)}))}l();const s=d,u=l},65079:(e,t,n)=>{n.d(t,{I:()=>C,c:()=>g,d:()=>m,u:()=>u});var o=n(82108);const a=/firefox/i.test(function(){if(!o.L2.isBrowser)return"";const e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((e=>{let{brand:t,version:n}=e;return"".concat(t,"/").concat(n)})).join(" "):navigator.userAgent}()),i=a?new WeakMap:null;function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(a&&!i.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const d=["mousedown","mouseup","click"];function l(e){const t=e.target;a&&!i.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void h(e);p(e),e.el.removeAttribute("aria-disabled")}function h(e){if(e.el.click=c,a){const t=function(e){return e.el.parentElement||e.el}(e),n=i.get(e.el);return n!==t&&(b(n),i.set(e.el,t)),void f(i.get(e.el))}f(e.el)}function f(e){e&&(e.addEventListener("pointerdown",r,s),d.forEach((t=>e.addEventListener(t,l,s))))}function p(e){if(delete e.el.click,a)return b(i.get(e.el)),void i.delete(e.el);b(e.el)}function b(e){e&&(e.removeEventListener("pointerdown",r,s),d.forEach((t=>e.removeEventListener(t,l,s))))}function g(e){e.disabled&&a&&h(e)}function m(e){a&&p(e)}const v={container:"interaction-container"};function C(e,t){let{disabled:n}=e;return(0,o.h)("div",{class:v.container,inert:n},...t)}},9468:(e,t,n)=>{n.d(t,{C:()=>o,I:()=>c,M:()=>i,S:()=>a,a:()=>r});const o={wrapper:"wrapper",wrapperBordered:"wrapper--bordered",container:"container",indent:"indent",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container"},a={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},i=0,c={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},r="data-test-active"}}]);
//# sourceMappingURL=4795.dea91c99.chunk.js.map