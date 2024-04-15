---
sidebar_position: 5
---

# The Astria Sequencer

<!--@include: ./../../components/_deployment-instructions-redirect.md-->

<DeploymentsRedirect />

The Astria Shared Sequencer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes “sequencer native” transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed.

The sequencer can optionally act as a “validator”, meaning it actively
participates in the production and finalization of new blocks.

![Astria Shared Sequencer](../assets/shared-sequencer-overview.png)

Components of note that are not shown in the above diagram are the [Composer](/docs/overview/architecture/4-composer.mdx),
[Relayer](/docs/overview/architecture/6-relayer.mdx), and [Conductor](/docs/overview/architecture/7-conductor.mdx). 

These components facilitate the delivery transactions,
batches, and different commits shown above, back to the users.

See the [Sequencer code here.](https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer)
