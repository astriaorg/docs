---
sidebar_position: 2
---

# Running the Dev Cluster Locally

### Installation
You will need to pull both the [dev-cluster](https://github.com/astriaorg/dev-cluster) and [astria-web3](https://github.com/astriaorg/astria-web3) repos from our github.

Install the necessary dependencies and tools listed for each repo.
<!-- TODO: add a list of specific dependencies here -->

### Deployment
To deploy the Astria Sequencer and a local DA, open a terminal in the dev-cluster directory and run the command: 
```sh
just just deploy-astria-local
```

This may take a minute or two if this the first time you are deploying as quite
a few containers need to be downloaded. Once the command completes, all elements
of the dev-cluster will be up and running. This does not run a rollup, block
explorer, or faucet. 

Now that the sequencer and DA are running, the next step is to deploy a rollup.
