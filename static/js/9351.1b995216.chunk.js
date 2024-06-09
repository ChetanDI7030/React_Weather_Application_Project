"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[9351],{53521:(e,t,i)=>{i.d(t,{q:()=>r});var s=i(79369);class r{constructor(e,t){this._storage=new s.F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._storage.put(this,e,t,i,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},79369:(e,t,i)=>{i.d(t,{F:()=>l,Mn:()=>n});var s=i(30015);var r,o;(o=r||(r={}))[o.ALL=0]="ALL",o[o.SOME=1]="SOME";class n{constructor(e,t,i){this.name=e,this._storage=t,this.id=a+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this,e,t,i,s)}pop(e){const t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,i){this._storage.updateSize(this,e,t,i)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class l{get size(){return this._size}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new s.A,this._users=new s.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){var i;const s=this._db.get(e.id+t);return null!==(i=null===s||void 0===s?void 0:s.size)&&void 0!==i?i:0}put(e,t,i,s,o){t=e.id+t;const n=this._db.get(t);if(n&&(this._size-=n.size,e.size-=n.size,this._db.delete(t),n.entry!==i&&this._notifyRemove(t,n.entry,n.size,r.ALL)),s>this._maxSize)return void this._notifyRemove(t,i,s,r.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return console.warn("Refusing to cache entry with size ".concat(s," for key ").concat(t)),void this._notifyRemove(t,i,0,r.ALL);const l=1+Math.max(o,-4)- -3;this._db.set(t,new h(i,s,l)),this._size+=s,e.size+=s,this._checkSize()}updateSize(e,t,i,s){t=e.id+t;const o=this._db.get(t);if(o&&o.entry===i){for(this._size-=o.size,e.size-=o.size;s>this._maxSize;){const e=this._notifyRemove(t,i,s,r.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);s=e}o.size=s,this._size+=s,e.size+=s,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,null===i||void 0===i?void 0:i.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const r=e.lifetime;i[r]=(i[r]||0)+e.size,this._users.forAll((i=>{const{id:r,name:o}=i;if(s.startsWith(r)){const i=t[o]||0;t[o]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const r=t[i]||0;t[i]=r,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const r=Object.keys(t);r.sort(((e,i)=>t[i]-t[e])),r.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let o=i.length-1;o>=0;--o){const t=i[o];t&&(e["Priority "+(o+-3-1)]=Math.round(t/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,r.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,r.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,s){let r;return this._removeFuncs.some((o=>{if(e.startsWith(o[0])){const e=o[1](t,s,i);return"number"==typeof e&&(r=e),!0}return!1})),r}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=null!==e&&void 0!==e?e:this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=null===e||void 0===e?void 0:e.id;let s=!0;for(;s;){s=!1;for(const[r,o]of this._db)if(0===o.lifetime&&(!i||r.startsWith(i))){if(this._purgeItem(r,o,e),t.size<=.9*t.maxSize)return;s||(s=this._db.has(r))}}for(const[r,o]of this._db)if((!i||r.startsWith(i))&&(this._purgeItem(r,o,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((t=>e.startsWith(t.id)));if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const s=this._notifyRemove(e,t.entry,t.size,r.SOME);null!=s&&s>0&&(this._size+=s,i&&(i.size+=s),t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let a=0;class h{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}},68002:(e,t,i)=>{i.d(t,{X_:()=>n,i1:()=>l,zx:()=>a});var s=i(15941),r=i(31633);const o=96;function n(e,t){const i=t||e.extent,s=e.width,n=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*n*r.dy*o:0}function l(e,t){return e/((0,r.GA)(t)*r.dy*o)}function a(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},4414:(e,t,i)=>{i.d(t,{O3:()=>d,PU:()=>h,YW:()=>c,ex:()=>l,hv:()=>u,zp:()=>a});var s=i(15941),r=i(76931),o=i(43047),n=i(55855);const l=2.4;function a(e){return(0,r.PN)(e*l)}function h(e){return(0,r.Lz)(e)/l}function p(e,t,i,r){let{color:n,ratio:l}=t,{color:a,ratio:h}=i;if(h===l){const e=1e-6;1===h?l-=e:h+=e}const p=(0,s.qE)((r-l)/(h-l),0,1);(0,o.l)(e,n.toArray(),a.toArray(),p)}function d(e){const t=new Uint8ClampedArray(2048);if(e=e.filter((e=>{let{ratio:t}=e;return t>=0&&t<=1})).sort(((e,t)=>e.ratio-t.ratio)).map((e=>{let{color:t,ratio:i}=e;return{color:t,ratio:Math.max(i,.001)}})),e.length<1)return t;let i=e[0],s=e[0],r=1;const o=(0,n.vt)();for(let n=0;n<512;n++){const l=(n+.5)/512;for(;l>s.ratio&&r<e.length;)i=s,s=e[r++];p(o,i,s,l),t.set(o,4*n)}return t}function u(e,t,i){const s=Math.sqrt(e**2+t**2)/i;return s>1?0:3/(Math.PI*i**2)*(1-s**2)**2}function c(e){return"function"==typeof e?e:e?t=>+t[e]:()=>1}},77725:(e,t,i)=>{i.d(t,{A:()=>_});var s,r=i(35143),o=i(35238),n=i(39356),l=i(45802),a=i(42553),h=i(53084),p=i(46053),d=(i(81806),i(76460),i(28379)),u=i(85842),c=i(17707),y=i(13312),g=i(19902),m=i(44135);const f=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=s=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const i=y.A.fromJSON(t.spatialReference),s=[];for(let o=0;o<e.length;o++){var r;const t=e[o],l=n.A.fromJSON(t),a=null===(r=t.geometry)||void 0===r?void 0:r.spatialReference;null==l.geometry||a||(l.geometry.spatialReference=i);const h=t.aggregateGeometries,p=l.aggregateGeometries;if(h&&null!=p)for(const e in p){const t=p[e],s=h[e],r=null===s||void 0===s?void 0:s.spatialReference;null==t||r||(t.spatialReference=i)}s.push(l)}return s}writeGeometryType(e,t,i,s){if(e)return void f.write(e,t,i,s);const{features:r}=this;if(r)for(const o of r)if(null!=(null===o||void 0===o?void 0:o.geometry))return void f.write(o.geometry.type,t,i,s)}readQueryGeometry(e,t){if(!e)return null;const i=!!e.spatialReference,s=(0,g.rS)(e);return s&&!i&&t.spatialReference&&(s.spatialReference=y.A.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:i}=this;if(i)for(const s of i)if(s&&null!=s.geometry&&s.geometry.spatialReference)return void(t.spatialReference=s.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,h.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let i=0;i<t.features.length;i++){const s=t.features[i];if(s.geometry){const t=null===e||void 0===e?void 0:e[i];s.geometry=(null===t||void 0===t?void 0:t.toJSON())||s.geometry}}return t}quantize(e){const{scale:[t,i],translate:[s,r]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((r-e)/i)));for(let l=0,a=o.length;l<a;l++)(null===n||void 0===n?void 0:n(o[l].geometry))||(o.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){var e,t;const{geometryType:i,features:s,transform:r}=this;if(!r)return this;const{translate:[o,n],scale:[l,a]}=r;let h=null,p=null;if(this.hasZ&&null!=(null===r||void 0===r||null===(e=r.scale)||void 0===e?void 0:e[2])){const{translate:[,,e],scale:[,,t]}=r;h=i=>i*t+e}if(this.hasM&&null!=(null===r||void 0===r||null===(t=r.scale)||void 0===t?void 0:t[3])){const{translate:[,,,e],scale:[,,,t]}=r;p=i=>null==i?i:i*t+e}const d=this._getHydrationFunction(i,(e=>e*l+o),(e=>n-e*a),h,p);for(const{geometry:u}of s)null!=u&&d&&d(u);return this.transform=null,this}_quantizePoints(e,t,i){let s,r;const o=[];for(let n=0,l=e.length;n<l;n++){const l=e[n];if(n>0){const e=t(l[0]),n=i(l[1]);e===s&&n===r||(o.push([e-s,n-r]),s=e,r=n)}else s=t(l[0]),r=i(l[1]),o.push([s,r])}return o.length>0?o:null}_getQuantizationFunction(e,t,i){return"point"===e?e=>(e.x=t(e.x),e.y=i(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,g.Bi)(e)?e.rings:e.paths,r=[];for(let o=0,n=s.length;o<n;o++){const e=s[o],n=this._quantizePoints(e,t,i);n&&r.push(n)}return r.length>0?((0,g.Bi)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,i);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,i,s,r){return"point"===e?e=>{e.x=t(e.x),e.y=i(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,g.Bi)(e)?e.rings:e.paths;let n,l;for(let s=0,r=o.length;s<r;s++){const e=o[s];for(let s=0,r=e.length;s<r;s++){const r=e[s];s>0?(n+=r[0],l+=r[1]):(n=r[0],l=r[1]),r[0]=t(n),r[1]=i(l)}}if(s&&r)for(let t=0,i=o.length;t<i;t++){const e=o[t];for(let t=0,i=e.length;t<i;t++){const i=e[t];i[2]=s(i[2]),i[3]=r(i[3])}}else if(s)for(let t=0,i=o.length;t<i;t++){const e=o[t];for(let t=0,i=e.length;t<i;t++){const i=e[t];i[2]=s(i[2])}}else if(r)for(let t=0,i=o.length;t<i;t++){const e=o[t];for(let t=0,i=e.length;t<i;t++){const i=e[t];i[2]=r(i[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=i(e.ymin),e.xmax=t(e.xmax),e.ymax=i(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),r&&null!=e.mmax&&null!=e.mmin&&(e.mmax=r(e.mmax),e.mmin=r(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let n,l;for(let s=0,r=o.length;s<r;s++){const e=o[s];s>0?(n+=e[0],l+=e[1]):(n=e[0],l=e[1]),e[0]=t(n),e[1]=i(l)}if(s&&r)for(let t=0,i=o.length;t<i;t++){const e=o[t];e[2]=s(e[2]),e[3]=r(e[3])}else if(s)for(let t=0,i=o.length;t<i;t++){const e=o[t];e[2]=s(e[2])}else if(r)for(let t=0,i=o.length;t<i;t++){const e=o[t];e[2]=r(e[2])}}:null}};(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,p.MZ)({type:[n.A],json:{write:!0}})],v.prototype,"features",void 0),(0,r._)([(0,d.w)("features")],v.prototype,"readFeatures",null),(0,r._)([(0,p.MZ)({type:[m.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,r._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],v.prototype,"geometryType",void 0),(0,r._)([(0,c.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({types:o.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,r._)([(0,d.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,r._)([(0,p.MZ)({type:y.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,r._)([(0,c.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,r._)([(0,p.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=s=(0,r._)([(0,u.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v},68528:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(35143),r=i(16868),o=i(94643),n=i(68134),l=(i(76460),i(81806),i(47249),i(50076),i(85842)),a=i(5766),h=i(86616),p=i(77725),d=i(90104),u=i(31394),c=i(45992),y=i(91196);let g=class extends((0,d.e)(y.A)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const i=this.layer;return this.graphicsViews.reverse().flatMap((t=>{const s=this._popupTemplates.get(t),r=t.hitTest(e);for(const e of r)e.layer=i,e.sourceLayer=i,e.popupTemplate=s;return r})).map((t=>({type:"graphic",graphic:t,layer:i,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.addAttachHandles([(0,n.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.featureCollections}),(e=>{this._clear();for(const{popupInfo:t,featureSet:i,layerDefinition:s}of e){const e=p.A.fromJSON(i),n=new o.A(e.features),l=s.drawingInfo,a=t?r.A.fromJSON(t):null,d=(0,h.r)(l.renderer),y=new c.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:n,renderer:d,container:new u.A(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=y,this._popupTemplates.set(y,a),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=d.symbol):this.layer.lineSymbol=d.symbol:this.layer.polygonSymbol=d.symbol,this.graphicsViews.push(y),this.container.addChild(y.container)}}),n.Vh),(0,n.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.polygonSymbol}),(e=>{this._graphicsViewMap.polygon.renderer=new a.A({symbol:e})}),n.Vh),(0,n.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.lineSymbol}),(e=>{this._graphicsViewMap.polyline.renderer=new a.A({symbol:e})}),n.Vh),(0,n.wB)((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.pointSymbol}),(e=>{this._graphicsViewMap.point.renderer=new a.A({symbol:e})}),n.Vh)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};g=(0,s._)([(0,l.$)("esri.views.2d.layers.GeoRSSLayerView2D")],g);const m=g},90104:(e,t,i)=>{i.d(t,{e:()=>S});var s,r=i(35143),o=i(94643),n=i(3975),l=i(50076),a=i(68134),h=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),d=i(68002),u=i(21904),c=i(7464),y=i(97001);let g=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=s=(0,r._)([(0,p.$)("esri.views.layers.support.ClipRect")],g);const m=g;var f=i(47266);let v=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=(0,r._)([(0,p.$)("esri.views.layers.support.Path")],v);const _=v,w=o.A.ofType({key:"type",base:null,typeMap:{rect:m,path:_,geometry:f.A}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new l.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.pc),(0,a.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.pc),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),a.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:w,set(e){const t=(0,n.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},31394:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(61551),r=i(8995),o=i(13692);class n extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,o.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(91967),o=i(54099),n=i(5632),l=i(76460),a=i(30726),h=i(91291),p=i(46053),d=(i(81806),i(47249),i(85842)),u=i(19451);let c=class extends((0,n.sA)((0,h.g)(o.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";l.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,p.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,p.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],c.prototype,"visible",null),(0,s._)([(0,p.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],c);const y=c},97001:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(42553),o=i(46053),n=(i(81806),i(76460),i(47249),i(85842));let l=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,o.MZ)({readOnly:!0})],l.prototype,"version",null),l=(0,s._)([(0,n.$)("esri.views.layers.support.ClipArea")],l);const a=l},47266:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(35143),o=(i(35238),i(46053)),n=(i(81806),i(76460),i(47249),i(85842)),l=i(89189),a=i(19902),h=i(97001),p=i(76797),d=i(65215);const u={base:l.A,key:"type",typeMap:{extent:p.A,polygon:d.A}};let c=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,o.MZ)({types:u,json:{read:a.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,n.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=9351.1b995216.chunk.js.map