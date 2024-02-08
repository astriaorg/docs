"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[696],{5988:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"Overview","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Why Decentralized Sequencers?","href":"/docs/overview/why-decentralized-sequencers","docId":"overview/why-decentralized-sequencers"},{"type":"link","label":"Cross-Rollup Composability","href":"/docs/overview/cross-rollup-composability","docId":"overview/cross-rollup-composability"},{"type":"category","label":"Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Transaction Flow","href":"/docs/overview/architecture/transaction-flow","docId":"overview/architecture/transaction-flow"},{"type":"link","label":"Rollups","href":"/docs/overview/architecture/rollup","docId":"overview/architecture/rollup"},{"type":"link","label":"Composer","href":"/docs/overview/architecture/composer","docId":"overview/architecture/composer"},{"type":"link","label":"The Astria Sequencer","href":"/docs/overview/architecture/the-astria-sequencer","docId":"overview/architecture/the-astria-sequencer"},{"type":"link","label":"Relayer","href":"/docs/overview/architecture/relayer","docId":"overview/architecture/relayer"},{"type":"link","label":"Conductor","href":"/docs/overview/architecture/conductor","docId":"overview/architecture/conductor"},{"type":"link","label":"Data Availability Layer","href":"/docs/overview/architecture/data-availability-layer","docId":"overview/architecture/data-availability-layer"}],"href":"/docs/overview/architecture/overview"}],"href":"/docs/overview/introduction"},{"type":"link","label":"Deploy a Local Rollup","href":"/docs/local-rollup/introduction","docId":"local-rollup/introduction"},{"type":"category","label":"Deploy a Cloud Rollup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Digital Ocean","href":"/docs/cloud-rollup/digital-ocean","docId":"cloud-rollup/digital-ocean"}],"href":"/docs/category/deploy-a-cloud-rollup"},{"type":"link","label":"The Astria EVM","href":"/docs/astria-evm/overview","docId":"astria-evm/overview"},{"type":"link","label":"Dusknet FAQ","href":"/docs/dusk-faq/information","docId":"dusk-faq/information"}]},"docs":{"astria-evm/overview":{"id":"astria-evm/overview","title":"Astria EVM","description":"Network Information","sidebar":"docsSidebar"},"cloud-rollup/digital-ocean":{"id":"cloud-rollup/digital-ocean","title":"Digital Ocean","description":"This guide will walk you through deploying a rollup full node on","sidebar":"docsSidebar"},"dusk-faq/information":{"id":"dusk-faq/information","title":"FAQ and Debugging","description":"Endpoints","sidebar":"docsSidebar"},"local-rollup/introduction":{"id":"local-rollup/introduction","title":"Overview","description":"This guide will walk you through deploying a rollup full node on","sidebar":"docsSidebar"},"overview/architecture/composer":{"id":"overview/architecture/composer","title":"Composer","description":"The Composer is an in-house abstraction over the potential actors in Astria\'s","sidebar":"docsSidebar"},"overview/architecture/conductor":{"id":"overview/architecture/conductor","title":"Conductor","description":"Conductor\'s role is to drive the deterministic execution of sequencer blocks to","sidebar":"docsSidebar"},"overview/architecture/data-availability-layer":{"id":"overview/architecture/data-availability-layer","title":"Data Availability Layer","description":"The dev-cluster uses Celestia as the data","sidebar":"docsSidebar"},"overview/architecture/overview":{"id":"overview/architecture/overview","title":"Architecture Overview","description":"At a high level, Astria breaks out all of the components that are historically","sidebar":"docsSidebar"},"overview/architecture/relayer":{"id":"overview/architecture/relayer","title":"Relayer","description":"The Relayer\'s responsibility is to take validated blocks from the sequencer and","sidebar":"docsSidebar"},"overview/architecture/rollup":{"id":"overview/architecture/rollup","title":"Rollups","description":"Astria is designed for permissionless rollup integration and takes advantage of lazy shared sequencing. This means that rollup developers have total sovereignty over their own execution state and can swap out sequencing layers without fear of being locked in. You do not need to ask for permission or go through a governance process to gain access. A rollup simply needs to satisfy the following interfaces:","sidebar":"docsSidebar"},"overview/architecture/the-astria-sequencer":{"id":"overview/architecture/the-astria-sequencer","title":"The Astria Sequencer","description":"The Astria Shared Sequencer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes \u201csequencer native\u201d transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed.","sidebar":"docsSidebar"},"overview/architecture/transaction-flow":{"id":"overview/architecture/transaction-flow","title":"Transaction Flow","description":"The full transaction flow through the Astria stack is as follows:","sidebar":"docsSidebar"},"overview/cross-rollup-composability":{"id":"overview/cross-rollup-composability","title":"Cross-Rollup Composability","description":"Because Astria handles the transaction ordering for multiple rollups, it\u2019s able","sidebar":"docsSidebar"},"overview/introduction":{"id":"overview/introduction","title":"Introduction","description":"Astria is a shared sequencing network that allows many rollups to share a single","sidebar":"docsSidebar"},"overview/why-decentralized-sequencers":{"id":"overview/why-decentralized-sequencers","title":"Why Decentralized Sequencers?","description":"Centralization is antithetical to crypto. And yet, today\u2019s rollups almost","sidebar":"docsSidebar"}}}')}}]);