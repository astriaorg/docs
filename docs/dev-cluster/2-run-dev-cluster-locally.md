---
sidebar_position: 2
---

# Running the Dev Cluster Locally

:::tip
To deploy your own rollup on the Astria Dusknet devnet, check out the
[instructions here](/docs/dusknet/overview/)!
:::

## Installation
You will need to pull both the [dev-cluster](https://github.com/astriaorg/dev-cluster) and [astria-web3](https://github.com/astriaorg/astria-web3) repos from our github.

Install the necessary dependencies and tools listed for each repo:

* docker - https://docs.docker.com/get-docker/
* kubectl - https://kubernetes.io/docs/tasks/tools/
* helm - https://helm.sh/docs/intro/install/
* kind - https://kind.sigs.k8s.io/docs/user/quick-start/#installation
* just - https://just.systems/man/en/chapter_4.html

For contract deployment:

* Forge (part of Foundry) - https://book.getfoundry.sh/getting-started/installation

## Deployment

:::tip
Make sure that Docker is running before deploying with `just`.
:::

To deploy the Astria Sequencer and a local DA, open a terminal in the dev-cluster directory and run the commands: 
```bash
# create control plane cluster
just create-cluster
# ingress controller
just deploy-ingress-controller
# wait for ingress.
just wait-for-ingress-controller
# Deploys Sequencer + local DA
just deploy-astria-local
```

This may take a minute or two if this the first time you are deploying as quite
a few containers need to be downloaded. Once the command completes, all elements
of the dev-cluster will be up and running. This does not run a rollup, block
explorer, or faucet. 

Now that the sequencer and DA are running, the next step is to deploy a rollup.
