---
sidebar_position: 3
---

# Cross-Rollup Composability

:::tip
To deploy your own rollup on the Astria Dusknet devnet, check out the
[instructions here](/docs/running-a-rollup-on-astria-dusknet/overview/)!
:::

Because Astria handles the transaction ordering for multiple rollups, it’s able to provide guarantees that transactions are only included as part of an atomic bundle. This allows users to specify that a transaction on Rollup A can be included in a block if and only if a different transaction on Rollup B is also included in the same block. By enabling such conditional transaction inclusion, Astria unlocks exciting possibilities such as atomic cross-rollup arbitrage.
