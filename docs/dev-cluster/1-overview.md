---
sidebar_position: 1
---

# Dev-Cluster Overview

:::tip
To deploy your own rollup on the Astria Dusknet devnet, check out the
[instructions here](/docs/running-a-rollup-on-astria-dusknet/overview/)!
:::

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
to the remote dev-net, but those will be [discussed in another
section](/docs/running-a-rollup-on-astria-dusknet/local-rollup-deployment/).
:::

See the [dev-cluster repo here.](https://github.com/astriaorg/dev-cluster)

## Running the Dev Cluster Locally

### Installation
You will need to pull both the [dev-cluster](https://github.com/astriaorg/dev-cluster) and [astria-web3](https://github.com/astriaorg/astria-web3) repos from our github.

Install the necessary dependencies and tools listed for each repo:

* docker - https://docs.docker.com/get-docker/
* kubectl - https://kubernetes.io/docs/tasks/tools/
* helm - https://helm.sh/docs/intro/install/
* kind - https://kind.sigs.k8s.io/docs/user/quick-start/#installation
* just - https://just.systems/man/en/chapter_4.html

For contract deployment:

* Forge (part of Foundry) - https://book.getfoundry.sh/getting-started/installation

### Deployment

:::tip
Make sure that Docker is running before deploying with `just`.
:::

To deploy the Astria Sequencer and a local DA, open a terminal in the dev-cluster directory and run the commands: 
```bash
# Deploys ingress + Sequencer + local DA
just deploy-astria-local
```

This may take a minute or two if this the first time you are deploying as quite
a few containers need to be downloaded. Once the command completes, all elements
of the dev-cluster will be up and running. This does not run a rollup, block
explorer, or faucet. 

You can now deploy a rollup.
