"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[9119],{69119:(t,e,r)=>{r.r(e),r.d(e,{executeForTopIds:()=>n});var i=r(54994),o=r(10415),s=r(58672);async function n(t,e,r){const n=(0,i.Dl)(t);return(await(0,o.KW)(n,s.A.from(e),{...r})).data.objectIds}},10415:(t,e,r)=>{r.d(e,{$K:()=>h,KW:()=>c,Yb:()=>y,xs:()=>m});var i=r(3825),o=r(90534),s=r(19902),n=r(1438),l=r(80963),u=r(78238),p=r(57831);const a="Layer does not support extent calculation.";function d(t,e){var r,i;const o=t.geometry,n=t.toJSON(),u=n;if(null!=o&&(u.geometry=JSON.stringify(o),u.geometryType=(0,s.$B)(o),u.inSR=(0,l.YX)(o.spatialReference)),null!==(r=n.topFilter)&&void 0!==r&&r.groupByFields&&(u.topFilter.groupByFields=n.topFilter.groupByFields.join(",")),null!==(i=n.topFilter)&&void 0!==i&&i.orderByFields&&(u.topFilter.orderByFields=n.topFilter.orderByFields.join(",")),n.topFilter&&(u.topFilter=JSON.stringify(u.topFilter)),n.objectIds&&(u.objectIds=n.objectIds.join(",")),n.orderByFields&&(u.orderByFields=n.orderByFields.join(",")),n.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?n.outFields.includes("*")?u.outFields="*":u.outFields=n.outFields.join(","):delete u.outFields,n.outSR?u.outSR=(0,l.YX)(n.outSR):o&&n.returnGeometry&&(u.outSR=u.inSR),n.returnGeometry&&delete n.returnGeometry,n.timeExtent){const t=n.timeExtent,{start:e,end:r}=t;null==e&&null==r||(u.time=e===r?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==r&&void 0!==r?r:"null")),delete n.timeExtent}return u}async function y(t,e,r,i){const o=await v(t,e,"json",i);return(0,p.q)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:v(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:v(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):v(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function v(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const p="string"==typeof t?(0,o.An)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,n.el)(a,null,s).then((t=>{const n=null===t||void 0===t?void 0:t[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.z)({...p.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},58672:(t,e,r)=>{r.d(e,{A:()=>R});var i,o=r(35143),s=r(35238),n=r(82111),l=r(45802),u=r(42553),p=r(53084),a=r(46053),d=r(40565),y=r(85842),c=r(17707),h=r(19902);r(81806),r(76460),r(47249);let m=i=class extends u.oY{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],m.prototype,"groupByFields",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],m.prototype,"topCount",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],m.prototype,"orderByFields",void 0),m=i=(0,o._)([(0,y.$)("esri.rest.support.TopFilter")],m);const v=m;var w,F=r(13312);const j=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),S=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=w=class extends u.oY{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new w((0,p.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,a.MZ)({types:s.yR,json:{read:h.rS,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,a.MZ)({type:F.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,c.K)("start"),(0,c.K)("num")],f.prototype,"writeStart",null),(0,o._)([(0,a.MZ)({type:String,json:{read:{source:"spatialRel",reader:j.read},write:{target:"spatialRel",writer:j.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.MZ)({type:n.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,a.MZ)({type:v,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,a.MZ)({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],f.prototype,"units",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=w=(0,o._)([(0,y.$)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,d.dp)(f);const R=f}}]);
//# sourceMappingURL=9119.0369fddd.chunk.js.map