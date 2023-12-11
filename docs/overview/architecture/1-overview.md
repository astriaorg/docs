---
sidebar_position: 1
---

# Architecture Overview

:::tip
To deploy your own rollup on the Astria Dusknet devnet, check out the
[instructions here](/docs/dusknet/overview/)!
:::

At a high level, Astria breaks out all of the components that are historically
combined together in monolithic blockchains into individual components. This
results in a modular ecosystem that allows users to swap out components to fit
their specific needs.

![Astria Architecture](../assets/astria-architecture.png)

Given this architecture, rollups can retrieve blocks from Astria immediately after they’re created, without waiting for the base layer to include them. The economic weight of Astria’s decentralized sequencer set provides confidence that this transaction order is final. This “soft commitment” allows rollups to provide their end users with fast block confirmations. Alternatively, rollups can wait for blocks to be included by the base layer, giving them the strongest finality. All transactions still get this “firm commitment” at the speed of the base layer, fast pre-confirmations are just an additional feature that Astria provides to rollups if they choose to use it.

To generate a new state root, a rollup’s full nodes retrieve a block from either
Astria or the base layer, check it against Astria’s fork choice rule, filter out
transactions from other rollups, and apply the resultant subset of transactions
to their previous state. Headers can then be generated from this state root and
gossiped to light clients. Rollups of this style are termed ‘Lazy Rollups’, a
nod to the [Lazy
Evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation?ref=blog.astria.org)
principle found in programming language theory.

See the [Astria repo here.](https://github.com/astriaorg/astria)
