"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[2531],{59784:(e,t,i)=>{i.d(t,{$:()=>v,IB:()=>s,N2:()=>g,RH:()=>w,Ws:()=>_,ZD:()=>b});var r=i(69539);i(43047),i(55855);function s(e){return"r"in e&&"g"in e&&"b"in e}function n(e){return"h"in e&&"s"in e&&"v"in e}function o(e){return"l"in e&&"a"in e&&"b"in e}function a(e){return"l"in e&&"c"in e&&"h"in e}const l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function p(e,t){const i=[];let r,s;if(e[0].length!==t.length)throw new Error("dimensions do not match");const n=e.length,o=e[0].length;let a=0;for(r=0;r<n;r++){for(a=0,s=0;s<o;s++)a+=e[r][s]*t[s];i.push(a)}return i}function u(e){const t=[e.r/255,e.g/255,e.b/255].map((e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4)),i=p(l,t);return{x:100*i[0],y:100*i[1],z:100*i[2]}}function h(e){const t=p(c,[e.x/100,e.y/100,e.z/100]).map((e=>{const t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function d(e){const t=[e.x/95.047,e.y/100,e.z/108.883].map((e=>e>(6/29)**3?e**(1/3):1/3*(29/6)**2*e+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function y(e){const t=e.l,i=[(t+16)/116+e.a/500,(t+16)/116,(t+16)/116-e.b/200].map((e=>e>6/29?e**3:3*(6/29)**2*(e-4/29)));return{x:95.047*i[0],y:100*i[1],z:108.883*i[2]}}function f(e){return function(e){const t=e.l,i=e.a,r=e.b,s=Math.sqrt(i*i+r*r);let n=Math.atan2(r,i);return n=n>0?n:n+2*Math.PI,{l:t,c:s,h:n}}(d(u(e)))}function m(e){return h(y(function(e){const t=e.l,i=e.c,r=e.h;return{l:t,a:i*Math.cos(r),b:i*Math.sin(r)}}(e)))}function v(e){return s(e)?e:a(e)?m(e):o(e)?function(e){return h(y(e))}(e):function(e){return"x"in e&&"y"in e&&"z"in e}(e)?h(e):n(e)?function(e){const t=(e.h+360)%360/60,i=e.s/100,r=e.v/100*255,s=r*i,n=s*(1-Math.abs(t%2-1));let o;switch(Math.floor(t)){case 0:o={r:s,g:n,b:0};break;case 1:o={r:n,g:s,b:0};break;case 2:o={r:0,g:s,b:n};break;case 3:o={r:0,g:n,b:s};break;case 4:o={r:n,g:0,b:s};break;case 5:case 6:o={r:s,g:0,b:n};break;default:o={r:0,g:0,b:0}}return o.r=Math.round(o.r+r-s),o.g=Math.round(o.g+r-s),o.b=Math.round(o.b+r-s),o}(e):e}function g(e){return n(e)?e:function(e){const t=e.r,i=e.g,r=e.b,s=Math.max(t,i,r),n=s-Math.min(t,i,r);let o=s,a=0===n?0:s===t?(i-r)/n%6:s===i?(r-t)/n+2:(t-i)/n+4,l=0===n?0:n/o;return a<0&&(a+=6),a*=60,l*=100,o*=100/255,{h:a,s:l,v:o}}(v(e))}function b(e){return o(e)?e:function(e){return d(u(e))}(v(e))}function w(e){return a(e)?e:f(v(e))}function M(e){let{r:t,g:i,b:s,a:n}=e;return n<1&&(t=Math.round(n*t+255*(1-n)),i=Math.round(n*i+255*(1-n)),s=Math.round(n*s+255*(1-n))),new r.A({r:t,g:i,b:s})}function _(e,t){const{r:i,g:r,b:s}=null!==t&&void 0!==t&&t.ignoreAlpha?e:M(e);return.2126*i+.7152*r+.0722*s}var S;!function(e){e[e.Low=160]="Low",e[e.High=225]="High"}(S||(S={}))},68002:(e,t,i)=>{i.d(t,{X_:()=>o,i1:()=>a,zx:()=>l});var r=i(15941),s=i(31633);const n=96;function o(e,t){const i=t||e.extent,r=e.width,o=(0,s.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&r?i.width/r*o*s.dy*n:0}function a(e,t){return e/((0,s.GA)(t)*s.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,r.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,r.Sp)(e,t)||e>t}(e,i)}},63733:(e,t,i)=>{i.d(t,{A:()=>d});var r=i(35143),s=i(46053),n=(i(81806),i(76460),i(47249),i(85842)),o=i(5364),a=i(25515),l=i(65624),c=i(5682),p=i(64519),u=i(731);let h=class extends((0,l.d)((0,c.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,r._)([(0,s.MZ)({type:u.A})],h.prototype,"elevationInfo",void 0),(0,r._)([(0,s.MZ)((0,o.C)(p.Y,"graphics"))],h.prototype,"graphics",void 0),(0,r._)([(0,s.MZ)({type:["show","hide"]})],h.prototype,"listMode",void 0),(0,r._)([(0,s.MZ)()],h.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],h.prototype,"type",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],h.prototype,"internal",void 0),h=(0,r._)([(0,n.$)("esri.layers.GraphicsLayer")],h);const d=h},44081:(e,t,i)=>{i.d(t,{LF:()=>a,M9:()=>l,zu:()=>c});var r=i(50076),s=i(48611),n=i(7847),o=i(58503);function a(e,t,i){try{return function(e){if(!e||0===e.length)return null;if(function(e){const t=e[0];return!!t&&"scale"in t}(e)){const t=[];for(const i of e)t.push({scale:i.scale,value:c(i.value)});return t}return c(e)}(e)}catch(s){var r;null===i||void 0===i||null===(r=i.messages)||void 0===r||r.push(s)}return null}function l(e,t,i,r){try{const r=function(e){const t=(0,n.q)(e);return t?(0,o.dw)(t)?t.map((e=>e.toJSON())):t.map((e=>{let{scale:t,effects:i}=e;return{scale:t,value:i.map((e=>e.toJSON()))}})):null}(e);(0,s.sM)(i,r,t)}catch(l){r.messages&&r.messages.push(l)}}function c(e){if(null===e||void 0===e||!e.length)return"";const t=[];for(const i of e){let e=[];switch(i.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[p(i,"amount")];break;case"blur":e=[p(i,"radius","pt")];break;case"hue-rotate":e=[p(i,"angle","deg")];break;case"drop-shadow":e=[p(i,"xoffset","pt"),p(i,"yoffset","pt"),p(i,"blurRadius","pt"),u(i,"color")];break;case"bloom":e=[p(i,"strength"),p(i,"radius","pt"),p(i,"threshold")]}const r="".concat(i.type,"(").concat(e.filter(Boolean).join(" "),")");(0,n.q)(r),t.push(r)}return t.join(" ")}function p(e,t,i){if(null==e[t])throw new r.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});return i?e[t]+i:""+e[t]}function u(e,t){if(null==e[t])throw new r.A("effect:missing-parameter","Missing parameter '".concat(t,"' in ").concat(e.type," effect"),{effect:e});const i=e[t];return"rgba(".concat(i[0]||0,", ").concat(i[1]||0,", ").concat(i[2]||0,", ").concat(i[3]/255||0,")")}},65624:(e,t,i)=>{i.d(t,{d:()=>l});var r=i(35143),s=i(46053),n=(i(81806),i(76460),i(47249),i(85842)),o=i(44081);const a={read:{reader:o.LF},write:{allowNull:!0,writer:o.M9}},l=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,r._)([(0,s.MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),(0,r._)([(0,s.MZ)({json:{read:!1,write:!1,origins:{"web-map":a,"portal-item":a}}})],t.prototype,"effect",void 0),t=(0,r._)([(0,n.$)("esri.layers.mixins.BlendLayer")],t),t}},5682:(e,t,i)=>{i.d(t,{j:()=>o});var r=i(35143),s=i(46053),n=(i(81806),i(76460),i(47249),i(85842));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const i=this._get("effectiveScaleRange");return i&&i.minScale===e.minScale&&i.maxScale===e.maxScale?i:e}};return(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,r._)([(0,n.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},42436:(e,t,i)=>{i.d(t,{$:()=>f});var r=i(69539),s=i(59784),n=i(53084),o=i(98976),a=i(97763),l=i(50076),c=i(76460),p=i(76279);function u(e,t,i,r,s){if(null==e)return null;const n=e.referencesGeometry()&&s?d(t,r,s):t,o=e.repurposeFeature(n);try{return e.evaluate({...i,$feature:o},e.services)}catch(a){return c.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const h=new Map;function d(e,t,i){const{transform:r,hasZ:s,hasM:n}=i;h.has(t)||h.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,s)=>(0,p.Tr)(i,t,e,r,s);case"esriGeometryPolygon":return(e,i,r,s)=>(0,p.$X)(i,t,e,r,s);case"esriGeometryPolyline":return(e,i,r,s)=>(0,p.P5)(i,t,e,r,s);case"esriGeometryMultipoint":return(e,i,r,s)=>(0,p.SW)(i,t,e,r,s);default:return c.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new l.A("mapview-arcade","Unable to handle geometryType: ".concat(e))),e=>e}}(t));const o=h.get(t)(e.geometry,r,s,n);return{...e,geometry:o}}const y=e=>{if(!e)return[0,0,0,0];const{r:t,g:i,b:r,a:s}=e;return[t,i,r,255*s]};class f{static findApplicableOverrides(e,t,i){if(e&&t){if(e.primitiveName){let r=!1;for(const t of i)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(const s of t)s.primitiveName===e.primitiveName&&i.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)f.findApplicableOverrides(r,t,i);if(e.symbolLayers)for(const r of e.symbolLayers)f.findApplicableOverrides(r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const r of e.effects)f.findApplicableOverrides(r,t,i);if(e.markerPlacement&&f.findApplicableOverrides(e.markerPlacement,t,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const r of e.markerGraphics)f.findApplicableOverrides(r,t,i),f.findApplicableOverrides(r.symbol,t,i)}else"CIMCharacterMarker"===e.type?f.findApplicableOverrides(e.symbol,t,i):"CIMHatchFill"===e.type?f.findApplicableOverrides(e.lineSymbol,t,i):"CIMPictureMarker"===e.type&&f.findApplicableOverrides(e.animatedSymbolProperties,t,i)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,a.K3)(e),!t||!e.primitiveName)return{type:"cim-effect-info",effect:e,overrides:[]};const i=e.primitiveName,r=[];for(const s of t)s.primitiveName===i&&r.push({...s,propertyName:(0,a.YF)(s.propertyName)});return{type:"cim-effect-info",effect:e,overrides:r}}static async resolveSymbolOverrides(e,t,i,r,s,o,l){if(null===e||void 0===e||!e.symbol)return null;let{symbol:c,primitiveOverrides:p}=e;const u=!!p;if(!u&&!r)return c;c=(0,n.o8)(c),p=(0,n.o8)(p);let h=!0;if(t||(t={attributes:{}},h=!1),u){if(h||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$feature"))}))),l||(p=p.filter((e=>{var t;return!(null!==(t=e.valueExpressionInfo)&&void 0!==t&&t.expression.includes("$view"))}))),p.length>0){const e={spatialReference:i,fields:(0,a.O2)(t.attributes),geometryType:s};await f.createRenderExpressions(p,e),f.evaluateOverrides(p,t,null!==s&&void 0!==s?s:"esriGeometryPoint",o,l)}f.applyOverrides(c,p)}return r&&f.applyDictionaryTextOverrides(c,t,r,null),c}static async createRenderExpressions(e,t){const i=[];for(const r of e){const e=r.valueExpressionInfo;if(!e||f._expressionToRenderExpression.has(e.expression))continue;const s=(0,o.Ad)(e.expression,t.spatialReference,t.fields);i.push(s),s.then((t=>f._expressionToRenderExpression.set(e.expression,t)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,t,i,r,n){const o={$view:{scale:null===n||void 0===n?void 0:n.scale}};for(const a of e){a.value&&"object"==typeof a.value&&(0,s.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=y(a.value));const e=a.valueExpressionInfo;if(!e)continue;const n=f._expressionToRenderExpression.get(e.expression);n&&(a.value=u(n,t,o,i,r))}}static applyDictionaryTextOverrides(e,t,i,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(null!==e&&void 0!==e&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const n=e.symbolLayers;if(!n)return;for(const o of n)o&&"CIMVectorMarker"===o.type&&f.applyDictionaryTextOverrides(o,t,i,r,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&f.applyDictionaryTextOverrides(e,t,i,r)}break;case"CIMMarkerGraphic":{const n=e.textString;if(n&&n.includes("[")){const o=(0,a.gQ)(n,i);e.textString=(0,a.FM)(t,o,r,s)}}}}static applyOverrides(e,t,i,r){if(e.primitiveName)for(const s of t)if(s.primitiveName===e.primitiveName){const t=(0,a.YF)(s.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),i){let t=!1;for(const r of i)r.primitiveName===e.primitiveName&&(t=!0);t||i.push(s)}null!=s.value&&(e[t]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)f.applyOverrides(s,t,i,r);if(e.symbolLayers)for(const s of e.symbolLayers)f.applyOverrides(s,t,i,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)f.applyOverrides(s,t,i,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)f.applyOverrides(s,t,i,r),f.applyOverrides(s.symbol,t,i,r)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const i of e)void 0!==i.value&&(t+="".concat(i.primitiveName).concat(i.propertyName).concat(JSON.stringify(i.value)));return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r.A(t).toRgba();return e[3]*=255,e}return t}}f._expressionToRenderExpression=new Map},731:(e,t,i)=>{i.d(t,{A:()=>w});var r,s=i(35143),n=i(45802),o=i(42553),a=i(30726),l=i(46053),c=(i(81806),i(76460),i(47249),i(28379)),p=i(85842),u=i(17707),h=i(53430);let d=r=class extends o.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,h.Dx)(e,t,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=r=(0,s._)([(0,p.$)("esri.layers.support.FeatureExpressionInfo")],d);const y=d;var f,m=i(59097);const v=(0,n.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new n.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let b=f=class extends o.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,i,r){t[i]=e.write({},r),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,s._)([(0,l.MZ)({type:y,json:{write:!0}})],b.prototype,"featureExpressionInfo",void 0),(0,s._)([(0,c.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],b.prototype,"readFeatureExpressionInfo",null),(0,s._)([(0,u.K)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],b.prototype,"writeFeatureExpressionInfo",null),(0,s._)([(0,l.MZ)({type:v.apiValues,nonNullable:!0,json:{type:v.jsonValues,read:v.read,write:{writer:v.write,isRequired:!0}}})],b.prototype,"mode",null),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],b.prototype,"offset",void 0),(0,s._)([(0,l.MZ)({type:m.KQ,json:{type:String,read:g.read,write:g.write}})],b.prototype,"unit",null),b=f=(0,s._)([(0,p.$)("esri.layers.support.ElevationInfo")],b);const w=b},59097:(e,t,i)=>{i.d(t,{Ao:()=>s,KQ:()=>n});var r=i(3454);function s(e){return 1/(r.j[e]||1)}const n=function(){const e=Object.keys(r.j);return e.sort(),e}()},90104:(e,t,i)=>{i.d(t,{e:()=>M});var r,s=i(35143),n=i(94643),o=i(3975),a=i(50076),l=i(68134),c=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),u=i(68002),h=i(21904),d=i(7464),y=i(97001);let f=r=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"left",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"right",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"top",void 0),(0,s._)([(0,c.MZ)({type:[Number,String],json:{write:!0}})],f.prototype,"bottom",void 0),f=r=(0,s._)([(0,p.$)("esri.views.layers.support.ClipRect")],f);const m=f;var v=i(47266);let g=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,c.MZ)({type:[[[Number]]],json:{write:!0}})],g.prototype,"path",void 0),g=(0,s._)([(0,p.$)("esri.views.layers.support.Path")],g);const b=g,w=n.A.ofType({key:"type",base:null,typeMap:{rect:m,path:b,geometry:v.A}}),M=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,r;const s=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(r=this.view)&&void 0!==r&&r.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:r}=t;return(0,u.zx)(e,i,r)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,c.MZ)()],t.prototype,"attached",void 0),(0,s._)([(0,c.MZ)({type:w,set(e){const t=(0,o.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"container",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"moving",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,c.MZ)()],t.prototype,"updateSuspended",null),(0,s._)([(0,c.MZ)()],t.prototype,"updating",null),(0,s._)([(0,c.MZ)()],t.prototype,"view",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,c.MZ)({type:d.A})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},11642:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var r=i(35143),s=i(69539),n=i(39356),o=i(30726),a=i(68134),l=i(46053),c=(i(81806),i(76460),i(47249),i(85842)),p=i(63733),u=i(69098),h=i(42553);let d=class extends((0,u.O)(h.oY)){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,r._)([(0,l.MZ)({type:Boolean})],d.prototype,"frameCenter",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],d.prototype,"frameOutline",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],d.prototype,"lineOfSight",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],d.prototype,"sensorLocation",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],d.prototype,"sensorTrail",void 0),d=(0,r._)([(0,c.$)("esri.layers.support.TelemetryDisplay")],d);const y=d;var f=i(90104),m=i(31394),v=i(45992),g=i(91196);const b=new s.A([255,127,0]);let w=class extends((0,f.e)(g.A)){constructor(){super(...arguments),this._graphicsLayer=new p.A,this._frameOutlineGraphic=new n.A({symbol:{type:"simple-fill",outline:{type:"simple-line",color:b}}}),this._sensorTrailGraphic=new n.A({symbol:{type:"simple-line",color:b}}),this._lineOfSightGraphic=new n.A({symbol:{type:"simple-line",color:b}}),this._sensorLocationGraphic=new n.A({symbol:{type:"simple-marker",color:b}}),this._frameCenterGraphic=new n.A({symbol:{type:"simple-marker",color:b}}),this.layer=null,this.symbolColor=b,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,o.pR)(this._graphicsLayer)}initialize(){var e,t,i,r,s,n,o,l,c,p;this.addHandles((0,a.wB)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),a.Vh)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new y({frameCenter:null===(e=null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameCenter)||void 0===e||e,frameOutline:null===(i=null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.frameOutline)||void 0===i||i,lineOfSight:null===(s=null===(n=this.layer.telemetryDisplay)||void 0===n?void 0:n.lineOfSight)||void 0===s||s,sensorLocation:null===(o=null===(l=this.layer.telemetryDisplay)||void 0===l?void 0:l.sensorLocation)||void 0===o||o,sensorTrail:null===(c=null===(p=this.layer.telemetryDisplay)||void 0===p?void 0:p.sensorTrail)||void 0===c||c})}attach(){this.graphicsView=new v.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new m.A(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,a.wB)((()=>{var e,t,i,r,s;return[null===(e=this.layer.telemetryDisplay)||void 0===e?void 0:e.frameCenter,null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameOutline,null===(i=this.layer.telemetryDisplay)||void 0===i?void 0:i.sensorLocation,null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.sensorTrail,null===(s=this.layer.telemetryDisplay)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateVisibleTelemetryElements()),a.Vh),(0,a.wB)((()=>{var e,t,i,r,s;return[this.layer.telemetry,null===(e=this.visibleTelemetryElements)||void 0===e?void 0:e.frameCenter,null===(t=this.visibleTelemetryElements)||void 0===t?void 0:t.frameOutline,null===(i=this.visibleTelemetryElements)||void 0===i?void 0:i.sensorLocation,null===(r=this.visibleTelemetryElements)||void 0===r?void 0:r.sensorTrail,null===(s=this.visibleTelemetryElements)||void 0===s?void 0:s.lineOfSight]}),(()=>this._updateGraphicGeometries()),a.Vh)])}detach(){this.container.removeAllChildren(),this.graphicsView=(0,o.pR)(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};(0,r._)([(0,l.MZ)()],w.prototype,"graphicsView",void 0),(0,r._)([(0,l.MZ)()],w.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],w.prototype,"symbolColor",void 0),(0,r._)([(0,l.MZ)({type:y})],w.prototype,"visibleTelemetryElements",void 0),w=(0,r._)([(0,c.$)("esri.views.2d.layers.VideoLayerView2D")],w);const M=w},31394:(e,t,i)=>{i.d(t,{A:()=>o});var r=i(61551),s=i(8995),n=i(13692);class o extends s.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var r=i(35143),s=i(91967),n=i(54099),o=i(5632),a=i(76460),l=i(30726),c=i(91291),p=i(46053),u=(i(81806),i(47249),i(85842)),h=i(19451);let d=class extends((0,o.sA)((0,c.g)(n.A.EventedMixin(s.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,p.MZ)()],d.prototype,"fullOpacity",null),(0,r._)([(0,p.MZ)()],d.prototype,"layer",void 0),(0,r._)([(0,p.MZ)()],d.prototype,"parent",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],d.prototype,"suspended",null),(0,r._)([(0,p.MZ)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,r._)([(0,p.MZ)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,r._)([(0,p.MZ)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,r._)([(0,p.MZ)()],d.prototype,"visible",null),(0,r._)([(0,p.MZ)()],d.prototype,"view",void 0),d=(0,r._)([(0,u.$)("esri.views.layers.LayerView")],d);const y=d},97001:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(35143),s=i(42553),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let a=class extends s.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,r._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,r._)([(0,o.$)("esri.views.layers.support.ClipArea")],a);const l=a},47266:(e,t,i)=>{i.d(t,{A:()=>y});var r,s=i(35143),n=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),a=i(89189),l=i(19902),c=i(97001),p=i(76797),u=i(65215);const h={base:a.A,key:"type",typeMap:{extent:p.A,polygon:u.A}};let d=r=class extends c.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new r({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,n.MZ)({types:h,json:{read:l.rS,write:!0}})],d.prototype,"geometry",void 0),d=r=(0,s._)([(0,o.$)("esri.views.layers.support.Geometry")],d);const y=d}}]);
//# sourceMappingURL=2531.0498006d.chunk.js.map