"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[4507],{80979:(e,t,a)=>{a.d(t,{K:()=>s});const s=["operational-layers","basemap","ground"]},55053:(e,t,a)=>{a.d(t,{ui:()=>x,Yj:()=>y,id:()=>b,kF:()=>p,fV:()=>f,C1:()=>M,hG:()=>D,hn:()=>A,ke:()=>v,Ih:()=>w,M6:()=>h,Qo:()=>_,Fm:()=>S,PY:()=>u,OZ:()=>m});var s=a(82111),i=a(80979),r=a(76797),n=a(13312),o=a(79453),l=(a(18690),a(53084),a(18288));var d=a(731),c=a(2183);const u={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:i.K}}},h={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,a){t[a]=!e}}}},p={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:i.K}}},m={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.w}}},f={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:i.K}}},y={value:null,type:d.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:i.K}}};function _(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const g={write:{enabled:!0,layerContainerTypes:i.K},read:!0},v={type:Number,json:{origins:{"web-document":g,"portal-item":{write:!0}}}},w={...v,json:{...v.json,origins:{"web-document":{...g,write:{enabled:!0,layerContainerTypes:i.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,a)=>{var s;return a&&"service"!==a.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?null!==(s=t.layerDefinition)&&void 0!==s&&s.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,c.D)(t.layerDefinition.drawingInfo.transparency):void 0:(0,c.D)(t.drawingInfo.transparency)}}}},x={type:s.A,readOnly:!0,get(){var e,t,a;const i=null!=(null===(e=this.layer)||void 0===e?void 0:e.timeInfo)?this.layer:null!=(null===(t=this.i3slayer)||void 0===t?void 0:t.timeInfo)?this.i3slayer:null;if(null==i)return null;const{datesInUnknownTimezone:r,timeOffset:n,useViewTime:o}=i,d=null===(a=this.view)||void 0===a?void 0:a.timeExtent;let c=i.timeExtent;r&&(c=function(e){if(!e)return e;const{start:t,end:a}=e;return new s.A({start:null!=t?(0,l.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=a?(0,l.S1)(a,a.getTimezoneOffset(),"minutes"):a})}(c));let u=o?d&&c?d.intersection(c):d||c:c;if(!u||u.isEmpty||u.isAllTime)return u;n&&(u=u.offset(-n.value,n.unit)),r&&(u=function(e){if(!e)return e;const{start:t,end:a}=e;return new s.A({start:null!=t?(0,l.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=a?(0,l.S1)(a,-a.getTimezoneOffset(),"minutes"):a})}(u));const h=this._get("timeExtent");return u.equals(h)?h:u}},S={type:r.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const a=r.A.fromJSON(e);return null!=t.spatialReference&&"object"==typeof t.spatialReference&&(a.spatialReference=n.A.fromJSON(t.spatialReference)),a}}}},read:!1}},b={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},A={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.minScale",write:!0}},D={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:i.K}}},name:"layerDefinition.maxScale",write:!0}},M={json:{write:{ignoreOrigin:!0,layerContainerTypes:i.K},origins:{"web-map":{read:!1,write:!1}}}}},731:(e,t,a)=>{a.d(t,{A:()=>w});var s,i=a(35143),r=a(45802),n=a(42553),o=a(30726),l=a(46053),d=(a(81806),a(76460),a(47249),a(28379)),c=a(85842),u=a(17707),h=a(53430);let p=s=class extends n.oY{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,h.Dx)(e,t,this.expression)}clone(){return new s({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,i._)([(0,c.$)("esri.layers.support.FeatureExpressionInfo")],p);const m=p;var f,y=a(59097);const _=(0,r.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new r.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=f=class extends n.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,a,s){t[a]=e.write({},s),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,o.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,i._)([(0,l.MZ)({type:m,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),(0,i._)([(0,d.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),(0,i._)([(0,u.K)("featureExpressionInfo",{featureExpressionInfo:{type:m},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),(0,i._)([(0,l.MZ)({type:_.apiValues,nonNullable:!0,json:{type:_.jsonValues,read:_.read,write:{writer:_.write,isRequired:!0}}})],v.prototype,"mode",null),(0,i._)([(0,l.MZ)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),(0,i._)([(0,l.MZ)({type:y.KQ,json:{type:String,read:g.read,write:g.write}})],v.prototype,"unit",null),v=f=(0,i._)([(0,c.$)("esri.layers.support.ElevationInfo")],v);const w=v},59097:(e,t,a)=>{a.d(t,{Ao:()=>i,KQ:()=>r});var s=a(3454);function i(e){return 1/(s.j[e]||1)}const r=function(){const e=Object.keys(s.j);return e.sort(),e}()},64022:(e,t,a)=>{a.d(t,{A:()=>oe});var s=a(35143),i=a(39356),r=a(91967),n=a(68134),o=a(46053),l=(a(81806),a(76460)),d=(a(47249),a(85842)),c=a(76931);function u(e){return"constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function h(e){const t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function p(e){if(!e.hasVisualVariables("size"))return{kind:"constant",value:[(0,c.Lz)(e.trailWidth)]};const t=e.getVisualVariablesForType("size")[0],a=[],s=[];let i;if(t.stops){for(const e of t.stops)a.push(e.value),s.push((0,c.Lz)(e.size));i=t.stops.length}else a.push(t.minDataValue,t.maxDataValue),s.push((0,c.Lz)(t.minSize),(0,c.Lz)(t.maxSize)),i=2;return{kind:"ramp",stops:a,values:s,count:i}}function m(e){if(!e.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=e.getVisualVariablesForType("opacity")[0],a=[],s=[];for(const i of t.stops)a.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:a,values:s,count:t.stops.length}}function f(e,t,a,s){switch(t){case"int":e.setUniform1iv(a,s);break;case"float":e.setUniform1fv(a,s);break;case"vec2":e.setUniform2fv(a,s);break;case"vec3":e.setUniform3fv(a,s);break;case"vec4":e.setUniform4fv(a,s)}}function y(e,t,a,s){"constant"===s.kind?f(e,a,"u_".concat(t),s.value):(f(e,"float","u_".concat(t,"_stops"),s.stops),f(e,a,"u_".concat(t,"_values"),s.values),e.setUniform1i("u_".concat(t,"_count"),s.count))}function _(e,t){return e===t||null!=e&&null!=t&&e.equals(t)}function g(e,t){if(!function(e,t){let a=!0;return a=a&&e.collisions===t.collisions,a=a&&e.density===t.density,a=a&&e.interpolate===t.interpolate,a=a&&e.lineCollisionWidth===t.lineCollisionWidth,a=a&&e.lineSpacing===t.lineSpacing,a=a&&e.maxTurnAngle===t.maxTurnAngle,a=a&&e.minSpeedThreshold===t.minSpeedThreshold,a=a&&e.segmentLength===t.segmentLength,a=a&&e.smoothing===t.smoothing,a=a&&e.velocityScale===t.velocityScale,a=a&&e.verticesPerLine===t.verticesPerLine,a}(e.simulationSettings,t.simulationSettings))return!1;if(!_(e.timeExtent,t.timeExtent))return!1;let a=!0;return a=a&&e.loadImagery===t.loadImagery,a=a&&e.createFlowMesh===t.createFlowMesh,a=a&&e.color.kind===t.color.kind,a=a&&e.opacity.kind===t.opacity.kind,a=a&&e.size.kind===t.size.kind,a}var v=a(50346),w=a(76718),x=a(93345),S=a(98433),b=a(96673),A=a(36911),D=a(21812);class M{constructor(e){this._params=e,this.animated=!1}isCompatible(e){if(!(e instanceof M))return!1;if(!_(this._params.timeExtent,e._params.timeExtent))return!1;let t=!0;return t=t&&this._params.loadImagery===e._params.loadImagery,t=t&&this._params.color.kind===e._params.color.kind,t=t&&this._params.opacity.kind===e._params.opacity.kind,t}async load(e,t){const{extent:a,size:s}=e;(0,v.Te)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t);return new E(i,{color:this._params.color,opacity:this._params.opacity})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(x.dn.ONE,x.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),y(i,"color","vec4",this._params.color),y(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(x.WR.TRIANGLE_STRIP,0,4)}}const I=new Map;I.set("a_position",0),I.set("a_texcoord",1);const T={geometry:[new D._("a_position",2,x.pe.UNSIGNED_SHORT,0,8),new D._("a_texcoord",2,x.pe.UNSIGNED_SHORT,4,8)]},R={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:I};class E{constructor(e,t){this._flowData=e,this._values=t}attach(e){const{context:t}=e,{width:a,height:s}=this._flowData,i=w.g.createVertex(t,x._U.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),r=new A.Z(t,I,T,{geometry:i}),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity");const o=e.painter.materialManager.getProgram(R,n);let l=1e6,d=-1e6;for(let p=0;p<s;p++)for(let e=0;e<a;e++)if(0!==this._flowData.mask[p*a+e]){const t=this._flowData.data[2*(p*a+e)],s=this._flowData.data[2*(p*a+e)+1],i=Math.sqrt(t*t+s*s);l=Math.min(l,i),d=Math.max(d,i)}const c=new Uint8Array(4*a*s);for(let p=0;p<s;p++)for(let e=0;e<a;e++)if(0!==this._flowData.mask[p*a+e]){const t=this._flowData.data[2*(p*a+e)],s=this._flowData.data[2*(p*a+e)+1],i=(Math.sqrt(t*t+s*s)-l)/(d-l);c[4*(p*a+e)]=255*i,c[4*(p*a+e)+1]=0,c[4*(p*a+e)+2]=0,c[4*(p*a+e)+3]=255}else c[4*(p*a+e)]=0,c[4*(p*a+e)+1]=0,c[4*(p*a+e)+2]=0,c[4*(p*a+e)+3]=0;const u=new b.R;u.internalFormat=x.Ab.RGBA,u.wrapMode=x.pF.CLAMP_TO_EDGE,u.flipped=!0,u.width=a,u.height=s;const h=new S.g(t,u,c);this.vertexArray=r,this.program=o,this.texture=h,this.min=l,this.max=d,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}class z{constructor(e){this._params=e}get animated(){return this._params.flowSpeed>0}isCompatible(e){return e instanceof z&&g(this._params,e._params)}async load(e,t){const{extent:a,size:s}=e;(0,v.Te)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,t);return new V(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(x.dn.ONE,x.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),y(i,"color","vec4",this._params.color),y(i,"opacity","float",this._params.opacity),y(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(x.WR.TRIANGLES,a.indexCount,x.pe.UNSIGNED_INT,0)}}const O=new Map;O.set("a_xyts0",0),O.set("a_xyts1",1),O.set("a_typeIdDurationSeed",2),O.set("a_extrudeInfo",3);const U={geometry:[new D._("a_xyts0",4,x.pe.FLOAT,0,64),new D._("a_xyts1",4,x.pe.FLOAT,16,64),new D._("a_typeIdDurationSeed",4,x.pe.FLOAT,32,64),new D._("a_extrudeInfo",4,x.pe.FLOAT,48,64)]},F={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:O};class V{constructor(e,t,a){this._vertexData=e,this._indexData=t,this._values=a}attach(e){const{context:t}=e,a=w.g.createVertex(t,x._U.STATIC_DRAW,this._vertexData),s=w.g.createIndex(t,x._U.STATIC_DRAW,this._indexData),i=new A.Z(t,O,U,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=e.painter.materialManager.getProgram(F,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}class P{constructor(e){this._styles=e}get animated(){return this._styles.reduce(((e,t)=>e||t.animated),!1)}isCompatible(e){if(!(e instanceof P))return!1;if(this._styles.length!==e._styles.length)return!1;const t=this._styles.length;for(let a=0;a<t;a++)if(!this._styles[a].isCompatible(e._styles[a]))return!1;return!0}async load(e,t){const a=await Promise.all(this._styles.map((a=>a.load(e,t))));return new k(a)}render(e,t,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(e,t,a.resources[s])}}class k{constructor(e){this.resources=e}attach(e){for(const t of this.resources)t.attach(e)}detach(){for(const e of this.resources)e.detach()}get ready(){return this.resources.reduce(((e,t)=>e&&t.ready),!0)}}class C{constructor(e){this._params=e}get animated(){return this._params.flowSpeed>0}isCompatible(e){return e instanceof C&&g(this._params,e._params)}async load(e,t){const{extent:a,size:s}=e;(0,v.Te)(t);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,t),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,t);return new Z(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(e,t,a){const{context:s}=e,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(x.dn.ONE,x.dn.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),y(i,"color","vec4",this._params.color),y(i,"opacity","float",this._params.opacity),y(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(x.WR.TRIANGLES,a.indexCount,x.pe.UNSIGNED_INT,0)}}const L=new Map;L.set("a_positionAndSide",0),L.set("a_timeInfo",1),L.set("a_extrude",2),L.set("a_speed",3);const N={geometry:[new D._("a_positionAndSide",3,x.pe.FLOAT,0,36),new D._("a_timeInfo",3,x.pe.FLOAT,12,36),new D._("a_extrude",2,x.pe.FLOAT,24,36),new D._("a_speed",1,x.pe.FLOAT,32,36)]},j={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:L};class Z{constructor(e,t,a){this._vertexData=e,this._indexData=t,this._values=a}attach(e){const{context:t}=e,a=w.g.createVertex(t,x._U.STATIC_DRAW,this._vertexData),s=w.g.createIndex(t,x._U.STATIC_DRAW,this._indexData),i=new A.Z(t,L,N,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=e.painter.materialManager.getProgram(j,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}}function q(e,t){const{flowSpeed:a,trailLength:s}=e,i=function(e){const t=u(p(e)),a=t,s=Math.max(t/2,5),i=Math.round((0,c.Lz)(e.maxPathLength)/s)+1,{density:r}=e;return{smoothing:(0,c.Lz)(e.smoothing),interpolate:!0,velocityScale:"flow-from"===e.flowRepresentation?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:s,maxTurnAngle:1,collisions:!0,lineCollisionWidth:a,lineSpacing:10,density:r}}(e);let r=null;const n={opacity:m(e),size:p(e)};let o=function(e){if(!e.hasVisualVariables("color"))return{kind:"constant",value:h(e.color)};const t=e.getVisualVariablesForType("color")[0],a=[],s=[];for(const i of t.stops)a.push(i.value),Array.prototype.push.apply(s,h(i.color));return{kind:"ramp",stops:a,values:s,count:t.stops.length}}(e);if("none"===e.background)n.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const e={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};r=new M(e),n.color={kind:"constant",value:[.1,.1,.1,1]}}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:s,flowSpeed:a,featheringSize:1,featheringOffset:.5,introFade:true,fadeToZero:true,decayRate:2.3,color:n.color,opacity:n.opacity,size:n.size},d="butt"===e.trailCap||u(p(e))<=4?new C(l):new z(l);return null!=r?new P([r,d]):d}var B=a(46533),G=a(85827),W=a(3986);class K extends W.A{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:(0,G.vt)(),displayViewMat3:(0,G.vt)()}}dispose(){}prepareState(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(x.MT.EQUAL,0,255)}draw(e,t){const{requestRender:a,allowDelayedRender:s}=e,{displayData:i}=t;if(null==i)return;if("loaded"===i.state.name&&i.attach(e),"attached"!==i.state.name)return;const r=i.state.resources;!s||r.ready||null==a?(this._visualState.time=e.time/1e3,this._visualState.dvsMat3=t.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=e.state.displayViewMat3,i.flowStyle.render(e,this._visualState,r),i.flowStyle.animated&&null!=a&&a()):a()}}var H=a(61551),$=a(36201);class J extends $.A{constructor(){super(...arguments),this.flowStyle=null}doRender(e){super.doRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"flow",brushes:[K],target:()=>this.children,drawPhase:H.S5.MAP});return[...super.prepareRenderPasses(e),t]}}a(35238);var Q=a(15941),Y=a(13904);class X{constructor(e,t,a,s){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=a,this.pixelRatio=s}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(t,e.signal);this.state={name:"loaded",resources:a}}attach(e){if("loaded"!==this.state.name)return void l.A.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const t=this.state.resources;t.attach(e),this.state={name:"attached",resources:t}}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){return!!this.flowStyle.isCompatible(e.flowStyle)&&(!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0))}}var ee=a(63919),te=a(8794);class ae extends te.q{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(e){this._displayData=e,this.requestRender()}clear(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(e){const{displayData:t}=this;if(null==t)return;const a=t.extent.xmin,s=t.extent.ymax,i=[0,0];e.toScreen(i,[a,s]);const r=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,n=(0,Q.kU)(e.rotation),{displayViewScreenMat3:o}=this.transforms;(0,ee.kN)(o,[-1,1,0]),(0,ee.hs)(o,o,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),(0,ee.Tl)(o,o,[i[0],i[1],0]),(0,ee.e$)(o,o,n),(0,ee.hs)(o,o,[r*e.pixelRatio,r*e.pixelRatio,1])}_createTransforms(){return{displayViewScreenMat3:(0,G.vt)()}}}var se=a(76797);let ie=class extends r.A{constructor(e){super(e),this._flowDisplayObject=new ae,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(e){const{flowStyle:t}=this.flowContainer;if(null==t)return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:r}=e.state,n=function(e,t){const a=new Y.A({x:(e.xmax+e.xmin)/2,y:(e.ymax+e.ymin)/2,spatialReference:e.spatialReference}),s=e.xmax-e.xmin,i=e.ymax-e.ymin,r=Math.abs(Math.cos((0,Q.kU)(t))),n=Math.abs(Math.sin((0,Q.kU)(t))),o=r*s+n*i,l=n*s+r*i,d=new se.A({xmin:a.x-o/2,ymin:a.y-l/2,xmax:a.x+o/2,ymax:a.y+l/2,spatialReference:e.spatialReference});return d.centerAt(a),d}(a,s);n.expand(1.15);const o=[Math.round((n.xmax-n.xmin)/i),Math.round((n.ymax-n.ymin)/i)],d=new X(t,n,o,r);if(null!=this._loading){if(this._loading.update(d))return;this._loading.detach(),this._loading=null}null!=this._flowDisplayObject.displayData&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(e=>{(0,v.zf)(e)||(l.A.getLogger(this).error("A resource failed to load.",e),this._loading=null)})),this._loading=d)}_clear(){this._flowDisplayObject.clear(),null!=this._loading&&(this._loading.detach(),this._loading=null)}};(0,s._)([(0,o.MZ)()],ie.prototype,"_loading",void 0),(0,s._)([(0,o.MZ)()],ie.prototype,"flowContainer",void 0),(0,s._)([(0,o.MZ)()],ie.prototype,"updating",null),ie=(0,s._)([(0,d.$)("esri.views.2d.engine.flow.FlowStrategy")],ie);const re=ie;let ne=class extends r.A{constructor(){super(...arguments),this._loadImagery=(e,t,a,s,i)=>(0,B.pH)(this.layer,e,t,a,s,i),this._createFlowMesh=(e,t,a,s)=>this.layer.createFlowMesh({meshType:e,flowData:a,simulationSettings:t},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:e}=this,t=()=>{this._loadImagery=(t,a,s,i,r)=>(0,B.pH)(e,t,a,s,i,r),this._updateVisualization()};"multidimensionalDefinition"in e?this.addHandles((0,n.wB)((()=>e.multidimensionalDefinition),t)):this.addHandles([(0,n.wB)((()=>e.mosaicRule),t),(0,n.wB)((()=>e.rasterFunction),t),(0,n.wB)((()=>e.definitionExpression),t)]),this.container=new J,this._strategy=new re({flowContainer:this.container}),this._updateVisualization()}detach(){var e;this._strategy.destroy(),null!==(e=this.container)&&void 0!==e&&e.removeAllChildren(),this.container=null,this.removeHandles()}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}hitTest(e){return new i.A({attributes:{},geometry:e.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const e=this.layer.renderer;if(null==e||"flow"!==e.type)return;const t=q(e,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};(0,s._)([(0,o.MZ)()],ne.prototype,"_strategy",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"attached",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"layer",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"layerView",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"type",void 0),(0,s._)([(0,o.MZ)()],ne.prototype,"updating",null),(0,s._)([(0,o.MZ)()],ne.prototype,"timeExtent",void 0),ne=(0,s._)([(0,d.$)("esri.views.2d.engine.flow.FlowView2D")],ne);const oe=ne},17331:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(3986),i=a(93345);const r=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),n=new Float32Array([0,92/255,230/255,1]),o={beaufort_ft:r,beaufort_m:r,beaufort_km:r,beaufort_mi:r,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:n,single_arrow:n,wind_speed:new Float32Array([0,0,0,1])},l=[0,20];class d extends s.A{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState(e){let{context:t}=e;t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(i.dn.ONE,i.dn.ONE_MINUS_SRC_ALPHA,i.dn.ONE,i.dn.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(i.eA.KEEP,i.eA.KEEP,i.eA.REPLACE)}draw(e,t){if(null==t.source||0===t.source.validPixelCount)return;const{context:a,timeline:s}=e;if(s.begin(this.name),a.setStencilFunction(i.MT.EQUAL,t.stencilRef,255),t.updateVectorFieldVAO(e),"scalar"===e.renderPass){const a=t.vaoData.scalar;a&&this._drawScalars(e,t,a.vao,a.elementCount)}else{const a=t.vaoData.magdir;a&&this._drawTriangles(e,t,a.vao,a.elementCount)}s.end(this.name)}_drawTriangles(e,t,a,s){const{context:r,painter:n,requestRender:d,allowDelayedRender:c}=e,{symbolizerParameters:u}=t,h=u.dataRange?["dataRange"]:[];"geographic"===u.rotationType&&h.push("rotationGeographic");const p=n.materialManager.getProgram(this._desc.magdir,h);if(c&&null!=d&&!p.compiled)return void d();r.useProgram(p);const{coordScale:m,opacity:f,transforms:y}=t;p.setUniform2fv("u_coordScale",m),p.setUniform1f("u_opacity",f),p.setUniformMatrix3fv("u_dvsMat3",y.displayViewScreenMat3);const{style:_,dataRange:g,rotation:v,symbolPercentRange:w}=u;p.setUniform4fv("u_colors",o[_]),p.setUniform2fv("u_dataRange",g||l),p.setUniform1f("u_rotation",v),p.setUniform2fv("u_symbolPercentRange",w);const x=this._getSymbolSize(e,t);p.setUniform2fv("u_symbolSize",x),r.bindVAO(a),r.drawElements(i.WR.TRIANGLES,s,i.pe.UNSIGNED_INT,0)}_drawScalars(e,t,a,s){const{context:r,painter:n,requestRender:o,allowDelayedRender:d}=e,{symbolizerParameters:c}=t,u=[];"wind_speed"===c.style?u.push("innerCircle"):c.dataRange&&u.push("dataRange"),"geographic"===c.rotationType&&u.push("rotationGeographic");const h=n.materialManager.getProgram(this._desc.scalar,u);if(d&&null!=o&&!h.compiled)return void o();r.useProgram(h);const{coordScale:p,opacity:m,transforms:f}=t;h.setUniform2fv("u_coordScale",p),h.setUniform1f("u_opacity",m),h.setUniformMatrix3fv("u_dvsMat3",f.displayViewScreenMat3);const{dataRange:y,symbolPercentRange:_}=c;h.setUniform2fv("u_dataRange",y||l),h.setUniform2fv("u_symbolPercentRange",_);const g=this._getSymbolSize(e,t);h.setUniform2fv("u_symbolSize",g),r.bindVAO(a),r.drawElements(i.WR.TRIANGLES,s,i.pe.UNSIGNED_INT,0)}_getSymbolSize(e,t){const a=t.key?2**(e.displayLevel-t.key.level):t.resolution/e.state.resolution,{symbolTileSize:s}=t.symbolizerParameters;return[s/(Math.round((t.width-t.offset[0])/s)*s)/a,s/(Math.round((t.height-t.offset[1])/s)*s)/a]}}},86386:(e,t,a)=>{a.d(t,{X:()=>h});a(81806);var s=a(63919),i=a(85827),r=a(59422),n=a(99846),o=a(8794),l=a(86340),d=a(76718),c=a(93345),u=a(36911);class h extends o.q{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=e}destroy(){var e,t;null!=this.vaoData&&(null!==(e=this.vaoData.magdir)&&void 0!==e&&e.vao.dispose(),null!==(t=this.vaoData.scalar)&&void 0!==t&&t.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var e,t;this._vaoInvalidated||null==this.vaoData||(null!==(e=this.vaoData.magdir)&&void 0!==e&&e.vao.dispose(),null!==(t=this.vaoData.scalar)&&void 0!==t&&t.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,null!=this.source&&null==this.vaoData){const{style:t}=this.symbolizerParameters;switch(t){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const t=(0,n.gf)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:a}}break;case"simple_scalar":{const t=(0,n.Ud)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t);this.vaoData={scalar:a}}break;case"wind_speed":{const t=(0,n.gf)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t),s=(0,n.Ud)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,s);this.vaoData={magdir:a,scalar:i}}}}this.ready(),this.requestRender()}}_createTransforms(){return{displayViewScreenMat3:(0,i.vt)()}}setTransform(e){const t=(0,s.D_)(this.transforms.displayViewScreenMat3),[a,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,l=n*this.height,d=Math.PI*this.rotation/180;(0,s.Tl)(t,t,(0,r.fA)(a,i)),(0,s.Tl)(t,t,(0,r.fA)(o/2,l/2)),(0,s.e$)(t,t,-d),(0,s.Tl)(t,t,(0,r.fA)(-o/2,-l/2)),(0,s.Oe)(t,t,(0,r.fA)(o,l)),(0,s.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,i=d.g.createVertex(e,c._U.STATIC_DRAW,new Float32Array(a)),r=d.g.createIndex(e,c._U.STATIC_DRAW,new Uint32Array(s)),n=(0,l.ES)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:c.pe.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:c.pe.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:c.pe.FLOAT,normalized:!1}]});return{vao:new u.Z(e,n.attributes,n.bufferLayouts,{geometry:i},r),elementCount:s.length}}}},771:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(35143),i=a(76460),r=a(50346),n=a(68134),o=(a(81806),a(47249),a(50076),a(85842));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,r.zf)(e)||i.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,o.$)("esri.layers.mixins.RefreshableLayerView")],t),t}},2257:(e,t,a)=>{a.d(t,{D8:()=>r,TO:()=>i});var s=a(53430);async function i(e){var t,a;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==i)return[];const r=await i.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=i,{objectIdField:o,typeIdField:l,globalIdField:d,relationships:c}=e;if(r.includes("*"))return["*"];const u=n?(0,s.eX)(e):[],h=(0,s.DB)(e.fieldsIndex,[...r,...u]);return l&&h.push(l),h&&o&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(o)&&!h.includes(o)&&h.push(o),h&&d&&null!==(a=e.fieldsIndex)&&void 0!==a&&a.has(d)&&!h.includes(d)&&h.push(d),c&&c.forEach((t=>{var a;const{keyField:s}=t;h&&s&&(null===(a=e.fieldsIndex)||void 0===a?void 0:a.has(s))&&!h.includes(s)&&h.push(s)})),h}function r(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=4507.347d5622.chunk.js.map