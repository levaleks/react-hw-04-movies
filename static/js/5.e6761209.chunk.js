(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[5],{56:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(57),c=n.n(a);const r=c.a.create(),i=new class{constructor(e){this.httpClient=e}async getTrending(e="all",t="day"){const{data:n}=await this.httpClient.get("".concat("https://api.themoviedb.org/3","/trending/").concat(e,"/").concat(t,"?api_key=").concat("f65f572eaf3dbff2084915597c63474f"));return n}async searchMovies(e){const t=new URLSearchParams;Object.entries({api_key:"".concat("f65f572eaf3dbff2084915597c63474f"),...e}).forEach(([e,n])=>{t.append(e,String(n))});const{data:n}=await this.httpClient.get("".concat("https://api.themoviedb.org/3","/search/movie?").concat(t.toString()));return n}async getMovieDetails(e,t){const n=new URLSearchParams;Object.entries({api_key:"".concat("f65f572eaf3dbff2084915597c63474f"),...t}).forEach(([e,t])=>{n.append(e,String(t))});const{data:a}=await this.httpClient.get("".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?").concat(n.toString()));return a}async getMovieCredits(e){const{data:t}=await this.httpClient.get("".concat("https://api.themoviedb.org/3","/movie/").concat(e,"/credits?api_key=").concat("f65f572eaf3dbff2084915597c63474f"));return t}async getMovieReviews(e,t){const n=new URLSearchParams;Object.entries({api_key:"".concat("f65f572eaf3dbff2084915597c63474f"),...t}).forEach(([e,t])=>{n.append(e,String(t))});const{data:a}=await this.httpClient.get("".concat("https://api.themoviedb.org/3","/movie/").concat(e,"/reviews?").concat(n.toString()));return a}}(r)},82:function(e,t,n){"use strict";n.r(t),n.d(t,"MovieDetailsPage",(function(){return R}));var a=n(0),c=n.n(a),r=n(2),i=n(8),o=n(11),l=n(12);function s(){const e=Object(o.a)(["\n    padding: 0;\n    list-style: none;\n    display: flex;\n\n    li {\n        margin-right: 15px;\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n\n    a {\n        text-decoration: none;\n\n        &.active,\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n"]);return s=function(){return e},e}function u(){const e=Object(o.a)(["\n    width: max-content;\n    margin-bottom: 10px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n"]);return u=function(){return e},e}function m(){const e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return m=function(){return e},e}const p=l.a.div(m()),h=l.a.button(u()),f=l.a.ul(s());var d=n(56);function g(){const e=Object(o.a)(["\n    display: flow-root;\n\n    img {\n        float: left;\n        margin-right: 20px;\n        width: 300px;\n        height: 450px;\n    }\n\n    > * {\n        margin-top: 0;\n    }\n"]);return g=function(){return e},e}const v=l.a.article(g()),b=({title:e,posterUrl:t,overview:n,genres:a})=>c.a.createElement(v,null,c.a.createElement("img",{src:t,alt:e}),c.a.createElement("h2",null,e),c.a.createElement("h3",null,"Overview"),c.a.createElement("p",null,n),c.a.createElement("h3",null,"Genres"),c.a.createElement("p",null,a));function E(){const e=Object(o.a)(["\n    ul {\n        padding: 0;\n        list-style: none;\n\n        li + li {\n            margin-top: 15px;\n        }\n    }\n"]);return E=function(){return e},e}const w=l.a.div(E());function y(){const e=Object(o.a)([""]);return y=function(){return e},e}const j=l.a.div(y()),O=({authorName:e,review:t})=>c.a.createElement(j,null,c.a.createElement("h4",null,"Author: ",e),c.a.createElement("p",null,t)),x=()=>{const[e,t]=Object(a.useState)(),{movieId:n}=Object(r.i)();return Object(a.useEffect)(()=>{(async()=>{const{results:e}=await d.a.getMovieReviews(Number(n));t(e)})()},[n]),c.a.createElement(w,null,e&&Boolean(e.length)&&c.a.createElement("ul",null,e.map(({id:e,author:t,content:n})=>c.a.createElement("li",{key:e},c.a.createElement(O,{authorName:t,review:n})))),e&&!e.length&&c.a.createElement("p",null,"We don't have any reviews for this movie."))};function k(){const e=Object(o.a)(["\n    ul {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        grid-row-gap: 15px;\n        padding: 0;\n        list-style: none;\n    }\n\n    img {\n        display: block;\n        width: 138px;\n        height: 175px;\n    }\n"]);return k=function(){return e},e}const _=l.a.div(k());function S(){const e=Object(o.a)([""]);return S=function(){return e},e}const C=l.a.div(S()),M=({photoUrl:e,name:t,character:n})=>c.a.createElement(C,null,c.a.createElement("img",{src:e,alt:t}),c.a.createElement("p",null,t),"\u0421haracter: ",c.a.createElement("span",null,n)),U=()=>{const[e,t]=Object(a.useState)(),{movieId:n}=Object(r.i)();return Object(a.useEffect)(()=>{(async()=>{const e=await d.a.getMovieCredits(Number(n));t(e.cast)})()},[n]),c.a.createElement(_,null,e&&c.a.createElement("ul",null,e.map(({id:e,name:t,character:n,profile_path:a})=>c.a.createElement("li",{key:e},c.a.createElement(M,{photoUrl:"".concat("http://image.tmdb.org","/t/p/w138_and_h175_face").concat(a),name:t,character:n})))))},R=()=>{const e=Object(r.g)(),[t,n]=Object(a.useState)(),{movieId:o}=Object(r.i)(),{path:l,url:s}=Object(r.j)();return Object(a.useEffect)(()=>{(async()=>{const e=await d.a.getMovieDetails(Number(o));n(e)})()},[o]),c.a.createElement(p,null,c.a.createElement(h,{type:"button",onClick:()=>e.goBack()},"\u2190 Back"),t&&c.a.createElement(b,{title:t.title||t.original_title,posterUrl:"".concat("http://image.tmdb.org","/t/p/w300_and_h450_bestv2").concat(t.poster_path),overview:t.overview,genres:t.genres.map(({name:e})=>e).join(", ")}),c.a.createElement(f,null,c.a.createElement("li",null,c.a.createElement(i.c,{to:"".concat(s,"/cast")},"Cast")),c.a.createElement("li",null,c.a.createElement(i.c,{to:"".concat(s,"/reviews")},"Reviews"))),c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(l,"/cast")},c.a.createElement(U,null)),c.a.createElement(r.b,{path:"".concat(l,"/reviews")},c.a.createElement(x,null))))}}}]);
//# sourceMappingURL=5.e6761209.chunk.js.map