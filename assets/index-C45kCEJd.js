var pm=Object.defineProperty;var mm=(r,t,e)=>t in r?pm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var At=(r,t,e)=>mm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ad(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ia={duration:.5,overwrite:!1,delay:0},yu,Je,Ae,jn=1e8,Ee=1/jn,uc=Math.PI*2,_m=uc/4,gm=0,od=Math.sqrt,vm=Math.cos,xm=Math.sin,Ke=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},Eu=function(t){return typeof t>"u"},xi=function(t){return typeof t=="object"},En=function(t){return t!==!1},Tu=function(){return typeof window<"u"},Ka=function(t){return Ue(t)||Ke(t)},ld=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Mm=/random\([^)]+\)/g,Sm=/,\s*/g,oh=/(?:-?\.?\d|\.)+/gi,cd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ud=/[+-]=-?[.\d]+/,ym=/[^,'"\[\]\s]+/gi,Em=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,ui,hc,bu,Gn={},$o={},hd,fd=function(t){return($o=Ls(t,Gn))&&Rn},wu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ua=function(t,e){return!e&&console.warn(t)},dd=function(t,e){return t&&(Gn[t]=e)&&$o&&($o[t]=e)||Gn},Na=function(){return 0},Tm={suppressEvents:!0,isStart:!0,kill:!1},Io={suppressEvents:!0,kill:!1},bm={suppressEvents:!0},Au={},sr=[],fc={},pd,Nn={},vl={},lh=30,Uo=[],Ru="",Cu=function(t){var e=t[0],n,i;if(xi(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Uo.length;i--&&!Uo[i].targetTest(e););n=Uo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Fd(t[i],n)))||t.splice(i,1);return t},Or=function(t){return t._gsap||Cu(Jn(t))[0]._gsap},md=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Eu(n)&&t.getAttribute&&t.getAttribute(e)||n},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},ys=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},wm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ko=function(){var t=sr.length,e=sr.slice(0),n,i;for(fc={},sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pu=function(t){return!!(t._initted||t._startAt||t.add)},_d=function(t,e,n,i){sr.length&&!Je&&Ko(),t.render(e,n,!!(Je&&e<0&&Pu(t))),sr.length&&!Je&&Ko()},gd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ym).length<2?e:Ke(t)?t.trim():t},vd=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Am=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ls=function(t,e){for(var n in e)t[n]=e[n];return t},ch=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=xi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Zo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},va=function(t){var e=t.parent||De,n=t.keyframes?Am(on(t.keyframes)):Wn;if(En(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Rm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},xd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ll=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Cm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dc=function(t,e,n,i){return t._startAt&&(Je?t._startAt.revert(Io):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Pm=function r(t){return!t||t._ts&&r(t.parent)},uh=function(t){return t._repeat?Is(t._tTime,t=t.duration()+t._rDelay)*t:0},Is=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},jo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},cl=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},ul=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),cl(t),n._dirty||Br(n,t)),t},Md=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=jo(t.rawTime(),e),(!e._dur||Xa(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},di=function(t,e,n,i){return e.parent&&ur(e),e._start=Pe((Bi(n)?n:n||t!==De?$n(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xd(t,e,"_first","_last",t._sort?"_start":0),pc(e)||(t._recent=e),i||Md(t,e),t._ts<0&&ul(t,t._tTime),t},Sd=function(t,e){return(Gn.ScrollTrigger||wu("scrollTrigger",e))&&Gn.ScrollTrigger.create(e,t)},yd=function(t,e,n,i,s){if(Lu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pd!==Bn.frame)return sr.push(t),t._lazy=[s,i],1},Dm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},pc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Lm=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Dm(t)&&!(!t._initted&&pc(t))||(t._ts<0||t._dp._ts<0)&&!pc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Xa(0,t._tDur,e),u=Is(l,o),t._yoyo&&u&1&&(a=1-a),u!==Is(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Je||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&yd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&dc(t,e,n,!0),t._onUpdate&&!n&&kn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ur(t,1),!n&&!Je&&(kn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Im=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Us=function(t,e,n,i){var s=t._repeat,a=Pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Pe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ul(t,t._tTime=t._tDur*o),t.parent&&cl(t),n||Br(t.parent,t),t},hh=function(t){return t instanceof Sn?Br(t):Us(t,t._dur)},Um={_start:0,endTime:Na,totalDuration:Na},$n=function r(t,e,n){var i=t.labels,s=t._recent||Um,a=t.duration()>=jn?s.endTime(!1):t._dur,o,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},xa=function(t,e,n){var i=Bi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;a.immediateRender=En(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ke(e[0],a,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},Xa=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ke(t)||!(e=Em.exec(t))?"":e[1]},Nm=function(t,e,n){return gr(n,function(i){return Xa(t,e,i)})},mc=[].slice,Ed=function(t,e){return t&&xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&xi(t[0]))&&!t.nodeType&&t!==ui},Fm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||Ed(i,1)?(s=n).push.apply(s,Jn(i)):n.push(i)})||n},Jn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Ke(t)&&!n&&(hc||!Ns())?mc.call((e||bu).querySelectorAll(t),0):on(t)?Fm(t,n):Ed(t)?mc.call(t,0):t?[t]:[]},_c=function(t){return t=Jn(t)[0]||Ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Jn(e,n.querySelectorAll?n:n===t?Ua("Invalid scope")||bu.createElement("div"):t)}},Td=function(t){return t.sort(function(){return .5-Math.random()})},bd=function(t){if(Ue(t))return t;var e=xi(t)?t:{each:t},n=zr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return Ke(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,m=a[g],p,y,E,x,R,A,b,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,jn])[1],!M){for(b=-jn;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:i%M,y=M===jn?0:l?g*f/M-.5:i/M|0,b=0,C=jn,A=0;A<g;A++)E=A%M-p,x=y-(A/M|0),m[A]=R=c?Math.abs(c==="y"?x:E):od(E*E+x*x),R>b&&(b=R),R<C&&(C=R);i==="random"&&Td(m),m.max=b-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=sn(e.amount||e.each)||0,n=n&&g<0?Km(n):n}return g=(m[h]-m.min)/m.max||0,Pe(m.b+(n?n(g):g)*m.v)+m.u}},gc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bi(n)?0:sn(n))}},wd=function(t,e){var n=on(t),i,s;return!n&&xi(t)&&(i=n=t.radius||jn,t.values?(t=Jn(t.values),(s=!Bi(t[0]))&&(i*=i)):t=gc(t.increment)),gr(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=jn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:a,s||u===a||Bi(a)?u:u+sn(a)}:gc(t))},Ad=function(t,e,n,i){return gr(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Om=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Bm=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},zm=function(t,e,n){return Cd(t,e,0,1,n)},Rd=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},km=function r(t,e,n){var i=e-t;return on(t)?Rd(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},Hm=function r(t,e,n){var i=e-t,s=i*2;return on(t)?Rd(t,r(0,t.length-1),e):gr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Fa=function(t){return t.replace(Mm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Sm);return Ad(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Cd=function(t,e,n,i,s){var a=e-t,o=i-n;return gr(s,function(l){return n+((l-t)/a*o||0)})},Vm=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ke(t),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Ls(on(t)?[]:{},t));if(!u){for(l in e)Du.call(o,t,l,"get",e[l]);s=function(_){return Nu(_,o)||(a?t.p:t)}}}return gr(n,s)},fh=function(t,e,n){var i=t.labels,s=jn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},kn=function(t,e,n){var i=t.vars,s=i[e],a=Ae,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&sr.length&&Ko(),o&&(Ae=o),u=l?s.apply(c,l):s.call(c),Ae=a,u},ca=function(t){return ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Je),t.progress()<1&&kn(t,"onInterrupt"),t},xs,Pd=[],Dd=function(t){if(t)if(t=!t.name&&t.default||t,Tu()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Na,render:Nu,add:Du,kill:s_,modifier:r_,rawVars:0},a={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(Ns(),t!==i){if(Nn[e])return;Wn(i,Wn(Zo(t,s),a)),Ls(i.prototype,Ls(s,Zo(t,a))),Nn[i.prop=e]=i,t.targetTest&&(Uo.push(i),Au[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dd(e,i),t.register&&t.register(Rn,i,bn)}else Pd.push(t)},ye=255,ua={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},xl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Ld=function(t,e,n){var i=t?Bi(t)?[t>>16,t>>8&ye,t&ye]:0:ua.black,s,a,o,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ua[t])i=ua[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(oh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=xl(l+1/3,s,a),i[1]=xl(l,s,a),i[2]=xl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(cd),n&&i.length<4&&(i[3]=1),i}else i=t.match(oh)||ua.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,a=i[1]/ye,o=i[2]/ye,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Id=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var a=s.match(vs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},dh=function(t,e,n){var i="",s=(t+i).match(ar),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Ld(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Id(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ar,"1").split(vs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ua)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Gm=/hsl[a]?\(/,Ud=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=Gm.test(e),t[1]=dh(t[1],n),t[0]=dh(t[0],n,Id(t[1])),!0},Oa,Bn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,y=m===!0,E,x,R,A;if((p>t||p<0)&&(n+=p-e),i+=p,R=i-n,E=R-a,(E>0||y)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,a+=E+(E>=s?4:s-E),x=1),y||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](R,h,A,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){hd&&(!hc&&Tu()&&(ui=hc=window,bu=ui.document||{},Gn.gsap=Rn,(ui.gsapVersions||(ui.gsapVersions=[])).push(Rn.version),fd($o||ui.GreenSockGlobals||!ui.gsap&&ui||{}),Pd.forEach(Dd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Oa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Oa=0,c=Na},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,y){var E=p?function(x,R,A,b){m(x,R,A,b),f.remove(E)}:m;return f.remove(m),o[y?"unshift":"push"](E),Ns(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),Ns=function(){return!Oa&&Bn.wake()},re={},Wm=/^[\d.\-M][\d.\-,\s]/,Xm=/["']/g,Ym=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Xm,"").trim():+c,i=l.substr(o+1).trim();return e},qm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},$m=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ym(e[1])]:qm(t).split(",").map(gd)):re._CE&&Wm.test(t)?re._CE("",t):n},Km=function(t){return function(e){return 1-t(1-e)}},zr=function(t,e){return t&&(Ue(t)?t:re[t]||$m(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Tn(t,function(o){re[o]=Gn[o]=s,re[a=o.toLowerCase()]=n;for(var l in s)re[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=s[l]}),s},Nd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ml=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/uc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*xm((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Nd(o);return s=uc/s,l.config=function(c,u){return r(t,c,u)},l},Sl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Nd(n);return i.config=function(s){return r(t,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Kr("Elastic",Ml("in"),Ml("out"),Ml());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(od(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-vm(r*_m)+1});Kr("Back",Sl("in"),Sl("out"),Sl());re.SteppedEase=re.steps=Gn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((i*Xa(0,a,o)|0)+s)*n}}};Ia.ease=re["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ru+=r+","+r+"Params,"});var Fd=function(t,e){this.id=gm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:md,this.set=e?e.getSetter:Uu},Ba=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Us(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Oa||Bn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ul(this,n),!s._dp||s.parent||Md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_d(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Xa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),cl(this),Cm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=bm);var i=Je;return Je=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Je=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime($n(this,n),En(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ue(n)?n:vd,l=function(){var u=i.then;i.then=null,s&&s(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ca(this)},r}();Wn(Ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var Sn=function(r){ad(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),De&&di(n.parent||De,Ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sd(Ci(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return xa(0,arguments,this),this},e.from=function(i,s,a){return xa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return xa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,$n(this,a),1),this},e.call=function(i,s,a){return di(this,ke.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(i,a,$n(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,va(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,va(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pe(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,y,E,x,R,A,b;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,x=this._start,E=this._ts,p=!E,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Pe(u%m),u===l?(g=this._repeat,h=c):(R=Pe(u/m),g=~~R,g&&g===R&&(h=c,g--),h>c&&(h=c)),R=Is(this._tTime,m),!o&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),A&&g&1&&(h=c-h,b=1),g!==R&&!this._lock){var C=A&&R&1,M=C===(A&&g&1);if(g<R&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Pe(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,R=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Im(this,Pe(o),Pe(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(kn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-Ee);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Je&&Pu(d)),h!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=v?-Ee:Ee);break}}d=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-Ee)._zTime=h>=o?1:-1,this._ts))return this._start=x,cl(this),this.render(i,s,a);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Bi(s)||(s=$n(this,s,i)),!(i instanceof Ba)){if(on(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ke(i))return this.addLabel(i,s);if(Ue(i))i=ke.delayedCall(0,i);else return this}return this!==i?di(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ke(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&ll(this,i),i===this._recent&&(this._recent=this._last),Br(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=$n(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ke.delayedCall(0,s||Na,a);return o.data="isPause",this._hasPause=1,di(this,o,$n(this,i))},e.removePause=function(i){var s=this._first;for(i=$n(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Qi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Jn(i),l=this._first,c=Bi(s),u;l;)l instanceof ke?wm(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=$n(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=ke.to(a,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Us(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Wn({startAt:{time:$n(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),fh(this,$n(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),fh(this,$n(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Br(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Br(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=jn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Pe(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Us(a,a===De&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(De._ts&&(_d(De,jo(i,De)),pd=Bn.frame),Bn.frame>=lh){lh+=Vn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Vn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},t}(Ba);Wn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zm=function(t,e,n,i,s,a,o){var l=new bn(this._pt,t,e,0,1,Vd,null,s),c=0,u=0,f,h,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Fa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),h=n.match(gl)||[];f=gl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ys(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=gl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ud.test(i)||p)&&(l.e=0),this._pt=l,l},Du=function(t,e,n,i,s,a,o,l,c,u){Ue(i)&&(i=i(s||0,t,a));var f=t[e],h=n!=="get"?n:Ue(f)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ue(f)?c?e_:kd:Iu,_;if(Ke(i)&&(~i.indexOf("random(")&&(i=Fa(i)),i.charAt(1)==="="&&(_=ys(h,i)+(sn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||vc)return!isNaN(h*i)&&i!==""?(_=new bn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?i_:Hd,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&wu(e,i),Zm.call(this,t,e,h,i,d,l||Vn.stringFilter,c))},jm=function(t,e,n,i,s){if(Ue(t)&&(t=Ma(t,s,e,n,i)),!xi(t)||t.style&&t.nodeType||on(t)||ld(t))return Ke(t)?Ma(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ma(t[o],s,e,n,i);return a},Od=function(t,e,n,i,s,a){var o,l,c,u;if(Nn[t]&&(o=new Nn[t]).init(s,o.rawVars?e[t]:jm(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qi,vc,Lu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!yu,x=t.timeline,R=i.easeReverse||f,A,b,C,M,v,P,N,z,X,$,Y,O,B;if(x&&(!h||!s)&&(s="none"),t._ease=zr(s,Ia.ease),t._rEase=R&&(zr(R)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||h&&!i.stagger){if(z=m[0]?Or(m[0]).harness:0,O=z&&i[z.prop],A=Zo(i,Au),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Io:Tm),g._lazy=0),a){if(ur(t._startAt=ke.set(m,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je||!o&&!d)&&t._startAt.revert(Io),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),C=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&En(l),immediateRender:o,stagger:0,parent:p},A),O&&(C[z.prop]=O),ur(t._startAt=ke.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je?t._startAt.revert(Io):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&En(l)||l&&!_,b=0;b<m.length;b++){if(v=m[b],N=v._gsap||Cu(m)[b]._gsap,t._ptLookup[b]=$={},fc[N.id]&&sr.length&&Ko(),Y=y===m?b:y.indexOf(v),z&&(X=new z).init(v,O||A,t,Y,y)!==!1&&(t._pt=M=new bn(t._pt,v,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(tt){$[tt]=M}),X.priority&&(P=1)),!z||O)for(C in A)Nn[C]&&(X=Od(C,A,t,Y,v,y))?X.priority&&(P=1):$[C]=M=Du.call(t,v,C,"get",A[C],Y,y,0,i.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),E&&t._pt&&(Qi=t,De.killTweensOf(v,$,t.globalTime(e)),B=!t.parent,Qi=0),t._pt&&l&&(fc[N.id]=1)}P&&Gd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,h&&e<=0&&x.render(jn,!0,!0)},Jm=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return vc=1,t.vars[e]="+=0",Lu(t,o),vc=0,l?Ua(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Fe(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},Qm=function(t,e){var n=t[0]?Or(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ls({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},t_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(on(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ma=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?Fa(t):t},Bd=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",zd={};Tn(Bd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zd[r]=1});var ke=function(r){ad(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:va(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||De,y=(on(n)||ld(n)?Bi(n[0]):"length"in i)?[n]:Jn(n),E,x,R,A,b,C,M,v;if(o._targets=y.length?Cu(y):Ua("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||Ka(c)||Ka(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(E=o.timeline=new Sn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:y}),E.kill(),E.parent=E._dp=Ci(o),E._start=0,h||Ka(c)||Ka(u)){if(A=y.length,M=h&&bd(h),xi(h))for(b in h)~Bd.indexOf(b)&&(v||(v={}),v[b]=h[b]);for(x=0;x<A;x++)R=Zo(i,zd),R.stagger=0,P&&(R.easeReverse=P),v&&Ls(R,v),C=y[x],R.duration=+Ma(c,Ci(o),x,C,y),R.delay=(+Ma(u,Ci(o),x,C,y)||0)-o._delay,!h&&A===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),E.to(C,R,M?M(x,C,y):0),E._ease=re.none;E.duration()?c=u=0:o.timeline=0}else if(_){va(Wn(E.vars.defaults,{ease:"none"})),E._ease=zr(_.ease||i.ease||"none");var N=0,z,X,$;if(on(_))_.forEach(function(Y){return E.to(y,Y,">")}),E.duration();else{R={};for(b in _)b==="ease"||b==="easeEach"||t_(b,_[b],R,_.easeEach);for(b in R)for(z=R[b].sort(function(Y,O){return Y.t-O.t}),N=0,x=0;x<z.length;x++)X=z[x],$={ease:X.e,duration:(X.t-(x?z[x-1].t:0))/100*c},$[b]=X.v,E.to(y,$,N),N+=$.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return d===!0&&!yu&&(Qi=Ci(o),De.killTweensOf(y),Qi=0),di(p,Ci(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===Pe(p._time)&&En(f)&&Pm(Ci(o))&&p.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-u)||0)),m&&Sd(Ci(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ee&&!u?l:i<Ee?0:i,h,d,_,g,m,p,y,E;if(!c)Lm(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Pe(f%g),f===l?(_=this._repeat,h=c):(m=Pe(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=Is(this._tTime,g),h===o&&!a&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Pe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(yd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=h<o;if(x!==this._inv){var R=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=R?(x?-1:1)/R:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(kn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&dc(this,i,s,a),kn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&dc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ur(this,1),!s&&!(u&&!o)&&(f||o||p)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Oa||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lu(this,c),u=this._ease(c/this._dur),Jm(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(ul(this,0),this.parent||xd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Jn(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&Rm(o,l))return s==="all"&&(this._pt=0),ca(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},Tn(s,function(y){return g[y]=1}),s=g),s=Qm(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ll(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ca(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return xa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return xa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return De.killTweensOf(i,s,a)},t}(Ba);Wn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Sn,e=mc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Iu=function(t,e,n){return t[e]=n},kd=function(t,e,n){return t[e](n)},e_=function(t,e,n,i){return t[e](i.fp,n)},n_=function(t,e,n){return t.setAttribute(e,n)},Uu=function(t,e){return Ue(t[e])?kd:Eu(t[e])&&t.setAttribute?n_:Iu},Hd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},i_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Nu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},r_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},s_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ll(this,e,"_pt"):e.dep||(n=1),e=i;return!n},a_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Gd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},bn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Hd,this.d=l||this,this.set=c||Iu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=a_,this.m=n,this.mt=s,this.tween=i},r}();Tn(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Au[r]=1});Gn.TweenMax=Gn.TweenLite=ke;Gn.TimelineLite=Gn.TimelineMax=Sn;De=new Sn({sortChildren:!1,defaults:Ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Ud;var kr=[],No={},o_=[],ph=0,l_=0,yl=function(t){return(No[t]||o_).map(function(e){return e()})},xc=function(){var t=Date.now(),e=[];t-ph>2&&(yl("matchMediaInit"),kr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ui.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),yl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ph=t,yl("matchMedia"))},Wd=function(){function r(e,n){this.selector=n&&_c(n),this.data=[],this._r=[],this.isReverted=!1,this.id=l_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var c=Ae,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=_c(s)),Ae=a,f=i.apply(a,arguments),Ue(f)&&a._r.push(f),Ae=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=kr.length;a--;)kr[a].id===this.id&&kr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),c_=function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){xi(n)||(n={matches:n});var a=new Wd(0,s||this.scope),o=a.conditions={},l,c,u;Ae&&!a.selector&&(a.selector=Ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ui.matchMedia(n[c]),l&&(kr.indexOf(a)<0&&kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(xc):l.addEventListener("change",xc)));return u&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Jo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Dd(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=Jn(t)[0]);var s=Or(t||{}).get,a=n?vd:gd;return n==="native"&&(n=""),t&&(e?a((Nn[e]&&Nn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Nn[o]&&Nn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Jn(t),t.length>1){var i=t.map(function(u){return Rn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var a=Nn[e],o=Or(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;xs._pt=0,f.init(t,n?u+n:u,xs,0,[t]),f.render(1,f),xs._pt&&Nu(1,xs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Rn.to(t,Wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zr(t.ease,Ia.ease)),ch(Ia,t||{})},config:function(t){return ch(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Nn[o]&&!Gn[o]&&Ua(e+" effect requires "+o+" plugin.")}),vl[e]=function(o,l,c){return n(Jn(o),Wn(l||{},s),c)},a&&(Sn.prototype[e]=function(o,l,c){return this.add(vl[e](o,xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=zr(e)},parseEase:function(t,e){return arguments.length?zr(t,e):re},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=En(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=s;return di(De,n,0),n},context:function(t,e){return t?new Wd(t,e):Ae},matchMedia:function(t){return new c_(t)},matchMediaRefresh:function(){return kr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xc()},addEventListener:function(t,e){var n=No[t]||(No[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=No[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:km,wrapYoyo:Hm,distribute:bd,random:Ad,snap:wd,normalize:zm,getUnit:sn,clamp:Nm,splitColor:Ld,toArray:Jn,selector:_c,mapRange:Cd,pipe:Om,unitize:Bm,interpolate:Vm,shuffle:Td},install:fd,effects:vl,ticker:Bn,updateRoot:Sn.updateRoot,plugins:Nn,globalTimeline:De,core:{PropTween:bn,globals:dd,Tween:ke,Timeline:Sn,Animation:Ba,getCache:Or,_removeLinkedListItem:ll,reverting:function(){return Je},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return yu=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Jo[r]=ke[r]});Bn.add(Sn.updateRoot);xs=Jo.to({},{duration:0});var u_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},h_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=u_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},El=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ke(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}h_(o,s)}}}},Rn=Jo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},El("roundProps",gc),El("modifiers"),El("snap",wd))||Jo;ke.version=Sn.version=Rn.version="3.15.0";hd=1;Tu()&&Ns();re.Power0;re.Power1;re.Power2;re.Power3;re.Power4;re.Linear;re.Quad;re.Cubic;re.Quart;re.Quint;re.Strong;re.Elastic;re.Back;re.SteppedEase;re.Bounce;re.Sine;re.Expo;re.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mh,tr,Es,Fu,Ir,_h,Ou,f_=function(){return typeof window<"u"},zi={},wr=180/Math.PI,Ts=Math.PI/180,jr=Math.atan2,gh=1e8,Bu=/([A-Z])/g,d_=/(left|right|width|margin|padding|x)/i,p_=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},m_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},__=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},g_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},v_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Yd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},x_=function(t,e,n){return t.style[e]=n},M_=function(t,e,n){return t.style.setProperty(e,n)},S_=function(t,e,n){return t._gsap[e]=n},y_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},E_=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},T_=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Le="transform",wn=Le+"Origin",b_=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=pi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Pi(i,o)}):this.tfm[t]=a.x?a[t]:Pi(i,t),t===wn&&(this.tfm.zOrigin=a.zOrigin);else return pi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},qd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},w_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ou(),(!s||!s.isStart)&&!n[Le]&&(qd(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$d=function(t,e){var n={target:t,props:[],revert:w_,save:b_};return t._gsap||Rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Kd,Sc=function(t,e){var n=tr.createElementNS?tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):tr.createElement(t);return n&&n.style?n:tr.createElement(t)},Hn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Bu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},vh="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Ir,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(vh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?vh[a]:"")+t},yc=function(){f_()&&window.document&&(mh=window,tr=mh.document,Es=tr.documentElement,Ir=Sc("div")||{style:{}},Sc("div"),Le=Fs(Le),wn=Le+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kd=!!Fs("perspective"),Ou=Rn.core.reverting,Fu=1)},xh=function(t){var e=t.ownerSVGElement,n=Sc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},Mh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Zd=function(t){var e,n;try{e=t.getBBox()}catch{e=xh(t),n=1}return e&&(e.width||e.height)||n||(e=xh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Mh(t,["x","cx","x1"])||0,y:+Mh(t,["y","cy","y1"])||0,width:0,height:0}:e},jd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zd(t))},hr=function(t,e){if(e){var n=t.style,i;e in zi&&e!==wn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(e)}},er=function(t,e,n,i,s,a){var o=new bn(t._pt,e,n,0,1,a?Yd:Xd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Sh={deg:1,rad:1,turn:1},A_={grid:1,flex:1},fr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ir.style,l=d_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||Sh[i]||Sh[a])return s;if(a!=="px"&&!h&&(s=r(t,e,n,"px")),p=t.getCTM&&jd(t),(d||a==="%")&&(zi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Fe(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===tr||!g.appendChild)&&(g=tr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Bn.time&&!m.uncache)return Fe(s/m.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[u],y?t.style[e]=y:hr(t,e)}else(d||a==="%")&&!A_[Hn(g,"display")]&&(o.position=Hn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ir),_=Ir[u],g.removeChild(Ir),o.position="absolute";return l&&d&&(m=Or(g),m.time=Bn.time,m.width=g[u]),Fe(h?_*s/f:_&&s?f/_*s:0)},Pi=function(t,e,n,i){var s;return Fu||yc(),e in pi&&e!=="transform"&&(e=pi[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=ka(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:tl(Hn(t,wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Qo[e]&&Qo[e](t,e,n)||Hn(t,e)||md(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,n)+n:s},R_=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),a=s&&Hn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var o=new bn(this._pt,t.style,e,0,1,Vd),l=0,c=0,u,f,h,d,_,g,m,p,y,E,x,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Hn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Hn(t,e)||i,g?t.style[e]=g:hr(t,e)),u=[n,i],Ud(u),n=u[0],i=u[1],h=n.match(vs)||[],R=i.match(vs)||[],R.length){for(;f=vs.exec(i);)m=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=ys(d,m)+x),p=parseFloat(m),E=m.substr((p+"").length),l=vs.lastIndex-E.length,E||(E=E||Vn.units[e]||x,l===i.length&&(i+=E,o.e+=E)),x!==E&&(d=fr(t,e,g,E)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Yd:Xd;return ud.test(i)&&(o.e=0),this._pt=o,o},yh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},C_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=yh[n]||n,e[1]=yh[i]||i,e.join(" ")},P_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],zi[o]&&(l=1,o=o==="transformOrigin"?wn:Le),hr(n,o);l&&(hr(n,Le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ka(n,1),a.uncache=1,qd(i)))}},Qo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new bn(t._pt,e,n,0,0,P_);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},za=[1,0,0,1,0,0],Jd={},Qd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Eh=function(t){var e=Hn(t,Le);return Qd(e)?za:e.substr(7).match(cd).map(Fe)},zu=function(t,e){var n=t._gsap||Or(t),i=t.style,s=Eh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!t.offsetParent&&t!==Es&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Es.appendChild(t)),s=Eh(t),l?i.display=l:hr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Es.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ec=function(t,e,n,i,s,a){var o=t._gsap,l=s||zu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),x=parseFloat(E[0])||0,R=parseFloat(E[1])||0,A,b,C,M;n?l!==za&&(b=d*m-_*g)&&(C=x*(m/b)+R*(-g/b)+(g*y-m*p)/b,M=x*(-_/b)+R*(d/b)-(d*y-_*p)/b,x=C,R=M):(A=Zd(t),x=A.x+(~E[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(E[1]||E[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&o.smooth?(p=x-c,y=R-u,o.xOffset=f+(p*d+y*g)-p,o.yOffset=h+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[wn]="0px 0px",a&&(er(a,o,"xOrigin",c,x),er(a,o,"yOrigin",u,R),er(a,o,"xOffset",f,o.xOffset),er(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+R)},ka=function(t,e){var n=t._gsap||new Fd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Hn(t,wn)||"0",u,f,h,d,_,g,m,p,y,E,x,R,A,b,C,M,v,P,N,z,X,$,Y,O,B,tt,D,ut,It,Zt,K,et;return u=f=h=g=m=p=y=E=x=0,d=_=1,n.svg=!!(t.getCTM&&jd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),b=zu(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Ec(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,A=n.yOrigin||0,b!==za&&(P=b[0],N=b[1],z=b[2],X=b[3],u=$=b[4],f=Y=b[5],b.length===6?(d=Math.sqrt(P*P+N*N),_=Math.sqrt(X*X+z*z),g=P||N?jr(N,P)*wr:0,y=z||X?jr(z,X)*wr+g:0,y&&(_*=Math.abs(Math.cos(y*Ts))),n.svg&&(u-=R-(R*P+A*z),f-=A-(R*N+A*X))):(et=b[6],Zt=b[7],D=b[8],ut=b[9],It=b[10],K=b[11],u=b[12],f=b[13],h=b[14],C=jr(et,It),m=C*wr,C&&(M=Math.cos(-C),v=Math.sin(-C),O=$*M+D*v,B=Y*M+ut*v,tt=et*M+It*v,D=$*-v+D*M,ut=Y*-v+ut*M,It=et*-v+It*M,K=Zt*-v+K*M,$=O,Y=B,et=tt),C=jr(-z,It),p=C*wr,C&&(M=Math.cos(-C),v=Math.sin(-C),O=P*M-D*v,B=N*M-ut*v,tt=z*M-It*v,K=X*v+K*M,P=O,N=B,z=tt),C=jr(N,P),g=C*wr,C&&(M=Math.cos(C),v=Math.sin(C),O=P*M+N*v,B=$*M+Y*v,N=N*M-P*v,Y=Y*M-$*v,P=O,$=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Fe(Math.sqrt(P*P+N*N+z*z)),_=Fe(Math.sqrt(Y*Y+et*et)),C=jr($,Y),y=Math.abs(C)>2e-4?C*wr:0,x=K?1/(K<0?-K:K):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qd(Hn(t,Le)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Fe(d),n.scaleY=Fe(_),n.rotation=Fe(g)+o,n.rotationX=Fe(m)+o,n.rotationY=Fe(p)+o,n.skewX=y+o,n.skewY=E+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[wn]=tl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?L_:Kd?tp:D_,n.uncache=0,n},tl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Tl=function(t,e,n){var i=sn(e);return Fe(parseFloat(e)+parseFloat(fr(t,"x",n+"px",i)))+i},D_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tp(t,e)},vr="0deg",ta="0px",xr=") ",tp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,E=n.zOrigin,x="",R=p==="auto"&&t&&t!==1||p===!0;if(E&&(f!==vr||u!==vr)){var A=parseFloat(u)*Ts,b=Math.sin(A),C=Math.cos(A),M;A=parseFloat(f)*Ts,M=Math.cos(A),a=Tl(y,a,b*M*-E),o=Tl(y,o,-Math.sin(A)*-E),l=Tl(y,l,C*M*-E+E)}m!==ta&&(x+="perspective("+m+xr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||a!==ta||o!==ta||l!==ta)&&(x+=l!==ta||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+xr),c!==vr&&(x+="rotate("+c+xr),u!==vr&&(x+="rotateY("+u+xr),f!==vr&&(x+="rotateX("+f+xr),(h!==vr||d!==vr)&&(x+="skew("+h+", "+d+xr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+xr),y.style[Le]=x||"translate(0, 0)"},L_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,E=parseFloat(a),x=parseFloat(o),R,A,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ts,c*=Ts,R=Math.cos(l)*f,A=Math.sin(l)*f,b=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Ts,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,A*=M)),R=Fe(R),A=Fe(A),b=Fe(b),C=Fe(C)):(R=f,C=h,A=b=0),(E&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(E=fr(d,"x",a,"px"),x=fr(d,"y",o,"px")),(_||g||m||p)&&(E=Fe(E+_-(_*R+g*b)+m),x=Fe(x+g-(_*A+g*C)+p)),(i||s)&&(M=d.getBBox(),E=Fe(E+i/100*M.width),x=Fe(x+s/100*M.height)),M="matrix("+R+","+A+","+b+","+C+","+E+","+x+")",d.setAttribute("transform",M),y&&(d.style[Le]=M)},I_=function(t,e,n,i,s){var a=360,o=Ke(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?wr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*gh)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*gh)%a-~~(c/a)*a)),t._pt=h=new bn(t._pt,e,n,i,c,m_),h.e=u,h.u="deg",t._props.push(n),h},Th=function(t,e){for(var n in e)t[n]=e[n];return t},U_=function(t,e,n){var i=Th({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Le]=e,o=ka(n,1),hr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],a[Le]=e,o=ka(n,1),a[Le]=c);for(l in zi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),_=sn(u),f=d!==_?fr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new bn(t._pt,o,l,f,h-f,Mc),t._pt.u=_||0,t._props.push(l));Th(o,i)};Tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Qo[t>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Pi(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var ep={name:"css",register:yc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,y,E,x,R,A,b,C,M;Fu||yc(),this.styles=this.styles||$d(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Nn[g]&&Od(g,e,n,i,t,s)))){if(d=typeof u,_=Qo[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Fa(u)),_)_(this,t,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(m=sn(c),p=sn(u),p?m!==p&&(c=fr(t,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ke(c)&&~c.indexOf("random(")&&(c=Fa(c)),sn(c+"")||c==="auto"||(c+=Vn.units[g]||sn(Pi(t,g))||""),(c+"").charAt(1)==="="&&(c=Pi(t,g))):c=Pi(t,g),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in pi&&(g==="autoAlpha"&&(h===1&&Pi(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),er(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=pi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in zi,E){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Hn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Hn(t,"perspective"),v?t.style.perspective=v:hr(t,"perspective")}f=parseFloat(u)}if(x||(R=t._gsap,R.renderTransform&&!e.parseTransform||ka(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,x=this._pt=new bn(this._pt,o,Le,0,1,R.renderTransform,R,0,-1),x.dep=1),g==="scale")this._pt=new bn(this._pt,R,"scaleY",R.scaleY,(y?ys(R.scaleY,y+f):f)-R.scaleY||0,Mc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(wn,0,o[wn]),u=C_(u),R.svg?Ec(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&er(this,R,"zOrigin",R.zOrigin,p),er(this,o,g,tl(c),tl(u)));continue}else if(g==="svgOrigin"){Ec(t,u,1,A,0,this);continue}else if(g in Jd){I_(this,R,g,h,y?ys(h,y+u):u);continue}else if(g==="smoothOrigin"){er(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){U_(this,u,t);continue}}else g in o||(g=Fs(g)||g);if(E||(f||f===0)&&(h||h===0)&&!p_.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),p=sn(u)||(g in Vn.units?Vn.units[g]:m),m!==p&&(h=fr(t,g,c,p)),this._pt=new bn(this._pt,E?R:o,g,h,(y?ys(h,y+f):f)-h,!E&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?v_:Mc),this._pt.u=p||0,E&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=g_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=__);else if(g in o)R_.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){wu(g,u);continue}E||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}b&&Gd(this)},render:function(t,e){if(e.tween._time||!Ou())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Pi,aliases:pi,getSetter:function(t,e,n){var i=pi[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==wn&&(t._gsap.x||Pi(t,"x"))?n&&_h===n?e==="scale"?y_:S_:(_h=n||{})&&(e==="scale"?E_:T_):t.style&&!Eu(t.style[e])?x_:~e.indexOf("-")?M_:Uu(t,e)},core:{_removeProperty:hr,_getMatrix:zu}};Rn.utils.checkPrefix=Fs;Rn.core.getStyleSaver=$d;(function(r,t,e,n){var i=Tn(r+","+t+","+e,function(s){zi[s]=1});Tn(t,function(s){Vn.units[s]="deg",Jd[s]=1}),pi[i[13]]=r+","+t,Tn(n,function(s){var a=s.split(":");pi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});Rn.registerPlugin(ep);var ki=Rn.registerPlugin(ep)||Rn;ki.core.Tween;function N_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function F_(r,t,e){return t&&N_(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var je,Fo,zn,nr,ir,bs,np,Ar,ws,ip,Ii,ri,rp,sp=function(){return je||typeof window<"u"&&(je=window.gsap)&&je.registerPlugin&&je},ap=1,Ms=[],ee=[],gi=[],Sa=Date.now,Tc=function(t,e){return e},O_=function(){var t=ws.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,gi),ee=n,gi=i,Tc=function(a,o){return e[a](o)}},or=function(t,e){return~gi.indexOf(t)&&gi[gi.indexOf(t)+1][e]},ya=function(t){return!!~ip.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Za="scrollLeft",ja="scrollTop",bc=function(){return Ii&&Ii.isPressed||ee.cache++},el=function(t,e){var n=function i(s){if(s||s===0){ap&&(zn.history.scrollRestoration="manual");var a=Ii&&Ii.isPressed;s=i.v=Math.round(s)||(Ii&&Ii.iOS?1:0),t(s),i.cacheID=ee.cache,a&&Tc("ss",s)}else(e||ee.cache!==i.cacheID||Tc("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},gn={s:Za,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:el(function(r){return arguments.length?zn.scrollTo(r,Ge.sc()):zn.pageXOffset||nr[Za]||ir[Za]||bs[Za]||0})},Ge={s:ja,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:el(function(r){return arguments.length?zn.scrollTo(gn.sc(),r):zn.pageYOffset||nr[ja]||ir[ja]||bs[ja]||0})},xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||je.utils.toArray)(t)[0]||(typeof t=="string"&&je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},B_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},dr=function(t,e){var n=e.s,i=e.sc;ya(t)&&(t=nr.scrollingElement||ir);var s=ee.indexOf(t),a=i===Ge.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+a]||un(t,"scroll",bc);var o=ee[s+a],l=o||(ee[s+a]=el(or(t,n),!0)||(ya(t)?i:el(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=je.getProperty(t,"scrollBehavior")==="smooth"),l},wc=function(t,e,n){var i=t,s=t,a=Sa(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=Sa();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,m=s,p=Sa();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},ea=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},bh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},op=function(){ws=je.core.globals().ScrollTrigger,ws&&ws.core&&O_()},lp=function(t){return je=t||sp(),!Fo&&je&&typeof document<"u"&&document.body&&(zn=window,nr=document,ir=nr.documentElement,bs=nr.body,ip=[zn,nr,ir,bs],je.utils.clamp,rp=je.core.context||function(){},Ar="onpointerenter"in bs?"pointer":"mouse",np=Oe.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ri=Oe.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ap=0},500),Fo=1),ws||op(),Fo};gn.op=Ge;ee.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Fo||lp(je)||console.warn("Please gsap.registerPlugin(Observer)"),ws||op();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,E=n.onPress,x=n.onRelease,R=n.onRight,A=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,v=n.onChangeY,P=n.onChange,N=n.onToggleX,z=n.onToggleY,X=n.onHover,$=n.onHoverEnd,Y=n.onMove,O=n.ignoreCheck,B=n.isNormalizer,tt=n.onGestureStart,D=n.onGestureEnd,ut=n.onWheel,It=n.onEnable,Zt=n.onDisable,K=n.onClick,et=n.scrollSpeed,gt=n.capture,nt=n.allowClicks,Et=n.lockAxis,Rt=n.onLockAxis;this.target=o=xn(o)||ir,this.vars=n,d&&(d=je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,et=et||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(bs).lineHeight)||22);var Ht,jt,Nt,Dt,I,xe,Ot,k=this,Tt=0,ie=0,Ct=n.passive||!u&&n.passive!==!1,w=dr(o,gn),S=dr(o,Ge),G=w(),Q=S(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ri[0]==="pointerdown",Z=ya(o),ht=o.ownerDocument||nr,ot=[0,0,0],pt=[0,0,0],Wt=0,it=function(){return Wt=Sa()},at=function(bt,qt){return(k.event=bt)&&d&&B_(bt.target,d)||qt&&J&&bt.pointerType!=="touch"||O&&O(bt,qt)},Ut=function(){k._vx.reset(),k._vy.reset(),jt.pause(),f&&f(k)},Lt=function(){var bt=k.deltaX=bh(ot),qt=k.deltaY=bh(pt),mt=Math.abs(bt)>=i,Vt=Math.abs(qt)>=i;P&&(mt||Vt)&&P(k,bt,qt,ot,pt),mt&&(R&&k.deltaX>0&&R(k),A&&k.deltaX<0&&A(k),M&&M(k),N&&k.deltaX<0!=Tt<0&&N(k),Tt=k.deltaX,ot[0]=ot[1]=ot[2]=0),Vt&&(C&&k.deltaY>0&&C(k),b&&k.deltaY<0&&b(k),v&&v(k),z&&k.deltaY<0!=ie<0&&z(k),ie=k.deltaY,pt[0]=pt[1]=pt[2]=0),(Dt||Nt)&&(Y&&Y(k),Nt&&(m&&Nt===1&&m(k),y&&y(k),Nt=0),Dt=!1),xe&&!(xe=!1)&&Rt&&Rt(k),I&&(ut(k),I=!1),Ht=0},xt=function(bt,qt,mt){ot[mt]+=bt,pt[mt]+=qt,k._vx.update(bt),k._vy.update(qt),c?Ht||(Ht=requestAnimationFrame(Lt)):Lt()},Yt=function(bt,qt){Et&&!Ot&&(k.axis=Ot=Math.abs(bt)>Math.abs(qt)?"x":"y",xe=!0),Ot!=="y"&&(ot[2]+=bt,k._vx.update(bt,!0)),Ot!=="x"&&(pt[2]+=qt,k._vy.update(qt,!0)),c?Ht||(Ht=requestAnimationFrame(Lt)):Lt()},Ft=function(bt){if(!at(bt,1)){bt=ea(bt,u);var qt=bt.clientX,mt=bt.clientY,Vt=qt-k.x,wt=mt-k.y,kt=k.isDragging;k.x=qt,k.y=mt,(kt||(Vt||wt)&&(Math.abs(k.startX-qt)>=s||Math.abs(k.startY-mt)>=s))&&(Nt||(Nt=kt?2:1),kt||(k.isDragging=!0),Yt(Vt,wt))}},se=k.onPress=function(vt){at(vt,1)||vt&&vt.button||(k.axis=Ot=null,jt.pause(),k.isPressed=!0,vt=ea(vt),Tt=ie=0,k.startX=k.x=vt.clientX,k.startY=k.y=vt.clientY,k._vx.reset(),k._vy.reset(),un(B?o:ht,ri[1],Ft,Ct,!0),k.deltaX=k.deltaY=0,E&&E(k))},L=k.onRelease=function(vt){if(!at(vt,1)){cn(B?o:ht,ri[1],Ft,!0);var bt=!isNaN(k.y-k.startY),qt=k.isDragging,mt=qt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Vt=ea(vt);!mt&&bt&&(k._vx.reset(),k._vy.reset(),u&&nt&&je.delayedCall(.08,function(){if(Sa()-Wt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var wt=ht.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,zn,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(wt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&qt&&!B&&jt.restart(!0),Nt&&Lt(),p&&qt&&p(k),x&&x(k,mt)}},ct=function(bt){return bt.touches&&bt.touches.length>1&&(k.isGesturing=!0)&&tt(bt,k.isDragging)},q=function(){return(k.isGesturing=!1)||D(k)},j=function(bt){if(!at(bt)){var qt=w(),mt=S();xt((qt-G)*et,(mt-Q)*et,1),G=qt,Q=mt,f&&jt.restart(!0)}},lt=function(bt){if(!at(bt)){bt=ea(bt,u),ut&&(I=!0);var qt=(bt.deltaMode===1?l:bt.deltaMode===2?zn.innerHeight:1)*_;xt(bt.deltaX*qt,bt.deltaY*qt,0),f&&!B&&jt.restart(!0)}},ft=function(bt){if(!at(bt)){var qt=bt.clientX,mt=bt.clientY,Vt=qt-k.x,wt=mt-k.y;k.x=qt,k.y=mt,Dt=!0,f&&jt.restart(!0),(Vt||wt)&&Yt(Vt,wt)}},Bt=function(bt){k.event=bt,X(k)},oe=function(bt){k.event=bt,$(k)},Ie=function(bt){return at(bt)||ea(bt,u)&&K(k)};jt=k._dc=je.delayedCall(h||.25,Ut).pause(),k.deltaX=k.deltaY=0,k._vx=wc(0,50,!0),k._vy=wc(0,50,!0),k.scrollX=w,k.scrollY=S,k.isDragging=k.isGesturing=k.isPressed=!1,rp(this),k.enable=function(vt){return k.isEnabled||(un(Z?ht:o,"scroll",bc),a.indexOf("scroll")>=0&&un(Z?ht:o,"scroll",j,Ct,gt),a.indexOf("wheel")>=0&&un(o,"wheel",lt,Ct,gt),(a.indexOf("touch")>=0&&np||a.indexOf("pointer")>=0)&&(un(o,ri[0],se,Ct,gt),un(ht,ri[2],L),un(ht,ri[3],L),nt&&un(o,"click",it,!0,!0),K&&un(o,"click",Ie),tt&&un(ht,"gesturestart",ct),D&&un(ht,"gestureend",q),X&&un(o,Ar+"enter",Bt),$&&un(o,Ar+"leave",oe),Y&&un(o,Ar+"move",ft)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=Dt=Nt=!1,k._vx.reset(),k._vy.reset(),G=w(),Q=S(),vt&&vt.type&&se(vt),It&&It(k)),k},k.disable=function(){k.isEnabled&&(Ms.filter(function(vt){return vt!==k&&ya(vt.target)}).length||cn(Z?ht:o,"scroll",bc),k.isPressed&&(k._vx.reset(),k._vy.reset(),cn(B?o:ht,ri[1],Ft,!0)),cn(Z?ht:o,"scroll",j,gt),cn(o,"wheel",lt,gt),cn(o,ri[0],se,gt),cn(ht,ri[2],L),cn(ht,ri[3],L),cn(o,"click",it,!0),cn(o,"click",Ie),cn(ht,"gesturestart",ct),cn(ht,"gestureend",q),cn(o,Ar+"enter",Bt),cn(o,Ar+"leave",oe),cn(o,Ar+"move",ft),k.isEnabled=k.isPressed=k.isDragging=!1,Zt&&Zt(k))},k.kill=k.revert=function(){k.disable();var vt=Ms.indexOf(k);vt>=0&&Ms.splice(vt,1),Ii===k&&(Ii=0)},Ms.push(k),B&&ya(o)&&(Ii=k),k.enable(g)},F_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.15.0";Oe.create=function(r){return new Oe(r)};Oe.register=lp;Oe.getAll=function(){return Ms.slice()};Oe.getById=function(r){return Ms.filter(function(t){return t.vars.id===r})[0]};sp()&&je.registerPlugin(Oe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,ms,te,_e,Fn,me,ku,nl,Ha,Ea,ha,Ja,nn,hl,Ac,pn,wh,Ah,_s,cp,bl,up,dn,Rc,hp,fp,ji,Cc,Hu,As,Vu,Ta,Pc,wl,Qa=1,rn=Date.now,Al=rn(),Qn=0,fa=0,Rh=function(t,e,n){var i=Un(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ch=function(t,e){return e&&(!Un(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},z_=function r(){return fa&&requestAnimationFrame(r)},Ph=function(){return hl=1},Dh=function(){return hl=0},hi=function(t){return t},da=function(t){return Math.round(t*1e5)/1e5||0},dp=function(){return typeof window<"u"},pp=function(){return St||dp()&&(St=window.gsap)&&St.registerPlugin&&St},Wr=function(t){return!!~ku.indexOf(t)},mp=function(t){return(t==="Height"?Vu:te["inner"+t])||Fn["client"+t]||me["client"+t]},_p=function(t){return or(t,"getBoundingClientRect")||(Wr(t)?function(){return Ho.width=te.innerWidth,Ho.height=Vu,Ho}:function(){return Di(t)})},k_=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=or(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?mp(s):t["client"+s])||0}},H_=function(t,e){return!e||~gi.indexOf(t)?_p(t):function(){return Ho}},mi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=or(t,n))?a()-_p(t)()[s]:Wr(t)?(Fn[n]||me[n])-mp(i):t[n]-t["offset"+i])},to=function(t,e){for(var n=0;n<_s.length;n+=3)(!e||~e.indexOf(_s[n+1]))&&t(_s[n],_s[n+1],_s[n+2])},Un=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},pa=function(t){return typeof t=="number"},Rr=function(t){return typeof t=="object"},na=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Jr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Qr=Math.abs,gp="left",vp="top",Gu="right",Wu="bottom",Hr="width",Vr="height",ba="Right",wa="Left",Aa="Top",Ra="Bottom",ze="padding",Kn="margin",Os="Width",Xu="Height",Ve="px",Zn=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},V_=function(t){var e=Zn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Lh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Di=function(t,e){var n=e&&Zn(t)[Ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},il=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},xp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},G_=function(t){return function(e){return St.utils.snap(xp(t),e)}},Yu=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},W_=function(t){return function(e,n){return Yu(xp(t))(e,n.direction)}},eo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},no=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ih={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},io={toggleActions:"play",anticipatePin:0},rl={top:0,left:0,center:.5,bottom:1,right:1},Oo=function(t,e){if(Un(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in rl?rl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ro=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=Wr(n)||or(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?me:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,E=y?c:u,x="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Ge?Gu:Wu)+":"+(a+parseFloat(h))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Bo(_,0,i,y),_},Bo=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Os]=1,s["border"+o+Os]=0,s[n.p]=e+"px",St.set(t,s)},Jt=[],Dc={},Va,Uh=function(){return rn()-Qn>34&&(Va||(Va=requestAnimationFrame(Fi)))},ts=function(){(!dn||!dn.isPressed||dn.startX>me.clientWidth)&&(ee.cache++,dn?Va||(Va=requestAnimationFrame(Fi)):Fi(),Qn||Yr("scrollStart"),Qn=rn())},Rl=function(){fp=te.innerWidth,hp=te.innerHeight},ma=function(t){ee.cache++,(t===!0||!nn&&!up&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Rc||fp!==te.innerWidth||Math.abs(te.innerHeight-hp)>te.innerHeight*.25))&&nl.restart(!0)},Xr={},X_=[],Mp=function r(){return qe(ne,"scrollEnd",r)||Ur(!0)},Yr=function(t){return Xr[t]&&Xr[t].map(function(e){return e()})||X_},In=[],Sp=function(t){for(var e=0;e<In.length;e+=5)(!t||In[e+4]&&In[e+4].query===t)&&(In[e].style.cssText=In[e+1],In[e].getBBox&&In[e].setAttribute("transform",In[e+2]||""),In[e+3].uncache=1)},yp=function(){return ee.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},qu=function(t,e){var n;for(pn=0;pn<Jt.length;pn++)n=Jt[pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ta=!0,e&&Sp(e),e||Yr("revert")},Ep=function(t,e){ee.cache++,(e||!mn)&&ee.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Un(t)&&(te.history.scrollRestoration=Hu=t)},mn,Gr=0,Nh,Y_=function(){if(Nh!==Gr){var t=Nh=Gr;requestAnimationFrame(function(){return t===Gr&&Ur(!0)})}},Tp=function(){me.appendChild(As),Vu=!dn&&As.offsetHeight||te.innerHeight,me.removeChild(As)},Fh=function(t){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ur=function(t,e){if(Fn=_e.documentElement,me=_e.body,ku=[te,_e,Fn,me],Qn&&!t&&!Ta){$e(ne,"scrollEnd",Mp);return}Tp(),mn=ne.isRefreshing=!0,Ta||yp();var n=Yr("refreshInit");cp&&ne.sort(),e||qu(),ee.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Jt.slice(0).forEach(function(i){return i.refresh()}),Ta=!1,Jt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Pc=1,Fh(!0),Jt.forEach(function(i){var s=mi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Fh(!1),Pc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ep(Hu,1),nl.pause(),Gr++,mn=2,Fi(2),Jt.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=ne.isRefreshing=!1,Yr("refresh")},Lc=0,zo=1,Ca,Fi=function(t){if(t===2||!mn&&!Ta){ne.isUpdating=!0,Ca&&Ca.update(0);var e=Jt.length,n=rn(),i=n-Al>=50,s=e&&Jt[0].scroll();if(zo=Lc>s?-1:1,mn||(Lc=s),i&&(Qn&&!hl&&n-Qn>200&&(Qn=0,Yr("scrollEnd")),ha=Al,Al=n),zo<0){for(pn=e;pn-- >0;)Jt[pn]&&Jt[pn].update(0,i);zo=1}else for(pn=0;pn<e;pn++)Jt[pn]&&Jt[pn].update(0,i);ne.isUpdating=!1}Va=0},Ic=[gp,vp,Wu,Gu,Kn+Ra,Kn+ba,Kn+Aa,Kn+wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ko=Ic.concat([Hr,Vr,"boxSizing","max"+Os,"max"+Xu,"position",Kn,ze,ze+Aa,ze+ba,ze+Ra,ze+wa]),q_=function(t,e,n){Rs(n);var i=t._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Cl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Ic.length,a=e.style,o=t.style,l;s--;)l=Ic[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Wu]=o[Gu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Hr]=il(t,gn)+Ve,a[Vr]=il(t,Ge)+Ve,a[ze]=o[Kn]=o[vp]=o[gp]="0",Rs(i),o[Hr]=o["max"+Os]=n[Hr],o[Vr]=o["max"+Xu]=n[Vr],o[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},$_=/([A-Z])/g,Rs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace($_,"-$1").toLowerCase())}},so=function(t){for(var e=ko.length,n=t.style,i=[],s=0;s<e;s++)i.push(ko[s],n[ko[s]]);return i.t=t,i},K_=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Ho={left:0,top:0},Oh=function(t,e,n,i,s,a,o,l,c,u,f,h,d,_){an(t)&&(t=t(l)),Un(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Oo("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),pa(t))d&&(t=St.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&Bo(o,n,i,!0);else{an(e)&&(e=e(l));var E=(t||"0").split(" "),x,R,A,b;y=xn(e,l)||me,x=Di(y)||{},(!x||!x.left&&!x.top)&&Zn(y).display==="none"&&(b=y.style.display,y.style.display="block",x=Di(y),b?y.style.display=b:y.style.removeProperty("display")),R=Oo(E[0],x[i.d]),A=Oo(E[1]||"0",n),t=x[i.p]-c[i.p]-u+R+s-A,o&&Bo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var C=t+n,M=a._isStart;m="scroll"+i.d2,Bo(a,C,i,M&&C>20||!M&&(f?Math.max(me[m],Fn[m]):a.parentNode[m])<=C+1),f&&(c=Di(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ve))}return d&&y&&(m=Di(y),d.seek(h),p=Di(y),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},Z_=/(webkit|moz|length|cssText|inset)/i,Bh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===me){t._stOrig=s.cssText,o=Zn(t);for(a in o)!+a&&!Z_.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},bp=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ao=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},zh=function(t,e){var n=dr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var g=bp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,a.tween&&Fi()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=St.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),ne.isTouch&&$e(t,"touchmove",n.wheelHandler),s},ne=function(){function r(e,n){ms||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fa){this.update=this.refresh=this.kill=hi;return}n=Lh(Un(n)||pa(n)||n.nodeType?{trigger:n}:n,io);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,E=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:Ge,P=!f&&f!==0,N=xn(n.scroller||te),z=St.core.getCache(N),X=Wr(N),$=("pinType"in n?n.pinType:or(N,"pinType")||X&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),B="markers"in n?n.markers:io.markers,tt=X?0:parseFloat(Zn(N)["border"+v.p2+Os])||0,D=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(D)},It=k_(N,X,v),Zt=H_(N,X),K=0,et=0,gt=0,nt=dr(N,v),Et,Rt,Ht,jt,Nt,Dt,I,xe,Ot,k,Tt,ie,Ct,w,S,G,Q,J,Z,ht,ot,pt,Wt,it,at,Ut,Lt,xt,Yt,Ft,se,L,ct,q,j,lt,ft,Bt,oe;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=N,D.scroll=b?b.time.bind(b):nt,jt=nt(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(cp=1,n.refreshPriority===-9999&&(Ca=D)),z.tweenScroll=z.tweenScroll||{top:zh(N,Ge),left:zh(N,gn)},D.tweenTo=Et=z.tweenScroll[v.p],D.scrubDuration=function(mt){ct=pa(mt)&&mt,ct?L?L.duration(mt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Ft=0,l||(l=i.vars.id)),x&&((!Rr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in me.style&&St.set(X?[me,Fn]:N,{scrollBehavior:"auto"}),ee.forEach(function(mt){return an(mt)&&mt.target===(X?_e.scrollingElement||Fn:N)&&(mt.smooth=!1)}),Ht=an(x.snapTo)?x.snapTo:x.snapTo==="labels"?G_(i):x.snapTo==="labelsDirectional"?W_(i):x.directional!==!1?function(mt,Vt){return Yu(x.snapTo)(mt,rn()-et<500?0:Vt.direction)}:St.utils.snap(x.snapTo),q=x.duration||{min:.1,max:2},q=Rr(q)?Ea(q.min,q.max):Ea(q,q),j=St.delayedCall(x.delay||ct/2||.1,function(){var mt=nt(),Vt=rn()-et<500,wt=Et.tween;if((Vt||Math.abs(D.getVelocity())<10)&&!wt&&!hl&&K!==mt){var kt=(mt-Dt)/w,Ne=i&&!P?i.totalProgress():kt,Qt=Vt?0:(Ne-se)/(rn()-ha)*1e3||0,Te=St.utils.clamp(-kt,1-kt,Qr(Qt/2)*Qt/.185),He=kt+(x.inertia===!1?0:Te),Me,Se,he=x,Cn=he.onStart,be=he.onInterrupt,ln=he.onComplete;if(Me=Ht(He,D),pa(Me)||(Me=He),Se=Math.max(0,Math.round(Dt+Me*w)),mt<=I&&mt>=Dt&&Se!==mt){if(wt&&!wt._initted&&wt.data<=Qr(Se-mt))return;x.inertia===!1&&(Te=Me-kt),Et(Se,{duration:q(Qr(Math.max(Qr(He-Ne),Qr(Me-Ne))*.185/Qt/.05||0)),ease:x.ease||"power3",data:Qr(Se-mt),onInterrupt:function(){return j.restart(!0)&&be&&Jr(D,be)},onComplete:function(){D.update(),K=nt(),i&&!P&&(L?L.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Ft=se=i&&!P?i.totalProgress():D.progress,y&&y(D),ln&&Jr(D,ln)}},mt,Te*w,Se-mt-Te*w),Cn&&Jr(D,Cn,Et.tween)}}else D.isActive&&K!==mt&&j.restart(!0)}).pause()),l&&(Dc[l]=D),h=D.trigger=xn(h||d!==!0&&d),oe=h&&h._gsap&&h._gsap.stRevert,oe&&(oe=oe(D)),d=d===!0?h:xn(d),Un(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Kn||(_=!_&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:ze),D.pin=d,Rt=St.core.getCache(d),Rt.spacer?S=Rt.pinState:(A&&(A=xn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Rt.spacerIsNative=!!A,A&&(Rt.spacerState=so(A))),Rt.spacer=J=A||_e.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Rt.pinState=S=so(d)),n.force3D!==!1&&St.set(d,{force3D:!0}),D.spacer=J=Rt.spacer,Yt=Zn(d),it=Yt[_+v.os2],ht=St.getProperty(d),ot=St.quickSetter(d,v.a,Ve),Cl(d,J,Yt),Q=so(d)),B){ie=Rr(B)?Lh(B,Ih):Ih,k=ro("scroller-start",l,N,v,ie,0),Tt=ro("scroller-end",l,N,v,ie,0,k),Z=k["offset"+v.op.d2];var Ie=xn(or(N,"content")||N);xe=this.markerStart=ro("start",l,Ie,v,ie,Z,0,b),Ot=this.markerEnd=ro("end",l,Ie,v,ie,Z,0,b),b&&(Bt=St.quickSetter([xe,Ot],v.a,Ve)),!$&&!(gi.length&&or(N,"fixedMarkers")===!0)&&(V_(X?me:N),St.set([k,Tt],{force3D:!0}),Ut=St.quickSetter(k,v.a,Ve),xt=St.quickSetter(Tt,v.a,Ve))}if(b){var vt=b.vars.onUpdate,bt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),vt&&vt.apply(b,bt||[])})}if(D.previous=function(){return Jt[Jt.indexOf(D)-1]},D.next=function(){return Jt[Jt.indexOf(D)+1]},D.revert=function(mt,Vt){if(!Vt)return D.kill(!0);var wt=mt!==!1||!D.enabled,kt=nn;wt!==D.isReverted&&(wt&&(lt=Math.max(nt(),D.scroll.rec||0),gt=D.progress,ft=i&&i.progress()),xe&&[xe,Ot,k,Tt].forEach(function(Ne){return Ne.style.display=wt?"none":"block"}),wt&&(nn=D,D.update(wt)),d&&(!R||!D.isActive)&&(wt?q_(d,J,S):Cl(d,J,Zn(d),at)),wt||D.update(wt),nn=kt,D.isReverted=wt)},D.refresh=function(mt,Vt,wt,kt){if(!((nn||!D.enabled)&&!Vt)){if(d&&mt&&Qn){$e(r,"scrollEnd",Mp);return}!mn&&ut&&ut(D),nn=D,Et.tween&&!wt&&(Et.tween.kill(),Et.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ce){return Ce.vars.immediateRender&&Ce.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ne=It(),Qt=Zt(),Te=b?b.duration():mi(N,v),He=w<=.01||!w,Me=0,Se=kt||0,he=Rr(wt)?wt.end:n.end,Cn=n.endTrigger||h,be=Rr(wt)?wt.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),ln=D.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,D),T=h&&Math.max(0,Jt.indexOf(D))||0,U=T,V,W,F,rt,st,dt,Mt,zt,Gt,yt,Xt,le,fe;for(B&&Rr(wt)&&(le=St.getProperty(k,v.p),fe=St.getProperty(Tt,v.p));U-- >0;)dt=Jt[U],dt.end||dt.refresh(0,1)||(nn=D),Mt=dt.pin,Mt&&(Mt===h||Mt===d||Mt===ln)&&!dt.isReverted&&(yt||(yt=[]),yt.unshift(dt),dt.revert(!0,!0)),dt!==Jt[U]&&(T--,U--);for(an(be)&&(be=be(D)),be=Rh(be,"start",D),Dt=Oh(be,h,Ne,v,nt(),xe,k,D,Qt,tt,$,Te,b,D._startClamp&&"_startClamp")||(d?-.001:0),an(he)&&(he=he(D)),Un(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Un(be)?be.split(" ")[0]:"")+he:(Me=Oo(he.substr(2),Ne),he=Un(be)?be:(b?St.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Dt):Dt)+Me,Cn=h)),he=Rh(he,"end",D),I=Math.max(Dt,Oh(he||(Cn?"100% 0":Te),Cn,Ne,v,nt()+Me,Ot,Tt,D,Qt,tt,$,Te,b,D._endClamp&&"_endClamp"))||-.001,Me=0,U=T;U--;)dt=Jt[U]||{},Mt=dt.pin,Mt&&dt.start-dt._pinPush<=Dt&&!b&&dt.end>0&&(V=dt.end-(D._startClamp?Math.max(0,dt.start):dt.start),(Mt===h&&dt.start-dt._pinPush<Dt||Mt===ln)&&isNaN(be)&&(Me+=V*(1-dt.progress)),Mt===d&&(Se+=V));if(Dt+=Me,I+=Me,D._startClamp&&(D._startClamp+=Me),D._endClamp&&!mn&&(D._endClamp=I||-.001,I=Math.min(I,mi(N,v))),w=I-Dt||(Dt-=.01)&&.001,He&&(gt=St.utils.clamp(0,1,St.utils.normalize(Dt,I,lt))),D._pinPush=Se,xe&&Me&&(V={},V[v.a]="+="+Me,ln&&(V[v.p]="-="+nt()),St.set([xe,Ot],V)),d&&!(Pc&&D.end>=mi(N,v)))V=Zn(d),rt=v===Ge,F=nt(),pt=parseFloat(ht(v.a))+Se,!Te&&I>1&&(Xt=(X?_e.scrollingElement||Fn:N).style,Xt={style:Xt,value:Xt["overflow"+v.a.toUpperCase()]},X&&Zn(me)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+v.a.toUpperCase()]="scroll")),Cl(d,J,V),Q=so(d),W=Di(d,!0),zt=$&&dr(N,rt?gn:Ge)(),_?(at=[_+v.os2,w+Se+Ve],at.t=J,U=_===ze?il(d,v)+w+Se:0,U&&(at.push(v.d,U+Ve),J.style.flexBasis!=="auto"&&(J.style.flexBasis=U+Ve)),Rs(at),ln&&Jt.forEach(function(Ce){Ce.pin===ln&&Ce.vars.pinSpacing!==!1&&(Ce._subPinOffset=!0)}),$&&nt(lt)):(U=il(d,v),U&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=U+Ve)),$&&(st={top:W.top+(rt?F-Dt:zt)+Ve,left:W.left+(rt?zt:F-Dt)+Ve,boxSizing:"border-box",position:"fixed"},st[Hr]=st["max"+Os]=Math.ceil(W.width)+Ve,st[Vr]=st["max"+Xu]=Math.ceil(W.height)+Ve,st[Kn]=st[Kn+Aa]=st[Kn+ba]=st[Kn+Ra]=st[Kn+wa]="0",st[ze]=V[ze],st[ze+Aa]=V[ze+Aa],st[ze+ba]=V[ze+ba],st[ze+Ra]=V[ze+Ra],st[ze+wa]=V[ze+wa],G=K_(S,st,R),mn&&nt(0)),i?(Gt=i._initted,bl(1),i.render(i.duration(),!0,!0),Wt=ht(v.a)-pt+w+Se,Lt=Math.abs(w-Wt)>1,$&&Lt&&G.splice(G.length-2,2),i.render(0,!0,!0),Gt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bl(0)):Wt=w,Xt&&(Xt.value?Xt.style["overflow"+v.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+v.a));else if(h&&nt()&&!b)for(W=h.parentNode;W&&W!==me;)W._pinOffset&&(Dt-=W._pinOffset,I-=W._pinOffset),W=W.parentNode;yt&&yt.forEach(function(Ce){return Ce.revert(!1,!0)}),D.start=Dt,D.end=I,jt=Nt=mn?lt:nt(),!b&&!mn&&(jt<lt&&nt(lt),D.scroll.rec=0),D.revert(!1,!0),et=rn(),j&&(K=-1,j.restart(!0)),nn=0,i&&P&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(He||gt!==D.progress||b||g||i&&!i._initted)&&(i&&!P&&(i._initted||gt||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Dt<-.001&&!gt?St.utils.normalize(Dt,I,0):gt,!0),D.progress=He||(jt-Dt)/w===gt?0:gt),d&&_&&(J._pinOffset=Math.round(D.progress*Wt)),L&&L.invalidate(),isNaN(le)||(le-=St.getProperty(k,v.p),fe-=St.getProperty(Tt,v.p),ao(k,v,le),ao(xe,v,le-(kt||0)),ao(Tt,v,fe),ao(Ot,v,fe-(kt||0))),He&&!mn&&D.update(),u&&!mn&&!Ct&&(Ct=!0,u(D),Ct=!1)}},D.getVelocity=function(){return(nt()-Nt)/(rn()-ha)*1e3||0},D.endAnimation=function(){na(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||na(i,D.direction<0,1):na(i,i.reversed()))},D.labelToScroll=function(mt){return i&&i.labels&&(Dt||D.refresh()||Dt)+i.labels[mt]/i.duration()*w||0},D.getTrailing=function(mt){var Vt=Jt.indexOf(D),wt=D.direction>0?Jt.slice(0,Vt).reverse():Jt.slice(Vt+1);return(Un(mt)?wt.filter(function(kt){return kt.vars.preventOverlaps===mt}):wt).filter(function(kt){return D.direction>0?kt.end<=Dt:kt.start>=I})},D.update=function(mt,Vt,wt){if(!(b&&!wt&&!mt)){var kt=mn===!0?lt:D.scroll(),Ne=mt?0:(kt-Dt)/w,Qt=Ne<0?0:Ne>1?1:Ne||0,Te=D.progress,He,Me,Se,he,Cn,be,ln,T;if(Vt&&(Nt=jt,jt=b?nt():kt,x&&(se=Ft,Ft=i&&!P?i.totalProgress():Qt)),m&&d&&!nn&&!Qa&&Qn&&(!Qt&&Dt<kt+(kt-Nt)/(rn()-ha)*m?Qt=1e-4:Qt===1&&I>kt+(kt-Nt)/(rn()-ha)*m&&(Qt=.9999)),Qt!==Te&&D.enabled){if(He=D.isActive=!!Qt&&Qt<1,Me=!!Te&&Te<1,be=He!==Me,Cn=be||!!Qt!=!!Te,D.direction=Qt>Te?1:-1,D.progress=Qt,Cn&&!nn&&(Se=Qt&&!Te?0:Qt===1?1:Te===1?2:3,P&&(he=!be&&O[Se+1]!=="none"&&O[Se+1]||O[Se],T=i&&(he==="complete"||he==="reset"||he in i))),M&&(be||T)&&(T||f||!i)&&(an(M)?M(D):D.getTrailing(M).forEach(function(F){return F.endAnimation()})),P||(L&&!nn&&!Qa?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Qt,i._tTime/i._tDur):(L.vars.totalProgress=Qt,L.invalidate().restart())):i&&i.totalProgress(Qt,!!(nn&&(et||mt)))),d){if(mt&&_&&(J.style[_+v.os2]=it),!$)ot(da(pt+Wt*Qt));else if(Cn){if(ln=!mt&&Qt>Te&&I+1>kt&&kt+1>=mi(N,v),R)if(!mt&&(He||ln)){var U=Di(d,!0),V=kt-Dt;Bh(d,me,U.top+(v===Ge?V:0)+Ve,U.left+(v===Ge?0:V)+Ve)}else Bh(d,J);Rs(He||ln?G:Q),Lt&&Qt<1&&He||ot(pt+(Qt===1&&!ln?Wt:0))}}x&&!Et.tween&&!nn&&!Qa&&j.restart(!0),o&&(be||E&&Qt&&(Qt<1||!wl))&&Ha(o.targets).forEach(function(F){return F.classList[He||E?"add":"remove"](o.className)}),a&&!P&&!mt&&a(D),Cn&&!nn?(P&&(T&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),a&&a(D)),(be||!wl)&&(c&&be&&Jr(D,c),Y[Se]&&Jr(D,Y[Se]),E&&(Qt===1?D.kill(!1,1):Y[Se]=0),be||(Se=Qt===1?1:3,Y[Se]&&Jr(D,Y[Se]))),C&&!He&&Math.abs(D.getVelocity())>(pa(C)?C:2500)&&(na(D.callbackAnimation),L?L.progress(1):na(i,he==="reverse"?1:!Qt,1))):P&&a&&!nn&&a(D)}if(xt){var W=b?kt/b.duration()*(b._caScrollDist||0):kt;Ut(W+(k._isFlipped?1:0)),xt(W)}Bt&&Bt(-kt/b.duration()*(b._caScrollDist||0))}},D.enable=function(mt,Vt){D.enabled||(D.enabled=!0,$e(N,"resize",ma),X||$e(N,"scroll",ts),ut&&$e(r,"refreshInit",ut),mt!==!1&&(D.progress=gt=0,jt=Nt=K=nt()),Vt!==!1&&D.refresh())},D.getTween=function(mt){return mt&&Et?Et.tween:L},D.setPositions=function(mt,Vt,wt,kt){if(b){var Ne=b.scrollTrigger,Qt=b.duration(),Te=Ne.end-Ne.start;mt=Ne.start+Te*mt/Qt,Vt=Ne.start+Te*Vt/Qt}D.refresh(!1,!1,{start:Ch(mt,wt&&!!D._startClamp),end:Ch(Vt,wt&&!!D._endClamp)},kt),D.update()},D.adjustPinSpacing=function(mt){if(at&&mt){var Vt=at.indexOf(v.d)+1;at[Vt]=parseFloat(at[Vt])+mt+Ve,at[1]=parseFloat(at[1])+mt+Ve,Rs(at)}},D.disable=function(mt,Vt){if(mt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Vt||L&&L.pause(),lt=0,Rt&&(Rt.uncache=1),ut&&qe(r,"refreshInit",ut),j&&(j.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!X)){for(var wt=Jt.length;wt--;)if(Jt[wt].scroller===N&&Jt[wt]!==D)return;qe(N,"resize",ma),X||qe(N,"scroll",ts)}},D.kill=function(mt,Vt){D.disable(mt,Vt),L&&!Vt&&L.kill(),l&&delete Dc[l];var wt=Jt.indexOf(D);wt>=0&&Jt.splice(wt,1),wt===pn&&zo>0&&pn--,wt=0,Jt.forEach(function(kt){return kt.scroller===D.scroller&&(wt=1)}),wt||mn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Vt||i.kill()),xe&&[xe,Ot,k,Tt].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),Ca===D&&(Ca=0),d&&(Rt&&(Rt.uncache=1),wt=0,Jt.forEach(function(kt){return kt.pin===d&&wt++}),wt||(Rt.spacer=0)),n.onKill&&n.onKill(D)},Jt.push(D),D.enable(!1,!1),oe&&oe(D),i&&i.add&&!w){var qt=D.update;D.update=function(){D.update=qt,ee.cache++,Dt||I||D.refresh()},St.delayedCall(.01,D.update),w=.01,Dt=I=0}else D.refresh();d&&Y_()},r.register=function(n){return ms||(St=n||pp(),dp()&&window.document&&r.enable(),ms=fa),ms},r.defaults=function(n){if(n)for(var i in n)io[i]=n[i];return io},r.disable=function(n,i){fa=0,Jt.forEach(function(a){return a[i?"kill":"disable"](n)}),qe(te,"wheel",ts),qe(_e,"scroll",ts),clearInterval(Ja),qe(_e,"touchcancel",hi),qe(me,"touchstart",hi),eo(qe,_e,"pointerdown,touchstart,mousedown",Ph),eo(qe,_e,"pointerup,touchend,mouseup",Dh),nl.kill(),to(qe);for(var s=0;s<ee.length;s+=3)no(qe,ee[s],ee[s+1]),no(qe,ee[s],ee[s+2])},r.enable=function(){if(te=window,_e=document,Fn=_e.documentElement,me=_e.body,St){if(Ha=St.utils.toArray,Ea=St.utils.clamp,Cc=St.core.context||hi,bl=St.core.suppressOverwrites||hi,Hu=te.history.scrollRestoration||"auto",Lc=te.pageYOffset||0,St.core.globals("ScrollTrigger",r),me){fa=1,As=document.createElement("div"),As.style.height="100vh",As.style.position="absolute",Tp(),z_(),Oe.register(St),r.isTouch=Oe.isTouch,ji=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rc=Oe.isTouch===1,$e(te,"wheel",ts),ku=[te,_e,Fn,me],St.matchMedia?(r.matchMedia=function(u){var f=St.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},St.addEventListener("matchMediaInit",function(){yp(),qu()}),St.addEventListener("matchMediaRevert",function(){return Sp()}),St.addEventListener("matchMedia",function(){Ur(0,1),Yr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Rl(),Rl})):console.warn("Requires GSAP 3.11.0 or later"),Rl(),$e(_e,"scroll",ts);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,a=St.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Di(me),Ge.m=Math.round(o.top+Ge.sc())||0,gn.m=Math.round(o.left+gn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),Ja=setInterval(Uh,250),St.delayedCall(.5,function(){return Qa=0}),$e(_e,"touchcancel",hi),$e(me,"touchstart",hi),eo($e,_e,"pointerdown,touchstart,mousedown",Ph),eo($e,_e,"pointerup,touchend,mouseup",Dh),Ac=St.utils.checkPrefix("transform"),ko.push(Ac),ms=rn(),nl=St.delayedCall(.2,Ur).pause(),_s=[_e,"visibilitychange",function(){var u=te.innerWidth,f=te.innerHeight;_e.hidden?(wh=u,Ah=f):(wh!==u||Ah!==f)&&ma()},_e,"DOMContentLoaded",Ur,te,"load",Ur,te,"resize",ma],to($e),Jt.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)no(qe,ee[l],ee[l+1]),no(qe,ee[l],ee[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(wl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ja)||(Ja=i)&&setInterval(Uh,i),"ignoreMobileResize"in n&&(Rc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(to(qe)||to($e,n.autoRefreshEvents||"none"),up=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),a=ee.indexOf(s),o=Wr(s);~a&&ee.splice(a,o?6:2),i&&(o?gi.unshift(te,i,me,i,Fn,i):gi.unshift(s,i))},r.clearMatchMedia=function(n){Jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Un(n)?xn(n):n).getBoundingClientRect(),o=a[s?Hr:Vr]*i||0;return s?a.right-o>0&&a.left+o<te.innerWidth:a.bottom-o>0&&a.top+o<te.innerHeight},r.positionInViewport=function(n,i,s){Un(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[s?Hr:Vr],l=i==null?o/2:i in rl?rl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/te.innerWidth:(a.top+l)/te.innerHeight},r.killAll=function(n){if(Jt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xr.killAll||[];Xr={},i.forEach(function(s){return s()})}},r}();ne.version="3.15.0";ne.saveStyles=function(r){return r?Ha(r).forEach(function(t){if(t&&t.style){var e=In.indexOf(t);e>=0&&In.splice(e,5),In.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Cc())}}):In};ne.revert=function(r,t){return qu(!r,t)};ne.create=function(r,t){return new ne(r,t)};ne.refresh=function(r){return r?ma(!0):(ms||ne.register())&&Ur(!0)};ne.update=function(r){return++ee.cache&&Fi(r===!0?2:0)};ne.clearScrollMemory=Ep;ne.maxScroll=function(r,t){return mi(r,t?gn:Ge)};ne.getScrollFunc=function(r,t){return dr(xn(r),t?gn:Ge)};ne.getById=function(r){return Dc[r]};ne.getAll=function(){return Jt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!Qn};ne.snapDirectional=Yu;ne.addEventListener=function(r,t){var e=Xr[r]||(Xr[r]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(r,t){var e=Xr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ne.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=St.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&an(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return an(s)&&(s=s(),$e(ne,"refresh",function(){return s=t.batchMax()})),Ha(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ne.create(c))}),e};var kh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Pl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Fn&&r(me,e)},oo={auto:1,scroll:1},j_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||St.core.getCache(s),o=rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(oo[(l=Zn(s)).overflowY]||oo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Wr(s)&&(oo[(l=Zn(s)).overflowY]||oo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},wp=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&j_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(_e,Oe.eventTypes[0],Vh,!1,!0)},onDisable:function(){return qe(_e,Oe.eventTypes[0],Vh,!0)}})},J_=/(input|label|select|textarea)/i,Hh,Vh=function(t){var e=J_.test(t.target.tagName);(e||Hh)&&(t._gsapAllow=!0,Hh=e)},Q_=function(t){Rr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=xn(t.target)||Fn,u=St.core.globals().ScrollSmoother,f=u&&u.get(),h=ji&&(t.content&&xn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=dr(c,Ge),_=dr(c,gn),g=1,m=(Oe.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,p=0,y=an(i)?function(){return i(o)}:function(){return i||2.8},E,x,R=wp(c,t.type,!0,s),A=function(){return x=!1},b=hi,C=hi,M=function(){l=mi(c,Ge),C=Ea(ji?1:0,l),n&&(b=Ea(0,mi(c,gn))),E=Gr},v=function(){h._gsap.y=da(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var B=da(o.deltaY/2),tt=C(d.v-B);if(h&&tt!==d.v+d.offset){d.offset=tt-d.v;var D=da((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=ee.cache,Fi()}return!0}d.offset&&v(),x=!0},N,z,X,$,Y=function(){M(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&St.set(h,{y:"+=0"}),t.ignoreCheck=function(O){return ji&&O.type==="touchmove"&&P()||g>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){x=!1;var O=g;g=da((te.visualViewport&&te.visualViewport.scale||1)/m),N.pause(),O!==g&&Pl(c,g>1.01?!0:n?!1:"x"),z=_(),X=d(),M(),E=Gr},t.onRelease=t.onGestureStart=function(O,B){if(d.offset&&v(),!B)$.restart(!0);else{ee.cache++;var tt=y(),D,ut;n&&(D=_(),ut=D+tt*.05*-O.velocityX/.227,tt*=kh(_,D,ut,mi(c,gn)),N.vars.scrollX=b(ut)),D=d(),ut=D+tt*.05*-O.velocityY/.227,tt*=kh(d,D,ut,mi(c,Ge)),N.vars.scrollY=C(ut),N.invalidate().duration(tt).play(.01),(ji&&N.vars.scrollY>=l||D>=l-1)&&St.to({},{onUpdate:Y,duration:tt})}a&&a(O)},t.onWheel=function(){N._ts&&N.pause(),rn()-p>1e3&&(E=0,p=rn())},t.onChange=function(O,B,tt,D,ut){if(Gr!==E&&M(),B&&n&&_(b(D[2]===B?z+(O.startX-O.x):_()+B-D[1])),tt){d.offset&&v();var It=ut[2]===tt,Zt=It?X+O.startY-O.y:d()+tt-ut[1],K=C(Zt);It&&Zt!==K&&(X+=K-Zt),d(K)}(tt||B)&&Fi()},t.onEnable=function(){Pl(c,n?!1:"x"),ne.addEventListener("refresh",Y),$e(te,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Pl(c,!0),qe(te,"resize",Y),ne.removeEventListener("refresh",Y),R.kill()},t.lockAxis=t.lockAxis!==!1,o=new Oe(t),o.iOS=ji,ji&&!d()&&d(1),ji&&St.ticker.add(hi),$=o._dc,N=St.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bp(d,d(),function(){return N.pause()})},onUpdate:Fi,onComplete:$.vars.onComplete}),o};ne.sort=function(r){if(an(r))return Jt.sort(r);var t=te.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Jt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ne.observe=function(r){return new Oe(r)};ne.normalizeScroll=function(r){if(typeof r>"u")return dn;if(r===!0&&dn)return dn.enable();if(r===!1){dn&&dn.kill(),dn=r;return}var t=r instanceof Oe?r:Q_(r);return dn&&dn.target===t.target&&dn.kill(),Wr(t.target)&&(dn=t),t};ne.core={_getVelocityProp:wc,_inputObserver:wp,_scrollers:ee,_proxies:gi,bridge:{ss:function(){Qn||Yr("scrollStart"),Qn=rn()},ref:function(){return nn}}};pp()&&St.registerPlugin(ne);var Gh="1.3.27";function Ap(r,t,e){return Math.max(r,Math.min(t,e))}function tg(r,t,e){return(1-e)*r+e*t}function eg(r,t,e,n){return tg(r,t,1-Math.exp(-e*n))}function ng(r,t){return(r%t+t)%t}var ig=class{constructor(){At(this,"isRunning",!1);At(this,"value",0);At(this,"from",0);At(this,"to",0);At(this,"currentTime",0);At(this,"lerp");At(this,"duration");At(this,"easing");At(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Ap(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=eg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function rg(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var sg=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){At(this,"width",0);At(this,"height",0);At(this,"scrollHeight",0);At(this,"scrollWidth",0);At(this,"debouncedResize");At(this,"wrapperResizeObserver");At(this,"contentResizeObserver");At(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});At(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});At(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=rg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Rp=class{constructor(){At(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const ag=100/6,Wi={passive:!1};function Wh(r,t){return r===1?ag:r===2?t:1}var og=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){At(this,"touchStart",{x:0,y:0});At(this,"lastDelta",{x:0,y:0});At(this,"window",{width:0,height:0});At(this,"emitter",new Rp);At(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});At(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});At(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});At(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Wh(n,this.window.width),s=Wh(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});At(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Wi),this.element.addEventListener("touchstart",this.onTouchStart,Wi),this.element.addEventListener("touchmove",this.onTouchMove,Wi),this.element.addEventListener("touchend",this.onTouchEnd,Wi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Wi),this.element.removeEventListener("touchstart",this.onTouchStart,Wi),this.element.removeEventListener("touchmove",this.onTouchMove,Wi),this.element.removeEventListener("touchend",this.onTouchEnd,Wi)}};const Xh=r=>Math.min(1,1.001-2**(-10*r));var lg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:E=!1,anchors:x=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:C=b,stopInertiaOnNavigate:M=!1,respectReducedMotion:v=!0}={}){At(this,"_isScrolling",!1);At(this,"_isStopped",!1);At(this,"_isLocked",!1);At(this,"_preventNextNativeScrollEvent",!1);At(this,"_resetVelocityTimeout",null);At(this,"_rafId",null);At(this,"_isDraggingSelection",!1);At(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));At(this,"isTouching");At(this,"isIos");At(this,"time",0);At(this,"userData",{});At(this,"lastVelocity",0);At(this,"velocity",0);At(this,"direction",0);At(this,"options");At(this,"targetScroll");At(this,"animatedScroll");At(this,"animate",new ig);At(this,"emitter",new Rp);At(this,"dimensions");At(this,"virtualScroll");At(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});At(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});At(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});At(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});At(this,"onPointerDown",r=>{r.button===1&&this.reset()});At(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,m,p,y,E;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((E=_.hasAttribute)==null?void 0:E.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});At(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});At(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Gh,window.lenis||(window.lenis={}),window.lenis.version=Gh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Xh:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:y,autoRaf:E,anchors:x,autoToggle:R,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:M,respectReducedMotion:v},this.dimensions=new sg(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new og(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=a,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(_=h),_){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(E)?0:E)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=Ap(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=Xh:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),a=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,o=f>d,l=h>_,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,y,E,x,R;if(g==="horizontal")m=Math.round(r.scrollLeft),p=f-d,y=t,E=s,x=o,R=c;else if(g==="vertical")m=Math.round(r.scrollTop),p=h-_,y=e,E=a,x=l,R=u;else return!1;return!R&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&E&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ng(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $u="170",cg=0,Yh=1,ug=2,Cp=1,hg=2,Ri=3,pr=0,An=1,Li=2,lr=0,Cs=1,qh=2,$h=3,Kh=4,fg=5,Dr=100,dg=101,pg=102,mg=103,_g=104,gg=200,vg=201,xg=202,Mg=203,Uc=204,Nc=205,Sg=206,yg=207,Eg=208,Tg=209,bg=210,wg=211,Ag=212,Rg=213,Cg=214,Fc=0,Oc=1,Bc=2,Bs=3,zc=4,kc=5,Hc=6,Vc=7,Pp=0,Pg=1,Dg=2,cr=0,Lg=1,Ig=2,Ug=3,Ng=4,Fg=5,Og=6,Bg=7,Dp=300,zs=301,ks=302,Gc=303,Wc=304,fl=306,Xc=1e3,Nr=1001,Yc=1002,oi=1003,zg=1004,lo=1005,_i=1006,Dl=1007,Fr=1008,Hi=1009,Lp=1010,Ip=1011,Ga=1012,Ku=1013,qr=1014,Ui=1015,Ya=1016,Zu=1017,ju=1018,Hs=1020,Up=35902,Np=1021,Fp=1022,ai=1023,Op=1024,Bp=1025,Ps=1026,Vs=1027,zp=1028,Ju=1029,kp=1030,Qu=1031,th=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,qc=35840,$c=35841,Kc=35842,Zc=35843,jc=36196,Jc=37492,Qc=37496,tu=37808,eu=37809,nu=37810,iu=37811,ru=37812,su=37813,au=37814,ou=37815,lu=37816,cu=37817,uu=37818,hu=37819,fu=37820,du=37821,Yo=36492,pu=36494,mu=36495,Hp=36283,_u=36284,gu=36285,vu=36286,kg=3200,Hg=3201,Vp=0,Vg=1,Ji="",Mn="srgb",Xs="srgb-linear",dl="linear",ge="srgb",es=7680,Zh=519,Gg=512,Wg=513,Xg=514,Gp=515,Yg=516,qg=517,$g=518,Kg=519,jh=35044,Jh="300 es",Ni=2e3,sl=2001;class Ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qh=1234567;const Pa=Math.PI/180,Wa=180/Math.PI;function qs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function _n(r,t,e){return Math.max(t,Math.min(e,r))}function eh(r,t){return(r%t+t)%t}function Zg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function jg(r,t,e){return r!==t?(e-r)/(t-r):0}function Da(r,t,e){return(1-e)*r+e*t}function Jg(r,t,e,n){return Da(r,t,1-Math.exp(-e*n))}function Qg(r,t=1){return t-Math.abs(eh(r,t*2)-t)}function t0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function e0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function n0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function i0(r,t){return r+Math.random()*(t-r)}function r0(r){return r*(.5-Math.random())}function s0(r){r!==void 0&&(Qh=r);let t=Qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a0(r){return r*Pa}function o0(r){return r*Wa}function l0(r){return(r&r-1)===0&&r!==0}function c0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function u0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function h0(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),d=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const tf={DEG2RAD:Pa,RAD2DEG:Wa,generateUUID:qs,clamp:_n,euclideanModulo:eh,mapLinear:Zg,inverseLerp:jg,lerp:Da,damp:Jg,pingpong:Qg,smoothstep:t0,smootherstep:e0,randInt:n0,randFloat:i0,randFloatSpread:r0,seededRandom:s0,degToRad:a0,radToDeg:o0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:u0,setQuaternionFromProperEuler:h0,normalize:hn,denormalize:gs};class ue{constructor(t=0,e=0){ue.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],E=i[4],x=i[7],R=i[2],A=i[5],b=i[8];return s[0]=a*g+o*y+l*R,s[3]=a*m+o*E+l*A,s[6]=a*p+o*x+l*b,s[1]=c*g+u*y+f*R,s[4]=c*m+u*E+f*A,s[7]=c*p+u*x+f*b,s[2]=h*g+d*y+_*R,s[5]=h*m+d*E+_*A,s[8]=h*p+d*x+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new $t;function Wp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function f0(){const r=al("canvas");return r.style.display="block",r}const ef={};function _a(r){r in ef||(ef[r]=!0,console.warn(r))}function d0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function p0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function m0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const nf=[.64,.33,.3,.6,.15,.06],rf=[.2126,.7152,.0722],sf=[.3127,.329],af=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Xs]:{primaries:nf,whitePoint:sf,transfer:dl,toXYZ:af,fromXYZ:of,luminanceCoefficients:rf,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:nf,whitePoint:sf,transfer:ge,toXYZ:af,fromXYZ:of,luminanceCoefficients:rf,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let ns;class _0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=al("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=al("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let g0=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Il(i[a].image)):s.push(Il(i[a]))}else s=Il(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Il(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v0=0;class vn extends Ys{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=Nr,i=Nr,s=_i,a=Fr,o=ai,l=Hi,c=vn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=qs(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xc:t.x=t.x-Math.floor(t.x);break;case Nr:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xc:t.y=t.y-Math.floor(t.y);break;case Nr:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Dp;vn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(d+1)/2,R=(p+1)/2,A=(u+h)/4,b=(f+g)/4,C=(_+m)/4;return E>x&&E>R?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=b/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends x0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yp extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=oi,this.minFilter=oi,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=oi,this.minFilter=oi,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-o;const p=l*h+c*d+u*_+f*g,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*y;if(l=l*m+h*x,c=c*m+d*x,u=u*m+_*x,f=f*m+g*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_n(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new H,lf=new qa;class $a{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),uo.subVectors(this.max,ia),is.subVectors(t.a,ia),rs.subVectors(t.b,ia),ss.subVectors(t.c,ia),Xi.subVectors(rs,is),Yi.subVectors(ss,rs),Mr.subVectors(is,ss);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Mr.z,Mr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Mr.z,0,-Mr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Mr.y,Mr.x,0];return!Nl(e,is,rs,ss,uo)||(e=[1,0,0,0,1,0,0,0,1],!Nl(e,is,rs,ss,uo))?!1:(ho.crossVectors(Xi,Yi),e=[ho.x,ho.y,ho.z],Nl(e,is,rs,ss,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new H,new H,new H,new H,new H,new H,new H,new H],ei=new H,co=new $a,is=new H,rs=new H,ss=new H,Xi=new H,Yi=new H,Mr=new H,ia=new H,uo=new H,ho=new H,Sr=new H;function Nl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sr.fromArray(r,s);const o=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=t.dot(Sr),c=e.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const S0=new $a,ra=new H,Fl=new H;class pl{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):S0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);const e=ra.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(Fl)),this.expandByPoint(ra.copy(t.center).sub(Fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new H,Ol=new H,fo=new H,qi=new H,Bl=new H,po=new H,zl=new H;class qp{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ol.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(Ol);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fo),o=qi.dot(this.direction),l=-qi.dot(fo),c=qi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ol).addScaledVector(fo,h),d}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,i,s){Bl.subVectors(e,t),po.subVectors(n,t),zl.crossVectors(Bl,po);let a=this.direction.dot(zl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,t);const l=o*this.direction.dot(po.crossVectors(qi,po));if(l<0)return null;const c=o*this.direction.dot(Bl.cross(qi));if(c<0||l+c>a)return null;const u=-o*qi.dot(zl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,m)}set(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,E0)}lookAt(t,e,n){const i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),$i.crossVectors(n,Dn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),$i.crossVectors(n,Dn)),$i.normalize(),mo.crossVectors(Dn,$i),i[0]=$i.x,i[4]=mo.x,i[8]=Dn.x,i[1]=$i.y,i[5]=mo.y,i[9]=Dn.y,i[2]=$i.z,i[6]=mo.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],E=n[7],x=n[11],R=n[15],A=i[0],b=i[4],C=i[8],M=i[12],v=i[1],P=i[5],N=i[9],z=i[13],X=i[2],$=i[6],Y=i[10],O=i[14],B=i[3],tt=i[7],D=i[11],ut=i[15];return s[0]=a*A+o*v+l*X+c*B,s[4]=a*b+o*P+l*$+c*tt,s[8]=a*C+o*N+l*Y+c*D,s[12]=a*M+o*z+l*O+c*ut,s[1]=u*A+f*v+h*X+d*B,s[5]=u*b+f*P+h*$+d*tt,s[9]=u*C+f*N+h*Y+d*D,s[13]=u*M+f*z+h*O+d*ut,s[2]=_*A+g*v+m*X+p*B,s[6]=_*b+g*P+m*$+p*tt,s[10]=_*C+g*N+m*Y+p*D,s[14]=_*M+g*z+m*O+p*ut,s[3]=y*A+E*v+x*X+R*B,s[7]=y*b+E*P+x*$+R*tt,s[11]=y*C+E*N+x*Y+R*D,s[15]=y*M+E*z+x*O+R*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+g*(+e*l*d-e*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+m*(+e*c*f-e*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-e*l*f+e*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,E=_*h*c-u*m*c-_*l*d+a*m*d+u*l*p-a*h*p,x=u*g*c-_*f*c+_*o*d-a*g*d-u*o*p+a*f*p,R=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,A=e*y+n*E+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=y*b,t[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*b,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*b,t[4]=E*b,t[5]=(u*m*s-_*h*s+_*i*d-e*m*d-u*i*p+e*h*p)*b,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*d+e*l*d)*b,t[8]=x*b,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*p-e*f*p)*b,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*b,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*b,t[12]=R*b,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*m+e*f*m)*b,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*b,t[15]=(a*f*i-u*o*i+u*n*l-e*f*l-a*n*h+e*o*h)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,m=a*f,p=o*f,y=l*c,E=l*u,x=l*f,R=n.x,A=n.y,b=n.z;return i[0]=(1-(g+p))*R,i[1]=(d+x)*R,i[2]=(_-E)*R,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(h+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(_+E)*b,i[9]=(m-y)*b,i[10]=(1-(h+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const a=as.set(i[4],i[5],i[6]).length(),o=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ni.copy(this);const c=1/s,u=1/a,f=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,e.setFromRotationMatrix(ni),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ni){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(o===Ni)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sl)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ni){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(a-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(o===Ni)_=(a+s)*f,g=-2*f;else if(o===sl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new H,ni=new Re,y0=new H(0,0,0),E0=new H(1,1,1),$i=new H,mo=new H,Dn=new H,cf=new Re,uf=new qa;class Mi{constructor(t=0,e=0,n=0,i=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uf.setFromEuler(this),this.setFromQuaternion(uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class $p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let T0=0;const hf=new H,os=new qa,bi=new Re,_o=new H,sa=new H,b0=new H,w0=new qa,ff=new H(1,0,0),df=new H(0,1,0),pf=new H(0,0,1),mf={type:"added"},A0={type:"removed"},ls={type:"childadded",child:null},kl={type:"childremoved",child:null};class Qe extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new H,e=new Mi,n=new qa,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new $t}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ff,t)}rotateY(t){return this.rotateOnAxis(df,t)}rotateZ(t){return this.rotateOnAxis(pf,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ff,t)}translateY(t){return this.translateOnAxis(df,t)}translateZ(t){return this.translateOnAxis(pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(sa,_o,this.up):bi.lookAt(_o,sa,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),os.setFromRotationMatrix(bi),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mf),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(A0),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mf),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,b0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,w0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new H(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new H,wi=new H,Hl=new H,Ai=new H,cs=new H,us=new H,_f=new H,Vl=new H,Gl=new H,Wl=new H,Xl=new ve,Yl=new ve,ql=new ve;class si{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ii.subVectors(i,e),wi.subVectors(n,e),Hl.subVectors(t,e);const a=ii.dot(ii),o=ii.dot(wi),l=ii.dot(Hl),c=wi.dot(wi),u=wi.dot(Hl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Xl.setScalar(0),Yl.setScalar(0),ql.setScalar(0),Xl.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Xl,s.x),a.addScaledVector(Yl,s.y),a.addScaledVector(ql,s.z),a}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),wi.subVectors(t,e),ii.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ii.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return si.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;cs.subVectors(i,n),us.subVectors(s,n),Vl.subVectors(t,n);const l=cs.dot(Vl),c=us.dot(Vl);if(l<=0&&c<=0)return e.copy(n);Gl.subVectors(t,i);const u=cs.dot(Gl),f=us.dot(Gl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(cs,a);Wl.subVectors(t,s);const d=cs.dot(Wl),_=us.dot(Wl);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(us,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return _f.subVectors(s,i),o=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(_f,o);const p=1/(m+g+h);return a=g*p,o=h*p,e.copy(n).addScaledVector(cs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},go={h:0,s:0,l:0};function $l(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=eh(t,1),e=_n(e,0,1),n=_n(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=$l(a,s,t+1/3),this.g=$l(a,s,t),this.b=$l(a,s,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Kp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return ae.fromWorkingColorSpace(en.copy(this),t),Math.round(_n(en.r*255,0,255))*65536+Math.round(_n(en.g*255,0,255))*256+Math.round(_n(en.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Mn){ae.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(go);const n=Da(Ki.h,go.h,e),i=Da(Ki.s,go.s,e),s=Da(Ki.l,go.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ce;ce.NAMES=Kp;let R0=0;class $s extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=qs(),this.name="",this.blending=Cs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class La extends $s{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new H,vo=new ue;class li{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jh&&(t.usage=this.usage),t}}class Zp extends li{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jp extends li{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class vi extends li{constructor(t,e,n){super(new Float32Array(t),e,n)}}let C0=0;const Yn=new Re,Kl=new Qe,hs=new H,Ln=new $a,aa=new $a,Ye=new H;class Si extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?jp:Zp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Ln.min,aa.min),Ln.expandByPoint(Ye),Ye.addVectors(Ln.max,aa.max),Ln.expandByPoint(Ye)):(Ln.expandByPoint(aa.min),Ln.expandByPoint(aa.max))}Ln.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ye.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Ye.add(hs)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new H,l[C]=new H;const c=new H,u=new H,f=new H,h=new ue,d=new ue,_=new ue,g=new H,m=new H;function p(C,M,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[M].add(g),o[v].add(g),l[C].add(m),l[M].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const v=y[C],P=v.start,N=v.count;for(let z=P,X=P+N;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new H,x=new H,R=new H,A=new H;function b(C){R.fromBufferAttribute(i,C),A.copy(R);const M=o[C];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(A,M);const P=x.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,M=y.length;C<M;++C){const v=y[C],P=v.start,N=v.count;for(let z=P,X=P+N;z<X;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new li(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new li(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Si,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new Re,yr=new qp,xo=new pl,vf=new H,Mo=new H,So=new H,yo=new H,Zl=new H,Eo=new H,xf=new H,To=new H;class yn extends Qe{constructor(t=new Si,e=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Zl.fromBufferAttribute(f,t),a?Eo.addScaledVector(Zl,u):Eo.addScaledVector(Zl.sub(e),u))}e.add(Eo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),yr.copy(t.ray).recast(t.near),!(xo.containsPoint(yr.origin)===!1&&(yr.intersectSphere(xo,vf)===null||yr.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(gf.copy(s).invert(),yr.copy(t.ray).applyMatrix4(gf),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const A=o.getX(x),b=o.getX(x+1),C=o.getX(x+2);i=bo(this,p,t,n,c,u,f,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=bo(this,a,t,n,c,u,f,y,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,R=E;x<R;x+=3){const A=x,b=x+1,C=x+2;i=bo(this,p,t,n,c,u,f,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=m,E=m+1,x=m+2;i=bo(this,a,t,n,c,u,f,y,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function P0(r,t,e,n,i,s,a,o){let l;if(t.side===An?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===pr,o),l===null)return null;To.copy(o),To.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:r}}function bo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Mo),r.getVertexPosition(l,So),r.getVertexPosition(c,yo);const u=P0(r,t,e,n,Mo,So,yo,xf);if(u){const f=new H;si.getBarycoord(xf,Mo,So,yo,f),i&&(u.uv=si.getInterpolatedAttribute(i,o,l,c,f,new ue)),s&&(u.uv1=si.getInterpolatedAttribute(s,o,l,c,f,new ue)),a&&(u.normal=si.getInterpolatedAttribute(a,o,l,c,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};si.getNormal(Mo,So,yo,h.normal),u.face=h,u.barycoord=f}return u}class Ks extends Si{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(f,2));function _(g,m,p,y,E,x,R,A,b,C,M){const v=x/b,P=R/C,N=x/2,z=R/2,X=A/2,$=b+1,Y=C+1;let O=0,B=0;const tt=new H;for(let D=0;D<Y;D++){const ut=D*P-z;for(let It=0;It<$;It++){const Zt=It*v-N;tt[g]=Zt*y,tt[m]=ut*E,tt[p]=X,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(It/b),f.push(1-D/C),O+=1}}for(let D=0;D<C;D++)for(let ut=0;ut<b;ut++){const It=h+ut+$*D,Zt=h+ut+$*(D+1),K=h+(ut+1)+$*(D+1),et=h+(ut+1)+$*D;l.push(It,Zt,et),l.push(Zt,K,et),B+=6}o.addGroup(d,B,M),d+=B,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function fn(r){const t={};for(let e=0;e<r.length;e++){const n=Gs(r[e]);for(const i in n)t[i]=n[i]}return t}function D0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Jp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const L0={clone:Gs,merge:fn};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends $s{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=D0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qp extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new H,Mf=new ue,Sf=new ue;class On extends Qp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Mf,Sf),e.subVectors(Sf,Mf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class N0 extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(fs,ds,t,e);i.layers=this.layers,this.add(i);const s=new On(fs,ds,t,e);s.layers=this.layers,this.add(s);const a=new On(fs,ds,t,e);a.layers=this.layers,this.add(a);const o=new On(fs,ds,t,e);o.layers=this.layers,this.add(o);const l=new On(fs,ds,t,e);l.layers=this.layers,this.add(l);const c=new On(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tm extends vn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class F0 extends $r{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ks(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:lr});s.uniforms.tEquirect.value=e;const a=new yn(i,s),o=e.minFilter;return e.minFilter===Fr&&(e.minFilter=_i),new N0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const jl=new H,O0=new H,B0=new $t;class Cr{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jl.subVectors(n,e).cross(O0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||B0.getNormalMatrix(t),i=this.coplanarPoint(jl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new pl,wo=new H;class nh{constructor(t=new Cr,e=new Cr,n=new Cr,i=new Cr,s=new Cr,a=new Cr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-s,h-c,m-d,x-p).normalize(),n[1].setComponents(l+s,h+c,m+d,x+p).normalize(),n[2].setComponents(l+a,h+u,m+_,x+y).normalize(),n[3].setComponents(l-a,h-u,m-_,x-y).normalize(),n[4].setComponents(l-o,h-f,m-g,x-E).normalize(),e===Ni)n[5].setComponents(l+o,h+f,m+g,x+E).normalize();else if(e===sl)n[5].setComponents(o,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function z0(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ws extends Si{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let E=0;E<c;E++){const x=E*f-s;_.push(x,-y,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;d.push(E,x,A),d.push(x,R,A)}this.setIndex(d),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(g,3)),this.setAttribute("uv",new vi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}var k0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_v="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:k0,alphahash_pars_fragment:H0,alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:Y0,aomap_pars_fragment:q0,batching_pars_vertex:$0,batching_vertex:K0,begin_vertex:Z0,beginnormal_vertex:j0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:tv,clipping_planes_fragment:ev,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:rv,color_fragment:sv,color_pars_fragment:av,color_pars_vertex:ov,color_vertex:lv,common:cv,cube_uv_reflection_fragment:uv,defaultnormal_vertex:hv,displacementmap_pars_vertex:fv,displacementmap_vertex:dv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:_v,colorspace_pars_fragment:gv,envmap_fragment:vv,envmap_common_pars_fragment:xv,envmap_pars_fragment:Mv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Lv,envmap_vertex:yv,fog_vertex:Ev,fog_pars_vertex:Tv,fog_fragment:bv,fog_pars_fragment:wv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:Rv,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Dv,lights_toon_fragment:Iv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Bv,lights_fragment_begin:zv,lights_fragment_maps:kv,lights_fragment_end:Hv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:Yv,map_pars_fragment:qv,map_particle_fragment:$v,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:jv,morphinstance_vertex:Jv,morphcolor_vertex:Qv,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ax,normal_vertex:ox,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:_x,dithering_fragment:gx,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:yx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:bx,skinning_pars_vertex:wx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Px,tonemapping_fragment:Dx,tonemapping_pars_fragment:Lx,transmission_fragment:Ix,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:kx,backgroundCube_vert:Hx,backgroundCube_frag:Vx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:Yx,distanceRGBA_vert:qx,distanceRGBA_frag:$x,equirect_vert:Kx,equirect_frag:Zx,linedashed_vert:jx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:tM,meshlambert_vert:eM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:rM,meshnormal_vert:sM,meshnormal_frag:aM,meshphong_vert:oM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:hM,meshtoon_frag:fM,points_vert:dM,points_frag:pM,shadow_vert:mM,shadow_frag:_M,sprite_vert:gM,sprite_frag:vM},_t={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},fi={basic:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ce(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:fn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:fn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:fn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ce(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:fn([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:fn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:fn([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:fn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:fn([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:fn([_t.common,_t.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:fn([_t.lights,_t.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ao={r:0,b:0,g:0},Tr=new Mi,xM=new Re;function MM(r,t,e,n,i,s,a){const o=new ce(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function g(y){let E=!1;const x=_(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,E){const x=_(E);x&&(x.isCubeTexture||x.mapping===fl)?(u===void 0&&(u=new yn(new Ks(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Gs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Tr.copy(E.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(Tr)),u.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yn(new Ws(2,2),new mr({name:"BackgroundMaterial",uniforms:Gs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(Ao,Jp(r)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:g,addToRenderList:m}}function SM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,P,N,z,X){let $=!1;const Y=f(z,N,P);s!==Y&&(s=Y,c(s.object)),$=d(v,z,N,X),$&&_(v,z,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(v,P,N,z),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,P,N){const z=N.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let $=X[P.id];$===void 0&&($={},X[P.id]=$);let Y=$[z];return Y===void 0&&(Y=h(l()),$[z]=Y),Y}function h(v){const P=[],N=[],z=[];for(let X=0;X<e;X++)P[X]=0,N[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,P,N,z){const X=s.attributes,$=P.attributes;let Y=0;const O=N.getAttributes();for(const B in O)if(O[B].location>=0){const D=X[B];let ut=$[B];if(ut===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),D===void 0||D.attribute!==ut||ut&&D.data!==ut.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function _(v,P,N,z){const X={},$=P.attributes;let Y=0;const O=N.getAttributes();for(const B in O)if(O[B].location>=0){let D=$[B];D===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const ut={};ut.attribute=D,D&&D.data&&(ut.data=D.data),X[B]=ut,Y++}s.attributes=X,s.attributesNum=Y,s.index=z}function g(){const v=s.newAttributes;for(let P=0,N=v.length;P<N;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const N=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;N[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),X[v]!==P&&(r.vertexAttribDivisor(v,P),X[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==v[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function E(v,P,N,z,X,$,Y){Y===!0?r.vertexAttribIPointer(v,P,N,X,$):r.vertexAttribPointer(v,P,N,z,X,$)}function x(v,P,N,z){g();const X=z.attributes,$=N.getAttributes(),Y=P.defaultAttributeValues;for(const O in $){const B=$[O];if(B.location>=0){let tt=X[O];if(tt===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){const D=tt.normalized,ut=tt.itemSize,It=t.get(tt);if(It===void 0)continue;const Zt=It.buffer,K=It.type,et=It.bytesPerElement,gt=K===r.INT||K===r.UNSIGNED_INT||tt.gpuType===Ku;if(tt.isInterleavedBufferAttribute){const nt=tt.data,Et=nt.stride,Rt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<B.locationSize;Ht++)p(B.location+Ht,nt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ht=0;Ht<B.locationSize;Ht++)m(B.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let Ht=0;Ht<B.locationSize;Ht++)E(B.location+Ht,ut/B.locationSize,K,D,Et*et,(Rt+ut/B.locationSize*Ht)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)p(B.location+nt,tt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<B.locationSize;nt++)m(B.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let nt=0;nt<B.locationSize;nt++)E(B.location+nt,ut/B.locationSize,K,D,ut*et,ut/B.locationSize*nt*et,gt)}}else if(Y!==void 0){const D=Y[O];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(B.location,D);break;case 3:r.vertexAttrib3fv(B.location,D);break;case 4:r.vertexAttrib4fv(B.location,D);break;default:r.vertexAttrib1fv(B.location,D)}}}}y()}function R(){C();for(const v in n){const P=n[v];for(const N in P){const z=P[N];for(const X in z)u(z[X].object),delete z[X];delete P[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const N in P){const z=P[N];for(const X in z)u(z[X].object),delete z[X];delete P[N]}delete n[v.id]}function b(v){for(const P in n){const N=n[P];if(N[v.id]===void 0)continue;const z=N[v.id];for(const X in z)u(z[X].object),delete z[X];delete N[v.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function yM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function EM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==ai&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Hi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ui&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function TM(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Cr,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,E=y*4;let x=p.clippingState||null;l.value=x,x=u(_,h,E,d);for(let R=0;R!==E;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==g;++E,x+=4)a.copy(f[E]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function bM(r){let t=new WeakMap;function e(a,o){return o===Gc?a.mapping=zs:o===Wc&&(a.mapping=ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gc||o===Wc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new F0(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class nm extends Qp{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,yf=[.125,.215,.35,.446,.526,.582],Lr=20,Jl=new nm,Ef=new ce;let Ql=null,tc=0,ec=0,nc=!1;const Pr=(1+Math.sqrt(5))/2,ps=1/Pr,Tf=[new H(-Pr,ps,0),new H(Pr,ps,0),new H(-ps,0,Pr),new H(ps,0,Pr),new H(0,Pr,-ps),new H(0,Pr,ps),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class bf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ql=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ql,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ql=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Ya,format:ai,colorSpace:Xs,depthBuffer:!1},i=wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(s)),this._blurMaterial=AM(s,t,e)}return i}_compileMaterial(t){const e=new yn(this._lodPlanes[0],t);this._renderer.compile(e,Jl)}_sceneToCubeUV(t,e,n,i){const o=new On(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ef),u.toneMapping=cr,u.autoClear=!1;const d=new La({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),_=new yn(new Ks,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Ef),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Ro(i,y*E,p>2?E:0,E,E),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zs||t.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tf[(i-s-1)%Tf.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let y=0;for(let b=0;b<Lr;++b){const C=b/g,M=Math.exp(-C*C/2);p.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const x=this._sizeLods[i],R=3*x*(i>E-Ss?i-E+Ss:0),A=4*(this._cubeSize-x);Ro(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(f,Jl)}}function wM(r){const t=[],e=[],n=[];let i=r;const s=r-Ss+1+yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ss?l=yf[a-r+Ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),E=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,C=A>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(M,g*_*A),E.set(h,m*_*A);const v=[A,A,A,A,A,A];x.set(v,p*_*A)}const R=new Si;R.setAttribute("position",new li(y,g)),R.setAttribute("uv",new li(E,m)),R.setAttribute("faceIndex",new li(x,p)),t.push(R),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wf(r,t,e){const n=new $r(r,t,e);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function AM(r,t,e){const n=new Float32Array(Lr),i=new H(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Af(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Rf(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RM(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gc||l===Wc,u=l===zs||l===ks;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new bf(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new bf(r)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function CM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&_a("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PM(r,t,e,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let E=0,x=y.length;E<x;E+=3){const R=y[E+0],A=y[E+1],b=y[E+2];h.push(R,A,A,b,b,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const R=E+0,A=E+1,b=E+2;h.push(R,A,A,b,b,R)}}else return;const m=new(Wp(h)?jp:Zp)(h,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function DM(r,t,e){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*a,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function IM(r,t,e){const n=new WeakMap,i=new ve;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*A*4*f),C=new Yp(b,R,A,f);C.type=Ui,C.needsUpdate=!0;const M=x*4;for(let P=0;P<f;P++){const N=p[P],z=y[P],X=E[P],$=R*A*4*P;for(let Y=0;Y<N.count;Y++){const O=Y*M;_===!0&&(i.fromBufferAttribute(N,Y),b[$+O+0]=i.x,b[$+O+1]=i.y,b[$+O+2]=i.z,b[$+O+3]=0),g===!0&&(i.fromBufferAttribute(z,Y),b[$+O+4]=i.x,b[$+O+5]=i.y,b[$+O+6]=i.z,b[$+O+7]=0),m===!0&&(i.fromBufferAttribute(X,Y),b[$+O+8]=i.x,b[$+O+9]=i.y,b[$+O+10]=i.z,b[$+O+11]=X.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new ue(R,A)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function UM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class im extends vn{constructor(t,e,n,i,s,a,o,l,c,u=Ps){if(u!==Ps&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ps&&(n=qr),n===void 0&&u===Vs&&(n=Hs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rm=new vn,Cf=new im(1,1),sm=new Yp,am=new M0,om=new tm,Pf=[],Df=[],Lf=new Float32Array(16),If=new Float32Array(9),Uf=new Float32Array(4);function Zs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Pf[i];if(s===void 0&&(s=new Float32Array(i),Pf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ml(r,t){let e=Df[t];e===void 0&&(e=new Int32Array(t),Df[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function NM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function OM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function BM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function zM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Uf.set(n),r.uniformMatrix2fv(this.addr,!1,Uf),Xe(e,n)}}function kM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;If.set(n),r.uniformMatrix3fv(this.addr,!1,If),Xe(e,n)}}function HM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Lf.set(n),r.uniformMatrix4fv(this.addr,!1,Lf),Xe(e,n)}}function VM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function GM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function WM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function XM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function YM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function $M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function KM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function ZM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Cf.compareFunction=Gp,s=Cf):s=rm,e.setTexture2D(t||s,i)}function jM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||am,i)}function JM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||om,i)}function QM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sm,i)}function tS(r){switch(r){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return BM;case 35674:return zM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return YM;case 36294:return qM;case 36295:return $M;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}function eS(r,t){r.uniform1fv(this.addr,t)}function nS(r,t){const e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function iS(r,t){const e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function rS(r,t){const e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function sS(r,t){const e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function aS(r,t){const e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function oS(r,t){const e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lS(r,t){r.uniform1iv(this.addr,t)}function cS(r,t){r.uniform2iv(this.addr,t)}function uS(r,t){r.uniform3iv(this.addr,t)}function hS(r,t){r.uniform4iv(this.addr,t)}function fS(r,t){r.uniform1uiv(this.addr,t)}function dS(r,t){r.uniform2uiv(this.addr,t)}function pS(r,t){r.uniform3uiv(this.addr,t)}function mS(r,t){r.uniform4uiv(this.addr,t)}function _S(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rm,s[a])}function gS(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||am,s[a])}function vS(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||om,s[a])}function xS(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||sm,s[a])}function MS(r){switch(r){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return aS;case 35676:return oS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return hS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}class SS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tS(e.type)}}class yS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=MS(e.type)}}class ES{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function Nf(r,t){r.seq.push(t),r.map[t.id]=t}function TS(r,t,e){const n=r.name,i=n.length;for(ic.lastIndex=0;;){const s=ic.exec(n),a=ic.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nf(e,c===void 0?new SS(o,r,t):new yS(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new ES(o),Nf(e,f)),e=f}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);TS(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ff(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bS=37297;let wS=0;function AS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Of=new $t;function RS(r){ae._getMatrix(Of,ae.workingColorSpace,r);const t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case dl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Bf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+AS(r.getShaderSource(t),a)}else return i}function CS(r,t){const e=RS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function PS(r,t){let e;switch(t){case Lg:e="Linear";break;case Ig:e="Reinhard";break;case Ug:e="Cineon";break;case Ng:e="ACESFilmic";break;case Og:e="AgX";break;case Bg:e="Neutral";break;case Fg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new H;function DS(){ae.getLuminanceCoefficients(Co);const r=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function IS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function US(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ga(r){return r!==""}function zf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(r){return r.replace(NS,OS)}const FS=new Map;function OS(r,t){let e=Kt[t];if(e===void 0){const n=FS.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xu(e)}const BS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(r){return r.replace(BS,zS)}function zS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===hg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function HS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zs:case ks:t="ENVMAP_TYPE_CUBE";break;case fl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function GS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pp:t="ENVMAP_BLENDING_MULTIPLY";break;case Pg:t="ENVMAP_BLENDING_MIX";break;case Dg:t="ENVMAP_BLENDING_ADD";break}return t}function WS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function XS(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=kS(e),c=HS(e),u=VS(e),f=GS(e),h=WS(e),d=LS(e),_=IS(s),g=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==cr?PS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,CS("linearToOutputTexel",e.outputColorSpace),DS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),a=xu(a),a=zf(a,e),a=kf(a,e),o=xu(o),o=zf(o,e),o=kf(o,e),a=Hf(a),o=Hf(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,x=y+p+o,R=Ff(i,i.VERTEX_SHADER,E),A=Ff(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(A).trim();let $=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const O=Bf(i,R,"vertex"),B=Bf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+O+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||X==="")&&(Y=!1);Y&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(R),i.deleteShader(A),C=new qo(i,g),M=US(i,g)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,bS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let YS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $S(t),e.set(t,n)),n}}class $S{constructor(t){this.id=YS++,this.code=t,this.usedTimes=0}}function KS(r,t,e,n,i,s,a){const o=new $p,l=new qS,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,P,N,z){const X=N.fog,$=z.geometry,Y=M.isMeshStandardMaterial?N.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),B=O&&O.mapping===fl?O.image.height:null,tt=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=D!==void 0?D.length:0;let It=0;$.morphAttributes.position!==void 0&&(It=1),$.morphAttributes.normal!==void 0&&(It=2),$.morphAttributes.color!==void 0&&(It=3);let Zt,K,et,gt;if(tt){const vt=fi[tt];Zt=vt.vertexShader,K=vt.fragmentShader}else Zt=M.vertexShader,K=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),gt=l.getFragmentShaderID(M);const nt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,Ht=z.isBatchedMesh===!0,jt=!!M.map,Nt=!!M.matcap,Dt=!!O,I=!!M.aoMap,xe=!!M.lightMap,Ot=!!M.bumpMap,k=!!M.normalMap,Tt=!!M.displacementMap,ie=!!M.emissiveMap,Ct=!!M.metalnessMap,w=!!M.roughnessMap,S=M.anisotropy>0,G=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,ht=M.transmission>0,ot=S&&!!M.anisotropyMap,pt=G&&!!M.clearcoatMap,Wt=G&&!!M.clearcoatNormalMap,it=G&&!!M.clearcoatRoughnessMap,at=J&&!!M.iridescenceMap,Ut=J&&!!M.iridescenceThicknessMap,Lt=Z&&!!M.sheenColorMap,xt=Z&&!!M.sheenRoughnessMap,Yt=!!M.specularMap,Ft=!!M.specularColorMap,se=!!M.specularIntensityMap,L=ht&&!!M.transmissionMap,ct=ht&&!!M.thicknessMap,q=!!M.gradientMap,j=!!M.alphaMap,lt=M.alphaTest>0,ft=!!M.alphaHash,Bt=!!M.extensions;let oe=cr;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Ie={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:K,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xs,alphaToCoverage:!!M.alphaToCoverage,map:jt,matcap:Nt,envMap:Dt,envMapMode:Dt&&O.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:xe,bumpMap:Ot,normalMap:k,displacementMap:h&&Tt,emissiveMap:ie,normalMapObjectSpace:k&&M.normalMapType===Vg,normalMapTangentSpace:k&&M.normalMapType===Vp,metalnessMap:Ct,roughnessMap:w,anisotropy:S,anisotropyMap:ot,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:J,iridescenceMap:at,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:Yt,specularColorMap:Ft,specularIntensityMap:se,transmission:ht,transmissionMap:L,thicknessMap:ct,gradientMap:q,opaque:M.transparent===!1&&M.blending===Cs&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:ft,combine:M.combine,mapUv:jt&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:xe&&g(M.lightMap.channel),bumpMapUv:Ot&&g(M.bumpMap.channel),normalMapUv:k&&g(M.normalMap.channel),displacementMapUv:Tt&&g(M.displacementMap.channel),emissiveMapUv:ie&&g(M.emissiveMap.channel),metalnessMapUv:Ct&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:ot&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(M.sheenRoughnessMap.channel),specularMapUv:Yt&&g(M.specularMap.channel),specularColorMapUv:Ft&&g(M.specularColorMap.channel),specularIntensityMapUv:se&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ct&&g(M.thicknessMap.channel),alphaMapUv:j&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(k||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(jt||j),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:jt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Li,flipSided:M.side===An,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)v.push(P),v.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(v,M),E(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const v=_[M.type];let P;if(v){const N=fi[v];P=L0.clone(N.uniforms)}else P=M.uniforms;return P}function R(M,v){let P;for(let N=0,z=u.length;N<z;N++){const X=u[N];if(X.cacheKey===v){P=X,++P.usedTimes;break}}return P===void 0&&(P=new XS(r,v,M,s),u.push(P)),P}function A(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:C}}function ZS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function jS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,h,d,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function o(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||jS),n.length>1&&n.sort(h||Gf),i.length>1&&i.sort(h||Gf)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function JS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Wf,r.set(n,[a])):i>=s.length?(a=new Wf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function QS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ce};break;case"SpotLight":e={position:new H,direction:new H,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function ty(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ey=0;function ny(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function iy(r){const t=new QS,e=ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new Re,a=new Re;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,y=0,E=0,x=0,R=0,A=0,b=0;c.sort(ny);for(let M=0,v=c.length;M<v;M++){const P=c[M],N=P.color,z=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,f+=N.g*z,h+=N.b*z;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],z);b++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,B=e.get(P);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=Y,d++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(N).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[g]=Y;const O=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,O.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=O.matrix,P.castShadow){const B=e.get(P);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=$,x++}g++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(N).multiplyScalar(z),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const O=P.shadow,B=e.get(P);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(z),Y.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=b,n.version=ey++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Xf(r){const t=new iy(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ry(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Xf(r),t.set(i,[o])):s>=a.length?(o=new Xf(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class sy extends $s{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ay extends $s{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cy(r,t,e){let n=new nh;const i=new ue,s=new ue,a=new ve,o=new sy({depthPacking:Hg}),l=new ay,c={},u=e.maxTextureSize,f={[pr]:An,[An]:pr,[Li]:Li},h=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:oy,fragmentShader:ly}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Si;_.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cp;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(lr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==Ri&&this.type===Ri,X=p===Ri&&this.type!==Ri;for(let $=0,Y=A.length;$<Y;$++){const O=A[$],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const tt=B.getFrameExtents();if(i.multiply(tt),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/tt.x),i.x=s.x*tt.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/tt.y),i.y=s.y*tt.y,B.mapSize.y=s.y)),B.map===null||z===!0||X===!0){const ut=this.type!==Ri?{minFilter:oi,magFilter:oi}:{};B.map!==null&&B.map.dispose(),B.map=new $r(i.x,i.y,ut),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const D=B.getViewportCount();for(let ut=0;ut<D;ut++){const It=B.getViewport(ut);a.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),N.viewport(a),B.updateMatrices(O,ut),n=B.getFrustum(),x(b,C,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Ri&&y(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,v,P)};function y(A,b){const C=t.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $r(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,h,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,d,g,null)}function E(A,b,C,M){let v=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=v.uuid,z=b.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let $=X[z];$===void 0&&($=v.clone(),X[z]=$,b.addEventListener("dispose",R)),v=$}if(v.visible=b.visible,v.wireframe=b.wireframe,M===Ri?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=C}return v}function x(A,b,C,M,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=t.update(A),X=A.material;if(Array.isArray(X)){const $=z.groups;for(let Y=0,O=$.length;Y<O;Y++){const B=$[Y],tt=X[B.materialIndex];if(tt&&tt.visible){const D=E(A,tt,M,v);A.onBeforeShadow(r,A,b,C,z,D,B),r.renderBufferDirect(C,null,z,D,A,B),A.onAfterShadow(r,A,b,C,z,D,B)}}}else if(X.visible){const $=E(A,X,M,v);A.onBeforeShadow(r,A,b,C,z,$,null),r.renderBufferDirect(C,null,z,$,A,null),A.onAfterShadow(r,A,b,C,z,$,null)}}const N=A.children;for(let z=0,X=N.length;z<X;z++)x(N[z],b,C,M,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const M=c[C],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const uy={[Fc]:Oc,[Bc]:Hc,[zc]:Vc,[Bs]:kc,[Oc]:Fc,[Hc]:Bc,[Vc]:zc,[kc]:Bs};function hy(r,t){function e(){let L=!1;const ct=new ve;let q=null;const j=new ve(0,0,0,0);return{setMask:function(lt){q!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ft,Bt,oe,Ie){Ie===!0&&(lt*=oe,ft*=oe,Bt*=oe),ct.set(lt,ft,Bt,oe),j.equals(ct)===!1&&(r.clearColor(lt,ft,Bt,oe),j.copy(ct))},reset:function(){L=!1,q=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,q=null,j=null,lt=null;return{setReversed:function(ft){if(ct!==ft){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const oe=lt;lt=null,this.setClear(oe)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ft){q!==ft&&!L&&(r.depthMask(ft),q=ft)},setFunc:function(ft){if(ct&&(ft=uy[ft]),j!==ft){switch(ft){case Fc:r.depthFunc(r.NEVER);break;case Oc:r.depthFunc(r.ALWAYS);break;case Bc:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case zc:r.depthFunc(r.EQUAL);break;case kc:r.depthFunc(r.GEQUAL);break;case Hc:r.depthFunc(r.GREATER);break;case Vc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ft}},setLocked:function(ft){L=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){L=!1,q=null,j=null,lt=null,ct=!1}}}function i(){let L=!1,ct=null,q=null,j=null,lt=null,ft=null,Bt=null,oe=null,Ie=null;return{setTest:function(vt){L||(vt?nt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!L&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,bt,qt){(q!==vt||j!==bt||lt!==qt)&&(r.stencilFunc(vt,bt,qt),q=vt,j=bt,lt=qt)},setOp:function(vt,bt,qt){(ft!==vt||Bt!==bt||oe!==qt)&&(r.stencilOp(vt,bt,qt),ft=vt,Bt=bt,oe=qt)},setLocked:function(vt){L=vt},setClear:function(vt){Ie!==vt&&(r.clearStencil(vt),Ie=vt)},reset:function(){L=!1,ct=null,q=null,j=null,lt=null,ft=null,Bt=null,oe=null,Ie=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,E=null,x=null,R=null,A=null,b=new ce(0,0,0),C=0,M=!1,v=null,P=null,N=null,z=null,X=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=O>=2);let tt=null,D={};const ut=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Zt=new ve().fromArray(ut),K=new ve().fromArray(It);function et(L,ct,q,j){const lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(L,ft),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<q;Bt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}const gt={};gt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(Bs),Ot(!1),k(Yh),nt(r.CULL_FACE),I(lr);function nt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Et(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Rt(L,ct){return f[L]!==ct?(r.bindFramebuffer(L,ct),f[L]=ct,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(L,ct){let q=d,j=!1;if(L){q=h.get(ct),q===void 0&&(q=[],h.set(ct,q));const lt=L.textures;if(q.length!==lt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Bt=lt.length;ft<Bt;ft++)q[ft]=r.COLOR_ATTACHMENT0+ft;q.length=lt.length,j=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,j=!0);j&&r.drawBuffers(q)}function jt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const Nt={[Dr]:r.FUNC_ADD,[dg]:r.FUNC_SUBTRACT,[pg]:r.FUNC_REVERSE_SUBTRACT};Nt[mg]=r.MIN,Nt[_g]=r.MAX;const Dt={[gg]:r.ZERO,[vg]:r.ONE,[xg]:r.SRC_COLOR,[Uc]:r.SRC_ALPHA,[bg]:r.SRC_ALPHA_SATURATE,[Eg]:r.DST_COLOR,[Sg]:r.DST_ALPHA,[Mg]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[Tg]:r.ONE_MINUS_DST_COLOR,[yg]:r.ONE_MINUS_DST_ALPHA,[wg]:r.CONSTANT_COLOR,[Ag]:r.ONE_MINUS_CONSTANT_COLOR,[Rg]:r.CONSTANT_ALPHA,[Cg]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,ct,q,j,lt,ft,Bt,oe,Ie,vt){if(L===lr){g===!0&&(Et(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),L!==fg){if(L!==m||vt!==M){if((p!==Dr||x!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,x=Dr),vt)switch(L){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qh:r.blendFunc(r.ONE,r.ONE);break;case $h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,R=null,A=null,b.set(0,0,0),C=0,m=L,M=vt}return}lt=lt||ct,ft=ft||q,Bt=Bt||j,(ct!==p||lt!==x)&&(r.blendEquationSeparate(Nt[ct],Nt[lt]),p=ct,x=lt),(q!==y||j!==E||ft!==R||Bt!==A)&&(r.blendFuncSeparate(Dt[q],Dt[j],Dt[ft],Dt[Bt]),y=q,E=j,R=ft,A=Bt),(oe.equals(b)===!1||Ie!==C)&&(r.blendColor(oe.r,oe.g,oe.b,Ie),b.copy(oe),C=Ie),m=L,M=!1}function xe(L,ct){L.side===Li?Et(r.CULL_FACE):nt(r.CULL_FACE);let q=L.side===An;ct&&(q=!q),Ot(q),L.blending===Cs&&L.transparent===!1?I(lr):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function k(L){L!==cg?(nt(r.CULL_FACE),L!==P&&(L===Yh?r.cullFace(r.BACK):L===ug?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=L}function Tt(L){L!==N&&(Y&&r.lineWidth(L),N=L)}function ie(L,ct,q){L?(nt(r.POLYGON_OFFSET_FILL),(z!==ct||X!==q)&&(r.polygonOffset(ct,q),z=ct,X=q)):Et(r.POLYGON_OFFSET_FILL)}function Ct(L){L?nt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function w(L){L===void 0&&(L=r.TEXTURE0+$-1),tt!==L&&(r.activeTexture(L),tt=L)}function S(L,ct,q){q===void 0&&(tt===null?q=r.TEXTURE0+$-1:q=tt);let j=D[q];j===void 0&&(j={type:void 0,texture:void 0},D[q]=j),(j.type!==L||j.texture!==ct)&&(tt!==q&&(r.activeTexture(q),tt=q),r.bindTexture(L,ct||gt[L]),j.type=L,j.texture=ct)}function G(){const L=D[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Zt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function xt(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Yt(L,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let j=q.get(L);j===void 0&&(j=r.getUniformBlockIndex(ct,L.name),q.set(L,j))}function Ft(L,ct){const j=c.get(ct).get(L);l.get(ct)!==j&&(r.uniformBlockBinding(ct,j,L.__bindingPointIndex),l.set(ct,j))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},tt=null,D={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,E=null,x=null,R=null,A=null,b=new ce(0,0,0),C=0,M=!1,v=null,P=null,N=null,z=null,X=null,Zt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:Et,bindFramebuffer:Rt,drawBuffers:Ht,useProgram:jt,setBlending:I,setMaterial:xe,setFlipSided:Ot,setCullFace:k,setLineWidth:Tt,setPolygonOffset:ie,setScissorTest:Ct,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:at,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Lt,viewport:xt,reset:se}}function Yf(r,t,e,n){const i=fy(n);switch(e){case Np:return r*t;case Op:return r*t;case Bp:return r*t*2;case zp:return r*t/i.components*i.byteLength;case Ju:return r*t/i.components*i.byteLength;case kp:return r*t*2/i.components*i.byteLength;case Qu:return r*t*2/i.components*i.byteLength;case Fp:return r*t*3/i.components*i.byteLength;case ai:return r*t*4/i.components*i.byteLength;case th:return r*t*4/i.components*i.byteLength;case Vo:case Go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $c:case Zc:return Math.max(r,16)*Math.max(t,8)/4;case qc:case Kc:return Math.max(r,8)*Math.max(t,8)/2;case jc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case su:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case au:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ou:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case uu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yo:case pu:case mu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hp:case _u:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gu:case vu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fy(r){switch(r){case Hi:case Lp:return{byteLength:1,components:1};case Ga:case Ip:case Ya:return{byteLength:2,components:1};case Zu:case ju:return{byteLength:2,components:4};case qr:case Ku:case Ui:return{byteLength:4,components:1};case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function dy(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):al("canvas")}function g(w,S,G){let Q=1;const J=Ct(w);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);f===void 0&&(f=_(Z,ht));const ot=S?_(Z,ht):f;return ot.width=Z,ot.height=ht,ot.getContext("2d").drawImage(w,0,0,Z,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ht+")."),ot}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(w,S,G,Q,J=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),S===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const ht=J?dl:ae.getTransfer(Q);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=ht===ge?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(w,S){let G;return w?S===null||S===qr||S===Hs?G=r.DEPTH24_STENCIL8:S===Ui?G=r.DEPTH32F_STENCIL8:S===Ga&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qr||S===Hs?G=r.DEPTH_COMPONENT24:S===Ui?G=r.DEPTH_COMPONENT32F:S===Ga&&(G=r.DEPTH_COMPONENT16),G}function R(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==oi&&w.minFilter!==_i?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&u.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),v(S)}function C(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,Q=h.get(G);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(Q).length===0&&h.delete(G)}n.remove(w)}function M(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const G=w.source,Q=h.get(G);delete Q[S.__cacheKey],a.memory.textures--}function v(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let J=0;J<S.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let Q=0,J=G.length;Q<J;Q++){const Z=n.get(G[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[Q])}n.remove(w)}let P=0;function N(){P=0}function z(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function $(w,S){const G=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,w,S);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Y(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){K(G,w,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function O(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){K(G,w,S);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function B(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){et(G,w,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const tt={[Xc]:r.REPEAT,[Nr]:r.CLAMP_TO_EDGE,[Yc]:r.MIRRORED_REPEAT},D={[oi]:r.NEAREST,[zg]:r.NEAREST_MIPMAP_NEAREST,[lo]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[Dl]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},ut={[Gg]:r.NEVER,[Kg]:r.ALWAYS,[Wg]:r.LESS,[Gp]:r.LEQUAL,[Xg]:r.EQUAL,[$g]:r.GEQUAL,[Yg]:r.GREATER,[qg]:r.NOTEQUAL};function It(w,S){if(S.type===Ui&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_i||S.magFilter===Dl||S.magFilter===lo||S.magFilter===Fr||S.minFilter===_i||S.minFilter===Dl||S.minFilter===lo||S.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,tt[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,tt[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,tt[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,D[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,D[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===oi||S.minFilter!==lo&&S.minFilter!==Fr||S.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const Q=S.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const Z=X(S);if(Z!==w.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[Z].usedTimes++;const ht=J[w.__cacheKey];ht!==void 0&&(J[w.__cacheKey].usedTimes--,ht.usedTimes===0&&M(S)),w.__cacheKey=Z,w.__webglTexture=J[Z].texture}return G}function K(w,S,G){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Zt(w,S),Z=S.source;e.bindTexture(Q,w.__webglTexture,r.TEXTURE0+G);const ht=n.get(Z);if(Z.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+G);const ot=ae.getPrimaries(ae.workingColorSpace),pt=S.colorSpace===Ji?null:ae.getPrimaries(S.colorSpace),Wt=S.colorSpace===Ji||ot===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let it=g(S.image,!1,i.maxTextureSize);it=ie(S,it);const at=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let Lt=E(S.internalFormat,at,Ut,S.colorSpace,S.isVideoTexture);It(Q,S);let xt;const Yt=S.mipmaps,Ft=S.isVideoTexture!==!0,se=ht.__version===void 0||J===!0,L=Z.dataReady,ct=R(S,it);if(S.isDepthTexture)Lt=x(S.format===Vs,S.type),se&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,at,Ut,null));else if(S.isDataTexture)if(Yt.length>0){Ft&&se&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Yt[0].width,Yt[0].height);for(let q=0,j=Yt.length;q<j;q++)xt=Yt[q],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,Ut,xt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,at,Ut,xt.data);S.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,at,Ut,it.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,it.width,it.height,0,at,Ut,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,Yt[0].width,Yt[0].height,it.depth);for(let q=0,j=Yt.length;q<j;q++)if(xt=Yt[q],S.format!==ai)if(at!==null)if(Ft){if(L)if(S.layerUpdates.size>0){const lt=Yf(xt.width,xt.height,S.format,S.type);for(const ft of S.layerUpdates){const Bt=xt.data.subarray(ft*lt/xt.data.BYTES_PER_ELEMENT,(ft+1)*lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ft,xt.width,xt.height,1,at,Bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,at,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,it.depth,at,Ut,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Lt,xt.width,xt.height,it.depth,0,at,Ut,xt.data)}else{Ft&&se&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Yt[0].width,Yt[0].height);for(let q=0,j=Yt.length;q<j;q++)xt=Yt[q],S.format!==ai?at!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt.width,xt.height,at,Ut,xt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,xt.width,xt.height,0,at,Ut,xt.data)}else if(S.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,it.width,it.height,it.depth),L)if(S.layerUpdates.size>0){const q=Yf(it.width,it.height,S.format,S.type);for(const j of S.layerUpdates){const lt=it.data.subarray(j*q/it.data.BYTES_PER_ELEMENT,(j+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,at,Ut,lt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,at,Ut,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,at,Ut,it.data);else if(S.isData3DTexture)Ft?(se&&e.texStorage3D(r.TEXTURE_3D,ct,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,at,Ut,it.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,at,Ut,it.data);else if(S.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(r.TEXTURE_2D,ct,Lt,it.width,it.height);else{let q=it.width,j=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,Lt,q,j,0,at,Ut,null),q>>=1,j>>=1}}else if(Yt.length>0){if(Ft&&se){const q=Ct(Yt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Lt,q.width,q.height)}for(let q=0,j=Yt.length;q<j;q++)xt=Yt[q],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,at,Ut,xt):e.texImage2D(r.TEXTURE_2D,q,Lt,at,Ut,xt);S.generateMipmaps=!1}else if(Ft){if(se){const q=Ct(it);e.texStorage2D(r.TEXTURE_2D,ct,Lt,q.width,q.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,Ut,it)}else e.texImage2D(r.TEXTURE_2D,0,Lt,at,Ut,it);m(S)&&p(Q),ht.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function et(w,S,G){if(S.image.length!==6)return;const Q=Zt(w,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const ht=ae.getPrimaries(ae.workingColorSpace),ot=S.colorSpace===Ji?null:ae.getPrimaries(S.colorSpace),pt=S.colorSpace===Ji||ht===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,at=[];for(let j=0;j<6;j++)!Wt&&!it?at[j]=g(S.image[j],!0,i.maxCubemapSize):at[j]=it?S.image[j].image:S.image[j],at[j]=ie(S,at[j]);const Ut=at[0],Lt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),Yt=E(S.internalFormat,Lt,xt,S.colorSpace),Ft=S.isVideoTexture!==!0,se=Z.__version===void 0||Q===!0,L=J.dataReady;let ct=R(S,Ut);It(r.TEXTURE_CUBE_MAP,S);let q;if(Wt){Ft&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Yt,Ut.width,Ut.height);for(let j=0;j<6;j++){q=at[j].mipmaps;for(let lt=0;lt<q.length;lt++){const ft=q[lt];S.format!==ai?Lt!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ft.width,ft.height,Lt,xt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,Yt,ft.width,ft.height,0,Lt,xt,ft.data)}}}else{if(q=S.mipmaps,Ft&&se){q.length>0&&ct++;const j=Ct(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Yt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,at[j].width,at[j].height,Lt,xt,at[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,at[j].width,at[j].height,0,Lt,xt,at[j].data);for(let lt=0;lt<q.length;lt++){const Bt=q[lt].image[j].image;Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Bt.width,Bt.height,Lt,xt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Yt,Bt.width,Bt.height,0,Lt,xt,Bt.data)}}else{Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Lt,xt,at[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Yt,Lt,xt,at[j]);for(let lt=0;lt<q.length;lt++){const ft=q[lt];Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Lt,xt,ft.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,Yt,Lt,xt,ft.image[j])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function gt(w,S,G,Q,J,Z){const ht=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),pt=E(G.internalFormat,ht,ot,G.colorSpace),Wt=n.get(S),it=n.get(G);if(it.__renderTarget=S,!Wt.__hasExternalTextures){const at=Math.max(1,S.width>>Z),Ut=Math.max(1,S.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,pt,at,Ut,S.depth,0,ht,ot,null):e.texImage2D(J,Z,pt,at,Ut,0,ht,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),k(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,it.__webglTexture,0,Ot(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(w,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const Q=S.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=x(S.stencilBuffer,J),ht=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=Ot(S);k(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Z,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,w)}else{const Q=S.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ht=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),pt=E(Z.internalFormat,ht,ot,Z.colorSpace),Wt=Ot(S);G&&k(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,pt,S.width,S.height):k(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const J=Q.__webglTexture,Z=Ot(S);if(S.depthTexture.format===Ps)k(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Vs)k(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Et(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(S.__webglDepthbuffer[Q],w,!1);else{const J=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),nt(S.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(w,S,G){const Q=n.get(w);S!==void 0&&gt(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Rt(w)}function jt(w){const S=w.texture,G=n.get(w),Q=n.get(S);w.addEventListener("dispose",b);const J=w.textures,Z=w.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let pt=0;pt<S.mipmaps.length;pt++)G.__webglFramebuffer[ot][pt]=r.createFramebuffer()}else G.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)G.__webglFramebuffer[ot]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ht)for(let ot=0,pt=J.length;ot<pt;ot++){const Wt=n.get(J[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&k(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const pt=J[ot];G.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Wt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),at=E(pt.internalFormat,Wt,it,pt.colorSpace,w.isXRRenderTarget===!0),Ut=Ot(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,at,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),It(r.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(G.__webglFramebuffer[ot][pt],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else gt(G.__webglFramebuffer[ot],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,pt=J.length;ot<pt;ot++){const Wt=J[ot],it=n.get(Wt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),It(r.TEXTURE_2D,Wt),gt(G.__webglFramebuffer,w,Wt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),m(Wt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),It(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)gt(G.__webglFramebuffer[pt],w,S,r.COLOR_ATTACHMENT0,ot,pt);else gt(G.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}w.depthBuffer&&Rt(w)}function Nt(w){const S=w.textures;for(let G=0,Q=S.length;G<Q;G++){const J=S[G];if(m(J)){const Z=y(w),ht=n.get(J).__webglTexture;e.bindTexture(Z,ht),p(Z),e.unbindTexture()}}}const Dt=[],I=[];function xe(w){if(w.samples>0){if(k(w)===!1){const S=w.textures,G=w.width,Q=w.height;let J=r.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(w),ot=S.length>1;if(ot)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(S[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,r.NEAREST),l===!0&&(Dt.length=0,I.length=0,Dt.push(r.COLOR_ATTACHMENT0+pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Dt.push(Z),I.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ot(w){return Math.min(i.maxSamples,w.samples)}function k(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ie(w,S){const G=w.colorSpace,Q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Xs&&G!==Ji&&(ae.getTransfer(G)===ge?(Q!==ai||J!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=Ht,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=k}function py(r,t){function e(n,i=Ji){let s;const a=ae.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===Zu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return r.BYTE;if(n===Ip)return r.SHORT;if(n===Ga)return r.UNSIGNED_SHORT;if(n===Ku)return r.INT;if(n===qr)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Ya)return r.HALF_FLOAT;if(n===Np)return r.ALPHA;if(n===Fp)return r.RGB;if(n===ai)return r.RGBA;if(n===Op)return r.LUMINANCE;if(n===Bp)return r.LUMINANCE_ALPHA;if(n===Ps)return r.DEPTH_COMPONENT;if(n===Vs)return r.DEPTH_STENCIL;if(n===zp)return r.RED;if(n===Ju)return r.RED_INTEGER;if(n===kp)return r.RG;if(n===Qu)return r.RG_INTEGER;if(n===th)return r.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===Xo)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===$c||n===Kc||n===Zc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Jc||n===Qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jc||n===Jc)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===lu||n===cu||n===uu||n===hu||n===fu||n===du)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===au)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ou)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===pu||n===mu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yo)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hp||n===_u||n===gu||n===vu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class my extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new vn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mr({vertexShader:gy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yn(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class My extends Ys{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new xy,m=e.getContextAttributes();let p=null,y=null;const E=[],x=[],R=new ue;let A=null;const b=new On;b.viewport=new ve;const C=new On;C.viewport=new ve;const M=[b,C],v=new my;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=E[K];return et===void 0&&(et=new rc,E[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=E[K];return et===void 0&&(et=new rc,E[K]=et),et.getGripSpace()},this.getHand=function(K){let et=E[K];return et===void 0&&(et=new rc,E[K]=et),et.getHandSpace()};function z(K){const et=x.indexOf(K.inputSource);if(et===-1)return;const gt=E[et];gt!==void 0&&(gt.update(K.inputSource,K.frame,c||a),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let K=0;K<E.length;K++){const et=x[K];et!==null&&(x[K]=null,E[K].disconnect(et))}P=null,N=null,g.reset(),t.setRenderTarget(p),d=null,h=null,f=null,i=null,y=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new $r(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Vs:Ps,gt=m.stencil?Hs:qr);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(Et),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new $r(h.textureWidth,h.textureHeight,{format:ai,type:Hi,depthTexture:new im(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let et=0;et<K.removed.length;et++){const gt=K.removed[et],nt=x.indexOf(gt);nt>=0&&(x[nt]=null,E[nt].disconnect(gt))}for(let et=0;et<K.added.length;et++){const gt=K.added[et];let nt=x.indexOf(gt);if(nt===-1){for(let Rt=0;Rt<E.length;Rt++)if(Rt>=x.length){x.push(gt),nt=Rt;break}else if(x[Rt]===null){x[Rt]=gt,nt=Rt;break}if(nt===-1)break}const Et=E[nt];Et&&Et.connect(gt)}}const Y=new H,O=new H;function B(K,et,gt){Y.setFromMatrixPosition(et.matrixWorld),O.setFromMatrixPosition(gt.matrixWorld);const nt=Y.distanceTo(O),Et=et.projectionMatrix.elements,Rt=gt.projectionMatrix.elements,Ht=Et[14]/(Et[10]-1),jt=Et[14]/(Et[10]+1),Nt=(Et[9]+1)/Et[5],Dt=(Et[9]-1)/Et[5],I=(Et[8]-1)/Et[0],xe=(Rt[8]+1)/Rt[0],Ot=Ht*I,k=Ht*xe,Tt=nt/(-I+xe),ie=Tt*-I;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ie),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Ct=Ht+Tt,w=jt+Tt,S=Ot-ie,G=k+(nt-ie),Q=Nt*jt/w*Ct,J=Dt*jt/w*Ct;K.projectionMatrix.makePerspective(S,G,Q,J,Ct,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,gt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),v.near=C.near=b.near=et,v.far=C.far=b.far=gt,(P!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,N=v.far),b.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,v.layers.mask=b.layers.mask|C.layers.mask;const nt=K.parent,Et=v.cameras;tt(v,nt);for(let Rt=0;Rt<Et.length;Rt++)tt(Et[Rt],nt);Et.length===2?B(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),D(K,v,nt)};function D(K,et,gt){gt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ut=null;function It(K,et){if(u=et.getViewerPose(c||a),_=et,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let nt=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let Rt=0;Rt<gt.length;Rt++){const Ht=gt[Rt];let jt=null;if(d!==null)jt=d.getViewport(Ht);else{const Dt=f.getViewSubImage(h,Ht);jt=Dt.viewport,Rt===0&&(t.setRenderTargetTextures(y,Dt.colorTexture,h.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(y))}let Nt=M[Rt];Nt===void 0&&(Nt=new On,Nt.layers.enable(Rt),Nt.viewport=new ve,M[Rt]=Nt),Nt.matrix.fromArray(Ht.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ht.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(Nt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=f.getDepthInformation(gt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,i.renderState)}}for(let gt=0;gt<E.length;gt++){const nt=x[gt],Et=E[gt];nt!==null&&Et!==void 0&&Et.update(nt,et,c||a)}ut&&ut(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Zt=new em;Zt.setAnimationLoop(It),this.setAnimationLoop=function(K){ut=K},this.dispose=function(){}}}const br=new Mi,Sy=new Re;function yy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,x=y.envMapRotation;E&&(m.envMap.value=E,br.copy(x),br.x*=-1,br.y*=-1,br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(br)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ey(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;n.uniformBlockBinding(y,x)}function c(y,E){let x=i[y.id];x===void 0&&(_(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const E=f();y.__bindingPointIndex=E;const x=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=i[y.id],x=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,b=x.length;A<b;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,v=C.length;M<v;M++){const P=C[M];if(d(P,A,M,R)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let $=0;$<z.length;$++){const Y=z[$],O=g(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,N+X,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,E,x,R){const A=y.value,b=E+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const C=R[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(y){const E=y.uniforms;let x=0;const R=16;for(let b=0,C=E.length;b<C;b++){const M=Array.isArray(E[b])?E[b]:[E[b]];for(let v=0,P=M.length;v<P;v++){const N=M[v],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,$=z.length;X<$;X++){const Y=z[X],O=g(Y),B=x%R,tt=B%O.boundary,D=B+tt;x+=tt,D!==0&&R-D<O.storage&&(x+=R-D),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=O.storage}}}const A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function g(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ty{constructor(t={}){const{canvas:e=f0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let R=!1,A=0,b=0,C=null,M=-1,v=null;const P=new ve,N=new ve;let z=null;const X=new ce(0);let $=0,Y=e.width,O=e.height,B=1,tt=null,D=null;const ut=new ve(0,0,Y,O),It=new ve(0,0,Y,O);let Zt=!1;const K=new nh;let et=!1,gt=!1;const nt=new Re,Et=new Re,Rt=new H,Ht=new ve,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Dt(){return C===null?B:1}let I=n;function xe(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$u}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const U="webgl2";if(I=xe(U,T),I===null)throw xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,k,Tt,ie,Ct,w,S,G,Q,J,Z,ht,ot,pt,Wt,it,at,Ut,Lt,xt,Yt,Ft,se,L;function ct(){Ot=new CM(I),Ot.init(),Ft=new py(I,Ot),k=new EM(I,Ot,t,Ft),Tt=new hy(I,Ot),k.reverseDepthBuffer&&h&&Tt.buffers.depth.setReversed(!0),ie=new LM(I),Ct=new ZS,w=new dy(I,Ot,Tt,Ct,k,Ft,ie),S=new bM(x),G=new RM(x),Q=new z0(I),se=new SM(I,Q),J=new PM(I,Q,ie,se),Z=new UM(I,J,Q,ie),Lt=new IM(I,k,w),it=new TM(Ct),ht=new KS(x,S,G,Ot,k,se,it),ot=new yy(x,Ct),pt=new JS,Wt=new ry(Ot),Ut=new MM(x,S,G,Tt,Z,d,l),at=new cy(x,Z,k),L=new Ey(I,ie,k,Tt),xt=new yM(I,Ot,ie),Yt=new DM(I,Ot,ie),ie.programs=ht.programs,x.capabilities=k,x.extensions=Ot,x.properties=Ct,x.renderLists=pt,x.shadowMap=at,x.state=Tt,x.info=ie}ct();const q=new My(x,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(Y,O,!1))},this.getSize=function(T){return T.set(Y,O)},this.setSize=function(T,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,O=U,e.width=Math.floor(T*B),e.height=Math.floor(U*B),V===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Y*B,O*B).floor()},this.setDrawingBufferSize=function(T,U,V){Y=T,O=U,B=V,e.width=Math.floor(T*V),e.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,U,V,W){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,U,V,W),Tt.viewport(P.copy(ut).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(It)},this.setScissor=function(T,U,V,W){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,U,V,W),Tt.scissor(N.copy(It).multiplyScalar(B).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(T){Tt.setScissorTest(Zt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let F=!1;if(C!==null){const rt=C.texture.format;F=rt===th||rt===Qu||rt===Ju}if(F){const rt=C.texture.type,st=rt===Hi||rt===qr||rt===Ga||rt===Hs||rt===Zu||rt===ju,dt=Ut.getClearColor(),Mt=Ut.getClearAlpha(),zt=dt.r,Gt=dt.g,yt=dt.b;st?(_[0]=zt,_[1]=Gt,_[2]=yt,_[3]=Mt,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=zt,g[1]=Gt,g[2]=yt,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Wt.dispose(),Ct.dispose(),S.dispose(),G.dispose(),Z.dispose(),se.dispose(),L.dispose(),ht.dispose(),q.dispose(),q.removeEventListener("sessionstart",mt),q.removeEventListener("sessionend",Vt),wt.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ie.autoReset,U=at.enabled,V=at.autoUpdate,W=at.needsUpdate,F=at.type;ct(),ie.autoReset=T,at.enabled=U,at.autoUpdate=V,at.needsUpdate=W,at.type=F}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const U=T.target;U.removeEventListener("dispose",Bt),oe(U)}function oe(T){Ie(T),Ct.remove(T)}function Ie(T){const U=Ct.get(T).programs;U!==void 0&&(U.forEach(function(V){ht.releaseProgram(V)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,F,rt){U===null&&(U=jt);const st=F.isMesh&&F.matrixWorld.determinant()<0,dt=Cn(T,U,V,W,F);Tt.setMaterial(W,st);let Mt=V.index,zt=1;if(W.wireframe===!0){if(Mt=J.getWireframeAttribute(V),Mt===void 0)return;zt=2}const Gt=V.drawRange,yt=V.attributes.position;let Xt=Gt.start*zt,le=(Gt.start+Gt.count)*zt;rt!==null&&(Xt=Math.max(Xt,rt.start*zt),le=Math.min(le,(rt.start+rt.count)*zt)),Mt!==null?(Xt=Math.max(Xt,0),le=Math.min(le,Mt.count)):yt!=null&&(Xt=Math.max(Xt,0),le=Math.min(le,yt.count));const fe=le-Xt;if(fe<0||fe===1/0)return;se.setup(F,W,dt,V,Mt);let Ce,de=xt;if(Mt!==null&&(Ce=Q.get(Mt),de=Yt,de.setIndex(Ce)),F.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*Dt()),de.setMode(I.LINES)):de.setMode(I.TRIANGLES);else if(F.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*Dt()),F.isLineSegments?de.setMode(I.LINES):F.isLineLoop?de.setMode(I.LINE_LOOP):de.setMode(I.LINE_STRIP)}else F.isPoints?de.setMode(I.POINTS):F.isSprite&&de.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)de.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pt=F._multiDrawStarts,yi=F._multiDrawCounts,pe=F._multiDrawCount,ti=Mt?Q.get(Mt).bytesPerElement:1,Zr=Ct.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<pe;Pn++)Zr.setValue(I,"_gl_DrawID",Pn),de.render(Pt[Pn]/ti,yi[Pn])}else if(F.isInstancedMesh)de.renderInstances(Xt,fe,F.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yi=Math.min(V.instanceCount,Pt);de.renderInstances(Xt,fe,yi)}else de.render(Xt,fe)};function vt(T,U,V){T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,Me(T,U,V),T.side=pr,T.needsUpdate=!0,Me(T,U,V),T.side=Li):Me(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),p=Wt.get(V),p.init(U),E.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const dt=rt[st];vt(dt,V,F),W.add(dt)}else vt(rt,V,F),W.add(rt)}),E.pop(),p=null,W},this.compileAsync=function(T,U,V=null){const W=this.compile(T,U,V);return new Promise(F=>{function rt(){if(W.forEach(function(st){Ct.get(st).currentProgram.isReady()&&W.delete(st)}),W.size===0){F(T);return}setTimeout(rt,10)}Ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let bt=null;function qt(T){bt&&bt(T)}function mt(){wt.stop()}function Vt(){wt.start()}const wt=new em;wt.setAnimationLoop(qt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(T){bt=T,q.setAnimationLoop(T),T===null?wt.stop():wt.start()},q.addEventListener("sessionstart",mt),q.addEventListener("sessionend",Vt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,C),p=Wt.get(T,E.length),p.init(U),E.push(p),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,et=it.init(this.clippingPlanes,gt),m=pt.get(T,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&kt(rt,U,-1/0,x.sortObjects)}kt(T,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(tt,D),Nt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Nt&&Ut.addToRenderList(m,T),this.info.render.frame++,et===!0&&it.beginShadows();const V=p.state.shadowsArray;at.render(V,T,U),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(F.length>0)for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Qt(W,F,T,Mt)}Nt&&Ut.render(T);for(let st=0,dt=rt.length;st<dt;st++){const Mt=rt[st];Ne(m,T,Mt,Mt.viewport)}}else F.length>0&&Qt(W,F,T,U),Nt&&Ut.render(T),Ne(m,T,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,U),se.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function kt(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){W&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const st=Z.update(T),dt=T.material;dt.visible&&m.push(T,st,dt,V,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const st=Z.update(T),dt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ht.copy(st.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(dt)){const Mt=st.groups;for(let zt=0,Gt=Mt.length;zt<Gt;zt++){const yt=Mt[zt],Xt=dt[yt.materialIndex];Xt&&Xt.visible&&m.push(T,st,Xt,V,Ht.z,yt)}}else dt.visible&&m.push(T,st,dt,V,Ht.z,null)}}const rt=T.children;for(let st=0,dt=rt.length;st<dt;st++)kt(rt[st],U,V,W)}function Ne(T,U,V,W){const F=T.opaque,rt=T.transmissive,st=T.transparent;p.setupLightsView(V),et===!0&&it.setGlobalState(x.clippingPlanes,V),W&&Tt.viewport(P.copy(W)),F.length>0&&Te(F,U,V),rt.length>0&&Te(rt,U,V),st.length>0&&Te(st,U,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Qt(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new $r(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ya:Hi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const rt=p.state.transmissionRenderTarget[W.id],st=W.viewport||P;rt.setSize(st.z,st.w);const dt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(X),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&Ut.render(V);const Mt=x.toneMapping;x.toneMapping=cr;const zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&it.setGlobalState(x.clippingPlanes,W),Te(T,V,W),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let yt=0,Xt=U.length;yt<Xt;yt++){const le=U[yt],fe=le.object,Ce=le.geometry,de=le.material,Pt=le.group;if(de.side===Li&&fe.layers.test(W.layers)){const yi=de.side;de.side=An,de.needsUpdate=!0,He(fe,V,W,Ce,de,Pt),de.side=yi,de.needsUpdate=!0,Gt=!0}}Gt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}x.setRenderTarget(dt),x.setClearColor(X,$),zt!==void 0&&(W.viewport=zt),x.toneMapping=Mt}function Te(T,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,rt=T.length;F<rt;F++){const st=T[F],dt=st.object,Mt=st.geometry,zt=W===null?st.material:W,Gt=st.group;dt.layers.test(V.layers)&&He(dt,U,V,Mt,zt,Gt)}}function He(T,U,V,W,F,rt){T.onBeforeRender(x,U,V,W,F,rt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,U,V,W,T,rt),F.transparent===!0&&F.side===Li&&F.forceSinglePass===!1?(F.side=An,F.needsUpdate=!0,x.renderBufferDirect(V,U,W,F,T,rt),F.side=pr,F.needsUpdate=!0,x.renderBufferDirect(V,U,W,F,T,rt),F.side=Li):x.renderBufferDirect(V,U,W,F,T,rt),T.onAfterRender(x,U,V,W,F,rt)}function Me(T,U,V){U.isScene!==!0&&(U=jt);const W=Ct.get(T),F=p.state.lights,rt=p.state.shadowsArray,st=F.state.version,dt=ht.getParameters(T,F.state,rt,U,V),Mt=ht.getProgramCacheKey(dt);let zt=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",Bt),zt=new Map,W.programs=zt);let Gt=zt.get(Mt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===st)return he(T,dt),Gt}else dt.uniforms=ht.getUniforms(T),T.onBeforeCompile(dt,x),Gt=ht.acquireProgram(dt,Mt),zt.set(Mt,Gt),W.uniforms=dt.uniforms;const yt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=it.uniform),he(T,dt),W.needsLights=ln(T),W.lightsStateVersion=st,W.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Se(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=qo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function he(T,U){const V=Ct.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Cn(T,U,V,W,F){U.isScene!==!0&&(U=jt),w.resetTextureUnits();const rt=U.fog,st=W.isMeshStandardMaterial?U.environment:null,dt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xs,Mt=(W.isMeshStandardMaterial?G:S).get(W.envMap||st),zt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),yt=!!V.morphAttributes.position,Xt=!!V.morphAttributes.normal,le=!!V.morphAttributes.color;let fe=cr;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=Ce!==void 0?Ce.length:0,Pt=Ct.get(W),yi=p.state.lights;if(et===!0&&(gt===!0||T!==v)){const Xn=T===v&&W.id===M;it.setState(W,T,Xn)}let pe=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==yi.state.version||Pt.outputColorSpace!==dt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Mt||W.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Gt||Pt.morphTargets!==yt||Pt.morphNormals!==Xt||Pt.morphColors!==le||Pt.toneMapping!==fe||Pt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Pt.__version=W.version);let ti=Pt.currentProgram;pe===!0&&(ti=Me(W,U,F));let Zr=!1,Pn=!1,Js=!1;const we=ti.getUniforms(),ci=Pt.uniforms;if(Tt.useProgram(ti.program)&&(Zr=!0,Pn=!0,Js=!0),W.id!==M&&(M=W.id,Pn=!0),Zr||v!==T){Tt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),p0(nt),m0(nt),we.setValue(I,"projectionMatrix",nt)):we.setValue(I,"projectionMatrix",T.projectionMatrix),we.setValue(I,"viewMatrix",T.matrixWorldInverse);const Vi=we.map.cameraPosition;Vi!==void 0&&Vi.setValue(I,Rt.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&we.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Pn=!0,Js=!0)}if(F.isSkinnedMesh){we.setOptional(I,F,"bindMatrix"),we.setOptional(I,F,"bindMatrixInverse");const Xn=F.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),we.setValue(I,"boneTexture",Xn.boneTexture,w))}F.isBatchedMesh&&(we.setOptional(I,F,"batchingTexture"),we.setValue(I,"batchingTexture",F._matricesTexture,w),we.setOptional(I,F,"batchingIdTexture"),we.setValue(I,"batchingIdTexture",F._indirectTexture,w),we.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&we.setValue(I,"batchingColorTexture",F._colorsTexture,w));const Qs=V.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Lt.update(F,V,ti),(Pn||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,we.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ci.envMap.value=Mt,ci.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(ci.envMapIntensity.value=U.environmentIntensity),Pn&&(we.setValue(I,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&be(ci,Js),rt&&W.fog===!0&&ot.refreshFogUniforms(ci,rt),ot.refreshMaterialUniforms(ci,W,B,O,p.state.transmissionRenderTarget[T.id]),qo.upload(I,Se(Pt),ci,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qo.upload(I,Se(Pt),ci,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(I,"center",F.center),we.setValue(I,"modelViewMatrix",F.modelViewMatrix),we.setValue(I,"normalMatrix",F.normalMatrix),we.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xn=W.uniformsGroups;for(let Vi=0,Gi=Xn.length;Vi<Gi;Vi++){const ah=Xn[Vi];L.update(ah,ti),L.bind(ah,ti)}}return ti}function be(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ln(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,V){Ct.get(T.texture).__webglTexture=U,Ct.get(T.depthTexture).__webglTexture=V;const W=Ct.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const V=Ct.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){C=T,A=U,b=V;let W=!0,F=null,rt=!1,st=!1;if(T){const Mt=Ct.get(T);if(Mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(Mt.__hasExternalTextures)w.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const yt=T.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&Ct.has(yt)&&(T.width!==yt.image.width||T.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(st=!0);const Gt=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?F=Gt[U][V]:F=Gt[U],rt=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?F=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[V]:F=Gt,P.copy(T.viewport),N.copy(T.scissor),z=T.scissorTest}else P.copy(ut).multiplyScalar(B).floor(),N.copy(It).multiplyScalar(B).floor(),z=Zt;if(Tt.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&Tt.drawBuffers(T,F),Tt.viewport(P),Tt.scissor(N),Tt.setScissorTest(z),rt){const Mt=Ct.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,V)}else if(st){const Mt=Ct.get(T.texture),zt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,V||0,zt)}M=-1},this.readRenderTargetPixels=function(T,U,V,W,F,rt,st){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){Tt.bindFramebuffer(I.FRAMEBUFFER,dt);try{const Mt=T.texture,zt=Mt.format,Gt=Mt.type;if(!k.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-F&&I.readPixels(U,V,W,F,Ft.convert(zt),Ft.convert(Gt),rt)}finally{const Mt=C!==null?Ct.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,W,F,rt,st){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const Mt=T.texture,zt=Mt.format,Gt=Mt.type;if(!k.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&V>=0&&V<=T.height-F){Tt.bindFramebuffer(I.FRAMEBUFFER,dt);const yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(U,V,W,F,Ft.convert(zt),Ft.convert(Gt),0);const Xt=C!==null?Ct.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,Xt);const le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await d0(I,le,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(yt),I.deleteSync(le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(T.image.width*W),rt=Math.floor(T.image.height*W),st=U!==null?U.x:0,dt=U!==null?U.y:0;w.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,st,dt,F,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,W=null,F=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let rt,st,dt,Mt,zt,Gt,yt,Xt,le;const fe=T.isCompressedTexture?T.mipmaps[F]:T.image;V!==null?(rt=V.max.x-V.min.x,st=V.max.y-V.min.y,dt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,zt=V.min.y,Gt=V.isBox3?V.min.z:0):(rt=fe.width,st=fe.height,dt=fe.depth||1,Mt=0,zt=0,Gt=0),W!==null?(yt=W.x,Xt=W.y,le=W.z):(yt=0,Xt=0,le=0);const Ce=Ft.convert(U.format),de=Ft.convert(U.type);let Pt;U.isData3DTexture?(w.setTexture3D(U,0),Pt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Pt=I.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Pt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const yi=I.getParameter(I.UNPACK_ROW_LENGTH),pe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ti=I.getParameter(I.UNPACK_SKIP_PIXELS),Zr=I.getParameter(I.UNPACK_SKIP_ROWS),Pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gt);const Js=T.isDataArrayTexture||T.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const ci=Ct.get(T),Qs=Ct.get(U),Xn=Ct.get(ci.__renderTarget),Vi=Ct.get(Qs.__renderTarget);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Gi=0;Gi<dt;Gi++)Js&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,F,Gt+Gi),T.isDepthTexture?(we&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,F,le+Gi),I.blitFramebuffer(Mt,zt,rt,st,yt,Xt,rt,st,I.DEPTH_BUFFER_BIT,I.NEAREST)):we?I.copyTexSubImage3D(Pt,F,yt,Xt,le+Gi,Mt,zt,rt,st):I.copyTexSubImage2D(Pt,F,yt,Xt,le+Gi,Mt,zt,rt,st);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Pt,F,yt,Xt,le,rt,st,dt,Ce,de,fe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,F,yt,Xt,le,rt,st,dt,Ce,fe.data):I.texSubImage3D(Pt,F,yt,Xt,le,rt,st,dt,Ce,de,fe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,yt,Xt,rt,st,Ce,de,fe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,yt,Xt,fe.width,fe.height,Ce,fe.data):I.texSubImage2D(I.TEXTURE_2D,F,yt,Xt,rt,st,Ce,de,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,yi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pn),F===0&&U.generateMipmaps&&I.generateMipmap(Pt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,W=null,F=0){return T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0),_a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,V,W,F)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class by extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class lm extends $s{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qf=new Re,Mu=new qp,Po=new pl,Do=new H;class wy extends Qe{constructor(t=new Si,e=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=s,t.ray.intersectsSphere(Po)===!1)return;qf.copy(i).invert(),Mu.copy(t.ray).applyMatrix4(qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);Do.fromBufferAttribute(f,m),$f(Do,m,l,i,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d;_<g;_++)Do.fromBufferAttribute(f,_),$f(Do,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $f(r,t,e,n,i,s,a){const o=Mu.distanceSqToPoint(r);if(o<e){const l=new H;Mu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ay extends vn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends Si{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new H,f=new H,h=new H;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(g),f.y=(t+e*Math.cos(m))*Math.sin(g),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,y=(i+1)*d+_;a.push(g,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new vi(o,3)),this.setAttribute("normal",new vi(l,3)),this.setAttribute("uv",new vi(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kf extends $s{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sh extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const sc=new Re,Zf=new H,jf=new H;class cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jf),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jf=new Re,oa=new H,ac=new H;class Ry extends cm{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),oa.setFromMatrixPosition(t.matrixWorld),n.position.copy(oa),ac.copy(n.position),ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ac),n.updateMatrixWorld(),i.makeTranslation(-oa.x,-oa.y,-oa.z),Jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf)}}class Cy extends sh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Py extends cm{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dy extends sh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ly extends sh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);const la=new H;function qn(r,t,e,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;la.copy(t),la[n]=0,la.normalize();const c=.5*a/(a+o),u=1-la.angleTo(r)/l;return Math.sign(la[e])===1?u*c:o/(a+o)+c+c*(1-u)}class td extends Ks{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new H,l=new H,c=new H(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,d=u.length/6,_=new H,g=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*s,u[m+1]=c.y*Math.sign(o.y)+l.y*s,u[m+2]=c.z*Math.sign(o.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:_.set(1,0,0),h[p+0]=qn(_,l,"z","y",s,n),h[p+1]=1-qn(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),h[p+0]=1-qn(_,l,"z","y",s,n),h[p+1]=1-qn(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),h[p+0]=1-qn(_,l,"x","z",s,t),h[p+1]=qn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),h[p+0]=1-qn(_,l,"x","z",s,t),h[p+1]=1-qn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),h[p+0]=1-qn(_,l,"x","y",s,t),h[p+1]=1-qn(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),h[p+0]=qn(_,l,"x","y",s,t),h[p+1]=1-qn(_,l,"y","x",s,e);break}}}const Lo="#ff5a1f",oc="#f2f1ec",lc="Geist, system-ui, sans-serif",ed='"Instrument Serif", Georgia, serif';function nd(r,t,e){const n=document.createElement("canvas");n.width=r,n.height=t;const i=n.getContext("2d");if(i.fillStyle="#141416",i.fillRect(0,0,r,t),e==="app"){i.fillStyle="#2a2a2e",i.beginPath(),i.roundRect(r*.36,t*.025,r*.28,t*.022,20),i.fill(),i.fillStyle=oc,i.font=`500 ${r*.16}px ${lc}`,i.fillText("Happy",r*.09,t*.2),i.fillStyle=Lo,i.font=`italic 400 ${r*.2}px ${ed}`,i.fillText("birthday",r*.09,t*.3),i.fillStyle=Lo,i.beginPath(),i.roundRect(r*.09,t*.36,r*.82,t*.34,36),i.fill(),i.fillStyle="#141416",i.textAlign="center",i.font=`500 ${r*.32}px ${lc}`,i.fillText("30",r*.5,t*.58),i.textAlign="left",i.fillStyle="#2a2a2e";for(let a=0;a<3;a++)i.beginPath(),i.roundRect(r*(.09+a*.28),t*.74,r*.26,r*.26,24),i.fill();i.fillStyle=oc,i.beginPath(),i.roundRect(r*.09,t*.88,r*.82,t*.065,60),i.fill()}else{i.fillStyle="#1d1d20",i.fillRect(0,0,r,t*.08),["#ff5f57","#febc2e","#28c840"].forEach((o,l)=>{i.fillStyle=o,i.beginPath(),i.arc(r*(.035+l*.028),t*.04,t*.013,0,Math.PI*2),i.fill()}),i.fillStyle="#2a2a2e",i.beginPath(),i.roundRect(r*.35,t*.02,r*.3,t*.04,20),i.fill(),i.fillStyle=oc,i.font=`500 ${r*.075}px ${lc}`,i.fillText("Your brand,",r*.06,t*.3),i.fillStyle=Lo,i.font=`italic 400 ${r*.09}px ${ed}`,i.fillText("online.",r*.06,t*.44),i.fillStyle=Lo,i.beginPath(),i.roundRect(r*.06,t*.5,r*.16,t*.07,40),i.fill();const a=["#2a2a2e","#ffd84d","#2a2a2e"];for(let o=0;o<3;o++)i.fillStyle=a[o],i.beginPath(),i.roundRect(r*(.06+o*.3),t*.64,r*.28,t*.3,18),i.fill()}const s=new Ay(n);return s.colorSpace=Mn,s.anisotropy=4,s}function Uy(r){const t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=matchMedia("(max-width: 960px)").matches;let n;try{n=new Ty({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}n.setPixelRatio(Math.min(devicePixelRatio,2)),n.outputColorSpace=Mn,n.setClearColor(0,0);const i=new by,s=new On(40,1,.1,100);i.add(new Ly(16777215,.6));const a=new Dy(16777215,2.4);a.position.set(4,5,6),i.add(a);const o=new Cy(16734751,45,16);o.position.set(-3,-2,3),i.add(o);const l=new rr;i.add(l);const c=new rr,u=new yn(new td(5,3.3,.14,4,.12),new Kf({color:2763310,metalness:.75,roughness:.3})),f=new yn(new Ws(4.84,3.14),new La({map:nd(1e3,650,"web")}));f.position.z=.075,c.add(u,f),c.position.set(-1.1,.35,-.8),c.rotation.set(-.05,.38,-.03);const h=new rr,d=new yn(new td(1.7,3.5,.2,5,.24),new Kf({color:1842207,metalness:.9,roughness:.25})),_=new yn(new Ws(1.52,3.32),new La({map:nd(460,1e3,"app")}));_.position.z=.105,h.add(d,_),h.position.set(1.55,-.25,.8),h.rotation.set(.08,-.45,.1);const g=new yn(new rh(3.2,.014,8,160),new La({color:16734751,transparent:!0,opacity:.6}));g.position.z=-2,g.rotation.x=1.15;const m=e?350:900,p=new Float32Array(m*3);for(let O=0;O<m;O++){const B=2.5+Math.random()*5,tt=Math.random()*Math.PI*2;p[O*3]=Math.cos(tt)*B,p[O*3+1]=(Math.random()-.5)*7,p[O*3+2]=Math.sin(tt)*B-3}const y=new Si;y.setAttribute("position",new li(p,3));const E=new wy(y,new lm({color:15921644,size:.03,transparent:!0,opacity:.55,sizeAttenuation:!0})),x=new rr;x.add(c,h,g),x.position.x=.5,l.add(x),l.scale.setScalar(.85),i.add(E);const R={x:0,y:0},A=O=>{R.x=(O.clientX/innerWidth-.5)*2,R.y=(O.clientY/innerHeight-.5)*2},b=O=>{O.gamma==null||O.beta==null||(R.x=tf.clamp(O.gamma/30,-1,1),R.y=tf.clamp((O.beta-45)/30,-1,1))};addEventListener("pointermove",A,{passive:!0}),addEventListener("deviceorientation",b,{passive:!0});let C=0;const M=()=>{C=Math.min(window.scrollY/innerHeight,1)};addEventListener("scroll",M,{passive:!0});const v=()=>{const O=r.clientWidth,B=r.clientHeight;!O||!B||(n.setSize(O,B,!1),s.aspect=O/B,s.position.set(0,0,Math.max(7,8.6/s.aspect)),s.updateProjectionMatrix())},P=new ResizeObserver(v);P.observe(r),v();let N=0,z=!0;const X=new IntersectionObserver(([O])=>z=O.isIntersecting);X.observe(r);const $=new Iy,Y=()=>{if(N=requestAnimationFrame(Y),!z||document.hidden)return;const O=$.getElapsedTime(),B=t?0:1;l.rotation.y+=(R.x*.35-l.rotation.y)*.05,l.rotation.x+=(R.y*.18-l.rotation.x)*.05,h.position.y=-.25+Math.sin(O*.9)*.12*B,c.position.y=.35+Math.sin(O*.7+1)*.1*B,g.rotation.z=O*.12*B,E.rotation.y=O*.02*B+C*.6,l.position.y=C*1.2,n.render(i,s)};return Y(),{dispose(){cancelAnimationFrame(N),X.disconnect(),P.disconnect(),removeEventListener("pointermove",A),removeEventListener("deviceorientation",b),removeEventListener("scroll",M),n.dispose()}}}const Ny=[{value:"1:1",label:"you talk to the developer"},{value:"48h",label:"reply & fixed quote"},{value:"2021",label:"in business since"}],Fy=[{n:"01",title:"Business websites",text:"Fast, clear sites that turn visitors into enquiries. Built for phones first, editable by you.",tags:["WordPress","SEO","Booking"],variant:"dark",wide:!0},{n:"02",title:"Online shops",text:"Catalogue, cart and secure checkout with stock you manage yourself.",tags:["WooCommerce","Stripe","PayPal"],variant:"",wide:!1},{n:"03",title:"Portfolios",text:"For designers, photographers, developers and artists: your work, shown properly.",tags:["Gallery","CV","Blog"],variant:"",wide:!1},{n:"04",title:"Birthday, wedding & event apps",text:"A personal app or microsite with photos, countdown, music and a guestbook. The gift people remember.",tags:["Countdown","Photo wall","RSVP"],variant:"accent",wide:!0},{n:"05",title:"Android apps",text:"Native-feeling apps for your business or idea, published on Google Play.",tags:["Play Store","Notifications"],variant:"",wide:!1},{n:"06",title:"Landing pages & QR menus",text:"One-page launches, restaurant menus and link-in-bio pages, live in days.",tags:["Launch","QR"],variant:"",wide:!1},{n:"07",title:"Website fixes & care",text:"Broken, slow or hacked site? I fix it, then keep it updated, backed up and secure.",tags:["Bug fixes","Speed","Updates"],variant:"",wide:!1}],Oy=[{name:"Tawfik Dépannage",kind:"Towing & garage website",year:"2026",hue:"#ffc400",type:"web",url:"https://hakim2023.github.io/tawfik-depannage/"},{name:"Bako-72",kind:"African restaurant website & menu",year:"2026",hue:"#4f9a68",type:"web",url:"https://hakim2023.github.io/bako-72/"},{name:"Happy 30, Sam",kind:"Birthday Android app",year:"2026",hue:"#c9d8ff",type:"app"},{name:"Mira Studio",kind:"Photography portfolio",year:"2026",hue:"#d9d4c7",type:"web"},{name:"FitLoop",kind:"Booking app",year:"2025",hue:"#b8e6c9",type:"app"}],By=[{n:"01",title:"Brief",text:"A short call to understand your goals, audience and budget."},{n:"02",title:"Design",text:"You see real screens in days, not vague mood boards."},{n:"03",title:"Build",text:"Clean, fast code with weekly previews you can tap through."},{n:"04",title:"Launch",text:"I publish, test on real devices and show you how to manage it."}],zy=[{name:"QR Menu & Link Page",price:35,badge:"Most affordable",desc:"A sleek single page for your menu, links or socials. Perfect for restaurants, cafés and creators.",time:"Ready in 48h",items:["Custom-designed single page","Printable QR code included","Instant loading on any phone","1 round of revisions"],featured:!1},{name:"Birthday & Event Site",price:45,desc:"A personal microsite for a birthday, wedding or anniversary. A unique gift they will never forget.",time:"Ready in 3 days",items:["Live countdown & photo gallery","Music, messages & guestbook","Private shareable link","2 rounds of revisions"],featured:!1},{name:"Portfolio Website",price:50,badge:"Best value",desc:"A modern portfolio that shows your work at its best, for designers, photographers, developers and artists.",time:"Ready in 4 days",items:["Up to 4 sections","Project gallery & CV","Contact form","SEO-ready & mobile-first"],featured:!1},{name:"Business Website",price:55,badge:"Most popular",desc:"A professional showcase site that builds trust and turns visitors into customers.",time:"Ready in 5 days",items:["Up to 5 pages","Services, reviews & map","WhatsApp & contact buttons","Google-friendly SEO setup"],featured:!0},{name:"Android App",price:65,badge:"Premium",desc:"Your own app on Android phones, for your business, an event or a special someone.",time:"Ready in 7 days",items:["Custom app design & icon","Up to 5 screens","Installable APK file","Google Play publishing guidance"],featured:!1}],ky=[{q:"Who will I be working with?",a:"Me, Ouadie. I have run Fix & Web as an independent developer in Paris since 2021, so you deal directly with the person designing and building your project."},{q:"How long does a project take?",a:"Most projects are delivered in 2 to 7 days, depending on the package. You get a clear delivery date before we start."},{q:"Can I edit the content myself?",a:"Yes. Sites are built on WordPress, so you can change text, images and products without touching code."},{q:"Can you fix my existing website?",a:"Yes. Bugs, slow loading, broken layouts on phones, hacked WordPress sites: send me the link and I will tell you what is wrong for free."},{q:"How do payments work?",a:"Half upfront, half on launch, with a proper invoice. Shops can accept cards and wallets via Stripe or PayPal."},{q:"Can you make a birthday app as a surprise?",a:"Absolutely. Send me photos and messages, and I deliver a private link or APK ready for the big day."}];document.documentElement.classList.add("js");ki.registerPlugin(ne);const Ze=r=>document.getElementById(r),um=matchMedia("(prefers-reduced-motion: reduce)").matches,hm=r=>new Promise(t=>setTimeout(t,r));Ze("stats").innerHTML=Ny.map(r=>`<li><b>${r.value}</b>${r.label}</li>`).join("");const id=["Websites","Android apps","Online shops","Portfolios","Birthday apps","Wedding sites","QR menus","Landing pages"];Ze("marquee").innerHTML=[...id,...id].map(r=>`<span>${r}</span>`).join("");Ze("servicesList").innerHTML=Fy.map(r=>`<li class="${r.variant?`is-${r.variant}`:""}${r.wide?" is-wide":""}">
      <span class="n">${r.n}</span><span class="arrow" aria-hidden="true">→</span>
      <h3>${r.title}</h3><p>${r.text}</p>
      <div class="tags">${r.tags.map(t=>`<span>${t}</span>`).join("")}</div></li>`).join("");const Hy=r=>r.type==="app"?`<div class="mock mock--app"><i class="mock__notch"></i>
        <div class="mock__body"><small>${r.kind}</small><strong>${r.name}</strong><div class="mock__tile"></div>
        <div class="mock__row"><b></b><b></b><b></b></div><div class="mock__cta"></div></div></div>`:`<div class="mock mock--web"><div class="mock__bar"><i></i><i></i><i></i><span></span></div>
        <div class="mock__body"><small>${r.kind}</small><strong>${r.name}</strong><div class="mock__cta"></div>
        <div class="mock__row"><b></b><b></b><b></b></div></div></div>`;Ze("workTrack").innerHTML=Oy.map(r=>{const t=r.url?"a":"article",e=r.url?` href="${r.url}" target="_blank" rel="noopener"`:"";return`<${t} class="card card--${r.type}"${e}>
      <div class="card__art" style="--c:${r.hue}">${Hy(r)}<span class="card__view">${r.url?"Visit live site <b>↗</b>":"View project <b>→</b>"}</span></div>
      <div class="card__meta"><div><h3>${r.name}</h3><span>${r.kind}</span></div>${r.url?'<span class="live-tag">Live</span>':`<span>${r.year}</span>`}</div></${t}>`}).join("");Ze("stepsList").innerHTML=By.map(r=>`<li><span class="n">${r.n}</span><h3>${r.title}</h3><p>${r.text}</p></li>`).join("");Ze("plansList").innerHTML=zy.map(r=>`<article class="plan${r.featured?" plan--featured":""}">
      <div class="plan__top"><span class="plan__time">${r.time}</span>${r.badge?`<span class="badge">${r.badge}</span>`:""}</div>
      <h3>${r.name}</h3>
      <div class="price">${r.price}<span>€</span><small>one-time</small></div><p class="desc">${r.desc}</p>
      <ul>${r.items.map(t=>`<li>${t}</li>`).join("")}</ul>
      <a class="btn ${r.featured?"btn--accent":"btn--outline"}" href="#contact">Get started <b>→</b></a></article>`).join("");Ze("faqList").innerHTML=ky.map(r=>`<details><summary>${r.q}</summary><p>${r.a}</p></details>`).join("");Ze("year").textContent=String(new Date().getFullYear());const _r=new lg({duration:1.1,smoothWheel:!um});_r.on("scroll",ne.update);ki.ticker.add(r=>_r.raf(r*1e3));ki.ticker.lagSmoothing(0);_r.stop();const fm=Ze("nav"),cc=Ze("menu"),Su=Ze("burger"),Vy=Ze("burgerLabel");let js=!1;function _l(r){js=r,cc.classList.toggle("is-open",r),cc.toggleAttribute("inert",!r),cc.setAttribute("aria-hidden",String(!r)),Su.setAttribute("aria-expanded",String(r)),Su.setAttribute("aria-label",r?"Close menu":"Open menu"),Vy.textContent=r?"Close":"Menu",document.body.classList.toggle("menu-open",r),r?(fm.classList.remove("is-hidden"),_r.stop()):_r.start()}Su.addEventListener("click",()=>_l(!js));addEventListener("keydown",r=>r.key==="Escape"&&js&&_l(!1));matchMedia("(min-width: 961px)").addEventListener("change",r=>r.matches&&js&&_l(!1));document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{const e=r.getAttribute("href"),n=e==="#top"?0:document.querySelector(e);n!==null&&(t.preventDefault(),js&&_l(!1),_r.scrollTo(n,{offset:e==="#top"?0:-80}))}));let rd=0;_r.on("scroll",({scroll:r})=>{js||fm.classList.toggle("is-hidden",r>rd&&r>500),rd=r});Ze("contactForm").addEventListener("submit",r=>{r.preventDefault();const t=r.currentTarget,e=Ze("formStatus");if(!t.checkValidity()){e.textContent="Please add your name and a valid email.";return}e.textContent="Thanks! We will reply within one working day.",t.reset()});function Gy(){um||ki.utils.toArray(".section__head, .bento li, .card, .steps li, .plan, .faq details, .contact").forEach(r=>{ki.from(r,{opacity:0,y:40,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})})}const sd=Ze("loader"),Wy=Ze("loaderBar"),Xy=Ze("loaderCount");document.body.classList.add("is-loading");history.scrollRestoration="manual";window.scrollTo(0,0);const ol={p:0},dm=()=>{Wy.style.transform=`scaleX(${ol.p/100})`,Xy.textContent=String(Math.round(ol.p))};ki.to(ol,{p:90,duration:1.4,ease:"power2.out",onUpdate:dm});const Yy=document.fonts?document.fonts.ready.then(()=>{}):Promise.resolve(),qy=new Promise(r=>document.readyState==="complete"?r():addEventListener("load",()=>r(),{once:!0})),$y=Promise.all([Yy.then(()=>{Uy(Ze("hero-canvas"))}),qy,hm(1300)]).catch(()=>{});Promise.race([$y,hm(6e3)]).then(()=>ki.to(ol,{p:100,duration:.45,ease:"power1.out",onUpdate:dm,onComplete:Ky}));function Ky(){ki.timeline({onComplete:()=>{sd.remove(),document.body.classList.remove("is-loading"),_r.start(),Gy()}}).to(sd,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"power4.inOut",delay:.15}).from(".hero__card",{scale:.94,duration:1.2,ease:"power3.out"},"-=0.6").from(".hero__title .line > span",{yPercent:110,duration:1.1,stagger:.1,ease:"power4.out"},"-=1").to("[data-reveal]",{opacity:1,y:0,duration:.8,stagger:.1,ease:"power3.out"},"-=0.8").from(".nav",{autoAlpha:0,duration:.8,ease:"power2.out",clearProps:"opacity,visibility"},"-=0.9").from("#hero-canvas",{opacity:0,duration:1.2},"-=1.2")}
