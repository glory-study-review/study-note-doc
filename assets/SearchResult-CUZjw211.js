import{u as U,f as se,g as ae,h as Y,i as te,P as le,t as re,j as ue,k as b,l as Q,m as ie,n as M,p as a,q as ne,R as $,s as oe,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as ge,E as fe,F as Ee,G as j,H as I,I as He,J as A,K as ke}from"./app-0MV_tM90.js";const Re=["/","/redis/redisson/redisson%E5%88%86%E5%B8%83%E9%94%81%E5%AE%9E%E7%8E%B0.html","/spring/spring-framework/","/spring/spring-framework/spring%E5%A3%B0%E6%98%8E%E5%BC%8F%E4%BA%8B%E5%8A%A1.html","/spring/spring-framework/%E5%BE%AA%E7%8E%AF%E4%BE%9D%E8%B5%96.html","/spring/springboot/","/spring/springcloud/","/spring/springcloud/springcloudgateway.html","/404.html","/redis/redisson/","/redis/","/spring/"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),Qe=()=>{const{queryHistoryCount:t}=A,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),Ae="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=A,f=U(Ae,[]),qe=()=>{const t=_>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},xe=t=>{const l=pe(),r=Y(),q=de(),i=b(0),k=Q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:x}=me(),E=He(c=>{const H=c.join(" "),{searchFilter:C=d=>d,splitWord:S,suggestionsFilter:P,...m}=l.value;H?(i.value+=1,y(c.join(" "),r.value,m).then(d=>C(d,H,r.value,q.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},A.searchDelay-A.suggestDelay);M([t,r],([c])=>E(c),{immediate:!0}),ge(()=>{x()})}),{isSearching:k,results:h}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),q=Y(),i=te(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:x}=Qe(),{enabled:E,resultHistory:c,addResultHistory:H,removeResultHistory:C}=qe(),S=k||E,P=re(t,"queries"),{results:m,isSearching:d}=xe(P),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),O=Q(()=>S&&(y.value.length>0||c.value.length>0)),B=Q(()=>m.value.length>0),D=Q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<D.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},L=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[n,w=""]=Ee(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(o=>a("div",L([n,...o,w])))}return e.display.map(s=>a("div",L(s)))},R=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),x(s)}})]))])):null,Z=()=>E?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{R()}},()=>[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>L(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(B.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=D.value.contents[p.value];h(t.queries.join(" ")),H(s),r.push(F(s)),R()}}else if(E){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),R())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!B.value:!O.value}],id:"search-pro-results"},t.queries.length?d.value?a(ne,{hint:i.value.searching}):B.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const w=v.value===n;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((o,ee)=>{const T=w&&p.value===ee;return a($,{to:F(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{h(t.queries.join(" ")),H(o),R()}},()=>[o.type==="text"?null:a(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?a("div",{class:"content-header"},o.header):null,a("div",W(o))])])})])})):i.value.emptyResult:S?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};