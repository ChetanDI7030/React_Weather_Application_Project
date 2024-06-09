"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[2487],{77491:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},39323:(e,a,t)=>{t.d(a,{L:()=>u});var r=t(55171),n=t(3825),l=t(50076),i=t(50346),s=t(13096),o=t(65308),c=t(70652);async function u(e,a){var t,u;const m=(0,s.qg)(e);if(!m)throw new l.A("invalid-url","Invalid scene service url");const f={...a,sceneServerUrl:m.url.path,layerId:null!==(t=m.sublayer)&&void 0!==t?t:void 0};if(null!==(u=f.sceneLayerItem)&&void 0!==u||(f.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const t=new c.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===r.id||void 0===r.id?void 0:r.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(v){(0,i.QP)(v)}return null}(e);null!=l&&(t.portal=new o.A({url:l}));try{return t.load({signal:e.signal})}catch(w){return(0,i.QP)(w),null}}(f)),null==f.sceneLayerItem)return y(f.sceneServerUrl.replace("/SceneServer","/FeatureServer"),f);const v=await async function(e){let{sceneLayerItem:a,signal:t}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const r=new c.default({portal:e.portal,id:e.id});return await r.load(),r}catch(r){return(0,i.QP)(r),null}}(f);if(null===v||void 0===v||!v.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");f.featureServiceItem=v;const w=await y(v.url,f);return w.portalItem=v,w}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var t,r,i;const o=(0,s.qg)(e);if(!o)throw new l.A("invalid-feature-service-url","Invalid feature service url");const c=o.url.path,u=a.layerId;if(null==u)return{serverUrl:c};const y=d(a),m=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,f=null===(t=(null===m||void 0===m||null===(r=m.layers)||void 0===r?void 0:r[0])||(null===m||void 0===m||null===(i=m.tables)||void 0===i?void 0:i[0]))||void 0===t?void 0:t.customParameters,v=e=>{const t={query:{f:"json",...f},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(c,t)},w=v("anonymous").catch((()=>v("no-prompt"))),[p,h]=await Promise.all([w,y]),L=null===h||void 0===h?void 0:h.layers,S=p.data&&p.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(L)){for(let n=0;n<Math.min(L.length,S.length);n++)if(L[n].id===u)return{serverUrl:c,layerId:S[n].id}}else if(null!=u&&u<S.length)return{serverUrl:c,layerId:S[u].id};throw new Error("could not find matching associated sublayer")}},62487:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(3993)]).then(t.bind(t,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(1646),t.e(3020),t.e(9231),t.e(2737),t.e(7591),t.e(2746)]).then(t.bind(t,30188))).default,CatalogLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(9122),t.e(8656),t.e(9346),t.e(7872),t.e(9078),t.e(3011)]).then(t.bind(t,84397))).default,CSVLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(6762)]).then(t.bind(t,1365))).default,DimensionLayer:async()=>(await Promise.all([t.e(7114),t.e(2798)]).then(t.bind(t,72798))).default,ElevationLayer:async()=>(await Promise.all([t.e(7114),t.e(6693),t.e(3875)]).then(t.bind(t,43875))).default,FeatureLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(4058)]).then(t.bind(t,38451))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(2393)]).then(t.bind(t,50709))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(2551)]).then(t.bind(t,52551))).default,GroupLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4604)]).then(t.bind(t,4604))).default,ImageryLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(9122),t.e(3092),t.e(6964),t.e(8627),t.e(4739),t.e(3464)]).then(t.bind(t,59051))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(3092),t.e(9844),t.e(6693),t.e(6964),t.e(8627),t.e(3934),t.e(4739),t.e(6889)]).then(t.bind(t,86889))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(3196)]).then(t.bind(t,3196))).default,KMLLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(9699),t.e(3637)]).then(t.bind(t,41324))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(7114),t.e(2897)]).then(t.bind(t,22897))).default,LinkChartLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(8618),t.e(7851),t.e(6616),t.e(3620),t.e(842),t.e(7431),t.e(1448),t.e(7216),t.e(9346),t.e(7915),t.e(1195),t.e(1111)]).then(t.bind(t,36744))).default,MapImageLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(6399),t.e(9122),t.e(7872),t.e(7997),t.e(8679)]).then(t.bind(t,82951))).default,MapNotesLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(9744)]).then(t.bind(t,43311))).default,MediaLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(9522)]).then(t.bind(t,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(6799),t.e(1528)]).then(t.bind(t,1741))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552),t.e(803)]).then(t.bind(t,50803))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6399),t.e(8656),t.e(8504),t.e(8451),t.e(2166)]).then(t.bind(t,52593))).default,PointCloudLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(1830)]).then(t.bind(t,11830))).default,RouteLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(1297),t.e(451)]).then(t.bind(t,91301))).default,SceneLayer:async()=>(await Promise.all([t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(8105),t.e(1646),t.e(3020),t.e(9231),t.e(8620),t.e(2737),t.e(9976),t.e(8666),t.e(7591),t.e(9035)]).then(t.bind(t,48723))).default,StreamLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(6702)]).then(t.bind(t,84369))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(6399),t.e(8656),t.e(8504),t.e(1690),t.e(5815)]).then(t.bind(t,69005))).default,TileLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(8618),t.e(7851),t.e(6616),t.e(6399),t.e(9122),t.e(7872),t.e(6693),t.e(7997),t.e(1174)]).then(t.bind(t,71174))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([t.e(7114),t.e(6790)]).then(t.bind(t,76790))).default,UnknownLayer:async()=>(await t.e(8896).then(t.bind(t,8896))).default,UnsupportedLayer:async()=>(await t.e(2043).then(t.bind(t,72043))).default,VectorTileLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(5663),t.e(6693),t.e(5995),t.e(117)]).then(t.bind(t,53451))).default,VoxelLayer:async()=>(await Promise.all([t.e(7114),t.e(3020),t.e(8893)]).then(t.bind(t,8893))).default,WFSLayer:async()=>(await Promise.all([t.e(7847),t.e(9113),t.e(7114),t.e(7851),t.e(6616),t.e(7431),t.e(1448),t.e(1316),t.e(7387)]).then(t.bind(t,4583))).default,WMSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(2015)]).then(t.bind(t,52015))).default,WMTSLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552),t.e(1845)]).then(t.bind(t,1845))).default,WebTileLayer:async()=>(await Promise.all([t.e(7847),t.e(7114),t.e(4552)]).then(t.bind(t,24552))).default}},64130:(e,a,t)=>{t.d(a,{PC:()=>d,WZ:()=>i,XH:()=>o,_r:()=>n,ay:()=>u,bO:()=>l,nu:()=>y,pJ:()=>s,z8:()=>c});var r=t(39323);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function l(e,a,t){var r,l;if(null==(null===(r=e)||void 0===r?void 0:r.layers)||null==(null===(l=e)||void 0===l?void 0:l.tables)){var i,o,c;const r=await t.fetchServiceMetadata(a,{customParameters:null===(i=s(e))||void 0===i?void 0:i.customParameters});(e=e||{}).layers=e.layers||(null===r||void 0===r||null===(o=r.layers)||void 0===o?void 0:o.map(n)),e.tables=e.tables||(null===r||void 0===r||null===(c=r.tables)||void 0===c?void 0:c.map(n))}return e}function i(e){const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0].id:null!==t&&void 0!==t&&t.length?t[0].id:null}function s(e){if(!e)return null;const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==t&&void 0!==t&&t.length?t[0]:null}function o(e){var a,t,r,n;return(null!==(a=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==a?a:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function c(e){var a;const t=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function u(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}function d(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"CatalogLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function y(e,a,t){var l,i,o;if(null===e||void 0===e||!e.url)return null!==(l=a)&&void 0!==l?l:{};if(null!==(i=a)&&void 0!==i||(a={}),!a.layers){var c;const r=await t.fetchServiceMetadata(e.url);a.layers=null===(c=r.layers)||void 0===c?void 0:c.map(n)}const{serverUrl:u,portalItem:d}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:null===(o=s(a))||void 0===o?void 0:o.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==u)return a.tables=[],a;if(!a.tables&&d){const e=await d.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var y,m;const r=await t.fetchServiceMetadata(u,{customParameters:null===(y=s(e))||void 0===y?void 0:y.customParameters});a.tables=null===r||void 0===r||null===(m=r.tables)||void 0===m?void 0:m.map(n)}}if(a.tables)for(const r of a.tables)r.url="".concat(u,"/").concat(r.id);return a}},2487:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>y});var r=t(50076),n=t(39323),l=t(77491),i=t(31933),s=t(62487),o=t(70652),c=t(64130),u=t(72945);async function d(e){!e.portalItem||e.portalItem instanceof o.default||(e={...e,portalItem:new o.default(e.portalItem)});const a=await async function(e){await e.load();const a=new l.v;return async function(e){const a=e.className,t=s.S[a];return{constructor:await t(),properties:e.properties}}(await y(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),t=(0,u.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,c.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var t,r,n,l;await e.load();const i=null!==(t=null===(r=e.typeKeywords)||void 0===r?void 0:r.map((e=>e.toLowerCase())))&&void 0!==t?t:[];if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"};const s=await a.fetchItemData(e),o=null===s||void 0===s?void 0:s.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),u=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),d=null===(l=c.capabilities)||void 0===l?void 0:l.toLowerCase().includes("tilesonly");return"map"===u||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{var t;if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),l=await a.fetchServiceMetadata(r);return null!==(t=null===l||void 0===l?void 0:l.tables)&&void 0!==t?t:[]}catch{return[]}}));if("object"==typeof t){var r;const n={};let l;if(null!=t.id?(n.layerId=t.id,l="".concat(e.url,"/layers/").concat(t.id)):l=e.url,null!==(r=e.typeKeywords)&&void 0!==r&&r.length)for(const a of Object.keys(i.XX))if(e.typeKeywords.includes(a))return{className:i.XX[a]};const s=await a.fetchServiceMetadata(l,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{className:i.XX[null===s||void 0===s?void 0:s.layerType]||"SceneLayer",properties:n}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===t||void 0===t?void 0:t.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,l="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(l){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.pJ)(e))||void 0===a?void 0:a.customParameters}))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let i=await a.fetchItemData(e);if(l){const e=await(0,c.bO)(i,r,a),t=f(e);if("object"==typeof t){const a=(0,c.z8)(e),r=(0,c.ay)(e),n=(0,c.PC)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&null!==r&&void 0!==r&&r.includes(t.id)?"OrientedImageryLayer":null!=t.id&&null!==n&&void 0!==n&&n.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(i=await(0,c.nu)(e,i,a)),(0,c.XH)(i)>0)return f(i);const s=await a.fetchServiceMetadata(r);return t&&(s.tables=await t()),f(s)}function f(e){return 1===(0,c.XH)(e)&&{id:(0,c.WZ)(e)}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}}}]);
//# sourceMappingURL=2487.9e12d264.chunk.js.map