webpackJsonp([7],{"+vOg":function(t,e,r){"use strict";function n(t){return t.json()}function o(t){if(console.log(t),t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}function i(t,e){return g()(""+t,{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:v()(e)}).then(o).then(n).then(function(t){return{data:t}}).catch(function(t){return{err:t}})}function s(t){return i("/zhuishuApi/cats/lv2/statistics",t)}function a(t){return i("/zhuishuApi/book/by-categories",t)}function u(t){return i("/zhuishuApi/cats/lv2",t)}function c(t){return i("/zhuishuApi/book/".concat(t.book),t)}function f(t){return i("/zhuishuApi/post/short-review",t)}function h(t){return i("/zhuishuApi/post/review/by-book",t)}function p(t){return i("/zhuishuApi/btoc",t)}function d(t){return i("/zhuishuApi/btoc/".concat(t.sourceId),t)}function l(t){return i("/zhuishuChapter/chapter/".concat(t.chapterLink),t)}function y(t){return i("/zhuishuApi/ranking/gender",t)}function b(t){return i("/zhuishuApi/ranking/".concat(t.id),t)}var m=r("Cenh"),v=r.n(m),w=r("WLft"),g=r.n(w);e.h=s,e.i=a,e.j=u,e.c=c,e.f=f,e.e=h,e.g=p,e.a=d,e.b=l,e.k=y,e.d=b},Cenh:function(t,e,r){t.exports=r("qkKv")},WLft:function(t,e,r){t.exports=r("j9g7")},j9g7:function(t,e,r){r("rplX"),t.exports=self.fetch.bind(self)},oFuF:function(t,e,r){"use strict";var n={getQuery:function(){var t=window.location.search.substring(1,window.location.search.length),e={};return(t?t.split("&"):[]).map(function(t,r){e.hasOwnProperty(t.split("=")[0])?e[t.split("=")[0]]instanceof Array?e[t.split("=")[0]].push(decodeURIComponent(t.split("=")[1])):e[t.split("=")[0]]=[e[t.split("=")[0]],decodeURIComponent(t.split("=")[1])]:e[t.split("=")[0]]=decodeURIComponent(t.split("=")[1])}),e},initQuery:function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e+=e?"&"+r+"="+t[r]:r+"="+t[r]);return e&&(e="?"+e),e},initNum:function(t){var e=0;return t&&(e=t>1e4?(t/1e4).toFixed(1)+"\u4e07":t),e},initContent:function(t){var e=[];return t&&(e=t.split("\n")),e},getDetailBackUrl:function(t){if(t)return["","/bookTypeInfo","/bookRankInfo"][t]}};e.a=n},qFz9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Biqn"),o=r.n(n),i=r("En79"),s=r.n(i),a=r("+vOg");r("oFuF");e.default={namespace:"bookRanking",state:{bookRanking:{}},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){"/bookRanking"===t.pathname&&e({type:"getBookRanking"})})}},effects:{getBookRanking:s.a.mark(function t(e,r){var n,o,i,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,o=r.call,i=r.put,t.next=4,o(a.k,n);case 4:return u=t.sent,t.next=7,i({type:"updateBookRanking",data:u.data||{}});case 7:case"end":return t.stop()}},t,this)})},reducers:{updateBookRanking:function(t,e){var r=e.data;return o()({},t,{bookRanking:r})}}}},qkKv:function(t,e,r){var n=r("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},rplX:function(t,e,r){"use strict";function n(t){return t&&DataView.prototype.isPrototypeOf(t)}function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return A.iterable&&(e[Symbol.iterator]=function(){return e}),e}function a(t){this.map={},t instanceof a?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function h(t){var e=new FileReader,r=c(e);return e.readAsText(t),r}function p(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:A.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:A.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:A.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():A.arrayBuffer&&A.blob&&n(t)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):A.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||_(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):A.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},A.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return h(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(p(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},A.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return k.indexOf(e)>-1?e:t}function b(t,e){e=e||{};var r=e.body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function v(t){var e=new a;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}function g(t,e){return new Promise(function(r,n){function o(){s.abort()}var i=new b(t,e);if(i.signal&&i.signal.aborted)return n(new T("Aborted","AbortError"));var s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:v(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new w(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new T("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&A.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",o),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",o)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=a,e.Request=b,e.Response=w,r.d(e,"DOMException",function(){return T}),e.fetch=g;var A={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(A.arrayBuffer)var B=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=ArrayBuffer.isView||function(t){return t&&B.indexOf(Object.prototype.toString.call(t))>-1};a.prototype.append=function(t,e){t=o(t),e=i(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[o(t)]},a.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},a.prototype.set=function(t,e){this.map[o(t)]=i(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),s(t)},a.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),s(t)},a.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),s(t)},A.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},l.call(b.prototype),l.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];w.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var T=self.DOMException;try{new T}catch(t){T=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},T.prototype=Object.create(Error.prototype),T.prototype.constructor=T}g.polyfill=!0,self.fetch||(self.fetch=g,self.Headers=a,self.Request=b,self.Response=w)}});