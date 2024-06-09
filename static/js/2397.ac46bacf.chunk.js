"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[2397],{59784:(e,t,i)=>{i.d(t,{$:()=>g,IB:()=>s,N2:()=>m,RH:()=>w,Ws:()=>_,ZD:()=>b});var r=i(69539);i(43047),i(55855);function s(e){return"r"in e&&"g"in e&&"b"in e}function n(e){return"h"in e&&"s"in e&&"v"in e}function a(e){return"l"in e&&"a"in e&&"b"in e}function o(e){return"l"in e&&"c"in e&&"h"in e}const l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function p(e,t){const i=[];let r,s;if(e[0].length!==t.length)throw new Error("dimensions do not match");const n=e.length,a=e[0].length;let o=0;for(r=0;r<n;r++){for(o=0,s=0;s<a;s++)o+=e[r][s]*t[s];i.push(o)}return i}function h(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),i=p(l,t);return{x:100*i[0],y:100*i[1],z:100*i[2]}}function d(e){const t=p(c,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function u(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function f(e){const t=e.l,i=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*i[0],y:100*i[1],z:108.883*i[2]}}function y(e){return function(e){const t=e.l,i=e.a,r=e.b,s=Math.sqrt(i*i+r*r);let n=Math.atan2(r,i);return n=n>0?n:n+2*Math.PI,{l:t,c:s,h:n}}(u(h(e)))}function v(e){return d(f(function(e){const t=e.l,i=e.c,r=e.h;return{l:t,a:i*Math.cos(r),b:i*Math.sin(r)}}(e)))}function g(e){return s(e)?e:o(e)?v(e):a(e)?function(e){return d(f(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?d(e):n(e)?function(e){const t=(e.h+360)%360/60,i=e.s/100,r=e.v/100*255,s=r*i,n=s*(1-Math.abs(t%2-1));let a;switch(Math.floor(t)){case 0:a={r:s,g:n,b:0};break;case 1:a={r:n,g:s,b:0};break;case 2:a={r:0,g:s,b:n};break;case 3:a={r:0,g:n,b:s};break;case 4:a={r:n,g:0,b:s};break;case 5:case 6:a={r:s,g:0,b:n};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+r-s),a.g=Math.round(a.g+r-s),a.b=Math.round(a.b+r-s),a}(e):e}function m(e){return n(e)?e:function(e){const t=e.r,i=e.g,r=e.b,s=Math.max(t,i,r),n=s-Math.min(t,i,r);let a=s,o=0===n?0:s===t?(i-r)/n%6:s===i?(r-t)/n+2:(t-i)/n+4,l=0===n?0:n/a;return o<0&&(o+=6),o*=60,l*=100,a*=100/255,{h:o,s:l,v:a}}(g(e))}function b(e){return a(e)?e:function(e){return u(h(e))}(g(e))}function w(e){return o(e)?e:y(g(e))}function M(e){let{r:t,g:i,b:s,a:n}=e;return n<1&&(t=Math.round(n*t+255*(1-n)),i=Math.round(n*i+255*(1-n)),s=Math.round(n*s+255*(1-n))),new r.A({r:t,g:i,b:s})}function _(e,t){const{r:i,g:r,b:s}=null!==t&&void 0!==t&&t.ignoreAlpha?e:M(e);return.2126*i+.7152*r+.0722*s}var S;!function(e){e[e.Low=160]="Low",e[e.High=225]="High"}(S||(S={}))},68002:(e,t,i)=>{i.d(t,{X_:()=>a,i1:()=>o,zx:()=>l});var r=i(15941),s=i(31633);const n=96;function a(e,t){const i=t||e.extent,r=e.width,a=(0,s.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&r?i.width/r*a*s.dy*n:0}function o(e,t){return e/((0,s.GA)(t)*s.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,r.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,r.Sp)(e,t)||e>t}(e,i)}},42436:(e,t,i)=>{i.d(t,{$:()=>y});var r=i(69539),s=i(59784),n=i(53084),a=i(98976),o=i(97763),l=i(50076),c=i(76460),p=i(76279);function h(e,t,i,r,s){if(null==e)return null;const n=e.referencesGeometry()&&s?u(t,r,s):t,a=e.repurposeFeature(n);try{return e.evaluate({...i,$feature:a},e.services)}catch(o){return c.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}const d=new Map;function u(e,t,i){const{transform:r,hasZ:s,hasM:n}=i;d.has(t)||d.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,s)=>(0,p.Tr)(i,t,e,r,s);case"esriGeometryPolygon":return(e,i,r,s)=>(0,p.$X)(i,t,e,r,s);case"esriGeometryPolyline":return(e,i,r,s)=>(0,p.P5)(i,t,e,r,s);case"esriGeometryMultipoint":return(e,i,r,s)=>(0,p.SW)(i,t,e,r,s);default:return c.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new l.A("mapview-arcade","Unable to handle geometryType: ".concat(e))),e=>e}}(t));const a=d.get(t)(e.geometry,r,s,n);return{...e,geometry:a}}const f=e=>{if(!e)return[0,0,0,0];const{r:t,g:i,b:r,a:s}=e;return[t,i,r,255*s]};class y{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let r=!1;for(const t of i)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(const s of t)s.primitiveName===e.primitiveName&&i.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)y.findApplicableOverrides(r,t,i);if(e.symbolLayers)for(const r of e.symbolLayers)y.findApplicableOverrides(r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const r of e.effects)y.findApplicableOverrides(r,t,i);if(e.markerPlacement&&y.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const r of e.markerGraphics)y.findApplicableOverrides(r,t,i),y.findApplicableOverrides(r.symbol,t,i)}else"CIMCharacterMarker"===e.type?y.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?y.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&y.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,o.K3)(e),!t||!e.primitiveName)return{type:"cim-effect-info",effect:e,overrides:[]};const i=e.primitiveName,r=[];for(const s of t)s.primitiveName===i&&r.push({...s,propertyName:(0,o.YF)(s.propertyName)});return{type:"cim-effect-info",effect:e,overrides:r}}static async resolveSymbolOverrides(e,t,i,r,s,a,l){if(null===e||void 0===e||!e.symbol)return null;let{symbol:c,primitiveOverrides:p}=e;const h=!!p;if(!h&&!r)return c;c=(0,n.o8)(c),p=(0,n.o8)(p);let d=!0;if(t||(t={attributes:{}},d=!1),h){if(d||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$feature"))}))),l||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$view"))}))),p.length>0){const e={spatialReference:i,fields:(0,o.O2)(t.attributes),geometryType:s};await y.createRenderExpressions(p,e),y.evaluateOverrides(p,t,null!==s&&void 0!==s?s:"esriGeometryPoint",a,l)}y.applyOverrides(c,p)}return r&&y.applyDictionaryTextOverrides(c,t,r,null),c}static async createRenderExpressions(e,t){const i=[];for(const r of e){const e=r.valueExpressionInfo;if(!e||y._expressionToRenderExpression.has(e.expression))continue;const s=(0,a.Ad)(e.expression,t.spatialReference,t.fields);i.push(s),s.then((t=>y._expressionToRenderExpression.set(e.expression,t)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,t,i,r,n){const a={$view:{scale:null===n||void 0===n?void 0:n.scale}};for(const o of e){o.value&&"object"==typeof o.value&&(0,s.IB)(o.value)&&("Color"===o.propertyName||"StrokeColor"===o.propertyName)&&(o.value=f(o.value));const e=o.valueExpressionInfo;if(!e)continue;const n=y._expressionToRenderExpression.get(e.expression);n&&(o.value=h(n,t,a,i,r))}}static applyDictionaryTextOverrides(e,t,i,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(null!==e&&void 0!==e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const n=e.symbolLayers;if(!n)return;for(const a of n)a&&"CIMVectorMarker"===a.type&&y.applyDictionaryTextOverrides(a,t,i,r,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&y.applyDictionaryTextOverrides(e,t,i,r)}break;case"CIMMarkerGraphic":{const n=e.textString;if(n&&n.includes("[")){const a=(0,o.gQ)(n,i);e.textString=(0,o.FM)(t,a,r,s)}}}}static applyOverrides(e,t,i,r){if(e.primitiveName)for(const s of t)if(s.primitiveName===e.primitiveName){const t=(0,o.YF)(s.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),i){let t=!1;for(const r of i)r.primitiveName===e.primitiveName&&(t=!0);t||i.push(s)}null!=s.value&&(e[t]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)y.applyOverrides(s,t,i,r);if(e.symbolLayers)for(const s of e.symbolLayers)y.applyOverrides(s,t,i,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)y.applyOverrides(s,t,i,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)y.applyOverrides(s,t,i,r),y.applyOverrides(s.symbol,t,i,r)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const i of e)void 0!==i.value&&(t+="".concat(i.primitiveName).concat(i.propertyName).concat(JSON.stringify(i.value)));return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r.A(t).toRgba();return e[3]*=255,e}return t}}y._expressionToRenderExpression=new Map},90104:(e,t,i)=>{i.d(t,{e:()=>M});var r,s=i(35143),n=i(94643),a=i(3975),o=i(50076),l=i(68134),c=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),h=i(68002),d=i(21904),u=i(7464),f=i(97001);let y=r=class extends f.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=r=(0,s._)([(0,p.$)("esri.views.layers.support.ClipRect")],y);const v=y;var g=i(47266);let m=class extends f.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,c.MZ)({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=(0,s._)([(0,p.$)("esri.views.layers.support.Path")],m);const b=m,w=n.A.ofType({key:"type",base:null,typeMap:{rect:v,path:b,geometry:g.A}}),M=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,r;const s=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(r=this.view)&&void 0!==r&&r.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:r}=t;return(0,h.zx)(e,i,r)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,c.MZ)()],t.prototype,"attached",void 0),(0,s._)([(0,c.MZ)({type:w,set(e){const t=(0,a.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"container",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"moving",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"updateSuspended",null),(0,s._)([(0,c.MZ)()],t.prototype,"updating",null),(0,s._)([(0,c.MZ)()],t.prototype,"view",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,c.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},46984:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var r=i(35143),s=i(39356),n=i(18690),a=i(94643),o=i(54901),l=i(68134),c=(i(76460),i(81806),i(50076),i(85842)),p=i(90554),h=i(90104),d=i(31394),u=i(45992),f=i(91196);const y="sublayers",v="layerView";let g=class extends((0,h.e)(f.A)){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){var t;let i;"number"==typeof e?i=[e]:e instanceof s.A?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.A.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray());const r=null===(t=i)||void 0===t?void 0:t.filter(n.Ru);return null!==r&&void 0!==r&&r.length?(this._addHighlight(r),(0,o.hA)((()=>this._removeHighlight(r)))):(0,o.hA)()}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if(null!=i&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of i){const i=new d.A(this.view.featuresTilingScheme),s=new u.A({view:e,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.addHandles([(0,l.wB)((()=>r.visible),(e=>s.container.visible=e),l.Vh),(0,l.wB)((()=>s.updating),(()=>this.notifyChange("updating")),l.Vh)],v)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,l.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),y)}detach(){this._destroyGraphicsViews(),this.removeHandles(y)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(v);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const r of this.layer.sublayers){const s=new d.A(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const n=new u.A({view:t,graphics:r.graphics,requestUpdateCallback:i,container:s});this.addHandles([r.on("graphic-update",n.graphicUpdateHandler),(0,l.wB)((()=>r.visible),(e=>n.container.visible=e),l.Vh),(0,l.wB)((()=>n.updating),(()=>this.notifyChange("updating")),l.Vh)],v),this.container.addChild(n.container),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=(0,p.$r)("highlight");for(const i of this.graphicsViews())i.setHighlight(e.map((e=>({objectId:e,highlightFlags:t}))))}};g=(0,r._)([(0,c.$)("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g},31394:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(61551),s=i(8995),n=i(13692);class a extends s.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>f});var r=i(35143),s=i(91967),n=i(54099),a=i(5632),o=i(76460),l=i(30726),c=i(91291),p=i(46053),h=(i(81806),i(47249),i(85842)),d=i(19451);let u=class extends((0,a.sA)((0,c.g)(n.A.EventedMixin(s.A)))){constructor(e){super(e),this._updatingHandles=new d.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,p.MZ)()],u.prototype,"fullOpacity",null),(0,r._)([(0,p.MZ)()],u.prototype,"layer",void 0),(0,r._)([(0,p.MZ)()],u.prototype,"parent",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"suspended",null),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,r._)([(0,p.MZ)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,r._)([(0,p.MZ)()],u.prototype,"visible",null),(0,r._)([(0,p.MZ)()],u.prototype,"view",void 0),u=(0,r._)([(0,h.$)("esri.views.layers.LayerView")],u);const f=u},97001:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(35143),s=i(42553),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));let o=class extends s.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,r._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,r._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},47266:(e,t,i)=>{i.d(t,{A:()=>f});var r,s=i(35143),n=(i(35238),i(46053)),a=(i(81806),i(76460),i(47249),i(85842)),o=i(89189),l=i(19902),c=i(97001),p=i(76797),h=i(65215);const d={base:o.A,key:"type",typeMap:{extent:p.A,polygon:h.A}};let u=r=class extends c.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new r({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,n.MZ)({types:d,json:{read:l.rS,write:!0}})],u.prototype,"geometry",void 0),u=r=(0,s._)([(0,a.$)("esri.views.layers.support.Geometry")],u);const f=u}}]);
//# sourceMappingURL=2397.ac46bacf.chunk.js.map