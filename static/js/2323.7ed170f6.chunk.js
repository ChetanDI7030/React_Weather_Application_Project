"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[2323],{53521:(e,t,i)=>{i.d(t,{q:()=>r});var s=i(79369);class r{constructor(e,t){this._storage=new s.F,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._storage.put(this,e,t,i,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},79369:(e,t,i)=>{i.d(t,{F:()=>a,Mn:()=>o});var s=i(30015);var r,n;(n=r||(r={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";class o{constructor(e,t,i){this.name=e,this._storage=t,this.id=l+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(e){return this._storage.getSize(this,e)}resetHitRate(){this._hit=this._miss=0}put(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this,e,t,i,s)}pop(e){const t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}get(e){const t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}peek(e){return this._storage.peek(this,e)}updateSize(e,t,i){this._storage.updateSize(this,e,t,i)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class a{get size(){return this._size}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new s.A,this._users=new s.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){var i;const s=this._db.get(e.id+t);return null!==(i=null===s||void 0===s?void 0:s.size)&&void 0!==i?i:0}put(e,t,i,s,n){t=e.id+t;const o=this._db.get(t);if(o&&(this._size-=o.size,e.size-=o.size,this._db.delete(t),o.entry!==i&&this._notifyRemove(t,o.entry,o.size,r.ALL)),s>this._maxSize)return void this._notifyRemove(t,i,s,r.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return console.warn("Refusing to cache entry with size ".concat(s," for key ").concat(t)),void this._notifyRemove(t,i,0,r.ALL);const a=1+Math.max(n,-4)- -3;this._db.set(t,new h(i,s,a)),this._size+=s,e.size+=s,this._checkSize()}updateSize(e,t,i,s){t=e.id+t;const n=this._db.get(t);if(n&&n.entry===i){for(this._size-=n.size,e.size-=n.size;s>this._maxSize;){const e=this._notifyRemove(t,i,s,r.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);s=e}n.size=s,this._size+=s,e.size+=s,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,null===i||void 0===i?void 0:i.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const r=e.lifetime;i[r]=(i[r]||0)+e.size,this._users.forAll((i=>{const{id:r,name:n}=i;if(s.startsWith(r)){const i=t[n]||0;t[n]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const r=t[i]||0;t[i]=r,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const r=Object.keys(t);r.sort(((e,i)=>t[i]-t[e])),r.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let n=i.length-1;n>=0;--n){const t=i[n];t&&(e["Priority "+(n+-3-1)]=Math.round(t/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,r.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,r.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,s){let r;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,s,i);return"number"==typeof e&&(r=e),!0}return!1})),r}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=null!==e&&void 0!==e?e:this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=null===e||void 0===e?void 0:e.id;let s=!0;for(;s;){s=!1;for(const[r,n]of this._db)if(0===n.lifetime&&(!i||r.startsWith(i))){if(this._purgeItem(r,n,e),t.size<=.9*t.maxSize)return;s||(s=this._db.has(r))}}for(const[r,n]of this._db)if((!i||r.startsWith(i))&&(this._purgeItem(r,n,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((t=>e.startsWith(t.id)));if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const s=this._notifyRemove(e,t.entry,t.size,r.SOME);null!=s&&s>0&&(this._size+=s,i&&(i.size+=s),t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}let l=0;class h{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}},44680:(e,t,i)=>{function s(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,i,s,r,n,o,a,l){return[e,t,i,s,r,n,o,a,l]}i.d(t,{fA:()=>r,vt:()=>s,zK:()=>n});const n=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:s,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:r},Symbol.toStringTag,{value:"Module"}))},33723:(e,t,i)=>{i.d(t,{O:()=>c,W:()=>d});var s=i(63919),r=i(44680),n=i(19555),o=i(20664);const a=(0,i(9392).vt)(),l=(0,r.vt)(),h=(0,r.vt)(),u=(0,r.vt)();function d(e,t,i){return(0,o.s)(a,t[0],t[1],1),(0,o.t)(a,a,(0,s.mg)(l,i)),0===a[2]?(0,n.hZ)(e,a[0],a[1]):(0,n.hZ)(e,a[0]/a[2],a[1]/a[2])}function c(e,t,i){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(u,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,s.lw)(e,(0,s.KC)(h,h),u),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,i,r,n,h,u,d,c){(0,s.hZ)(e,t,r,h,i,n,u,1,1,1),(0,o.s)(a,d,c,1),(0,s.KC)(l,e);const[p,m,_]=(0,o.t)(a,a,(0,s.mg)(l,l));return(0,s.hZ)(l,p,0,0,0,m,0,0,0,_),(0,s.lw)(e,l,e)}},48341:(e,t,i)=>{i.d(t,{NH:()=>n,ip:()=>o,sU:()=>l,vG:()=>h});i(81806);var s=i(50076),r=i(90534);function n(e){const t=a(e);return null!=t?t.toDataURL():""}async function o(e){const t=a(e);if(null==t)throw new s.A("imageToArrayBuffer","Unsupported image type");const i=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,r.DB)(t)){const e=(0,r.r$)(t);return"image/jpeg"===(null===e||void 0===e?void 0:e.mediaType)?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),n=await new Promise((e=>t.toBlob(e,i)));if(!n)throw new s.A("imageToArrayBuffer","Failed to encode image");return{data:await n.arrayBuffer(),type:i}}function a(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");return e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),t}function l(e){const t=[],i=new Uint8Array(e);for(let s=0;s<i.length;s++)t.push(String.fromCharCode(i[s]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function h(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},68002:(e,t,i)=>{i.d(t,{X_:()=>o,i1:()=>a,zx:()=>l});var s=i(15941),r=i(31633);const n=96;function o(e,t){const i=t||e.extent,s=e.width,o=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*o*r.dy*n:0}function a(e,t){return e/((0,r.GA)(t)*r.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},23290:(e,t,i)=>{i.d(t,{_:()=>d});var s=i(35143),r=i(91967),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),a=i(65215),l=i(26346),h=i(2413),u=i(54222);let d=class extends r.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==(null===e||void 0===e?void 0:e.extent)?null:(0,h.VY)(e.extent)}get coords(){var e;const t=null===(e=this.element.georeference)||void 0===e?void 0:e.coords;return(0,l.projectOrLoad)(t,this.spatialReference).geometry}get normalizedCoords(){return a.A.fromJSON((0,u.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.VY)(e):null}};(0,s._)([(0,n.MZ)()],d.prototype,"spatialReference",void 0),(0,s._)([(0,n.MZ)()],d.prototype,"element",void 0),(0,s._)([(0,n.MZ)()],d.prototype,"bounds",null),(0,s._)([(0,n.MZ)()],d.prototype,"coords",null),(0,s._)([(0,n.MZ)()],d.prototype,"normalizedCoords",null),(0,s._)([(0,n.MZ)()],d.prototype,"normalizedBounds",null),d=(0,s._)([(0,o.$)("esri.layers.support.MediaElementView")],d)},4414:(e,t,i)=>{i.d(t,{O3:()=>d,PU:()=>h,YW:()=>p,ex:()=>a,hv:()=>c,zp:()=>l});var s=i(15941),r=i(76931),n=i(43047),o=i(55855);const a=2.4;function l(e){return(0,r.PN)(e*a)}function h(e){return(0,r.Lz)(e)/a}function u(e,t,i,r){let{color:o,ratio:a}=t,{color:l,ratio:h}=i;if(h===a){const e=1e-6;1===h?a-=e:h+=e}const u=(0,s.qE)((r-a)/(h-a),0,1);(0,n.l)(e,o.toArray(),l.toArray(),u)}function d(e){const t=new Uint8ClampedArray(2048);if(e=e.filter((e=>{let{ratio:t}=e;return t>=0&&t<=1})).sort(((e,t)=>e.ratio-t.ratio)).map((e=>{let{color:t,ratio:i}=e;return{color:t,ratio:Math.max(i,.001)}})),e.length<1)return t;let i=e[0],s=e[0],r=1;const n=(0,o.vt)();for(let o=0;o<512;o++){const a=(o+.5)/512;for(;a>s.ratio&&r<e.length;)i=s,s=e[r++];u(n,i,s,a),t.set(n,4*o)}return t}function c(e,t,i){const s=Math.sqrt(e**2+t**2)/i;return s>1?0:3/(Math.PI*i**2)*(1-s**2)**2}function p(e){return"function"==typeof e?e:e?t=>+t[e]:()=>1}},21532:(e,t,i)=>{i.d(t,{ZH:()=>u});var s=i(54901),r=i(91417),n=(i(48341),i(28808)),o=i(95776);function a(e,t){const{width:i,height:s,getFrame:n}=e,o=e.frameDurations.slice(),a=o.pop();return o.push((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:n,width:i,height:s}}class l{constructor(e,t,i,s){this._animation=e,this._repeatType=i,this._onFrameData=s,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let r=0;for(;t>r;)r+=this.timeToFrame,this.nextFrame();const n=this._animation.getFrame(this._currentFrame);this._onFrameData(n)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case n.fu.None:this._currentFrame-=this._direction;break;case n.fu.Loop:this._currentFrame=0;break;case n.fu.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case n.fu.None:this._currentFrame-=this._direction;break;case n.fu.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case n.fu.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function h(e,t,i,s){let h,{repeatType:u}=t;if(null==u&&(u=n.fu.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e,s=e.frameDurations.reverse();return{frameCount:e.frameCount,duration:e.duration,frameDurations:s,getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:s,getFrame:n}=e,o=t/e.duration,a=e.frameDurations.map((e=>(0,r.l5)(e*o)));return{frameCount:e.frameCount,duration:e.duration,frameDurations:a,getFrame:n,width:i,height:s}}(e,(0,r.l5)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay;u===n.fu.Loop?e=a(e,(0,r.l5)(i)):u===n.fu.Oscillate&&(e=function(e,t){const{width:i,height:s,getFrame:n}=e,o=e.frameDurations.slice(),a=o.shift();return o.unshift((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:n,width:i,height:s}}(a(e,(0,r.l5)(i/2)),(0,r.l5)(i/2)))}if(null!=t.startTimeOffset)h=(0,r.l5)(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const s=82749913,n=null!=t.randomizeStartSeed?t.randomizeStartSeed:s,a=(0,o.J)(i,n);h=(0,r.l5)(a*function(e){return(0,r.l5)(e.frameDurations.reduce(((e,t)=>e+t),0))}(e))}else h=(0,r.l5)(0);return new l(e,h,u,s)}function u(e,t,i,r){const n=null==t.playAnimation||t.playAnimation,o=h(e,t,i,r);let a,l=o.timeToFrame;return function e(){a=n?setTimeout((()=>{o.nextFrame(),l=o.timeToFrame,e()}),l):void 0}(),(0,s.hA)((()=>n&&clearTimeout(a)))}},90104:(e,t,i)=>{i.d(t,{e:()=>S});var s,r=i(35143),n=i(94643),o=i(3975),a=i(50076),l=i(68134),h=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),d=i(68002),c=i(21904),p=i(7464),m=i(97001);let _=s=class extends m.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0),_=s=(0,r._)([(0,u.$)("esri.views.layers.support.ClipRect")],_);const f=_;var v=i(47266);let y=class extends m.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],y.prototype,"path",void 0),y=(0,r._)([(0,u.$)("esri.views.layers.support.Path")],y);const g=y,w=n.A.ofType({key:"type",base:null,typeMap:{rect:f,path:g,geometry:v.A}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:w,set(e){const t=(0,o.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:p.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,u.$)("esri.views.2d.layers.LayerView2D")],t),t}},66372:(e,t,i)=>{i.r(t),i.d(t,{default:()=>te});var s=i(35143),r=(i(35238),i(39356),i(63844),i(14873),i(47662),i(72690),i(86946),i(71832),i(5766),i(35039),i(86616),i(76460)),n=(i(95444),i(94643)),o=(i(81806),i(87663)),a=i(50346),l=i(68134),h=i(46053),u=(i(47249),i(85842)),d=i(2413),c=i(11352),p=i(65658),m=i(23290),_=i(50076),f=(i(52394),i(15434),i(59784),i(86560),i(61425),i(3789),i(76797)),v=(i(89189),i(66388),i(13904),i(65215),i(23701),i(5568),i(80963)),y=(i(62032),i(89425),i(15709),i(88764),i(9435),i(50724),i(94046),i(94168),i(73988),i(27847),i(33049),i(4754),i(31385),i(278),i(71687),i(6134),i(9190),i(5104),i(41704),i(16083),i(27150),i(19313),i(28808)),g=(i(15941),i(5095),i(59422)),w=(i(71447),i(84202),i(42436),i(14522),i(17400),i(8794)),S=(i(13692),i(54099),i(61551)),z=(i(38545),i(28608),i(61678),i(93345)),R=(i(12331),i(35363),i(89179),i(98433)),b=(i(61247),i(89241),i(93453),i(35048),i(99588),i(41838),i(83531),i(76418),i(8254),i(47709),i(3825),i(90534),i(29234),i(56789),i(72729),i(28972),i(61920),i(57162),i(64839),i(60322),i(33721),i(68009),i(45992),i(38983),i(42294),i(83755)),M=(i(73548),i(13312),i(14556),i(55171),i(56924),i(98773),i(86529),i(40181),i(15389)),A=i(96345),x=i(79053),T=i(30726),F=i(33723),C=i(44680),E=i(19555),V=i(72745),O=i(21532),Z=i(76718),D=i(96673),L=i(36911);const q=(0,C.vt)(),P={none:y.fu.None,loop:y.fu.Loop,oscillate:y.fu.Oscillate};class H extends w.q{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=(0,V.vt)(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,l.wB)((()=>this.elementView.element.opacity),(e=>this.opacity=e),l.Vh),(0,l.wB)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),l.Vh),(0,l.wB)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{var e;null!==(e=this._playHandle)&&void 0!==e&&e.remove(),this.texture=(0,T.WD)(this.texture),this.requestRender()}),l.Vh),(0,l.z7)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&this._handles.push((0,x.on)(e.content,"play",(()=>this.requestRender())))}),l.Vh)),e.element.load().catch((t=>{r.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new _.A("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}getMesh(e){throw new Error("Method not implemented.")}destroy(){var e;null!==(e=this._playHandle)&&void 0!==e&&e.remove(),this._handles.forEach((e=>e.remove())),this.texture=(0,T.WD)(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,s=i instanceof HTMLVideoElement,r=e?i.naturalWidth:s?i.videoWidth:i.width,n=e?i.naturalHeight:s?i.videoHeight:i.height;if(this._updatePerspectiveTransform(r,n),this.texture)s&&!i.paused&&(this.texture.setData(i),this.requestRender(),this.texture.generateMipmap());else{const e=new D.R;if(e.wrapMode=z.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=n,"getFrame"in i){const s=i=>{this.texture?this.texture.setData(i):this.texture=new R.g(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=(0,O.ZH)(i,function(e){return e?{...e,playAnimation:e.playing,repeatType:e.repeatType?P[e.repeatType]:void 0}:{}}(this.elementView.element.animationOptions),null,s))}else this.texture=new R.g(t,e,i);this.texture.generateMipmap(),s&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(null==i)return;const[s,r,n,o]=i.rings[0],a=this._vertices,{x:l,y:h}=e,u=0!==t;u?a.set([r[0]-l,r[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h,o[0]-l,o[1]-h,r[0]+t-l,r[1]-h,r[0]+t-l,r[1]-h,s[0]+t-l,s[1]-h,n[0]+t-l,n[1]-h,o[0]+t-l,o[1]-h]):a.set([r[0]-l,r[1]-h,s[0]-l,s[1]-h,n[0]-l,n[1]-h,o[0]-l,o[1]-h]),this.isWrapAround=u}getVAO(e,t,i){if(null==this.elementView.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=Z.g.createVertex(e,z._U.DYNAMIC_DRAW,s);const r=Z.g.createVertex(e,z._U.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new L.Z(e,i,t,{geometry:this._geometryVbo,tex:r})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,F.O)(q,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,E.hZ)(this.perspectiveTransform,q[6]/q[8]*e,q[7]/q[8]*t)}}var I=i(76931),U=i(63919),k=i(85827),j=i(1438),B=i(28632),G=i(69139),N=i(36201);class W extends N.A{constructor(){super(...arguments),this._localOrigin=(0,I.tc)(0,0),this._viewStateId=-1,this._dvsMat3=(0,k.vt)()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[G.d.overlay],target:()=>this.children,drawPhase:S.S5.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:r,resolution:n,rotation:o,viewpoint:a,displayMat3:l}=t;if(this._viewStateId===i)return;const h=Math.PI/180*o,u=r*s[0],d=r*s[1],{x:c,y:p}=a.targetGeometry,m=(0,j.mT)(c,t.spatialReference);this._localOrigin.x=m,this._localOrigin.y=p;const _=n*u,f=n*d,v=(0,U.D_)(this._dvsMat3);(0,U.lw)(v,v,l),(0,U.Tl)(v,v,(0,g.fA)(u/2,d/2)),(0,U.hs)(v,v,(0,b.fA)(u/_,-d/f,1)),(0,U.e$)(v,v,-h),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:r,worldScreenWidth:n,size:o,viewpoint:a}=i,l=this._localOrigin;let h=0;const u=(0,v.Vp)(r);if(u&&r.isWrappable){const e=o[0],d=o[1],c=180/Math.PI*s,p=Math.abs(Math.cos(c)),m=Math.abs(Math.sin(c)),_=Math.round(e*p+d*m),[f,v]=u.valid,y=(0,B.FT)(r),{x:g,y:w}=a.targetGeometry,S=[g,w],z=[0,0];i.toScreen(z,S);const R=[0,0];let b;b=_>n?.5*n:.5*_;const M=Math.floor((g+.5*y)/y),A=f+M*y,x=v+M*y,T=[z[0]+b,0];i.toMap(R,T),R[0]>x&&(h=y),T[0]=z[0]-b,i.toMap(R,T),R[0]<A&&(h=-y);for(const i of t){const e=i.elementView.bounds;if(null==e)continue;const[t,,s]=e;t<f&&s>f?i.updateDrawCoords(l,y):s>v&&t<v?i.updateDrawCoords(l,-y):i.updateDrawCoords(l,h)}}else for(const d of t)d.updateDrawCoords(l,h)}}var $=i(90104),Q=i(91196);let Y=class extends((0,$.e)(Q.A)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new n.A}attach(){this.addAttachHandles([(0,l.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,l.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new W,this.container.addChild(this._overlayContainer),this._fetchQueue=new M.A({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new A.A({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var e;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),null===(e=this._debugGraphicsView)||void 0===e||e.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){var t;this._tileStrategy.update(e),null===(t=this._debugGraphicsView)||void 0===t||t.update(e)}async hitTest(e,t){const i=[],s=e.normalize(),r=[s.x,s.y];for(const{projectedElement:{normalizedCoords:n,element:o}}of this._elementReferences.values())null!=n&&(0,c.t1)(n.rings,r)&&i.push({type:"media",element:o,layer:this.layer,mapPoint:e,sourcePoint:o.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new ee(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,s]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,s),this.requestUpdate()}),(e=>{(0,a.zf)(e)||r.A.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds(K,e,!0);const s=new f.A({xmin:K[0],ymin:K[1],xmax:K[2],ymax:K[3],spatialReference:this.view.spatialReference});return i.queryElements(s,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,o.tE)(this._elementReferences,t.uid,(()=>{const e=new m._({element:t,spatialReference:this.view.spatialReference}),i=new H(e);this._overlayContainer.addChild(i),this.elements.add(t);return{tiles:new Set,projectedElement:e,overlay:i,debugGraphic:null}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){var i;const s=this._elementReferences.get(t.uid);s.tiles.delete(e),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),null===(i=this._debugGraphicsView)||void 0===i||i.graphics.remove(s.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){var i,s;const r=t.projectedElement.normalizedCoords;if(null==r)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void(null===(i=this._debugGraphicsView)||void 0===i||i.graphics.remove(t.debugGraphic));const n=[],o=[];for(const e of this._tileStrategy.tiles){const i=X(this.view.featuresTilingScheme,e,r);t.tiles.has(e)?i||o.push(e):i&&n.push(e)}for(const t of n)this._referenceElement(t,e);for(const t of o)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void((null===(s=t)||void 0===s?void 0:s.debugGraphic)&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const r=new m._({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=r)for(const n of this._tileStrategy.tiles)X(this.view.featuresTilingScheme,n,r)&&this._referenceElement(n,e)}};(0,s._)([(0,h.MZ)()],Y.prototype,"layer",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],Y.prototype,"elements",void 0),Y=(0,s._)([(0,u.$)("esri.views.2d.layers.MediaLayerView2D")],Y);const K=(0,d.vt)(),J={xmin:0,ymin:0,xmax:0,ymax:0};function X(e,t,i){return e.getTileBounds(K,t.key,!0),J.xmin=K[0],J.ymin=K[1],J.xmax=K[2],J.ymax=K[3],(0,p.fA)(J,i)}class ee{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const s of e)i.has(s)?i.delete(s):t.push(s);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const te=Y},91196:(e,t,i)=>{i.d(t,{A:()=>m});var s=i(35143),r=i(91967),n=i(54099),o=i(5632),a=i(76460),l=i(30726),h=i(91291),u=i(46053),d=(i(81806),i(47249),i(85842)),c=i(19451);let p=class extends((0,o.sA)((0,h.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,u.MZ)()],p.prototype,"fullOpacity",null),(0,s._)([(0,u.MZ)()],p.prototype,"layer",void 0),(0,s._)([(0,u.MZ)()],p.prototype,"parent",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,s._)([(0,u.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,s._)([(0,u.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,s._)([(0,u.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,s._)([(0,u.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,s._)([(0,u.MZ)()],p.prototype,"visible",null),(0,s._)([(0,u.MZ)()],p.prototype,"view",void 0),p=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],p);const m=p},97001:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(42553),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let a=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],a);const l=a},47266:(e,t,i)=>{i.d(t,{A:()=>m});var s,r=i(35143),n=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),a=i(89189),l=i(19902),h=i(97001),u=i(76797),d=i(65215);const c={base:a.A,key:"type",typeMap:{extent:u.A,polygon:d.A}};let p=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:c,json:{read:l.rS,write:!0}})],p.prototype,"geometry",void 0),p=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],p);const m=p}}]);
//# sourceMappingURL=2323.7ed170f6.chunk.js.map