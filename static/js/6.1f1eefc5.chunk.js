"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,u,o=n(861),c=n(439),i=n(757),s=n.n(i),f=n(791),p=n(405),l=n(87),h=n(689),d=n(168),v=n(444),g=(0,v.ZP)(l.OL)(r||(r=(0,d.Z)(["\n  text-decoration: none;\n"]))),m=v.ZP.main(a||(a=(0,d.Z)(["\n  padding: 30px;\n"]))),x=v.ZP.form(u||(u=(0,d.Z)(["\n  margin-bottom: 15px;\n"]))),b=n(184),y=function(){var e,t=(0,f.useState)(""),n=(0,c.Z)(t,2),r=n[0],a=n[1],u=(0,f.useState)(null),i=(0,c.Z)(u,2),d=i[0],v=i[1],y=(0,l.lr)(),Z=(0,c.Z)(y,2),k=Z[0],w=Z[1],_=null!==(e=k.get("query"))&&void 0!==e?e:"",j=(0,h.TH)();function S(e){return C.apply(this,arguments)}function C(){return C=(0,o.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.gH)(t);case 3:if(0!==(n=e.sent).data.total_results){e.next=7;break}return alert("Sorry! We didn't find anything, change your request"),e.abrupt("return");case 7:v(n.data.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),C.apply(this,arguments)}return(0,f.useEffect)((function(){_&&S(_)}),[]),(0,b.jsxs)(m,{children:[(0,b.jsxs)(x,{onSubmit:function(e){e.preventDefault(),""!==_.trim()?(S(_),a("")):alert("Enter words to search for")},children:[(0,b.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"search",onChange:function(e){var t=e.target.value.toLowerCase();a(e.target.value),w(""!==t?{query:t}:{})},value:r}),(0,b.jsx)("button",{type:"submit",children:"Search"})]}),(0,b.jsx)("ul",{children:d&&d.map((function(e){var t;return(0,b.jsx)("li",{children:(0,b.jsx)(g,{to:"".concat(e.id),state:{from:j},children:null!==(t=e.original_name)&&void 0!==t?t:e.original_title})},e.id)}))})]})}},405:function(e,t,n){n.d(t,{Ej:function(){return i},Hg:function(){return c},gH:function(){return s}});var r=n(861),a=n(757),u=n.n(a),o=n(263),c=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=22fa368820f7f9af3c30ea0e6b34461d&page=1");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US&page=1&query=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.1f1eefc5.chunk.js.map