import{_ as a,c as t,a3 as i,o as n}from"./chunks/framework.ohJJpums.js";const o="/assets/shared-sequencer-overview.KaalIjKb.png",m=JSON.parse('{"title":"The Astria Sequencing Layer","description":"","frontmatter":{},"headers":[],"relativePath":"overview/components/the-astria-sequencing-layer.md","filePath":"overview/components/the-astria-sequencing-layer.md","lastUpdated":1729701864000}'),s={name:"overview/components/the-astria-sequencing-layer.md"};function r(l,e,c,d,p,u){return n(),t("div",null,e[0]||(e[0]=[i('<h1 id="the-astria-sequencing-layer" tabindex="-1">The Astria Sequencing Layer <a class="header-anchor" href="#the-astria-sequencing-layer" aria-label="Permalink to &quot;The Astria Sequencing Layer&quot;">​</a></h1><p>The Astria Sequencing Layer is a decentralized network of nodes that uses CometBFT (formerly Tendermint) as its consensus algorithm. It functions as a blockchain, coming to consensus on an ordered set of transactions. The key feature of this sequencer is that it primarily orders transactions without executing them, as they are intended for execution on rollups. However, it does execute &quot;sequencer native&quot; transactions like token transfers within the sequencer chain.</p><p><img src="'+o+'" alt="Astria Shared Sequencer"></p><p>Components of note that are not shown in the above diagram are the <a href="./composer">Composer</a>, <a href="./relayer">Relayer</a>, and <a href="./conductor">Conductor</a>.</p><p>These components facilitate the delivery transactions, batches, and different commits shown above, back to the users.</p><p>CometBFT was chosen for several reasons:</p><ol><li>It implements a decentralized leader selection algorithm that rotates between proposers.</li><li>It provides single-slot (&quot;fast&quot;) finality, preventing forks and simplifying chain derivation logic for rollups.</li><li>It&#39;s battle-tested and widely used in production on many chains.</li><li>It allows blockchain applications implementing ABCI (Application Blockchain Interface) to easily use it as their consensus layer.</li><li>It supports IBC (inter-blockchain communication), enabling potential bridging between many chains.</li></ol><p>The Astria sequencer&#39;s execution logic is implemented as a CometBFT application in Rust, supporting three main functions:</p><ul><li>Sequencing of rollup data</li><li>Value transfers</li><li>Validator set changes</li></ul><p>During consensus, the proposer decides on block transactions and creates commitments to rollup data for each <code>rollup_id</code>. These are verified and finalized if agreed upon by the majority of nodes. This allows rollups to pull only necessary data while verifying its commitment matches what the sequencer chain finalized.</p><p>The sequencer network also ensures data availability:</p><p>During consensus, block data is made available to all validators for verification and voting on rollup data commitments. After consensus, data is made more widely available via Celestia, a data availability layer supporting data availability sampling via light nodes. Sequencer nodes can optionally act as &quot;validators,&quot; actively participating in the production and finalization of new blocks.</p><p>This combined approach allows the Astria Sequencing Layer to efficiently order transactions for rollups while maintaining security, finality, and data availability.</p>',13)]))}const f=a(s,[["render",r]]);export{m as __pageData,f as default};
