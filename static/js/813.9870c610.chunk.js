"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[813],{149:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,s,u,p,d=t(861),l=t(439),f=t(757),h=t.n(f),x=t(791),v=t(689),g=t(405),b=t(168),m=t(444),j=t(87),w=m.ZP.main(r||(r=(0,b.Z)(["\n  padding: 30px;\n"]))),Z=(0,m.ZP)(j.OL)(a||(a=(0,b.Z)(["\n  display: flex;\n  justify-content: | space-between;\n  background-color: #b9b9b9;\n  border: 1px solid black;\n  padding: 7px;\n  text-decoration: none;\n  color: black;\n  border-radius: 4px;\n  margin-bottom: 15px;\n  width: 80px;\n\n  :hover,\n  :focus {\n    background-color: #290b78;\n    color: white;\n  }\n"]))),k=m.ZP.img(i||(i=(0,b.Z)(["\n  display: block;\n  width: 250px;\n  margin-right: 20px;\n"]))),y=m.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n"]))),_=m.ZP.h1(c||(c=(0,b.Z)(["\n  font-size: 27px;\n  font-weight: 500;\n  margin-bottom: 15px;\n"]))),P=m.ZP.h3(s||(s=(0,b.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),S=(0,m.ZP)(j.OL)(u||(u=(0,b.Z)(["\n  text-decoration: none;\n"]))),U=m.ZP.ul(p||(p=(0,b.Z)(["\n  padding-bottom: 15px;\n  border-bottom: 1px solid black;\n"]))),O=t(719),z=t(184),C=function(){var n,e,t,r,a,i,o=(0,x.useState)(null),c=(0,l.Z)(o,2),s=c[0],u=c[1],p=(0,v.UO)().id,f=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,x.useEffect)((function(){function n(){return(n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Ej)(p);case 3:e=n.sent,u(e.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]),(0,z.jsxs)(w,{children:[s&&(0,z.jsxs)("div",{children:[(0,z.jsxs)(Z,{to:f,children:[(0,z.jsx)(O.YiX,{size:18}),"Go back"]}),(0,z.jsxs)(y,{children:[(0,z.jsx)(k,{src:"https://image.tmdb.org/t/p/w400".concat(s.poster_path),alt:""}),(0,z.jsxs)("div",{children:[(0,z.jsxs)(_,{children:[null!==(t=s.title)&&void 0!==t?t:s.original_title,"(",null!==(r=s.release_date.slice(0,4))&&void 0!==r?r:"",")"]}),(0,z.jsxs)("p",{children:["User score:",null!==(a=Math.round(10*s.vote_average))&&void 0!==a?a:"","%"]}),(0,z.jsx)(P,{children:"Overview"}),(0,z.jsx)("p",{children:s.overview}),(0,z.jsx)(P,{children:"Genres"}),(0,z.jsx)("p",{children:(i=s.genres,i.map((function(n){return Object.values(n.name).join("")})).join(", "))})]})]})]},s.id),(0,z.jsx)(P,{children:"Additional information"}),(0,z.jsxs)(U,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(S,{to:"cast",state:{from:f},children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(S,{to:"reviews",state:{from:f},children:"Reviews"})})]}),(0,z.jsx)(x.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading..."}),children:(0,z.jsx)(v.j3,{})})]})}},405:function(n,e,t){t.d(e,{Ej:function(){return s},Hg:function(){return c},gH:function(){return u},tx:function(){return d},zv:function(){return p}});var r=t(861),a=t(757),i=t.n(a),o=t(263),c=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=22fa368820f7f9af3c30ea0e6b34461d&page=1");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US&page=1&query=".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=813.9870c610.chunk.js.map