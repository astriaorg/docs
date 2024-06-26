# The Astria Sequencing Layer

The Astria Sequencing Layer is a decentralized network of nodes utilizing CometBFT that come to consensus on an ordered set of transactions (ie. it is a blockchain). The unique feature of the sequencer is that the transactions it includes are not executed (lazy sequencing), and are destined for another execution engine (ie. a rollup). This excludes “sequencer native” transactions, such as transfers of tokens within the sequencer chain. Transactions from any given rollup are only ordered on the sequencer, not executed.

The sequencer node can optionally act as a “validator”, meaning it actively
participates in the production and finalization of new blocks.

![Astria Shared Sequencer](../assets/shared-sequencer-overview.png)

Components of note that are not shown in the above diagram are the [Composer](composer.md),
[Relayer](relayer.md), and [Conductor](conductor.md). 

These components facilitate the delivery transactions,
batches, and different commits shown above, back to the users.
