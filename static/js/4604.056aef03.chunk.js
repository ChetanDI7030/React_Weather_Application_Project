"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[4604,2945],{4604:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var r=i(35143),s=i(73763),a=i(27741),l=i(76460),n=i(77717),o=i(50346),c=i(68134),d=i(46053),u=(i(81806),i(47249),i(39314)),p=i(28379),h=i(85842),y=i(17707),f=i(49140),v=i(25515),m=i(65624),g=i(11270),b=i(94729),w=i(5682),S=i(62487),_=i(70652),I=i(10425),M=i(71671),P=i(45730);const E=Symbol("WebScene");var A=i(61701),L=i(24907),O=i(8837);let x=class extends((0,m.d)((0,w.j)((0,g.q)((0,b.A)((0,P.l)((0,M.Q)((0,n.P)(v.A)))))))){constructor(e){super(e),this.allLayers=new s.A({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,I.Z)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,o.sg)((async(e,t,r)=>{const{save:s,saveAs:a}=await i.e(8984).then(i.bind(i,98984));switch(e){case A.X.SAVE:return s(this,t);case A.X.SAVE_AS:return a(this,r,t)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,c.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&E in e}),(e=>{const t="prevent-adding-tables";this.removeHandles(t),e&&(this.tables.removeAll(),this.addHandles((0,c.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),l.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),t))}),c.pc),(0,c.wB)((()=>this.visible),this._onVisibilityChange.bind(this),c.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===f.Gr.USER}_writeLayers(e,t,i,r){const s=[];if(!e)return s;e.forEach((e=>{const t=(0,O.CJ)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);(null===t||void 0===t?void 0:t.layerType)&&s.push(t)})),t.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,t,i){const{itemId:r,layerType:s}=t;if("GroupLayer"===s&&r)return new _.default({id:r,portal:null===i||void 0===i?void 0:i.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}async beforeSave(){return(0,L.d)(this)}load(e){const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:S.S},e).catch((e=>{if((0,o.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(t),Promise.resolve(this)}async loadAll(){return(0,a.g)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(A.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(A.X.SAVE_AS,t,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error("Layer read to Grouplayer: uid=".concat(e.uid)):this.addHandles((0,c.wB)((()=>e.visible),(t=>this._onChildVisibilityChange(e,t)),c.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((t=>{t!==e&&(t.visible=!1)}))}_enforceVisibility(e,t){if(!(0,u.oY)(this).initialized)return;const i=this.layers;let r=i.find((e=>e.visible));switch(e){case"exclusive":i.length&&!r&&(r=i.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":i.forEach((e=>{e.visible=t}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((t=>{t.visible=e}))}_onChildVisibilityChange(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,r._)([(0,d.MZ)({readOnly:!0,dependsOn:[]})],x.prototype,"allLayers",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],x.prototype,"allTables",void 0),(0,r._)([(0,d.MZ)({json:{read:!0,write:!0}})],x.prototype,"blendMode",void 0),(0,r._)([(0,d.MZ)()],x.prototype,"fullExtent",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],x.prototype,"sourceIsPortalItem",null),(0,r._)([(0,d.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],x.prototype,"layers",void 0),(0,r._)([(0,y.K)("layers")],x.prototype,"_writeLayers",null),(0,r._)([(0,d.MZ)({type:["GroupLayer"]})],x.prototype,"operationalLayerType",void 0),(0,r._)([(0,d.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,t,i){return{enabled:"Group Layer"===(null===e||void 0===e?void 0:e.type)&&(null===i||void 0===i?void 0:i.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],x.prototype,"portalItem",null),(0,r._)([(0,p.w)("web-map","portalItem",["itemId"])],x.prototype,"readPortalItem",null),(0,r._)([(0,y.K)("web-map","portalItem",{itemId:{type:String}})],x.prototype,"writePortalItem",null),(0,r._)([(0,d.MZ)()],x.prototype,"spatialReference",void 0),(0,r._)([(0,d.MZ)({json:{read:!1},readOnly:!0,value:"group"})],x.prototype,"type",void 0),(0,r._)([(0,d.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,t,i)=>{"inherited"!==e&&(t[i]=e)}}}}})],x.prototype,"visibilityMode",null),x=(0,r._)([(0,h.$)("esri.layers.GroupLayer")],x);const R=x},44081:(e,t,i)=>{i.d(t,{LF:()=>n,M9:()=>o,zu:()=>c});var r=i(50076),s=i(48611),a=i(7847),l=i(58503);function n(e,t,i){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const i of e)t.push({scale:i.scale,value:c(i.value)});return t}return c(e)}(e)}catch(s){var r;null===i||void 0===i||null===(r=i.messages)||void 0===r||r.push(s)}return null}function o(e,t,i,r){try{const r=function(e){const t=(0,a.q)(e);return t?(0,l.dw)(t)?t.map((e=>e.toJSON())):t.map((e=>{let{scale:t,effects:i}=e;return{scale:t,value:i.map((e=>e.toJSON()))}})):null}(e);(0,s.sM)(i,r,t)}catch(o){r.messages&&r.messages.push(o)}}function c(e){if(null===e||void 0===e||!e.length)return"";const t=[];for(const i of e){let e=[];switch(i.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[d(i,"amount")];break;case"blur":e=[d(i,"radius","pt")];break;case"hue-rotate":e=[d(i,"angle","deg")];break;case"drop-shadow":e=[d(i,"xoffset","pt"),d(i,"yoffset","pt"),d(i,"blurRadius","pt"),u(i,"color")];break;case"bloom":e=[d(i,"strength"),d(i,"radius","pt"),d(i,"threshold")]}const r="".concat(i.type,"(").concat(e.filter(Boolean).join(" "),")");(0,a.q)(r),t.push(r)}return t.join(" ")}function d(e,t,i){if(null==e[t])throw new r.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});return i?e[t]+i:""+e[t]}function u(e,t){if(null==e[t])throw new r.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});const i=e[t];return"rgba(".concat(i[0]||0,", ").concat(i[1]||0,", ").concat(i[2]||0,", ").concat(i[3]/255||0,")")}},65624:(e,t,i)=>{i.d(t,{d:()=>o});var r=i(35143),s=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),l=i(44081);const n={read:{reader:l.LF},write:{allowNull:!0,writer:l.M9}},o=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,r._)([(0,s.MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,r._)([(0,s.MZ)({json:{read:!1,write:!1,origins:{"web-map":n,"portal-item":n}}})],t.prototype,"effect",void 0),t=(0,r._)([(0,a.$)("esri.layers.mixins.BlendLayer")],t),t}},94729:(e,t,i)=>{i.d(t,{A:()=>_});var r=i(35143),s=i(86560),a=i(55171),l=i(3825),n=i(98773),o=i(50076),c=i(76460),d=i(30726),u=i(50346),p=i(90534),h=i(46053),y=(i(81806),i(47249),i(28379)),f=i(85842),v=i(17707),m=i(31933),g=i(65308),b=i(70652),w=i(38665),S=i(72945);const _=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,d.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new b.default({id:t.itemId,portal:null===i||void 0===i?void 0:i.portal})}writePortalItem(e,t){(null===e||void 0===e?void 0:e.id)&&(t.itemId=e.id)}async loadFromPortal(e,t){var r;if(null!==(r=this.portalItem)&&void 0!==r&&r.id)try{const{load:r}=await Promise.all([i.e(2487),i.e(3814)]).then(i.bind(i,73814));return(0,u.Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(s){throw(0,u.zf)(s)||c.A.getLogger(this).warn("Failed to load layer (".concat(this.title,", ").concat(this.id,") portal item (").concat(this.portalItem.id,")\n  ").concat(s)),s}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",s)}catch(i){(0,u.QP)(i)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=e===i.id;if(r&&i.portal.user)return(0,S.It)(i);let s,l;if(r)s=i.portal.url;else try{s=await(0,m.wI)(this.url,t)}catch(d){(0,u.QP)(d)}if(!s||!(0,p.b8)(s,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;l=await(null===a.id||void 0===a.id?void 0:a.id.getCredential("".concat(s,"/sharing"),{prompt:!1,signal:e}))}catch(d){(0,u.QP)(d)}const n=!0,o=!1,c=!1;if(!l)return{features:{edit:n,fullEdit:o},content:{updateItem:c}};try{if(r?await i.reload():(i=new b.default({id:e,portal:{url:s}}),await i.load(t)),i.portal.user)return(0,S.It)(i)}catch(d){(0,u.QP)(d)}return{features:{edit:n,fullEdit:o},content:{updateItem:c}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(i){(0,u.QP)(i)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?null===a.id||void 0===a.id?void 0:a.id.findCredential(this.url):null;if(!t)return!0;const i=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=i,null==(null===i||void 0===i?void 0:i.privileges)||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){var t,i;const r=null===(t=this.portalItem)||void 0===t||null===(t=t.portal)||void 0===t?void 0:t.user;if(r)return r;const s=a.id.findServerInfo(null!==(i=this.url)&&void 0!==i?i:"");if(null===s||void 0===s||!s.owningSystemUrl)return null;const o="".concat(s.owningSystemUrl,"/sharing/rest"),c=g.A.getDefault();if(c&&c.loaded&&(0,p.S8)(c.restUrl)===(0,p.S8)(o))return c.user;const d="".concat(o,"/community/self"),u=null!=e?e.signal:null,h=await(0,n.Ke)((0,l.A)(d,{authMode:"no-prompt",query:{f:"json"},signal:u}));return h.ok?w.A.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){var i;const r=null===t||void 0===t?void 0:t.portal,s=(null===(i=this.portalItem)||void 0===i?void 0:i.id)&&(this.portalItem.portal||g.A.getDefault());return r&&s&&!(0,p.ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.A("layer:cross-portal","The layer '".concat(this.title," (").concat(this.id,")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer"),{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,h.MZ)({type:b.default})],t.prototype,"portalItem",null),(0,r._)([(0,y.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,v.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,f.$)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},5682:(e,t,i)=>{i.d(t,{j:()=>l});var r=i(35143),s=i(46053),a=(i(81806),i(76460),i(47249),i(85842));const l=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const i=this._get("effectiveScaleRange");return i&&i.minScale===e.minScale&&i.maxScale===e.maxScale?i:e}};return(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,r._)([(0,a.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},72945:(e,t,i)=>{i.d(t,{It:()=>p,LG:()=>l,OM:()=>c,Y:()=>n,bK:()=>o,mm:()=>u,sQ:()=>d});var r=i(26346),s=i(13312),a=i(45417);function l(e,t){if(!n(e,t)){const i=e.typeKeywords;i?i.push(t):e.typeKeywords=[t]}}function n(e,t){var i;return!(null===(i=e.typeKeywords)||void 0===i||!i.includes(t))}function o(e){return n(e,u.HOSTED_SERVICE)}function c(e,t){const i=e.typeKeywords;if(i){const e=i.indexOf(t);e>-1&&i.splice(e,1)}}async function d(e){const t=e.clone().normalize();let i;if(t.length>1)for(const r of t)i?r.width>i.width&&(i=r):i=r;else i=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,a.ci)(e);const i=s.A.WGS84;return await(0,r.initializeProjection)(t,i),(0,r.project)(e,i)}(i)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){var t;const{portal:i,isOrgItem:r,itemControl:s}=e,a=null===(t=i.user)||void 0===t?void 0:t.privileges;let l=!a||a.includes("features:user:edit"),n=!!r&&!(null===a||void 0===a||!a.includes("features:user:fullEdit"));const o="update"===s||"admin"===s;return o?n=l=!0:n&&(l=!0),{features:{edit:l,fullEdit:n},content:{updateItem:o}}}},61701:(e,t,i)=>{var r;i.d(t,{X:()=>r}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(r||(r={}))},24907:(e,t,i)=>{i.d(t,{c:()=>l,d:()=>s});var r=i(50076);async function s(e){const t=[];for(const i of e.allLayers)if("beforeSave"in i&&"function"==typeof i.beforeSave){const e=i.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const a=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function l(e,t,i){var s;let l=(null!==(s=e.messages)&&void 0!==s?s:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:i,details:s}=e;return new r.A(t,i,s)}));if(e.blockedRelativeUrls&&(l=l.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported","Relative url '".concat(e,"' is not supported")))))),i){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:r}=i;e&&(l=l.filter((e=>{let{name:i}=e;return!(a.has(i)||t.includes(i))}))),r&&(l=l.filter((e=>"web-document-write:property-required"!==e.name)))}if(l.length>0)throw new r.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:l})}}}]);
//# sourceMappingURL=4604.056aef03.chunk.js.map