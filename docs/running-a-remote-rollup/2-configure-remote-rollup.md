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

<!-- TODO: replace with the cli command -->
```sh
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height
```

Keep track of this block height as it will be used for making the rollup config
later on.

Clone the [Astria repo](https://github.com/astriaorg/astria/tree/main), checkout
the `feature/self-serve-rollup-cli` branch, and build the new config using the `astria-cli`.

<!-- TODO: update this once the cli in merged -->
```sh
git clone git@github.com:astriaorg/astria.git
cd astria
git checkout feature/self-serve-rollup-cli
cd crates/astria-cli
```
## Using the `astria-cli`

Replace the tags in the commands and env vars below, as follows:
- `<your_rollup_name>`               -> String: the name of your rollup
- `<Your_chain_id>`                -> String: recommended to be the same as your rollup name
- `<your_network_id>`                -> u64: the id of your network
<!-- TODO: potentially remove the line below -->
- `<initial_sequencer_block_height>` -> u64: the height of the sequencer
  found above
- `<genesis_address>`                -> [u8; 40]: address
- `<balance>`                        -> u64: balance

<!-- TODO: add additional comments about how to set each of the above vars -->
### Cli only

You can use the cli with input arguments to build the config for your new rollup.

<!-- TODO: confirm that these are all correct -->
```sh
cargo run --release -- rollup config create \
  --use-tty \
  --log-level DEBUG \
  --rollup.name <YOUR_ROLLUP_NAME> \
  --rollup.chain-id 0x<YOUR_CHAIN_ID> \
  --rollup.network-id <YOUR_NETWORK_ID> \
  --rollup.skip-empty-blocks \
  --sequencer.initial-block-height <INITIAL_SEQUENCER_BLOCK_HEIGHT> \
  --sequencer.websocket ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket \
  --sequencer.rpc http://rpc.sequencer.dusk-1.devnet.astria.org \
  --celestia.full-node-url http://celestia-service:26658 \
  --rollup.genesis-accounts 0x<GENESIS_ADDRESS>:<balance>
```
:::tip
You can also optionally leave out the `--sequencer.initial-block-height` input
in the command above, and the cli will fetch the initial sequencer block height
for you.
:::

### Environment Variables + cli

Instead of setting the entire config in one command, you can optionally set the
following environment variables first:

```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_CHAIN_ID=0x<YOUR_CHAIN_ID>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:100000000000000000000
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
export ROLLUP_SEQUENCER_WEBSOCKET=ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket 
export ROLLUP_SEQUENCER_RPC=http://rpc.sequencer.dusk-1.devnet.astria.org
export ROLLUP_CELESTIA_FULL_NODE_URL=http://celestia-service:26658
```

Then just run the basic config create command:

```sh
cargo run --release -- rollup config create
```

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
    name: <YOUR_ROLLUP_NAME>
    chainId: <YOUR_CHAIN_ID>
    networkId: <YOUR_NETWORK_ID>
    skipEmptyBlocks: true
    genesisAccounts:
    - address: <GENESIS_ADDRESS>
      balance: '100000000000000000000'
  sequencer:
    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>
    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org
  celestia:
    fullNodeUrl: http://celestia-service:26658
```
