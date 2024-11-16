var Ul=Object.defineProperty;var Vl=(n,e,t)=>e in n?Ul(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ne=(n,e,t)=>Vl(n,typeof e!="symbol"?e+"":e,t);import{j as jsxRuntimeExports,r as reactExports,l as axios,R as React,k as useViewContext,u as useAppSelector,d as getUser,m as commonjsGlobal}from"./index-BjDkvqSY.js";const IconPersonAdd=n=>jsxRuntimeExports.jsx("svg",{viewBox:"0 0 512 512",fill:"white",height:"1em",width:"1em",...n,children:jsxRuntimeExports.jsx("path",{d:"M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256zM495.38 439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 00112 480h352a30.94 30.94 0 0024.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11zM104 288v-40h40a16 16 0 000-32h-40v-40a16 16 0 00-32 0v40H32a16 16 0 000 32h40v40a16 16 0 0032 0z"})}),IconClients=()=>jsxRuntimeExports.jsx("svg",{viewBox:"0 0 640 640",fill:"black",height:"5em",width:"5em",style:{opacity:.15},children:jsxRuntimeExports.jsx("path",{d:"M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7-1.3 7.2-1.9 14.7-1.9 22.3 0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96 0-7.6-.7-15-1.9-22.3 13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7 0 11.8-9.6 21.3-21.3 21.3H405.3zm10.7-96c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 485.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3 0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"})}),IconMessages=()=>jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",baseProfile:"tiny",fill:"black",height:"5em",width:"5em",style:{opacity:.15},children:jsxRuntimeExports.jsx("path",{d:"M21 7h-3c0-1.65-1.35-3-3-3H3C1.35 4 0 5.35 0 7v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zM3 15c-.542 0-1-.458-1-1V7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1H9.5A2.502 2.502 0 007 10.5V15H3zm19 2c0 .542-.458 1-1 1H9c-.542 0-1-.458-1-1v-6.5C8 9.673 8.673 9 9.5 9H21c.542 0 1 .458 1 1v7z"})}),IconProduct=()=>jsxRuntimeExports.jsx("svg",{viewBox:"0 0 512 512",fill:"black",height:"5em",width:"5em",style:{opacity:.15},children:jsxRuntimeExports.jsx("path",{d:"M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"})}),IconGlasses=()=>jsxRuntimeExports.jsxs("svg",{viewBox:"0 0 16 16",fill:"black",height:"5em",width:"5em",style:{opacity:.15},children:[jsxRuntimeExports.jsx("path",{d:"M4.968 9.75a.5.5 0 10-.866.5A4.498 4.498 0 008 12.5a4.5 4.5 0 003.898-2.25.5.5 0 10-.866-.5A3.498 3.498 0 018 11.5a3.498 3.498 0 01-3.032-1.75zM7 5.116V5a1 1 0 00-1-1H3.28a1 1 0 00-.97 1.243l.311 1.242A2 2 0 004.561 8H5a2 2 0 001.994-1.839A2.99 2.99 0 018 6c.393 0 .74.064 1.006.161A2 2 0 0011 8h.438a2 2 0 001.94-1.515l.311-1.242A1 1 0 0012.72 4H10a1 1 0 00-1 1v.116A4.22 4.22 0 008 5c-.35 0-.69.04-1 .116z"}),jsxRuntimeExports.jsx("path",{d:"M16 8A8 8 0 110 8a8 8 0 0116 0zm-1 0A7 7 0 101 8a7 7 0 0014 0z"})]}),Cards=()=>{const[n,e]=reactExports.useState([]);reactExports.useEffect(()=>{t()},[]);const t=async()=>{await axios({method:"GET",url:"/admin/get_statistics"}).then(l=>{e(l.data)})};return jsxRuntimeExports.jsx("div",{className:"grid grid-cols-2 gap-3 w-full",children:n.map(l=>jsxRuntimeExports.jsxs("div",{className:"w-full h-full text-white flex flex-col justify-between rounded-lg shadow-lg",style:{backgroundColor:l.color},children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between px-6 pt-6",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-2 justify-between",children:[jsxRuntimeExports.jsx("h1",{className:"text-2xl font-bold",children:l.number}),jsxRuntimeExports.jsx("p",{className:"text-lg",children:l.title}),jsxRuntimeExports.jsx("p",{className:"text-xs",children:l.description})]}),jsxRuntimeExports.jsxs("div",{className:"h-20 w-20",children:[l.icon==="clients"&&jsxRuntimeExports.jsx(IconClients,{}),l.icon==="messages"&&jsxRuntimeExports.jsx(IconMessages,{}),l.icon==="product"&&jsxRuntimeExports.jsx(IconProduct,{}),l.icon==="glasses"&&jsxRuntimeExports.jsx(IconGlasses,{})]})]}),jsxRuntimeExports.jsx("div",{className:"h-8 w-full bg-black bg-opacity-15 rounded-bl-lg rounded-br-lg"})]},l.id))})};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function round(n){return n+.5|0}const lim=(n,e,t)=>Math.max(Math.min(n,t),e);function p2b(n){return lim(round(n*2.55),0,255)}function n2b(n){return lim(round(n*255),0,255)}function b2n(n){return lim(round(n/2.55)/100,0,1)}function n2p(n){return lim(round(n*100),0,100)}const map$1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hex=[..."0123456789ABCDEF"],h1=n=>hex[n&15],h2=n=>hex[(n&240)>>4]+hex[n&15],eq=n=>(n&240)>>4===(n&15),isShort=n=>eq(n.r)&&eq(n.g)&&eq(n.b)&&eq(n.a);function hexParse(n){var e=n.length,t;return n[0]==="#"&&(e===4||e===5?t={r:255&map$1[n[1]]*17,g:255&map$1[n[2]]*17,b:255&map$1[n[3]]*17,a:e===5?map$1[n[4]]*17:255}:(e===7||e===9)&&(t={r:map$1[n[1]]<<4|map$1[n[2]],g:map$1[n[3]]<<4|map$1[n[4]],b:map$1[n[5]]<<4|map$1[n[6]],a:e===9?map$1[n[7]]<<4|map$1[n[8]]:255})),t}const alpha=(n,e)=>n<255?e(n):"";function hexString(n){var e=isShort(n)?h1:h2;return n?"#"+e(n.r)+e(n.g)+e(n.b)+alpha(n.a,e):void 0}const HUE_RE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(n,e,t){const l=e*Math.min(t,1-t),i=(r,a=(r+n/30)%12)=>t-l*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function hsv2rgbn(n,e,t){const l=(i,r=(i+n/60)%6)=>t-t*e*Math.max(Math.min(r,4-r,1),0);return[l(5),l(3),l(1)]}function hwb2rgbn(n,e,t){const l=hsl2rgbn(n,1,.5);let i;for(e+t>1&&(i=1/(e+t),e*=i,t*=i),i=0;i<3;i++)l[i]*=1-e-t,l[i]+=e;return l}function hueValue(n,e,t,l,i){return n===i?(e-t)/l+(e<t?6:0):e===i?(t-n)/l+2:(n-e)/l+4}function rgb2hsl(n){const t=n.r/255,l=n.g/255,i=n.b/255,r=Math.max(t,l,i),a=Math.min(t,l,i),c=(r+a)/2;let u,p,_;return r!==a&&(_=r-a,p=c>.5?_/(2-r-a):_/(r+a),u=hueValue(t,l,i,_,r),u=u*60+.5),[u|0,p||0,c]}function calln(n,e,t,l){return(Array.isArray(e)?n(e[0],e[1],e[2]):n(e,t,l)).map(n2b)}function hsl2rgb(n,e,t){return calln(hsl2rgbn,n,e,t)}function hwb2rgb(n,e,t){return calln(hwb2rgbn,n,e,t)}function hsv2rgb(n,e,t){return calln(hsv2rgbn,n,e,t)}function hue(n){return(n%360+360)%360}function hueParse(n){const e=HUE_RE.exec(n);let t=255,l;if(!e)return;e[5]!==l&&(t=e[6]?p2b(+e[5]):n2b(+e[5]));const i=hue(+e[2]),r=+e[3]/100,a=+e[4]/100;return e[1]==="hwb"?l=hwb2rgb(i,r,a):e[1]==="hsv"?l=hsv2rgb(i,r,a):l=hsl2rgb(i,r,a),{r:l[0],g:l[1],b:l[2],a:t}}function rotate(n,e){var t=rgb2hsl(n);t[0]=hue(t[0]+e),t=hsl2rgb(t),n.r=t[0],n.g=t[1],n.b=t[2]}function hslString(n){if(!n)return;const e=rgb2hsl(n),t=e[0],l=n2p(e[1]),i=n2p(e[2]);return n.a<255?`hsla(${t}, ${l}%, ${i}%, ${b2n(n.a)})`:`hsl(${t}, ${l}%, ${i}%)`}const map={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},names$1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function unpack(){const n={},e=Object.keys(names$1),t=Object.keys(map);let l,i,r,a,c;for(l=0;l<e.length;l++){for(a=c=e[l],i=0;i<t.length;i++)r=t[i],c=c.replace(r,map[r]);r=parseInt(names$1[a],16),n[c]=[r>>16&255,r>>8&255,r&255]}return n}let names;function nameParse(n){names||(names=unpack(),names.transparent=[0,0,0,0]);const e=names[n.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const RGB_RE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(n){const e=RGB_RE.exec(n);let t=255,l,i,r;if(e){if(e[7]!==l){const a=+e[7];t=e[8]?p2b(a):lim(a*255,0,255)}return l=+e[1],i=+e[3],r=+e[5],l=255&(e[2]?p2b(l):lim(l,0,255)),i=255&(e[4]?p2b(i):lim(i,0,255)),r=255&(e[6]?p2b(r):lim(r,0,255)),{r:l,g:i,b:r,a:t}}}function rgbString(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${b2n(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const to=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,from=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function interpolate$1(n,e,t){const l=from(b2n(n.r)),i=from(b2n(n.g)),r=from(b2n(n.b));return{r:n2b(to(l+t*(from(b2n(e.r))-l))),g:n2b(to(i+t*(from(b2n(e.g))-i))),b:n2b(to(r+t*(from(b2n(e.b))-r))),a:n.a+t*(e.a-n.a)}}function modHSL(n,e,t){if(n){let l=rgb2hsl(n);l[e]=Math.max(0,Math.min(l[e]+l[e]*t,e===0?360:1)),l=hsl2rgb(l),n.r=l[0],n.g=l[1],n.b=l[2]}}function clone$1(n,e){return n&&Object.assign(e||{},n)}function fromObject(n){var e={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(e={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(e.a=n2b(n[3]))):(e=clone$1(n,{r:0,g:0,b:0,a:1}),e.a=n2b(e.a)),e}function functionParse(n){return n.charAt(0)==="r"?rgbParse(n):hueParse(n)}class Color{constructor(e){if(e instanceof Color)return e;const t=typeof e;let l;t==="object"?l=fromObject(e):t==="string"&&(l=hexParse(e)||nameParse(e)||functionParse(e)),this._rgb=l,this._valid=!!l}get valid(){return this._valid}get rgb(){var e=clone$1(this._rgb);return e&&(e.a=b2n(e.a)),e}set rgb(e){this._rgb=fromObject(e)}rgbString(){return this._valid?rgbString(this._rgb):void 0}hexString(){return this._valid?hexString(this._rgb):void 0}hslString(){return this._valid?hslString(this._rgb):void 0}mix(e,t){if(e){const l=this.rgb,i=e.rgb;let r;const a=t===r?.5:t,c=2*a-1,u=l.a-i.a,p=((c*u===-1?c:(c+u)/(1+c*u))+1)/2;r=1-p,l.r=255&p*l.r+r*i.r+.5,l.g=255&p*l.g+r*i.g+.5,l.b=255&p*l.b+r*i.b+.5,l.a=a*l.a+(1-a)*i.a,this.rgb=l}return this}interpolate(e,t){return e&&(this._rgb=interpolate$1(this._rgb,e._rgb,t)),this}clone(){return new Color(this.rgb)}alpha(e){return this._rgb.a=n2b(e),this}clearer(e){const t=this._rgb;return t.a*=1-e,this}greyscale(){const e=this._rgb,t=round(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=t,this}opaquer(e){const t=this._rgb;return t.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return modHSL(this._rgb,2,e),this}darken(e){return modHSL(this._rgb,2,-e),this}saturate(e){return modHSL(this._rgb,1,e),this}desaturate(e){return modHSL(this._rgb,1,-e),this}rotate(e){return rotate(this._rgb,e),this}}/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function noop(){}const uid=(()=>{let n=0;return()=>n++})();function isNullOrUndef(n){return n===null||typeof n>"u"}function isArray(n){if(Array.isArray&&Array.isArray(n))return!0;const e=Object.prototype.toString.call(n);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function isObject(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function isNumberFinite(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function finiteOrDefault(n,e){return isNumberFinite(n)?n:e}function valueOrDefault(n,e){return typeof n>"u"?e:n}const toDimension=(n,e)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*e:+n;function callback(n,e,t){if(n&&typeof n.call=="function")return n.apply(t,e)}function each(n,e,t,l){let i,r,a;if(isArray(n))for(r=n.length,i=0;i<r;i++)e.call(t,n[i],i);else if(isObject(n))for(a=Object.keys(n),r=a.length,i=0;i<r;i++)e.call(t,n[a[i]],a[i])}function _elementsEqual(n,e){let t,l,i,r;if(!n||!e||n.length!==e.length)return!1;for(t=0,l=n.length;t<l;++t)if(i=n[t],r=e[t],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function clone(n){if(isArray(n))return n.map(clone);if(isObject(n)){const e=Object.create(null),t=Object.keys(n),l=t.length;let i=0;for(;i<l;++i)e[t[i]]=clone(n[t[i]]);return e}return n}function isValidKey(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function _merger(n,e,t,l){if(!isValidKey(n))return;const i=e[n],r=t[n];isObject(i)&&isObject(r)?merge(i,r,l):e[n]=clone(r)}function merge(n,e,t){const l=isArray(e)?e:[e],i=l.length;if(!isObject(n))return n;t=t||{};const r=t.merger||_merger;let a;for(let c=0;c<i;++c){if(a=l[c],!isObject(a))continue;const u=Object.keys(a);for(let p=0,_=u.length;p<_;++p)r(u[p],n,a,t)}return n}function mergeIf(n,e){return merge(n,e,{merger:_mergerIf})}function _mergerIf(n,e,t){if(!isValidKey(n))return;const l=e[n],i=t[n];isObject(l)&&isObject(i)?mergeIf(l,i):Object.prototype.hasOwnProperty.call(e,n)||(e[n]=clone(i))}const keyResolvers={"":n=>n,x:n=>n.x,y:n=>n.y};function _splitKey(n){const e=n.split("."),t=[];let l="";for(const i of e)l+=i,l.endsWith("\\")?l=l.slice(0,-1)+".":(t.push(l),l="");return t}function _getKeyResolver(n){const e=_splitKey(n);return t=>{for(const l of e){if(l==="")break;t=t&&t[l]}return t}}function resolveObjectKey(n,e){return(keyResolvers[e]||(keyResolvers[e]=_getKeyResolver(e)))(n)}function _capitalize(n){return n.charAt(0).toUpperCase()+n.slice(1)}const defined=n=>typeof n<"u",isFunction=n=>typeof n=="function",setsEqual=(n,e)=>{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;return!0};function _isClickEvent(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const PI=Math.PI,TAU=2*PI,INFINITY=Number.POSITIVE_INFINITY,RAD_PER_DEG=PI/180,HALF_PI=PI/2,QUARTER_PI=PI/4,TWO_THIRDS_PI=PI*2/3,log10=Math.log10,sign=Math.sign;function almostEquals(n,e,t){return Math.abs(n-e)<t}function niceNum(n){const e=Math.round(n);n=almostEquals(n,e,n/1e3)?e:n;const t=Math.pow(10,Math.floor(log10(n))),l=n/t;return(l<=1?1:l<=2?2:l<=5?5:10)*t}function _factorize(n){const e=[],t=Math.sqrt(n);let l;for(l=1;l<t;l++)n%l===0&&(e.push(l),e.push(n/l));return t===(t|0)&&e.push(t),e.sort((i,r)=>i-r).pop(),e}function isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n)}function almostWhole(n,e){const t=Math.round(n);return t-e<=n&&t+e>=n}function _setMinAndMaxByKey(n,e,t){let l,i,r;for(l=0,i=n.length;l<i;l++)r=n[l][t],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function toRadians(n){return n*(PI/180)}function toDegrees(n){return n*(180/PI)}function _decimalPlaces(n){if(!isNumberFinite(n))return;let e=1,t=0;for(;Math.round(n*e)/e!==n;)e*=10,t++;return t}function getAngleFromPoint(n,e){const t=e.x-n.x,l=e.y-n.y,i=Math.sqrt(t*t+l*l);let r=Math.atan2(l,t);return r<-.5*PI&&(r+=TAU),{angle:r,distance:i}}function distanceBetweenPoints(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function _normalizeAngle(n){return(n%TAU+TAU)%TAU}function _angleBetween(n,e,t,l){const i=_normalizeAngle(n),r=_normalizeAngle(e),a=_normalizeAngle(t),c=_normalizeAngle(r-i),u=_normalizeAngle(a-i),p=_normalizeAngle(i-r),_=_normalizeAngle(i-a);return i===r||i===a||l&&r===a||c>u&&p<_}function _limitValue(n,e,t){return Math.max(e,Math.min(t,n))}function _int16Range(n){return _limitValue(n,-32768,32767)}function _isBetween(n,e,t,l=1e-6){return n>=Math.min(e,t)-l&&n<=Math.max(e,t)+l}function _lookup(n,e,t){t=t||(a=>n[a]<e);let l=n.length-1,i=0,r;for(;l-i>1;)r=i+l>>1,t(r)?i=r:l=r;return{lo:i,hi:l}}const _lookupByKey=(n,e,t,l)=>_lookup(n,t,l?i=>{const r=n[i][e];return r<t||r===t&&n[i+1][e]===t}:i=>n[i][e]<t),_rlookupByKey=(n,e,t)=>_lookup(n,t,l=>n[l][e]>=t);function _filterBetween(n,e,t){let l=0,i=n.length;for(;l<i&&n[l]<e;)l++;for(;i>l&&n[i-1]>t;)i--;return l>0||i<n.length?n.slice(l,i):n}const arrayEvents=["push","pop","shift","splice","unshift"];function listenArrayEvents(n,e){if(n._chartjs){n._chartjs.listeners.push(e);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),arrayEvents.forEach(t=>{const l="_onData"+_capitalize(t),i=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...r){const a=i.apply(this,r);return n._chartjs.listeners.forEach(c=>{typeof c[l]=="function"&&c[l](...r)}),a}})})}function unlistenArrayEvents(n,e){const t=n._chartjs;if(!t)return;const l=t.listeners,i=l.indexOf(e);i!==-1&&l.splice(i,1),!(l.length>0)&&(arrayEvents.forEach(r=>{delete n[r]}),delete n._chartjs)}function _arrayUnique(n){const e=new Set(n);return e.size===n.length?n:Array.from(e)}const requestAnimFrame=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function throttled(n,e){let t=[],l=!1;return function(...i){t=i,l||(l=!0,requestAnimFrame.call(window,()=>{l=!1,n.apply(e,t)}))}}function debounce(n,e){let t;return function(...l){return e?(clearTimeout(t),t=setTimeout(n,e,l)):n.apply(this,l),e}}const _toLeftRightCenter=n=>n==="start"?"left":n==="end"?"right":"center",_alignStartEnd=(n,e,t)=>n==="start"?e:n==="end"?t:(e+t)/2,_textX=(n,e,t,l)=>n===(l?"left":"right")?t:n==="center"?(e+t)/2:e,atEdge=n=>n===0||n===1,elasticIn=(n,e,t)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-e)*TAU/t)),elasticOut=(n,e,t)=>Math.pow(2,-10*n)*Math.sin((n-e)*TAU/t)+1,effects={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*HALF_PI)+1,easeOutSine:n=>Math.sin(n*HALF_PI),easeInOutSine:n=>-.5*(Math.cos(PI*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>atEdge(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>atEdge(n)?n:elasticIn(n,.075,.3),easeOutElastic:n=>atEdge(n)?n:elasticOut(n,.075,.3),easeInOutElastic(n){return atEdge(n)?n:n<.5?.5*elasticIn(n*2,.1125,.45):.5+.5*elasticOut(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let e=1.70158;return(n/=.5)<1?.5*(n*n*(((e*=1.525)+1)*n-e)):.5*((n-=2)*n*(((e*=1.525)+1)*n+e)+2)},easeInBounce:n=>1-effects.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?effects.easeInBounce(n*2)*.5:effects.easeOutBounce(n*2-1)*.5+.5};function isPatternOrGradient(n){if(n&&typeof n=="object"){const e=n.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function color(n){return isPatternOrGradient(n)?n:new Color(n)}function getHoverColor(n){return isPatternOrGradient(n)?n:new Color(n).saturate(.5).darken(.1).hexString()}const numbers=["x","y","borderWidth","radius","tension"],colors=["color","borderColor","backgroundColor"];function applyAnimationsDefaults(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),n.set("animations",{colors:{type:"color",properties:colors},numbers:{type:"number",properties:numbers}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function applyLayoutsDefaults(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const intlCache=new Map;function getNumberFormat(n,e){e=e||{};const t=n+JSON.stringify(e);let l=intlCache.get(t);return l||(l=new Intl.NumberFormat(n,e),intlCache.set(t,l)),l}function formatNumber(n,e,t){return getNumberFormat(e,t).format(n)}const formatters={values(n){return isArray(n)?n:""+n},numeric(n,e,t){if(n===0)return"0";const l=this.chart.options.locale;let i,r=n;if(t.length>1){const p=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(p<1e-4||p>1e15)&&(i="scientific"),r=calculateDelta(n,t)}const a=log10(Math.abs(r)),c=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),u={notation:i,minimumFractionDigits:c,maximumFractionDigits:c};return Object.assign(u,this.options.ticks.format),formatNumber(n,l,u)},logarithmic(n,e,t){if(n===0)return"0";const l=t[e].significand||n/Math.pow(10,Math.floor(log10(n)));return[1,2,3,5,10,15].includes(l)||e>.8*t.length?formatters.numeric.call(this,n,e,t):""}};function calculateDelta(n,e){let t=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(t)>=1&&n!==Math.floor(n)&&(t=n-Math.floor(n)),t}var Ticks={formatters};function applyScaleDefaults(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ticks.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const overrides=Object.create(null),descriptors=Object.create(null);function getScope$1(n,e){if(!e)return n;const t=e.split(".");for(let l=0,i=t.length;l<i;++l){const r=t[l];n=n[r]||(n[r]=Object.create(null))}return n}function set(n,e,t){return typeof e=="string"?merge(getScope$1(n,e),t):merge(getScope$1(n,""),e)}class Defaults{constructor(e,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=l=>l.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(l,i)=>getHoverColor(i.backgroundColor),this.hoverBorderColor=(l,i)=>getHoverColor(i.borderColor),this.hoverColor=(l,i)=>getHoverColor(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return set(this,e,t)}get(e){return getScope$1(this,e)}describe(e,t){return set(descriptors,e,t)}override(e,t){return set(overrides,e,t)}route(e,t,l,i){const r=getScope$1(this,e),a=getScope$1(this,l),c="_"+t;Object.defineProperties(r,{[c]:{value:r[t],writable:!0},[t]:{enumerable:!0,get(){const u=this[c],p=a[i];return isObject(u)?Object.assign({},p,u):valueOrDefault(u,p)},set(u){this[c]=u}}})}apply(e){e.forEach(t=>t(this))}}var defaults=new Defaults({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[applyAnimationsDefaults,applyLayoutsDefaults,applyScaleDefaults]);function toFontString(n){return!n||isNullOrUndef(n.size)||isNullOrUndef(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function _measureText(n,e,t,l,i){let r=e[i];return r||(r=e[i]=n.measureText(i).width,t.push(i)),r>l&&(l=r),l}function _longestText(n,e,t,l){l=l||{};let i=l.data=l.data||{},r=l.garbageCollect=l.garbageCollect||[];l.font!==e&&(i=l.data={},r=l.garbageCollect=[],l.font=e),n.save(),n.font=e;let a=0;const c=t.length;let u,p,_,y,x;for(u=0;u<c;u++)if(y=t[u],y!=null&&!isArray(y))a=_measureText(n,i,r,a,y);else if(isArray(y))for(p=0,_=y.length;p<_;p++)x=y[p],x!=null&&!isArray(x)&&(a=_measureText(n,i,r,a,x));n.restore();const k=r.length/2;if(k>t.length){for(u=0;u<k;u++)delete i[r[u]];r.splice(0,k)}return a}function _alignPixel(n,e,t){const l=n.currentDevicePixelRatio,i=t!==0?Math.max(t/2,.5):0;return Math.round((e-i)*l)/l+i}function clearCanvas(n,e){!e&&!n||(e=e||n.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,n.width,n.height),e.restore())}function drawPoint(n,e,t,l){drawPointLegend(n,e,t,l,null)}function drawPointLegend(n,e,t,l,i){let r,a,c,u,p,_,y,x;const k=e.pointStyle,E=e.rotation,S=e.radius;let T=(E||0)*RAD_PER_DEG;if(k&&typeof k=="object"&&(r=k.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(t,l),n.rotate(T),n.drawImage(k,-k.width/2,-k.height/2,k.width,k.height),n.restore();return}if(!(isNaN(S)||S<=0)){switch(n.beginPath(),k){default:i?n.ellipse(t,l,i/2,S,0,0,TAU):n.arc(t,l,S,0,TAU),n.closePath();break;case"triangle":_=i?i/2:S,n.moveTo(t+Math.sin(T)*_,l-Math.cos(T)*S),T+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(T)*_,l-Math.cos(T)*S),T+=TWO_THIRDS_PI,n.lineTo(t+Math.sin(T)*_,l-Math.cos(T)*S),n.closePath();break;case"rectRounded":p=S*.516,u=S-p,a=Math.cos(T+QUARTER_PI)*u,y=Math.cos(T+QUARTER_PI)*(i?i/2-p:u),c=Math.sin(T+QUARTER_PI)*u,x=Math.sin(T+QUARTER_PI)*(i?i/2-p:u),n.arc(t-y,l-c,p,T-PI,T-HALF_PI),n.arc(t+x,l-a,p,T-HALF_PI,T),n.arc(t+y,l+c,p,T,T+HALF_PI),n.arc(t-x,l+a,p,T+HALF_PI,T+PI),n.closePath();break;case"rect":if(!E){u=Math.SQRT1_2*S,_=i?i/2:u,n.rect(t-_,l-u,2*_,2*u);break}T+=QUARTER_PI;case"rectRot":y=Math.cos(T)*(i?i/2:S),a=Math.cos(T)*S,c=Math.sin(T)*S,x=Math.sin(T)*(i?i/2:S),n.moveTo(t-y,l-c),n.lineTo(t+x,l-a),n.lineTo(t+y,l+c),n.lineTo(t-x,l+a),n.closePath();break;case"crossRot":T+=QUARTER_PI;case"cross":y=Math.cos(T)*(i?i/2:S),a=Math.cos(T)*S,c=Math.sin(T)*S,x=Math.sin(T)*(i?i/2:S),n.moveTo(t-y,l-c),n.lineTo(t+y,l+c),n.moveTo(t+x,l-a),n.lineTo(t-x,l+a);break;case"star":y=Math.cos(T)*(i?i/2:S),a=Math.cos(T)*S,c=Math.sin(T)*S,x=Math.sin(T)*(i?i/2:S),n.moveTo(t-y,l-c),n.lineTo(t+y,l+c),n.moveTo(t+x,l-a),n.lineTo(t-x,l+a),T+=QUARTER_PI,y=Math.cos(T)*(i?i/2:S),a=Math.cos(T)*S,c=Math.sin(T)*S,x=Math.sin(T)*(i?i/2:S),n.moveTo(t-y,l-c),n.lineTo(t+y,l+c),n.moveTo(t+x,l-a),n.lineTo(t-x,l+a);break;case"line":a=i?i/2:Math.cos(T)*S,c=Math.sin(T)*S,n.moveTo(t-a,l-c),n.lineTo(t+a,l+c);break;case"dash":n.moveTo(t,l),n.lineTo(t+Math.cos(T)*(i?i/2:S),l+Math.sin(T)*S);break;case!1:n.closePath();break}n.fill(),e.borderWidth>0&&n.stroke()}}function _isPointInArea(n,e,t){return t=t||.5,!e||n&&n.x>e.left-t&&n.x<e.right+t&&n.y>e.top-t&&n.y<e.bottom+t}function clipArea(n,e){n.save(),n.beginPath(),n.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),n.clip()}function unclipArea(n){n.restore()}function setRenderOpts(n,e){e.translation&&n.translate(e.translation[0],e.translation[1]),isNullOrUndef(e.rotation)||n.rotate(e.rotation),e.color&&(n.fillStyle=e.color),e.textAlign&&(n.textAlign=e.textAlign),e.textBaseline&&(n.textBaseline=e.textBaseline)}function decorateText(n,e,t,l,i){if(i.strikethrough||i.underline){const r=n.measureText(l),a=e-r.actualBoundingBoxLeft,c=e+r.actualBoundingBoxRight,u=t-r.actualBoundingBoxAscent,p=t+r.actualBoundingBoxDescent,_=i.strikethrough?(u+p)/2:p;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(a,_),n.lineTo(c,_),n.stroke()}}function drawBackdrop(n,e){const t=n.fillStyle;n.fillStyle=e.color,n.fillRect(e.left,e.top,e.width,e.height),n.fillStyle=t}function renderText(n,e,t,l,i,r={}){const a=isArray(e)?e:[e],c=r.strokeWidth>0&&r.strokeColor!=="";let u,p;for(n.save(),n.font=i.string,setRenderOpts(n,r),u=0;u<a.length;++u)p=a[u],r.backdrop&&drawBackdrop(n,r.backdrop),c&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),isNullOrUndef(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(p,t,l,r.maxWidth)),n.fillText(p,t,l,r.maxWidth),decorateText(n,t,l,p,r),l+=Number(i.lineHeight);n.restore()}function addRoundedRectPath(n,e){const{x:t,y:l,w:i,h:r,radius:a}=e;n.arc(t+a.topLeft,l+a.topLeft,a.topLeft,1.5*PI,PI,!0),n.lineTo(t,l+r-a.bottomLeft),n.arc(t+a.bottomLeft,l+r-a.bottomLeft,a.bottomLeft,PI,HALF_PI,!0),n.lineTo(t+i-a.bottomRight,l+r),n.arc(t+i-a.bottomRight,l+r-a.bottomRight,a.bottomRight,HALF_PI,0,!0),n.lineTo(t+i,l+a.topRight),n.arc(t+i-a.topRight,l+a.topRight,a.topRight,0,-HALF_PI,!0),n.lineTo(t+a.topLeft,l)}const LINE_HEIGHT=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,FONT_STYLE=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function toLineHeight(n,e){const t=(""+n).match(LINE_HEIGHT);if(!t||t[1]==="normal")return e*1.2;switch(n=+t[2],t[3]){case"px":return n;case"%":n/=100;break}return e*n}const numberOrZero=n=>+n||0;function _readValueToProps(n,e){const t={},l=isObject(e),i=l?Object.keys(e):e,r=isObject(n)?l?a=>valueOrDefault(n[a],n[e[a]]):a=>n[a]:()=>n;for(const a of i)t[a]=numberOrZero(r(a));return t}function toTRBL(n){return _readValueToProps(n,{top:"y",right:"x",bottom:"y",left:"x"})}function toTRBLCorners(n){return _readValueToProps(n,["topLeft","topRight","bottomLeft","bottomRight"])}function toPadding(n){const e=toTRBL(n);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function toFont(n,e){n=n||{},e=e||defaults.font;let t=valueOrDefault(n.size,e.size);typeof t=="string"&&(t=parseInt(t,10));let l=valueOrDefault(n.style,e.style);l&&!(""+l).match(FONT_STYLE)&&(console.warn('Invalid font style specified: "'+l+'"'),l=void 0);const i={family:valueOrDefault(n.family,e.family),lineHeight:toLineHeight(valueOrDefault(n.lineHeight,e.lineHeight),t),size:t,style:l,weight:valueOrDefault(n.weight,e.weight),string:""};return i.string=toFontString(i),i}function resolve(n,e,t,l){let i,r,a;for(i=0,r=n.length;i<r;++i)if(a=n[i],a!==void 0&&a!==void 0)return a}function _addGrace(n,e,t){const{min:l,max:i}=n,r=toDimension(e,(i-l)/2),a=(c,u)=>t&&c===0?0:c+u;return{min:a(l,-Math.abs(r)),max:a(i,r)}}function createContext(n,e){return Object.assign(Object.create(n),e)}function _createResolver(n,e=[""],t,l,i=()=>n[0]){const r=t||n;typeof l>"u"&&(l=_resolve("_fallback",n));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:l,_getTarget:i,override:c=>_createResolver([c,...n],e,r,l)};return new Proxy(a,{deleteProperty(c,u){return delete c[u],delete c._keys,delete n[0][u],!0},get(c,u){return _cached(c,u,()=>_resolveWithPrefixes(u,e,n,c))},getOwnPropertyDescriptor(c,u){return Reflect.getOwnPropertyDescriptor(c._scopes[0],u)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(c,u){return getKeysFromAllScopes(c).includes(u)},ownKeys(c){return getKeysFromAllScopes(c)},set(c,u,p){const _=c._storage||(c._storage=i());return c[u]=_[u]=p,delete c._keys,!0}})}function _attachContext(n,e,t,l){const i={_cacheable:!1,_proxy:n,_context:e,_subProxy:t,_stack:new Set,_descriptors:_descriptors(n,l),setContext:r=>_attachContext(n,r,t,l),override:r=>_attachContext(n.override(r),e,t,l)};return new Proxy(i,{deleteProperty(r,a){return delete r[a],delete n[a],!0},get(r,a,c){return _cached(r,a,()=>_resolveWithContext(r,a,c))},getOwnPropertyDescriptor(r,a){return r._descriptors.allKeys?Reflect.has(n,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,a)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,a){return Reflect.has(n,a)},ownKeys(){return Reflect.ownKeys(n)},set(r,a,c){return n[a]=c,delete r[a],!0}})}function _descriptors(n,e={scriptable:!0,indexable:!0}){const{_scriptable:t=e.scriptable,_indexable:l=e.indexable,_allKeys:i=e.allKeys}=n;return{allKeys:i,scriptable:t,indexable:l,isScriptable:isFunction(t)?t:()=>t,isIndexable:isFunction(l)?l:()=>l}}const readKey=(n,e)=>n?n+_capitalize(e):e,needsSubResolver=(n,e)=>isObject(e)&&n!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function _cached(n,e,t){if(Object.prototype.hasOwnProperty.call(n,e)||e==="constructor")return n[e];const l=t();return n[e]=l,l}function _resolveWithContext(n,e,t){const{_proxy:l,_context:i,_subProxy:r,_descriptors:a}=n;let c=l[e];return isFunction(c)&&a.isScriptable(e)&&(c=_resolveScriptable(e,c,n,t)),isArray(c)&&c.length&&(c=_resolveArray(e,c,n,a.isIndexable)),needsSubResolver(e,c)&&(c=_attachContext(c,i,r&&r[e],a)),c}function _resolveScriptable(n,e,t,l){const{_proxy:i,_context:r,_subProxy:a,_stack:c}=t;if(c.has(n))throw new Error("Recursion detected: "+Array.from(c).join("->")+"->"+n);c.add(n);let u=e(r,a||l);return c.delete(n),needsSubResolver(n,u)&&(u=createSubResolver(i._scopes,i,n,u)),u}function _resolveArray(n,e,t,l){const{_proxy:i,_context:r,_subProxy:a,_descriptors:c}=t;if(typeof r.index<"u"&&l(n))return e[r.index%e.length];if(isObject(e[0])){const u=e,p=i._scopes.filter(_=>_!==u);e=[];for(const _ of u){const y=createSubResolver(p,i,n,_);e.push(_attachContext(y,r,a&&a[n],c))}}return e}function resolveFallback(n,e,t){return isFunction(n)?n(e,t):n}const getScope=(n,e)=>n===!0?e:typeof n=="string"?resolveObjectKey(e,n):void 0;function addScopes(n,e,t,l,i){for(const r of e){const a=getScope(t,r);if(a){n.add(a);const c=resolveFallback(a._fallback,t,i);if(typeof c<"u"&&c!==t&&c!==l)return c}else if(a===!1&&typeof l<"u"&&t!==l)return null}return!1}function createSubResolver(n,e,t,l){const i=e._rootScopes,r=resolveFallback(e._fallback,t,l),a=[...n,...i],c=new Set;c.add(l);let u=addScopesFromKey(c,a,t,r||t,l);return u===null||typeof r<"u"&&r!==t&&(u=addScopesFromKey(c,a,r,u,l),u===null)?!1:_createResolver(Array.from(c),[""],i,r,()=>subGetTarget(e,t,l))}function addScopesFromKey(n,e,t,l,i){for(;t;)t=addScopes(n,e,t,l,i);return t}function subGetTarget(n,e,t){const l=n._getTarget();e in l||(l[e]={});const i=l[e];return isArray(i)&&isObject(t)?t:i||{}}function _resolveWithPrefixes(n,e,t,l){let i;for(const r of e)if(i=_resolve(readKey(r,n),t),typeof i<"u")return needsSubResolver(n,i)?createSubResolver(t,l,n,i):i}function _resolve(n,e){for(const t of e){if(!t)continue;const l=t[n];if(typeof l<"u")return l}}function getKeysFromAllScopes(n){let e=n._keys;return e||(e=n._keys=resolveKeysFromAllScopes(n._scopes)),e}function resolveKeysFromAllScopes(n){const e=new Set;for(const t of n)for(const l of Object.keys(t).filter(i=>!i.startsWith("_")))e.add(l);return Array.from(e)}function _isDomSupported(){return typeof window<"u"&&typeof document<"u"}function _getParentNode(n){let e=n.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function parseMaxStyle(n,e,t){let l;return typeof n=="string"?(l=parseInt(n,10),n.indexOf("%")!==-1&&(l=l/100*e.parentNode[t])):l=n,l}const getComputedStyle=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function getStyle(n,e){return getComputedStyle(n).getPropertyValue(e)}const positions=["top","right","bottom","left"];function getPositionedStyle(n,e,t){const l={};t=t?"-"+t:"";for(let i=0;i<4;i++){const r=positions[i];l[r]=parseFloat(n[e+"-"+r+t])||0}return l.width=l.left+l.right,l.height=l.top+l.bottom,l}const useOffsetPos=(n,e,t)=>(n>0||e>0)&&(!t||!t.shadowRoot);function getCanvasPosition(n,e){const t=n.touches,l=t&&t.length?t[0]:n,{offsetX:i,offsetY:r}=l;let a=!1,c,u;if(useOffsetPos(i,r,n.target))c=i,u=r;else{const p=e.getBoundingClientRect();c=l.clientX-p.left,u=l.clientY-p.top,a=!0}return{x:c,y:u,box:a}}function getRelativePosition(n,e){if("native"in n)return n;const{canvas:t,currentDevicePixelRatio:l}=e,i=getComputedStyle(t),r=i.boxSizing==="border-box",a=getPositionedStyle(i,"padding"),c=getPositionedStyle(i,"border","width"),{x:u,y:p,box:_}=getCanvasPosition(n,t),y=a.left+(_&&c.left),x=a.top+(_&&c.top);let{width:k,height:E}=e;return r&&(k-=a.width+c.width,E-=a.height+c.height),{x:Math.round((u-y)/k*t.width/l),y:Math.round((p-x)/E*t.height/l)}}function getContainerSize(n,e,t){let l,i;if(e===void 0||t===void 0){const r=n&&_getParentNode(n);if(!r)e=n.clientWidth,t=n.clientHeight;else{const a=r.getBoundingClientRect(),c=getComputedStyle(r),u=getPositionedStyle(c,"border","width"),p=getPositionedStyle(c,"padding");e=a.width-p.width-u.width,t=a.height-p.height-u.height,l=parseMaxStyle(c.maxWidth,r,"clientWidth"),i=parseMaxStyle(c.maxHeight,r,"clientHeight")}}return{width:e,height:t,maxWidth:l||INFINITY,maxHeight:i||INFINITY}}const round1=n=>Math.round(n*10)/10;function getMaximumSize(n,e,t,l){const i=getComputedStyle(n),r=getPositionedStyle(i,"margin"),a=parseMaxStyle(i.maxWidth,n,"clientWidth")||INFINITY,c=parseMaxStyle(i.maxHeight,n,"clientHeight")||INFINITY,u=getContainerSize(n,e,t);let{width:p,height:_}=u;if(i.boxSizing==="content-box"){const x=getPositionedStyle(i,"border","width"),k=getPositionedStyle(i,"padding");p-=k.width+x.width,_-=k.height+x.height}return p=Math.max(0,p-r.width),_=Math.max(0,l?p/l:_-r.height),p=round1(Math.min(p,a,u.maxWidth)),_=round1(Math.min(_,c,u.maxHeight)),p&&!_&&(_=round1(p/2)),(e!==void 0||t!==void 0)&&l&&u.height&&_>u.height&&(_=u.height,p=round1(Math.floor(_*l))),{width:p,height:_}}function retinaScale(n,e,t){const l=e||1,i=Math.floor(n.height*l),r=Math.floor(n.width*l);n.height=Math.floor(n.height),n.width=Math.floor(n.width);const a=n.canvas;return a.style&&(t||!a.style.height&&!a.style.width)&&(a.style.height=`${n.height}px`,a.style.width=`${n.width}px`),n.currentDevicePixelRatio!==l||a.height!==i||a.width!==r?(n.currentDevicePixelRatio=l,a.height=i,a.width=r,n.ctx.setTransform(l,0,0,l,0,0),!0):!1}const supportsEventListenerOptions=function(){let n=!1;try{const e={get passive(){return n=!0,!1}};_isDomSupported()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return n}();function readUsedSize(n,e){const t=getStyle(n,e),l=t&&t.match(/^(\d+)(\.\d+)?px$/);return l?+l[1]:void 0}const getRightToLeftAdapter=function(n,e){return{x(t){return n+n+e-t},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,l){return t-l},leftForLtr(t,l){return t-l}}},getLeftToRightAdapter=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,e){return n+e},leftForLtr(n,e){return n}}};function getRtlAdapter(n,e,t){return n?getRightToLeftAdapter(e,t):getLeftToRightAdapter()}function overrideTextDirection(n,e){let t,l;(e==="ltr"||e==="rtl")&&(t=n.canvas.style,l=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",e,"important"),n.prevTextDirection=l)}function restoreTextDirection(n,e){e!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",e[0],e[1]))}/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class Animator{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,l,i){const r=t.listeners[i],a=t.duration;r.forEach(c=>c({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(l-t.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=requestAnimFrame.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((l,i)=>{if(!l.running||!l.items.length)return;const r=l.items;let a=r.length-1,c=!1,u;for(;a>=0;--a)u=r[a],u._active?(u._total>l.duration&&(l.duration=u._total),u.tick(e),c=!0):(r[a]=r[r.length-1],r.pop());c&&(i.draw(),this._notify(i,l,e,"progress")),r.length||(l.running=!1,this._notify(i,l,e,"complete"),l.initial=!1),t+=r.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){const t=this._charts;let l=t.get(e);return l||(l={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,l)),l}listen(e,t,l){this._getAnims(e).listeners[t].push(l)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){const t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((l,i)=>Math.max(l,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){const t=this._charts.get(e);if(!t||!t.items.length)return;const l=t.items;let i=l.length-1;for(;i>=0;--i)l[i].cancel();t.items=[],this._notify(e,t,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var animator=new Animator;const transparent="transparent",interpolators={boolean(n,e,t){return t>.5?e:n},color(n,e,t){const l=color(n||transparent),i=l.valid&&color(e||transparent);return i&&i.valid?i.mix(l,t).hexString():e},number(n,e,t){return n+(e-n)*t}};class Animation{constructor(e,t,l,i){const r=t[l];i=resolve([e.to,i,r,e.from]);const a=resolve([e.from,r,i]);this._active=!0,this._fn=e.fn||interpolators[e.type||typeof a],this._easing=effects[e.easing]||effects.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=l,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(e,t,l){if(this._active){this._notify(!1);const i=this._target[this._prop],r=l-this._start,a=this._duration-r;this._start=l,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=r,this._loop=!!e.loop,this._to=resolve([e.to,t,i,e.from]),this._from=resolve([e.from,i,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const t=e-this._start,l=this._duration,i=this._prop,r=this._from,a=this._loop,c=this._to;let u;if(this._active=r!==c&&(a||t<l),!this._active){this._target[i]=c,this._notify(!0);return}if(t<0){this._target[i]=r;return}u=t/l%2,u=a&&u>1?2-u:u,u=this._easing(Math.min(1,Math.max(0,u))),this._target[i]=this._fn(r,c,u)}wait(){const e=this._promises||(this._promises=[]);return new Promise((t,l)=>{e.push({res:t,rej:l})})}_notify(e){const t=e?"res":"rej",l=this._promises||[];for(let i=0;i<l.length;i++)l[i][t]()}}class Animations{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!isObject(e))return;const t=Object.keys(defaults.animation),l=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const r=e[i];if(!isObject(r))return;const a={};for(const c of t)a[c]=r[c];(isArray(r.properties)&&r.properties||[i]).forEach(c=>{(c===i||!l.has(c))&&l.set(c,a)})})}_animateOptions(e,t){const l=t.options,i=resolveTargetOptions(e,l);if(!i)return[];const r=this._createAnimations(i,l);return l.$shared&&awaitAll(e.options.$animations,l).then(()=>{e.options=l},()=>{}),r}_createAnimations(e,t){const l=this._properties,i=[],r=e.$animations||(e.$animations={}),a=Object.keys(t),c=Date.now();let u;for(u=a.length-1;u>=0;--u){const p=a[u];if(p.charAt(0)==="$")continue;if(p==="options"){i.push(...this._animateOptions(e,t));continue}const _=t[p];let y=r[p];const x=l.get(p);if(y)if(x&&y.active()){y.update(x,_,c);continue}else y.cancel();if(!x||!x.duration){e[p]=_;continue}r[p]=y=new Animation(x,e,p,_),i.push(y)}return i}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}const l=this._createAnimations(e,t);if(l.length)return animator.add(this._chart,l),!0}}function awaitAll(n,e){const t=[],l=Object.keys(e);for(let i=0;i<l.length;i++){const r=n[l[i]];r&&r.active()&&t.push(r.wait())}return Promise.all(t)}function resolveTargetOptions(n,e){if(!e)return;let t=n.options;if(!t){n.options=e;return}return t.$shared&&(n.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function scaleClip(n,e){const t=n&&n.options||{},l=t.reverse,i=t.min===void 0?e:0,r=t.max===void 0?e:0;return{start:l?r:i,end:l?i:r}}function defaultClip(n,e,t){if(t===!1)return!1;const l=scaleClip(n,t),i=scaleClip(e,t);return{top:i.end,right:l.end,bottom:i.start,left:l.start}}function toClip(n){let e,t,l,i;return isObject(n)?(e=n.top,t=n.right,l=n.bottom,i=n.left):e=t=l=i=n,{top:e,right:t,bottom:l,left:i,disabled:n===!1}}function getSortedDatasetIndices(n,e){const t=[],l=n._getSortedDatasetMetas(e);let i,r;for(i=0,r=l.length;i<r;++i)t.push(l[i].index);return t}function applyStack(n,e,t,l={}){const i=n.keys,r=l.mode==="single";let a,c,u,p;if(e!==null){for(a=0,c=i.length;a<c;++a){if(u=+i[a],u===t){if(l.all)continue;break}p=n.values[u],isNumberFinite(p)&&(r||e===0||sign(e)===sign(p))&&(e+=p)}return e}}function convertObjectDataToArray(n,e){const{iScale:t,vScale:l}=e,i=t.axis==="x"?"x":"y",r=l.axis==="x"?"x":"y",a=Object.keys(n),c=new Array(a.length);let u,p,_;for(u=0,p=a.length;u<p;++u)_=a[u],c[u]={[i]:_,[r]:n[_]};return c}function isStacked(n,e){const t=n&&n.options.stacked;return t||t===void 0&&e.stack!==void 0}function getStackKey(n,e,t){return`${n.id}.${e.id}.${t.stack||t.type}`}function getUserBounds(n){const{min:e,max:t,minDefined:l,maxDefined:i}=n.getUserBounds();return{min:l?e:Number.NEGATIVE_INFINITY,max:i?t:Number.POSITIVE_INFINITY}}function getOrCreateStack(n,e,t){const l=n[e]||(n[e]={});return l[t]||(l[t]={})}function getLastIndexInStack(n,e,t,l){for(const i of e.getMatchingVisibleMetas(l).reverse()){const r=n[i.index];if(t&&r>0||!t&&r<0)return i.index}return null}function updateStacks(n,e){const{chart:t,_cachedMeta:l}=n,i=t._stacks||(t._stacks={}),{iScale:r,vScale:a,index:c}=l,u=r.axis,p=a.axis,_=getStackKey(r,a,l),y=e.length;let x;for(let k=0;k<y;++k){const E=e[k],{[u]:S,[p]:T}=E,I=E._stacks||(E._stacks={});x=I[p]=getOrCreateStack(i,_,S),x[c]=T,x._top=getLastIndexInStack(x,a,!0,l.type),x._bottom=getLastIndexInStack(x,a,!1,l.type);const U=x._visualValues||(x._visualValues={});U[c]=T}}function getFirstScaleId(n,e){const t=n.scales;return Object.keys(t).filter(l=>t[l].axis===e).shift()}function createDatasetContext(n,e){return createContext(n,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function createDataContext(n,e,t){return createContext(n,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:t,index:e,mode:"default",type:"data"})}function clearStacks(n,e){const t=n.controller.index,l=n.vScale&&n.vScale.axis;if(l){e=e||n._parsed;for(const i of e){const r=i._stacks;if(!r||r[l]===void 0||r[l][t]===void 0)return;delete r[l][t],r[l]._visualValues!==void 0&&r[l]._visualValues[t]!==void 0&&delete r[l]._visualValues[t]}}}const isDirectUpdateMode=n=>n==="reset"||n==="none",cloneIfNotShared=(n,e)=>e?n:Object.assign({},n),createStack=(n,e,t)=>n&&!e.hidden&&e._stacked&&{keys:getSortedDatasetIndices(t,!0),values:null};class DatasetController{constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=isStacked(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&clearStacks(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,t=this._cachedMeta,l=this.getDataset(),i=(y,x,k,E)=>y==="x"?x:y==="r"?E:k,r=t.xAxisID=valueOrDefault(l.xAxisID,getFirstScaleId(e,"x")),a=t.yAxisID=valueOrDefault(l.yAxisID,getFirstScaleId(e,"y")),c=t.rAxisID=valueOrDefault(l.rAxisID,getFirstScaleId(e,"r")),u=t.indexAxis,p=t.iAxisID=i(u,r,a,c),_=t.vAxisID=i(u,a,r,c);t.xScale=this.getScaleForId(r),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(c),t.iScale=this.getScaleForId(p),t.vScale=this.getScaleForId(_)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&unlistenArrayEvents(this._data,this),e._stacked&&clearStacks(e)}_dataCheck(){const e=this.getDataset(),t=e.data||(e.data=[]),l=this._data;if(isObject(t)){const i=this._cachedMeta;this._data=convertObjectDataToArray(t,i)}else if(l!==t){if(l){unlistenArrayEvents(l,this);const i=this._cachedMeta;clearStacks(i),i._parsed=[]}t&&Object.isExtensible(t)&&listenArrayEvents(t,this),this._syncList=[],this._data=t}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const t=this._cachedMeta,l=this.getDataset();let i=!1;this._dataCheck();const r=t._stacked;t._stacked=isStacked(t.vScale,t),t.stack!==l.stack&&(i=!0,clearStacks(t),t.stack=l.stack),this._resyncElements(e),(i||r!==t._stacked)&&(updateStacks(this,t._parsed),t._stacked=isStacked(t.vScale,t))}configure(){const e=this.chart.config,t=e.datasetScopeKeys(this._type),l=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(l,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){const{_cachedMeta:l,_data:i}=this,{iScale:r,_stacked:a}=l,c=r.axis;let u=e===0&&t===i.length?!0:l._sorted,p=e>0&&l._parsed[e-1],_,y,x;if(this._parsing===!1)l._parsed=i,l._sorted=!0,x=i;else{isArray(i[e])?x=this.parseArrayData(l,i,e,t):isObject(i[e])?x=this.parseObjectData(l,i,e,t):x=this.parsePrimitiveData(l,i,e,t);const k=()=>y[c]===null||p&&y[c]<p[c];for(_=0;_<t;++_)l._parsed[_+e]=y=x[_],u&&(k()&&(u=!1),p=y);l._sorted=u}a&&updateStacks(this,x)}parsePrimitiveData(e,t,l,i){const{iScale:r,vScale:a}=e,c=r.axis,u=a.axis,p=r.getLabels(),_=r===a,y=new Array(i);let x,k,E;for(x=0,k=i;x<k;++x)E=x+l,y[x]={[c]:_||r.parse(p[E],E),[u]:a.parse(t[E],E)};return y}parseArrayData(e,t,l,i){const{xScale:r,yScale:a}=e,c=new Array(i);let u,p,_,y;for(u=0,p=i;u<p;++u)_=u+l,y=t[_],c[u]={x:r.parse(y[0],_),y:a.parse(y[1],_)};return c}parseObjectData(e,t,l,i){const{xScale:r,yScale:a}=e,{xAxisKey:c="x",yAxisKey:u="y"}=this._parsing,p=new Array(i);let _,y,x,k;for(_=0,y=i;_<y;++_)x=_+l,k=t[x],p[_]={x:r.parse(resolveObjectKey(k,c),x),y:a.parse(resolveObjectKey(k,u),x)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,l){const i=this.chart,r=this._cachedMeta,a=t[e.axis],c={keys:getSortedDatasetIndices(i,!0),values:t._stacks[e.axis]._visualValues};return applyStack(c,a,r.index,{mode:l})}updateRangeFromParsed(e,t,l,i){const r=l[t.axis];let a=r===null?NaN:r;const c=i&&l._stacks[t.axis];i&&c&&(i.values=c,a=applyStack(i,r,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){const l=this._cachedMeta,i=l._parsed,r=l._sorted&&e===l.iScale,a=i.length,c=this._getOtherScale(e),u=createStack(t,l,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:_,max:y}=getUserBounds(c);let x,k;function E(){k=i[x];const S=k[c.axis];return!isNumberFinite(k[e.axis])||_>S||y<S}for(x=0;x<a&&!(!E()&&(this.updateRangeFromParsed(p,e,k,u),r));++x);if(r){for(x=a-1;x>=0;--x)if(!E()){this.updateRangeFromParsed(p,e,k,u);break}}return p}getAllParsedValues(e){const t=this._cachedMeta._parsed,l=[];let i,r,a;for(i=0,r=t.length;i<r;++i)a=t[i][e.axis],isNumberFinite(a)&&l.push(a);return l}getMaxOverflow(){return!1}getLabelAndValue(e){const t=this._cachedMeta,l=t.iScale,i=t.vScale,r=this.getParsed(e);return{label:l?""+l.getLabelForValue(r[l.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(e){const t=this._cachedMeta;this.update(e||"default"),t._clip=toClip(valueOrDefault(this.options.clip,defaultClip(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,t=this.chart,l=this._cachedMeta,i=l.data||[],r=t.chartArea,a=[],c=this._drawStart||0,u=this._drawCount||i.length-c,p=this.options.drawActiveElementsOnTop;let _;for(l.dataset&&l.dataset.draw(e,r,c,u),_=c;_<c+u;++_){const y=i[_];y.hidden||(y.active&&p?a.push(y):y.draw(e,r))}for(_=0;_<a.length;++_)a[_].draw(e,r)}getStyle(e,t){const l=t?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(l):this.resolveDataElementOptions(e||0,l)}getContext(e,t,l){const i=this.getDataset();let r;if(e>=0&&e<this._cachedMeta.data.length){const a=this._cachedMeta.data[e];r=a.$context||(a.$context=createDataContext(this.getContext(),e,a)),r.parsed=this.getParsed(e),r.raw=i.data[e],r.index=r.dataIndex=e}else r=this.$context||(this.$context=createDatasetContext(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!t,r.mode=l,r}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t="default",l){const i=t==="active",r=this._cachedDataOpts,a=e+"-"+t,c=r[a],u=this.enableOptionSharing&&defined(l);if(c)return cloneIfNotShared(c,u);const p=this.chart.config,_=p.datasetElementScopeKeys(this._type,e),y=i?[`${e}Hover`,"hover",e,""]:[e,""],x=p.getOptionScopes(this.getDataset(),_),k=Object.keys(defaults.elements[e]),E=()=>this.getContext(l,i,t),S=p.resolveNamedOptions(x,k,E,y);return S.$shared&&(S.$shared=u,r[a]=Object.freeze(cloneIfNotShared(S,u))),S}_resolveAnimations(e,t,l){const i=this.chart,r=this._cachedDataOpts,a=`animation-${t}`,c=r[a];if(c)return c;let u;if(i.options.animation!==!1){const _=this.chart.config,y=_.datasetAnimationScopeKeys(this._type,t),x=_.getOptionScopes(this.getDataset(),y);u=_.createResolver(x,this.getContext(e,l,t))}const p=new Animations(i,u&&u.animations);return u&&u._cacheable&&(r[a]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,t){return!t||isDirectUpdateMode(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){const l=this.resolveDataElementOptions(e,t),i=this._sharedOptions,r=this.getSharedOptions(l),a=this.includeOptions(t,r)||r!==i;return this.updateSharedOptions(r,t,l),{sharedOptions:r,includeOptions:a}}updateElement(e,t,l,i){isDirectUpdateMode(i)?Object.assign(e,l):this._resolveAnimations(t,i).update(e,l)}updateSharedOptions(e,t,l){e&&!isDirectUpdateMode(t)&&this._resolveAnimations(void 0,t).update(e,l)}_setStyle(e,t,l,i){e.active=i;const r=this.getStyle(t,i);this._resolveAnimations(t,l,i).update(e,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(e,t,l){this._setStyle(e,l,"active",!1)}setHoverStyle(e,t,l){this._setStyle(e,l,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const t=this._data,l=this._cachedMeta.data;for(const[c,u,p]of this._syncList)this[c](u,p);this._syncList=[];const i=l.length,r=t.length,a=Math.min(r,i);a&&this.parse(0,a),r>i?this._insertElements(i,r-i,e):r<i&&this._removeElements(r,i-r)}_insertElements(e,t,l=!0){const i=this._cachedMeta,r=i.data,a=e+t;let c;const u=p=>{for(p.length+=t,c=p.length-1;c>=a;c--)p[c]=p[c-t]};for(u(r),c=e;c<a;++c)r[c]=new this.dataElementType;this._parsing&&u(i._parsed),this.parse(e,t),l&&this.updateElements(r,e,t,"reset")}updateElements(e,t,l,i){}_removeElements(e,t){const l=this._cachedMeta;if(this._parsing){const i=l._parsed.splice(e,t);l._stacked&&clearStacks(l,i)}l.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[t,l,i]=e;this[t](l,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,t){t&&this._sync(["_removeElements",e,t]);const l=arguments.length-2;l&&this._sync(["_insertElements",e,l])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ne(DatasetController,"defaults",{}),ne(DatasetController,"datasetElementType",null),ne(DatasetController,"dataElementType",null);function getAllScaleValues(n,e){if(!n._cache.$bar){const t=n.getMatchingVisibleMetas(e);let l=[];for(let i=0,r=t.length;i<r;i++)l=l.concat(t[i].controller.getAllParsedValues(n));n._cache.$bar=_arrayUnique(l.sort((i,r)=>i-r))}return n._cache.$bar}function computeMinSampleSize(n){const e=n.iScale,t=getAllScaleValues(e,n.type);let l=e._length,i,r,a,c;const u=()=>{a===32767||a===-32768||(defined(c)&&(l=Math.min(l,Math.abs(a-c)||l)),c=a)};for(i=0,r=t.length;i<r;++i)a=e.getPixelForValue(t[i]),u();for(c=void 0,i=0,r=e.ticks.length;i<r;++i)a=e.getPixelForTick(i),u();return l}function computeFitCategoryTraits(n,e,t,l){const i=t.barThickness;let r,a;return isNullOrUndef(i)?(r=e.min*t.categoryPercentage,a=t.barPercentage):(r=i*l,a=1),{chunk:r/l,ratio:a,start:e.pixels[n]-r/2}}function computeFlexCategoryTraits(n,e,t,l){const i=e.pixels,r=i[n];let a=n>0?i[n-1]:null,c=n<i.length-1?i[n+1]:null;const u=t.categoryPercentage;a===null&&(a=r-(c===null?e.end-e.start:c-r)),c===null&&(c=r+r-a);const p=r-(r-Math.min(a,c))/2*u;return{chunk:Math.abs(c-a)/2*u/l,ratio:t.barPercentage,start:p}}function parseFloatBar(n,e,t,l){const i=t.parse(n[0],l),r=t.parse(n[1],l),a=Math.min(i,r),c=Math.max(i,r);let u=a,p=c;Math.abs(a)>Math.abs(c)&&(u=c,p=a),e[t.axis]=p,e._custom={barStart:u,barEnd:p,start:i,end:r,min:a,max:c}}function parseValue(n,e,t,l){return isArray(n)?parseFloatBar(n,e,t,l):e[t.axis]=t.parse(n,l),e}function parseArrayOrPrimitive(n,e,t,l){const i=n.iScale,r=n.vScale,a=i.getLabels(),c=i===r,u=[];let p,_,y,x;for(p=t,_=t+l;p<_;++p)x=e[p],y={},y[i.axis]=c||i.parse(a[p],p),u.push(parseValue(x,y,r,p));return u}function isFloatBar(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function barSign(n,e,t){return n!==0?sign(n):(e.isHorizontal()?1:-1)*(e.min>=t?1:-1)}function borderProps(n){let e,t,l,i,r;return n.horizontal?(e=n.base>n.x,t="left",l="right"):(e=n.base<n.y,t="bottom",l="top"),e?(i="end",r="start"):(i="start",r="end"),{start:t,end:l,reverse:e,top:i,bottom:r}}function setBorderSkipped(n,e,t,l){let i=e.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:c,reverse:u,top:p,bottom:_}=borderProps(n);i==="middle"&&t&&(n.enableBorderRadius=!0,(t._top||0)===l?i=p:(t._bottom||0)===l?i=_:(r[parseEdge(_,a,c,u)]=!0,i=p)),r[parseEdge(i,a,c,u)]=!0,n.borderSkipped=r}function parseEdge(n,e,t,l){return l?(n=swap(n,e,t),n=startEnd(n,t,e)):n=startEnd(n,e,t),n}function swap(n,e,t){return n===e?t:n===t?e:n}function startEnd(n,e,t){return n==="start"?e:n==="end"?t:n}function setInflateAmount(n,{inflateAmount:e},t){n.inflateAmount=e==="auto"?t===1?.33:0:e}class BarController extends DatasetController{parsePrimitiveData(e,t,l,i){return parseArrayOrPrimitive(e,t,l,i)}parseArrayData(e,t,l,i){return parseArrayOrPrimitive(e,t,l,i)}parseObjectData(e,t,l,i){const{iScale:r,vScale:a}=e,{xAxisKey:c="x",yAxisKey:u="y"}=this._parsing,p=r.axis==="x"?c:u,_=a.axis==="x"?c:u,y=[];let x,k,E,S;for(x=l,k=l+i;x<k;++x)S=t[x],E={},E[r.axis]=r.parse(resolveObjectKey(S,p),x),y.push(parseValue(resolveObjectKey(S,_),E,a,x));return y}updateRangeFromParsed(e,t,l,i){super.updateRangeFromParsed(e,t,l,i);const r=l._custom;r&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,r.min),e.max=Math.max(e.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const t=this._cachedMeta,{iScale:l,vScale:i}=t,r=this.getParsed(e),a=r._custom,c=isFloatBar(a)?"["+a.start+", "+a.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+l.getLabelForValue(r[l.axis]),value:c}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,l,i){const r=i==="reset",{index:a,_cachedMeta:{vScale:c}}=this,u=c.getBasePixel(),p=c.isHorizontal(),_=this._getRuler(),{sharedOptions:y,includeOptions:x}=this._getSharedOptions(t,i);for(let k=t;k<t+l;k++){const E=this.getParsed(k),S=r||isNullOrUndef(E[c.axis])?{base:u,head:u}:this._calculateBarValuePixels(k),T=this._calculateBarIndexPixels(k,_),I=(E._stacks||{})[c.axis],U={horizontal:p,base:S.base,enableBorderRadius:!I||isFloatBar(E._custom)||a===I._top||a===I._bottom,x:p?S.head:T.center,y:p?T.center:S.head,height:p?T.size:Math.abs(S.size),width:p?Math.abs(S.size):T.size};x&&(U.options=y||this.resolveDataElementOptions(k,e[k].active?"active":i));const K=U.options||e[k].options;setBorderSkipped(U,K,I,a),setInflateAmount(U,K,_.ratio),this.updateElement(e[k],k,U,i)}}_getStacks(e,t){const{iScale:l}=this._cachedMeta,i=l.getMatchingVisibleMetas(this._type).filter(_=>_.controller.options.grouped),r=l.options.stacked,a=[],c=this._cachedMeta.controller.getParsed(t),u=c&&c[l.axis],p=_=>{const y=_._parsed.find(k=>k[l.axis]===u),x=y&&y[_.vScale.axis];if(isNullOrUndef(x)||isNaN(x))return!0};for(const _ of i)if(!(t!==void 0&&p(_))&&((r===!1||a.indexOf(_.stack)===-1||r===void 0&&_.stack===void 0)&&a.push(_.stack),_.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getStackIndex(e,t,l){const i=this._getStacks(e,l),r=t!==void 0?i.indexOf(t):-1;return r===-1?i.length-1:r}_getRuler(){const e=this.options,t=this._cachedMeta,l=t.iScale,i=[];let r,a;for(r=0,a=t.data.length;r<a;++r)i.push(l.getPixelForValue(this.getParsed(r)[l.axis],r));const c=e.barThickness;return{min:c||computeMinSampleSize(t),pixels:i,start:l._startPixel,end:l._endPixel,stackCount:this._getStackCount(),scale:l,grouped:e.grouped,ratio:c?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:t,_stacked:l,index:i},options:{base:r,minBarLength:a}}=this,c=r||0,u=this.getParsed(e),p=u._custom,_=isFloatBar(p);let y=u[t.axis],x=0,k=l?this.applyStack(t,u,l):y,E,S;k!==y&&(x=k-y,k=y),_&&(y=p.barStart,k=p.barEnd-p.barStart,y!==0&&sign(y)!==sign(p.barEnd)&&(x=0),x+=y);const T=!isNullOrUndef(r)&&!_?r:x;let I=t.getPixelForValue(T);if(this.chart.getDataVisibility(e)?E=t.getPixelForValue(x+k):E=I,S=E-I,Math.abs(S)<a){S=barSign(S,t,c)*a,y===c&&(I-=S/2);const U=t.getPixelForDecimal(0),K=t.getPixelForDecimal(1),Z=Math.min(U,K),V=Math.max(U,K);I=Math.max(Math.min(I,V),Z),E=I+S,l&&!_&&(u._stacks[t.axis]._visualValues[i]=t.getValueForPixel(E)-t.getValueForPixel(I))}if(I===t.getPixelForValue(c)){const U=sign(S)*t.getLineWidthForValue(c)/2;I+=U,S-=U}return{size:S,base:I,head:E,center:E+S/2}}_calculateBarIndexPixels(e,t){const l=t.scale,i=this.options,r=i.skipNull,a=valueOrDefault(i.maxBarThickness,1/0);let c,u;if(t.grouped){const p=r?this._getStackCount(e):t.stackCount,_=i.barThickness==="flex"?computeFlexCategoryTraits(e,t,i,p):computeFitCategoryTraits(e,t,i,p),y=this._getStackIndex(this.index,this._cachedMeta.stack,r?e:void 0);c=_.start+_.chunk*y+_.chunk/2,u=Math.min(a,_.chunk*_.ratio)}else c=l.getPixelForValue(this.getParsed(e)[l.axis],e),u=Math.min(a,t.min*t.ratio);return{base:c-u/2,head:c+u/2,center:c,size:u}}draw(){const e=this._cachedMeta,t=e.vScale,l=e.data,i=l.length;let r=0;for(;r<i;++r)this.getParsed(r)[t.axis]!==null&&!l[r].hidden&&l[r].draw(this._ctx)}}ne(BarController,"id","bar"),ne(BarController,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),ne(BarController,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function abstract(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class DateAdapterBase{constructor(e){ne(this,"options");this.options=e||{}}static override(e){Object.assign(DateAdapterBase.prototype,e)}init(){}formats(){return abstract()}parse(){return abstract()}format(){return abstract()}add(){return abstract()}diff(){return abstract()}startOf(){return abstract()}endOf(){return abstract()}}var adapters={_date:DateAdapterBase};function binarySearch(n,e,t,l){const{controller:i,data:r,_sorted:a}=n,c=i._cachedMeta.iScale;if(c&&e===c.axis&&e!=="r"&&a&&r.length){const u=c._reversePixels?_rlookupByKey:_lookupByKey;if(l){if(i._sharedOptions){const p=r[0],_=typeof p.getRange=="function"&&p.getRange(e);if(_){const y=u(r,e,t-_),x=u(r,e,t+_);return{lo:y.lo,hi:x.hi}}}}else return u(r,e,t)}return{lo:0,hi:r.length-1}}function evaluateInteractionItems(n,e,t,l,i){const r=n.getSortedVisibleDatasetMetas(),a=t[e];for(let c=0,u=r.length;c<u;++c){const{index:p,data:_}=r[c],{lo:y,hi:x}=binarySearch(r[c],e,a,i);for(let k=y;k<=x;++k){const E=_[k];E.skip||l(E,p,k)}}}function getDistanceMetricForAxis(n){const e=n.indexOf("x")!==-1,t=n.indexOf("y")!==-1;return function(l,i){const r=e?Math.abs(l.x-i.x):0,a=t?Math.abs(l.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(a,2))}}function getIntersectItems(n,e,t,l,i){const r=[];return!i&&!n.isPointInArea(e)||evaluateInteractionItems(n,t,e,function(c,u,p){!i&&!_isPointInArea(c,n.chartArea,0)||c.inRange(e.x,e.y,l)&&r.push({element:c,datasetIndex:u,index:p})},!0),r}function getNearestRadialItems(n,e,t,l){let i=[];function r(a,c,u){const{startAngle:p,endAngle:_}=a.getProps(["startAngle","endAngle"],l),{angle:y}=getAngleFromPoint(a,{x:e.x,y:e.y});_angleBetween(y,p,_)&&i.push({element:a,datasetIndex:c,index:u})}return evaluateInteractionItems(n,t,e,r),i}function getNearestCartesianItems(n,e,t,l,i,r){let a=[];const c=getDistanceMetricForAxis(t);let u=Number.POSITIVE_INFINITY;function p(_,y,x){const k=_.inRange(e.x,e.y,i);if(l&&!k)return;const E=_.getCenterPoint(i);if(!(!!r||n.isPointInArea(E))&&!k)return;const T=c(e,E);T<u?(a=[{element:_,datasetIndex:y,index:x}],u=T):T===u&&a.push({element:_,datasetIndex:y,index:x})}return evaluateInteractionItems(n,t,e,p),a}function getNearestItems(n,e,t,l,i,r){return!r&&!n.isPointInArea(e)?[]:t==="r"&&!l?getNearestRadialItems(n,e,t,i):getNearestCartesianItems(n,e,t,l,i,r)}function getAxisItems(n,e,t,l,i){const r=[],a=t==="x"?"inXRange":"inYRange";let c=!1;return evaluateInteractionItems(n,t,e,(u,p,_)=>{u[a]&&u[a](e[t],i)&&(r.push({element:u,datasetIndex:p,index:_}),c=c||u.inRange(e.x,e.y,i))}),l&&!c?[]:r}var Interaction={evaluateInteractionItems,modes:{index(n,e,t,l){const i=getRelativePosition(e,n),r=t.axis||"x",a=t.includeInvisible||!1,c=t.intersect?getIntersectItems(n,i,r,l,a):getNearestItems(n,i,r,!1,l,a),u=[];return c.length?(n.getSortedVisibleDatasetMetas().forEach(p=>{const _=c[0].index,y=p.data[_];y&&!y.skip&&u.push({element:y,datasetIndex:p.index,index:_})}),u):[]},dataset(n,e,t,l){const i=getRelativePosition(e,n),r=t.axis||"xy",a=t.includeInvisible||!1;let c=t.intersect?getIntersectItems(n,i,r,l,a):getNearestItems(n,i,r,!1,l,a);if(c.length>0){const u=c[0].datasetIndex,p=n.getDatasetMeta(u).data;c=[];for(let _=0;_<p.length;++_)c.push({element:p[_],datasetIndex:u,index:_})}return c},point(n,e,t,l){const i=getRelativePosition(e,n),r=t.axis||"xy",a=t.includeInvisible||!1;return getIntersectItems(n,i,r,l,a)},nearest(n,e,t,l){const i=getRelativePosition(e,n),r=t.axis||"xy",a=t.includeInvisible||!1;return getNearestItems(n,i,r,t.intersect,l,a)},x(n,e,t,l){const i=getRelativePosition(e,n);return getAxisItems(n,i,"x",t.intersect,l)},y(n,e,t,l){const i=getRelativePosition(e,n);return getAxisItems(n,i,"y",t.intersect,l)}}};const STATIC_POSITIONS=["left","top","right","bottom"];function filterByPosition(n,e){return n.filter(t=>t.pos===e)}function filterDynamicPositionByAxis(n,e){return n.filter(t=>STATIC_POSITIONS.indexOf(t.pos)===-1&&t.box.axis===e)}function sortByWeight(n,e){return n.sort((t,l)=>{const i=e?l:t,r=e?t:l;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function wrapBoxes(n){const e=[];let t,l,i,r,a,c;for(t=0,l=(n||[]).length;t<l;++t)i=n[t],{position:r,options:{stack:a,stackWeight:c=1}}=i,e.push({index:t,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&r+a,stackWeight:c});return e}function buildStacks(n){const e={};for(const t of n){const{stack:l,pos:i,stackWeight:r}=t;if(!l||!STATIC_POSITIONS.includes(i))continue;const a=e[l]||(e[l]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=r}return e}function setLayoutDims(n,e){const t=buildStacks(n),{vBoxMaxWidth:l,hBoxMaxHeight:i}=e;let r,a,c;for(r=0,a=n.length;r<a;++r){c=n[r];const{fullSize:u}=c.box,p=t[c.stack],_=p&&c.stackWeight/p.weight;c.horizontal?(c.width=_?_*l:u&&e.availableWidth,c.height=i):(c.width=l,c.height=_?_*i:u&&e.availableHeight)}return t}function buildLayoutBoxes(n){const e=wrapBoxes(n),t=sortByWeight(e.filter(p=>p.box.fullSize),!0),l=sortByWeight(filterByPosition(e,"left"),!0),i=sortByWeight(filterByPosition(e,"right")),r=sortByWeight(filterByPosition(e,"top"),!0),a=sortByWeight(filterByPosition(e,"bottom")),c=filterDynamicPositionByAxis(e,"x"),u=filterDynamicPositionByAxis(e,"y");return{fullSize:t,leftAndTop:l.concat(r),rightAndBottom:i.concat(u).concat(a).concat(c),chartArea:filterByPosition(e,"chartArea"),vertical:l.concat(i).concat(u),horizontal:r.concat(a).concat(c)}}function getCombinedMax(n,e,t,l){return Math.max(n[t],e[t])+Math.max(n[l],e[l])}function updateMaxPadding(n,e){n.top=Math.max(n.top,e.top),n.left=Math.max(n.left,e.left),n.bottom=Math.max(n.bottom,e.bottom),n.right=Math.max(n.right,e.right)}function updateDims(n,e,t,l){const{pos:i,box:r}=t,a=n.maxPadding;if(!isObject(i)){t.size&&(n[i]-=t.size);const y=l[t.stack]||{size:0,count:1};y.size=Math.max(y.size,t.horizontal?r.height:r.width),t.size=y.size/y.count,n[i]+=t.size}r.getPadding&&updateMaxPadding(a,r.getPadding());const c=Math.max(0,e.outerWidth-getCombinedMax(a,n,"left","right")),u=Math.max(0,e.outerHeight-getCombinedMax(a,n,"top","bottom")),p=c!==n.w,_=u!==n.h;return n.w=c,n.h=u,t.horizontal?{same:p,other:_}:{same:_,other:p}}function handleMaxPadding(n){const e=n.maxPadding;function t(l){const i=Math.max(e[l]-n[l],0);return n[l]+=i,i}n.y+=t("top"),n.x+=t("left"),t("right"),t("bottom")}function getMargins(n,e){const t=e.maxPadding;function l(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(a=>{r[a]=Math.max(e[a],t[a])}),r}return l(n?["left","right"]:["top","bottom"])}function fitBoxes(n,e,t,l){const i=[];let r,a,c,u,p,_;for(r=0,a=n.length,p=0;r<a;++r){c=n[r],u=c.box,u.update(c.width||e.w,c.height||e.h,getMargins(c.horizontal,e));const{same:y,other:x}=updateDims(e,t,c,l);p|=y&&i.length,_=_||x,u.fullSize||i.push(c)}return p&&fitBoxes(i,e,t,l)||_}function setBoxDims(n,e,t,l,i){n.top=t,n.left=e,n.right=e+l,n.bottom=t+i,n.width=l,n.height=i}function placeBoxes(n,e,t,l){const i=t.padding;let{x:r,y:a}=e;for(const c of n){const u=c.box,p=l[c.stack]||{count:1,placed:0,weight:1},_=c.stackWeight/p.weight||1;if(c.horizontal){const y=e.w*_,x=p.size||u.height;defined(p.start)&&(a=p.start),u.fullSize?setBoxDims(u,i.left,a,t.outerWidth-i.right-i.left,x):setBoxDims(u,e.left+p.placed,a,y,x),p.start=a,p.placed+=y,a=u.bottom}else{const y=e.h*_,x=p.size||u.width;defined(p.start)&&(r=p.start),u.fullSize?setBoxDims(u,r,i.top,x,t.outerHeight-i.bottom-i.top):setBoxDims(u,r,e.top+p.placed,x,y),p.start=r,p.placed+=y,r=u.right}}e.x=r,e.y=a}var layouts={addBox(n,e){n.boxes||(n.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},n.boxes.push(e)},removeBox(n,e){const t=n.boxes?n.boxes.indexOf(e):-1;t!==-1&&n.boxes.splice(t,1)},configure(n,e,t){e.fullSize=t.fullSize,e.position=t.position,e.weight=t.weight},update(n,e,t,l){if(!n)return;const i=toPadding(n.options.layout.padding),r=Math.max(e-i.width,0),a=Math.max(t-i.height,0),c=buildLayoutBoxes(n.boxes),u=c.vertical,p=c.horizontal;each(n.boxes,S=>{typeof S.beforeLayout=="function"&&S.beforeLayout()});const _=u.reduce((S,T)=>T.box.options&&T.box.options.display===!1?S:S+1,0)||1,y=Object.freeze({outerWidth:e,outerHeight:t,padding:i,availableWidth:r,availableHeight:a,vBoxMaxWidth:r/2/_,hBoxMaxHeight:a/2}),x=Object.assign({},i);updateMaxPadding(x,toPadding(l));const k=Object.assign({maxPadding:x,w:r,h:a,x:i.left,y:i.top},i),E=setLayoutDims(u.concat(p),y);fitBoxes(c.fullSize,k,y,E),fitBoxes(u,k,y,E),fitBoxes(p,k,y,E)&&fitBoxes(u,k,y,E),handleMaxPadding(k),placeBoxes(c.leftAndTop,k,y,E),k.x+=k.w,k.y+=k.h,placeBoxes(c.rightAndBottom,k,y,E),n.chartArea={left:k.left,top:k.top,right:k.left+k.w,bottom:k.top+k.h,height:k.h,width:k.w},each(c.chartArea,S=>{const T=S.box;Object.assign(T,n.chartArea),T.update(k.w,k.h,{left:0,top:0,right:0,bottom:0})})}};class BasePlatform{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,l){}removeEventListener(e,t,l){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,l,i){return t=Math.max(0,t||e.width),l=l||e.height,{width:t,height:Math.max(0,i?Math.floor(t/i):l)}}isAttached(e){return!0}updateConfig(e){}}class BasicPlatform extends BasePlatform{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const EXPANDO_KEY="$chartjs",EVENT_TYPES={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},isNullOrEmpty=n=>n===null||n==="";function initCanvas(n,e){const t=n.style,l=n.getAttribute("height"),i=n.getAttribute("width");if(n[EXPANDO_KEY]={initial:{height:l,width:i,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",isNullOrEmpty(i)){const r=readUsedSize(n,"width");r!==void 0&&(n.width=r)}if(isNullOrEmpty(l))if(n.style.height==="")n.height=n.width/(e||2);else{const r=readUsedSize(n,"height");r!==void 0&&(n.height=r)}return n}const eventListenerOptions=supportsEventListenerOptions?{passive:!0}:!1;function addListener(n,e,t){n&&n.addEventListener(e,t,eventListenerOptions)}function removeListener(n,e,t){n&&n.canvas&&n.canvas.removeEventListener(e,t,eventListenerOptions)}function fromNativeEvent(n,e){const t=EVENT_TYPES[n.type]||n.type,{x:l,y:i}=getRelativePosition(n,e);return{type:t,chart:e,native:n,x:l!==void 0?l:null,y:i!==void 0?i:null}}function nodeListContains(n,e){for(const t of n)if(t===e||t.contains(e))return!0}function createAttachObserver(n,e,t){const l=n.canvas,i=new MutationObserver(r=>{let a=!1;for(const c of r)a=a||nodeListContains(c.addedNodes,l),a=a&&!nodeListContains(c.removedNodes,l);a&&t()});return i.observe(document,{childList:!0,subtree:!0}),i}function createDetachObserver(n,e,t){const l=n.canvas,i=new MutationObserver(r=>{let a=!1;for(const c of r)a=a||nodeListContains(c.removedNodes,l),a=a&&!nodeListContains(c.addedNodes,l);a&&t()});return i.observe(document,{childList:!0,subtree:!0}),i}const drpListeningCharts=new Map;let oldDevicePixelRatio=0;function onWindowResize(){const n=window.devicePixelRatio;n!==oldDevicePixelRatio&&(oldDevicePixelRatio=n,drpListeningCharts.forEach((e,t)=>{t.currentDevicePixelRatio!==n&&e()}))}function listenDevicePixelRatioChanges(n,e){drpListeningCharts.size||window.addEventListener("resize",onWindowResize),drpListeningCharts.set(n,e)}function unlistenDevicePixelRatioChanges(n){drpListeningCharts.delete(n),drpListeningCharts.size||window.removeEventListener("resize",onWindowResize)}function createResizeObserver(n,e,t){const l=n.canvas,i=l&&_getParentNode(l);if(!i)return;const r=throttled((c,u)=>{const p=i.clientWidth;t(c,u),p<i.clientWidth&&t()},window),a=new ResizeObserver(c=>{const u=c[0],p=u.contentRect.width,_=u.contentRect.height;p===0&&_===0||r(p,_)});return a.observe(i),listenDevicePixelRatioChanges(n,r),a}function releaseObserver(n,e,t){t&&t.disconnect(),e==="resize"&&unlistenDevicePixelRatioChanges(n)}function createProxyAndListen(n,e,t){const l=n.canvas,i=throttled(r=>{n.ctx!==null&&t(fromNativeEvent(r,n))},n);return addListener(l,e,i),i}class DomPlatform extends BasePlatform{acquireContext(e,t){const l=e&&e.getContext&&e.getContext("2d");return l&&l.canvas===e?(initCanvas(e,t),l):null}releaseContext(e){const t=e.canvas;if(!t[EXPANDO_KEY])return!1;const l=t[EXPANDO_KEY].initial;["height","width"].forEach(r=>{const a=l[r];isNullOrUndef(a)?t.removeAttribute(r):t.setAttribute(r,a)});const i=l.style||{};return Object.keys(i).forEach(r=>{t.style[r]=i[r]}),t.width=t.width,delete t[EXPANDO_KEY],!0}addEventListener(e,t,l){this.removeEventListener(e,t);const i=e.$proxies||(e.$proxies={}),a={attach:createAttachObserver,detach:createDetachObserver,resize:createResizeObserver}[t]||createProxyAndListen;i[t]=a(e,t,l)}removeEventListener(e,t){const l=e.$proxies||(e.$proxies={}),i=l[t];if(!i)return;({attach:releaseObserver,detach:releaseObserver,resize:releaseObserver}[t]||removeListener)(e,t,i),l[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,l,i){return getMaximumSize(e,t,l,i)}isAttached(e){const t=e&&_getParentNode(e);return!!(t&&t.isConnected)}}function _detectPlatform(n){return!_isDomSupported()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?BasicPlatform:DomPlatform}class Element{constructor(){ne(this,"x");ne(this,"y");ne(this,"active",!1);ne(this,"options");ne(this,"$animations")}tooltipPosition(e){const{x:t,y:l}=this.getProps(["x","y"],e);return{x:t,y:l}}hasValue(){return isNumber(this.x)&&isNumber(this.y)}getProps(e,t){const l=this.$animations;if(!t||!l)return this;const i={};return e.forEach(r=>{i[r]=l[r]&&l[r].active()?l[r]._to:this[r]}),i}}ne(Element,"defaults",{}),ne(Element,"defaultRoutes");function autoSkip(n,e){const t=n.options.ticks,l=determineMaxTicks(n),i=Math.min(t.maxTicksLimit||l,l),r=t.major.enabled?getMajorIndices(e):[],a=r.length,c=r[0],u=r[a-1],p=[];if(a>i)return skipMajors(e,p,r,a/i),p;const _=calculateSpacing(r,e,i);if(a>0){let y,x;const k=a>1?Math.round((u-c)/(a-1)):null;for(skip(e,p,_,isNullOrUndef(k)?0:c-k,c),y=0,x=a-1;y<x;y++)skip(e,p,_,r[y],r[y+1]);return skip(e,p,_,u,isNullOrUndef(k)?e.length:u+k),p}return skip(e,p,_),p}function determineMaxTicks(n){const e=n.options.offset,t=n._tickSize(),l=n._length/t+(e?0:1),i=n._maxLength/t;return Math.floor(Math.min(l,i))}function calculateSpacing(n,e,t){const l=getEvenSpacing(n),i=e.length/t;if(!l)return Math.max(i,1);const r=_factorize(l);for(let a=0,c=r.length-1;a<c;a++){const u=r[a];if(u>i)return u}return Math.max(i,1)}function getMajorIndices(n){const e=[];let t,l;for(t=0,l=n.length;t<l;t++)n[t].major&&e.push(t);return e}function skipMajors(n,e,t,l){let i=0,r=t[0],a;for(l=Math.ceil(l),a=0;a<n.length;a++)a===r&&(e.push(n[a]),i++,r=t[i*l])}function skip(n,e,t,l,i){const r=valueOrDefault(l,0),a=Math.min(valueOrDefault(i,n.length),n.length);let c=0,u,p,_;for(t=Math.ceil(t),i&&(u=i-l,t=u/Math.floor(u/t)),_=r;_<0;)c++,_=Math.round(r+c*t);for(p=Math.max(r,0);p<a;p++)p===_&&(e.push(n[p]),c++,_=Math.round(r+c*t))}function getEvenSpacing(n){const e=n.length;let t,l;if(e<2)return!1;for(l=n[0],t=1;t<e;++t)if(n[t]-n[t-1]!==l)return!1;return l}const reverseAlign=n=>n==="left"?"right":n==="right"?"left":n,offsetFromEdge=(n,e,t)=>e==="top"||e==="left"?n[e]+t:n[e]-t,getTicksLimit=(n,e)=>Math.min(e||n,n);function sample(n,e){const t=[],l=n.length/e,i=n.length;let r=0;for(;r<i;r+=l)t.push(n[Math.floor(r)]);return t}function getPixelForGridLine(n,e,t){const l=n.ticks.length,i=Math.min(e,l-1),r=n._startPixel,a=n._endPixel,c=1e-6;let u=n.getPixelForTick(i),p;if(!(t&&(l===1?p=Math.max(u-r,a-u):e===0?p=(n.getPixelForTick(1)-u)/2:p=(u-n.getPixelForTick(i-1))/2,u+=i<e?p:-p,u<r-c||u>a+c)))return u}function garbageCollect(n,e){each(n,t=>{const l=t.gc,i=l.length/2;let r;if(i>e){for(r=0;r<i;++r)delete t.data[l[r]];l.splice(0,i)}})}function getTickMarkLength(n){return n.drawTicks?n.tickLength:0}function getTitleHeight(n,e){if(!n.display)return 0;const t=toFont(n.font,e),l=toPadding(n.padding);return(isArray(n.text)?n.text.length:1)*t.lineHeight+l.height}function createScaleContext(n,e){return createContext(n,{scale:e,type:"scale"})}function createTickContext(n,e,t){return createContext(n,{tick:t,index:e,type:"tick"})}function titleAlign(n,e,t){let l=_toLeftRightCenter(n);return(t&&e!=="right"||!t&&e==="right")&&(l=reverseAlign(l)),l}function titleArgs(n,e,t,l){const{top:i,left:r,bottom:a,right:c,chart:u}=n,{chartArea:p,scales:_}=u;let y=0,x,k,E;const S=a-i,T=c-r;if(n.isHorizontal()){if(k=_alignStartEnd(l,r,c),isObject(t)){const I=Object.keys(t)[0],U=t[I];E=_[I].getPixelForValue(U)+S-e}else t==="center"?E=(p.bottom+p.top)/2+S-e:E=offsetFromEdge(n,t,e);x=c-r}else{if(isObject(t)){const I=Object.keys(t)[0],U=t[I];k=_[I].getPixelForValue(U)-T+e}else t==="center"?k=(p.left+p.right)/2-T+e:k=offsetFromEdge(n,t,e);E=_alignStartEnd(l,a,i),y=t==="left"?-HALF_PI:HALF_PI}return{titleX:k,titleY:E,maxWidth:x,rotation:y}}class Scale extends Element{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:l,_suggestedMax:i}=this;return e=finiteOrDefault(e,Number.POSITIVE_INFINITY),t=finiteOrDefault(t,Number.NEGATIVE_INFINITY),l=finiteOrDefault(l,Number.POSITIVE_INFINITY),i=finiteOrDefault(i,Number.NEGATIVE_INFINITY),{min:finiteOrDefault(e,l),max:finiteOrDefault(t,i),minDefined:isNumberFinite(e),maxDefined:isNumberFinite(t)}}getMinMax(e){let{min:t,max:l,minDefined:i,maxDefined:r}=this.getUserBounds(),a;if(i&&r)return{min:t,max:l};const c=this.getMatchingVisibleMetas();for(let u=0,p=c.length;u<p;++u)a=c[u].controller.getMinMax(this,e),i||(t=Math.min(t,a.min)),r||(l=Math.max(l,a.max));return t=r&&t>l?l:t,l=i&&t>l?t:l,{min:finiteOrDefault(t,finiteOrDefault(l,t)),max:finiteOrDefault(l,finiteOrDefault(t,l))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){callback(this.options.beforeUpdate,[this])}update(e,t,l){const{beginAtZero:i,grace:r,ticks:a}=this.options,c=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=l=Object.assign({left:0,right:0,top:0,bottom:0},l),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+l.left+l.right:this.height+l.top+l.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=_addGrace(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const u=c<this.ticks.length;this._convertTicksToLabels(u?sample(this.ticks,c):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=autoSkip(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),u&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,l;this.isHorizontal()?(t=this.left,l=this.right):(t=this.top,l=this.bottom,e=!e),this._startPixel=t,this._endPixel=l,this._reversePixels=e,this._length=l-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){callback(this.options.afterUpdate,[this])}beforeSetDimensions(){callback(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){callback(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),callback(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){callback(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const t=this.options.ticks;let l,i,r;for(l=0,i=e.length;l<i;l++)r=e[l],r.label=callback(t.callback,[r.value,l,e],this)}afterTickToLabelConversion(){callback(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){callback(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,t=e.ticks,l=getTicksLimit(this.ticks.length,e.ticks.maxTicksLimit),i=t.minRotation||0,r=t.maxRotation;let a=i,c,u,p;if(!this._isVisible()||!t.display||i>=r||l<=1||!this.isHorizontal()){this.labelRotation=i;return}const _=this._getLabelSizes(),y=_.widest.width,x=_.highest.height,k=_limitValue(this.chart.width-y,0,this.maxWidth);c=e.offset?this.maxWidth/l:k/(l-1),y+6>c&&(c=k/(l-(e.offset?.5:1)),u=this.maxHeight-getTickMarkLength(e.grid)-t.padding-getTitleHeight(e.title,this.chart.options.font),p=Math.sqrt(y*y+x*x),a=toDegrees(Math.min(Math.asin(_limitValue((_.highest.height+6)/c,-1,1)),Math.asin(_limitValue(u/p,-1,1))-Math.asin(_limitValue(x/p,-1,1)))),a=Math.max(i,Math.min(r,a))),this.labelRotation=a}afterCalculateLabelRotation(){callback(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){callback(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:t,options:{ticks:l,title:i,grid:r}}=this,a=this._isVisible(),c=this.isHorizontal();if(a){const u=getTitleHeight(i,t.options.font);if(c?(e.width=this.maxWidth,e.height=getTickMarkLength(r)+u):(e.height=this.maxHeight,e.width=getTickMarkLength(r)+u),l.display&&this.ticks.length){const{first:p,last:_,widest:y,highest:x}=this._getLabelSizes(),k=l.padding*2,E=toRadians(this.labelRotation),S=Math.cos(E),T=Math.sin(E);if(c){const I=l.mirror?0:T*y.width+S*x.height;e.height=Math.min(this.maxHeight,e.height+I+k)}else{const I=l.mirror?0:S*y.width+T*x.height;e.width=Math.min(this.maxWidth,e.width+I+k)}this._calculatePadding(p,_,T,S)}}this._handleMargins(),c?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,l,i){const{ticks:{align:r,padding:a},position:c}=this.options,u=this.labelRotation!==0,p=c!=="top"&&this.axis==="x";if(this.isHorizontal()){const _=this.getPixelForTick(0)-this.left,y=this.right-this.getPixelForTick(this.ticks.length-1);let x=0,k=0;u?p?(x=i*e.width,k=l*t.height):(x=l*e.height,k=i*t.width):r==="start"?k=t.width:r==="end"?x=e.width:r!=="inner"&&(x=e.width/2,k=t.width/2),this.paddingLeft=Math.max((x-_+a)*this.width/(this.width-_),0),this.paddingRight=Math.max((k-y+a)*this.width/(this.width-y),0)}else{let _=t.height/2,y=e.height/2;r==="start"?(_=0,y=e.height):r==="end"&&(_=t.height,y=0),this.paddingTop=_+a,this.paddingBottom=y+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){callback(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:t}=this.options;return t==="top"||t==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,l;for(t=0,l=e.length;t<l;t++)isNullOrUndef(e[t].label)&&(e.splice(t,1),l--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const t=this.options.ticks.sampleSize;let l=this.ticks;t<l.length&&(l=sample(l,t)),this._labelSizes=e=this._computeLabelSizes(l,l.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,l){const{ctx:i,_longestTextCache:r}=this,a=[],c=[],u=Math.floor(t/getTicksLimit(t,l));let p=0,_=0,y,x,k,E,S,T,I,U,K,Z,V;for(y=0;y<t;y+=u){if(E=e[y].label,S=this._resolveTickFontOptions(y),i.font=T=S.string,I=r[T]=r[T]||{data:{},gc:[]},U=S.lineHeight,K=Z=0,!isNullOrUndef(E)&&!isArray(E))K=_measureText(i,I.data,I.gc,K,E),Z=U;else if(isArray(E))for(x=0,k=E.length;x<k;++x)V=E[x],!isNullOrUndef(V)&&!isArray(V)&&(K=_measureText(i,I.data,I.gc,K,V),Z+=U);a.push(K),c.push(Z),p=Math.max(K,p),_=Math.max(Z,_)}garbageCollect(r,t);const Q=a.indexOf(p),d=c.indexOf(_),G=H=>({width:a[H]||0,height:c[H]||0});return{first:G(0),last:G(t-1),widest:G(Q),highest:G(d),widths:a,heights:c}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const t=this._startPixel+e*this._length;return _int16Range(this._alignToPixels?_alignPixel(this.chart,t,0):t)}getDecimalForPixel(e){const t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){const t=this.ticks||[];if(e>=0&&e<t.length){const l=t[e];return l.$context||(l.$context=createTickContext(this.getContext(),e,l))}return this.$context||(this.$context=createScaleContext(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,t=toRadians(this.labelRotation),l=Math.abs(Math.cos(t)),i=Math.abs(Math.sin(t)),r=this._getLabelSizes(),a=e.autoSkipPadding||0,c=r?r.widest.width+a:0,u=r?r.highest.height+a:0;return this.isHorizontal()?u*l>c*i?c/l:u/i:u*i<c*l?u/l:c/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const t=this.axis,l=this.chart,i=this.options,{grid:r,position:a,border:c}=i,u=r.offset,p=this.isHorizontal(),y=this.ticks.length+(u?1:0),x=getTickMarkLength(r),k=[],E=c.setContext(this.getContext()),S=E.display?E.width:0,T=S/2,I=function(ge){return _alignPixel(l,ge,S)};let U,K,Z,V,Q,d,G,H,he,se,ce,ee;if(a==="top")U=I(this.bottom),d=this.bottom-x,H=U-T,se=I(e.top)+T,ee=e.bottom;else if(a==="bottom")U=I(this.top),se=e.top,ee=I(e.bottom)-T,d=U+T,H=this.top+x;else if(a==="left")U=I(this.right),Q=this.right-x,G=U-T,he=I(e.left)+T,ce=e.right;else if(a==="right")U=I(this.left),he=e.left,ce=I(e.right)-T,Q=U+T,G=this.left+x;else if(t==="x"){if(a==="center")U=I((e.top+e.bottom)/2+.5);else if(isObject(a)){const ge=Object.keys(a)[0],pe=a[ge];U=I(this.chart.scales[ge].getPixelForValue(pe))}se=e.top,ee=e.bottom,d=U+T,H=d+x}else if(t==="y"){if(a==="center")U=I((e.left+e.right)/2);else if(isObject(a)){const ge=Object.keys(a)[0],pe=a[ge];U=I(this.chart.scales[ge].getPixelForValue(pe))}Q=U-T,G=Q-x,he=e.left,ce=e.right}const ye=valueOrDefault(i.ticks.maxTicksLimit,y),fe=Math.max(1,Math.ceil(y/ye));for(K=0;K<y;K+=fe){const ge=this.getContext(K),pe=r.setContext(ge),Ye=c.setContext(ge),De=pe.lineWidth,We=pe.color,$e=Ye.dash||[],Ue=Ye.dashOffset,Ve=pe.tickWidth,Oe=pe.tickColor,et=pe.tickBorderDash||[],He=pe.tickBorderDashOffset;Z=getPixelForGridLine(this,K,u),Z!==void 0&&(V=_alignPixel(l,Z,De),p?Q=G=he=ce=V:d=H=se=ee=V,k.push({tx1:Q,ty1:d,tx2:G,ty2:H,x1:he,y1:se,x2:ce,y2:ee,width:De,color:We,borderDash:$e,borderDashOffset:Ue,tickWidth:Ve,tickColor:Oe,tickBorderDash:et,tickBorderDashOffset:He}))}return this._ticksLength=y,this._borderValue=U,k}_computeLabelItems(e){const t=this.axis,l=this.options,{position:i,ticks:r}=l,a=this.isHorizontal(),c=this.ticks,{align:u,crossAlign:p,padding:_,mirror:y}=r,x=getTickMarkLength(l.grid),k=x+_,E=y?-_:k,S=-toRadians(this.labelRotation),T=[];let I,U,K,Z,V,Q,d,G,H,he,se,ce,ee="middle";if(i==="top")Q=this.bottom-E,d=this._getXAxisLabelAlignment();else if(i==="bottom")Q=this.top+E,d=this._getXAxisLabelAlignment();else if(i==="left"){const fe=this._getYAxisLabelAlignment(x);d=fe.textAlign,V=fe.x}else if(i==="right"){const fe=this._getYAxisLabelAlignment(x);d=fe.textAlign,V=fe.x}else if(t==="x"){if(i==="center")Q=(e.top+e.bottom)/2+k;else if(isObject(i)){const fe=Object.keys(i)[0],ge=i[fe];Q=this.chart.scales[fe].getPixelForValue(ge)+k}d=this._getXAxisLabelAlignment()}else if(t==="y"){if(i==="center")V=(e.left+e.right)/2-k;else if(isObject(i)){const fe=Object.keys(i)[0],ge=i[fe];V=this.chart.scales[fe].getPixelForValue(ge)}d=this._getYAxisLabelAlignment(x).textAlign}t==="y"&&(u==="start"?ee="top":u==="end"&&(ee="bottom"));const ye=this._getLabelSizes();for(I=0,U=c.length;I<U;++I){K=c[I],Z=K.label;const fe=r.setContext(this.getContext(I));G=this.getPixelForTick(I)+r.labelOffset,H=this._resolveTickFontOptions(I),he=H.lineHeight,se=isArray(Z)?Z.length:1;const ge=se/2,pe=fe.color,Ye=fe.textStrokeColor,De=fe.textStrokeWidth;let We=d;a?(V=G,d==="inner"&&(I===U-1?We=this.options.reverse?"left":"right":I===0?We=this.options.reverse?"right":"left":We="center"),i==="top"?p==="near"||S!==0?ce=-se*he+he/2:p==="center"?ce=-ye.highest.height/2-ge*he+he:ce=-ye.highest.height+he/2:p==="near"||S!==0?ce=he/2:p==="center"?ce=ye.highest.height/2-ge*he:ce=ye.highest.height-se*he,y&&(ce*=-1),S!==0&&!fe.showLabelBackdrop&&(V+=he/2*Math.sin(S))):(Q=G,ce=(1-se)*he/2);let $e;if(fe.showLabelBackdrop){const Ue=toPadding(fe.backdropPadding),Ve=ye.heights[I],Oe=ye.widths[I];let et=ce-Ue.top,He=0-Ue.left;switch(ee){case"middle":et-=Ve/2;break;case"bottom":et-=Ve;break}switch(d){case"center":He-=Oe/2;break;case"right":He-=Oe;break;case"inner":I===U-1?He-=Oe:I>0&&(He-=Oe/2);break}$e={left:He,top:et,width:Oe+Ue.width,height:Ve+Ue.height,color:fe.backdropColor}}T.push({label:Z,font:H,textOffset:ce,options:{rotation:S,color:pe,strokeColor:Ye,strokeWidth:De,textAlign:We,textBaseline:ee,translation:[V,Q],backdrop:$e}})}return T}_getXAxisLabelAlignment(){const{position:e,ticks:t}=this.options;if(-toRadians(this.labelRotation))return e==="top"?"left":"right";let i="center";return t.align==="start"?i="left":t.align==="end"?i="right":t.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:t,ticks:{crossAlign:l,mirror:i,padding:r}}=this.options,a=this._getLabelSizes(),c=e+r,u=a.widest.width;let p,_;return t==="left"?i?(_=this.right+r,l==="near"?p="left":l==="center"?(p="center",_+=u/2):(p="right",_+=u)):(_=this.right-c,l==="near"?p="right":l==="center"?(p="center",_-=u/2):(p="left",_=this.left)):t==="right"?i?(_=this.left+r,l==="near"?p="right":l==="center"?(p="center",_-=u/2):(p="left",_-=u)):(_=this.left+c,l==="near"?p="left":l==="center"?(p="center",_+=u/2):(p="right",_=this.right)):p="right",{textAlign:p,x:_}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:t},left:l,top:i,width:r,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(l,i,r,a),e.restore())}getLineWidthForValue(e){const t=this.options.grid;if(!this._isVisible()||!t.display)return 0;const i=this.ticks.findIndex(r=>r.value===e);return i>=0?t.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const t=this.options.grid,l=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let r,a;const c=(u,p,_)=>{!_.width||!_.color||(l.save(),l.lineWidth=_.width,l.strokeStyle=_.color,l.setLineDash(_.borderDash||[]),l.lineDashOffset=_.borderDashOffset,l.beginPath(),l.moveTo(u.x,u.y),l.lineTo(p.x,p.y),l.stroke(),l.restore())};if(t.display)for(r=0,a=i.length;r<a;++r){const u=i[r];t.drawOnChartArea&&c({x:u.x1,y:u.y1},{x:u.x2,y:u.y2},u),t.drawTicks&&c({x:u.tx1,y:u.ty1},{x:u.tx2,y:u.ty2},{color:u.tickColor,width:u.tickWidth,borderDash:u.tickBorderDash,borderDashOffset:u.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:t,options:{border:l,grid:i}}=this,r=l.setContext(this.getContext()),a=l.display?r.width:0;if(!a)return;const c=i.setContext(this.getContext(0)).lineWidth,u=this._borderValue;let p,_,y,x;this.isHorizontal()?(p=_alignPixel(e,this.left,a)-a/2,_=_alignPixel(e,this.right,c)+c/2,y=x=u):(y=_alignPixel(e,this.top,a)-a/2,x=_alignPixel(e,this.bottom,c)+c/2,p=_=u),t.save(),t.lineWidth=r.width,t.strokeStyle=r.color,t.beginPath(),t.moveTo(p,y),t.lineTo(_,x),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;const l=this.ctx,i=this._computeLabelArea();i&&clipArea(l,i);const r=this.getLabelItems(e);for(const a of r){const c=a.options,u=a.font,p=a.label,_=a.textOffset;renderText(l,p,0,_,u,c)}i&&unclipArea(l)}drawTitle(){const{ctx:e,options:{position:t,title:l,reverse:i}}=this;if(!l.display)return;const r=toFont(l.font),a=toPadding(l.padding),c=l.align;let u=r.lineHeight/2;t==="bottom"||t==="center"||isObject(t)?(u+=a.bottom,isArray(l.text)&&(u+=r.lineHeight*(l.text.length-1))):u+=a.top;const{titleX:p,titleY:_,maxWidth:y,rotation:x}=titleArgs(this,u,t,c);renderText(e,l.text,0,0,r,{color:l.color,maxWidth:y,rotation:x,textAlign:titleAlign(c,t,i),textBaseline:"middle",translation:[p,_]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,t=e.ticks&&e.ticks.z||0,l=valueOrDefault(e.grid&&e.grid.z,-1),i=valueOrDefault(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Scale.prototype.draw?[{z:t,draw:r=>{this.draw(r)}}]:[{z:l,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:t,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(e){const t=this.chart.getSortedVisibleDatasetMetas(),l=this.axis+"AxisID",i=[];let r,a;for(r=0,a=t.length;r<a;++r){const c=t[r];c[l]===this.id&&(!e||c.type===e)&&i.push(c)}return i}_resolveTickFontOptions(e){const t=this.options.ticks.setContext(this.getContext(e));return toFont(t.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class TypedRegistry{constructor(e,t,l){this.type=e,this.scope=t,this.override=l,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const t=Object.getPrototypeOf(e);let l;isIChartComponent(t)&&(l=this.register(t));const i=this.items,r=e.id,a=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+e);return r in i||(i[r]=e,registerDefaults(e,a,l),this.override&&defaults.override(e.id,e.overrides)),a}get(e){return this.items[e]}unregister(e){const t=this.items,l=e.id,i=this.scope;l in t&&delete t[l],i&&l in defaults[i]&&(delete defaults[i][l],this.override&&delete overrides[l])}}function registerDefaults(n,e,t){const l=merge(Object.create(null),[t?defaults.get(t):{},defaults.get(e),n.defaults]);defaults.set(e,l),n.defaultRoutes&&routeDefaults(e,n.defaultRoutes),n.descriptors&&defaults.describe(e,n.descriptors)}function routeDefaults(n,e){Object.keys(e).forEach(t=>{const l=t.split("."),i=l.pop(),r=[n].concat(l).join("."),a=e[t].split("."),c=a.pop(),u=a.join(".");defaults.route(r,i,u,c)})}function isIChartComponent(n){return"id"in n&&"defaults"in n}class Registry{constructor(){this.controllers=new TypedRegistry(DatasetController,"datasets",!0),this.elements=new TypedRegistry(Element,"elements"),this.plugins=new TypedRegistry(Object,"plugins"),this.scales=new TypedRegistry(Scale,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,t,l){[...t].forEach(i=>{const r=l||this._getRegistryForType(i);l||r.isForType(i)||r===this.plugins&&i.id?this._exec(e,r,i):each(i,a=>{const c=l||this._getRegistryForType(a);this._exec(e,c,a)})})}_exec(e,t,l){const i=_capitalize(e);callback(l["before"+i],[],l),t[e](l),callback(l["after"+i],[],l)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){const l=this._typedRegistries[t];if(l.isForType(e))return l}return this.plugins}_get(e,t,l){const i=t.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+l+".");return i}}var registry=new Registry;class PluginService{constructor(){this._init=[]}notify(e,t,l,i){t==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const r=i?this._descriptors(e).filter(i):this._descriptors(e),a=this._notify(r,e,t,l);return t==="afterDestroy"&&(this._notify(r,e,"stop"),this._notify(this._init,e,"uninstall")),a}_notify(e,t,l,i){i=i||{};for(const r of e){const a=r.plugin,c=a[l],u=[t,i,r.options];if(callback(c,u,a)===!1&&i.cancelable)return!1}return!0}invalidate(){isNullOrUndef(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){const l=e&&e.config,i=valueOrDefault(l.options&&l.options.plugins,{}),r=allPlugins(l);return i===!1&&!t?[]:createDescriptors(e,r,i,t)}_notifyStateChanges(e){const t=this._oldCache||[],l=this._cache,i=(r,a)=>r.filter(c=>!a.some(u=>c.plugin.id===u.plugin.id));this._notify(i(t,l),e,"stop"),this._notify(i(l,t),e,"start")}}function allPlugins(n){const e={},t=[],l=Object.keys(registry.plugins.items);for(let r=0;r<l.length;r++)t.push(registry.getPlugin(l[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const a=i[r];t.indexOf(a)===-1&&(t.push(a),e[a.id]=!0)}return{plugins:t,localIds:e}}function getOpts(n,e){return!e&&n===!1?null:n===!0?{}:n}function createDescriptors(n,{plugins:e,localIds:t},l,i){const r=[],a=n.getContext();for(const c of e){const u=c.id,p=getOpts(l[u],i);p!==null&&r.push({plugin:c,options:pluginOpts(n.config,{plugin:c,local:t[u]},p,a)})}return r}function pluginOpts(n,{plugin:e,local:t},l,i){const r=n.pluginScopeKeys(e),a=n.getOptionScopes(l,r);return t&&e.defaults&&a.push(e.defaults),n.createResolver(a,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function getIndexAxis(n,e){const t=defaults.datasets[n]||{};return((e.datasets||{})[n]||{}).indexAxis||e.indexAxis||t.indexAxis||"x"}function getAxisFromDefaultScaleID(n,e){let t=n;return n==="_index_"?t=e:n==="_value_"&&(t=e==="x"?"y":"x"),t}function getDefaultScaleIDFromAxis(n,e){return n===e?"_index_":"_value_"}function idMatchesAxis(n){if(n==="x"||n==="y"||n==="r")return n}function axisFromPosition(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function determineAxis(n,...e){if(idMatchesAxis(n))return n;for(const t of e){const l=t.axis||axisFromPosition(t.position)||n.length>1&&idMatchesAxis(n[0].toLowerCase());if(l)return l}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function getAxisFromDataset(n,e,t){if(t[e+"AxisID"]===n)return{axis:e}}function retrieveAxisFromDatasets(n,e){if(e.data&&e.data.datasets){const t=e.data.datasets.filter(l=>l.xAxisID===n||l.yAxisID===n);if(t.length)return getAxisFromDataset(n,"x",t[0])||getAxisFromDataset(n,"y",t[0])}return{}}function mergeScaleConfig(n,e){const t=overrides[n.type]||{scales:{}},l=e.scales||{},i=getIndexAxis(n.type,e),r=Object.create(null);return Object.keys(l).forEach(a=>{const c=l[a];if(!isObject(c))return console.error(`Invalid scale configuration for scale: ${a}`);if(c._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const u=determineAxis(a,c,retrieveAxisFromDatasets(a,n),defaults.scales[c.type]),p=getDefaultScaleIDFromAxis(u,i),_=t.scales||{};r[a]=mergeIf(Object.create(null),[{axis:u},c,_[u],_[p]])}),n.data.datasets.forEach(a=>{const c=a.type||n.type,u=a.indexAxis||getIndexAxis(c,e),_=(overrides[c]||{}).scales||{};Object.keys(_).forEach(y=>{const x=getAxisFromDefaultScaleID(y,u),k=a[x+"AxisID"]||x;r[k]=r[k]||Object.create(null),mergeIf(r[k],[{axis:x},l[k],_[y]])})}),Object.keys(r).forEach(a=>{const c=r[a];mergeIf(c,[defaults.scales[c.type],defaults.scale])}),r}function initOptions(n){const e=n.options||(n.options={});e.plugins=valueOrDefault(e.plugins,{}),e.scales=mergeScaleConfig(n,e)}function initData(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function initConfig(n){return n=n||{},n.data=initData(n.data),initOptions(n),n}const keyCache=new Map,keysCached=new Set;function cachedKeys(n,e){let t=keyCache.get(n);return t||(t=e(),keyCache.set(n,t),keysCached.add(t)),t}const addIfFound=(n,e,t)=>{const l=resolveObjectKey(e,t);l!==void 0&&n.add(l)};class Config{constructor(e){this._config=initConfig(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=initData(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),initOptions(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return cachedKeys(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,t){return cachedKeys(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,t){return cachedKeys(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,""]])}pluginScopeKeys(e){const t=e.id,l=this.type;return cachedKeys(`${l}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){const l=this._scopeCache;let i=l.get(e);return(!i||t)&&(i=new Map,l.set(e,i)),i}getOptionScopes(e,t,l){const{options:i,type:r}=this,a=this._cachedScopes(e,l),c=a.get(t);if(c)return c;const u=new Set;t.forEach(_=>{e&&(u.add(e),_.forEach(y=>addIfFound(u,e,y))),_.forEach(y=>addIfFound(u,i,y)),_.forEach(y=>addIfFound(u,overrides[r]||{},y)),_.forEach(y=>addIfFound(u,defaults,y)),_.forEach(y=>addIfFound(u,descriptors,y))});const p=Array.from(u);return p.length===0&&p.push(Object.create(null)),keysCached.has(t)&&a.set(t,p),p}chartOptionScopes(){const{options:e,type:t}=this;return[e,overrides[t]||{},defaults.datasets[t]||{},{type:t},defaults,descriptors]}resolveNamedOptions(e,t,l,i=[""]){const r={$shared:!0},{resolver:a,subPrefixes:c}=getResolver(this._resolverCache,e,i);let u=a;if(needContext(a,t)){r.$shared=!1,l=isFunction(l)?l():l;const p=this.createResolver(e,l,c);u=_attachContext(a,l,p)}for(const p of t)r[p]=u[p];return r}createResolver(e,t,l=[""],i){const{resolver:r}=getResolver(this._resolverCache,e,l);return isObject(t)?_attachContext(r,t,void 0,i):r}}function getResolver(n,e,t){let l=n.get(e);l||(l=new Map,n.set(e,l));const i=t.join();let r=l.get(i);return r||(r={resolver:_createResolver(e,t),subPrefixes:t.filter(c=>!c.toLowerCase().includes("hover"))},l.set(i,r)),r}const hasFunction=n=>isObject(n)&&Object.getOwnPropertyNames(n).some(e=>isFunction(n[e]));function needContext(n,e){const{isScriptable:t,isIndexable:l}=_descriptors(n);for(const i of e){const r=t(i),a=l(i),c=(a||r)&&n[i];if(r&&(isFunction(c)||hasFunction(c))||a&&isArray(c))return!0}return!1}var version="4.4.5";const KNOWN_POSITIONS=["top","bottom","left","right","chartArea"];function positionIsHorizontal(n,e){return n==="top"||n==="bottom"||KNOWN_POSITIONS.indexOf(n)===-1&&e==="x"}function compare2Level(n,e){return function(t,l){return t[n]===l[n]?t[e]-l[e]:t[n]-l[n]}}function onAnimationsComplete(n){const e=n.chart,t=e.options.animation;e.notifyPlugins("afterRender"),callback(t&&t.onComplete,[n],e)}function onAnimationProgress(n){const e=n.chart,t=e.options.animation;callback(t&&t.onProgress,[n],e)}function getCanvas(n){return _isDomSupported()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const instances={},getChart=n=>{const e=getCanvas(n);return Object.values(instances).filter(t=>t.canvas===e).pop()};function moveNumericKeys(n,e,t){const l=Object.keys(n);for(const i of l){const r=+i;if(r>=e){const a=n[i];delete n[i],(t>0||r>e)&&(n[r+t]=a)}}}function determineLastEvent(n,e,t,l){return!t||n.type==="mouseout"?null:l?e:n}function getSizeForArea(n,e,t){return n.options.clip?n[t]:e[t]}function getDatasetArea(n,e){const{xScale:t,yScale:l}=n;return t&&l?{left:getSizeForArea(t,e,"left"),right:getSizeForArea(t,e,"right"),top:getSizeForArea(l,e,"top"),bottom:getSizeForArea(l,e,"bottom")}:e}var Xe;let Chart$1=(Xe=class{static register(...e){registry.add(...e),invalidatePlugins()}static unregister(...e){registry.remove(...e),invalidatePlugins()}constructor(e,t){const l=this.config=new Config(t),i=getCanvas(e),r=getChart(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const a=l.createResolver(l.chartOptionScopes(),this.getContext());this.platform=new(l.platform||_detectPlatform(i)),this.platform.updateConfig(l);const c=this.platform.acquireContext(i,a.aspectRatio),u=c&&c.canvas,p=u&&u.height,_=u&&u.width;if(this.id=uid(),this.ctx=c,this.canvas=u,this.width=_,this.height=p,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PluginService,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=debounce(y=>this.update(y),a.resizeDelay||0),this._dataChanges=[],instances[this.id]=this,!c||!u){console.error("Failed to create chart: can't acquire context from the given item");return}animator.listen(this,"complete",onAnimationsComplete),animator.listen(this,"progress",onAnimationProgress),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:l,height:i,_aspectRatio:r}=this;return isNullOrUndef(e)?t&&r?r:i?l/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return registry}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():retinaScale(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return clearCanvas(this.canvas,this.ctx),this}stop(){return animator.stop(this),this}resize(e,t){animator.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const l=this.options,i=this.canvas,r=l.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(i,e,t,r),c=l.devicePixelRatio||this.platform.getDevicePixelRatio(),u=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,retinaScale(this,c,!0)&&(this.notifyPlugins("resize",{size:a}),callback(l.onResize,[this,a],this),this.attached&&this._doResize(u)&&this.render())}ensureScalesHaveIDs(){const t=this.options.scales||{};each(t,(l,i)=>{l.id=i})}buildOrUpdateScales(){const e=this.options,t=e.scales,l=this.scales,i=Object.keys(l).reduce((a,c)=>(a[c]=!1,a),{});let r=[];t&&(r=r.concat(Object.keys(t).map(a=>{const c=t[a],u=determineAxis(a,c),p=u==="r",_=u==="x";return{options:c,dposition:p?"chartArea":_?"bottom":"left",dtype:p?"radialLinear":_?"category":"linear"}}))),each(r,a=>{const c=a.options,u=c.id,p=determineAxis(u,c),_=valueOrDefault(c.type,a.dtype);(c.position===void 0||positionIsHorizontal(c.position,p)!==positionIsHorizontal(a.dposition))&&(c.position=a.dposition),i[u]=!0;let y=null;if(u in l&&l[u].type===_)y=l[u];else{const x=registry.getScale(_);y=new x({id:u,type:_,ctx:this.ctx,chart:this}),l[y.id]=y}y.init(c,e)}),each(i,(a,c)=>{a||delete l[c]}),each(l,a=>{layouts.configure(this,a,a.options),layouts.addBox(this,a)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,l=e.length;if(e.sort((i,r)=>i.index-r.index),l>t){for(let i=t;i<l;++i)this._destroyDatasetMeta(i);e.splice(t,l-t)}this._sortedMetasets=e.slice(0).sort(compare2Level("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((l,i)=>{t.filter(r=>r===l._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let l,i;for(this._removeUnreferencedMetasets(),l=0,i=t.length;l<i;l++){const r=t[l];let a=this.getDatasetMeta(l);const c=r.type||this.config.type;if(a.type&&a.type!==c&&(this._destroyDatasetMeta(l),a=this.getDatasetMeta(l)),a.type=c,a.indexAxis=r.indexAxis||getIndexAxis(c,this.options),a.order=r.order||0,a.index=l,a.label=""+r.label,a.visible=this.isDatasetVisible(l),a.controller)a.controller.updateIndex(l),a.controller.linkScales();else{const u=registry.getController(c),{datasetElementType:p,dataElementType:_}=defaults.datasets[c];Object.assign(u,{dataElementType:registry.getElement(_),datasetElementType:p&&registry.getElement(p)}),a.controller=new u(this,l),e.push(a.controller)}}return this._updateMetasets(),e}_resetElements(){each(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const l=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!l.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let p=0,_=this.data.datasets.length;p<_;p++){const{controller:y}=this.getDatasetMeta(p),x=!i&&r.indexOf(y)===-1;y.buildOrUpdateElements(x),a=Math.max(+y.getMaxOverflow(),a)}a=this._minPadding=l.layout.autoPadding?a:0,this._updateLayout(a),i||each(r,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(compare2Level("z","_idx"));const{_active:c,_lastEvent:u}=this;u?this._eventHandler(u,!0):c.length&&this._updateHoverStyles(c,c,!0),this.render()}_updateScales(){each(this.scales,e=>{layouts.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),l=new Set(e.events);(!setsEqual(t,l)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:l,start:i,count:r}of t){const a=l==="_removeElements"?-r:r;moveNumericKeys(e,i,a)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,l=r=>new Set(e.filter(a=>a[0]===r).map((a,c)=>c+","+a.splice(1).join(","))),i=l(0);for(let r=1;r<t;r++)if(!setsEqual(i,l(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;layouts.update(this,this.width,this.height,e);const t=this.chartArea,l=t.width<=0||t.height<=0;this._layers=[],each(this.boxes,i=>{l&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,l=this.data.datasets.length;t<l;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,l=this.data.datasets.length;t<l;++t)this._updateDataset(t,isFunction(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const l=this.getDatasetMeta(e),i={meta:l,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(l.controller._update(t),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(animator.has(this)?this.attached&&!animator.running(this)&&animator.start(this):(this.draw(),onAnimationsComplete({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:l,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(l,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,l=[];let i,r;for(i=0,r=t.length;i<r;++i){const a=t[i];(!e||a.visible)&&l.push(a)}return l}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,l=e._clip,i=!l.disabled,r=getDatasetArea(e,this.chartArea),a={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(i&&clipArea(t,{left:l.left===!1?0:r.left-l.left,right:l.right===!1?this.width:r.right+l.right,top:l.top===!1?0:r.top-l.top,bottom:l.bottom===!1?this.height:r.bottom+l.bottom}),e.controller.draw(),i&&unclipArea(t),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(e){return _isPointInArea(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,l,i){const r=Interaction.modes[t];return typeof r=="function"?r(this,e,l,i):[]}getDatasetMeta(e){const t=this.data.datasets[e],l=this._metasets;let i=l.filter(r=>r&&r._dataset===t).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},l.push(i)),i}getContext(){return this.$context||(this.$context=createContext(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const l=this.getDatasetMeta(e);return typeof l.hidden=="boolean"?!l.hidden:!t.hidden}setDatasetVisibility(e,t){const l=this.getDatasetMeta(e);l.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,l){const i=l?"show":"hide",r=this.getDatasetMeta(e),a=r.controller._resolveAnimations(void 0,i);defined(t)?(r.data[t].hidden=!l,this.update()):(this.setDatasetVisibility(e,l),a.update(r,{visible:l}),this.update(c=>c.datasetIndex===e?i:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),animator.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),clearCanvas(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete instances[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,l=(r,a)=>{t.addEventListener(this,r,a),e[r]=a},i=(r,a,c)=>{r.offsetX=a,r.offsetY=c,this._eventHandler(r)};each(this.options.events,r=>l(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,l=(u,p)=>{t.addEventListener(this,u,p),e[u]=p},i=(u,p)=>{e[u]&&(t.removeEventListener(this,u,p),delete e[u])},r=(u,p)=>{this.canvas&&this.resize(u,p)};let a;const c=()=>{i("attach",c),this.attached=!0,this.resize(),l("resize",r),l("detach",a)};a=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),l("attach",c)},t.isAttached(this.canvas)?c():a()}unbindEvents(){each(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},each(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,l){const i=l?"set":"remove";let r,a,c,u;for(t==="dataset"&&(r=this.getDatasetMeta(e[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),c=0,u=e.length;c<u;++c){a=e[c];const p=a&&this.getDatasetMeta(a.datasetIndex).controller;p&&p[i+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],l=e.map(({datasetIndex:r,index:a})=>{const c=this.getDatasetMeta(r);if(!c)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:c.data[a],index:a}});!_elementsEqual(l,t)&&(this._active=l,this._lastEvent=null,this._updateHoverStyles(l,t))}notifyPlugins(e,t,l){return this._plugins.notify(this,e,t,l)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,l){const i=this.options.hover,r=(u,p)=>u.filter(_=>!p.some(y=>_.datasetIndex===y.datasetIndex&&_.index===y.index)),a=r(t,e),c=l?e:r(e,t);a.length&&this.updateHoverStyle(a,i.mode,!1),c.length&&i.mode&&this.updateHoverStyle(c,i.mode,!0)}_eventHandler(e,t){const l={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},i=a=>(a.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",l,i)===!1)return;const r=this._handleEvent(e,t,l.inChartArea);return l.cancelable=!1,this.notifyPlugins("afterEvent",l,i),(r||l.changed)&&this.render(),this}_handleEvent(e,t,l){const{_active:i=[],options:r}=this,a=t,c=this._getActiveElements(e,i,l,a),u=_isClickEvent(e),p=determineLastEvent(e,this._lastEvent,l,u);l&&(this._lastEvent=null,callback(r.onHover,[e,c,this],this),u&&callback(r.onClick,[e,c,this],this));const _=!_elementsEqual(c,i);return(_||t)&&(this._active=c,this._updateHoverStyles(c,i,t)),this._lastEvent=p,_}_getActiveElements(e,t,l,i){if(e.type==="mouseout")return[];if(!l)return t;const r=this.options.hover;return this.getElementsAtEventForMode(e,r.mode,r,i)}},ne(Xe,"defaults",defaults),ne(Xe,"instances",instances),ne(Xe,"overrides",overrides),ne(Xe,"registry",registry),ne(Xe,"version",version),ne(Xe,"getChart",getChart),Xe);function invalidatePlugins(){return each(Chart$1.instances,n=>n._plugins.invalidate())}function getBarBounds(n,e){const{x:t,y:l,base:i,width:r,height:a}=n.getProps(["x","y","base","width","height"],e);let c,u,p,_,y;return n.horizontal?(y=a/2,c=Math.min(t,i),u=Math.max(t,i),p=l-y,_=l+y):(y=r/2,c=t-y,u=t+y,p=Math.min(l,i),_=Math.max(l,i)),{left:c,top:p,right:u,bottom:_}}function skipOrLimit(n,e,t,l){return n?0:_limitValue(e,t,l)}function parseBorderWidth(n,e,t){const l=n.options.borderWidth,i=n.borderSkipped,r=toTRBL(l);return{t:skipOrLimit(i.top,r.top,0,t),r:skipOrLimit(i.right,r.right,0,e),b:skipOrLimit(i.bottom,r.bottom,0,t),l:skipOrLimit(i.left,r.left,0,e)}}function parseBorderRadius(n,e,t){const{enableBorderRadius:l}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=toTRBLCorners(i),a=Math.min(e,t),c=n.borderSkipped,u=l||isObject(i);return{topLeft:skipOrLimit(!u||c.top||c.left,r.topLeft,0,a),topRight:skipOrLimit(!u||c.top||c.right,r.topRight,0,a),bottomLeft:skipOrLimit(!u||c.bottom||c.left,r.bottomLeft,0,a),bottomRight:skipOrLimit(!u||c.bottom||c.right,r.bottomRight,0,a)}}function boundingRects(n){const e=getBarBounds(n),t=e.right-e.left,l=e.bottom-e.top,i=parseBorderWidth(n,t/2,l/2),r=parseBorderRadius(n,t/2,l/2);return{outer:{x:e.left,y:e.top,w:t,h:l,radius:r},inner:{x:e.left+i.l,y:e.top+i.t,w:t-i.l-i.r,h:l-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function inRange(n,e,t,l){const i=e===null,r=t===null,c=n&&!(i&&r)&&getBarBounds(n,l);return c&&(i||_isBetween(e,c.left,c.right))&&(r||_isBetween(t,c.top,c.bottom))}function hasRadius(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function addNormalRectPath(n,e){n.rect(e.x,e.y,e.w,e.h)}function inflateRect(n,e,t={}){const l=n.x!==t.x?-e:0,i=n.y!==t.y?-e:0,r=(n.x+n.w!==t.x+t.w?e:0)-l,a=(n.y+n.h!==t.y+t.h?e:0)-i;return{x:n.x+l,y:n.y+i,w:n.w+r,h:n.h+a,radius:n.radius}}class BarElement extends Element{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:t,options:{borderColor:l,backgroundColor:i}}=this,{inner:r,outer:a}=boundingRects(this),c=hasRadius(a.radius)?addRoundedRectPath:addNormalRectPath;e.save(),(a.w!==r.w||a.h!==r.h)&&(e.beginPath(),c(e,inflateRect(a,t,r)),e.clip(),c(e,inflateRect(r,-t,a)),e.fillStyle=l,e.fill("evenodd")),e.beginPath(),c(e,inflateRect(r,t)),e.fillStyle=i,e.fill(),e.restore()}inRange(e,t,l){return inRange(this,e,t,l)}inXRange(e,t){return inRange(this,e,null,t)}inYRange(e,t){return inRange(this,null,e,t)}getCenterPoint(e){const{x:t,y:l,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],e);return{x:r?(t+i)/2:t,y:r?l:(l+i)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}ne(BarElement,"id","bar"),ne(BarElement,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),ne(BarElement,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const getBoxSize=(n,e)=>{let{boxHeight:t=e,boxWidth:l=e}=n;return n.usePointStyle&&(t=Math.min(t,e),l=n.pointStyleWidth||Math.min(l,e)),{boxWidth:l,boxHeight:t,itemHeight:Math.max(e,t)}},itemsEqual=(n,e)=>n!==null&&e!==null&&n.datasetIndex===e.datasetIndex&&n.index===e.index;class Legend extends Element{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,l){this.maxWidth=e,this.maxHeight=t,this._margins=l,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let t=callback(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(l=>e.filter(l,this.chart.data))),e.sort&&(t=t.sort((l,i)=>e.sort(l,i,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){const{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}const l=e.labels,i=toFont(l.font),r=i.size,a=this._computeTitleHeight(),{boxWidth:c,itemHeight:u}=getBoxSize(l,r);let p,_;t.font=i.string,this.isHorizontal()?(p=this.maxWidth,_=this._fitRows(a,r,c,u)+10):(_=this.maxHeight,p=this._fitCols(a,i,c,u)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(_,e.maxHeight||this.maxHeight)}_fitRows(e,t,l,i){const{ctx:r,maxWidth:a,options:{labels:{padding:c}}}=this,u=this.legendHitBoxes=[],p=this.lineWidths=[0],_=i+c;let y=e;r.textAlign="left",r.textBaseline="middle";let x=-1,k=-_;return this.legendItems.forEach((E,S)=>{const T=l+t/2+r.measureText(E.text).width;(S===0||p[p.length-1]+T+2*c>a)&&(y+=_,p[p.length-(S>0?0:1)]=0,k+=_,x++),u[S]={left:0,top:k,row:x,width:T,height:i},p[p.length-1]+=T+c}),y}_fitCols(e,t,l,i){const{ctx:r,maxHeight:a,options:{labels:{padding:c}}}=this,u=this.legendHitBoxes=[],p=this.columnSizes=[],_=a-e;let y=c,x=0,k=0,E=0,S=0;return this.legendItems.forEach((T,I)=>{const{itemWidth:U,itemHeight:K}=calculateItemSize(l,t,r,T,i);I>0&&k+K+2*c>_&&(y+=x+c,p.push({width:x,height:k}),E+=x+c,S++,x=k=0),u[I]={left:E,top:k,col:S,width:U,height:K},x=Math.max(x,U),k+=K+c}),y+=x,p.push({width:x,height:k}),y}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:l,labels:{padding:i},rtl:r}}=this,a=getRtlAdapter(r,this.left,this.width);if(this.isHorizontal()){let c=0,u=_alignStartEnd(l,this.left+i,this.right-this.lineWidths[c]);for(const p of t)c!==p.row&&(c=p.row,u=_alignStartEnd(l,this.left+i,this.right-this.lineWidths[c])),p.top+=this.top+e+i,p.left=a.leftForLtr(a.x(u),p.width),u+=p.width+i}else{let c=0,u=_alignStartEnd(l,this.top+e+i,this.bottom-this.columnSizes[c].height);for(const p of t)p.col!==c&&(c=p.col,u=_alignStartEnd(l,this.top+e+i,this.bottom-this.columnSizes[c].height)),p.top=u,p.left+=this.left+i,p.left=a.leftForLtr(a.x(p.left),p.width),u+=p.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;clipArea(e,this),this._draw(),unclipArea(e)}}_draw(){const{options:e,columnSizes:t,lineWidths:l,ctx:i}=this,{align:r,labels:a}=e,c=defaults.color,u=getRtlAdapter(e.rtl,this.left,this.width),p=toFont(a.font),{padding:_}=a,y=p.size,x=y/2;let k;this.drawTitle(),i.textAlign=u.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=p.string;const{boxWidth:E,boxHeight:S,itemHeight:T}=getBoxSize(a,y),I=function(Q,d,G){if(isNaN(E)||E<=0||isNaN(S)||S<0)return;i.save();const H=valueOrDefault(G.lineWidth,1);if(i.fillStyle=valueOrDefault(G.fillStyle,c),i.lineCap=valueOrDefault(G.lineCap,"butt"),i.lineDashOffset=valueOrDefault(G.lineDashOffset,0),i.lineJoin=valueOrDefault(G.lineJoin,"miter"),i.lineWidth=H,i.strokeStyle=valueOrDefault(G.strokeStyle,c),i.setLineDash(valueOrDefault(G.lineDash,[])),a.usePointStyle){const he={radius:S*Math.SQRT2/2,pointStyle:G.pointStyle,rotation:G.rotation,borderWidth:H},se=u.xPlus(Q,E/2),ce=d+x;drawPointLegend(i,he,se,ce,a.pointStyleWidth&&E)}else{const he=d+Math.max((y-S)/2,0),se=u.leftForLtr(Q,E),ce=toTRBLCorners(G.borderRadius);i.beginPath(),Object.values(ce).some(ee=>ee!==0)?addRoundedRectPath(i,{x:se,y:he,w:E,h:S,radius:ce}):i.rect(se,he,E,S),i.fill(),H!==0&&i.stroke()}i.restore()},U=function(Q,d,G){renderText(i,G.text,Q,d+T/2,p,{strikethrough:G.hidden,textAlign:u.textAlign(G.textAlign)})},K=this.isHorizontal(),Z=this._computeTitleHeight();K?k={x:_alignStartEnd(r,this.left+_,this.right-l[0]),y:this.top+_+Z,line:0}:k={x:this.left+_,y:_alignStartEnd(r,this.top+Z+_,this.bottom-t[0].height),line:0},overrideTextDirection(this.ctx,e.textDirection);const V=T+_;this.legendItems.forEach((Q,d)=>{i.strokeStyle=Q.fontColor,i.fillStyle=Q.fontColor;const G=i.measureText(Q.text).width,H=u.textAlign(Q.textAlign||(Q.textAlign=a.textAlign)),he=E+x+G;let se=k.x,ce=k.y;u.setWidth(this.width),K?d>0&&se+he+_>this.right&&(ce=k.y+=V,k.line++,se=k.x=_alignStartEnd(r,this.left+_,this.right-l[k.line])):d>0&&ce+V>this.bottom&&(se=k.x=se+t[k.line].width+_,k.line++,ce=k.y=_alignStartEnd(r,this.top+Z+_,this.bottom-t[k.line].height));const ee=u.x(se);if(I(ee,ce,Q),se=_textX(H,se+E+x,K?se+he:this.right,e.rtl),U(u.x(se),ce,Q),K)k.x+=he+_;else if(typeof Q.text!="string"){const ye=p.lineHeight;k.y+=calculateLegendItemHeight(Q,ye)+_}else k.y+=V}),restoreTextDirection(this.ctx,e.textDirection)}drawTitle(){const e=this.options,t=e.title,l=toFont(t.font),i=toPadding(t.padding);if(!t.display)return;const r=getRtlAdapter(e.rtl,this.left,this.width),a=this.ctx,c=t.position,u=l.size/2,p=i.top+u;let _,y=this.left,x=this.width;if(this.isHorizontal())x=Math.max(...this.lineWidths),_=this.top+p,y=_alignStartEnd(e.align,y,this.right-x);else{const E=this.columnSizes.reduce((S,T)=>Math.max(S,T.height),0);_=p+_alignStartEnd(e.align,this.top,this.bottom-E-e.labels.padding-this._computeTitleHeight())}const k=_alignStartEnd(c,y,y+x);a.textAlign=r.textAlign(_toLeftRightCenter(c)),a.textBaseline="middle",a.strokeStyle=t.color,a.fillStyle=t.color,a.font=l.string,renderText(a,t.text,k,_,l)}_computeTitleHeight(){const e=this.options.title,t=toFont(e.font),l=toPadding(e.padding);return e.display?t.lineHeight+l.height:0}_getLegendItemAt(e,t){let l,i,r;if(_isBetween(e,this.left,this.right)&&_isBetween(t,this.top,this.bottom)){for(r=this.legendHitBoxes,l=0;l<r.length;++l)if(i=r[l],_isBetween(e,i.left,i.left+i.width)&&_isBetween(t,i.top,i.top+i.height))return this.legendItems[l]}return null}handleEvent(e){const t=this.options;if(!isListened(e.type,t))return;const l=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,r=itemsEqual(i,l);i&&!r&&callback(t.onLeave,[e,i,this],this),this._hoveredItem=l,l&&!r&&callback(t.onHover,[e,l,this],this)}else l&&callback(t.onClick,[e,l,this],this)}}function calculateItemSize(n,e,t,l,i){const r=calculateItemWidth(l,n,e,t),a=calculateItemHeight(i,l,e.lineHeight);return{itemWidth:r,itemHeight:a}}function calculateItemWidth(n,e,t,l){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,a)=>r.length>a.length?r:a)),e+t.size/2+l.measureText(i).width}function calculateItemHeight(n,e,t){let l=n;return typeof e.text!="string"&&(l=calculateLegendItemHeight(e,t)),l}function calculateLegendItemHeight(n,e){const t=n.text?n.text.length:0;return e*t}function isListened(n,e){return!!((n==="mousemove"||n==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(n==="click"||n==="mouseup"))}var plugin_legend={id:"legend",_element:Legend,start(n,e,t){const l=n.legend=new Legend({ctx:n.ctx,options:t,chart:n});layouts.configure(n,l,t),layouts.addBox(n,l)},stop(n){layouts.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,e,t){const l=n.legend;layouts.configure(n,l,t),l.options=t},afterUpdate(n){const e=n.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(n,e){e.replay||n.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,e,t){const l=e.datasetIndex,i=t.chart;i.isDatasetVisible(l)?(i.hide(l),e.hidden=!0):(i.show(l),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const e=n.data.datasets,{labels:{usePointStyle:t,pointStyle:l,textAlign:i,color:r,useBorderRadius:a,borderRadius:c}}=n.legend.options;return n._getSortedDatasetMetas().map(u=>{const p=u.controller.getStyle(t?0:void 0),_=toPadding(p.borderWidth);return{text:e[u.index].label,fillStyle:p.backgroundColor,fontColor:r,hidden:!u.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(_.width+_.height)/4,strokeStyle:p.borderColor,pointStyle:l||p.pointStyle,rotation:p.rotation,textAlign:i||p.textAlign,borderRadius:a&&(c||p.borderRadius),datasetIndex:u.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class Title extends Element{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){const l=this.options;if(this.left=0,this.top=0,!l.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;const i=isArray(l.text)?l.text.length:1;this._padding=toPadding(l.padding);const r=i*toFont(l.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:t,left:l,bottom:i,right:r,options:a}=this,c=a.align;let u=0,p,_,y;return this.isHorizontal()?(_=_alignStartEnd(c,l,r),y=t+e,p=r-l):(a.position==="left"?(_=l+e,y=_alignStartEnd(c,i,t),u=PI*-.5):(_=r-e,y=_alignStartEnd(c,t,i),u=PI*.5),p=i-t),{titleX:_,titleY:y,maxWidth:p,rotation:u}}draw(){const e=this.ctx,t=this.options;if(!t.display)return;const l=toFont(t.font),r=l.lineHeight/2+this._padding.top,{titleX:a,titleY:c,maxWidth:u,rotation:p}=this._drawArgs(r);renderText(e,t.text,0,0,l,{color:t.color,maxWidth:u,rotation:p,textAlign:_toLeftRightCenter(t.align),textBaseline:"middle",translation:[a,c]})}}function createTitle(n,e){const t=new Title({ctx:n.ctx,options:e,chart:n});layouts.configure(n,t,e),layouts.addBox(n,t),n.titleBlock=t}var plugin_title={id:"title",_element:Title,start(n,e,t){createTitle(n,t)},stop(n){const e=n.titleBlock;layouts.removeBox(n,e),delete n.titleBlock},beforeUpdate(n,e,t){const l=n.titleBlock;layouts.configure(n,l,t),l.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const positioners={average(n){if(!n.length)return!1;let e,t,l=new Set,i=0,r=0;for(e=0,t=n.length;e<t;++e){const c=n[e].element;if(c&&c.hasValue()){const u=c.tooltipPosition();l.add(u.x),i+=u.y,++r}}return r===0||l.size===0?!1:{x:[...l].reduce((c,u)=>c+u)/l.size,y:i/r}},nearest(n,e){if(!n.length)return!1;let t=e.x,l=e.y,i=Number.POSITIVE_INFINITY,r,a,c;for(r=0,a=n.length;r<a;++r){const u=n[r].element;if(u&&u.hasValue()){const p=u.getCenterPoint(),_=distanceBetweenPoints(e,p);_<i&&(i=_,c=u)}}if(c){const u=c.tooltipPosition();t=u.x,l=u.y}return{x:t,y:l}}};function pushOrConcat(n,e){return e&&(isArray(e)?Array.prototype.push.apply(n,e):n.push(e)),n}function splitNewlines(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function createTooltipItem(n,e){const{element:t,datasetIndex:l,index:i}=e,r=n.getDatasetMeta(l).controller,{label:a,value:c}=r.getLabelAndValue(i);return{chart:n,label:a,parsed:r.getParsed(i),raw:n.data.datasets[l].data[i],formattedValue:c,dataset:r.getDataset(),dataIndex:i,datasetIndex:l,element:t}}function getTooltipSize(n,e){const t=n.chart.ctx,{body:l,footer:i,title:r}=n,{boxWidth:a,boxHeight:c}=e,u=toFont(e.bodyFont),p=toFont(e.titleFont),_=toFont(e.footerFont),y=r.length,x=i.length,k=l.length,E=toPadding(e.padding);let S=E.height,T=0,I=l.reduce((Z,V)=>Z+V.before.length+V.lines.length+V.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,y&&(S+=y*p.lineHeight+(y-1)*e.titleSpacing+e.titleMarginBottom),I){const Z=e.displayColors?Math.max(c,u.lineHeight):u.lineHeight;S+=k*Z+(I-k)*u.lineHeight+(I-1)*e.bodySpacing}x&&(S+=e.footerMarginTop+x*_.lineHeight+(x-1)*e.footerSpacing);let U=0;const K=function(Z){T=Math.max(T,t.measureText(Z).width+U)};return t.save(),t.font=p.string,each(n.title,K),t.font=u.string,each(n.beforeBody.concat(n.afterBody),K),U=e.displayColors?a+2+e.boxPadding:0,each(l,Z=>{each(Z.before,K),each(Z.lines,K),each(Z.after,K)}),U=0,t.font=_.string,each(n.footer,K),t.restore(),T+=E.width,{width:T,height:S}}function determineYAlign(n,e){const{y:t,height:l}=e;return t<l/2?"top":t>n.height-l/2?"bottom":"center"}function doesNotFitWithAlign(n,e,t,l){const{x:i,width:r}=l,a=t.caretSize+t.caretPadding;if(n==="left"&&i+r+a>e.width||n==="right"&&i-r-a<0)return!0}function determineXAlign(n,e,t,l){const{x:i,width:r}=t,{width:a,chartArea:{left:c,right:u}}=n;let p="center";return l==="center"?p=i<=(c+u)/2?"left":"right":i<=r/2?p="left":i>=a-r/2&&(p="right"),doesNotFitWithAlign(p,n,e,t)&&(p="center"),p}function determineAlignment(n,e,t){const l=t.yAlign||e.yAlign||determineYAlign(n,t);return{xAlign:t.xAlign||e.xAlign||determineXAlign(n,e,t,l),yAlign:l}}function alignX(n,e){let{x:t,width:l}=n;return e==="right"?t-=l:e==="center"&&(t-=l/2),t}function alignY(n,e,t){let{y:l,height:i}=n;return e==="top"?l+=t:e==="bottom"?l-=i+t:l-=i/2,l}function getBackgroundPoint(n,e,t,l){const{caretSize:i,caretPadding:r,cornerRadius:a}=n,{xAlign:c,yAlign:u}=t,p=i+r,{topLeft:_,topRight:y,bottomLeft:x,bottomRight:k}=toTRBLCorners(a);let E=alignX(e,c);const S=alignY(e,u,p);return u==="center"?c==="left"?E+=p:c==="right"&&(E-=p):c==="left"?E-=Math.max(_,x)+i:c==="right"&&(E+=Math.max(y,k)+i),{x:_limitValue(E,0,l.width-e.width),y:_limitValue(S,0,l.height-e.height)}}function getAlignedX(n,e,t){const l=toPadding(t.padding);return e==="center"?n.x+n.width/2:e==="right"?n.x+n.width-l.right:n.x+l.left}function getBeforeAfterBodyLines(n){return pushOrConcat([],splitNewlines(n))}function createTooltipContext(n,e,t){return createContext(n,{tooltip:e,tooltipItems:t,type:"tooltip"})}function overrideCallbacks(n,e){const t=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return t?n.override(t):n}const defaultCallbacks={beforeTitle:noop,title(n){if(n.length>0){const e=n[0],t=e.chart.data.labels,l=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(l>0&&e.dataIndex<l)return t[e.dataIndex]}return""},afterTitle:noop,beforeBody:noop,beforeLabel:noop,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let e=n.dataset.label||"";e&&(e+=": ");const t=n.formattedValue;return isNullOrUndef(t)||(e+=t),e},labelColor(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const t=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:noop,afterBody:noop,beforeFooter:noop,footer:noop,afterFooter:noop};function invokeCallbackWithFallback(n,e,t,l){const i=n[e].call(t,l);return typeof i>"u"?defaultCallbacks[e].call(t,l):i}class Tooltip extends Element{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,l=this.options.setContext(this.getContext()),i=l.enabled&&t.options.animation&&l.animations,r=new Animations(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=createTooltipContext(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:l}=t,i=invokeCallbackWithFallback(l,"beforeTitle",this,e),r=invokeCallbackWithFallback(l,"title",this,e),a=invokeCallbackWithFallback(l,"afterTitle",this,e);let c=[];return c=pushOrConcat(c,splitNewlines(i)),c=pushOrConcat(c,splitNewlines(r)),c=pushOrConcat(c,splitNewlines(a)),c}getBeforeBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:l}=t,i=[];return each(e,r=>{const a={before:[],lines:[],after:[]},c=overrideCallbacks(l,r);pushOrConcat(a.before,splitNewlines(invokeCallbackWithFallback(c,"beforeLabel",this,r))),pushOrConcat(a.lines,invokeCallbackWithFallback(c,"label",this,r)),pushOrConcat(a.after,splitNewlines(invokeCallbackWithFallback(c,"afterLabel",this,r))),i.push(a)}),i}getAfterBody(e,t){return getBeforeAfterBodyLines(invokeCallbackWithFallback(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:l}=t,i=invokeCallbackWithFallback(l,"beforeFooter",this,e),r=invokeCallbackWithFallback(l,"footer",this,e),a=invokeCallbackWithFallback(l,"afterFooter",this,e);let c=[];return c=pushOrConcat(c,splitNewlines(i)),c=pushOrConcat(c,splitNewlines(r)),c=pushOrConcat(c,splitNewlines(a)),c}_createItems(e){const t=this._active,l=this.chart.data,i=[],r=[],a=[];let c=[],u,p;for(u=0,p=t.length;u<p;++u)c.push(createTooltipItem(this.chart,t[u]));return e.filter&&(c=c.filter((_,y,x)=>e.filter(_,y,x,l))),e.itemSort&&(c=c.sort((_,y)=>e.itemSort(_,y,l))),each(c,_=>{const y=overrideCallbacks(e.callbacks,_);i.push(invokeCallbackWithFallback(y,"labelColor",this,_)),r.push(invokeCallbackWithFallback(y,"labelPointStyle",this,_)),a.push(invokeCallbackWithFallback(y,"labelTextColor",this,_))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=a,this.dataPoints=c,c}update(e,t){const l=this.options.setContext(this.getContext()),i=this._active;let r,a=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const c=positioners[l.position].call(this,i,this._eventPosition);a=this._createItems(l),this.title=this.getTitle(a,l),this.beforeBody=this.getBeforeBody(a,l),this.body=this.getBody(a,l),this.afterBody=this.getAfterBody(a,l),this.footer=this.getFooter(a,l);const u=this._size=getTooltipSize(this,l),p=Object.assign({},c,u),_=determineAlignment(this.chart,l,p),y=getBackgroundPoint(l,p,_,this.chart);this.xAlign=_.xAlign,this.yAlign=_.yAlign,r={opacity:1,x:y.x,y:y.y,width:u.width,height:u.height,caretX:c.x,caretY:c.y}}this._tooltipItems=a,this.$context=void 0,r&&this._resolveAnimations().update(this,r),e&&l.external&&l.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,l,i){const r=this.getCaretPosition(e,l,i);t.lineTo(r.x1,r.y1),t.lineTo(r.x2,r.y2),t.lineTo(r.x3,r.y3)}getCaretPosition(e,t,l){const{xAlign:i,yAlign:r}=this,{caretSize:a,cornerRadius:c}=l,{topLeft:u,topRight:p,bottomLeft:_,bottomRight:y}=toTRBLCorners(c),{x,y:k}=e,{width:E,height:S}=t;let T,I,U,K,Z,V;return r==="center"?(Z=k+S/2,i==="left"?(T=x,I=T-a,K=Z+a,V=Z-a):(T=x+E,I=T+a,K=Z-a,V=Z+a),U=T):(i==="left"?I=x+Math.max(u,_)+a:i==="right"?I=x+E-Math.max(p,y)-a:I=this.caretX,r==="top"?(K=k,Z=K-a,T=I-a,U=I+a):(K=k+S,Z=K+a,T=I+a,U=I-a),V=K),{x1:T,x2:I,x3:U,y1:K,y2:Z,y3:V}}drawTitle(e,t,l){const i=this.title,r=i.length;let a,c,u;if(r){const p=getRtlAdapter(l.rtl,this.x,this.width);for(e.x=getAlignedX(this,l.titleAlign,l),t.textAlign=p.textAlign(l.titleAlign),t.textBaseline="middle",a=toFont(l.titleFont),c=l.titleSpacing,t.fillStyle=l.titleColor,t.font=a.string,u=0;u<r;++u)t.fillText(i[u],p.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+c,u+1===r&&(e.y+=l.titleMarginBottom-c)}}_drawColorBox(e,t,l,i,r){const a=this.labelColors[l],c=this.labelPointStyles[l],{boxHeight:u,boxWidth:p}=r,_=toFont(r.bodyFont),y=getAlignedX(this,"left",r),x=i.x(y),k=u<_.lineHeight?(_.lineHeight-u)/2:0,E=t.y+k;if(r.usePointStyle){const S={radius:Math.min(p,u)/2,pointStyle:c.pointStyle,rotation:c.rotation,borderWidth:1},T=i.leftForLtr(x,p)+p/2,I=E+u/2;e.strokeStyle=r.multiKeyBackground,e.fillStyle=r.multiKeyBackground,drawPoint(e,S,T,I),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,drawPoint(e,S,T,I)}else{e.lineWidth=isObject(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;const S=i.leftForLtr(x,p),T=i.leftForLtr(i.xPlus(x,1),p-2),I=toTRBLCorners(a.borderRadius);Object.values(I).some(U=>U!==0)?(e.beginPath(),e.fillStyle=r.multiKeyBackground,addRoundedRectPath(e,{x:S,y:E,w:p,h:u,radius:I}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),addRoundedRectPath(e,{x:T,y:E+1,w:p-2,h:u-2,radius:I}),e.fill()):(e.fillStyle=r.multiKeyBackground,e.fillRect(S,E,p,u),e.strokeRect(S,E,p,u),e.fillStyle=a.backgroundColor,e.fillRect(T,E+1,p-2,u-2))}e.fillStyle=this.labelTextColors[l]}drawBody(e,t,l){const{body:i}=this,{bodySpacing:r,bodyAlign:a,displayColors:c,boxHeight:u,boxWidth:p,boxPadding:_}=l,y=toFont(l.bodyFont);let x=y.lineHeight,k=0;const E=getRtlAdapter(l.rtl,this.x,this.width),S=function(G){t.fillText(G,E.x(e.x+k),e.y+x/2),e.y+=x+r},T=E.textAlign(a);let I,U,K,Z,V,Q,d;for(t.textAlign=a,t.textBaseline="middle",t.font=y.string,e.x=getAlignedX(this,T,l),t.fillStyle=l.bodyColor,each(this.beforeBody,S),k=c&&T!=="right"?a==="center"?p/2+_:p+2+_:0,Z=0,Q=i.length;Z<Q;++Z){for(I=i[Z],U=this.labelTextColors[Z],t.fillStyle=U,each(I.before,S),K=I.lines,c&&K.length&&(this._drawColorBox(t,e,Z,E,l),x=Math.max(y.lineHeight,u)),V=0,d=K.length;V<d;++V)S(K[V]),x=y.lineHeight;each(I.after,S)}k=0,x=y.lineHeight,each(this.afterBody,S),e.y-=r}drawFooter(e,t,l){const i=this.footer,r=i.length;let a,c;if(r){const u=getRtlAdapter(l.rtl,this.x,this.width);for(e.x=getAlignedX(this,l.footerAlign,l),e.y+=l.footerMarginTop,t.textAlign=u.textAlign(l.footerAlign),t.textBaseline="middle",a=toFont(l.footerFont),t.fillStyle=l.footerColor,t.font=a.string,c=0;c<r;++c)t.fillText(i[c],u.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+l.footerSpacing}}drawBackground(e,t,l,i){const{xAlign:r,yAlign:a}=this,{x:c,y:u}=e,{width:p,height:_}=l,{topLeft:y,topRight:x,bottomLeft:k,bottomRight:E}=toTRBLCorners(i.cornerRadius);t.fillStyle=i.backgroundColor,t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.beginPath(),t.moveTo(c+y,u),a==="top"&&this.drawCaret(e,t,l,i),t.lineTo(c+p-x,u),t.quadraticCurveTo(c+p,u,c+p,u+x),a==="center"&&r==="right"&&this.drawCaret(e,t,l,i),t.lineTo(c+p,u+_-E),t.quadraticCurveTo(c+p,u+_,c+p-E,u+_),a==="bottom"&&this.drawCaret(e,t,l,i),t.lineTo(c+k,u+_),t.quadraticCurveTo(c,u+_,c,u+_-k),a==="center"&&r==="left"&&this.drawCaret(e,t,l,i),t.lineTo(c,u+y),t.quadraticCurveTo(c,u,c+y,u),t.closePath(),t.fill(),i.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,l=this.$animations,i=l&&l.x,r=l&&l.y;if(i||r){const a=positioners[e.position].call(this,this._active,this._eventPosition);if(!a)return;const c=this._size=getTooltipSize(this,e),u=Object.assign({},a,this._size),p=determineAlignment(t,e,u),_=getBackgroundPoint(e,u,p,t);(i._to!==_.x||r._to!==_.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=c.width,this.height=c.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,_))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let l=this.opacity;if(!l)return;this._updateAnimationTarget(t);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};l=Math.abs(l)<.001?0:l;const a=toPadding(t.padding),c=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&c&&(e.save(),e.globalAlpha=l,this.drawBackground(r,e,i,t),overrideTextDirection(e,t.textDirection),r.y+=a.top,this.drawTitle(r,e,t),this.drawBody(r,e,t),this.drawFooter(r,e,t),restoreTextDirection(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const l=this._active,i=e.map(({datasetIndex:c,index:u})=>{const p=this.chart.getDatasetMeta(c);if(!p)throw new Error("Cannot find a dataset at index "+c);return{datasetIndex:c,element:p.data[u],index:u}}),r=!_elementsEqual(l,i),a=this._positionChanged(i,t);(r||a)&&(this._active=i,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,l=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],a=this._getActiveElements(e,r,t,l),c=this._positionChanged(a,e),u=t||!_elementsEqual(a,r)||c;return u&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),u}_getActiveElements(e,t,l,i){const r=this.options;if(e.type==="mouseout")return[];if(!i)return t.filter(c=>this.chart.data.datasets[c.datasetIndex]&&this.chart.getDatasetMeta(c.datasetIndex).controller.getParsed(c.index)!==void 0);const a=this.chart.getElementsAtEventForMode(e,r.mode,r,l);return r.reverse&&a.reverse(),a}_positionChanged(e,t){const{caretX:l,caretY:i,options:r}=this,a=positioners[r.position].call(this,e,t);return a!==!1&&(l!==a.x||i!==a.y)}}ne(Tooltip,"positioners",positioners);var plugin_tooltip={id:"tooltip",_element:Tooltip,positioners,afterInit(n,e,t){t&&(n.tooltip=new Tooltip({chart:n,options:t}))},beforeUpdate(n,e,t){n.tooltip&&n.tooltip.initialize(t)},reset(n,e,t){n.tooltip&&n.tooltip.initialize(t)},afterDraw(n){const e=n.tooltip;if(e&&e._willRender()){const t={tooltip:e};if(n.notifyPlugins("beforeTooltipDraw",{...t,cancelable:!0})===!1)return;e.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",t)}},afterEvent(n,e){if(n.tooltip){const t=e.replay;n.tooltip.handleEvent(e.event,t,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,e)=>e.bodyFont.size,boxWidth:(n,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:defaultCallbacks},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const addIfString=(n,e,t,l)=>(typeof e=="string"?(t=n.push(e)-1,l.unshift({index:t,label:e})):isNaN(e)&&(t=null),t);function findOrAddLabel(n,e,t,l){const i=n.indexOf(e);if(i===-1)return addIfString(n,e,t,l);const r=n.lastIndexOf(e);return i!==r?t:i}const validIndex=(n,e)=>n===null?null:_limitValue(Math.round(n),0,e);function _getLabelForValue(n){const e=this.getLabels();return n>=0&&n<e.length?e[n]:n}class CategoryScale extends Scale{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const t=this._addedLabels;if(t.length){const l=this.getLabels();for(const{index:i,label:r}of t)l[i]===r&&l.splice(i,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(isNullOrUndef(e))return null;const l=this.getLabels();return t=isFinite(t)&&l[t]===e?t:findOrAddLabel(l,e,valueOrDefault(t,e),this._addedLabels),validIndex(t,l.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let{min:l,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(l=0),t||(i=this.getLabels().length-1)),this.min=l,this.max=i}buildTicks(){const e=this.min,t=this.max,l=this.options.offset,i=[];let r=this.getLabels();r=e===0&&t===r.length-1?r:r.slice(e,t+1),this._valueRange=Math.max(r.length-(l?0:1),1),this._startValue=this.min-(l?.5:0);for(let a=e;a<=t;a++)i.push({value:a});return i}getLabelForValue(e){return _getLabelForValue.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ne(CategoryScale,"id","category"),ne(CategoryScale,"defaults",{ticks:{callback:_getLabelForValue}});function generateTicks$1(n,e){const t=[],{bounds:i,step:r,min:a,max:c,precision:u,count:p,maxTicks:_,maxDigits:y,includeBounds:x}=n,k=r||1,E=_-1,{min:S,max:T}=e,I=!isNullOrUndef(a),U=!isNullOrUndef(c),K=!isNullOrUndef(p),Z=(T-S)/(y+1);let V=niceNum((T-S)/E/k)*k,Q,d,G,H;if(V<1e-14&&!I&&!U)return[{value:S},{value:T}];H=Math.ceil(T/V)-Math.floor(S/V),H>E&&(V=niceNum(H*V/E/k)*k),isNullOrUndef(u)||(Q=Math.pow(10,u),V=Math.ceil(V*Q)/Q),i==="ticks"?(d=Math.floor(S/V)*V,G=Math.ceil(T/V)*V):(d=S,G=T),I&&U&&r&&almostWhole((c-a)/r,V/1e3)?(H=Math.round(Math.min((c-a)/V,_)),V=(c-a)/H,d=a,G=c):K?(d=I?a:d,G=U?c:G,H=p-1,V=(G-d)/H):(H=(G-d)/V,almostEquals(H,Math.round(H),V/1e3)?H=Math.round(H):H=Math.ceil(H));const he=Math.max(_decimalPlaces(V),_decimalPlaces(d));Q=Math.pow(10,isNullOrUndef(u)?he:u),d=Math.round(d*Q)/Q,G=Math.round(G*Q)/Q;let se=0;for(I&&(x&&d!==a?(t.push({value:a}),d<a&&se++,almostEquals(Math.round((d+se*V)*Q)/Q,a,relativeLabelSize(a,Z,n))&&se++):d<a&&se++);se<H;++se){const ce=Math.round((d+se*V)*Q)/Q;if(U&&ce>c)break;t.push({value:ce})}return U&&x&&G!==c?t.length&&almostEquals(t[t.length-1].value,c,relativeLabelSize(c,Z,n))?t[t.length-1].value=c:t.push({value:c}):(!U||G===c)&&t.push({value:G}),t}function relativeLabelSize(n,e,{horizontal:t,minRotation:l}){const i=toRadians(l),r=(t?Math.sin(i):Math.cos(i))||.001,a=.75*e*(""+n).length;return Math.min(e/r,a)}class LinearScaleBase extends Scale{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return isNullOrUndef(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:t,maxDefined:l}=this.getUserBounds();let{min:i,max:r}=this;const a=u=>i=t?i:u,c=u=>r=l?r:u;if(e){const u=sign(i),p=sign(r);u<0&&p<0?c(0):u>0&&p>0&&a(0)}if(i===r){let u=r===0?1:Math.abs(r*.05);c(r+u),e||a(i-u)}this.min=i,this.max=r}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:t,stepSize:l}=e,i;return l?(i=Math.ceil(this.max/l)-Math.floor(this.min/l)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${l} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),t=t||11),t&&(i=Math.min(t,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,t=e.ticks;let l=this.getTickLimit();l=Math.max(2,l);const i={maxTicks:l,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},r=this._range||this,a=generateTicks$1(i,r);return e.bounds==="ticks"&&_setMinAndMaxByKey(a,this,"value"),e.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const e=this.ticks;let t=this.min,l=this.max;if(super.configure(),this.options.offset&&e.length){const i=(l-t)/Math.max(e.length-1,1)/2;t-=i,l+=i}this._startValue=t,this._endValue=l,this._valueRange=l-t}getLabelForValue(e){return formatNumber(e,this.chart.options.locale,this.options.ticks.format)}}class LinearScale extends LinearScaleBase{determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?e:0,this.max=isNumberFinite(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),t=e?this.width:this.height,l=toRadians(this.options.ticks.minRotation),i=(e?Math.sin(l):Math.cos(l))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,r.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ne(LinearScale,"id","linear"),ne(LinearScale,"defaults",{ticks:{callback:Ticks.formatters.numeric}});const log10Floor=n=>Math.floor(log10(n)),changeExponent=(n,e)=>Math.pow(10,log10Floor(n)+e);function isMajor(n){return n/Math.pow(10,log10Floor(n))===1}function steps(n,e,t){const l=Math.pow(10,t),i=Math.floor(n/l);return Math.ceil(e/l)-i}function startExp(n,e){const t=e-n;let l=log10Floor(t);for(;steps(n,e,l)>10;)l++;for(;steps(n,e,l)<10;)l--;return Math.min(l,log10Floor(n))}function generateTicks(n,{min:e,max:t}){e=finiteOrDefault(n.min,e);const l=[],i=log10Floor(e);let r=startExp(e,t),a=r<0?Math.pow(10,Math.abs(r)):1;const c=Math.pow(10,r),u=i>r?Math.pow(10,i):0,p=Math.round((e-u)*a)/a,_=Math.floor((e-u)/c/10)*c*10;let y=Math.floor((p-_)/Math.pow(10,r)),x=finiteOrDefault(n.min,Math.round((u+_+y*Math.pow(10,r))*a)/a);for(;x<t;)l.push({value:x,major:isMajor(x),significand:y}),y>=10?y=y<15?15:20:y++,y>=20&&(r++,y=2,a=r>=0?1:a),x=Math.round((u+_+y*Math.pow(10,r))*a)/a;const k=finiteOrDefault(n.max,x);return l.push({value:k,major:isMajor(k),significand:y}),l}class LogarithmicScale extends Scale{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){const l=LinearScaleBase.prototype.parse.apply(this,[e,t]);if(l===0){this._zero=!0;return}return isNumberFinite(l)&&l>0?l:null}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!0);this.min=isNumberFinite(e)?Math.max(0,e):null,this.max=isNumberFinite(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!isNumberFinite(this._userMin)&&(this.min=e===changeExponent(this.min,0)?changeExponent(this.min,-1):changeExponent(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:e,maxDefined:t}=this.getUserBounds();let l=this.min,i=this.max;const r=c=>l=e?l:c,a=c=>i=t?i:c;l===i&&(l<=0?(r(1),a(10)):(r(changeExponent(l,-1)),a(changeExponent(i,1)))),l<=0&&r(changeExponent(i,-1)),i<=0&&a(changeExponent(l,1)),this.min=l,this.max=i}buildTicks(){const e=this.options,t={min:this._userMin,max:this._userMax},l=generateTicks(t,this);return e.bounds==="ticks"&&_setMinAndMaxByKey(l,this,"value"),e.reverse?(l.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),l}getLabelForValue(e){return e===void 0?"0":formatNumber(e,this.chart.options.locale,this.options.ticks.format)}configure(){const e=this.min;super.configure(),this._startValue=log10(e),this._valueRange=log10(this.max)-log10(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(log10(e)-this._startValue)/this._valueRange)}getValueForPixel(e){const t=this.getDecimalForPixel(e);return Math.pow(10,this._startValue+t*this._valueRange)}}ne(LogarithmicScale,"id","logarithmic"),ne(LogarithmicScale,"defaults",{ticks:{callback:Ticks.formatters.logarithmic,major:{enabled:!0}}});function getTickBackdropHeight(n){const e=n.ticks;if(e.display&&n.display){const t=toPadding(e.backdropPadding);return valueOrDefault(e.font&&e.font.size,defaults.font.size)+t.height}return 0}function measureLabelSize(n,e,t){return t=isArray(t)?t:[t],{w:_longestText(n,e.string,t),h:t.length*e.lineHeight}}function determineLimits(n,e,t,l,i){return n===l||n===i?{start:e-t/2,end:e+t/2}:n<l||n>i?{start:e-t,end:e}:{start:e,end:e+t}}function fitWithPointLabels(n){const e={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},t=Object.assign({},e),l=[],i=[],r=n._pointLabels.length,a=n.options.pointLabels,c=a.centerPointLabels?PI/r:0;for(let u=0;u<r;u++){const p=a.setContext(n.getPointLabelContext(u));i[u]=p.padding;const _=n.getPointPosition(u,n.drawingArea+i[u],c),y=toFont(p.font),x=measureLabelSize(n.ctx,y,n._pointLabels[u]);l[u]=x;const k=_normalizeAngle(n.getIndexAngle(u)+c),E=Math.round(toDegrees(k)),S=determineLimits(E,_.x,x.w,0,180),T=determineLimits(E,_.y,x.h,90,270);updateLimits(t,e,k,S,T)}n.setCenterPoint(e.l-t.l,t.r-e.r,e.t-t.t,t.b-e.b),n._pointLabelItems=buildPointLabelItems(n,l,i)}function updateLimits(n,e,t,l,i){const r=Math.abs(Math.sin(t)),a=Math.abs(Math.cos(t));let c=0,u=0;l.start<e.l?(c=(e.l-l.start)/r,n.l=Math.min(n.l,e.l-c)):l.end>e.r&&(c=(l.end-e.r)/r,n.r=Math.max(n.r,e.r+c)),i.start<e.t?(u=(e.t-i.start)/a,n.t=Math.min(n.t,e.t-u)):i.end>e.b&&(u=(i.end-e.b)/a,n.b=Math.max(n.b,e.b+u))}function createPointLabelItem(n,e,t){const l=n.drawingArea,{extra:i,additionalAngle:r,padding:a,size:c}=t,u=n.getPointPosition(e,l+i+a,r),p=Math.round(toDegrees(_normalizeAngle(u.angle+HALF_PI))),_=yForAngle(u.y,c.h,p),y=getTextAlignForAngle(p),x=leftForTextAlign(u.x,c.w,y);return{visible:!0,x:u.x,y:_,textAlign:y,left:x,top:_,right:x+c.w,bottom:_+c.h}}function isNotOverlapped(n,e){if(!e)return!0;const{left:t,top:l,right:i,bottom:r}=n;return!(_isPointInArea({x:t,y:l},e)||_isPointInArea({x:t,y:r},e)||_isPointInArea({x:i,y:l},e)||_isPointInArea({x:i,y:r},e))}function buildPointLabelItems(n,e,t){const l=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:a,display:c}=r.pointLabels,u={extra:getTickBackdropHeight(r)/2,additionalAngle:a?PI/i:0};let p;for(let _=0;_<i;_++){u.padding=t[_],u.size=e[_];const y=createPointLabelItem(n,_,u);l.push(y),c==="auto"&&(y.visible=isNotOverlapped(y,p),y.visible&&(p=y))}return l}function getTextAlignForAngle(n){return n===0||n===180?"center":n<180?"left":"right"}function leftForTextAlign(n,e,t){return t==="right"?n-=e:t==="center"&&(n-=e/2),n}function yForAngle(n,e,t){return t===90||t===270?n-=e/2:(t>270||t<90)&&(n-=e),n}function drawPointLabelBox(n,e,t){const{left:l,top:i,right:r,bottom:a}=t,{backdropColor:c}=e;if(!isNullOrUndef(c)){const u=toTRBLCorners(e.borderRadius),p=toPadding(e.backdropPadding);n.fillStyle=c;const _=l-p.left,y=i-p.top,x=r-l+p.width,k=a-i+p.height;Object.values(u).some(E=>E!==0)?(n.beginPath(),addRoundedRectPath(n,{x:_,y,w:x,h:k,radius:u}),n.fill()):n.fillRect(_,y,x,k)}}function drawPointLabels(n,e){const{ctx:t,options:{pointLabels:l}}=n;for(let i=e-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const a=l.setContext(n.getPointLabelContext(i));drawPointLabelBox(t,a,r);const c=toFont(a.font),{x:u,y:p,textAlign:_}=r;renderText(t,n._pointLabels[i],u,p+c.lineHeight/2,c,{color:a.color,textAlign:_,textBaseline:"middle"})}}function pathRadiusLine(n,e,t,l){const{ctx:i}=n;if(t)i.arc(n.xCenter,n.yCenter,e,0,TAU);else{let r=n.getPointPosition(0,e);i.moveTo(r.x,r.y);for(let a=1;a<l;a++)r=n.getPointPosition(a,e),i.lineTo(r.x,r.y)}}function drawRadiusLine(n,e,t,l,i){const r=n.ctx,a=e.circular,{color:c,lineWidth:u}=e;!a&&!l||!c||!u||t<0||(r.save(),r.strokeStyle=c,r.lineWidth=u,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),pathRadiusLine(n,t,a,l),r.closePath(),r.stroke(),r.restore())}function createPointLabelContext(n,e,t){return createContext(n,{label:t,index:e,type:"pointLabel"})}class RadialLinearScale extends LinearScaleBase{constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const e=this._padding=toPadding(getTickBackdropHeight(this.options)/2),t=this.width=this.maxWidth-e.width,l=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+l/2+e.top),this.drawingArea=Math.floor(Math.min(t,l)/2)}determineDataLimits(){const{min:e,max:t}=this.getMinMax(!1);this.min=isNumberFinite(e)&&!isNaN(e)?e:0,this.max=isNumberFinite(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/getTickBackdropHeight(this.options))}generateTickLabels(e){LinearScaleBase.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((t,l)=>{const i=callback(this.options.pointLabels.callback,[t,l],this);return i||i===0?i:""}).filter((t,l)=>this.chart.getDataVisibility(l))}fit(){const e=this.options;e.display&&e.pointLabels.display?fitWithPointLabels(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,l,i){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((l-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,l,i))}getIndexAngle(e){const t=TAU/(this._pointLabels.length||1),l=this.options.startAngle||0;return _normalizeAngle(e*t+toRadians(l))}getDistanceFromCenterForValue(e){if(isNullOrUndef(e))return NaN;const t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(isNullOrUndef(e))return NaN;const t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){const t=this._pointLabels||[];if(e>=0&&e<t.length){const l=t[e];return createPointLabelContext(this.getContext(),e,l)}}getPointPosition(e,t,l=0){const i=this.getIndexAngle(e)-HALF_PI+l;return{x:Math.cos(i)*t+this.xCenter,y:Math.sin(i)*t+this.yCenter,angle:i}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){const{left:t,top:l,right:i,bottom:r}=this._pointLabelItems[e];return{left:t,top:l,right:i,bottom:r}}drawBackground(){const{backgroundColor:e,grid:{circular:t}}=this.options;if(e){const l=this.ctx;l.save(),l.beginPath(),pathRadiusLine(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),l.closePath(),l.fillStyle=e,l.fill(),l.restore()}}drawGrid(){const e=this.ctx,t=this.options,{angleLines:l,grid:i,border:r}=t,a=this._pointLabels.length;let c,u,p;if(t.pointLabels.display&&drawPointLabels(this,a),i.display&&this.ticks.forEach((_,y)=>{if(y!==0||y===0&&this.min<0){u=this.getDistanceFromCenterForValue(_.value);const x=this.getContext(y),k=i.setContext(x),E=r.setContext(x);drawRadiusLine(this,k,u,a,E)}}),l.display){for(e.save(),c=a-1;c>=0;c--){const _=l.setContext(this.getPointLabelContext(c)),{color:y,lineWidth:x}=_;!x||!y||(e.lineWidth=x,e.strokeStyle=y,e.setLineDash(_.borderDash),e.lineDashOffset=_.borderDashOffset,u=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),p=this.getPointPosition(c,u),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(p.x,p.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const e=this.ctx,t=this.options,l=t.ticks;if(!l.display)return;const i=this.getIndexAngle(0);let r,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(i),e.textAlign="center",e.textBaseline="middle",this.ticks.forEach((c,u)=>{if(u===0&&this.min>=0&&!t.reverse)return;const p=l.setContext(this.getContext(u)),_=toFont(p.font);if(r=this.getDistanceFromCenterForValue(this.ticks[u].value),p.showLabelBackdrop){e.font=_.string,a=e.measureText(c.label).width,e.fillStyle=p.backdropColor;const y=toPadding(p.backdropPadding);e.fillRect(-a/2-y.left,-r-_.size/2-y.top,a+y.width,_.size+y.height)}renderText(e,c.label,0,-r,_,{color:p.color,strokeColor:p.textStrokeColor,strokeWidth:p.textStrokeWidth})}),e.restore()}drawTitle(){}}ne(RadialLinearScale,"id","radialLinear"),ne(RadialLinearScale,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ticks.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),ne(RadialLinearScale,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),ne(RadialLinearScale,"descriptors",{angleLines:{_fallback:"grid"}});const INTERVALS={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},UNITS=Object.keys(INTERVALS);function sorter(n,e){return n-e}function parse(n,e){if(isNullOrUndef(e))return null;const t=n._adapter,{parser:l,round:i,isoWeekday:r}=n._parseOpts;let a=e;return typeof l=="function"&&(a=l(a)),isNumberFinite(a)||(a=typeof l=="string"?t.parse(a,l):t.parse(a)),a===null?null:(i&&(a=i==="week"&&(isNumber(r)||r===!0)?t.startOf(a,"isoWeek",r):t.startOf(a,i)),+a)}function determineUnitForAutoTicks(n,e,t,l){const i=UNITS.length;for(let r=UNITS.indexOf(n);r<i-1;++r){const a=INTERVALS[UNITS[r]],c=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((t-e)/(c*a.size))<=l)return UNITS[r]}return UNITS[i-1]}function determineUnitForFormatting(n,e,t,l,i){for(let r=UNITS.length-1;r>=UNITS.indexOf(t);r--){const a=UNITS[r];if(INTERVALS[a].common&&n._adapter.diff(i,l,a)>=e-1)return a}return UNITS[t?UNITS.indexOf(t):0]}function determineMajorUnit(n){for(let e=UNITS.indexOf(n)+1,t=UNITS.length;e<t;++e)if(INTERVALS[UNITS[e]].common)return UNITS[e]}function addTick(n,e,t){if(!t)n[e]=!0;else if(t.length){const{lo:l,hi:i}=_lookup(t,e),r=t[l]>=e?t[l]:t[i];n[r]=!0}}function setMajorTicks(n,e,t,l){const i=n._adapter,r=+i.startOf(e[0].value,l),a=e[e.length-1].value;let c,u;for(c=r;c<=a;c=+i.add(c,1,l))u=t[c],u>=0&&(e[u].major=!0);return e}function ticksFromTimestamps(n,e,t){const l=[],i={},r=e.length;let a,c;for(a=0;a<r;++a)c=e[a],i[c]=a,l.push({value:c,major:!1});return r===0||!t?l:setMajorTicks(n,l,i,t)}class TimeScale extends Scale{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){const l=e.time||(e.time={}),i=this._adapter=new adapters._date(e.adapters.date);i.init(t),mergeIf(l.displayFormats,i.formats()),this._parseOpts={parser:l.parser,round:l.round,isoWeekday:l.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:parse(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,t=this._adapter,l=e.time.unit||"day";let{min:i,max:r,minDefined:a,maxDefined:c}=this.getUserBounds();function u(p){!a&&!isNaN(p.min)&&(i=Math.min(i,p.min)),!c&&!isNaN(p.max)&&(r=Math.max(r,p.max))}(!a||!c)&&(u(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&u(this.getMinMax(!1))),i=isNumberFinite(i)&&!isNaN(i)?i:+t.startOf(Date.now(),l),r=isNumberFinite(r)&&!isNaN(r)?r:+t.endOf(Date.now(),l)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const e=this.getLabelTimestamps();let t=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;return e.length&&(t=e[0],l=e[e.length-1]),{min:t,max:l}}buildTicks(){const e=this.options,t=e.time,l=e.ticks,i=l.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,a=this.max,c=_filterBetween(i,r,a);return this._unit=t.unit||(l.autoSkip?determineUnitForAutoTicks(t.minUnit,this.min,this.max,this._getLabelCapacity(r)):determineUnitForFormatting(this,c.length,t.minUnit,this.min,this.max)),this._majorUnit=!l.major.enabled||this._unit==="year"?void 0:determineMajorUnit(this._unit),this.initOffsets(i),e.reverse&&c.reverse(),ticksFromTimestamps(this,c,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,l=0,i,r;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?t=1-i:t=(this.getDecimalForValue(e[1])-i)/2,r=this.getDecimalForValue(e[e.length-1]),e.length===1?l=r:l=(r-this.getDecimalForValue(e[e.length-2]))/2);const a=e.length<3?.5:.25;t=_limitValue(t,0,a),l=_limitValue(l,0,a),this._offsets={start:t,end:l,factor:1/(t+1+l)}}_generate(){const e=this._adapter,t=this.min,l=this.max,i=this.options,r=i.time,a=r.unit||determineUnitForAutoTicks(r.minUnit,t,l,this._getLabelCapacity(t)),c=valueOrDefault(i.ticks.stepSize,1),u=a==="week"?r.isoWeekday:!1,p=isNumber(u)||u===!0,_={};let y=t,x,k;if(p&&(y=+e.startOf(y,"isoWeek",u)),y=+e.startOf(y,p?"day":a),e.diff(l,t,a)>1e5*c)throw new Error(t+" and "+l+" are too far apart with stepSize of "+c+" "+a);const E=i.ticks.source==="data"&&this.getDataTimestamps();for(x=y,k=0;x<l;x=+e.add(x,c,a),k++)addTick(_,x,E);return(x===l||i.bounds==="ticks"||k===1)&&addTick(_,x,E),Object.keys(_).sort(sorter).map(S=>+S)}getLabelForValue(e){const t=this._adapter,l=this.options.time;return l.tooltipFormat?t.format(e,l.tooltipFormat):t.format(e,l.displayFormats.datetime)}format(e,t){const i=this.options.time.displayFormats,r=this._unit,a=t||i[r];return this._adapter.format(e,a)}_tickFormatFunction(e,t,l,i){const r=this.options,a=r.ticks.callback;if(a)return callback(a,[e,t,l],this);const c=r.time.displayFormats,u=this._unit,p=this._majorUnit,_=u&&c[u],y=p&&c[p],x=l[t],k=p&&y&&x&&x.major;return this._adapter.format(e,i||(k?y:_))}generateTickLabels(e){let t,l,i;for(t=0,l=e.length;t<l;++t)i=e[t],i.label=this._tickFormatFunction(i.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const t=this._offsets,l=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+l)*t.factor)}getValueForPixel(e){const t=this._offsets,l=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+l*(this.max-this.min)}_getLabelSize(e){const t=this.options.ticks,l=this.ctx.measureText(e).width,i=toRadians(this.isHorizontal()?t.maxRotation:t.minRotation),r=Math.cos(i),a=Math.sin(i),c=this._resolveTickFontOptions(0).size;return{w:l*r+c*a,h:l*a+c*r}}_getLabelCapacity(e){const t=this.options.time,l=t.displayFormats,i=l[t.unit]||l.millisecond,r=this._tickFormatFunction(e,0,ticksFromTimestamps(this,[e],this._majorUnit),i),a=this._getLabelSize(r),c=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return c>0?c:1}getDataTimestamps(){let e=this._cache.data||[],t,l;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(t=0,l=i.length;t<l;++t)e=e.concat(i[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let t,l;if(e.length)return e;const i=this.getLabels();for(t=0,l=i.length;t<l;++t)e.push(parse(this,i[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return _arrayUnique(e.sort(sorter))}}ne(TimeScale,"id","time"),ne(TimeScale,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function interpolate(n,e,t){let l=0,i=n.length-1,r,a,c,u;t?(e>=n[l].pos&&e<=n[i].pos&&({lo:l,hi:i}=_lookupByKey(n,"pos",e)),{pos:r,time:c}=n[l],{pos:a,time:u}=n[i]):(e>=n[l].time&&e<=n[i].time&&({lo:l,hi:i}=_lookupByKey(n,"time",e)),{time:r,pos:c}=n[l],{time:a,pos:u}=n[i]);const p=a-r;return p?c+(u-c)*(e-r)/p:c}class TimeSeriesScale extends TimeScale{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=interpolate(t,this.min),this._tableRange=interpolate(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:t,max:l}=this,i=[],r=[];let a,c,u,p,_;for(a=0,c=e.length;a<c;++a)p=e[a],p>=t&&p<=l&&i.push(p);if(i.length<2)return[{time:t,pos:0},{time:l,pos:1}];for(a=0,c=i.length;a<c;++a)_=i[a+1],u=i[a-1],p=i[a],Math.round((_+u)/2)!==p&&r.push({time:p,pos:a/(c-1)});return r}_generate(){const e=this.min,t=this.max;let l=super.getDataTimestamps();return(!l.includes(e)||!l.length)&&l.splice(0,0,e),(!l.includes(t)||l.length===1)&&l.push(t),l.sort((i,r)=>i-r)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const t=this.getDataTimestamps(),l=this.getLabelTimestamps();return t.length&&l.length?e=this.normalize(t.concat(l)):e=t.length?t:l,e=this._cache.all=e,e}getDecimalForValue(e){return(interpolate(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const t=this._offsets,l=this.getDecimalForPixel(e)/t.factor-t.end;return interpolate(this._table,l*this._tableRange+this._minPos,!0)}}ne(TimeSeriesScale,"id","timeseries"),ne(TimeSeriesScale,"defaults",TimeScale.defaults);const defaultDatasetIdKey="label";function reforwardRef(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function setOptions(n,e){const t=n.options;t&&e&&Object.assign(t,e)}function setLabels(n,e){n.labels=e}function setDatasets(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:defaultDatasetIdKey;const l=[];n.datasets=e.map(i=>{const r=n.datasets.find(a=>a[t]===i[t]);return!r||!i.data||l.includes(r)?{...i}:(l.push(r),Object.assign(r,i),r)})}function cloneData(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:defaultDatasetIdKey;const t={labels:[],datasets:[]};return setLabels(t,n.labels),setDatasets(t,n.datasets,e),t}function ChartComponent(n,e){const{height:t=150,width:l=300,redraw:i=!1,datasetIdKey:r,type:a,data:c,options:u,plugins:p=[],fallbackContent:_,updateMode:y,...x}=n,k=reactExports.useRef(null),E=reactExports.useRef(),S=()=>{k.current&&(E.current=new Chart$1(k.current,{type:a,data:cloneData(c,r),options:u&&{...u},plugins:p}),reforwardRef(e,E.current))},T=()=>{reforwardRef(e,null),E.current&&(E.current.destroy(),E.current=null)};return reactExports.useEffect(()=>{!i&&E.current&&u&&setOptions(E.current,u)},[i,u]),reactExports.useEffect(()=>{!i&&E.current&&setLabels(E.current.config.data,c.labels)},[i,c.labels]),reactExports.useEffect(()=>{!i&&E.current&&c.datasets&&setDatasets(E.current.config.data,c.datasets,r)},[i,c.datasets]),reactExports.useEffect(()=>{E.current&&(i?(T(),setTimeout(S)):E.current.update(y))},[i,u,c.labels,c.datasets,y]),reactExports.useEffect(()=>{E.current&&(T(),setTimeout(S))},[a]),reactExports.useEffect(()=>(S(),()=>T()),[]),React.createElement("canvas",Object.assign({ref:k,role:"img",height:t,width:l},x),_)}const Chart=reactExports.forwardRef(ChartComponent);function createTypedChart(n,e){return Chart$1.register(e),reactExports.forwardRef((t,l)=>React.createElement(Chart,Object.assign({},t,{ref:l,type:n})))}const Bar=createTypedChart("bar",BarController);Chart$1.register(CategoryScale,LinearScale,BarElement,plugin_title,plugin_tooltip,plugin_legend);const data={labels:["January","February","March","April","May","June"],datasets:[{label:"Revenue",data:[500,700,800,600,900,1e3],backgroundColor:"#f0f0f0f0",borderRadius:10,borderSkipped:!1}]},options={responsive:!0,plugins:{legend:{display:!0,position:"top",labels:{color:"#fff",font:{size:14,weight:"bold"}}},title:{display:!0,text:"Monthly Revenue",color:"#fff",font:{size:18,weight:"bold"},padding:{top:10,bottom:20}}},scales:{x:{grid:{display:!1},ticks:{color:"#fff"}},y:{grid:{color:"rgba(200, 200, 200, 0.2)"},ticks:{color:"#fff"}}}},BarChart=()=>jsxRuntimeExports.jsx("div",{className:"w-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center p-4 rounded-lg shadow-lg",children:jsxRuntimeExports.jsx(Bar,{data,options})}),AddUserModal=({fetchUsers:n})=>{const e=useViewContext(),t=useAppSelector(u=>getUser(u)),[l,i]=reactExports.useState([{role:"3",label:"Оператор ПД"},{role:"4",label:"Оператор КД"},{role:"5",label:"РГ ПД"},{role:"6",label:"РГ КД"},{role:"8",label:"Баер"},{role:"9",label:"Вл"}]),[r,a]=reactExports.useState({id:null,name:"",password:"",role:l[0].role});reactExports.useEffect(()=>{let u=l;t&&+t.role.id==5&&(u=l.filter(p=>+p.role==3)),t&&+t.role.id==6&&(u=l.filter(p=>+p.role==4)),t&&+t.role.id==10&&(u=l.filter(p=>+p.role==9)),i(u),u.length>0&&a(p=>({...p,role:u[0].role}))},[t]);const c=async()=>{if((r==null?void 0:r.name.length)<3||(r==null?void 0:r.password.length)<5||(r==null?void 0:r.role)===null){e==null||e.notification.show("Логин больше 3, пароль больше 4 символов!","error");return}await axios({method:"POST",url:"/admin",data:{name:r==null?void 0:r.name,password:r==null?void 0:r.password,role:r==null?void 0:r.role}}).then(()=>{e==null||e.notification.show("Пользователь успешно создан!","success"),n(),e==null||e.modal.hide()}).catch(u=>e==null?void 0:e.notification.show(u.response.data.detail,"error"))};return jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2 gap-3 text-black",children:[jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Логин"}),jsxRuntimeExports.jsx("input",{type:"text",value:r.name,onChange:u=>a({...r,name:u.target.value}),placeholder:"...",className:"h-8 border border-black rounded pl-3 text-sm"}),jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Пароль"}),jsxRuntimeExports.jsx("input",{type:"text",value:r.password,onChange:u=>a({...r,password:u.target.value}),placeholder:"...",className:"h-8 border border-black rounded pl-3 text-sm"}),jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Роль"}),jsxRuntimeExports.jsx("select",{className:"h-8 border border-black rounded pl-3 text-sm",onChange:u=>a({...r,role:u.target.value}),children:l.map(u=>jsxRuntimeExports.jsx("option",{value:u.role,children:u.label},u.role))}),jsxRuntimeExports.jsx("button",{onClick:c,className:"btn btn-success text-white col-span-2",children:"Добавить"})]})},ChangeUserModal=({user:n,fetchUsers:e})=>{const t=useViewContext(),l=useAppSelector(p=>getUser(p)),[i,r]=reactExports.useState([{role:"3",label:"Оператор ПД"},{role:"4",label:"Оператор КД"},{role:"5",label:"РГ ПД"},{role:"6",label:"РГ КД"},{role:"7",label:"Администратор"},{role:"8",label:"Баер"}]),[a,c]=reactExports.useState({id:n.id,name:n.name,password:"",role:n.role});reactExports.useEffect(()=>{let p=i;l&&+l.role.id==5&&(p=i.filter(_=>+_.role==3)),l&&+l.role.id==6&&(p=i.filter(_=>+_.role==4)),r(p)},[l]);const u=async()=>{if(!(a!=null&&a.id)||(a==null?void 0:a.name.length)<3||(a==null?void 0:a.role)===null||(a==null?void 0:a.role)===void 0){t==null||t.notification.show("Заполните все поля / Минимум: пароль - 5 символов, логин - 3","error");return}const p={name:a==null?void 0:a.name,role:a==null?void 0:a.role};(a==null?void 0:a.password)!==""&&(p.password=a==null?void 0:a.password),await axios({method:"PATCH",url:`/admin/${a==null?void 0:a.id}`,data:p}).then(()=>{t==null||t.notification.show("Пользователь успешно обновлен!","success"),e(),t==null||t.modal.hide()}).catch(_=>t==null?void 0:t.notification.show(_.response.data.detail,"error"))};return jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2 gap-3 text-black",children:[jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Логин"}),jsxRuntimeExports.jsx("input",{type:"text",value:a.name,onChange:p=>c({...a,name:p.target.value}),placeholder:"...",className:"h-8 border border-black rounded pl-3 text-sm"}),jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Пароль"}),jsxRuntimeExports.jsx("input",{type:"text",value:a.password,onChange:p=>c({...a,password:p.target.value}),placeholder:"...",className:"h-8 border border-black rounded pl-3 text-sm"}),jsxRuntimeExports.jsx("p",{className:"font-bold",children:"Роль"}),jsxRuntimeExports.jsx("select",{value:a.role,className:"h-8 border border-black rounded pl-3 text-sm",onChange:p=>c({...a,role:p.target.value}),children:i.map(p=>jsxRuntimeExports.jsx("option",{value:p.role,children:p.label},p.role))}),jsxRuntimeExports.jsx("button",{onClick:u,className:"btn btn-success text-white col-span-2",children:"Обновить"})]})},LeftCard=({users:n,fetchUsers:e})=>{const t=useViewContext(),l=()=>{t==null||t.modal.show({title:"Добавление пользователя",children:jsxRuntimeExports.jsx(AddUserModal,{fetchUsers:e})})},i=r=>{t==null||t.modal.show({title:"Добавление пользователя",children:jsxRuntimeExports.jsx(ChangeUserModal,{user:r,fetchUsers:e})})};return jsxRuntimeExports.jsxs("div",{className:"h-full w-full bg-gradient-to-br from-yellow-500 to-orange-500 flex flex-col items-center justify-start gap-3 p-4 rounded-lg shadow-lg",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between w-full",children:[jsxRuntimeExports.jsx("h1",{className:"text-xl text-white",children:"Добавить/Изменить"}),jsxRuntimeExports.jsx("div",{onClick:l,className:"cursor-pointer",children:jsxRuntimeExports.jsx(IconPersonAdd,{})})]}),jsxRuntimeExports.jsxs("div",{className:"w-full relative",children:[jsxRuntimeExports.jsx("input",{className:"h-10 placeholder-white text-white rounded w-full border pl-3 text-sm",placeholder:"Login..."}),jsxRuntimeExports.jsx("div",{className:"absolute right-4 top-3",children:jsxRuntimeExports.jsx(IconSearch$1,{})})]}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-2 text-white overflow-y-auto",children:n.map(r=>jsxRuntimeExports.jsx("div",{className:"cursor-pointer",onClick:()=>i(r),children:jsxRuntimeExports.jsx("p",{children:r.name})},r.id))})]})},IconSearch$1=()=>jsxRuntimeExports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"white",cursor:"pointer",className:"h-4 w-4 opacity-70",children:jsxRuntimeExports.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"})}),DeleteUserModal=n=>{const{user_id:e,user_name:t,fetchUsers:l}=n,i=useViewContext(),r=async()=>{window.confirm("Вы уверены?")&&await axios({method:"DELETE",url:`/admin/${e}`}).then(()=>{i==null||i.notification.show("Пользователь успешно удален!","success"),l(),i==null||i.modal.hide()}).catch(c=>i==null?void 0:i.notification.show(c.response.data.detail,"error"))};return jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2 text-black",children:[jsxRuntimeExports.jsx("p",{className:"font-bold",children:t}),jsxRuntimeExports.jsx("button",{onClick:r,className:"btn btn-error text-white",children:"Удалить"})]})},RightCard=({users:n,fetchUsers:e})=>{const t=useViewContext(),l=(i,r)=>{t==null||t.modal.show({title:"Удаление пользователя",children:jsxRuntimeExports.jsx(DeleteUserModal,{user_id:i,user_name:r,fetchUsers:e})})};return jsxRuntimeExports.jsxs("div",{className:"h-full w-full bg-gradient-to-br from-red-500 to-rose-800 flex flex-col items-center justify-start gap-3 p-4 rounded-lg shadow-lg",children:[jsxRuntimeExports.jsx("h1",{className:"text-xl text-white w-full",children:"Удаление"}),jsxRuntimeExports.jsxs("div",{className:"w-full relative",children:[jsxRuntimeExports.jsx("input",{className:"h-10 placeholder-white text-white rounded w-full border pl-3 text-sm",placeholder:"Login..."}),jsxRuntimeExports.jsx("div",{className:"absolute right-4 top-3",children:jsxRuntimeExports.jsx(IconSearch,{})})]}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-2 text-white overflow-y-auto",children:n.map(i=>jsxRuntimeExports.jsx("div",{onClick:()=>l(i.id,i.name),className:"cursor-pointer",children:jsxRuntimeExports.jsx("p",{children:i.name})},i.id))})]})},IconSearch=()=>jsxRuntimeExports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"white",cursor:"pointer",className:"h-4 w-4 opacity-70",children:jsxRuntimeExports.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"})}),RightCards=()=>{const n=useViewContext(),[e,t]=reactExports.useState([]);reactExports.useEffect(()=>{l()},[]);const l=async()=>{await axios({method:"GET",url:"/admin"}).then(i=>{t(i.data.users)}).catch(()=>{n==null||n.notification.show("Ошибка при загруке пользователей","error")})};return jsxRuntimeExports.jsxs("div",{className:"h-full w-full flex items-start justify-between gap-3",children:[jsxRuntimeExports.jsx(LeftCard,{users:e,fetchUsers:l}),jsxRuntimeExports.jsx(RightCard,{users:e,fetchUsers:l})]})};var dist={exports:{}},jquery={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,function(n){(function(e,t){n.exports=e.document?t(e,!0):function(l){if(!l.document)throw new Error("jQuery requires a window with a document");return t(l)}})(typeof window<"u"?window:commonjsGlobal,function(e,t){var l=[],i=Object.getPrototypeOf,r=l.slice,a=l.flat?function(s){return l.flat.call(s)}:function(s){return l.concat.apply([],s)},c=l.push,u=l.indexOf,p={},_=p.toString,y=p.hasOwnProperty,x=y.toString,k=x.call(Object),E={},S=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},T=function(o){return o!=null&&o===o.window},I=e.document,U={type:!0,src:!0,nonce:!0,noModule:!0};function K(s,o,h){h=h||I;var f,m,g=h.createElement("script");if(g.text=s,o)for(f in U)m=o[f]||o.getAttribute&&o.getAttribute(f),m&&g.setAttribute(f,m);h.head.appendChild(g).parentNode.removeChild(g)}function Z(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?p[_.call(s)]||"object":typeof s}var V="3.7.1",Q=/HTML$/i,d=function(s,o){return new d.fn.init(s,o)};d.fn=d.prototype={jquery:V,constructor:d,length:0,toArray:function(){return r.call(this)},get:function(s){return s==null?r.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=d.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return d.each(this,s)},map:function(s){return this.pushStack(d.map(this,function(o,h){return s.call(o,h,o)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(d.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(d.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,h=+s+(s<0?o:0);return this.pushStack(h>=0&&h<o?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:l.sort,splice:l.splice},d.extend=d.fn.extend=function(){var s,o,h,f,m,g,b=arguments[0]||{},M=1,A=arguments.length,C=!1;for(typeof b=="boolean"&&(C=b,b=arguments[M]||{},M++),typeof b!="object"&&!S(b)&&(b={}),M===A&&(b=this,M--);M<A;M++)if((s=arguments[M])!=null)for(o in s)f=s[o],!(o==="__proto__"||b===f)&&(C&&f&&(d.isPlainObject(f)||(m=Array.isArray(f)))?(h=b[o],m&&!Array.isArray(h)?g=[]:!m&&!d.isPlainObject(h)?g={}:g=h,m=!1,b[o]=d.extend(C,g,f)):f!==void 0&&(b[o]=f));return b},d.extend({expando:"jQuery"+(V+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,h;return!s||_.call(s)!=="[object Object]"?!1:(o=i(s),o?(h=y.call(o,"constructor")&&o.constructor,typeof h=="function"&&x.call(h)===k):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,h){K(s,{nonce:o&&o.nonce},h)},each:function(s,o){var h,f=0;if(G(s))for(h=s.length;f<h&&o.call(s[f],f,s[f])!==!1;f++);else for(f in s)if(o.call(s[f],f,s[f])===!1)break;return s},text:function(s){var o,h="",f=0,m=s.nodeType;if(!m)for(;o=s[f++];)h+=d.text(o);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,o){var h=o||[];return s!=null&&(G(Object(s))?d.merge(h,typeof s=="string"?[s]:s):c.call(h,s)),h},inArray:function(s,o,h){return o==null?-1:u.call(o,s,h)},isXMLDoc:function(s){var o=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!Q.test(o||h&&h.nodeName||"HTML")},merge:function(s,o){for(var h=+o.length,f=0,m=s.length;f<h;f++)s[m++]=o[f];return s.length=m,s},grep:function(s,o,h){for(var f,m=[],g=0,b=s.length,M=!h;g<b;g++)f=!o(s[g],g),f!==M&&m.push(s[g]);return m},map:function(s,o,h){var f,m,g=0,b=[];if(G(s))for(f=s.length;g<f;g++)m=o(s[g],g,h),m!=null&&b.push(m);else for(g in s)m=o(s[g],g,h),m!=null&&b.push(m);return a(b)},guid:1,support:E}),typeof Symbol=="function"&&(d.fn[Symbol.iterator]=l[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){p["[object "+o+"]"]=o.toLowerCase()});function G(s){var o=!!s&&"length"in s&&s.length,h=Z(s);return S(s)||T(s)?!1:h==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}function H(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var he=l.pop,se=l.sort,ce=l.splice,ee="[\\x20\\t\\r\\n\\f]",ye=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g");d.contains=function(s,o){var h=o&&o.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var fe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ge(s,o){return o?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}d.escapeSelector=function(s){return(s+"").replace(fe,ge)};var pe=I,Ye=c;(function(){var s,o,h,f,m,g=Ye,b,M,A,C,L,R=d.expando,j=0,B=0,X=It(),ae=It(),te=It(),be=It(),_e=function(v,w){return v===w&&(m=!0),0},Pe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Re="(?:\\\\[\\da-fA-F]{1,6}"+ee+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",re="\\["+ee+"*("+Re+")(?:"+ee+"*([*^$|!~]?=)"+ee+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Re+"))|)"+ee+"*\\]",it=":("+Re+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+re+")*)|.*)\\)|)",oe=new RegExp(ee+"+","g"),me=new RegExp("^"+ee+"*,"+ee+"*"),Mt=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),Xt=new RegExp(ee+"|>"),Be=new RegExp(it),kt=new RegExp("^"+Re+"$"),Ne={ID:new RegExp("^#("+Re+")"),CLASS:new RegExp("^\\.("+Re+")"),TAG:new RegExp("^("+Re+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Pe+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},Ge=/^(?:input|select|textarea|button)$/i,Qe=/^h\d$/i,Se=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$t=/[+~]/,ze=new RegExp("\\\\[\\da-fA-F]{1,6}"+ee+"?|\\\\([^\\r\\n\\f])","g"),Ze=function(v,w){var D="0x"+v.slice(1)-65536;return w||(D<0?String.fromCharCode(D+65536):String.fromCharCode(D>>10|55296,D&1023|56320))},Ll=function(){Je()},Pl=Pt(function(v){return v.disabled===!0&&H(v,"fieldset")},{dir:"parentNode",next:"legend"});function Rl(){try{return b.activeElement}catch{}}try{g.apply(l=r.call(pe.childNodes),pe.childNodes),l[pe.childNodes.length].nodeType}catch{g={apply:function(w,D){Ye.apply(w,r.call(D))},call:function(w){Ye.apply(w,r.call(arguments,1))}}}function ue(v,w,D,O){var P,N,F,q,W,le,J,$=w&&w.ownerDocument,ie=w?w.nodeType:9;if(D=D||[],typeof v!="string"||!v||ie!==1&&ie!==9&&ie!==11)return D;if(!O&&(Je(w),w=w||b,A)){if(ie!==11&&(W=Se.exec(v)))if(P=W[1]){if(ie===9)if(F=w.getElementById(P)){if(F.id===P)return g.call(D,F),D}else return D;else if($&&(F=$.getElementById(P))&&ue.contains(w,F)&&F.id===P)return g.call(D,F),D}else{if(W[2])return g.apply(D,w.getElementsByTagName(v)),D;if((P=W[3])&&w.getElementsByClassName)return g.apply(D,w.getElementsByClassName(P)),D}if(!be[v+" "]&&(!C||!C.test(v))){if(J=v,$=w,ie===1&&(Xt.test(v)||Mt.test(v))){for($=$t.test(v)&&en(w.parentNode)||w,($!=w||!E.scope)&&((q=w.getAttribute("id"))?q=d.escapeSelector(q):w.setAttribute("id",q=R)),le=wt(v),N=le.length;N--;)le[N]=(q?"#"+q:":scope")+" "+Lt(le[N]);J=le.join(",")}try{return g.apply(D,$.querySelectorAll(J)),D}catch{be(v,!0)}finally{q===R&&w.removeAttribute("id")}}}return Un(v.replace(ye,"$1"),w,D,O)}function It(){var v=[];function w(D,O){return v.push(D+" ")>o.cacheLength&&delete w[v.shift()],w[D+" "]=O}return w}function Te(v){return v[R]=!0,v}function ft(v){var w=b.createElement("fieldset");try{return!!v(w)}catch{return!1}finally{w.parentNode&&w.parentNode.removeChild(w),w=null}}function Bl(v){return function(w){return H(w,"input")&&w.type===v}}function Nl(v){return function(w){return(H(w,"input")||H(w,"button"))&&w.type===v}}function Fn(v){return function(w){return"form"in w?w.parentNode&&w.disabled===!1?"label"in w?"label"in w.parentNode?w.parentNode.disabled===v:w.disabled===v:w.isDisabled===v||w.isDisabled!==!v&&Pl(w)===v:w.disabled===v:"label"in w?w.disabled===v:!1}}function st(v){return Te(function(w){return w=+w,Te(function(D,O){for(var P,N=v([],D.length,w),F=N.length;F--;)D[P=N[F]]&&(D[P]=!(O[P]=D[P]))})})}function en(v){return v&&typeof v.getElementsByTagName<"u"&&v}function Je(v){var w,D=v?v.ownerDocument||v:pe;return D==b||D.nodeType!==9||!D.documentElement||(b=D,M=b.documentElement,A=!d.isXMLDoc(b),L=M.matches||M.webkitMatchesSelector||M.msMatchesSelector,M.msMatchesSelector&&pe!=b&&(w=b.defaultView)&&w.top!==w&&w.addEventListener("unload",Ll),E.getById=ft(function(O){return M.appendChild(O).id=d.expando,!b.getElementsByName||!b.getElementsByName(d.expando).length}),E.disconnectedMatch=ft(function(O){return L.call(O,"*")}),E.scope=ft(function(){return b.querySelectorAll(":scope")}),E.cssHas=ft(function(){try{return b.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(O){var P=O.replace(ze,Ze);return function(N){return N.getAttribute("id")===P}},o.find.ID=function(O,P){if(typeof P.getElementById<"u"&&A){var N=P.getElementById(O);return N?[N]:[]}}):(o.filter.ID=function(O){var P=O.replace(ze,Ze);return function(N){var F=typeof N.getAttributeNode<"u"&&N.getAttributeNode("id");return F&&F.value===P}},o.find.ID=function(O,P){if(typeof P.getElementById<"u"&&A){var N,F,q,W=P.getElementById(O);if(W){if(N=W.getAttributeNode("id"),N&&N.value===O)return[W];for(q=P.getElementsByName(O),F=0;W=q[F++];)if(N=W.getAttributeNode("id"),N&&N.value===O)return[W]}return[]}}),o.find.TAG=function(O,P){return typeof P.getElementsByTagName<"u"?P.getElementsByTagName(O):P.querySelectorAll(O)},o.find.CLASS=function(O,P){if(typeof P.getElementsByClassName<"u"&&A)return P.getElementsByClassName(O)},C=[],ft(function(O){var P;M.appendChild(O).innerHTML="<a id='"+R+"' href='' disabled='disabled'></a><select id='"+R+"-\r\\' disabled='disabled'><option selected=''></option></select>",O.querySelectorAll("[selected]").length||C.push("\\["+ee+"*(?:value|"+Pe+")"),O.querySelectorAll("[id~="+R+"-]").length||C.push("~="),O.querySelectorAll("a#"+R+"+*").length||C.push(".#.+[+~]"),O.querySelectorAll(":checked").length||C.push(":checked"),P=b.createElement("input"),P.setAttribute("type","hidden"),O.appendChild(P).setAttribute("name","D"),M.appendChild(O).disabled=!0,O.querySelectorAll(":disabled").length!==2&&C.push(":enabled",":disabled"),P=b.createElement("input"),P.setAttribute("name",""),O.appendChild(P),O.querySelectorAll("[name='']").length||C.push("\\["+ee+"*name"+ee+"*="+ee+`*(?:''|"")`)}),E.cssHas||C.push(":has"),C=C.length&&new RegExp(C.join("|")),_e=function(O,P){if(O===P)return m=!0,0;var N=!O.compareDocumentPosition-!P.compareDocumentPosition;return N||(N=(O.ownerDocument||O)==(P.ownerDocument||P)?O.compareDocumentPosition(P):1,N&1||!E.sortDetached&&P.compareDocumentPosition(O)===N?O===b||O.ownerDocument==pe&&ue.contains(pe,O)?-1:P===b||P.ownerDocument==pe&&ue.contains(pe,P)?1:f?u.call(f,O)-u.call(f,P):0:N&4?-1:1)}),b}ue.matches=function(v,w){return ue(v,null,null,w)},ue.matchesSelector=function(v,w){if(Je(v),A&&!be[w+" "]&&(!C||!C.test(w)))try{var D=L.call(v,w);if(D||E.disconnectedMatch||v.document&&v.document.nodeType!==11)return D}catch{be(w,!0)}return ue(w,b,null,[v]).length>0},ue.contains=function(v,w){return(v.ownerDocument||v)!=b&&Je(v),d.contains(v,w)},ue.attr=function(v,w){(v.ownerDocument||v)!=b&&Je(v);var D=o.attrHandle[w.toLowerCase()],O=D&&y.call(o.attrHandle,w.toLowerCase())?D(v,w,!A):void 0;return O!==void 0?O:v.getAttribute(w)},ue.error=function(v){throw new Error("Syntax error, unrecognized expression: "+v)},d.uniqueSort=function(v){var w,D=[],O=0,P=0;if(m=!E.sortStable,f=!E.sortStable&&r.call(v,0),se.call(v,_e),m){for(;w=v[P++];)w===v[P]&&(O=D.push(P));for(;O--;)ce.call(v,D[O],1)}return f=null,v},d.fn.uniqueSort=function(){return this.pushStack(d.uniqueSort(r.apply(this)))},o=d.expr={cacheLength:50,createPseudo:Te,match:Ne,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(v){return v[1]=v[1].replace(ze,Ze),v[3]=(v[3]||v[4]||v[5]||"").replace(ze,Ze),v[2]==="~="&&(v[3]=" "+v[3]+" "),v.slice(0,4)},CHILD:function(v){return v[1]=v[1].toLowerCase(),v[1].slice(0,3)==="nth"?(v[3]||ue.error(v[0]),v[4]=+(v[4]?v[5]+(v[6]||1):2*(v[3]==="even"||v[3]==="odd")),v[5]=+(v[7]+v[8]||v[3]==="odd")):v[3]&&ue.error(v[0]),v},PSEUDO:function(v){var w,D=!v[6]&&v[2];return Ne.CHILD.test(v[0])?null:(v[3]?v[2]=v[4]||v[5]||"":D&&Be.test(D)&&(w=wt(D,!0))&&(w=D.indexOf(")",D.length-w)-D.length)&&(v[0]=v[0].slice(0,w),v[2]=D.slice(0,w)),v.slice(0,3))}},filter:{TAG:function(v){var w=v.replace(ze,Ze).toLowerCase();return v==="*"?function(){return!0}:function(D){return H(D,w)}},CLASS:function(v){var w=X[v+" "];return w||(w=new RegExp("(^|"+ee+")"+v+"("+ee+"|$)"))&&X(v,function(D){return w.test(typeof D.className=="string"&&D.className||typeof D.getAttribute<"u"&&D.getAttribute("class")||"")})},ATTR:function(v,w,D){return function(O){var P=ue.attr(O,v);return P==null?w==="!=":w?(P+="",w==="="?P===D:w==="!="?P!==D:w==="^="?D&&P.indexOf(D)===0:w==="*="?D&&P.indexOf(D)>-1:w==="$="?D&&P.slice(-D.length)===D:w==="~="?(" "+P.replace(oe," ")+" ").indexOf(D)>-1:w==="|="?P===D||P.slice(0,D.length+1)===D+"-":!1):!0}},CHILD:function(v,w,D,O,P){var N=v.slice(0,3)!=="nth",F=v.slice(-4)!=="last",q=w==="of-type";return O===1&&P===0?function(W){return!!W.parentNode}:function(W,le,J){var $,ie,Y,de,we,ve=N!==F?"nextSibling":"previousSibling",Ce=W.parentNode,Fe=q&&W.nodeName.toLowerCase(),pt=!J&&!q,xe=!1;if(Ce){if(N){for(;ve;){for(Y=W;Y=Y[ve];)if(q?H(Y,Fe):Y.nodeType===1)return!1;we=ve=v==="only"&&!we&&"nextSibling"}return!0}if(we=[F?Ce.firstChild:Ce.lastChild],F&&pt){for(ie=Ce[R]||(Ce[R]={}),$=ie[v]||[],de=$[0]===j&&$[1],xe=de&&$[2],Y=de&&Ce.childNodes[de];Y=++de&&Y&&Y[ve]||(xe=de=0)||we.pop();)if(Y.nodeType===1&&++xe&&Y===W){ie[v]=[j,de,xe];break}}else if(pt&&(ie=W[R]||(W[R]={}),$=ie[v]||[],de=$[0]===j&&$[1],xe=de),xe===!1)for(;(Y=++de&&Y&&Y[ve]||(xe=de=0)||we.pop())&&!((q?H(Y,Fe):Y.nodeType===1)&&++xe&&(pt&&(ie=Y[R]||(Y[R]={}),ie[v]=[j,xe]),Y===W)););return xe-=P,xe===O||xe%O===0&&xe/O>=0}}},PSEUDO:function(v,w){var D,O=o.pseudos[v]||o.setFilters[v.toLowerCase()]||ue.error("unsupported pseudo: "+v);return O[R]?O(w):O.length>1?(D=[v,v,"",w],o.setFilters.hasOwnProperty(v.toLowerCase())?Te(function(P,N){for(var F,q=O(P,w),W=q.length;W--;)F=u.call(P,q[W]),P[F]=!(N[F]=q[W])}):function(P){return O(P,0,D)}):O}},pseudos:{not:Te(function(v){var w=[],D=[],O=sn(v.replace(ye,"$1"));return O[R]?Te(function(P,N,F,q){for(var W,le=O(P,null,q,[]),J=P.length;J--;)(W=le[J])&&(P[J]=!(N[J]=W))}):function(P,N,F){return w[0]=P,O(w,null,F,D),w[0]=null,!D.pop()}}),has:Te(function(v){return function(w){return ue(v,w).length>0}}),contains:Te(function(v){return v=v.replace(ze,Ze),function(w){return(w.textContent||d.text(w)).indexOf(v)>-1}}),lang:Te(function(v){return kt.test(v||"")||ue.error("unsupported lang: "+v),v=v.replace(ze,Ze).toLowerCase(),function(w){var D;do if(D=A?w.lang:w.getAttribute("xml:lang")||w.getAttribute("lang"))return D=D.toLowerCase(),D===v||D.indexOf(v+"-")===0;while((w=w.parentNode)&&w.nodeType===1);return!1}}),target:function(v){var w=e.location&&e.location.hash;return w&&w.slice(1)===v.id},root:function(v){return v===M},focus:function(v){return v===Rl()&&b.hasFocus()&&!!(v.type||v.href||~v.tabIndex)},enabled:Fn(!1),disabled:Fn(!0),checked:function(v){return H(v,"input")&&!!v.checked||H(v,"option")&&!!v.selected},selected:function(v){return v.parentNode&&v.parentNode.selectedIndex,v.selected===!0},empty:function(v){for(v=v.firstChild;v;v=v.nextSibling)if(v.nodeType<6)return!1;return!0},parent:function(v){return!o.pseudos.empty(v)},header:function(v){return Qe.test(v.nodeName)},input:function(v){return Ge.test(v.nodeName)},button:function(v){return H(v,"input")&&v.type==="button"||H(v,"button")},text:function(v){var w;return H(v,"input")&&v.type==="text"&&((w=v.getAttribute("type"))==null||w.toLowerCase()==="text")},first:st(function(){return[0]}),last:st(function(v,w){return[w-1]}),eq:st(function(v,w,D){return[D<0?D+w:D]}),even:st(function(v,w){for(var D=0;D<w;D+=2)v.push(D);return v}),odd:st(function(v,w){for(var D=1;D<w;D+=2)v.push(D);return v}),lt:st(function(v,w,D){var O;for(D<0?O=D+w:D>w?O=w:O=D;--O>=0;)v.push(O);return v}),gt:st(function(v,w,D){for(var O=D<0?D+w:D;++O<w;)v.push(O);return v})}},o.pseudos.nth=o.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[s]=Bl(s);for(s in{submit:!0,reset:!0})o.pseudos[s]=Nl(s);function Wn(){}Wn.prototype=o.filters=o.pseudos,o.setFilters=new Wn;function wt(v,w){var D,O,P,N,F,q,W,le=ae[v+" "];if(le)return w?0:le.slice(0);for(F=v,q=[],W=o.preFilter;F;){(!D||(O=me.exec(F)))&&(O&&(F=F.slice(O[0].length)||F),q.push(P=[])),D=!1,(O=Mt.exec(F))&&(D=O.shift(),P.push({value:D,type:O[0].replace(ye," ")}),F=F.slice(D.length));for(N in o.filter)(O=Ne[N].exec(F))&&(!W[N]||(O=W[N](O)))&&(D=O.shift(),P.push({value:D,type:N,matches:O}),F=F.slice(D.length));if(!D)break}return w?F.length:F?ue.error(v):ae(v,q).slice(0)}function Lt(v){for(var w=0,D=v.length,O="";w<D;w++)O+=v[w].value;return O}function Pt(v,w,D){var O=w.dir,P=w.next,N=P||O,F=D&&N==="parentNode",q=B++;return w.first?function(W,le,J){for(;W=W[O];)if(W.nodeType===1||F)return v(W,le,J);return!1}:function(W,le,J){var $,ie,Y=[j,q];if(J){for(;W=W[O];)if((W.nodeType===1||F)&&v(W,le,J))return!0}else for(;W=W[O];)if(W.nodeType===1||F)if(ie=W[R]||(W[R]={}),P&&H(W,P))W=W[O]||W;else{if(($=ie[N])&&$[0]===j&&$[1]===q)return Y[2]=$[2];if(ie[N]=Y,Y[2]=v(W,le,J))return!0}return!1}}function tn(v){return v.length>1?function(w,D,O){for(var P=v.length;P--;)if(!v[P](w,D,O))return!1;return!0}:v[0]}function Fl(v,w,D){for(var O=0,P=w.length;O<P;O++)ue(v,w[O],D);return D}function Rt(v,w,D,O,P){for(var N,F=[],q=0,W=v.length,le=w!=null;q<W;q++)(N=v[q])&&(!D||D(N,O,P))&&(F.push(N),le&&w.push(q));return F}function nn(v,w,D,O,P,N){return O&&!O[R]&&(O=nn(O)),P&&!P[R]&&(P=nn(P,N)),Te(function(F,q,W,le){var J,$,ie,Y,de=[],we=[],ve=q.length,Ce=F||Fl(w||"*",W.nodeType?[W]:W,[]),Fe=v&&(F||!w)?Rt(Ce,de,v,W,le):Ce;if(D?(Y=P||(F?v:ve||O)?[]:q,D(Fe,Y,W,le)):Y=Fe,O)for(J=Rt(Y,we),O(J,[],W,le),$=J.length;$--;)(ie=J[$])&&(Y[we[$]]=!(Fe[we[$]]=ie));if(F){if(P||v){if(P){for(J=[],$=Y.length;$--;)(ie=Y[$])&&J.push(Fe[$]=ie);P(null,Y=[],J,le)}for($=Y.length;$--;)(ie=Y[$])&&(J=P?u.call(F,ie):de[$])>-1&&(F[J]=!(q[J]=ie))}}else Y=Rt(Y===q?Y.splice(ve,Y.length):Y),P?P(null,q,Y,le):g.apply(q,Y)})}function ln(v){for(var w,D,O,P=v.length,N=o.relative[v[0].type],F=N||o.relative[" "],q=N?1:0,W=Pt(function($){return $===w},F,!0),le=Pt(function($){return u.call(w,$)>-1},F,!0),J=[function($,ie,Y){var de=!N&&(Y||ie!=h)||((w=ie).nodeType?W($,ie,Y):le($,ie,Y));return w=null,de}];q<P;q++)if(D=o.relative[v[q].type])J=[Pt(tn(J),D)];else{if(D=o.filter[v[q].type].apply(null,v[q].matches),D[R]){for(O=++q;O<P&&!o.relative[v[O].type];O++);return nn(q>1&&tn(J),q>1&&Lt(v.slice(0,q-1).concat({value:v[q-2].type===" "?"*":""})).replace(ye,"$1"),D,q<O&&ln(v.slice(q,O)),O<P&&ln(v=v.slice(O)),O<P&&Lt(v))}J.push(D)}return tn(J)}function Wl(v,w){var D=w.length>0,O=v.length>0,P=function(N,F,q,W,le){var J,$,ie,Y=0,de="0",we=N&&[],ve=[],Ce=h,Fe=N||O&&o.find.TAG("*",le),pt=j+=Ce==null?1:Math.random()||.1,xe=Fe.length;for(le&&(h=F==b||F||le);de!==xe&&(J=Fe[de])!=null;de++){if(O&&J){for($=0,!F&&J.ownerDocument!=b&&(Je(J),q=!A);ie=v[$++];)if(ie(J,F||b,q)){g.call(W,J);break}le&&(j=pt)}D&&((J=!ie&&J)&&Y--,N&&we.push(J))}if(Y+=de,D&&de!==Y){for($=0;ie=w[$++];)ie(we,ve,F,q);if(N){if(Y>0)for(;de--;)we[de]||ve[de]||(ve[de]=he.call(W));ve=Rt(ve)}g.apply(W,ve),le&&!N&&ve.length>0&&Y+w.length>1&&d.uniqueSort(W)}return le&&(j=pt,h=Ce),we};return D?Te(P):P}function sn(v,w){var D,O=[],P=[],N=te[v+" "];if(!N){for(w||(w=wt(v)),D=w.length;D--;)N=ln(w[D]),N[R]?O.push(N):P.push(N);N=te(v,Wl(P,O)),N.selector=v}return N}function Un(v,w,D,O){var P,N,F,q,W,le=typeof v=="function"&&v,J=!O&&wt(v=le.selector||v);if(D=D||[],J.length===1){if(N=J[0]=J[0].slice(0),N.length>2&&(F=N[0]).type==="ID"&&w.nodeType===9&&A&&o.relative[N[1].type]){if(w=(o.find.ID(F.matches[0].replace(ze,Ze),w)||[])[0],w)le&&(w=w.parentNode);else return D;v=v.slice(N.shift().value.length)}for(P=Ne.needsContext.test(v)?0:N.length;P--&&(F=N[P],!o.relative[q=F.type]);)if((W=o.find[q])&&(O=W(F.matches[0].replace(ze,Ze),$t.test(N[0].type)&&en(w.parentNode)||w))){if(N.splice(P,1),v=O.length&&Lt(N),!v)return g.apply(D,O),D;break}}return(le||sn(v,J))(O,w,!A,D,!w||$t.test(v)&&en(w.parentNode)||w),D}E.sortStable=R.split("").sort(_e).join("")===R,Je(),E.sortDetached=ft(function(v){return v.compareDocumentPosition(b.createElement("fieldset"))&1}),d.find=ue,d.expr[":"]=d.expr.pseudos,d.unique=d.uniqueSort,ue.compile=sn,ue.select=Un,ue.setDocument=Je,ue.tokenize=wt,ue.escape=d.escapeSelector,ue.getText=d.text,ue.isXML=d.isXMLDoc,ue.selectors=d.expr,ue.support=d.support,ue.uniqueSort=d.uniqueSort})();var De=function(s,o,h){for(var f=[],m=h!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&d(s).is(h))break;f.push(s)}return f},We=function(s,o){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&h.push(s);return h},$e=d.expr.match.needsContext,Ue=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ve(s,o,h){return S(o)?d.grep(s,function(f,m){return!!o.call(f,m,f)!==h}):o.nodeType?d.grep(s,function(f){return f===o!==h}):typeof o!="string"?d.grep(s,function(f){return u.call(o,f)>-1!==h}):d.filter(o,s,h)}d.filter=function(s,o,h){var f=o[0];return h&&(s=":not("+s+")"),o.length===1&&f.nodeType===1?d.find.matchesSelector(f,s)?[f]:[]:d.find.matches(s,d.grep(o,function(m){return m.nodeType===1}))},d.fn.extend({find:function(s){var o,h,f=this.length,m=this;if(typeof s!="string")return this.pushStack(d(s).filter(function(){for(o=0;o<f;o++)if(d.contains(m[o],this))return!0}));for(h=this.pushStack([]),o=0;o<f;o++)d.find(s,m[o],h);return f>1?d.uniqueSort(h):h},filter:function(s){return this.pushStack(Ve(this,s||[],!1))},not:function(s){return this.pushStack(Ve(this,s||[],!0))},is:function(s){return!!Ve(this,typeof s=="string"&&$e.test(s)?d(s):s||[],!1).length}});var Oe,et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,He=d.fn.init=function(s,o,h){var f,m;if(!s)return this;if(h=h||Oe,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?f=[null,s,null]:f=et.exec(s),f&&(f[1]||!o))if(f[1]){if(o=o instanceof d?o[0]:o,d.merge(this,d.parseHTML(f[1],o&&o.nodeType?o.ownerDocument||o:I,!0)),Ue.test(f[1])&&d.isPlainObject(o))for(f in o)S(this[f])?this[f](o[f]):this.attr(f,o[f]);return this}else return m=I.getElementById(f[2]),m&&(this[0]=m,this.length=1),this;else return!o||o.jquery?(o||h).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(S(s))return h.ready!==void 0?h.ready(s):s(d)}return d.makeArray(s,this)};He.prototype=d.fn,Oe=d(I);var Vn=/^(?:parents|prev(?:Until|All))/,Hn={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({has:function(s){var o=d(s,this),h=o.length;return this.filter(function(){for(var f=0;f<h;f++)if(d.contains(this,o[f]))return!0})},closest:function(s,o){var h,f=0,m=this.length,g=[],b=typeof s!="string"&&d(s);if(!$e.test(s)){for(;f<m;f++)for(h=this[f];h&&h!==o;h=h.parentNode)if(h.nodeType<11&&(b?b.index(h)>-1:h.nodeType===1&&d.find.matchesSelector(h,s))){g.push(h);break}}return this.pushStack(g.length>1?d.uniqueSort(g):g)},index:function(s){return s?typeof s=="string"?u.call(d(s),this[0]):u.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function rn(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}d.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return De(s,"parentNode")},parentsUntil:function(s,o,h){return De(s,"parentNode",h)},next:function(s){return rn(s,"nextSibling")},prev:function(s){return rn(s,"previousSibling")},nextAll:function(s){return De(s,"nextSibling")},prevAll:function(s){return De(s,"previousSibling")},nextUntil:function(s,o,h){return De(s,"nextSibling",h)},prevUntil:function(s,o,h){return De(s,"previousSibling",h)},siblings:function(s){return We((s.parentNode||{}).firstChild,s)},children:function(s){return We(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(H(s,"template")&&(s=s.content||s),d.merge([],s.childNodes))}},function(s,o){d.fn[s]=function(h,f){var m=d.map(this,o,h);return s.slice(-5)!=="Until"&&(f=h),f&&typeof f=="string"&&(m=d.filter(f,m)),this.length>1&&(Hn[s]||d.uniqueSort(m),Vn.test(s)&&m.reverse()),this.pushStack(m)}});var Ie=/[^\x20\t\r\n\f]+/g;function qn(s){var o={};return d.each(s.match(Ie)||[],function(h,f){o[f]=!0}),o}d.Callbacks=function(s){s=typeof s=="string"?qn(s):d.extend({},s);var o,h,f,m,g=[],b=[],M=-1,A=function(){for(m=m||s.once,f=o=!0;b.length;M=-1)for(h=b.shift();++M<g.length;)g[M].apply(h[0],h[1])===!1&&s.stopOnFalse&&(M=g.length,h=!1);s.memory||(h=!1),o=!1,m&&(h?g=[]:g="")},C={add:function(){return g&&(h&&!o&&(M=g.length-1,b.push(h)),function L(R){d.each(R,function(j,B){S(B)?(!s.unique||!C.has(B))&&g.push(B):B&&B.length&&Z(B)!=="string"&&L(B)})}(arguments),h&&!o&&A()),this},remove:function(){return d.each(arguments,function(L,R){for(var j;(j=d.inArray(R,g,j))>-1;)g.splice(j,1),j<=M&&M--}),this},has:function(L){return L?d.inArray(L,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return m=b=[],g=h="",this},disabled:function(){return!g},lock:function(){return m=b=[],!h&&!o&&(g=h=""),this},locked:function(){return!!m},fireWith:function(L,R){return m||(R=R||[],R=[L,R.slice?R.slice():R],b.push(R),o||A()),this},fire:function(){return C.fireWith(this,arguments),this},fired:function(){return!!f}};return C};function rt(s){return s}function Et(s){throw s}function an(s,o,h,f){var m;try{s&&S(m=s.promise)?m.call(s).done(o).fail(h):s&&S(m=s.then)?m.call(s,o,h):o.apply(void 0,[s].slice(f))}catch(g){h.apply(void 0,[g])}}d.extend({Deferred:function(s){var o=[["notify","progress",d.Callbacks("memory"),d.Callbacks("memory"),2],["resolve","done",d.Callbacks("once memory"),d.Callbacks("once memory"),0,"resolved"],["reject","fail",d.Callbacks("once memory"),d.Callbacks("once memory"),1,"rejected"]],h="pending",f={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(g){return f.then(null,g)},pipe:function(){var g=arguments;return d.Deferred(function(b){d.each(o,function(M,A){var C=S(g[A[4]])&&g[A[4]];m[A[1]](function(){var L=C&&C.apply(this,arguments);L&&S(L.promise)?L.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[A[0]+"With"](this,C?[L]:arguments)})}),g=null}).promise()},then:function(g,b,M){var A=0;function C(L,R,j,B){return function(){var X=this,ae=arguments,te=function(){var _e,Pe;if(!(L<A)){if(_e=j.apply(X,ae),_e===R.promise())throw new TypeError("Thenable self-resolution");Pe=_e&&(typeof _e=="object"||typeof _e=="function")&&_e.then,S(Pe)?B?Pe.call(_e,C(A,R,rt,B),C(A,R,Et,B)):(A++,Pe.call(_e,C(A,R,rt,B),C(A,R,Et,B),C(A,R,rt,R.notifyWith))):(j!==rt&&(X=void 0,ae=[_e]),(B||R.resolveWith)(X,ae))}},be=B?te:function(){try{te()}catch(_e){d.Deferred.exceptionHook&&d.Deferred.exceptionHook(_e,be.error),L+1>=A&&(j!==Et&&(X=void 0,ae=[_e]),R.rejectWith(X,ae))}};L?be():(d.Deferred.getErrorHook?be.error=d.Deferred.getErrorHook():d.Deferred.getStackHook&&(be.error=d.Deferred.getStackHook()),e.setTimeout(be))}}return d.Deferred(function(L){o[0][3].add(C(0,L,S(M)?M:rt,L.notifyWith)),o[1][3].add(C(0,L,S(g)?g:rt)),o[2][3].add(C(0,L,S(b)?b:Et))}).promise()},promise:function(g){return g!=null?d.extend(g,f):f}},m={};return d.each(o,function(g,b){var M=b[2],A=b[5];f[b[1]]=M.add,A&&M.add(function(){h=A},o[3-g][2].disable,o[3-g][3].disable,o[0][2].lock,o[0][3].lock),M.add(b[3].fire),m[b[0]]=function(){return m[b[0]+"With"](this===m?void 0:this,arguments),this},m[b[0]+"With"]=M.fireWith}),f.promise(m),s&&s.call(m,m),m},when:function(s){var o=arguments.length,h=o,f=Array(h),m=r.call(arguments),g=d.Deferred(),b=function(M){return function(A){f[M]=this,m[M]=arguments.length>1?r.call(arguments):A,--o||g.resolveWith(f,m)}};if(o<=1&&(an(s,g.done(b(h)).resolve,g.reject,!o),g.state()==="pending"||S(m[h]&&m[h].then)))return g.then();for(;h--;)an(m[h],b(h),g.reject);return g.promise()}});var Kn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&Kn.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},d.readyException=function(s){e.setTimeout(function(){throw s})};var Bt=d.Deferred();d.fn.ready=function(s){return Bt.then(s).catch(function(o){d.readyException(o)}),this},d.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--d.readyWait:d.isReady)||(d.isReady=!0,!(s!==!0&&--d.readyWait>0)&&Bt.resolveWith(I,[d]))}}),d.ready.then=Bt.then;function St(){I.removeEventListener("DOMContentLoaded",St),e.removeEventListener("load",St),d.ready()}I.readyState==="complete"||I.readyState!=="loading"&&!I.documentElement.doScroll?e.setTimeout(d.ready):(I.addEventListener("DOMContentLoaded",St),e.addEventListener("load",St));var qe=function(s,o,h,f,m,g,b){var M=0,A=s.length,C=h==null;if(Z(h)==="object"){m=!0;for(M in h)qe(s,o,M,h[M],!0,g,b)}else if(f!==void 0&&(m=!0,S(f)||(b=!0),C&&(b?(o.call(s,f),o=null):(C=o,o=function(L,R,j){return C.call(d(L),j)})),o))for(;M<A;M++)o(s[M],h,b?f:f.call(s[M],M,o(s[M],h)));return m?s:C?o.call(s):A?o(s[0],h):g},zn=/^-ms-/,Zn=/-([a-z])/g;function Yn(s,o){return o.toUpperCase()}function Le(s){return s.replace(zn,"ms-").replace(Zn,Yn)}var mt=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function gt(){this.expando=d.expando+gt.uid++}gt.uid=1,gt.prototype={cache:function(s){var o=s[this.expando];return o||(o={},mt(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,h){var f,m=this.cache(s);if(typeof o=="string")m[Le(o)]=h;else for(f in o)m[Le(f)]=o[f];return m},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][Le(o)]},access:function(s,o,h){return o===void 0||o&&typeof o=="string"&&h===void 0?this.get(s,o):(this.set(s,o,h),h!==void 0?h:o)},remove:function(s,o){var h,f=s[this.expando];if(f!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Le):(o=Le(o),o=o in f?[o]:o.match(Ie)||[]),h=o.length;h--;)delete f[o[h]];(o===void 0||d.isEmptyObject(f))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!d.isEmptyObject(o)}};var z=new gt,Ae=new gt,Gn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Qn=/[A-Z]/g;function Jn(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Gn.test(s)?JSON.parse(s):s}function on(s,o,h){var f;if(h===void 0&&s.nodeType===1)if(f="data-"+o.replace(Qn,"-$&").toLowerCase(),h=s.getAttribute(f),typeof h=="string"){try{h=Jn(h)}catch{}Ae.set(s,o,h)}else h=void 0;return h}d.extend({hasData:function(s){return Ae.hasData(s)||z.hasData(s)},data:function(s,o,h){return Ae.access(s,o,h)},removeData:function(s,o){Ae.remove(s,o)},_data:function(s,o,h){return z.access(s,o,h)},_removeData:function(s,o){z.remove(s,o)}}),d.fn.extend({data:function(s,o){var h,f,m,g=this[0],b=g&&g.attributes;if(s===void 0){if(this.length&&(m=Ae.get(g),g.nodeType===1&&!z.get(g,"hasDataAttrs"))){for(h=b.length;h--;)b[h]&&(f=b[h].name,f.indexOf("data-")===0&&(f=Le(f.slice(5)),on(g,f,m[f])));z.set(g,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){Ae.set(this,s)}):qe(this,function(M){var A;if(g&&M===void 0)return A=Ae.get(g,s),A!==void 0||(A=on(g,s),A!==void 0)?A:void 0;this.each(function(){Ae.set(this,s,M)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ae.remove(this,s)})}}),d.extend({queue:function(s,o,h){var f;if(s)return o=(o||"fx")+"queue",f=z.get(s,o),h&&(!f||Array.isArray(h)?f=z.access(s,o,d.makeArray(h)):f.push(h)),f||[]},dequeue:function(s,o){o=o||"fx";var h=d.queue(s,o),f=h.length,m=h.shift(),g=d._queueHooks(s,o),b=function(){d.dequeue(s,o)};m==="inprogress"&&(m=h.shift(),f--),m&&(o==="fx"&&h.unshift("inprogress"),delete g.stop,m.call(s,b,g)),!f&&g&&g.empty.fire()},_queueHooks:function(s,o){var h=o+"queueHooks";return z.get(s,h)||z.access(s,h,{empty:d.Callbacks("once memory").add(function(){z.remove(s,[o+"queue",h])})})}}),d.fn.extend({queue:function(s,o){var h=2;return typeof s!="string"&&(o=s,s="fx",h--),arguments.length<h?d.queue(this[0],s):o===void 0?this:this.each(function(){var f=d.queue(this,s,o);d._queueHooks(this,s),s==="fx"&&f[0]!=="inprogress"&&d.dequeue(this,s)})},dequeue:function(s){return this.each(function(){d.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var h,f=1,m=d.Deferred(),g=this,b=this.length,M=function(){--f||m.resolveWith(g,[g])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";b--;)h=z.get(g[b],s+"queueHooks"),h&&h.empty&&(f++,h.empty.add(M));return M(),m.promise(o)}});var cn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_t=new RegExp("^(?:([+-])=|)("+cn+")([a-z%]*)$","i"),Ke=["Top","Right","Bottom","Left"],tt=I.documentElement,at=function(s){return d.contains(s.ownerDocument,s)},Xn={composed:!0};tt.getRootNode&&(at=function(s){return d.contains(s.ownerDocument,s)||s.getRootNode(Xn)===s.ownerDocument});var Ct=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&at(s)&&d.css(s,"display")==="none"};function hn(s,o,h,f){var m,g,b=20,M=f?function(){return f.cur()}:function(){return d.css(s,o,"")},A=M(),C=h&&h[3]||(d.cssNumber[o]?"":"px"),L=s.nodeType&&(d.cssNumber[o]||C!=="px"&&+A)&&_t.exec(d.css(s,o));if(L&&L[3]!==C){for(A=A/2,C=C||L[3],L=+A||1;b--;)d.style(s,o,L+C),(1-g)*(1-(g=M()/A||.5))<=0&&(b=0),L=L/g;L=L*2,d.style(s,o,L+C),h=h||[]}return h&&(L=+L||+A||0,m=h[1]?L+(h[1]+1)*h[2]:+h[2],f&&(f.unit=C,f.start=L,f.end=m)),m}var un={};function $n(s){var o,h=s.ownerDocument,f=s.nodeName,m=un[f];return m||(o=h.body.appendChild(h.createElement(f)),m=d.css(o,"display"),o.parentNode.removeChild(o),m==="none"&&(m="block"),un[f]=m,m)}function ot(s,o){for(var h,f,m=[],g=0,b=s.length;g<b;g++)f=s[g],f.style&&(h=f.style.display,o?(h==="none"&&(m[g]=z.get(f,"display")||null,m[g]||(f.style.display="")),f.style.display===""&&Ct(f)&&(m[g]=$n(f))):h!=="none"&&(m[g]="none",z.set(f,"display",h)));for(g=0;g<b;g++)m[g]!=null&&(s[g].style.display=m[g]);return s}d.fn.extend({show:function(){return ot(this,!0)},hide:function(){return ot(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Ct(this)?d(this).show():d(this).hide()})}});var bt=/^(?:checkbox|radio)$/i,dn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,fn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=I.createDocumentFragment(),o=s.appendChild(I.createElement("div")),h=I.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),o.appendChild(h),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var Ee={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ee.tbody=Ee.tfoot=Ee.colgroup=Ee.caption=Ee.thead,Ee.th=Ee.td,E.option||(Ee.optgroup=Ee.option=[1,"<select multiple='multiple'>","</select>"]);function Me(s,o){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(o||"*"):h=[],o===void 0||o&&H(s,o)?d.merge([s],h):h}function Nt(s,o){for(var h=0,f=s.length;h<f;h++)z.set(s[h],"globalEval",!o||z.get(o[h],"globalEval"))}var el=/<|&#?\w+;/;function pn(s,o,h,f,m){for(var g,b,M,A,C,L,R=o.createDocumentFragment(),j=[],B=0,X=s.length;B<X;B++)if(g=s[B],g||g===0)if(Z(g)==="object")d.merge(j,g.nodeType?[g]:g);else if(!el.test(g))j.push(o.createTextNode(g));else{for(b=b||R.appendChild(o.createElement("div")),M=(dn.exec(g)||["",""])[1].toLowerCase(),A=Ee[M]||Ee._default,b.innerHTML=A[1]+d.htmlPrefilter(g)+A[2],L=A[0];L--;)b=b.lastChild;d.merge(j,b.childNodes),b=R.firstChild,b.textContent=""}for(R.textContent="",B=0;g=j[B++];){if(f&&d.inArray(g,f)>-1){m&&m.push(g);continue}if(C=at(g),b=Me(R.appendChild(g),"script"),C&&Nt(b),h)for(L=0;g=b[L++];)fn.test(g.type||"")&&h.push(g)}return R}var mn=/^([^.]*)(?:\.(.+)|)/;function ct(){return!0}function ht(){return!1}function Ft(s,o,h,f,m,g){var b,M;if(typeof o=="object"){typeof h!="string"&&(f=f||h,h=void 0);for(M in o)Ft(s,M,h,f,o[M],g);return s}if(f==null&&m==null?(m=h,f=h=void 0):m==null&&(typeof h=="string"?(m=f,f=void 0):(m=f,f=h,h=void 0)),m===!1)m=ht;else if(!m)return s;return g===1&&(b=m,m=function(A){return d().off(A),b.apply(this,arguments)},m.guid=b.guid||(b.guid=d.guid++)),s.each(function(){d.event.add(this,o,m,f,h)})}d.event={global:{},add:function(s,o,h,f,m){var g,b,M,A,C,L,R,j,B,X,ae,te=z.get(s);if(mt(s))for(h.handler&&(g=h,h=g.handler,m=g.selector),m&&d.find.matchesSelector(tt,m),h.guid||(h.guid=d.guid++),(A=te.events)||(A=te.events=Object.create(null)),(b=te.handle)||(b=te.handle=function(be){return typeof d<"u"&&d.event.triggered!==be.type?d.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match(Ie)||[""],C=o.length;C--;)M=mn.exec(o[C])||[],B=ae=M[1],X=(M[2]||"").split(".").sort(),B&&(R=d.event.special[B]||{},B=(m?R.delegateType:R.bindType)||B,R=d.event.special[B]||{},L=d.extend({type:B,origType:ae,data:f,handler:h,guid:h.guid,selector:m,needsContext:m&&d.expr.match.needsContext.test(m),namespace:X.join(".")},g),(j=A[B])||(j=A[B]=[],j.delegateCount=0,(!R.setup||R.setup.call(s,f,X,b)===!1)&&s.addEventListener&&s.addEventListener(B,b)),R.add&&(R.add.call(s,L),L.handler.guid||(L.handler.guid=h.guid)),m?j.splice(j.delegateCount++,0,L):j.push(L),d.event.global[B]=!0)},remove:function(s,o,h,f,m){var g,b,M,A,C,L,R,j,B,X,ae,te=z.hasData(s)&&z.get(s);if(!(!te||!(A=te.events))){for(o=(o||"").match(Ie)||[""],C=o.length;C--;){if(M=mn.exec(o[C])||[],B=ae=M[1],X=(M[2]||"").split(".").sort(),!B){for(B in A)d.event.remove(s,B+o[C],h,f,!0);continue}for(R=d.event.special[B]||{},B=(f?R.delegateType:R.bindType)||B,j=A[B]||[],M=M[2]&&new RegExp("(^|\\.)"+X.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=g=j.length;g--;)L=j[g],(m||ae===L.origType)&&(!h||h.guid===L.guid)&&(!M||M.test(L.namespace))&&(!f||f===L.selector||f==="**"&&L.selector)&&(j.splice(g,1),L.selector&&j.delegateCount--,R.remove&&R.remove.call(s,L));b&&!j.length&&((!R.teardown||R.teardown.call(s,X,te.handle)===!1)&&d.removeEvent(s,B,te.handle),delete A[B])}d.isEmptyObject(A)&&z.remove(s,"handle events")}},dispatch:function(s){var o,h,f,m,g,b,M=new Array(arguments.length),A=d.event.fix(s),C=(z.get(this,"events")||Object.create(null))[A.type]||[],L=d.event.special[A.type]||{};for(M[0]=A,o=1;o<arguments.length;o++)M[o]=arguments[o];if(A.delegateTarget=this,!(L.preDispatch&&L.preDispatch.call(this,A)===!1)){for(b=d.event.handlers.call(this,A,C),o=0;(m=b[o++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(g=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||g.namespace===!1||A.rnamespace.test(g.namespace))&&(A.handleObj=g,A.data=g.data,f=((d.event.special[g.origType]||{}).handle||g.handler).apply(m.elem,M),f!==void 0&&(A.result=f)===!1&&(A.preventDefault(),A.stopPropagation()));return L.postDispatch&&L.postDispatch.call(this,A),A.result}},handlers:function(s,o){var h,f,m,g,b,M=[],A=o.delegateCount,C=s.target;if(A&&C.nodeType&&!(s.type==="click"&&s.button>=1)){for(;C!==this;C=C.parentNode||this)if(C.nodeType===1&&!(s.type==="click"&&C.disabled===!0)){for(g=[],b={},h=0;h<A;h++)f=o[h],m=f.selector+" ",b[m]===void 0&&(b[m]=f.needsContext?d(m,this).index(C)>-1:d.find(m,this,null,[C]).length),b[m]&&g.push(f);g.length&&M.push({elem:C,handlers:g})}}return C=this,A<o.length&&M.push({elem:C,handlers:o.slice(A)}),M},addProp:function(s,o){Object.defineProperty(d.Event.prototype,s,{enumerable:!0,configurable:!0,get:S(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[d.expando]?s:new d.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return bt.test(o.type)&&o.click&&H(o,"input")&&Dt(o,"click",!0),!1},trigger:function(s){var o=this||s;return bt.test(o.type)&&o.click&&H(o,"input")&&Dt(o,"click"),!0},_default:function(s){var o=s.target;return bt.test(o.type)&&o.click&&H(o,"input")&&z.get(o,"click")||H(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Dt(s,o,h){if(!h){z.get(s,o)===void 0&&d.event.add(s,o,ct);return}z.set(s,o,!1),d.event.add(s,o,{namespace:!1,handler:function(f){var m,g=z.get(this,o);if(f.isTrigger&1&&this[o]){if(g)(d.event.special[o]||{}).delegateType&&f.stopPropagation();else if(g=r.call(arguments),z.set(this,o,g),this[o](),m=z.get(this,o),z.set(this,o,!1),g!==m)return f.stopImmediatePropagation(),f.preventDefault(),m}else g&&(z.set(this,o,d.event.trigger(g[0],g.slice(1),this)),f.stopPropagation(),f.isImmediatePropagationStopped=ct)}})}d.removeEvent=function(s,o,h){s.removeEventListener&&s.removeEventListener(o,h)},d.Event=function(s,o){if(!(this instanceof d.Event))return new d.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?ct:ht,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&d.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ht,isPropagationStopped:ht,isImmediatePropagationStopped:ht,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=ct,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=ct,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=ct,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp),d.each({focus:"focusin",blur:"focusout"},function(s,o){function h(f){if(I.documentMode){var m=z.get(this,"handle"),g=d.event.fix(f);g.type=f.type==="focusin"?"focus":"blur",g.isSimulated=!0,m(f),g.target===g.currentTarget&&m(g)}else d.event.simulate(o,f.target,d.event.fix(f))}d.event.special[s]={setup:function(){var f;if(Dt(this,s,!0),I.documentMode)f=z.get(this,o),f||this.addEventListener(o,h),z.set(this,o,(f||0)+1);else return!1},trigger:function(){return Dt(this,s),!0},teardown:function(){var f;if(I.documentMode)f=z.get(this,o)-1,f?z.set(this,o,f):(this.removeEventListener(o,h),z.remove(this,o));else return!1},_default:function(f){return z.get(f.target,s)},delegateType:o},d.event.special[o]={setup:function(){var f=this.ownerDocument||this.document||this,m=I.documentMode?this:f,g=z.get(m,o);g||(I.documentMode?this.addEventListener(o,h):f.addEventListener(s,h,!0)),z.set(m,o,(g||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,m=I.documentMode?this:f,g=z.get(m,o)-1;g?z.set(m,o,g):(I.documentMode?this.removeEventListener(o,h):f.removeEventListener(s,h,!0),z.remove(m,o))}}}),d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){d.event.special[s]={delegateType:o,bindType:o,handle:function(h){var f,m=this,g=h.relatedTarget,b=h.handleObj;return(!g||g!==m&&!d.contains(m,g))&&(h.type=b.origType,f=b.handler.apply(this,arguments),h.type=o),f}}}),d.fn.extend({on:function(s,o,h,f){return Ft(this,s,o,h,f)},one:function(s,o,h,f){return Ft(this,s,o,h,f,1)},off:function(s,o,h){var f,m;if(s&&s.preventDefault&&s.handleObj)return f=s.handleObj,d(s.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof s=="object"){for(m in s)this.off(m,o,s[m]);return this}return(o===!1||typeof o=="function")&&(h=o,o=void 0),h===!1&&(h=ht),this.each(function(){d.event.remove(this,s,h,o)})}});var tl=/<script|<style|<link/i,nl=/checked\s*(?:[^=]|=\s*.checked.)/i,ll=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function gn(s,o){return H(s,"table")&&H(o.nodeType!==11?o:o.firstChild,"tr")&&d(s).children("tbody")[0]||s}function il(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function sl(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function _n(s,o){var h,f,m,g,b,M,A;if(o.nodeType===1){if(z.hasData(s)&&(g=z.get(s),A=g.events,A)){z.remove(o,"handle events");for(m in A)for(h=0,f=A[m].length;h<f;h++)d.event.add(o,m,A[m][h])}Ae.hasData(s)&&(b=Ae.access(s),M=d.extend({},b),Ae.set(o,M))}}function rl(s,o){var h=o.nodeName.toLowerCase();h==="input"&&bt.test(s.type)?o.checked=s.checked:(h==="input"||h==="textarea")&&(o.defaultValue=s.defaultValue)}function ut(s,o,h,f){o=a(o);var m,g,b,M,A,C,L=0,R=s.length,j=R-1,B=o[0],X=S(B);if(X||R>1&&typeof B=="string"&&!E.checkClone&&nl.test(B))return s.each(function(ae){var te=s.eq(ae);X&&(o[0]=B.call(this,ae,te.html())),ut(te,o,h,f)});if(R&&(m=pn(o,s[0].ownerDocument,!1,s,f),g=m.firstChild,m.childNodes.length===1&&(m=g),g||f)){for(b=d.map(Me(m,"script"),il),M=b.length;L<R;L++)A=m,L!==j&&(A=d.clone(A,!0,!0),M&&d.merge(b,Me(A,"script"))),h.call(s[L],A,L);if(M)for(C=b[b.length-1].ownerDocument,d.map(b,sl),L=0;L<M;L++)A=b[L],fn.test(A.type||"")&&!z.access(A,"globalEval")&&d.contains(C,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?d._evalUrl&&!A.noModule&&d._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},C):K(A.textContent.replace(ll,""),A,C))}return s}function bn(s,o,h){for(var f,m=o?d.filter(o,s):s,g=0;(f=m[g])!=null;g++)!h&&f.nodeType===1&&d.cleanData(Me(f)),f.parentNode&&(h&&at(f)&&Nt(Me(f,"script")),f.parentNode.removeChild(f));return s}d.extend({htmlPrefilter:function(s){return s},clone:function(s,o,h){var f,m,g,b,M=s.cloneNode(!0),A=at(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!d.isXMLDoc(s))for(b=Me(M),g=Me(s),f=0,m=g.length;f<m;f++)rl(g[f],b[f]);if(o)if(h)for(g=g||Me(s),b=b||Me(M),f=0,m=g.length;f<m;f++)_n(g[f],b[f]);else _n(s,M);return b=Me(M,"script"),b.length>0&&Nt(b,!A&&Me(s,"script")),M},cleanData:function(s){for(var o,h,f,m=d.event.special,g=0;(h=s[g])!==void 0;g++)if(mt(h)){if(o=h[z.expando]){if(o.events)for(f in o.events)m[f]?d.event.remove(h,f):d.removeEvent(h,f,o.handle);h[z.expando]=void 0}h[Ae.expando]&&(h[Ae.expando]=void 0)}}}),d.fn.extend({detach:function(s){return bn(this,s,!0)},remove:function(s){return bn(this,s)},text:function(s){return qe(this,function(o){return o===void 0?d.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return ut(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=gn(this,s);o.appendChild(s)}})},prepend:function(){return ut(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=gn(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return ut(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return ut(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(d.cleanData(Me(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return d.clone(this,s,o)})},html:function(s){return qe(this,function(o){var h=this[0]||{},f=0,m=this.length;if(o===void 0&&h.nodeType===1)return h.innerHTML;if(typeof o=="string"&&!tl.test(o)&&!Ee[(dn.exec(o)||["",""])[1].toLowerCase()]){o=d.htmlPrefilter(o);try{for(;f<m;f++)h=this[f]||{},h.nodeType===1&&(d.cleanData(Me(h,!1)),h.innerHTML=o);h=0}catch{}}h&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return ut(this,arguments,function(o){var h=this.parentNode;d.inArray(this,s)<0&&(d.cleanData(Me(this)),h&&h.replaceChild(o,this))},s)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){d.fn[s]=function(h){for(var f,m=[],g=d(h),b=g.length-1,M=0;M<=b;M++)f=M===b?this:this.clone(!0),d(g[M])[o](f),c.apply(m,f.get());return this.pushStack(m)}});var Wt=new RegExp("^("+cn+")(?!px)[a-z%]+$","i"),Ut=/^--/,jt=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},yn=function(s,o,h){var f,m,g={};for(m in o)g[m]=s.style[m],s.style[m]=o[m];f=h.call(s);for(m in o)s.style[m]=g[m];return f},al=new RegExp(Ke.join("|"),"i");(function(){function s(){if(C){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",C.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",tt.appendChild(A).appendChild(C);var L=e.getComputedStyle(C);h=L.top!=="1%",M=o(L.marginLeft)===12,C.style.right="60%",g=o(L.right)===36,f=o(L.width)===36,C.style.position="absolute",m=o(C.offsetWidth/3)===12,tt.removeChild(A),C=null}}function o(L){return Math.round(parseFloat(L))}var h,f,m,g,b,M,A=I.createElement("div"),C=I.createElement("div");C.style&&(C.style.backgroundClip="content-box",C.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=C.style.backgroundClip==="content-box",d.extend(E,{boxSizingReliable:function(){return s(),f},pixelBoxStyles:function(){return s(),g},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),M},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var L,R,j,B;return b==null&&(L=I.createElement("table"),R=I.createElement("tr"),j=I.createElement("div"),L.style.cssText="position:absolute;left:-11111px;border-collapse:separate",R.style.cssText="box-sizing:content-box;border:1px solid",R.style.height="1px",j.style.height="9px",j.style.display="block",tt.appendChild(L).appendChild(R).appendChild(j),B=e.getComputedStyle(R),b=parseInt(B.height,10)+parseInt(B.borderTopWidth,10)+parseInt(B.borderBottomWidth,10)===R.offsetHeight,tt.removeChild(L)),b}}))})();function yt(s,o,h){var f,m,g,b,M=Ut.test(o),A=s.style;return h=h||jt(s),h&&(b=h.getPropertyValue(o)||h[o],M&&b&&(b=b.replace(ye,"$1")||void 0),b===""&&!at(s)&&(b=d.style(s,o)),!E.pixelBoxStyles()&&Wt.test(b)&&al.test(o)&&(f=A.width,m=A.minWidth,g=A.maxWidth,A.minWidth=A.maxWidth=A.width=b,b=h.width,A.width=f,A.minWidth=m,A.maxWidth=g)),b!==void 0?b+"":b}function vn(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var xn=["Webkit","Moz","ms"],An=I.createElement("div").style,Mn={};function ol(s){for(var o=s[0].toUpperCase()+s.slice(1),h=xn.length;h--;)if(s=xn[h]+o,s in An)return s}function Vt(s){var o=d.cssProps[s]||Mn[s];return o||(s in An?s:Mn[s]=ol(s)||s)}var cl=/^(none|table(?!-c[ea]).+)/,hl={position:"absolute",visibility:"hidden",display:"block"},kn={letterSpacing:"0",fontWeight:"400"};function wn(s,o,h){var f=_t.exec(o);return f?Math.max(0,f[2]-(h||0))+(f[3]||"px"):o}function Ht(s,o,h,f,m,g){var b=o==="width"?1:0,M=0,A=0,C=0;if(h===(f?"border":"content"))return 0;for(;b<4;b+=2)h==="margin"&&(C+=d.css(s,h+Ke[b],!0,m)),f?(h==="content"&&(A-=d.css(s,"padding"+Ke[b],!0,m)),h!=="margin"&&(A-=d.css(s,"border"+Ke[b]+"Width",!0,m))):(A+=d.css(s,"padding"+Ke[b],!0,m),h!=="padding"?A+=d.css(s,"border"+Ke[b]+"Width",!0,m):M+=d.css(s,"border"+Ke[b]+"Width",!0,m));return!f&&g>=0&&(A+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-g-A-M-.5))||0),A+C}function En(s,o,h){var f=jt(s),m=!E.boxSizingReliable()||h,g=m&&d.css(s,"boxSizing",!1,f)==="border-box",b=g,M=yt(s,o,f),A="offset"+o[0].toUpperCase()+o.slice(1);if(Wt.test(M)){if(!h)return M;M="auto"}return(!E.boxSizingReliable()&&g||!E.reliableTrDimensions()&&H(s,"tr")||M==="auto"||!parseFloat(M)&&d.css(s,"display",!1,f)==="inline")&&s.getClientRects().length&&(g=d.css(s,"boxSizing",!1,f)==="border-box",b=A in s,b&&(M=s[A])),M=parseFloat(M)||0,M+Ht(s,o,h||(g?"border":"content"),b,f,M)+"px"}d.extend({cssHooks:{opacity:{get:function(s,o){if(o){var h=yt(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,o,h,f){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,g,b,M=Le(o),A=Ut.test(o),C=s.style;if(A||(o=Vt(M)),b=d.cssHooks[o]||d.cssHooks[M],h!==void 0){if(g=typeof h,g==="string"&&(m=_t.exec(h))&&m[1]&&(h=hn(s,o,m),g="number"),h==null||h!==h)return;g==="number"&&!A&&(h+=m&&m[3]||(d.cssNumber[M]?"":"px")),!E.clearCloneStyle&&h===""&&o.indexOf("background")===0&&(C[o]="inherit"),(!b||!("set"in b)||(h=b.set(s,h,f))!==void 0)&&(A?C.setProperty(o,h):C[o]=h)}else return b&&"get"in b&&(m=b.get(s,!1,f))!==void 0?m:C[o]}},css:function(s,o,h,f){var m,g,b,M=Le(o),A=Ut.test(o);return A||(o=Vt(M)),b=d.cssHooks[o]||d.cssHooks[M],b&&"get"in b&&(m=b.get(s,!0,h)),m===void 0&&(m=yt(s,o,f)),m==="normal"&&o in kn&&(m=kn[o]),h===""||h?(g=parseFloat(m),h===!0||isFinite(g)?g||0:m):m}}),d.each(["height","width"],function(s,o){d.cssHooks[o]={get:function(h,f,m){if(f)return cl.test(d.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?yn(h,hl,function(){return En(h,o,m)}):En(h,o,m)},set:function(h,f,m){var g,b=jt(h),M=!E.scrollboxSize()&&b.position==="absolute",A=M||m,C=A&&d.css(h,"boxSizing",!1,b)==="border-box",L=m?Ht(h,o,m,C,b):0;return C&&M&&(L-=Math.ceil(h["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(b[o])-Ht(h,o,"border",!1,b)-.5)),L&&(g=_t.exec(f))&&(g[3]||"px")!=="px"&&(h.style[o]=f,f=d.css(h,o)),wn(h,f,L)}}}),d.cssHooks.marginLeft=vn(E.reliableMarginLeft,function(s,o){if(o)return(parseFloat(yt(s,"marginLeft"))||s.getBoundingClientRect().left-yn(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(s,o){d.cssHooks[s+o]={expand:function(h){for(var f=0,m={},g=typeof h=="string"?h.split(" "):[h];f<4;f++)m[s+Ke[f]+o]=g[f]||g[f-2]||g[0];return m}},s!=="margin"&&(d.cssHooks[s+o].set=wn)}),d.fn.extend({css:function(s,o){return qe(this,function(h,f,m){var g,b,M={},A=0;if(Array.isArray(f)){for(g=jt(h),b=f.length;A<b;A++)M[f[A]]=d.css(h,f[A],!1,g);return M}return m!==void 0?d.style(h,f,m):d.css(h,f)},s,o,arguments.length>1)}});function ke(s,o,h,f,m){return new ke.prototype.init(s,o,h,f,m)}d.Tween=ke,ke.prototype={constructor:ke,init:function(s,o,h,f,m,g){this.elem=s,this.prop=h,this.easing=m||d.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=f,this.unit=g||(d.cssNumber[h]?"":"px")},cur:function(){var s=ke.propHooks[this.prop];return s&&s.get?s.get(this):ke.propHooks._default.get(this)},run:function(s){var o,h=ke.propHooks[this.prop];return this.options.duration?this.pos=o=d.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):ke.propHooks._default.set(this),this}},ke.prototype.init.prototype=ke.prototype,ke.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=d.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){d.fx.step[s.prop]?d.fx.step[s.prop](s):s.elem.nodeType===1&&(d.cssHooks[s.prop]||s.elem.style[Vt(s.prop)]!=null)?d.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ke.propHooks.scrollTop=ke.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},d.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},d.fx=ke.prototype.init,d.fx.step={};var dt,Tt,ul=/^(?:toggle|show|hide)$/,dl=/queueHooks$/;function qt(){Tt&&(I.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(qt):e.setTimeout(qt,d.fx.interval),d.fx.tick())}function Sn(){return e.setTimeout(function(){dt=void 0}),dt=Date.now()}function Ot(s,o){var h,f=0,m={height:s};for(o=o?1:0;f<4;f+=2-o)h=Ke[f],m["margin"+h]=m["padding"+h]=s;return o&&(m.opacity=m.width=s),m}function Cn(s,o,h){for(var f,m=(je.tweeners[o]||[]).concat(je.tweeners["*"]),g=0,b=m.length;g<b;g++)if(f=m[g].call(h,o,s))return f}function fl(s,o,h){var f,m,g,b,M,A,C,L,R="width"in o||"height"in o,j=this,B={},X=s.style,ae=s.nodeType&&Ct(s),te=z.get(s,"fxshow");h.queue||(b=d._queueHooks(s,"fx"),b.unqueued==null&&(b.unqueued=0,M=b.empty.fire,b.empty.fire=function(){b.unqueued||M()}),b.unqueued++,j.always(function(){j.always(function(){b.unqueued--,d.queue(s,"fx").length||b.empty.fire()})}));for(f in o)if(m=o[f],ul.test(m)){if(delete o[f],g=g||m==="toggle",m===(ae?"hide":"show"))if(m==="show"&&te&&te[f]!==void 0)ae=!0;else continue;B[f]=te&&te[f]||d.style(s,f)}if(A=!d.isEmptyObject(o),!(!A&&d.isEmptyObject(B))){R&&s.nodeType===1&&(h.overflow=[X.overflow,X.overflowX,X.overflowY],C=te&&te.display,C==null&&(C=z.get(s,"display")),L=d.css(s,"display"),L==="none"&&(C?L=C:(ot([s],!0),C=s.style.display||C,L=d.css(s,"display"),ot([s]))),(L==="inline"||L==="inline-block"&&C!=null)&&d.css(s,"float")==="none"&&(A||(j.done(function(){X.display=C}),C==null&&(L=X.display,C=L==="none"?"":L)),X.display="inline-block")),h.overflow&&(X.overflow="hidden",j.always(function(){X.overflow=h.overflow[0],X.overflowX=h.overflow[1],X.overflowY=h.overflow[2]})),A=!1;for(f in B)A||(te?"hidden"in te&&(ae=te.hidden):te=z.access(s,"fxshow",{display:C}),g&&(te.hidden=!ae),ae&&ot([s],!0),j.done(function(){ae||ot([s]),z.remove(s,"fxshow");for(f in B)d.style(s,f,B[f])})),A=Cn(ae?te[f]:0,f,j),f in te||(te[f]=A.start,ae&&(A.end=A.start,A.start=0))}}function pl(s,o){var h,f,m,g,b;for(h in s)if(f=Le(h),m=o[f],g=s[h],Array.isArray(g)&&(m=g[1],g=s[h]=g[0]),h!==f&&(s[f]=g,delete s[h]),b=d.cssHooks[f],b&&"expand"in b){g=b.expand(g),delete s[f];for(h in g)h in s||(s[h]=g[h],o[h]=m)}else o[f]=m}function je(s,o,h){var f,m,g=0,b=je.prefilters.length,M=d.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var R=dt||Sn(),j=Math.max(0,C.startTime+C.duration-R),B=j/C.duration||0,X=1-B,ae=0,te=C.tweens.length;ae<te;ae++)C.tweens[ae].run(X);return M.notifyWith(s,[C,X,j]),X<1&&te?j:(te||M.notifyWith(s,[C,1,0]),M.resolveWith(s,[C]),!1)},C=M.promise({elem:s,props:d.extend({},o),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},h),originalProperties:o,originalOptions:h,startTime:dt||Sn(),duration:h.duration,tweens:[],createTween:function(R,j){var B=d.Tween(s,C.opts,R,j,C.opts.specialEasing[R]||C.opts.easing);return C.tweens.push(B),B},stop:function(R){var j=0,B=R?C.tweens.length:0;if(m)return this;for(m=!0;j<B;j++)C.tweens[j].run(1);return R?(M.notifyWith(s,[C,1,0]),M.resolveWith(s,[C,R])):M.rejectWith(s,[C,R]),this}}),L=C.props;for(pl(L,C.opts.specialEasing);g<b;g++)if(f=je.prefilters[g].call(C,s,L,C.opts),f)return S(f.stop)&&(d._queueHooks(C.elem,C.opts.queue).stop=f.stop.bind(f)),f;return d.map(L,Cn,C),S(C.opts.start)&&C.opts.start.call(s,C),C.progress(C.opts.progress).done(C.opts.done,C.opts.complete).fail(C.opts.fail).always(C.opts.always),d.fx.timer(d.extend(A,{elem:s,anim:C,queue:C.opts.queue})),C}d.Animation=d.extend(je,{tweeners:{"*":[function(s,o){var h=this.createTween(s,o);return hn(h.elem,s,_t.exec(o),h),h}]},tweener:function(s,o){S(s)?(o=s,s=["*"]):s=s.match(Ie);for(var h,f=0,m=s.length;f<m;f++)h=s[f],je.tweeners[h]=je.tweeners[h]||[],je.tweeners[h].unshift(o)},prefilters:[fl],prefilter:function(s,o){o?je.prefilters.unshift(s):je.prefilters.push(s)}}),d.speed=function(s,o,h){var f=s&&typeof s=="object"?d.extend({},s):{complete:h||!h&&o||S(s)&&s,duration:s,easing:h&&o||o&&!S(o)&&o};return d.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in d.fx.speeds?f.duration=d.fx.speeds[f.duration]:f.duration=d.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){S(f.old)&&f.old.call(this),f.queue&&d.dequeue(this,f.queue)},f},d.fn.extend({fadeTo:function(s,o,h,f){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:o},s,h,f)},animate:function(s,o,h,f){var m=d.isEmptyObject(s),g=d.speed(o,h,f),b=function(){var M=je(this,d.extend({},s),g);(m||z.get(this,"finish"))&&M.stop(!0)};return b.finish=b,m||g.queue===!1?this.each(b):this.queue(g.queue,b)},stop:function(s,o,h){var f=function(m){var g=m.stop;delete m.stop,g(h)};return typeof s!="string"&&(h=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var m=!0,g=s!=null&&s+"queueHooks",b=d.timers,M=z.get(this);if(g)M[g]&&M[g].stop&&f(M[g]);else for(g in M)M[g]&&M[g].stop&&dl.test(g)&&f(M[g]);for(g=b.length;g--;)b[g].elem===this&&(s==null||b[g].queue===s)&&(b[g].anim.stop(h),m=!1,b.splice(g,1));(m||!h)&&d.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,h=z.get(this),f=h[s+"queue"],m=h[s+"queueHooks"],g=d.timers,b=f?f.length:0;for(h.finish=!0,d.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),o=g.length;o--;)g[o].elem===this&&g[o].queue===s&&(g[o].anim.stop(!0),g.splice(o,1));for(o=0;o<b;o++)f[o]&&f[o].finish&&f[o].finish.call(this);delete h.finish})}}),d.each(["toggle","show","hide"],function(s,o){var h=d.fn[o];d.fn[o]=function(f,m,g){return f==null||typeof f=="boolean"?h.apply(this,arguments):this.animate(Ot(o,!0),f,m,g)}}),d.each({slideDown:Ot("show"),slideUp:Ot("hide"),slideToggle:Ot("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){d.fn[s]=function(h,f,m){return this.animate(o,h,f,m)}}),d.timers=[],d.fx.tick=function(){var s,o=0,h=d.timers;for(dt=Date.now();o<h.length;o++)s=h[o],!s()&&h[o]===s&&h.splice(o--,1);h.length||d.fx.stop(),dt=void 0},d.fx.timer=function(s){d.timers.push(s),d.fx.start()},d.fx.interval=13,d.fx.start=function(){Tt||(Tt=!0,qt())},d.fx.stop=function(){Tt=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(s,o){return s=d.fx&&d.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(h,f){var m=e.setTimeout(h,s);f.stop=function(){e.clearTimeout(m)}})},function(){var s=I.createElement("input"),o=I.createElement("select"),h=o.appendChild(I.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=h.selected,s=I.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var Dn,vt=d.expr.attrHandle;d.fn.extend({attr:function(s,o){return qe(this,d.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){d.removeAttr(this,s)})}}),d.extend({attr:function(s,o,h){var f,m,g=s.nodeType;if(!(g===3||g===8||g===2)){if(typeof s.getAttribute>"u")return d.prop(s,o,h);if((g!==1||!d.isXMLDoc(s))&&(m=d.attrHooks[o.toLowerCase()]||(d.expr.match.bool.test(o)?Dn:void 0)),h!==void 0){if(h===null){d.removeAttr(s,o);return}return m&&"set"in m&&(f=m.set(s,h,o))!==void 0?f:(s.setAttribute(o,h+""),h)}return m&&"get"in m&&(f=m.get(s,o))!==null?f:(f=d.find.attr(s,o),f??void 0)}},attrHooks:{type:{set:function(s,o){if(!E.radioValue&&o==="radio"&&H(s,"input")){var h=s.value;return s.setAttribute("type",o),h&&(s.value=h),o}}}},removeAttr:function(s,o){var h,f=0,m=o&&o.match(Ie);if(m&&s.nodeType===1)for(;h=m[f++];)s.removeAttribute(h)}}),Dn={set:function(s,o,h){return o===!1?d.removeAttr(s,h):s.setAttribute(h,h),h}},d.each(d.expr.match.bool.source.match(/\w+/g),function(s,o){var h=vt[o]||d.find.attr;vt[o]=function(f,m,g){var b,M,A=m.toLowerCase();return g||(M=vt[A],vt[A]=b,b=h(f,m,g)!=null?A:null,vt[A]=M),b}});var ml=/^(?:input|select|textarea|button)$/i,gl=/^(?:a|area)$/i;d.fn.extend({prop:function(s,o){return qe(this,d.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[d.propFix[s]||s]})}}),d.extend({prop:function(s,o,h){var f,m,g=s.nodeType;if(!(g===3||g===8||g===2))return(g!==1||!d.isXMLDoc(s))&&(o=d.propFix[o]||o,m=d.propHooks[o]),h!==void 0?m&&"set"in m&&(f=m.set(s,h,o))!==void 0?f:s[o]=h:m&&"get"in m&&(f=m.get(s,o))!==null?f:s[o]},propHooks:{tabIndex:{get:function(s){var o=d.find.attr(s,"tabindex");return o?parseInt(o,10):ml.test(s.nodeName)||gl.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(d.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this});function nt(s){var o=s.match(Ie)||[];return o.join(" ")}function lt(s){return s.getAttribute&&s.getAttribute("class")||""}function Kt(s){return Array.isArray(s)?s:typeof s=="string"?s.match(Ie)||[]:[]}d.fn.extend({addClass:function(s){var o,h,f,m,g,b;return S(s)?this.each(function(M){d(this).addClass(s.call(this,M,lt(this)))}):(o=Kt(s),o.length?this.each(function(){if(f=lt(this),h=this.nodeType===1&&" "+nt(f)+" ",h){for(g=0;g<o.length;g++)m=o[g],h.indexOf(" "+m+" ")<0&&(h+=m+" ");b=nt(h),f!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(s){var o,h,f,m,g,b;return S(s)?this.each(function(M){d(this).removeClass(s.call(this,M,lt(this)))}):arguments.length?(o=Kt(s),o.length?this.each(function(){if(f=lt(this),h=this.nodeType===1&&" "+nt(f)+" ",h){for(g=0;g<o.length;g++)for(m=o[g];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");b=nt(h),f!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(s,o){var h,f,m,g,b=typeof s,M=b==="string"||Array.isArray(s);return S(s)?this.each(function(A){d(this).toggleClass(s.call(this,A,lt(this),o),o)}):typeof o=="boolean"&&M?o?this.addClass(s):this.removeClass(s):(h=Kt(s),this.each(function(){if(M)for(g=d(this),m=0;m<h.length;m++)f=h[m],g.hasClass(f)?g.removeClass(f):g.addClass(f);else(s===void 0||b==="boolean")&&(f=lt(this),f&&z.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||s===!1?"":z.get(this,"__className__")||""))}))},hasClass:function(s){var o,h,f=0;for(o=" "+s+" ";h=this[f++];)if(h.nodeType===1&&(" "+nt(lt(h))+" ").indexOf(o)>-1)return!0;return!1}});var _l=/\r/g;d.fn.extend({val:function(s){var o,h,f,m=this[0];return arguments.length?(f=S(s),this.each(function(g){var b;this.nodeType===1&&(f?b=s.call(this,g,d(this).val()):b=s,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=d.map(b,function(M){return M==null?"":M+""})),o=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,b,"value")===void 0)&&(this.value=b))})):m?(o=d.valHooks[m.type]||d.valHooks[m.nodeName.toLowerCase()],o&&"get"in o&&(h=o.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(_l,""):h??"")):void 0}}),d.extend({valHooks:{option:{get:function(s){var o=d.find.attr(s,"value");return o??nt(d.text(s))}},select:{get:function(s){var o,h,f,m=s.options,g=s.selectedIndex,b=s.type==="select-one",M=b?null:[],A=b?g+1:m.length;for(g<0?f=A:f=b?g:0;f<A;f++)if(h=m[f],(h.selected||f===g)&&!h.disabled&&(!h.parentNode.disabled||!H(h.parentNode,"optgroup"))){if(o=d(h).val(),b)return o;M.push(o)}return M},set:function(s,o){for(var h,f,m=s.options,g=d.makeArray(o),b=m.length;b--;)f=m[b],(f.selected=d.inArray(d.valHooks.option.get(f),g)>-1)&&(h=!0);return h||(s.selectedIndex=-1),g}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=d.inArray(d(s).val(),o)>-1}},E.checkOn||(d.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var xt=e.location,jn={guid:Date.now()},zt=/\?/;d.parseXML=function(s){var o,h;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=o&&o.getElementsByTagName("parsererror")[0],(!o||h)&&d.error("Invalid XML: "+(h?d.map(h.childNodes,function(f){return f.textContent}).join(`
`):s)),o};var Tn=/^(?:focusinfocus|focusoutblur)$/,On=function(s){s.stopPropagation()};d.extend(d.event,{trigger:function(s,o,h,f){var m,g,b,M,A,C,L,R,j=[h||I],B=y.call(s,"type")?s.type:s,X=y.call(s,"namespace")?s.namespace.split("."):[];if(g=R=b=h=h||I,!(h.nodeType===3||h.nodeType===8)&&!Tn.test(B+d.event.triggered)&&(B.indexOf(".")>-1&&(X=B.split("."),B=X.shift(),X.sort()),A=B.indexOf(":")<0&&"on"+B,s=s[d.expando]?s:new d.Event(B,typeof s=="object"&&s),s.isTrigger=f?2:3,s.namespace=X.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+X.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),o=o==null?[s]:d.makeArray(o,[s]),L=d.event.special[B]||{},!(!f&&L.trigger&&L.trigger.apply(h,o)===!1))){if(!f&&!L.noBubble&&!T(h)){for(M=L.delegateType||B,Tn.test(M+B)||(g=g.parentNode);g;g=g.parentNode)j.push(g),b=g;b===(h.ownerDocument||I)&&j.push(b.defaultView||b.parentWindow||e)}for(m=0;(g=j[m++])&&!s.isPropagationStopped();)R=g,s.type=m>1?M:L.bindType||B,C=(z.get(g,"events")||Object.create(null))[s.type]&&z.get(g,"handle"),C&&C.apply(g,o),C=A&&g[A],C&&C.apply&&mt(g)&&(s.result=C.apply(g,o),s.result===!1&&s.preventDefault());return s.type=B,!f&&!s.isDefaultPrevented()&&(!L._default||L._default.apply(j.pop(),o)===!1)&&mt(h)&&A&&S(h[B])&&!T(h)&&(b=h[A],b&&(h[A]=null),d.event.triggered=B,s.isPropagationStopped()&&R.addEventListener(B,On),h[B](),s.isPropagationStopped()&&R.removeEventListener(B,On),d.event.triggered=void 0,b&&(h[A]=b)),s.result}},simulate:function(s,o,h){var f=d.extend(new d.Event,h,{type:s,isSimulated:!0});d.event.trigger(f,null,o)}}),d.fn.extend({trigger:function(s,o){return this.each(function(){d.event.trigger(s,o,this)})},triggerHandler:function(s,o){var h=this[0];if(h)return d.event.trigger(s,o,h,!0)}});var bl=/\[\]$/,In=/\r?\n/g,yl=/^(?:submit|button|image|reset|file)$/i,vl=/^(?:input|select|textarea|keygen)/i;function Zt(s,o,h,f){var m;if(Array.isArray(o))d.each(o,function(g,b){h||bl.test(s)?f(s,b):Zt(s+"["+(typeof b=="object"&&b!=null?g:"")+"]",b,h,f)});else if(!h&&Z(o)==="object")for(m in o)Zt(s+"["+m+"]",o[m],h,f);else f(s,o)}d.param=function(s,o){var h,f=[],m=function(g,b){var M=S(b)?b():b;f[f.length]=encodeURIComponent(g)+"="+encodeURIComponent(M??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!d.isPlainObject(s))d.each(s,function(){m(this.name,this.value)});else for(h in s)Zt(h,s[h],o,m);return f.join("&")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=d.prop(this,"elements");return s?d.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!d(this).is(":disabled")&&vl.test(this.nodeName)&&!yl.test(s)&&(this.checked||!bt.test(s))}).map(function(s,o){var h=d(this).val();return h==null?null:Array.isArray(h)?d.map(h,function(f){return{name:o.name,value:f.replace(In,`\r
`)}}):{name:o.name,value:h.replace(In,`\r
`)}}).get()}});var xl=/%20/g,Al=/#.*$/,Ml=/([?&])_=[^&]*/,kl=/^(.*?):[ \t]*([^\r\n]*)$/mg,wl=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,El=/^(?:GET|HEAD)$/,Sl=/^\/\//,Ln={},Yt={},Pn="*/".concat("*"),Gt=I.createElement("a");Gt.href=xt.href;function Rn(s){return function(o,h){typeof o!="string"&&(h=o,o="*");var f,m=0,g=o.toLowerCase().match(Ie)||[];if(S(h))for(;f=g[m++];)f[0]==="+"?(f=f.slice(1)||"*",(s[f]=s[f]||[]).unshift(h)):(s[f]=s[f]||[]).push(h)}}function Bn(s,o,h,f){var m={},g=s===Yt;function b(M){var A;return m[M]=!0,d.each(s[M]||[],function(C,L){var R=L(o,h,f);if(typeof R=="string"&&!g&&!m[R])return o.dataTypes.unshift(R),b(R),!1;if(g)return!(A=R)}),A}return b(o.dataTypes[0])||!m["*"]&&b("*")}function Qt(s,o){var h,f,m=d.ajaxSettings.flatOptions||{};for(h in o)o[h]!==void 0&&((m[h]?s:f||(f={}))[h]=o[h]);return f&&d.extend(!0,s,f),s}function Cl(s,o,h){for(var f,m,g,b,M=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),f===void 0&&(f=s.mimeType||o.getResponseHeader("Content-Type"));if(f){for(m in M)if(M[m]&&M[m].test(f)){A.unshift(m);break}}if(A[0]in h)g=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){g=m;break}b||(b=m)}g=g||b}if(g)return g!==A[0]&&A.unshift(g),h[g]}function Dl(s,o,h,f){var m,g,b,M,A,C={},L=s.dataTypes.slice();if(L[1])for(b in s.converters)C[b.toLowerCase()]=s.converters[b];for(g=L.shift();g;)if(s.responseFields[g]&&(h[s.responseFields[g]]=o),!A&&f&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),A=g,g=L.shift(),g){if(g==="*")g=A;else if(A!=="*"&&A!==g){if(b=C[A+" "+g]||C["* "+g],!b){for(m in C)if(M=m.split(" "),M[1]===g&&(b=C[A+" "+M[0]]||C["* "+M[0]],b)){b===!0?b=C[m]:C[m]!==!0&&(g=M[0],L.unshift(M[1]));break}}if(b!==!0)if(b&&s.throws)o=b(o);else try{o=b(o)}catch(R){return{state:"parsererror",error:b?R:"No conversion from "+A+" to "+g}}}}return{state:"success",data:o}}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:wl.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?Qt(Qt(s,d.ajaxSettings),o):Qt(d.ajaxSettings,s)},ajaxPrefilter:Rn(Ln),ajaxTransport:Rn(Yt),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var h,f,m,g,b,M,A,C,L,R,j=d.ajaxSetup({},o),B=j.context||j,X=j.context&&(B.nodeType||B.jquery)?d(B):d.event,ae=d.Deferred(),te=d.Callbacks("once memory"),be=j.statusCode||{},_e={},Pe={},Re="canceled",re={readyState:0,getResponseHeader:function(oe){var me;if(A){if(!g)for(g={};me=kl.exec(m);)g[me[1].toLowerCase()+" "]=(g[me[1].toLowerCase()+" "]||[]).concat(me[2]);me=g[oe.toLowerCase()+" "]}return me==null?null:me.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(oe,me){return A==null&&(oe=Pe[oe.toLowerCase()]=Pe[oe.toLowerCase()]||oe,_e[oe]=me),this},overrideMimeType:function(oe){return A==null&&(j.mimeType=oe),this},statusCode:function(oe){var me;if(oe)if(A)re.always(oe[re.status]);else for(me in oe)be[me]=[be[me],oe[me]];return this},abort:function(oe){var me=oe||Re;return h&&h.abort(me),it(0,me),this}};if(ae.promise(re),j.url=((s||j.url||xt.href)+"").replace(Sl,xt.protocol+"//"),j.type=o.method||o.type||j.method||j.type,j.dataTypes=(j.dataType||"*").toLowerCase().match(Ie)||[""],j.crossDomain==null){M=I.createElement("a");try{M.href=j.url,M.href=M.href,j.crossDomain=Gt.protocol+"//"+Gt.host!=M.protocol+"//"+M.host}catch{j.crossDomain=!0}}if(j.data&&j.processData&&typeof j.data!="string"&&(j.data=d.param(j.data,j.traditional)),Bn(Ln,j,o,re),A)return re;C=d.event&&j.global,C&&d.active++===0&&d.event.trigger("ajaxStart"),j.type=j.type.toUpperCase(),j.hasContent=!El.test(j.type),f=j.url.replace(Al,""),j.hasContent?j.data&&j.processData&&(j.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(j.data=j.data.replace(xl,"+")):(R=j.url.slice(f.length),j.data&&(j.processData||typeof j.data=="string")&&(f+=(zt.test(f)?"&":"?")+j.data,delete j.data),j.cache===!1&&(f=f.replace(Ml,"$1"),R=(zt.test(f)?"&":"?")+"_="+jn.guid+++R),j.url=f+R),j.ifModified&&(d.lastModified[f]&&re.setRequestHeader("If-Modified-Since",d.lastModified[f]),d.etag[f]&&re.setRequestHeader("If-None-Match",d.etag[f])),(j.data&&j.hasContent&&j.contentType!==!1||o.contentType)&&re.setRequestHeader("Content-Type",j.contentType),re.setRequestHeader("Accept",j.dataTypes[0]&&j.accepts[j.dataTypes[0]]?j.accepts[j.dataTypes[0]]+(j.dataTypes[0]!=="*"?", "+Pn+"; q=0.01":""):j.accepts["*"]);for(L in j.headers)re.setRequestHeader(L,j.headers[L]);if(j.beforeSend&&(j.beforeSend.call(B,re,j)===!1||A))return re.abort();if(Re="abort",te.add(j.complete),re.done(j.success),re.fail(j.error),h=Bn(Yt,j,o,re),!h)it(-1,"No Transport");else{if(re.readyState=1,C&&X.trigger("ajaxSend",[re,j]),A)return re;j.async&&j.timeout>0&&(b=e.setTimeout(function(){re.abort("timeout")},j.timeout));try{A=!1,h.send(_e,it)}catch(oe){if(A)throw oe;it(-1,oe)}}function it(oe,me,Mt,Xt){var Be,kt,Ne,Ge,Qe,Se=me;A||(A=!0,b&&e.clearTimeout(b),h=void 0,m=Xt||"",re.readyState=oe>0?4:0,Be=oe>=200&&oe<300||oe===304,Mt&&(Ge=Cl(j,re,Mt)),!Be&&d.inArray("script",j.dataTypes)>-1&&d.inArray("json",j.dataTypes)<0&&(j.converters["text script"]=function(){}),Ge=Dl(j,Ge,re,Be),Be?(j.ifModified&&(Qe=re.getResponseHeader("Last-Modified"),Qe&&(d.lastModified[f]=Qe),Qe=re.getResponseHeader("etag"),Qe&&(d.etag[f]=Qe)),oe===204||j.type==="HEAD"?Se="nocontent":oe===304?Se="notmodified":(Se=Ge.state,kt=Ge.data,Ne=Ge.error,Be=!Ne)):(Ne=Se,(oe||!Se)&&(Se="error",oe<0&&(oe=0))),re.status=oe,re.statusText=(me||Se)+"",Be?ae.resolveWith(B,[kt,Se,re]):ae.rejectWith(B,[re,Se,Ne]),re.statusCode(be),be=void 0,C&&X.trigger(Be?"ajaxSuccess":"ajaxError",[re,j,Be?kt:Ne]),te.fireWith(B,[re,Se]),C&&(X.trigger("ajaxComplete",[re,j]),--d.active||d.event.trigger("ajaxStop")))}return re},getJSON:function(s,o,h){return d.get(s,o,h,"json")},getScript:function(s,o){return d.get(s,void 0,o,"script")}}),d.each(["get","post"],function(s,o){d[o]=function(h,f,m,g){return S(f)&&(g=g||m,m=f,f=void 0),d.ajax(d.extend({url:h,type:o,dataType:g,data:f,success:m},d.isPlainObject(h)&&h))}}),d.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),d._evalUrl=function(s,o,h){return d.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){d.globalEval(f,o,h)}})},d.fn.extend({wrapAll:function(s){var o;return this[0]&&(S(s)&&(s=s.call(this[0])),o=d(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return S(s)?this.each(function(o){d(this).wrapInner(s.call(this,o))}):this.each(function(){var o=d(this),h=o.contents();h.length?h.wrapAll(s):o.append(s)})},wrap:function(s){var o=S(s);return this.each(function(h){d(this).wrapAll(o?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){d(this).replaceWith(this.childNodes)}),this}}),d.expr.pseudos.hidden=function(s){return!d.expr.pseudos.visible(s)},d.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},d.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var jl={0:200,1223:204},At=d.ajaxSettings.xhr();E.cors=!!At&&"withCredentials"in At,E.ajax=At=!!At,d.ajaxTransport(function(s){var o,h;if(E.cors||At&&!s.crossDomain)return{send:function(f,m){var g,b=s.xhr();if(b.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(g in s.xhrFields)b[g]=s.xhrFields[g];s.mimeType&&b.overrideMimeType&&b.overrideMimeType(s.mimeType),!s.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(g in f)b.setRequestHeader(g,f[g]);o=function(M){return function(){o&&(o=h=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,M==="abort"?b.abort():M==="error"?typeof b.status!="number"?m(0,"error"):m(b.status,b.statusText):m(jl[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=o(),h=b.onerror=b.ontimeout=o("error"),b.onabort!==void 0?b.onabort=h:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){o&&h()})},o=o("abort");try{b.send(s.hasContent&&s.data||null)}catch(M){if(o)throw M}},abort:function(){o&&o()}}}),d.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return d.globalEval(s),s}}}),d.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),d.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,h;return{send:function(f,m){o=d("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(g){o.remove(),h=null,g&&m(g.type==="error"?404:200,g.type)}),I.head.appendChild(o[0])},abort:function(){h&&h()}}}});var Nn=[],Jt=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Nn.pop()||d.expando+"_"+jn.guid++;return this[s]=!0,s}}),d.ajaxPrefilter("json jsonp",function(s,o,h){var f,m,g,b=s.jsonp!==!1&&(Jt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Jt.test(s.data)&&"data");if(b||s.dataTypes[0]==="jsonp")return f=s.jsonpCallback=S(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,b?s[b]=s[b].replace(Jt,"$1"+f):s.jsonp!==!1&&(s.url+=(zt.test(s.url)?"&":"?")+s.jsonp+"="+f),s.converters["script json"]=function(){return g||d.error(f+" was not called"),g[0]},s.dataTypes[0]="json",m=e[f],e[f]=function(){g=arguments},h.always(function(){m===void 0?d(e).removeProp(f):e[f]=m,s[f]&&(s.jsonpCallback=o.jsonpCallback,Nn.push(f)),g&&S(m)&&m(g[0]),g=m=void 0}),"script"}),E.createHTMLDocument=function(){var s=I.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),d.parseHTML=function(s,o,h){if(typeof s!="string")return[];typeof o=="boolean"&&(h=o,o=!1);var f,m,g;return o||(E.createHTMLDocument?(o=I.implementation.createHTMLDocument(""),f=o.createElement("base"),f.href=I.location.href,o.head.appendChild(f)):o=I),m=Ue.exec(s),g=!h&&[],m?[o.createElement(m[1])]:(m=pn([s],o,g),g&&g.length&&d(g).remove(),d.merge([],m.childNodes))},d.fn.load=function(s,o,h){var f,m,g,b=this,M=s.indexOf(" ");return M>-1&&(f=nt(s.slice(M)),s=s.slice(0,M)),S(o)?(h=o,o=void 0):o&&typeof o=="object"&&(m="POST"),b.length>0&&d.ajax({url:s,type:m||"GET",dataType:"html",data:o}).done(function(A){g=arguments,b.html(f?d("<div>").append(d.parseHTML(A)).find(f):A)}).always(h&&function(A,C){b.each(function(){h.apply(this,g||[A.responseText,C,A])})}),this},d.expr.pseudos.animated=function(s){return d.grep(d.timers,function(o){return s===o.elem}).length},d.offset={setOffset:function(s,o,h){var f,m,g,b,M,A,C,L=d.css(s,"position"),R=d(s),j={};L==="static"&&(s.style.position="relative"),M=R.offset(),g=d.css(s,"top"),A=d.css(s,"left"),C=(L==="absolute"||L==="fixed")&&(g+A).indexOf("auto")>-1,C?(f=R.position(),b=f.top,m=f.left):(b=parseFloat(g)||0,m=parseFloat(A)||0),S(o)&&(o=o.call(s,h,d.extend({},M))),o.top!=null&&(j.top=o.top-M.top+b),o.left!=null&&(j.left=o.left-M.left+m),"using"in o?o.using.call(s,j):R.css(j)}},d.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){d.offset.setOffset(this,s,m)});var o,h,f=this[0];if(f)return f.getClientRects().length?(o=f.getBoundingClientRect(),h=f.ownerDocument.defaultView,{top:o.top+h.pageYOffset,left:o.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,h,f=this[0],m={top:0,left:0};if(d.css(f,"position")==="fixed")o=f.getBoundingClientRect();else{for(o=this.offset(),h=f.ownerDocument,s=f.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&d.css(s,"position")==="static";)s=s.parentNode;s&&s!==f&&s.nodeType===1&&(m=d(s).offset(),m.top+=d.css(s,"borderTopWidth",!0),m.left+=d.css(s,"borderLeftWidth",!0))}return{top:o.top-m.top-d.css(f,"marginTop",!0),left:o.left-m.left-d.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&d.css(s,"position")==="static";)s=s.offsetParent;return s||tt})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var h=o==="pageYOffset";d.fn[s]=function(f){return qe(this,function(m,g,b){var M;if(T(m)?M=m:m.nodeType===9&&(M=m.defaultView),b===void 0)return M?M[o]:m[g];M?M.scrollTo(h?M.pageXOffset:b,h?b:M.pageYOffset):m[g]=b},s,f,arguments.length)}}),d.each(["top","left"],function(s,o){d.cssHooks[o]=vn(E.pixelPosition,function(h,f){if(f)return f=yt(h,o),Wt.test(f)?d(h).position()[o]+"px":f})}),d.each({Height:"height",Width:"width"},function(s,o){d.each({padding:"inner"+s,content:o,"":"outer"+s},function(h,f){d.fn[f]=function(m,g){var b=arguments.length&&(h||typeof m!="boolean"),M=h||(m===!0||g===!0?"margin":"border");return qe(this,function(A,C,L){var R;return T(A)?f.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(R=A.documentElement,Math.max(A.body["scroll"+s],R["scroll"+s],A.body["offset"+s],R["offset"+s],R["client"+s])):L===void 0?d.css(A,C,M):d.style(A,C,L,M)},o,b?m:void 0,b)}})}),d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){d.fn[o]=function(h){return this.on(o,h)}}),d.fn.extend({bind:function(s,o,h){return this.on(s,null,o,h)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,h,f){return this.on(o,s,h,f)},undelegate:function(s,o,h){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",h)},hover:function(s,o){return this.on("mouseenter",s).on("mouseleave",o||s)}}),d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){d.fn[o]=function(h,f){return arguments.length>0?this.on(o,null,h,f):this.trigger(o)}});var Tl=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;d.proxy=function(s,o){var h,f,m;if(typeof o=="string"&&(h=s[o],o=s,s=h),!!S(s))return f=r.call(arguments,2),m=function(){return s.apply(o||this,f.concat(r.call(arguments)))},m.guid=s.guid=s.guid||d.guid++,m},d.holdReady=function(s){s?d.readyWait++:d.ready(!0)},d.isArray=Array.isArray,d.parseJSON=JSON.parse,d.nodeName=H,d.isFunction=S,d.isWindow=T,d.camelCase=Le,d.type=Z,d.now=Date.now,d.isNumeric=function(s){var o=d.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},d.trim=function(s){return s==null?"":(s+"").replace(Tl,"$1")};var Ol=e.jQuery,Il=e.$;return d.noConflict=function(s){return e.$===d&&(e.$=Il),s&&e.jQuery===d&&(e.jQuery=Ol),d},typeof t>"u"&&(e.jQuery=e.$=d),d})}(jquery)),jquery.exports}(function(module,exports){(function(e,t){module.exports=t(requireJquery(),reactExports)})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)},"./src/components/MapContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)},"./src/components/MultiMap/MultiMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)},"./src/components/MultiMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)},"./src/components/VectorMap/VectorMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)},"./src/components/VectorMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)},"./src/utils/builders/AttributeSeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)},"./src/utils/builders/LabelsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)},"./src/utils/builders/LabelsPropsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)},"./src/utils/builders/MarkerBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)},"./src/utils/builders/MultiMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)},"./src/utils/builders/SeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)},"./src/utils/builders/StyleBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)},"./src/utils/builders/VectorMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)},"./src/utils/builders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)},"./src/utils/builders/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)},"../../node_modules/classnames/index.js":(module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA== */ "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)},"../../node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)},"../../node_modules/css-loader/dist/runtime/getUrl.js":module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./src/components/MapContainer/styles.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"../jquery-mousewheel/jquery.mousewheel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)},"../jvectormap/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)},"../jvectormap/jquery.jvectormap.min.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)},"data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==":module=>{eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==?`)},jquery:n=>{n.exports=__WEBPACK_EXTERNAL_MODULE_jquery__},react:n=>{n.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(e!==void 0)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist);var distExports=dist.exports;const name="world_mill",content={insets:[{width:900,top:0,height:440.7063107441331,bbox:[{y:-12671671123330014e-9,x:-20004297151525836e-9},{y:6930392025135122e-9,x:20026572394749384e-9}],left:0}],paths:{BD:{path:"M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",name:"Bangladesh"},BE:{path:"M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",name:"Belgium"},BF:{path:"M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",name:"Burkina Faso"},BG:{path:"M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",name:"Bulgaria"},BA:{path:"M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",name:"Bosnia and Herz."},BN:{path:"M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",name:"Brunei"},BO:{path:"M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",name:"Bolivia"},JP:{path:"M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",name:"Japan"},BI:{path:"M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",name:"Burundi"},BJ:{path:"M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",name:"Benin"},BT:{path:"M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",name:"Bhutan"},JM:{path:"M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",name:"Jamaica"},BW:{path:"M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",name:"Botswana"},BR:{path:"M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",name:"Brazil"},BS:{path:"M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",name:"Bahamas"},BY:{path:"M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",name:"Belarus"},BZ:{path:"M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",name:"Belize"},RU:{path:"M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",name:"Russia"},RW:{path:"M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",name:"Rwanda"},RS:{path:"M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",name:"Serbia"},TL:{path:"M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",name:"Timor-Leste"},TM:{path:"M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",name:"Turkmenistan"},TJ:{path:"M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",name:"Tajikistan"},RO:{path:"M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",name:"Romania"},GW:{path:"M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",name:"Guinea-Bissau"},GT:{path:"M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",name:"Guatemala"},GR:{path:"M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",name:"Greece"},GQ:{path:"M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",name:"Eq. Guinea"},GY:{path:"M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",name:"Guyana"},GE:{path:"M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",name:"Georgia"},GB:{path:"M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",name:"United Kingdom"},GA:{path:"M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",name:"Gabon"},GN:{path:"M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",name:"Guinea"},GM:{path:"M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",name:"Gambia"},GL:{path:"M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",name:"Greenland"},GH:{path:"M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",name:"Ghana"},OM:{path:"M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",name:"Oman"},TN:{path:"M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",name:"Tunisia"},JO:{path:"M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",name:"Jordan"},HR:{path:"M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",name:"Croatia"},HT:{path:"M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",name:"Haiti"},HU:{path:"M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",name:"Hungary"},HN:{path:"M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",name:"Honduras"},PR:{path:"M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",name:"Puerto Rico"},PS:{path:"M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",name:"Palestine"},PT:{path:"M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",name:"Portugal"},PY:{path:"M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",name:"Paraguay"},PA:{path:"M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",name:"Panama"},PG:{path:"M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",name:"Papua New Guinea"},PE:{path:"M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",name:"Peru"},PK:{path:"M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",name:"Pakistan"},PH:{path:"M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",name:"Philippines"},PL:{path:"M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",name:"Poland"},ZM:{path:"M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",name:"Zambia"},EH:{path:"M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",name:"W. Sahara"},EE:{path:"M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",name:"Estonia"},EG:{path:"M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",name:"Egypt"},ZA:{path:"M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",name:"South Africa"},EC:{path:"M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",name:"Ecuador"},IT:{path:"M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",name:"Italy"},VN:{path:"M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",name:"Vietnam"},SB:{path:"M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",name:"Solomon Is."},ET:{path:"M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",name:"Ethiopia"},SO:{path:"M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",name:"Somalia"},ZW:{path:"M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",name:"Zimbabwe"},ES:{path:"M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",name:"Spain"},ER:{path:"M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",name:"Eritrea"},ME:{path:"M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",name:"Montenegro"},MD:{path:"M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",name:"Moldova"},MG:{path:"M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",name:"Madagascar"},MA:{path:"M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",name:"Morocco"},UZ:{path:"M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",name:"Uzbekistan"},MM:{path:"M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",name:"Myanmar"},ML:{path:"M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",name:"Mali"},MN:{path:"M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",name:"Mongolia"},MK:{path:"M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",name:"Macedonia"},MW:{path:"M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",name:"Malawi"},MR:{path:"M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",name:"Mauritania"},UG:{path:"M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",name:"Uganda"},MY:{path:"M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",name:"Malaysia"},MX:{path:"M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",name:"Mexico"},IL:{path:"M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",name:"Israel"},FR:{path:"M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",name:"France"},XS:{path:"M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",name:"Somaliland"},FI:{path:"M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",name:"Finland"},FJ:{path:"M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",name:"Fiji"},FK:{path:"M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",name:"Falkland Is."},NI:{path:"M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",name:"Nicaragua"},NL:{path:"M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",name:"Netherlands"},NO:{path:"M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",name:"Norway"},NA:{path:"M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",name:"Namibia"},VU:{path:"M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",name:"Vanuatu"},NC:{path:"M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",name:"New Caledonia"},NE:{path:"M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",name:"Niger"},NG:{path:"M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",name:"Nigeria"},NZ:{path:"M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",name:"New Zealand"},NP:{path:"M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",name:"Nepal"},XK:{path:"M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",name:"Kosovo"},CI:{path:"M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",name:"Côte d'Ivoire"},CH:{path:"M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",name:"Switzerland"},CO:{path:"M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",name:"Colombia"},CN:{path:"M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",name:"China"},CM:{path:"M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",name:"Cameroon"},CL:{path:"M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",name:"Chile"},XC:{path:"M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",name:"N. Cyprus"},CA:{path:"M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",name:"Canada"},CG:{path:"M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",name:"Congo"},CF:{path:"M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",name:"Central African Rep."},CD:{path:"M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",name:"Dem. Rep. Congo"},CZ:{path:"M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",name:"Czech Rep."},CY:{path:"M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",name:"Cyprus"},CR:{path:"M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",name:"Costa Rica"},CU:{path:"M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",name:"Cuba"},SZ:{path:"M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",name:"Swaziland"},SY:{path:"M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",name:"Syria"},KG:{path:"M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",name:"Kyrgyzstan"},KE:{path:"M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",name:"Kenya"},SS:{path:"M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",name:"S. Sudan"},SR:{path:"M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",name:"Suriname"},KH:{path:"M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",name:"Cambodia"},SV:{path:"M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",name:"El Salvador"},SK:{path:"M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",name:"Slovakia"},KR:{path:"M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",name:"Korea"},SI:{path:"M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",name:"Slovenia"},KP:{path:"M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",name:"Dem. Rep. Korea"},KW:{path:"M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",name:"Kuwait"},SN:{path:"M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",name:"Senegal"},SL:{path:"M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",name:"Sierra Leone"},KZ:{path:"M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",name:"Kazakhstan"},SA:{path:"M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",name:"Saudi Arabia"},SE:{path:"M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",name:"Sweden"},SD:{path:"M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",name:"Sudan"},DO:{path:"M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",name:"Dominican Rep."},DJ:{path:"M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",name:"Djibouti"},DK:{path:"M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",name:"Denmark"},DE:{path:"M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",name:"Germany"},YE:{path:"M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",name:"Yemen"},DZ:{path:"M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",name:"Algeria"},US:{path:"M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",name:"United States"},UY:{path:"M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",name:"Uruguay"},LB:{path:"M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",name:"Lebanon"},LA:{path:"M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",name:"Lao PDR"},TW:{path:"M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",name:"Taiwan"},TT:{path:"M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",name:"Trinidad and Tobago"},TR:{path:"M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",name:"Turkey"},LK:{path:"M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",name:"Sri Lanka"},LV:{path:"M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",name:"Latvia"},LT:{path:"M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",name:"Lithuania"},LU:{path:"M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",name:"Luxembourg"},LR:{path:"M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",name:"Liberia"},LS:{path:"M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",name:"Lesotho"},TH:{path:"M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",name:"Thailand"},TF:{path:"M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",name:"Fr. S. Antarctic Lands"},TG:{path:"M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",name:"Togo"},TD:{path:"M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",name:"Chad"},LY:{path:"M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",name:"Libya"},AE:{path:"M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",name:"United Arab Emirates"},VE:{path:"M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",name:"Venezuela"},AF:{path:"M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",name:"Afghanistan"},IQ:{path:"M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",name:"Iraq"},IS:{path:"M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",name:"Iceland"},IR:{path:"M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",name:"Iran"},AM:{path:"M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",name:"Armenia"},AL:{path:"M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",name:"Albania"},AO:{path:"M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",name:"Angola"},AR:{path:"M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",name:"Argentina"},AU:{path:"M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",name:"Australia"},AT:{path:"M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",name:"Austria"},IN:{path:"M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",name:"India"},TZ:{path:"M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",name:"Tanzania"},AZ:{path:"M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",name:"Azerbaijan"},IE:{path:"M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",name:"Ireland"},ID:{path:"M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",name:"Indonesia"},UA:{path:"M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",name:"Ukraine"},QA:{path:"M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",name:"Qatar"},MZ:{path:"M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",name:"Mozambique"}},height:440.7063107441331,projection:{type:"mill",centralMeridian:11.5},width:900},worldMill={name,content},Map$1=()=>jsxRuntimeExports.jsx("div",{className:"w-full h-full flex items-center justify-center shadow-lg",children:jsxRuntimeExports.jsx(distExports.VectorMap,{map:worldMill,backgroundColor:"#10163A"})}),Admin=()=>jsxRuntimeExports.jsx("div",{className:"min-h-[100vh] bg-white dark:bg-dbg flex items-center justify-center",children:jsxRuntimeExports.jsxs("div",{className:"container mx-auto flex flex-col gap-3 h-[95vh]",children:[jsxRuntimeExports.jsxs("div",{className:"h-1/2 flex gap-3",children:[jsxRuntimeExports.jsx(Cards,{}),jsxRuntimeExports.jsx(Map$1,{})]}),jsxRuntimeExports.jsxs("div",{className:"h-1/2 flex gap-3",children:[jsxRuntimeExports.jsx(BarChart,{}),jsxRuntimeExports.jsx(RightCards,{})]})]})});export{Admin as default};
