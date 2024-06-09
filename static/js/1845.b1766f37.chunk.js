"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[1845],{1845:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ve});var r,l=i(35143),s=i(3825),o=i(18690),n=i(94643),a=i(50076),u=i(53084),d=i(77717),c=i(48611),p=i(50346),h=i(68134),m=i(90534),y=i(46053),f=(i(81806),i(76460),i(28379)),v=i(85842),g=i(17707),w=i(76797),x=i(25515),M=i(24552),S=i(65624),I=i(11270),L=i(94729),T=i(21617),A=i(5682),_=i(16852),b=i(88235),P=i(44067),E=i(90565),C=i(42553);i(47249);let O=r=class extends C.oY{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new r;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,l._)([(0,y.MZ)({type:w.A,json:{read:{source:"fullExtent"}}})],O.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({type:String,json:{read:{source:"id"}}})],O.prototype,"id",void 0),(0,l._)([(0,y.MZ)({type:b.A,json:{read:{source:"tileInfo"}}})],O.prototype,"tileInfo",void 0),O=r=(0,l._)([(0,v.$)("esri.layer.support.TileMatrixSet")],O);const R=O;var F;let Z=F=class extends C.oY{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new F;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.MZ)({json:{read:{source:"id"}}})],Z.prototype,"id",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],Z.prototype,"title",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"abstract"}}})],Z.prototype,"description",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"legendUrl"}}})],Z.prototype,"legendUrl",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"isDefault"}}})],Z.prototype,"isDefault",void 0),(0,l._)([(0,y.MZ)({json:{read:{source:"keywords"}}})],Z.prototype,"keywords",void 0),Z=F=(0,l._)([(0,v.$)("esri.layer.support.WMTSStyle")],Z);const V=Z;var U;let j=U=class extends C.oY{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?w.A.fromJSON(e):null}readFullExtents(e,t){var i,r,l;return null!==(i=t.fullExtents)&&void 0!==i&&i.length?t.fullExtents.map((e=>w.A.fromJSON(e))):null!==(r=null===(l=t.tileMatrixSets)||void 0===l?void 0:l.map((e=>w.A.fromJSON(e.fullExtent))).filter((e=>e)))&&void 0!==r?r:[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var e,t;let i=this._get("styleId");return i||(i=null!==(e=null===(t=this.styles)||void 0===t||null===(t=t.at(0))||void 0===t?void 0:t.id)&&void 0!==e?e:""),i}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){var e,t,i;const r=new U;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("imageFormats")&&(r.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(r.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(r.fullExtent=null===(e=this.fullExtent)||void 0===e?void 0:e.clone()),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("layer")&&(r.layer=this.layer),this.hasOwnProperty("styleId")&&(r.styleId=this.styleId),this.hasOwnProperty("styles")&&(r.styles=null===(t=this.styles)||void 0===t?void 0:t.clone()),this.hasOwnProperty("tileMatrixSetId")&&(r.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(r.tileMatrixSets=null===(i=this.tileMatrixSets)||void 0===i?void 0:i.clone()),this.hasOwnProperty("title")&&(r.title=this.title),r}};(0,l._)([(0,y.MZ)()],j.prototype,"description",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"fullExtent",void 0),(0,l._)([(0,f.w)("fullExtent",["fullExtent"])],j.prototype,"readFullExtent",null),(0,l._)([(0,y.MZ)({readOnly:!0})],j.prototype,"fullExtents",void 0),(0,l._)([(0,f.w)("fullExtents",["fullExtents","tileMatrixSets"])],j.prototype,"readFullExtents",null),(0,l._)([(0,y.MZ)()],j.prototype,"id",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"imageFormat",null),(0,l._)([(0,y.MZ)({json:{read:{source:"formats"}}})],j.prototype,"imageFormats",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"layer",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"parent",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"styleId",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(V),json:{read:{source:"styles"}}})],j.prototype,"styles",void 0),(0,l._)([(0,y.MZ)({json:{write:{ignoreOrigin:!0}}})],j.prototype,"title",void 0),(0,l._)([(0,y.MZ)()],j.prototype,"tileMatrixSetId",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],j.prototype,"tileMatrixSet",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(R),json:{read:{source:"tileMatrixSets"}}})],j.prototype,"tileMatrixSets",void 0),j=U=(0,l._)([(0,v.$)("esri.layers.support.WMTSSublayer")],j);const N=j;var k=i(34111),D=i(13904),W=i(85996),B=i(65660),K=i(83497),H=i(22848);const J=90.71428571428571;function q(e){const t=e.replaceAll(/ows:/gi,"");if(!Y("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function G(e){return e.nodeType===Node.ELEMENT_NODE}function Y(e,t){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];if(G(r)&&r.nodeName===e)return r}return null}function $(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];G(l)&&l.nodeName===e&&i.push(l)}return i}function z(e,t){const i=[];for(let r=0;r<t.childNodes.length;r++){const l=t.childNodes[r];G(l)&&l.nodeName===e&&i.push(l)}return i.map((e=>e.textContent)).filter(o.Ru)}function Q(e,t){return e.split(">").forEach((e=>{t&&(t=Y(e,t))})),t&&t.textContent}function X(e,t,i,r){let l;return Array.prototype.slice.call(r.childNodes).some((r=>{if(r.nodeName.includes(e)){const e=Y(t,r),s=null===e||void 0===e?void 0:e.textContent;if(s===i||i.split(":")&&i.split(":")[1]===s)return l=r,!0}return!1})),l}function ee(e,t,i,r,l){const s=Q("Abstract",t),o=z("Format",t);return{id:e,fullExtent:re(t),fullExtents:le(t),description:s,formats:o,styles:se(t,r),title:Q("Title",t),tileMatrixSets:oe(l,t,i)}}function te(e,t){var i;const r=[],l=null===(i=e.layerMap)||void 0===i?void 0:i.get(t);if(!l)return null;const s=$("ResourceURL",l),o=$("Dimension",l);let n,a,u,d;return o.length&&(n=Q("Identifier",o[0]),a=z("Default",o[0])||z("Value",o[0])),o.length>1&&(u=Q("Identifier",o[1]),d=z("Default",o[1])||z("Value",o[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:d}),s.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.includes("{"+n+"}"))t=t.replace("{"+n+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+n.length+2))}if(u&&d.length)if(t.includes("{"+u+"}"))t=t.replace("{"+u+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+u.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+u.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function ie(e,t,i,r,l,s,o,n){var a,u;const d=function(e,t,i){var r;const l=te(e,t),s=null===l||void 0===l?void 0:l.filter((e=>e.format===i));return null!==(r=null!==s&&void 0!==s&&s.length?s:l)&&void 0!==r?r:[]}(e,t,r);if(!((null===d||void 0===d?void 0:d.length)>0))return"";const{dimensionMap:c}=e,p=null===(a=c.get(t).dimensions)||void 0===a?void 0:a[0],h=null===(u=c.get(t).dimensions2)||void 0===u?void 0:u[0];return d[o%d.length].template.replaceAll(/\{Style\}/gi,null!==l&&void 0!==l?l:"").replaceAll(/\{TileMatrixSet\}/gi,null!==i&&void 0!==i?i:"").replaceAll(/\{TileMatrix\}/gi,s).replaceAll(/\{TileRow\}/gi,""+o).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,p).replaceAll(/\{dimensionValue2\}/gi,h)}function re(e){const t=Y("WGS84BoundingBox",e),i=t?Q("LowerCorner",t).split(" "):["-180","-90"],r=t?Q("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(r[0]),ymax:parseFloat(r[1]),spatialReference:{wkid:4326}}}function le(e){const t=[];return(0,K.p)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const i=e.getAttribute("crs").toLowerCase(),r=ne(i),l=i.includes("epsg")&&(0,B.m)(r.wkid);let s,o,n,a;(0,K.p)(e,{LowerCorner:e=>{[s,o]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([s,o]=[o,s])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:s,ymin:o,xmax:n,ymax:a,spatialReference:r})}}),t}function se(e,t){return $("Style",e).map((e=>{const i=Y("LegendURL",e),r=Y("Keywords",e),l=r?z("Keyword",r):[];let s=i&&i.getAttribute("xlink:href");return t&&(s=s&&s.replace(/^http:/i,"https:")),{abstract:Q("Abstract",e),id:Q("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:l,legendUrl:s,title:Q("Title",e)}}))}function oe(e,t,i){return $("TileMatrixSetLink",t).map((t=>function(e,t,i){const r=Y("TileMatrixSet",t).textContent,l=z("TileMatrix",t),s=i.find((e=>{const t=Y("Identifier",e),i=null===t||void 0===t?void 0:t.textContent;return!!(i===r||r.split(":")&&r.split(":")[1]===i)})),o=Y("TileMatrixSetLimits",t),n=o&&$("TileMatrixLimits",o),a=new Map;if(null!==n&&void 0!==n&&n.length)for(const v of n){const e=Y("TileMatrix",v).textContent,t=+Y("MinTileRow",v).textContent,i=+Y("MaxTileRow",v).textContent,r=+Y("MinTileCol",v).textContent,l=+Y("MaxTileCol",v).textContent;a.set(e,{minCol:r,maxCol:l,minRow:t,maxRow:i})}const u=Q("SupportedCRS",s).toLowerCase(),d=function(e,t){return ae(Y("TileMatrix",e),t)}(s,u),c=d.spatialReference,p=Y("TileMatrix",s),h=[parseInt(Q("TileWidth",p),10),parseInt(Q("TileHeight",p),10)],m=[];l.length?l.forEach(((e,t)=>{const i=X("TileMatrix","Identifier",e,s);m.push(pe(i,u,t,r,a))})):$("TileMatrix",s).forEach(((e,t)=>{m.push(pe(e,u,t,r,a))}));const y=function(e,t,i,r,l){const s=Y("BoundingBox",t);let o,n,a,u,d,c;if(s&&(o=Q("LowerCorner",s).split(" "),n=Q("UpperCorner",s).split(" ")),o&&o.length>1&&n&&n.length>1)a=parseFloat(o[0]),d=parseFloat(o[1]),u=parseFloat(n[0]),c=parseFloat(n[1]);else{const e=Y("TileMatrix",t),s=parseInt(Q("MatrixWidth",e),10),o=parseInt(Q("MatrixHeight",e),10);a=i.x,c=i.y,u=a+s*r[0]*l.resolution,d=c-o*r[1]*l.resolution}return function(e,t,i){return"1.0.0"===e&&(0,B.m)(t.wkid)&&!(i.spatialReference.isGeographic&&i.x<-90&&i.y>=-90)}(e,i.spatialReference,i)?new w.A(d,a,c,u,i.spatialReference):new w.A(a,d,u,c,i.spatialReference)}(e,s,d,h,m[0]).toJSON(),f=new b.A({dpi:96,spatialReference:c,size:h,origin:d,lods:m}).toJSON();return{id:r,fullExtent:y,tileInfo:f}}(e,t,i)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const i=function(e){return e.includes("crs84")||e.includes("crs:84")?ue.CRS84:e.includes("crs83")||e.includes("crs:83")?ue.CRS83:e.includes("crs27")||e.includes("crs:27")?ue.CRS27:null}(e);return null!=i&&(t=i),{wkid:t}}function ae(e,t){const i=ne(t),[r,l]=Q("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&(0,B.m)(i.wkid);return new D.A(s?{x:l,y:r,spatialReference:i}:{x:r,y:l,spatialReference:i})}var ue,de,ce;function pe(e,t,i,r,l){var s;const o=ne(t),n=Q("Identifier",e);let a=parseFloat(Q("ScaleDenominator",e));const u=he(o.wkid,a,r);a*=96/J;const d=+Q("MatrixWidth",e),c=+Q("MatrixHeight",e),{maxCol:p=d-1,maxRow:h=c-1,minCol:m=0,minRow:y=0}=null!==(s=l.get(n))&&void 0!==s?s:{},{x:f,y:v}=ae(e,t);return new H.A({cols:[m,p],level:i,levelValue:n,origin:[f,v],scale:a,resolution:u,rows:[y,h]})}function he(e,t,i){let r;return r=W.A.hasOwnProperty(""+e)?W.A.values[W.A[e]]:"default028mm"===i?6370997*Math.PI/180:(0,k.y7)(e).metersPerDegree,7*t/25e3/r}(de=ue||(ue={}))[de.CRS84=4326]="CRS84",de[de.CRS83=4269]="CRS83",de[de.CRS27=4267]="CRS27";const me={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let fe=ce=class extends((0,S.d)((0,T.J)((0,A.j)((0,I.q)((0,L.A)((0,d.P)(x.A))))))){constructor(){super(...arguments),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,h.wB)((()=>this.activeLayer),((e,t)=>{var i;t&&!(null!==(i=this.sublayers)&&void 0!==i&&i.includes(t))&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),h.OH),(0,h.on)((()=>this.sublayers),"after-add",(e=>{let{item:t}=e;t.layer=this,t.parent=this}),h.OH),(0,h.on)((()=>this.sublayers),"after-remove",(e=>{let{item:t}=e;t.layer=null,t.parent=null}),h.OH),(0,h.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const i of t)i.layer=null,i.parent=null;if(e)for(const i of e)i.layer=this,i.parent=this}),h.OH)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(p.QP).then((()=>this._fetchService(e))).catch((e=>{throw(0,p.QP)(e),new a.A("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,i){this.activeLayer||(this.activeLayer=new N);let r=t.layers.find((e=>e.id===this.activeLayer.id));return r||(r=t.layers[0]),this.activeLayer.read(r,i),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:i,wmtsInfo:r}=t,l=i?this._getLowerCasedUrlParams(i):null,s=null===r||void 0===r?void 0:r.layerIdentifier;let o=null;const n=null===r||void 0===r?void 0:r.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(o=n[0]):o=n);const a=null===l||void 0===l?void 0:l.format,u=null===l||void 0===l?void 0:l.style;return new N({id:s,imageFormat:a,styleId:u,tileMatrixSetId:o})}writeActiveLayer(e,t,i,r){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const s=(0,c.wc)("tileMatrixSet.tileInfo",l);t.tileInfo=s?s.toJSON(r):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const i=t.wmtsInfo;return i?this._mergeParams(i.customParameters,i.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,i){return function(e,t){return e.map((e=>{const i=new N;return i.read(e,t),i}))}(t.layers,i)}get supportedSpatialReferences(){var e,t;return null!==(e=null===(t=this.activeLayer.tileMatrixSets)||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.tileInfo)||void 0===t?void 0:t.spatialReference})).toArray().filter(o.Ru))&&void 0!==e?e:[]}get tilemapCache(){var e;const t=null===(e=this.activeLayer)||void 0===e||null===(e=e.tileMatrixSet)||void 0===e?void 0:e.tileInfo;return t?new P.A(t):void 0}get title(){var e,t;return null!==(e=null===(t=this.activeLayer)||void 0===t?void 0:t.title)&&void 0!==e?e:"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),i=this._getTileMatrixSetById(e.tileMatrixSetId),r=null===i||void 0===i?void 0:i.tileInfo,l=e.fullExtent,s=new E.x({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new M.default({fullExtent:l,urlTemplate:t,tileInfo:r,wmtsInfo:s})}async fetchTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r,o=this.getTileUrl(e,t,i),{data:n}=await(0,s.A)(o,{responseType:"image",signal:l});return n}async fetchImageBitmapTile(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=r;if(this.fetchTile!==ce.prototype.fetchTile){const s=await this.fetchTile(e,t,i,r);return(0,_.C)(s,e,t,i,l)}const o=this.getTileUrl(e,t,i),{data:n}=await(0,s.A)(o,{responseType:"blob",signal:l});return(0,_.C)(n,e,t,i,l)}findSublayerById(e){var t;return null===(t=this.sublayers)||void 0===t?void 0:t.find((t=>t.id===e))}getTileUrl(e,t,i){var r;const l=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=null===l||void 0===l||null===(r=l.tileInfo)||void 0===r?void 0:r.lods[e],o=s?s.levelValue||"".concat(s.level):"".concat(e);let n=this.resourceInfo?"":ie({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,i);return n||(n=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,"".concat(t)).replaceAll(/\{col\}/gi,"".concat(i))),n=this._appendCustomLayerParameters(n),n}getUrlTemplate(e,t,i,r){if(!this.resourceInfo){const i=function(e,t,i,r){const{dimensionMap:l}=e,s=te(e,t);let o="";if(s&&s.length>0){var n,a;const e=null===(n=l.get(t).dimensions)||void 0===n?void 0:n[0],u=null===(a=l.get(t).dimensions2)||void 0===a?void 0:a[0];o=s[0].template,o.endsWith(".xxx")&&(o=o.slice(0,-4)),o=o.replaceAll(/\{Style\}/gi,r),o=o.replaceAll(/\{TileMatrixSet\}/gi,i),o=o.replaceAll(/\{TileMatrix\}/gi,"{level}"),o=o.replaceAll(/\{TileRow\}/gi,"{row}"),o=o.replaceAll(/\{TileCol\}/gi,"{col}"),o=o.replaceAll(/\{dimensionValue\}/gi,e),o=o.replaceAll(/\{dimensionValue2\}/gi,u)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,r);if(i)return i}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+r+"&FORMAT="+i+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return me[i.toLowerCase()]&&(l=me[i.toLowerCase()]),this.url+e+"/"+r+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),q(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),q(t.data),this.serviceMode=r}catch(i){throw new a.A("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{var t;null===(t=e.tileMatrixSets)||void 0===t||t.forEach((e=>{var t;const i=e.tileInfo;i&&96!==i.dpi&&(null!==(t=i.lods)&&void 0!==t&&t.forEach((t=>{var r;t.scale=96*t.scale/i.dpi,t.resolution=he(null===(r=i.spatialReference)||void 0===r?void 0:r.wkid,t.scale*J/96,e.id)})),i.dpi=96)}))})),e}(t.data):t.data=function(e,t){var i;e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,l=new Map,s=new Map,o=Y("Contents",r);if(!o)throw new a.A("wmtslayer:wmts-capabilities-xml-is-not-valid");const n=Y("OperationsMetadata",r),u=null===n||void 0===n?void 0:n.querySelector("[name='GetTile']"),d=null===u||void 0===u?void 0:u.getElementsByTagName("Get"),c=d&&Array.prototype.slice.call(d),p=null===(i=t.url)||void 0===i?void 0:i.indexOf("https"),h=void 0!==p&&p>-1;let m,y,f=t.serviceMode,v=null===t||void 0===t?void 0:t.url;if(null!==c&&void 0!==c&&c.length&&c.some((e=>{const t=Y("Constraint",e);return!t||X("AllowedValues","Value",f,t)?(v=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!v)if(y)v=y,f="RESTful";else if(m)v=m,f="KVP";else{const e=Y("ServiceMetadataURL",r);v=null===e||void 0===e?void 0:e.getAttribute("xlink:href")}const g=v.indexOf("1.0.0/");-1===g&&"RESTful"===f?v+="/":g>-1&&(v=v.substring(0,g)),"KVP"===f&&(v+=g>-1?"":"?"),h&&(v=v.replace(/^http:/i,"https:"));const w=Q("ServiceIdentification>ServiceTypeVersion",r),x=Q("ServiceIdentification>AccessConstraints",r),M=x&&/^none$/i.test(x)?null:x,S=$("Layer",o),I=$("TileMatrixSet",o),L=S.map((e=>{const t=Q("Identifier",e);return l.set(t,e),ee(t,e,I,h,w)}));return{copyright:M,dimensionMap:s,layerMap:l,layers:L,serviceMode:f,tileUrl:v}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const i=this._getCapabilitiesUrl(e);return await(0,s.A)(i,{...t,responseType:"text"})}_getTileMatrixSetById(e){var t;const i=this.findSublayerById(this.activeLayer.id),r=null===i||void 0===i||null===(t=i.tileMatrixSets)||void 0===t?void 0:t.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,u.o8)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const i=(0,m.An)(e),r={...i.query,...t},l=(0,m.x0)(r);return""===l?i.path:"".concat(i.path,"?").concat(l)}_getCapabilitiesUrl(e){this.url=(0,m.An)(this.url).path;let t=this.url;switch(e){case"KVP":t+="?request=GetCapabilities&service=WMTS&version=".concat(this.version);break;case"RESTful":{const e="/".concat(this.version,"/WMTSCapabilities.xml"),i=new RegExp(e,"i");t=t.replace(i,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,m.An)(e).query;if(!t)return null;const i={};return Object.keys(t).forEach((e=>{i[e.toLowerCase()]=t[e]})),i}_mergeParams(e,t){const i=this._getLowerCasedUrlParams(t);if(i){const t=Object.keys(i);t.length&&(e=e?(0,u.o8)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ye.has(t)||(e[t]=i[t])})))}return e}};(0,l._)([(0,y.MZ)()],fe.prototype,"dimensionMap",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"layerMap",void 0),(0,l._)([(0,y.MZ)({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],fe.prototype,"activeLayer",void 0),(0,l._)([(0,f.w)("service","activeLayer",["layers"])],fe.prototype,"readActiveLayerFromService",null),(0,l._)([(0,f.w)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],fe.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,l._)([(0,g.K)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:b.A},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],fe.prototype,"writeActiveLayer",null),(0,l._)([(0,y.MZ)({type:String,value:"",json:{write:!0}})],fe.prototype,"copyright",void 0),(0,l._)([(0,y.MZ)({type:["show","hide"]})],fe.prototype,"listMode",void 0),(0,l._)([(0,y.MZ)({json:{read:!0,write:!0}})],fe.prototype,"blendMode",void 0),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],fe.prototype,"customParameters",void 0),(0,l._)([(0,f.w)(["portal-item","web-document"],"customParameters")],fe.prototype,"readCustomParameters",null),(0,l._)([(0,y.MZ)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],fe.prototype,"customLayerParameters",void 0),(0,l._)([(0,y.MZ)({type:w.A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],fe.prototype,"fullExtent",void 0),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"fullExtents",null),(0,l._)([(0,y.MZ)({type:["WebTiledLayer"]})],fe.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"resourceInfo",void 0),(0,l._)([(0,y.MZ)()],fe.prototype,"serviceMode",void 0),(0,l._)([(0,f.w)(["portal-item","web-document"],"serviceMode",["templateUrl"])],fe.prototype,"readServiceMode",null),(0,l._)([(0,y.MZ)({type:n.A.ofType(N)})],fe.prototype,"sublayers",void 0),(0,l._)([(0,f.w)("service","sublayers",["layers"])],fe.prototype,"readSublayersFromService",null),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"supportedSpatialReferences",null),(0,l._)([(0,y.MZ)({readOnly:!0})],fe.prototype,"tilemapCache",null),(0,l._)([(0,y.MZ)({json:{read:{source:"title"}}})],fe.prototype,"title",null),(0,l._)([(0,y.MZ)({json:{read:!1},readOnly:!0,value:"wmts"})],fe.prototype,"type",void 0),(0,l._)([(0,y.MZ)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],fe.prototype,"url",null),(0,l._)([(0,y.MZ)()],fe.prototype,"version",void 0),fe=ce=(0,l._)([(0,v.$)("esri.layers.WMTSLayer")],fe);const ve=fe},65660:(e,t,i)=>{i.d(t,{m:()=>l});const r=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return null!=e&&r.some((t=>{let[i,r]=t;return e>=i&&e<=r}))}},83497:(e,t,i)=>{function r(e,t){if(e&&t)for(const i of e.children)if(i.localName in t){const e=t[i.localName];if("function"==typeof e){const t=e(i);t&&r(i,t)}else r(i,e)}}function*l(e,t){for(const i of e.children)if(i.localName in t){const e=t[i.localName];"function"==typeof e?yield e(i):yield*l(i,e)}}i.d(t,{i:()=>l,p:()=>r})},44067:(e,t,i)=>{i.d(t,{A:()=>s});var r=i(50076),l=i(50346);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){var e;return null!==(e=this.minLOD)&&void 0!==e?e:this.tileInfo.lods[0].level}get effectiveMaxLOD(){var e;return null!==(e=this.maxLOD)&&void 0!==e?e:this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){var r;const l=null===(r=this.tileInfo)||void 0===r?void 0:r.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,s){await(0,l.NO)(s);const o=this.getAvailability(e,t,i);if("unavailable"===o)throw new r.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return o}async fetchAvailabilityUpsample(e,t,i,r,s){await(0,l.NO)(s),r.level=e,r.row=t,r.col=i;const o=this.tileInfo;return o.updateTileInfo(r),this.fetchAvailability(e,t,i,s).catch((e=>{if((0,l.zf)(e))throw e;if(o.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,s);throw e}))}}}}]);
//# sourceMappingURL=1845.b1766f37.chunk.js.map