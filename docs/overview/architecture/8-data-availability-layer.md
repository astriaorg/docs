---
sidebar_position: 8
---

# Data Availability Layer

:::tip
To deploy your own rollup on the Astria Dusknet, check out the
[instructions here](/docs/local-rollup/introduction/)!
:::

The dev-cluster uses [Celestia](https://github.com/celestiaorg) as the data
availability layer and is the ultimate destination of all data that has been
ordered by the sequencer network. Once written to Celestia, the transaction
order is considered final and it is where all data will be pulled from when a
new rollup node is spun up.

See the [Celestia website](https://celestia.org/what-is-celestia/) for a more
in depth introduction.
