import{_ as t,c as o,a3 as a,o as r}from"./chunks/framework.ohJJpums.js";const i="/assets/astria-architecture.B-nVTATW.png",f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"overview/introduction.md","filePath":"overview/introduction.md","lastUpdated":1729701864000}'),s={name:"overview/introduction.md"};function n(l,e,c,d,u,h){return r(),o("div",null,e[0]||(e[0]=[a('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p><img src="'+i+'" alt="Astria Architecture"></p><p>Astria is building a decentralized sequencing layer that can be shared amongst multiple rollups.</p><p>At a high level, the Astria Stack performs the following functions:</p><ul><li>sequences arbitrary data for usage by multiple rollups</li><li>makes this data available to rollup nodes</li><li>allows rollup nodes to easily fetch and verify sequenced data</li><li>batches rollup blocks and posts these batches to Celestia</li></ul><p>The first requirement (sequencing of arbitrary data for rollups) is implemented by the Astria sequencer network, a decentralized network of sequencer nodes that use CometBFT for consensus. The sequencer network comes to consensus on the ordering and inclusion of rollup transactions of the form <code>(rollup_id, tx_bytes)</code>. The <code>rollup_id</code> can be any arbitrary string; it’s used only by rollup nodes to determine which data is for them. The second (making data available to rollup nodes) is achieved by publishing the sequenced data via Celestia.</p><p>The third (allowing rollup nodes to easily fetch and verify sequenced data) is achieved by the Astria “Conductor”, which works similarly to existing rollup “consensus nodes”, such as op-node within the OP Stack. The conductor obtains the sequenced data, verifies it, and derives the transactions for a specific rollup, all while remaining agnostic to the transaction format and state transition function of the rollup execution node. It then passes the derived transactions to the rollup execution node for processing.</p><p>The Astria sequencer network is a lazy sequencer. This means that data is sequenced and committed, but execution is delayed until necessary, and is left to the rollup. This de-couples the execution logic from the consensus logic, removing consensus bottlenecks and allowing for more flexibility for rollup developers. For example, since the data is executed lazily, a rollup may choose to have 2 rollup blocks per Astria block, or 1 rollup block per Astria block. The rollup’s consensus and execution logic is not enshrined in the sequencer.</p><h2 id="what-should-i-read" tabindex="-1">What Should I Read? <a class="header-anchor" href="#what-should-i-read" aria-label="Permalink to &quot;What Should I Read?&quot;">​</a></h2><p>Want to learn more about about rollups or the sequencer? Check out the <a href="/overview/how-rollups-work">How Rollups Work</a> or <a href="/overview/components/the-astria-sequencing-layer">The Astria Sequencing Layer</a>.</p><p>If you&#39;re a rollup developer eager to get started, you should go straight to our <a href="./../developer/astria-go/astria-go-installation"><code>astria-go</code> cli tutorials</a>.</p><h2 id="source-code" tabindex="-1">Source Code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source Code&quot;">​</a></h2><p>Check out the <a href="https://github.com/astriaorg/astria" target="_blank" rel="noreferrer">Astria repository</a>.</p>',13)]))}const m=t(s,[["render",n]]);export{f as __pageData,m as default};
