import{c as h}from"./app.cbcdf1f6.js";import{e as k,i as y,o as u,c as _,F as x,l as A,q as v,k as b,b as w,t as D,p as C,h as g}from"./vendor.dd3ff4b7.js";const B=({totalItems:a,currentPage:t=1,pageSize:s=10,maxPages:e=10})=>{const r=Math.ceil(a/s);t<1||t>r&&(t=r);let o,n;if(r<=e)o=1,n=r;else{const l=Math.floor(e/2),f=Math.floor(e/2)-1;t<=l?(o=1,n=e):t+f>=r?(o=r-e+1,n=r):(o=t-l,n=t+f)}const c=(t-1)*s,m=Math.min(c+s-1,a-1),d=Array.from(Array(n+1-o).keys()).map(l=>o+l);return{totalItems:a,currentPage:t,pageSize:s,totalPages:r,startPage:o,endPage:n,startIndex:c,endIndex:m,pages:d}};const R={class:"p-2 text-white dark:text-elucidator-50"},O=k({props:{tags:null},setup(a){return(t,s)=>{const e=y("router-link");return u(),_("div",null,[(u(!0),_(x,null,A(t.$props.tags,(r,o)=>(u(),v(e,{key:o,to:`/tags/${r.toLowerCase()}`,class:"text-elucidator-400 p-1 text-xs bg-elucidator-500 dark:bg-elucidator-700 rounded-xl m-1"},{default:b(()=>[w("span",R,D(C(h)(r)),1)]),_:2},1032,["to"]))),128))])}}}),i=()=>g().getRoutes(),P=a=>g().currentRoute.value.params[a],I=a=>i().filter(s=>Object.keys(s.meta).length!==0).slice(0,a).sort((s,e)=>+new Date(e.meta.frontmatter.date)-+new Date(s.meta.frontmatter.date)),F=()=>i().filter(s=>s.meta.frontmatter!==void 0).map(s=>s.meta.frontmatter).sort((s,e)=>+new Date(e.date)-+new Date(s.date))[0],L=a=>i().filter(e=>Object.keys(e.meta).length!==0).filter(e=>a.every(r=>e.meta.frontmatter.tags.includes(r))),T=a=>i().filter(e=>Object.keys(e.meta).length!==0).filter(e=>a.every(r=>e.meta.frontmatter.name.includes(r))),$=({limit:a,tags:t,name:s})=>i().filter(o=>Object.keys(o.meta).length!==0).filter(o=>o.meta.frontmatter.name!==s).slice(0,a).filter(o=>t.some(n=>o.meta.frontmatter.tags.includes(n))),q=({articles:a,currentPage:t,pageSize:s})=>{const e=a,{startPage:r,endPage:o,startIndex:n,endIndex:c}=B({totalItems:e.length,currentPage:t,pageSize:s}),m=t-1>=r?t-1:0,d=t+1<=o?t+1:0,l=Array(m,t,d).filter(p=>p>r&&p<o),f=e.slice(n,c+1);return{startPage:r,mid:l,endPage:o,listArticles:f}};export{O as _,P as a,L as b,T as c,I as d,$ as g,F as l,q as p};
