---
sidebar_position: 3
---

# Running a Local Rollup

:::tip
To deploy your own rollup on the Astria Dusknet devnet, check out the
[instructions here](/docs/running-a-rollup-on-astria-dusknet/overview/)!
:::

## Faucet, Block Explorer, and Test Data
With the dev-cluster running, you can then deploy a rollup, block explorer, and
faucet by running the following command in the terminal withing the dev-cluster:

```sh
just deploy-rollup
```

This `just` command launches a local rollup, block explorer, and faucet using
the default in
[helm/rollup/values.yaml](https://github.com/astriaorg/dev-cluster/blob/main/helm/rollup/values.yaml)
in the `config.rollup` definition.

For reference, these are:
- Rollup name: `astria`
- Network Id: `912559`

This will also take a moment as the rollup node, block explorer, and faucet spin
up. You can check the progress of the deployment with the following command:

```bash
kubectl get deployments --all-namespaces
```

Or you can run:
```bash
just wait-for-rollup
```

Once deployed, you can view the block explorer and faucet by opening a couple new windows in your browser and going to to the
following urls.
For the block explorer:
```
http://blockscout.astria.localdev.me/
```
For the faucet:
```
http://faucet.astria.localdev.me/
```

You can copy and paste a wallet address on the faucet page and give yourself 1 RIA. 

To test out the block explorer, open a terminal in the [astria-web3 repo](https://github.com/astriaorg/astria-web3/tree/main) you downloaded earlier and navigate to the `packages/evm-test-data/` and run the following command:
```sh
just generate-transactions
```
This command uses the default rollup name and network id (see above), and will
submit commands to the newly deployed default rollup.

You can now go back to your browser and pull up the block explorer and you will now see blocks with transactions getting created in real time.
