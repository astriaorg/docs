---
sidebar_position: 2
---

# Configure the Remote Rollup

Endpoints for the remote cluster are the following:

| NAME (as helm creates) | HOSTS | ADDRESS |
|----------|--------|---------|
| astria-ingress | rpc.evm.dusk-1.devnet.astria.org | 34.160.214.22 |
| blockscout-ingress | explorer.evm.dusk-1.devnet.astria.org | 34.111.167.16 |
| faucet-ingress | faucet.evm.dusk-1.devnet.astria.org | 130.211.4.120 |
| sequencer-faucet | faucet.sequencer.dusk-1.devnet.astria.org | 34.36.8.102 |
| sequencer-ingress | rpc.sequencer.dusk-1.devnet.astria.org | 34.111.73.187 |

Take the `sequencer-ingress` URL and run the following command to get the
current block height of the sequencer.

```sh
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height
```

Keep track of this block height as it will be used for making the rollup config
later on.

Clone the [Astria repo](https://github.com/astriaorg/astria/tree/main), checkout
the `feature/self-serve-rollup-cli` branch, and build the new config using the `astria-cli`.

```sh
git clone git@github.com:astriaorg/astria.git
cd astria
git checkout feature/self-serve-rollup-cli
cd crates/astria-cli
```

Now use the cli to create the config for the new rollup.
Replace the tags in the command below, as follows:
- `<your_rollup_name>`               -> String: the name of your rollup
- `<OxYour_chain_id>`                -> String: recommended to be the same as your rollup name
- `<your_network_id>`                -> u64: the id of your network
- `<initial_sequencer_block_height>` -> u64: the height of the sequencer
  found above

<!-- TODO: confirm that these are all correct -->
```sh
cargo run --release -- rollup config create \
  --use-tty \
  --log-level DEBUG \
  --rollup.name <your_rollup_name> \
  --rollup.chain-id <0xyour_chain_id> \
  --rollup.network-id <your_network_id> \
  --rollup.skip-empty-blocks \
  --sequencer.initial-block-height <initial_sequencer_block_height> \
  --sequencer.websocket ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket \
  --sequencer.rpc http://rpc.sequencer.dusk-1.devnet.astria.org \
  --celestia.full-node-url http://celestia-service:26658 \
  --rollup.genesis-accounts 0xaC21B97d35Bf75A7dAb16f35b111a50e78A72F30:100000000000000000000
```
:::note
You can also optionally leave out the `--sequencer.initial-block-height` input
in the command above, and the cli will fetch the initial sequencer block height
for you.
:::

You can then run:

```sh
cat <some_rollupname>-rollup-conf.yaml
```

to print out the config file contents to double check everything:

```sh
config:
  useTTY: true
  logLevel: DEBUG
  rollup:
    name: <some_rollup_name>
    chainId: <0xSome_chain_id>
    networkId: <some_network_id>
    skipEmptyBlocks: true
    genesisAccounts:
    - address: 0xaC21B97d35Bf75A7dAb16f35b111a50e78A72F30
      balance: '100000000000000000000'
  sequencer:
    initialBlockHeight: 216772
    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org
  celestia:
    fullNodeUrl: http://celestia-service:26658
```
