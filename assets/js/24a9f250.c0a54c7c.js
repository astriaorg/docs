"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[452],{5788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>h});var o=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5128:(e,t,r)=>{r.d(t,{cp:()=>c});var o=r(5072),n=(r(1504),r(5788));const a={toc:[]},i="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(i,(0,o.c)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Devnet on your local machine, check out the\n",(0,n.yg)("a",{parentName:"p",href:"/docs/local-rollup/introduction/"},"instructions here"),"!"),(0,n.yg)("p",{parentName:"admonition"},"To deploy your own rollup on the Astria Devnet using Digital Ocean, check out the\n",(0,n.yg)("a",{parentName:"p",href:"/docs/cloud-rollup/digital-ocean/"},"instructions here"),"!")))}c.isMDXComponent=!0},9200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(5072),n=(r(1504),r(5788)),a=r(5128);const i={sidebar_position:7},c="Conductor",s={unversionedId:"overview/architecture/conductor",id:"overview/architecture/conductor",title:"Conductor",description:"Conductor's role is to drive the deterministic execution of sequencer blocks to",source:"@site/docs/overview/architecture/7-conductor.mdx",sourceDirName:"overview/architecture",slug:"/overview/architecture/conductor",permalink:"/docs/overview/architecture/conductor",draft:!1,editUrl:"https://github.com/astriaorg/docs/edit/main/docs/overview/architecture/7-conductor.mdx",tags:[],version:"current",lastUpdatedAt:1707364e3,formattedLastUpdatedAt:"Feb 8, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Relayer",permalink:"/docs/overview/architecture/relayer"},next:{title:"Data Availability Layer",permalink:"/docs/overview/architecture/data-availability-layer"}},l={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.c)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"conductor"},"Conductor"),(0,n.yg)(a.cp,{mdxType:"DeploymentsRedirect"}),(0,n.yg)("p",null,"Conductor's role is to drive the deterministic execution of sequencer blocks to\nrollups. "),(0,n.yg)("p",null,"It abstracts away the logic required to read data from the DA and the\nSequencer, tracking firm and soft commitments, block and header shapes, as well\nas verification of the data. The rollup implements the Execution API server, and\nruns the Conductor alongside to drive deterministic execution. The Conductor is\neffectively stateless but does ephemerally store some information about the\nblocks it has seen and passed on to be executed. "),(0,n.yg)("p",null,"It filters the transactions that are relevant to the given rollup it is running\nalong side, out of the sequencer blocks for execution. The data that it does store is\nfor sending commitment updates to the rollup."),(0,n.yg)("p",null,"As mentioned in the\n",(0,n.yg)("a",{parentName:"p",href:"/docs/overview/architecture/relayer"},"Relayer"),' section, any data\nreceived by the Conductor directly from the Relayer is considered a soft commit.\nThis data is filtered using the rollup\'s namespace and only transactions that\nare relevant to the rollup are passed on as blocks for execution. These blocks\nare also marked as "safe" withing the rollup. The Conductor regularly polls Celestia for new data\nand when it sees the same blocks in Celestia that it has already seen from the\nRelayer, it sends a firm commit message to the rollup to update that block to\n"finalized."'),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/astriaorg/astria/tree/main/crates/astria-conductor"},"Conductor code\nhere.")))}m.isMDXComponent=!0}}]);