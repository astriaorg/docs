---
sidebar_position: 4
---

# Composer

:::tip
To deploy your own rollup on the Astria Dusknet, check out the
[instructions here](/docs/local-rollup/introduction/)!
:::

The Composer is an in-house abstraction over the potential actors in Astria's
MEV supply chain. It currently contains a naive implementations of the role a
searcher will fulfill, with the intention of having working examples that
economically incentivized third parties can use as a starting point for their
own implementations. As we progress from design to implementation of Astria's
proposer-builder separation it will also include an example implementation of a
naive builder. The abstractions serves the goal of acting as a forcing function
on our architecture design by stubbing out the roles and requiring other
components to interact with them through an interface.

While a real searcher implementation would create profit-generating bundles of rollup transactions and submit them to a builder, the Composer implementation simply bundles every rollup transaction it receives into a sequencer transaction and submits it to the sequencer. As our approach to proposer-builder separation is still in its design phase, there is currently no explicit builder role in the MEV supply chain and transactions are submitted directly to validator nodes' CometBFT mempool.

Once Astria's block builder design moves to its implementation phase, the Composer will include a reference builder implementation as well. Similarly to the searcher, while a real builder implementation would run a profit-generating auction, the composer implementation will simply run a FIFO queue that will add all the sequencer transactions it receives and submits a block to the sequencer's proposer.

Once Astria's block builder design moves to its implementation phase, the Composer will include a reference builder implementation as well. Similarly to the searcher, while a real builder implementation would run a profit-generating auction, the composer implementation will simply run a FIFO queue that will add all the sequencer transactions it receives and submits a block to the sequencer's proposer.

See the [Conductor code
here.](https://github.com/astriaorg/astria/tree/main/crates/astria-conductor)
