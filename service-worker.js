"use strict";var precacheConfig=[["/iscape-air-pollution-quiz/index.html","f658acbb8723b05e2e18a93d6ca8eb5a"],["/iscape-air-pollution-quiz/static/css/main.b1fac704.css","6d6d312262690d56a905d4185279bf20"],["/iscape-air-pollution-quiz/static/js/main.c907c519.js","659540608fbb198e0e84f01f606683bc"],["/iscape-air-pollution-quiz/static/media/Airport.5ab5b7a4.png","5ab5b7a42dd61f35667e15128e6b10a3"],["/iscape-air-pollution-quiz/static/media/Car-window-closed.b6b916a1.png","b6b916a193bf74612897d7515c7753ee"],["/iscape-air-pollution-quiz/static/media/Car-window-open.605aff63.png","605aff635bcd63e233dcc90a10e9dfc5"],["/iscape-air-pollution-quiz/static/media/Cycling-at-rush-hour.78c0152a.png","78c0152a6ef44a64017722b3208a5c89"],["/iscape-air-pollution-quiz/static/media/Cycling-off-peak.09c0d567.png","09c0d567dfe459841733290a812fc8a8"],["/iscape-air-pollution-quiz/static/media/Exposure to air pollution.88ff8f26.png","88ff8f26d2284c6cdf39f4c52c0a1cfa"],["/iscape-air-pollution-quiz/static/media/House-near-busy-highway.57dbb526.png","57dbb526ad5bed64a467972af2ca8e1f"],["/iscape-air-pollution-quiz/static/media/House-near-quiet-lane.123736b7.png","123736b7738c1b528248068e065b0dd4"],["/iscape-air-pollution-quiz/static/media/Idling-car.ccf7f4d2.png","ccf7f4d2eb1fdc881e28a4b01b40c8ad"],["/iscape-air-pollution-quiz/static/media/Non-Idling-car.6183b1d4.png","6183b1d401d4784c9d3955fd0ea5f075"],["/iscape-air-pollution-quiz/static/media/PM-smaller-than-hair.062cac92.png","062cac92be6403fb027fa390e54ce0bd"],["/iscape-air-pollution-quiz/static/media/PM-visible-in-smog.9a3ec336.png","9a3ec336b37515db4afdb5f57de7974c"],["/iscape-air-pollution-quiz/static/media/Park-road-with-hedges.124a0719.png","124a0719b41f742a8df6dc660eed336b"],["/iscape-air-pollution-quiz/static/media/Start-quiz.4ae2349e.png","4ae2349e4c426f2214fdb6c3ffd695ce"],["/iscape-air-pollution-quiz/static/media/Stoke-road-no-hedges.17bb9731.png","17bb9731ccb6378f341a3b4293f630d9"],["/iscape-air-pollution-quiz/static/media/Traffic.f39699ca.png","f39699caf0c31cff066fc6750d17067d"],["/iscape-air-pollution-quiz/static/media/Waiting-few-meters-from-curb.d14099e8.png","d14099e871c2edc0f1bc90974fb4fe0f"],["/iscape-air-pollution-quiz/static/media/Waiting-next-to-curb.d2e7bb99.png","d2e7bb99c2203bc488e59257ea0e9d85"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),n=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var i=new Request(t,{credentials:"same-origin"});return fetch(i).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var n="/iscape-air-pollution-quiz/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});