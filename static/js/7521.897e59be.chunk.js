"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[7521],{45136:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>s,c:()=>a,d:()=>o,e:()=>l,f:()=>f,n:()=>d,s:()=>c,t:()=>u});n(81806);var r=n(80066);function o(e,t,n){i(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function i(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(e.length/r!==Math.ceil(t.length/o))return e;const i=e.length/r,a=n[0],s=n[1],f=n[2],c=n[4],u=n[5],l=n[6],d=n[8],h=n[9],y=n[10],m=n[12],p=n[13],b=n[14];let g=0,M=0;for(let w=0;w<i;w++){const n=t[g],i=t[g+1],w=t[g+2];e[M]=a*n+c*i+d*w+m,e[M+1]=s*n+u*i+h*w+p,e[M+2]=f*n+l*i+y*w+b,g+=o,M+=r}return e}function a(e,t,n){s(e.typedBuffer,t.typedBuffer,n,e.typedBufferStride,t.typedBufferStride)}function s(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(e.length/o!==Math.ceil(t.length/i))return void(0,r.j)().error("source and destination buffers need to have the same number of elements");const a=e.length/o,s=n[0],f=n[1],c=n[2],u=n[3],l=n[4],d=n[5],h=n[6],y=n[7],m=n[8];let p=0,b=0;for(let r=0;r<a;r++){const n=t[p],r=t[p+1],a=t[p+2];e[b]=s*n+u*r+h*a,e[b+1]=f*n+l*r+y*a,e[b+2]=c*n+d*r+m*a,p+=i,b+=o}}function f(e,t,n){c(e.typedBuffer,t,n,e.typedBufferStride)}function c(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const o=Math.min(e.length/r,t.count),i=t.typedBuffer,a=t.typedBufferStride;let s=0,f=0;for(let c=0;c<o;c++)e[f]=n*i[s],e[f+1]=n*i[s+1],e[f+2]=n*i[s+2],s+=a,f+=r}function u(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const i=e.length/r;if(i!==Math.ceil(t.length/o))return e;let a=0,s=0;for(let f=0;f<i;f++)e[s]=t[a]+n[0],e[s+1]=t[a+1]+n[1],e[s+2]=t[a+2]+n[2],a+=o,s+=r;return e}function l(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const o=Math.min(e.length/n,t.length/r);let i=0,a=0;for(let s=0;s<o;s++){const o=t[i],s=t[i+1],f=t[i+2],c=o*o+s*s+f*f;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*f}i+=r,a+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:d,normalizeView:l,scale:c,scaleView:f,shiftRight:function(e,t,n){const r=Math.min(e.count,t.count),o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let f=0,c=0;for(let u=0;u<r;u++)o[c]=a[f]>>n,o[c+1]=a[f+1]>>n,o[c+2]=a[f+2]>>n,f+=s,c+=i},transformMat3:s,transformMat3View:a,transformMat4:i,transformMat4View:o,translate:u},Symbol.toStringTag,{value:"Module"}))},43047:(e,t,n)=>{n.d(t,{a:()=>M,b:()=>u,c:()=>o,e:()=>w,f:()=>a,g:()=>p,i:()=>h,j:()=>y,l:()=>b,n:()=>m,s:()=>i,t:()=>g});var r=n(53494);function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,n,r,o){return e[0]=t,e[1]=n,e[2]=r,e[3]=o,e}function a(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function s(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function f(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function c(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function u(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function l(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(n*n+r*r+o*o+i*i)}function d(e,t){const n=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return n*n+r*r+o*o+i*i}function h(e){const t=e[0],n=e[1],r=e[2],o=e[3];return Math.sqrt(t*t+n*n+r*r+o*o)}function y(e){const t=e[0],n=e[1],r=e[2],o=e[3];return t*t+n*n+r*r+o*o}function m(e,t){const n=t[0],r=t[1],o=t[2],i=t[3];let a=n*n+r*r+o*o+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=n*a,e[1]=r*a,e[2]=o*a,e[3]=i*a),e}function p(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function b(e,t,n,r){const o=t[0],i=t[1],a=t[2],s=t[3];return e[0]=o+r*(n[0]-o),e[1]=i+r*(n[1]-i),e[2]=a+r*(n[2]-a),e[3]=s+r*(n[3]-s),e}function g(e,t,n){const r=t[0],o=t[1],i=t[2],a=t[3];return e[0]=n[0]*r+n[4]*o+n[8]*i+n[12]*a,e[1]=n[1]*r+n[5]*o+n[9]*i+n[13]*a,e[2]=n[2]*r+n[6]*o+n[10]*i+n[14]*a,e[3]=n[3]*r+n[7]*o+n[11]*i+n[15]*a,e}function M(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function w(e,t){const n=e[0],o=e[1],i=e[2],a=e[3],s=t[0],f=t[1],c=t[2],u=t[3],l=(0,r.FD)();return Math.abs(n-s)<=l*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(o-f)<=l*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(i-c)<=l*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(a-u)<=l*Math.max(1,Math.abs(a),Math.abs(u))}const v=s,A=f,S=c,_=l,E=d,x=h,O=y;Object.freeze(Object.defineProperty({__proto__:null,add:a,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:o,copyVec3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},dist:_,distance:l,div:S,divide:c,dot:p,equals:w,exactEquals:M,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:x,length:h,lerp:b,max:function(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e},min:function(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e},mul:A,multiply:f,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:m,random:function(e,t){const n=r.Ov;let o,i,a,s,f,c;t=t||1;do{o=2*n()-1,i=2*n()-1,f=o*o+i*i}while(f>=1);do{a=2*n()-1,s=2*n()-1,c=a*a+s*s}while(c>=1);const u=Math.sqrt((1-f)/c);return e[0]=t*o,e[1]=t*i,e[2]=t*a*u,e[3]=t*s*u,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:u,scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e},set:i,sqrDist:E,sqrLen:O,squaredDistance:d,squaredLength:y,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:v,subtract:s,transformMat4:g,transformQuat:function(e,t,n){const r=t[0],o=t[1],i=t[2],a=n[0],s=n[1],f=n[2],c=n[3],u=c*r+s*i-f*o,l=c*o+f*r-a*i,d=c*i+a*o-s*r,h=-a*r-s*o-f*i;return e[0]=u*c+h*-a+l*-f-d*-s,e[1]=l*c+h*-s+d*-a-u*-f,e[2]=d*c+h*-f+u*-s-l*-a,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},55855:(e,t,n)=>{function r(){return[0,0,0,0]}function o(e,t,n,r){return[e,t,n,r]}function i(){return[0,0,0,0]}function a(){return o(1,1,1,1)}function s(){return o(1,0,0,0)}function f(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function u(){return o(0,0,0,1)}n.d(t,{fA:()=>o,vt:()=>r});const l=[0,0,0,0],d=a(),h=s(),y=f(),m=c(),p=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_W:p,UNIT_X:h,UNIT_Y:y,UNIT_Z:m,ZEROS:l,clone:function(e){return[e[0],e[1],e[2],e[3]]},create:r,createView:function(e,t){return new Float64Array(e,t,4)},fromArray:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0,0];const n=Math.min(4,e.length);for(let r=0;r<n;++r)t[r]=e[r];return t},fromValues:o,ones:a,unitW:u,unitX:s,unitY:f,unitZ:c,zeros:i},Symbol.toStringTag,{value:"Module"}))},44815:(e,t,n)=>{n.d(t,{Ns:()=>f,jh:()=>o,l5:()=>a,s:()=>s,xm:()=>i});var r=n(78393);function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=r.y9?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function i(e){return((0,r.cy)(e)?e.length:e.byteLength/8)<=r.y9?Array.from(e):new Float64Array(e)}function a(e,t,n){return Array.isArray(e)?e.slice(t,t+n):e.subarray(t,t+n)}function s(e,t){for(let n=0;n<t.length;++n)e[n]=t[n];return e}function f(e){return Array.isArray(e)?new Float64Array(e):e}},14894:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(35143),o=n(69098),i=n(42553),a=n(46053),s=(n(81806),n(76460),n(47249),n(6409)),f=n(85842);let c=class extends((0,o.O)(i.oY)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};(0,r._)([(0,s.e)({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],c.prototype,"origin",void 0),c=(0,r._)([(0,f.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const u=c},5845:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(35143),o=n(69098),i=n(42553),a=n(46053),s=(n(81806),n(76460),n(47249),n(6409)),f=n(85842),c=n(9392);let u=class extends((0,o.O)(i.oY)){constructor(e){super(e),this.type="local",this.origin=(0,c.vt)()}};(0,r._)([(0,s.e)({local:"local"},{readOnly:!0})],u.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),u=(0,r._)([(0,f.$)("esri.geometry.support.MeshLocalVertexSpace")],u);const l=u},80066:(e,t,n)=>{n.d(t,{j:()=>o});var r=n(76460);const o=()=>r.A.getLogger("esri.views.3d.support.buffer.math")},8947:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>E,dracoDecompressPointCloudData:()=>M,filterObbsForModifications:()=>w,filterObbsForModificationsSync:()=>N,initialize:()=>F,interpretObbModificationResults:()=>L,process:()=>g,project:()=>S,setLegacySchema:()=>A,setModifications:()=>v,setModificationsSync:()=>B,test:()=>T,transformNormals:()=>_});var r,o,i=n(13312),a=n(44815),s=n(14894),f=n(5845),c=n(45136);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}));var u=n(28899);function l(e){return(0,u.s)("esri/libs/i3s/".concat(e))}let d;var h,y,m,p,b;n(55855),n(93582),n(72737);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(h||(h={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(y||(y={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(m||(m={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(p||(p={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(b||(b={}));async function g(e){O=await R();const t=[e.geometryBuffer];return{result:I(O,e,t),transferList:t}}async function M(e){var t;O=await R();const n=[e.geometryBuffer],{geometryBuffer:r}=e,o=r.byteLength,i=O._malloc(o),a=new Uint8Array(O.HEAPU8.buffer,i,o);a.set(new Uint8Array(r));const s=O.dracoDecompressPointCloudData(i,a.byteLength);if(O._free(i),s.error.length>0)throw new Error("i3s.wasm: ".concat(s.error));const f=(null===(t=s.featureIds)||void 0===t?void 0:t.length)>0?s.featureIds.slice():null,c=s.positions.slice();return f&&n.push(f.buffer),n.push(c.buffer),{result:{positions:c,featureIds:f},transferList:n}}async function w(e){await R(),N(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function v(e){await R(),B(e)}async function A(e){O=await R(),O.setLegacySchema(e.context,e.jsonSchema)}async function S(e){const{localMatrix:t,origin:r,positions:o,vertexSpace:c,localMode:u}=e,l=i.A.fromJSON(e.inSpatialReference),d=i.A.fromJSON(e.outSpatialReference);let h;if("georeferenced"===c.type&&null==c.origin){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([Promise.resolve().then(n.bind(n,45308)),Promise.resolve().then(n.bind(n,26346))]);await t(l,d),h=new Float64Array(o.length),e(o,l,0,h,d,0,h.length/3)}else{const e="georeferenced"===c.type?s.A.fromJSON(c):f.A.fromJSON(c),{project:r}=await Promise.all([n.e(8105),n.e(8620)]).then(n.bind(n,48620));h=(0,a.Ns)(r({positions:o,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:l,outSpatialReference:d,localMode:u}))}const y=h.length,[m,p,b]=r;for(let n=0;n<y;n+=3)h[n]-=m,h[n+1]-=p,h[n+2]-=b;return{result:{projected:h,original:o},transferList:[h.buffer,o.buffer]}}async function _(e){let{normalMatrix:t,normals:n}=e;const r=new Float32Array(n.length);return(0,c.b)(r,n,t),(0,c.n)(r,r),{result:{transformed:r,original:n},transferList:[r.buffer,n.buffer]}}function E(e){U(e)}let x,O;function B(e){if(!O)return;const t=e.modifications,n=O._malloc(8*t.length),r=new Float64Array(O.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];O.setModifications(e.context,n,t.length,e.isGeodetic),O._free(n)}function I(e,t,n){const{context:o,localOrigin:i,globalTrafo:a,mbs:s,obbData:f,elevationOffset:c,geometryBuffer:u,geometryDescriptor:l,indexToVertexProjector:d,vertexToRenderProjector:h}=t,y=e._malloc(u.byteLength),m=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(e.HEAPU8.buffer,y,u.byteLength);p.set(new Uint8Array(u));const b=new Float64Array(e.HEAPU8.buffer,m,33);P(b,i);let g=b.byteOffset+3*b.BYTES_PER_ELEMENT,M=new Float64Array(b.buffer,g);P(M,a),g+=16*b.BYTES_PER_ELEMENT,M=new Float64Array(b.buffer,g),P(M,s),g+=4*b.BYTES_PER_ELEMENT,f&&(M=new Float64Array(b.buffer,g),P(M,f));const w=l,v={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},A=e.process(o,!!t.obbData,y,p.byteLength,w,v,m,c,d,h,t.normalReferenceFrame);if(e._free(m),e._free(y),A.error.length>0)throw new Error("i3s.wasm: ".concat(A.error));if(A.discarded)return null;const S=A.componentOffsets.length>0?A.componentOffsets.slice():null,_=A.featureIds.length>0?A.featureIds.slice():null,E=A.anchorIds.length>0?Array.from(A.anchorIds):null,x=A.anchors.length>0?Array.from(A.anchors):null,O=A.interleavedVertedData.slice().buffer,B=A.indicesType===r.Int16?new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2).slice():new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4).slice(),I=A.positions.slice(),L=A.positionIndicesType===r.Int16?new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2).slice():new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4).slice(),N={layout:t.layouts[0],interleavedVertexData:O,indices:B,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:I,indices:L}};return _&&n.push(_.buffer),S&&n.push(S.buffer),n.push(O),n.push(B.buffer),n.push(I.buffer),n.push(L.buffer),{componentOffsets:S,featureIds:_,anchorIds:E,anchors:x,transformedGeometry:N,obb:A.obb}}function L(e){return 0===e?y.Unmodified:1===e?y.PotentiallyModified:2===e?y.Culled:y.Unknown}function N(e){if(!O)return;const{context:t,buffer:n}=e,r=O._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(O.HEAPU8.buffer,r,o),a=new Float64Array(n);i.set(a),O.filterOBBs(t,r,o),a.set(i),O._free(r)}function U(e){O&&0===O.destroy(e)&&(O=null)}function P(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function F(){O||await R()}function R(){return O?Promise.resolve(O):(x||(x=(d||(d=new Promise((e=>n.e(7258).then(n.bind(n,77258)).then((e=>e.i)).then((t=>{let{default:n}=t;const r=n({locateFile:l,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),d).then((e=>(O=e,x=null,O)))),x)}const T={transform:(e,t)=>O&&I(O,e,t),destroy:U}}}]);
//# sourceMappingURL=7521.897e59be.chunk.js.map