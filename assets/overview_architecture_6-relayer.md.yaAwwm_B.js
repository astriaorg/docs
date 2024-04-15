import{_ as o,D as a,c as r,I as s,a5 as l,l as e,a as c,o as n}from"./chunks/framework.D561hJ3q.js";const T=JSON.parse('{"title":"Relayer","description":"","frontmatter":{"sidebar_position":6},"headers":[],"relativePath":"overview/architecture/6-relayer.md","filePath":"overview/architecture/6-relayer.md","lastUpdated":1713206801000}'),i={name:"overview/architecture/6-relayer.md"},h=l('<h1 id="relayer" tabindex="-1">Relayer <a class="header-anchor" href="#relayer" aria-label="Permalink to &quot;Relayer&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To deploy your own rollup on the Astria Devnet on your local machine, check out the <a href="/local-rollup/1-introduction">instructions here</a>!</p><p>To deploy your own rollup on the Astria Devnet using Digital Ocean, check out the <a href="/cloud-rollup/digital-ocean">instructions here</a>!</p></div>',2),d=e("p",null,"The Relayer's responsibility is to take validated blocks from the sequencer and pass them along to both the Conductor and the DA layer. Because the sequencer's block times are much faster than those of the DA, the relayer also collects a queue of ordered sequencer blocks before wrapping them for submission to DA.",-1),u=e("p",null,"The individual sequencer blocks are sent immediately to the Conductor to enable fast finality for an improved UX and also act as soft commits for the execution layer. The collections of blocks sent to the DA layer are used as a source of truth and are ultimately pulled from the DA to be used as firm commits for finality in the rolllups.",-1),p=e("p",null,[c("See the "),e("a",{href:"https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer",target:"_blank",rel:"noreferrer"},"Relayer code here.")],-1);function _(m,f,y,b,v,k){const t=a("DeploymentsRedirect");return n(),r("div",null,[h,s(t),d,u,p])}const A=o(i,[["render",_]]);export{T as __pageData,A as default};
