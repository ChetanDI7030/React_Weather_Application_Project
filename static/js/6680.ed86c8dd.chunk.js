"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[6680],{10290:(e,t,n)=>{n.d(t,{u:()=>s});var o=n(31633),r=n(80963);function i(e,t,n){if(null==e.hasM||e.hasZ)for(const o of t)for(const e of o)e.length>2&&(e[2]*=n)}function s(e,t,n){if(!e&&!t||!n)return;const r=(0,o.G9)(n);l(e,n,r),l(t,n,r)}function l(e,t,n){if(e)for(const o of e)a(o.geometry,t,n)}function a(e,t,n){if(null===e||void 0===e||!e.spatialReference||(0,r.aI)(e.spatialReference,t))return;const s=(0,o.G9)(e.spatialReference)/n;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)i(e,e.rings,s);else if("paths"in e)i(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const o of e.points)o.length>2&&(o[2]*=s)}},57831:(e,t,n)=>{n.d(t,{q:()=>r});var o=n(86729);function r(e,t,n){if(null===n||void 0===n||!n.features||!n.hasZ)return;const r=(0,o.N)(n.geometryType,t,e.outSpatialReference);if(null!=r)for(const o of n.features)r(o.geometry)}},77725:(e,t,n)=>{n.d(t,{A:()=>x});var o,r=n(35143),i=n(35238),s=n(39356),l=n(45802),a=n(42553),u=n(53084),f=n(46053),p=(n(81806),n(76460),n(28379)),y=n(85842),c=n(17707),h=n(13312),m=n(19902),d=n(44135);const g=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=o=class extends a.oY{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const n=h.A.fromJSON(t.spatialReference),o=[];for(let i=0;i<e.length;i++){var r;const t=e[i],l=s.A.fromJSON(t),a=null===(r=t.geometry)||void 0===r?void 0:r.spatialReference;null==l.geometry||a||(l.geometry.spatialReference=n);const u=t.aggregateGeometries,f=l.aggregateGeometries;if(u&&null!=f)for(const e in f){const t=f[e],o=u[e],r=null===o||void 0===o?void 0:o.spatialReference;null==t||r||(t.spatialReference=n)}o.push(l)}return o}writeGeometryType(e,t,n,o){if(e)return void g.write(e,t,n,o);const{features:r}=this;if(r)for(const i of r)if(null!=(null===i||void 0===i?void 0:i.geometry))return void g.write(i.geometry.type,t,n,o)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,o=(0,m.rS)(e);return o&&!n&&t.spatialReference&&(o.spatialReference=h.A.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const o of n)if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,u.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const o=t.features[n];if(o.geometry){const t=null===e||void 0===e?void 0:e[n];o.geometry=(null===t||void 0===t?void 0:t.toJSON())||o.geometry}}return t}quantize(e){const{scale:[t,n],translate:[o,r]}=e,i=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((r-e)/n)));for(let l=0,a=i.length;l<a;l++)(null===s||void 0===s?void 0:s(i[l].geometry))||(i.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){var e,t;const{geometryType:n,features:o,transform:r}=this;if(!r)return this;const{translate:[i,s],scale:[l,a]}=r;let u=null,f=null;if(this.hasZ&&null!=(null===r||void 0===r||null===(e=r.scale)||void 0===e?void 0:e[2])){const{translate:[,,e],scale:[,,t]}=r;u=n=>n*t+e}if(this.hasM&&null!=(null===r||void 0===r||null===(t=r.scale)||void 0===t?void 0:t[3])){const{translate:[,,,e],scale:[,,,t]}=r;f=n=>null==n?n:n*t+e}const p=this._getHydrationFunction(n,(e=>e*l+i),(e=>s-e*a),u,f);for(const{geometry:y}of o)null!=y&&p&&p(y);return this.transform=null,this}_quantizePoints(e,t,n){let o,r;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=n(l[1]);e===o&&s===r||(i.push([e-o,s-r]),o=e,r=s)}else o=t(l[0]),r=n(l[1]),i.push([o,r])}return i.length>0?i:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,m.Bi)(e)?e.rings:e.paths,r=[];for(let i=0,s=o.length;i<s;i++){const e=o[i],s=this._quantizePoints(e,t,n);s&&r.push(s)}return r.length>0?((0,m.Bi)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,n);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n,o,r){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const i=(0,m.Bi)(e)?e.rings:e.paths;let s,l;for(let o=0,r=i.length;o<r;o++){const e=i[o];for(let o=0,r=e.length;o<r;o++){const r=e[o];o>0?(s+=r[0],l+=r[1]):(s=r[0],l=r[1]),r[0]=t(s),r[1]=n(l)}}if(o&&r)for(let t=0,n=i.length;t<n;t++){const e=i[t];for(let t=0,n=e.length;t<n;t++){const n=e[t];n[2]=o(n[2]),n[3]=r(n[3])}}else if(o)for(let t=0,n=i.length;t<n;t++){const e=i[t];for(let t=0,n=e.length;t<n;t++){const n=e[t];n[2]=o(n[2])}}else if(r)for(let t=0,n=i.length;t<n;t++){const e=i[t];for(let t=0,n=e.length;t<n;t++){const n=e[t];n[2]=r(n[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),r&&null!=e.mmax&&null!=e.mmin&&(e.mmax=r(e.mmax),e.mmin=r(e.mmin))}:"multipoint"===e?e=>{const i=e.points;let s,l;for(let o=0,r=i.length;o<r;o++){const e=i[o];o>0?(s+=e[0],l+=e[1]):(s=e[0],l=e[1]),e[0]=t(s),e[1]=n(l)}if(o&&r)for(let t=0,n=i.length;t<n;t++){const e=i[t];e[2]=o(e[2]),e[3]=r(e[3])}else if(o)for(let t=0,n=i.length;t<n;t++){const e=i[t];e[2]=o(e[2])}else if(r)for(let t=0,n=i.length;t<n;t++){const e=i[t];e[2]=r(e[2])}}:null}};(0,r._)([(0,f.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,f.MZ)({type:[s.A],json:{write:!0}})],v.prototype,"features",void 0),(0,r._)([(0,p.w)("features")],v.prototype,"readFeatures",null),(0,r._)([(0,f.MZ)({type:[d.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,r._)([(0,f.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,r._)([(0,c.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,r._)([(0,f.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,r._)([(0,f.MZ)({types:i.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,r._)([(0,p.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,r._)([(0,f.MZ)({type:h.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,r._)([(0,c.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,r._)([(0,f.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=o=(0,r._)([(0,y.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const x=v}}]);
//# sourceMappingURL=6680.ed86c8dd.chunk.js.map