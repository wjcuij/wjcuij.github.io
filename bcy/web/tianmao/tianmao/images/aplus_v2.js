/* v6.4.2,6.8.8,0.5 2016-10-13 15:27:32 */
!function t(e,o,a){function r(i,s){if(!o[i]){if(!e[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(n)return n(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){var o=e[i][1][t];return r(o?o:t)},l,l.exports,t,e,o,a)}return o[i].exports}for(var n="function"==typeof require&&require,i=0;i<a.length;i++)r(a[i]);return r}({1:[function(t,e,o){e.exports=t("./src/grey")},{"./src/grey":2}],2:[function(t,e,o){function a(t){if(t)try{var e=p.createElement("script");e.appendChild(p.createTextNode(t)),g.parentNode.insertBefore(e,g)}catch(o){(f.execScript||function(t){f.eval.call(f,t)})(t)}}function r(t,e,o){if(/blitz/i.test(m))return void o();var a,r="GET",n=function(){a.responseText?e(a.responseText):o()};y?(a=new XMLHttpRequest,a.open(r,t,!0)):(a=new XDomainRequest,a.open(r,t)),a.timeout=w.timeout,a.onload=n,a.onerror=o,a.ontimeout=o,a.send()}function n(t,e){var o=p.createElement("script");o.async=!0,i(o,e),o.src=t,g.parentNode.insertBefore(o,g)}function i(t,e){function o(){t.onreadystatechange=t.onload=null,t=null,_(e)&&e({from:"script"})}if("onload"in t)t.onload=o;else{var a=function(){/loaded|complete/.test(t.readyState)&&o()};t.onreadystatechange=a,a()}}function s(t,e){return t+Math.floor(Math.random()*(e-t+1))}function c(t,e){return s(1,e)<=t}function l(t,e){var o;for(o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}function u(t,e){return function(o){return t.call(null,l(e,o||{}))}}function h(t){return function(e){return{}.toString.call(e)=="[object "+t+"]"}}var f=window,p=document,m=navigator.userAgent,g=p.getElementsByTagName("script")[0],b=f.XDomainRequest,y=f.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,d=function(){},v={set:function(t,e){try{return localStorage.setItem(t,e),!0}catch(o){return!1}},get:function(t){return localStorage.getItem(t)},test:function(){var t="grey_test_key";try{return localStorage.setItem(t,1),localStorage.removeItem(t),!0}catch(e){return!1}}},w={base:1e4,timeout:1e4},x={_config:w};x.load=function(t){t=l({stable:"",stableKey:"",stableHash:"",grey:"",greyKey:"",greyHash:"",base:w.base},t);var e,o,i,s,h=t.hash,f={};if(t.ratio>=t.base||c(t.ratio,t.base)?(e=t.greyKey,o=t.grey,s=t.greyHash,f.type="grey"):(e=t.stableKey,o=t.stable,s=t.stableHash,f.type="stable"),f.url=o,f.key=e,f.hash=s,_(t.before)&&t.before(f),t.after=_(t.after)?u(t.after,f):d,v.test()&&e&&(y||b)&&_(h))if(i=v.get(e),i&&s===h(i,f))try{a(i),t.after({from:"local"})}catch(p){n(o,t.after)}else r(o,function(o){v.set(e,o),a(o),t.after({from:"cors"})},function(){n(o,t.after)});else n(o,t.after);return this},x.config=function(t){return l(w,t||{}),this};var _=(Array.isArray||h("Array"),h("Function"));e.exports=x},{}],3:[function(t,e,o){"use strict";!function(){var e=window,o="g_aplus_grey_launched";if(!e[o]){e[o]=1;var a=t("@ali/grey-publish"),r=location.protocol;0!=r.indexOf("http")&&(r="http:");var n,i=r+"//g.alicdn.com/alilog/s",s="aplus_v2.js",c=5e3,l=[/^https?:\/\/www\.taobao\.com(\/|\/\?.*)?$/i,/^https?:\/\/(.*\.)?sycm\.taobao\.com/i,/^https?:\/\/(.*\.)?ecrm\.taobao\.com/i,/^https?:\/\/(.*\.)?jxtportal\.taobao\.com/i,/^https?:\/\/(.*\.)?aliyun\.com/i,/^https?:\/\/(.*\.)?ylb\.m\.taobao\.com/i,/^https?:\/\/([\w\.]+\.)?mei\.com/i,/^https?:\/\/([\w\.]+\.)?hotel\.alitrip\.com/i,/^https?:\/\/([\w\.]+\.)?healthday\.m\.taobao\.com/i,/^https?:\/\/(.*\.)?sy\.taobao\.com/i,/^https?:\/\/(.*\.)?awp\.taobao\.com/i,/^https?:\/\/(.*\.)?fuwu\.m\.taobao\.com/i,/^https?:\/\/(.*\.)?weike\.taobao\.com/i,/^https?:\/\/(.*\.)?pub\.alimama\.com/i,/^https?:\/\/(.*\.)?tmall\.com/i,/^https?:\/\/(.*\.)?mali\.taobao\.com/i,/^https?:\/\/(.*\.)?1688\.com/i,/^https?:\/\/(.*\.)?alibaba-inc\.com/i,/^https?:\/\/(.*\.)?qimiaobox\.taobao\.com/i,/^https?:\/\/(.*\.)?nextone\.m\.taobao\.com/i,/^https?:\/\/(.*\.)?alibabaplanet\.com/i,/^https?:\/\/(.*\.)?www\.alikmd\.com/i,/^https?:\/\/(.*\.)?zuanshi\.taobao\.com/i,/^https?:\/\/(.*\.)?pay\.taobao\.com/i,/^https?:\/\/(.*\.)?juxingtai\.taobao\.com/i,/^https?:\/\/(.*\.)?alihealth\.m\.taobao\.com/i,/^https?:\/\/(.*\.)?alibaba\.com/i];for(n=0;n<l.length;n++){if(location.href.match(l[n])){c=1e4;break}c=0}var u="aplus_grey_ratio";"number"==typeof e[u]&&(c=Math.floor(1e4*e[u]));var h=location.search.match(new RegExp("\\b"+u+"=([\\d\\.]+)"));h&&(h=parseFloat(h[1]),isNaN(h)||(c=Math.floor(1e4*h))),e.goldlog=e.goldlog||{},goldlog.record||(goldlog.record=function(t,o,a,r){(e.goldlog_queue||(e.goldlog_queue=[])).push({action:"goldlog.record",arguments:[t,o,a,r]})}),a.load({stable:[i,"6.4.2",s].join("/"),grey:[i,"6.8.8",s].join("/"),ratio:c,stableKey:"APLUSGREYs_aplus_v2",greyKey:"APLUSGREYg_aplus_v2",stableHash:"6bd88ecf",greyHash:"1ec23da9",hash:t("./hash").hash,before:function(t){goldlog.lver="grey"==t.type?"6.8.8":"6.4.2"}})}}()},{"./hash":4,"@ali/grey-publish":1}],4:[function(t,e,o){"use strict";o.hash=function(t){var e,o,a=1315423911;for(e=t.length-1;e>=0;e--)o=t.charCodeAt(e),a^=(a<<5)+o+(a>>2);return(2147483647&a).toString(16)}},{}]},{},[3]);