"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[765],{37888:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(24387);function n(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:a,propName:t,newOrigin:n}=e;(0,r.H)(a)&&n&&a.originOf(t)!==n&&a.updateOrigin(t,n)}))}},24387:(e,a,t)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(a,{H:()=>r})},10765:(e,a,t)=>{t.d(a,{save:()=>O,saveAs:()=>A});var r=t(18690),n=(t(50076),t(97924)),i=t(13096),o=t(11668),l=t(31933),s=t(62487),u=t(72945);const c="Feature Service",d="feature-layer-utils",y="".concat(d,"-save"),f="".concat(d,"-save-as");"".concat(d,"-saveall"),"".concat(d,"-saveall-as");function p(e){return{isValid:(0,l.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function w(e){return m([e])}async function v(e,a){return/\/\d+\/?$/.test(e.url)?w(a[0]):h(a,e)}async function h(e,a){if(e.reverse(),!a)return m(e);const t=await async function(e,a){let t=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(t))return t;t||(t={}),function(e){e.layers||(e.layers=[]),e.tables||(e.tables=[])}(t);const{layer:{url:r,customParameters:n,apiKey:i}}=a[0];return await async function(e,a,t){const{url:r,customParameters:n,apiKey:i}=a,{serviceJSON:l,layersJSON:u}=await(0,o.Q)(r,{customParameters:n,apiKey:i}),c=P(e.layers,l.layers,t),d=P(e.tables,l.tables,t);e.layers=c.itemResources,e.tables=d.itemResources;const y=[...c.added,...d.added],f=u?[...u.layers,...u.tables]:[];await async function(e,a,t,r){const n=await async function(e){const a=[];e.forEach((e=>{let{type:t}=e;const r=function(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer";break;case"Catalog Layer":a="CatalogLayer"}return a}(t),n=s.S[r];a.push(n())}));const t=await Promise.all(a),r=new Map;return e.forEach(((e,a)=>{let{type:n}=e;r.set(n,t[a])})),r}(a),i=a.map((e=>{let{id:a,type:i}=e;return new(n.get(i))({url:t,layerId:a,sourceJSON:r.find((e=>{let{id:t}=e;return t===a}))})}));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const i={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(i.layerType=a.operationalLayerType),S(a,i,e)}))}(e,y,r,f)}(t,{url:null!==r&&void 0!==r?r:"",customParameters:n,apiKey:i},a.map((e=>e.layer.layerId))),t}(a,e);for(const r of e)S(r.layer,r.layerJSON,t);return function(e,a){const t=[],r=[];for(const{layer:n}of a){const{isTable:e,layerId:a}=n;e?r.push(a):t.push(a)}b(e.layers,t),b(e.tables,r)}(t,e),t}function b(e,a){if(e.length<2)return;const t=[];for(const{id:r}of e)t.push(r);(0,r.aI)(t.sort(L),a.slice().sort(L))&&e.sort(((e,t)=>{const r=a.indexOf(e.id),n=a.indexOf(t.id);return r<n?-1:r>n?1:0}))}function L(e,a){return e<a?-1:e>a?1:0}function P(e,a,t){const n=(0,r.iv)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const i=n.added;return i.forEach((a=>{let{id:t}=a;e.push({id:t})})),{itemResources:e,added:i.filter((e=>{let{id:a}=e;return!t.includes(a)}))}}function S(e,a,t){e.isTable?g(t.tables,a):g(t.layers,a)}function g(e,a){const t=e.findIndex((e=>{let{id:t}=e;return t===a.id}));-1===t?e.push(a):e[t]=a}async function I(e,a){const{url:t,layerId:r,title:n,fullExtent:o,isTable:l}=e,s=(0,i.qg)(t);a.url="FeatureServer"===(null===s||void 0===s?void 0:s.serverType)?t:"".concat(t,"/").concat(r),a.title||(a.title=n),a.extent=null,l||null==o||(a.extent=await(0,u.sQ)(o)),(0,u.OM)(a,u.mm.METADATA),(0,u.OM)(a,u.mm.MULTI_LAYER),(0,u.LG)(a,u.mm.SINGLE_LAYER),l&&(0,u.LG)(a,u.mm.TABLE)}async function O(e,a){return(0,n.UN)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>v(a,[e]),errorNamePrefix:y},a)}async function A(e,a,t){return(0,n.Uh)({layer:e,itemType:c,validateLayer:p,createItemData:(e,a)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:a,setItemProperties:I},t)}},97924:(e,a,t)=>{t.d(a,{UN:()=>b,Uh:()=>L});var r=t(50076),n=t(37888),i=t(65308),o=t(70652),l=t(79942),s=t(72945),u=t(65526),c=t(24907);async function d(e){const{layer:a,errorNamePrefix:t,validateLayer:n}=e;await a.load(),function(e,a,t){const n=t(e);if(!n.isValid)throw new r.A("".concat(a,":invalid-parameters"),n.errorMessage,{layer:e})}(a,t,n)}function y(e,a){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(a)}function f(e){const{item:a,errorNamePrefix:t,layer:n,validateItem:i}=e;if((0,u.X)(a),function(e){const{item:a,itemType:t,additionalItemType:n,errorNamePrefix:i,layer:o}=e,l=[t];if(n&&l.push(n),!l.includes(a.type)){const e=l.map((e=>"'".concat(e,"'"))).join(", ");throw new r.A("".concat(i,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:a,layer:o})}}(e),i){const e=i(a);if(!e.isValid)throw new r.A("".concat(t,":invalid-parameters"),e.errorMessage,{layer:n})}}function p(e){const{layer:a,errorNamePrefix:t}=e,{portalItem:n}=a;if(!n)throw new r.A("".concat(t,":portal-item-not-set"),y(a,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A("".concat(t,":portal-item-not-loaded"),y(a,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function m(e){var a,t,r,n;const{newItem:l,itemType:s}=e;let u=o.default.from(l);return u.id&&(u=u.clone(),u.id=null),null!==(t=(a=u).type)&&void 0!==t||(a.type=s),null!==(n=(r=u).portal)&&void 0!==n||(r.portal=i.A.getDefault()),f({...e,item:u}),u}function w(e){return(0,l.m)(e,"portal-item")}async function v(e,a,t){var r,n;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const i=e.write({},a);return await Promise.all(null!==(r=null===(n=a.resources)||void 0===n?void 0:n.pendingOperations)&&void 0!==r?r:[]),(0,c.c)(a,{errorName:"layer-write:unsupported"},t),i}function h(e){(0,s.LG)(e,s.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function b(e,a){const{layer:t,createItemData:r,createJSONContext:i,saveResources:o,supplementalUnsupportedErrors:l}=e;await d(e),p(e);const s=t.portalItem,u=i?i(s):w(s),c=await v(t,u,{...a,supplementalUnsupportedErrors:l}),y=await r({layer:t,layerJSON:c},s);return h(s),await s.update({data:y}),(0,n.v)(u),await(null===o||void 0===o?void 0:o(s,u)),s}async function L(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:o,saveResources:l,supplementalUnsupportedErrors:s}=e;await d(e);const u=m(e),c=i?i(u):w(u),y=await v(t,c,{...a,supplementalUnsupportedErrors:s}),f=await r({layer:t,layerJSON:y},u);return await o(t,u),h(u),await async function(e,a,t){var r;const n=e.portal;await n.signIn(),await(null===(r=n.user)||void 0===r?void 0:r.addItem({item:e,data:a,folder:null===t||void 0===t?void 0:t.folder}))}(u,f,a),t.portalItem=u,(0,n.v)(c),await(null===l||void 0===l?void 0:l(u,c)),u}},11668:(e,a,t)=>{t.d(a,{Q:()=>n});var r=t(67061);async function n(e,a){var t;const{loadContext:n,...i}=a||{},o=n?await n.fetchServiceMetadata(e,i):await(0,r.V)(e,i);c(o),l(o);const s={serviceJSON:o};if((null!==(t=o.currentVersion)&&void 0!==t?t:0)<10.5)return s;const u="".concat(e,"/layers"),d=n?await n.fetchServiceMetadata(u,i):await(0,r.V)(u,i);return c(d),l(d),s.layersJSON={layers:d.layers,tables:d.tables},s}function i(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function o(e){return"Table"===e.type}function l(e){var a,t;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(i),e.tables=null===(t=e.tables)||void 0===t?void 0:t.filter(o)}function s(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function c(e){var a,t;null!==(a=e.layers)&&void 0!==a&&a.forEach(s),null===(t=e.tables)||void 0===t||t.forEach(u)}},62487:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(3993)]).then(t.bind(t,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(1646),t.e(3020),t.e(9231),t.e(2737),t.e(7591),t.e(2746)]).then(t.bind(t,30188))).default,CatalogLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(9122),t.e(8656),t.e(9346),t.e(7872),t.e(9078),t.e(3011)]).then(t.bind(t,84397))).default,CSVLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(6762)]).then(t.bind(t,1365))).default,DimensionLayer:async()=>(await Promise.all([t.e(7114),t.e(2798)]).then(t.bind(t,72798))).default,ElevationLayer:async()=>(await Promise.all([t.e(7114),t.e(6693),t.e(3875)]).then(t.bind(t,43875))).default,FeatureLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(4058)]).then(t.bind(t,38451))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(2393)]).then(t.bind(t,50709))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(2551)]).then(t.bind(t,52551))).default,GroupLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4604)]).then(t.bind(t,4604))).default,ImageryLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(9122),t.e(3092),t.e(6964),t.e(8627),t.e(4739),t.e(3464)]).then(t.bind(t,59051))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(3092),t.e(9844),t.e(6693),t.e(6964),t.e(8627),t.e(3934),t.e(4739),t.e(6889)]).then(t.bind(t,86889))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(3196)]).then(t.bind(t,3196))).default,KMLLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(9699),t.e(3637)]).then(t.bind(t,41324))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(7114),t.e(2897)]).then(t.bind(t,22897))).default,LinkChartLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(8618),t.e(7851),t.e(6616),t.e(3620),t.e(842),t.e(7431),t.e(1448),t.e(7216),t.e(9346),t.e(7915),t.e(1195),t.e(1111)]).then(t.bind(t,36744))).default,MapImageLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(6399),t.e(9122),t.e(7872),t.e(7997),t.e(8679)]).then(t.bind(t,82951))).default,MapNotesLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(9744)]).then(t.bind(t,43311))).default,MediaLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(9522)]).then(t.bind(t,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(6799),t.e(1528)]).then(t.bind(t,1741))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552),t.e(803)]).then(t.bind(t,50803))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(2166)]).then(t.bind(t,52593))).default,PointCloudLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(1830)]).then(t.bind(t,11830))).default,RouteLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(1297),t.e(451)]).then(t.bind(t,91301))).default,SceneLayer:async()=>(await Promise.all([t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(8105),t.e(1646),t.e(3020),t.e(9231),t.e(8620),t.e(2737),t.e(9976),t.e(8666),t.e(7591),t.e(9035)]).then(t.bind(t,48723))).default,StreamLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6702)]).then(t.bind(t,84369))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(6399),t.e(8656),t.e(8504),t.e(1690),t.e(5815)]).then(t.bind(t,69005))).default,TileLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(6399),t.e(9122),t.e(7872),t.e(6693),t.e(7997),t.e(1174)]).then(t.bind(t,71174))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([t.e(7114),t.e(6790)]).then(t.bind(t,76790))).default,UnknownLayer:async()=>(await t.e(8896).then(t.bind(t,8896))).default,UnsupportedLayer:async()=>(await t.e(2043).then(t.bind(t,72043))).default,VectorTileLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(5663),t.e(6693),t.e(5995),t.e(117)]).then(t.bind(t,53451))).default,VoxelLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(8893)]).then(t.bind(t,8893))).default,WFSLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(1316),t.e(7387)]).then(t.bind(t,4583))).default,WMSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(2015)]).then(t.bind(t,52015))).default,WMTSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552),t.e(1845)]).then(t.bind(t,1845))).default,WebTileLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552)]).then(t.bind(t,24552))).default}},79942:(e,a,t)=>{t.d(a,{m:()=>o,v:()=>i});var r=t(90534),n=t(65308);function i(e,a){return{...l(e,a),readResourcePaths:[]}}function o(e,a,t){const n=(0,r.An)(e.itemUrl);return{...l(e,a),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:t?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,a){return{origin:a,url:(0,r.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}},65526:(e,a,t)=>{t.d(a,{X:()=>o});var r=t(86560),n=t(50076),i=t(90924);function o(e){if(r.A.apiKey&&(0,i.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}},24907:(e,a,t)=>{t.d(a,{c:()=>o,d:()=>n});var r=t(50076);async function n(e){const a=[];for(const t of e.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const e=t.beforeSave();e&&a.push(e)}await Promise.allSettled(a)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,a,t){var n;let o=(null!==(n=e.messages)&&void 0!==n?n:[]).filter((e=>{let{type:a}=e;return"error"===a})).map((e=>{let{name:a,message:t,details:n}=e;return new r.A(a,t,n)}));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported","Relative url '".concat(e,"' is not supported")))))),t){const{ignoreUnsupported:e,supplementalUnsupportedErrors:a=[],requiredPropertyChecksDisabled:r}=t;e&&(o=o.filter((e=>{let{name:t}=e;return!(i.has(t)||a.includes(t))}))),r&&(o=o.filter((e=>"web-document-write:property-required"!==e.name)))}if(o.length>0)throw new r.A(a.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}}}]);
//# sourceMappingURL=765.4bc8fabd.chunk.js.map