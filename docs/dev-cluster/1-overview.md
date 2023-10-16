---
sidebar_position: 1
---

# Dev-Cluster Overview

Astria's Shared Sequencer Network allows multiple rollups to share a single decentralized network of sequencers that’s permissionless to join. This shared sequencer network provides out-of-the-box censorship resistance, fast block confirmations, and atomic cross-rollup inclusion guarantees.

The Astria [dev-cluster](https://github.com/astriaorg/dev-cluster) is the
collective stack of all of Astria's components packaged together using
Kubernetes. While we generally refer to Astria as the network of shared
sequencers, we provide several other components to make it simpler to integrate
with the shared sequencer network. The dev-cluster is provided to make
developing and testing the Astria network, as well as integrations with Astria,
as simple as possible.

:::tip
The primary use of the dev-cluster is running the full stack completely locally.
There are elements of it that are used for running a local rollup that connects
to the remote dev-net, but those will be [discussed in a later
section](/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment/).
:::

See the [dev-cluster repo here.](https://github.com/astriaorg/dev-cluster)
