!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendQuery=t.prev=t.next=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(2);var s=document.createElement("div"),o=document.createElement("div");s.setAttribute("id","left"),o.setAttribute("id","right"),i.default.append(s),i.default.append(o);var r=document.createElement("div");r.setAttribute("class","catalog"),i.default.append(r);var d=document.getElementsByClassName("catalog")[0],c=Math.floor((window.innerWidth-100)/270)>4?4:Math.floor((window.innerWidth-100)/270),u=0,l=[],p="",v=void 0,m=void 0,f=void 0;function g(e,t){p=e;var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&(t&&(l=[],u=0,setTimeout(function(){h(0,c),(0,a.createPagination)(0)},200)),v=JSON.parse(this.responseText).nextPageToken,function(e){JSON.parse(e).items.forEach(function(e){var t=e.id.videoId,n=new XMLHttpRequest,i={title:e.snippet.title,href:"https://www.youtube.com/watch?v="+t,image:e.snippet.thumbnails.medium.url,author:e.snippet.channelTitle,date:e.snippet.publishedAt.slice(0,10),description:e.snippet.description+"..."};n.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.responseText).items[0].statistics.viewCount;i.views=e}},l.push(i),n.open("GET","https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+t+"&key=AIzaSyA-hs76tQAFt5meYVa1rktk75c2Ln_LqrY",!0),n.send()})}(this.responseText))},t?n.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q="+e+"&type=video&key=AIzaSyA-hs76tQAFt5meYVa1rktk75c2Ln_LqrY",!0):n.open("GET","https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken="+v+"&maxResults=15&q="+e+"&type=video&key=AIzaSyA-hs76tQAFt5meYVa1rktk75c2Ln_LqrY",!0),n.send()}function h(e,t){var n=l;d.innerHTML="";for(var i=e;i<t;i+=1){var a='\n      <div class="catalog__item">\n        <img src='+n[i].image+' class="catalog__item__preview">\n        <a href='+n[i].href+' class="catalog__item__title">'+n[i].title+'</a>\n        <div class="catalog__item__author">\n          <img src="../images/person.svg" alt="Author">\n          <span>'+n[i].author+'</span>\n        </div>\n        <div class="catalog__item__publication-date">\n          <img src="../images/calendar.svg" alt="Publication date">\n          <span>'+n[i].date+'</span>  \n        </div>\n        <div class="catalog__item__view">\n          <img src="../images/eye.svg" alt="View rate">\n          <span>'+n[i].views+'</span>\n        </div>\n        <div class="catalog__item__description">'+n[i].description.slice(0,75)+"</div>\n      </div>\n    ";d.insertAdjacentHTML("beforeend",a)}}window.onresize=function(){d.innerHTML&&(m=(u+1)*c+1-c,f=c,(c=Math.floor((window.innerWidth-100)/270)>4?4:Math.floor((window.innerWidth-100)/270))!==f&&function(){u=0,h(0,c),(0,a.createPagination)(0);for(var e=Math.floor(m/c)-1,t=0;t<e;t+=1)(0,a.right)()}())},t.next=function(e){h(c*(u+=1),c*u+c),e&&u*c%15>5&&g(p)},t.prev=function(){h(c*(u-=1),c*u+c)},t.sendQuery=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=document.body,s=void 0;a.insertAdjacentHTML("beforeend",'\n  <div class="search">\n    <img src="../images/search.svg">\n    <input type="text" value="Awesome Javascript">\n  </div>'),s=document.getElementsByTagName("input")[0],document.onkeydown=function(e){if(13===e.keyCode){var t=s.value;(0,i.sendQuery)(t,!0)}},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.right=t.createPagination=void 0;var i=n(0),a=document.body,s=document.getElementById("left"),o=document.getElementById("right"),r=[].slice.call(document.getElementsByClassName("pagination__dot")),d=0,c=2,u=document.createElement("div");u.setAttribute("class","pagination"),u.setAttribute("id","pagination"),a.append(u);var l=document.getElementById("pagination");function p(){if(d+1<c&&l.innerHTML){var e=!1;if(d+2===c){c+=1;var t=document.createElement("div");t.classList.add("pagination__dot"),t.innerHTML=c,r.push(t),l.appendChild(t),t.setAttribute("data-popuptext",c),t.addEventListener("mousedown",v),t.addEventListener("mouseup",m),e=!0}r[d].classList.remove("active"),r[d+=1].classList.add("active"),e?(0,i.next)(e):(0,i.next)()}}function v(){this.classList.add("mousedown")}function m(){this.classList.remove("mousedown")}s.addEventListener("click",function(){d-1>=0&&l.innerHTML&&(r[d].classList.remove("active"),r[d-=1].classList.add("active"),(0,i.prev)())}),o.addEventListener("click",p),t.createPagination=function(e){e||(d=0,c=2,l.innerHTML=""),l.innerHTML="",r=[];for(var t=1;t<=c;t+=1){var n=document.createElement("div");n.classList.add("pagination__dot"),n.setAttribute("data-popuptext",t),n.innerHTML=t,r.push(n),l.appendChild(n),n.addEventListener("mousedown",v),n.addEventListener("mouseup",m)}r[e].classList.add("active")},t.right=p}]);
//# sourceMappingURL=pagination.js.map