---
sidebar_position: 2
---

# Running the Dev Cluster Locally

### Installation
You will need to pull both the [dev-cluster](https://github.com/astriaorg/dev-cluster) and [astria-web3](https://github.com/astriaorg/astria-web3) repos from our github.

Install the necessary dependencies and tools listed for each repo.

### Deployment
To deploy the full dev-cluster, open a terminal in the dev-cluster directory and run the command: 
```sh
just deploy-all-local
```

This may take a minute or two if this the first time you are deploying as quite a few containers need to be downloaded. Once the command completes, all elements of the dev-cluster will be up and running including a geth rollup, faucet and block explorer. 

At this stage you will have the full dev-cluster running with one rollup.

### Faucet, Block Explorer, and Test Data
With the dev-cluster running, you can access the block explorer and faucet by opening a couple new windows in your browser and going to to the following urls.
For the block explorer:
```
http://blockscout.astria.localdev.me/
```
For the faucet:
```
http://faucet.astria.localdev.me/
```

You can copy and paste a wallet address on the faucet page and give yourself 1 RIA. 

To test out the block explorer, open a terminal in the astria-web3 repo you downloaded earlier and navigate to the `packages/evm-test-data/` and run the following command:
```sh
just generate-transactions
```
You can now go back to your browser and pull up the block explorer and you will now see blocks with transactions getting created in real time.
