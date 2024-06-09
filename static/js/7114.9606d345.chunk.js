"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[7114],{77717:(e,r,t)=>{t.d(r,{P:()=>S,L:()=>w});var i=t(35143),n=t(91967),s=t(60351),o=t(53084),a=t(49140);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const r=new l,t=this._originStores[a.Gr.DEFAULTS];t&&t.forEach(((e,t)=>{r.set(t,(0,o.o8)(e),a.Gr.DEFAULTS)}));for(let i=a.Gr.SERVICE;i<a.AU;i++){const t=this._originStores[i];t&&t.forEach(((t,n)=>{e&&e.has(n)||r.set(n,(0,o.o8)(t),i)}))}return r}get(e,r){const t=void 0===r?this._values:this._originStores[r];return t?t.get(e):void 0}keys(e){const r=null==e?this._values:this._originStores[e];return r?[...r.keys()]:[]}set(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Gr.USER,i=this._originStores[t];if(i||(i=new Map,this._originStores[t]=i),i.set(e,r),!this._values.has(e)||this._propertyOriginMap.get(e)<=t){const i=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),i!==r}return!1}delete(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Gr.USER;const t=this._originStores[r];if(!t)return;const i=t.get(e);if(t.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===r){this._values.delete(e);for(let t=r-1;t>=0;t--){const r=this._originStores[t];if(r&&r.has(e)){this._values.set(e,r.get(e)),this._propertyOriginMap.set(e,t);break}}}return i}has(e,r){const t=void 0===r?this._values:this._originStores[r];return!!t&&t.has(e)}revert(e,r){for(;r>0&&!this.has(e,r);)--r;const t=this._originStores[r],i=null===t||void 0===t?void 0:t.get(e),n=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,r),n!==i}originOf(e){return this._propertyOriginMap.get(e)||a.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var p=t(6527),u=t(39314),c=t(85842);const y=e=>{let r=class extends e{constructor(){super(...arguments);const e=(0,u.oY)(this),r=e.store,t=new l;e.store=t,(0,s.k)(e,r,t)}read(e,r){(0,p.L)(this,e,r)}getAtOrigin(e,r){const t=d(this),i=(0,a.aB)(r);if("string"==typeof e)return t.get(e,i);const n={};return e.forEach((e=>{n[e]=t.get(e,i)})),n}originOf(e){return(0,a.OL)(this.originIdOf(e))}originIdOf(e){return d(this).originOf(e)}revert(e,r){const t=d(this),i=(0,a.aB)(r),n=(0,u.oY)(this);let s;s="string"==typeof e?"*"===e?t.keys(i):[e]:e,s.forEach((e=>{n.invalidate(e),t.revert(e,i),n.commit(e)}))}};return r=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function d(e){return(0,u.oY)(e).store}let g=class extends(y(n.A)){};g=(0,i._)([(0,c.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);var f=t(17879),v=t(29584);const h=e=>{let r=class extends e{constructor(){super(...arguments)}clear(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return m(this).delete(e,(0,a.aB)(r))}write(e,r){return(0,v.M)(this,e=e||{},r),e}setAtOrigin(e,r,t){(0,u.oY)(this).setAtOrigin(e,r,(0,a.aB)(t))}removeOrigin(e){const r=m(this),t=(0,a.aB)(e),i=r.keys(t);for(const n of i)r.originOf(n)===t&&r.set(n,r.get(n,t),a.Gr.USER)}updateOrigin(e,r){const t=m(this),i=(0,a.aB)(r),n=(0,f.Jt)(this,e);for(let s=i+1;s<a.AU;++s)t.delete(e,s);t.set(e,n,i)}toJSON(e){return this.write({},e)}};return r=(0,i._)([(0,c.$)("esri.core.WriteableMultiOriginJSONSupport")],r),r.prototype.toJSON.isDefaultToJSON=!0,r};function m(e){return(0,u.oY)(e).store}const S=e=>{let r=class extends(h(y(e))){constructor(){super(...arguments)}};return r=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],r),r};let w=class extends(S(n.A)){};w=(0,i._)([(0,c.$)("esri.core.MultiOriginJSONSupport")],w)},80979:(e,r,t)=>{t.d(r,{K:()=>i});const i=["operational-layers","basemap","ground"]},11270:(e,r,t)=>{t.d(r,{q:()=>m});var i=t(35143),n=t(50076),s=t(90534),o=t(46053),a=(t(81806),t(76460),t(47249),t(28379)),l=t(85842),p=t(17707),u=t(80979),c=t(6527),y=t(29584);const d={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},g={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},f={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},v={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0,IntegratedMesh3DTilesLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":d,"web-map/basemap":g,"web-map/tables":f,"link-chart/operational-layers":{...d,LinkChartLayer:!0},"link-chart/basemap":g,"link-chart/tables":f,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,IntegratedMesh3DTilesLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};var h=t(55053);const m=e=>{let r=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){var i;return"Group Layer"===(null===t||void 0===t||null===(i=t.portalItem)||void 0===i?void 0:i.type)?void 0:e}writeListMode(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&(0,y.R)(this,t,{},i))&&(r[t]=e)}writeOperationalLayerType(e,r,t,i){e&&"tables"!==(null===i||void 0===i?void 0:i.layerContainerType)&&(r.layerType=e)}writeTitle(e,r){r.title=null!==e&&void 0!==e?e:"Layer"}read(e,r){r&&(r.layer=this),(0,c.t)(this,e,(r=>super.read(e,r)),r)}write(e,r){var t;if(!this.persistenceEnabled)return null;if(null!==r&&void 0!==r&&r.origin){var i;const e="".concat(r.origin,"/").concat(r.layerContainerType||"operational-layers"),t=v[e];let s=!(null===t||void 0===t||!t[this.operationalLayerType]);if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(s=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(s=!1),!s)return null!==(i=r.messages)&&void 0!==i&&i.push(new n.A("layer:unsupported","Layers (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' are not supported in the context of '").concat(e,"'"),{layer:this})),null}const o=super.write(e,{...r,layer:this}),a=!!r&&!!r.messages&&!!r.messages.filter((e=>e instanceof n.A&&"web-document-write:property-required"===e.name)).length;return(0,s.w8)(null===o||void 0===o?void 0:o.url)?(null!==r&&void 0!==r&&null!==(t=r.messages)&&void 0!==t&&t.push(new n.A("layer:invalid-url","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' using a Blob URL cannot be written to web scenes and web maps"),{layer:this})),null):!this.url&&a?null:o}beforeSave(){}};return(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),(0,i._)([(0,a.w)("id",["id"])],r.prototype,"readId",null),(0,i._)([(0,o.MZ)(h.C1)],r.prototype,"listMode",void 0),(0,i._)([(0,p.K)("listMode")],r.prototype,"writeListMode",null),(0,i._)([(0,o.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:u.K}}}}})],r.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.K)("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),(0,i._)([(0,o.MZ)(h.ke)],r.prototype,"opacity",void 0),(0,i._)([(0,o.MZ)({type:Boolean,readOnly:!1})],r.prototype,"persistenceEnabled",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),(0,i._)([(0,p.K)("title"),(0,p.K)(["web-scene"],"title")],r.prototype,"writeTitle",null),(0,i._)([(0,o.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:u.K}}},name:"visibility",write:!0}})],r.prototype,"visible",void 0),r=(0,i._)([(0,l.$)("esri.layers.mixins.OperationalLayer")],r),r}},55053:(e,r,t)=>{t.d(r,{ui:()=>L,Yj:()=>v,id:()=>b,kF:()=>d,fV:()=>f,C1:()=>_,hG:()=>A,hn:()=>O,ke:()=>S,Ih:()=>w,M6:()=>y,Qo:()=>h,Fm:()=>I,PY:()=>c,OZ:()=>g});var i=t(82111),n=t(80979),s=t(76797),o=t(13312),a=t(79453),l=(t(18690),t(53084),t(18288));var p=t(731),u=t(2183);const c={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:n.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,t){r[t]=!e}}}},d={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:n.K}}},g={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.w}}},f={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:n.K}}},v={value:null,type:p.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:n.K}}};function h(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const m={write:{enabled:!0,layerContainerTypes:n.K},read:!0},S={type:Number,json:{origins:{"web-document":m,"portal-item":{write:!0}}}},w={...S,json:{...S.json,origins:{"web-document":{...m,write:{enabled:!0,layerContainerTypes:n.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,t)=>{var i;return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?null!==(i=r.layerDefinition)&&void 0!==i&&i.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,u.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,u.D)(r.drawingInfo.transparency)}}}},L={type:i.A,readOnly:!0,get(){var e,r,t;const n=null!=(null===(e=this.layer)||void 0===e?void 0:e.timeInfo)?this.layer:null!=(null===(r=this.i3slayer)||void 0===r?void 0:r.timeInfo)?this.i3slayer:null;if(null==n)return null;const{datesInUnknownTimezone:s,timeOffset:o,useViewTime:a}=n,p=null===(t=this.view)||void 0===t?void 0:t.timeExtent;let u=n.timeExtent;s&&(u=function(e){if(!e)return e;const{start:r,end:t}=e;return new i.A({start:null!=r?(0,l.S1)(r,r.getTimezoneOffset(),"minutes"):r,end:null!=t?(0,l.S1)(t,t.getTimezoneOffset(),"minutes"):t})}(u));let c=a?p&&u?p.intersection(u):p||u:u;if(!c||c.isEmpty||c.isAllTime)return c;o&&(c=c.offset(-o.value,o.unit)),s&&(c=function(e){if(!e)return e;const{start:r,end:t}=e;return new i.A({start:null!=r?(0,l.S1)(r,-r.getTimezoneOffset(),"minutes"):r,end:null!=t?(0,l.S1)(t,-t.getTimezoneOffset(),"minutes"):t})}(c));const y=this._get("timeExtent");return c.equals(y)?y:c}},I={type:s.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=s.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=o.A.fromJSON(r.spatialReference)),t}}}},read:!1}},b={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},O={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:n.K}}},name:"layerDefinition.minScale",write:!0}},A={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:n.K}}},name:"layerDefinition.maxScale",write:!0}},_={json:{write:{ignoreOrigin:!0,layerContainerTypes:n.K},origins:{"web-map":{read:!1,write:!1}}}}},3454:(e,r,t)=>{t.d(r,{j:()=>s});var i=t(31633),n=t(14556);const s={unknown:1,inches:(0,i.oU)(1,"meters","inches"),feet:(0,i.oU)(1,"meters","feet"),"us-feet":(0,i.oU)(1,"meters","us-feet"),yards:(0,i.oU)(1,"meters","yards"),miles:(0,i.oU)(1,"meters","miles"),"nautical-miles":(0,i.oU)(1,"meters","nautical-miles"),millimeters:(0,i.oU)(1,"meters","millimeters"),centimeters:(0,i.oU)(1,"meters","centimeters"),decimeters:(0,i.oU)(1,"meters","decimeters"),meters:(0,i.oU)(1,"meters","meters"),kilometers:(0,i.oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.vl)(1,"meters",n.$O.radius)}},731:(e,r,t)=>{t.d(r,{A:()=>w});var i,n=t(35143),s=t(45802),o=t(42553),a=t(30726),l=t(46053),p=(t(81806),t(76460),t(47249),t(28379)),u=t(85842),c=t(17707),y=t(53430);let d=i=class extends o.oY{constructor(e){super(e)}async collectRequiredFields(e,r){return(0,y.Dx)(e,r,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=i=(0,n._)([(0,u.$)("esri.layers.support.FeatureExpressionInfo")],d);const g=d;var f,v=t(59097);const h=(0,s.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new s.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let S=f=class extends o.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,t,i){r[t]=e.write({},i),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,n._)([(0,l.MZ)({type:g,json:{write:!0}})],S.prototype,"featureExpressionInfo",void 0),(0,n._)([(0,p.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],S.prototype,"readFeatureExpressionInfo",null),(0,n._)([(0,c.K)("featureExpressionInfo",{featureExpressionInfo:{type:g},"featureExpression.value":{type:[0]}})],S.prototype,"writeFeatureExpressionInfo",null),(0,n._)([(0,l.MZ)({type:h.apiValues,nonNullable:!0,json:{type:h.jsonValues,read:h.read,write:{writer:h.write,isRequired:!0}}})],S.prototype,"mode",null),(0,n._)([(0,l.MZ)({type:Number,json:{write:!0}})],S.prototype,"offset",void 0),(0,n._)([(0,l.MZ)({type:v.KQ,json:{type:String,read:m.read,write:m.write}})],S.prototype,"unit",null),S=f=(0,n._)([(0,u.$)("esri.layers.support.ElevationInfo")],S);const w=S},59097:(e,r,t)=>{t.d(r,{Ao:()=>n,KQ:()=>s});var i=t(3454);function n(e){return 1/(i.j[e]||1)}const s=function(){const e=Object.keys(i.j);return e.sort(),e}()}}]);
//# sourceMappingURL=7114.9606d345.chunk.js.map