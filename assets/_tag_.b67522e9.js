import{_ as x}from"./Article.8ac91b1e.js";import{_ as k}from"./Paginate.6deb9ad8.js";import{a as h,b as v,p as P}from"./index.9654e1b6.js";import{s as b,l as w}from"./app.cbcdf1f6.js";import{e as D,r as S,D as $,o,c as l,b as r,t as g,p as e,F as y,l as A,j as B,q as T}from"./vendor.dd3ff4b7.js";const j={class:"flex flex-col flex-wrap mb-2 px-4 lg:px-0"},E={class:"text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold"},F={class:"flex flex-col flex-wrap mb-2"},N={class:"mx-auto grid inline-grid gap-4 py-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2"},V={class:"flex flex-wrap justify-center items-center mb-5"},J=D({setup(q){const c=h("tag"),s=S(1),i=v([c]),a=$(()=>P({articles:i,currentPage:s.value,pageSize:3})),m=()=>{s.value=a.value.startPage},p=n=>{s.value=n},d=()=>{s.value=a.value.endPage};return(n,z)=>{const f=x,u=k;return o(),l("div",j,[r("h1",E,"Article with tags "+g(e(c))+" ("+g(e(i).length)+")",1),r("div",F,[r("div",N,[(o(!0),l(y,null,A(e(a).listArticles,(t,_)=>(o(),T(f,{key:_,image:t.meta.frontmatter.thumbnail,alt:`blog-banner-${e(b)(t.meta.frontmatter.name)}`,tags:t.meta.frontmatter.tags,date:`${new Date(t.meta.frontmatter.date).toDateString()}`,title:t.meta.frontmatter.name,description:e(w)(t.meta.frontmatter.description,100),to:t.path,"to-tags":`/tags/${t.meta.frontmatter.tags}`},null,8,["image","alt","tags","date","title","description","to","to-tags"]))),128))])]),r("div",V,[B(u,{"start-page":e(a).startPage,"end-page":e(a).endPage,mid:e(a).mid,"current-page":s.value,"click-start-page":m,"click-paginate":p,"click-end-page":d},null,8,["start-page","end-page","mid","current-page"])])])}}});export{J as default};
