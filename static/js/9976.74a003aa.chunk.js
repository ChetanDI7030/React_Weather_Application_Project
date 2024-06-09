"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[9976],{45136:(t,e,n)=>{n.d(e,{a:()=>s,b:()=>a,c:()=>o,d:()=>r,e:()=>c,f:()=>u,n:()=>f,s:()=>h,t:()=>l});n(81806);var i=n(80066);function r(t,e,n){s(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function s(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(t.length/i!==Math.ceil(e.length/r))return t;const s=t.length/i,o=n[0],a=n[1],u=n[2],h=n[4],l=n[5],c=n[6],f=n[8],d=n[9],g=n[10],m=n[12],v=n[13],y=n[14];let p=0,A=0;for(let _=0;_<s;_++){const n=e[p],s=e[p+1],_=e[p+2];t[A]=o*n+h*s+f*_+m,t[A+1]=a*n+l*s+d*_+v,t[A+2]=u*n+c*s+g*_+y,p+=r,A+=i}return t}function o(t,e,n){a(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function a(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/s))return void(0,i.j)().error("source and destination buffers need to have the same number of elements");const o=t.length/r,a=n[0],u=n[1],h=n[2],l=n[3],c=n[4],f=n[5],d=n[6],g=n[7],m=n[8];let v=0,y=0;for(let i=0;i<o;i++){const n=e[v],i=e[v+1],o=e[v+2];t[y]=a*n+l*i+d*o,t[y+1]=u*n+c*i+g*o,t[y+2]=h*n+f*i+m*o,v+=s,y+=r}}function u(t,e,n){h(t.typedBuffer,e,n,t.typedBufferStride)}function h(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const r=Math.min(t.length/i,e.count),s=e.typedBuffer,o=e.typedBufferStride;let a=0,u=0;for(let h=0;h<r;h++)t[u]=n*s[a],t[u+1]=n*s[a+1],t[u+2]=n*s[a+2],a+=o,u+=i}function l(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;const s=t.length/i;if(s!==Math.ceil(e.length/r))return t;let o=0,a=0;for(let u=0;u<s;u++)t[a]=e[o]+n[0],t[a+1]=e[o+1]+n[1],t[a+2]=e[o+2]+n[2],o+=r,a+=i;return t}function c(t,e){f(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const r=Math.min(t.length/n,e.length/i);let s=0,o=0;for(let a=0;a<r;a++){const r=e[s],a=e[s+1],u=e[s+2],h=r*r+a*a+u*u;if(h>0){const e=1/Math.sqrt(h);t[o]=e*r,t[o+1]=e*a,t[o+2]=e*u}s+=i,o+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:c,scale:h,scaleView:u,shiftRight:function(t,e,n){const i=Math.min(t.count,e.count),r=t.typedBuffer,s=t.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride;let u=0,h=0;for(let l=0;l<i;l++)r[h]=o[u]>>n,r[h+1]=o[u+1]>>n,r[h+2]=o[u+2]>>n,u+=a,h+=s},transformMat3:a,transformMat3View:o,transformMat4:s,transformMat4View:r,translate:l},Symbol.toStringTag,{value:"Module"}))},38496:(t,e,n)=>{n.d(e,{Dg:()=>r,my:()=>s,tM:()=>h});var i=n(78393);function r(t){if((0,i.cy)(t)){if(t.length<i.y9)return t}else if(t.length<i.y9)return Array.from(t);let e=!0,n=!0;return t.some(((t,i)=>(e=e&&0===t,n=n&&t===i,!e&&!n))),e?function(t){if(1===t)return a;if(t<i.y9)return new Array(t).fill(0);if(t>l.length){const e=Math.max(2*l.length,t);l=new Uint8Array(e)}return new Uint8Array(l.buffer,0,t)}(t.length):n?h(t.length):(0,i.cy)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(t){let e=!0;for(const n of t){if(n>=65536)return(0,i.cy)(t)?new Uint32Array(t):t;n>=256&&(e=!1)}return e?new Uint8Array(t):new Uint16Array(t)}(t):t}function s(t){return t<=i.y9?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let o=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const a=[0],u=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function h(t){if(1===t)return a;if(t<i.y9)return Array.from(new Uint16Array(u.buffer,0,t));if(t<u.length)return new Uint16Array(u.buffer,0,t);if(t>o.length){const e=Math.max(2*o.length,t);o=new Uint32Array(e);for(let t=0;t<o.length;t++)o[t]=t}return new Uint32Array(o.buffer,0,t)}let l=new Uint8Array(65536)},80066:(t,e,n)=>{n.d(e,{j:()=>r});var i=n(76460);const r=()=>i.A.getLogger("esri.views.3d.support.buffer.math")},44230:(t,e,n)=>{n.d(e,{Cr:()=>h,_I:()=>l,vt:()=>u});var i=n(15941),r=n(97467),s=n(20664),o=n(9392),a=n(75762);function u(t){return t?{origin:(0,o.o8)(t.origin),vector:(0,o.o8)(t.vector)}:{origin:(0,o.vt)(),vector:(0,o.vt)()}}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,s.c)(n.origin,t),(0,s.f)(n.vector,e,t),n}function l(t,e,n){return function(t,e,n,r,o){const{vector:u,origin:h}=t,l=(0,s.f)(a.rq.get(),e,h),c=(0,s.k)(u,l)/(0,s.p)(u);return(0,s.h)(o,u,(0,i.qE)(c,n,r)),(0,s.g)(o,o,t.origin)}(t,e,0,1,n)}(0,o.vt)(),(0,o.vt)(),new r.I((()=>u()))},73146:(t,e,n)=>{n.d(e,{J:()=>r});var i=n(90632);class r{constructor(){this.id=(0,i.c)()}}},87634:(t,e,n)=>{var i;n.d(e,{X:()=>i}),function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"}(i||(i={}))},99813:(t,e,n)=>{n.d(e,{V:()=>P});var i=n(13191),r=n(20664),s=n(38496),o=n(78393);function a(t){if(t.length<o.y9)return Array.from(t);if((0,o.cy)(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return(0,o.jq)(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}var u=n(83490),h=n(30015),l=n(9392),c=n(86994);class f{constructor(t,e,n){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.position=n,this._children=void 0,(0,c.vA)(t.length>=1),(0,c.vA)(3===n.size||4===n.size);const{data:i,size:s,indices:o}=n;(0,c.vA)(o.length%this._numIndexPerPrimitive==0),(0,c.vA)(o.length>=t.length*this._numIndexPerPrimitive);const a=t.length;let u=s*o[this._numIndexPerPrimitive*t[0]];d.clear(),d.push(u);const h=(0,l.fA)(i[u],i[u+1],i[u+2]),f=(0,l.o8)(h);for(let r=0;r<a;++r){const e=this._numIndexPerPrimitive*t[r];for(let t=0;t<this._numIndexPerPrimitive;++t){u=s*o[e+t],d.push(u);let n=i[u];h[0]=Math.min(n,h[0]),f[0]=Math.max(n,f[0]),n=i[u+1],h[1]=Math.min(n,h[1]),f[1]=Math.max(n,f[1]),n=i[u+2],h[2]=Math.min(n,h[2]),f[2]=Math.max(n,f[2])}}this.bbMin=h,this.bbMax=f;const g=(0,r.m)((0,l.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(f[0]-h[0],f[1]-h[1]),f[2]-h[2]);let m=this.radius*this.radius;for(let r=0;r<d.length;++r){u=d.at(r);const t=i[u]-g[0],e=i[u+1]-g[1],n=i[u+2]-g[2],s=t*t+e*e+n*n;if(s<=m)continue;const o=Math.sqrt(s),a=.5*(o-this.radius);this.radius=this.radius+a,m=this.radius*this.radius;const h=a/o;g[0]+=t*h,g[1]+=e*h,g[2]+=n*h}this.center=g,d.clear()}getChildren(){if(this._children||(0,r.a)(this.bbMin,this.bbMax)<=1)return this._children;const t=(0,r.m)((0,l.vt)(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),i=new Array(8);for(let r=0;r<8;++r)i[r]=0;const{data:s,size:o,indices:a}=this.position;for(let r=0;r<e;++r){let e=0;const u=this._numIndexPerPrimitive*this.primitiveIndices[r];let h=o*a[u],l=s[h],c=s[h+1],f=s[h+2];for(let t=1;t<this._numIndexPerPrimitive;++t){h=o*a[u+t];const e=s[h],n=s[h+1],i=s[h+2];e<l&&(l=e),n<c&&(c=n),i<f&&(f=i)}l<t[0]&&(e|=1),c<t[1]&&(e|=2),f<t[2]&&(e|=4),n[r]=e,++i[e]}let u=0;for(let r=0;r<8;++r)i[r]>0&&++u;if(u<2)return;const h=new Array(8);for(let r=0;r<8;++r)h[r]=i[r]>0?new Uint32Array(i[r]):void 0;for(let r=0;r<8;++r)i[r]=0;for(let r=0;r<e;++r){const t=n[r];h[t][i[t]++]=this.primitiveIndices[r]}this._children=new Array;for(let r=0;r<8;++r)void 0!==h[r]&&this._children.push(new f(h[r],this._numIndexPerPrimitive,this.position));return this._children}static prune(){d.prune()}}const d=new h.A({deallocator:null});var g=n(73146),m=n(87634),v=n(97467),y=n(44230);n(75762);function p(t){return t?{p0:(0,l.o8)(t.p0),p1:(0,l.o8)(t.p1),p2:(0,l.o8)(t.p2)}:{p0:(0,l.vt)(),p1:(0,l.vt)(),p2:(0,l.vt)()}}function A(t,e,n){return(0,r.f)(_,e,t),(0,r.f)(b,n,t),.5*(0,r.l)((0,r.b)(_,_,b))}new v.I(y.vt),new v.I((()=>p()));const _=(0,l.vt)(),b=(0,l.vt)();const M=(0,l.vt)(),I=(0,l.vt)(),O=(0,l.vt)(),w=(0,l.vt)();var E=n(90632);class x{constructor(t){this.channel=t,this.id=(0,E.c)()}}var B=n(66470);n(99643);(0,l.vt)(),new Float32Array(6);class P extends g.J{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m.X.Mesh,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1;super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,u]of e)this._attributes.set(a,{...u,indices:(0,s.Dg)(u.indices)}),a===B.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=new P(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,n)=>{t.exclusive=!1,e._attributes.set(n,t)})),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get attributes(){return this._attributes}getMutableAttribute(t){let e=this._attributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:a(e.data)},this._attributes.set(t,e)),e}setAttributeData(t,e){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:e})}get indexCount(){var t;const e=this._attributes.values().next().value.indices;return null!==(t=null===e||void 0===e?void 0:e.length)&&void 0!==t?t:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===m.X.Mesh?this._computeAttachmentOriginTriangles(t):this.type===m.X.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,r.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0),(0,r.s)(w,0,0,0);let o=0,a=0;for(let u=0;u<s.length-2;u+=3){const t=s[u]*n,h=s[u+1]*n,l=s[u+2]*n;(0,r.s)(M,i[t],i[t+1],i[t+2]),(0,r.s)(I,i[h],i[h+1],i[h+2]),(0,r.s)(O,i[l],i[l+1],i[l+2]);const c=A(M,I,O);c?((0,r.g)(M,M,I),(0,r.g)(M,M,O),(0,r.h)(M,M,1/3*c),(0,r.g)(e,e,M),o+=c):((0,r.g)(w,w,M),(0,r.g)(w,w,I),(0,r.g)(w,w,O),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,r.h)(e,e,1/o),!0):0!==a&&((0,r.h)(e,w,1/a),!0))}(this.attributes.get(B.r.POSITION),t)}_computeAttachmentOriginLines(t){const e=this.attributes.get(B.r.POSITION);return function(t,e,n){if(!t)return!1;(0,r.s)(n,0,0,0),(0,r.s)(w,0,0,0);let i=0,s=0;const{size:o,data:a,indices:u}=t,h=u.length-1,l=h+(e?2:0);for(let c=0;c<l;c+=2){const t=c<h?c+1:0,e=u[c<h?c:h]*o,l=u[t]*o;M[0]=a[e],M[1]=a[e+1],M[2]=a[e+2],I[0]=a[l],I[1]=a[l+1],I[2]=a[l+2],(0,r.h)(M,(0,r.g)(M,M,I),.5);const f=(0,r.o)(M,I);f>0?((0,r.g)(n,n,(0,r.h)(M,M,f)),i+=f):0===i&&((0,r.g)(w,w,M),s++)}return 0!==i?((0,r.h)(n,n,1/i),!0):0!==s&&((0,r.h)(n,w,1/s),!0)}(e,function(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}(this.material.parameters,e),t)}_computeAttachmentOriginPoints(t){return function(t,e){if(!t)return!1;const{size:n,data:i,indices:s}=t;(0,r.s)(e,0,0,0);let o=-1,a=0;for(let r=0;r<s.length;r++){const t=s[r]*n;o!==t&&(e[0]+=i[t],e[1]+=i[t+1],e[2]+=i[t+2],a++),o=t}return a>1&&(0,r.h)(e,e,1/a),a>0}(this.attributes.get(B.r.POSITION),t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(B.r.POSITION);if(!t||0===t.indices.length)return null;const e=this.type===m.X.Mesh?3:1;(0,c.vA)(t.indices.length%e==0,"Indexing error: "+t.indices.length+" not divisible by "+e);const n=(0,s.tM)(t.indices.length/e);return new f(n,e,t)}get transformation(){var t;return null!==(t=this._transformation)&&void 0!==t?t:i.zK}set transformation(t){this._transformation=t&&t!==i.zK?(0,i.o8)(t):null}addHighlight(){const t=new x(u.Mg.Highlight);return this.highlights=function(t,e){return null==t&&(t=[]),t.push(e),t}(this.highlights,t),t}removeHighlight(t){this.highlights=function(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}(this.highlights,t)}}},86994:(t,e,n)=>{n.d(e,{O_:()=>s,vA:()=>r});n(72745),n(43047);(0,n(55855).vt)();class i{constructor(t){this.message=t}toString(){return"AssertException: ".concat(this.message)}}function r(t,e){if(!t){e=e||"Assertion";const t=new Error(e).stack;throw new i("".concat(e," at ").concat(t))}}function s(t,e,n,i){let r,s=(n[0]-t[0])/e[0],o=(i[0]-t[0])/e[0];s>o&&(r=s,s=o,o=r);let a=(n[1]-t[1])/e[1],u=(i[1]-t[1])/e[1];if(a>u&&(r=a,a=u,u=r),s>u||a>o)return!1;a>s&&(s=a),u<o&&(o=u);let h=(n[2]-t[2])/e[2],l=(i[2]-t[2])/e[2];return h>l&&(r=h,h=l,l=r),!(s>l||h>o)&&(l<o&&(o=l),!(o<0))}},83490:(t,e,n)=>{var i,r,s,o,a,u,h,l,c;n.d(e,{Am:()=>o,ID:()=>l,JS:()=>c,Mg:()=>u,dd:()=>a,it:()=>r,s2:()=>i,sf:()=>h}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(i||(i={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(r||(r={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(s||(s={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(o||(o={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(a||(a={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(u||(u={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(h||(h={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(l||(l={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(c||(c={}))},99643:(t,e,n)=>{function i(t,e,n){for(let i=0;i<n;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function r(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],e[i]=o[0];return e}function s(t,e){const n=t.length;for(let i=0;i<n;++i)o[0]=t[i],o[1]=t[i]-o[0],e[i]=o[1];return e}n.d(e,{Zo:()=>r,jA:()=>s,jS:()=>i});const o=new Float32Array(2)}}]);
//# sourceMappingURL=9976.74a003aa.chunk.js.map