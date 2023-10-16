---
sidebar_position: 2
---

# Configure the Remote Rollup

## Endpoints

Endpoints for the remote cluster are the following:

| NAME (as helm creates) | HOSTS | ADDRESS |
|-----|-----|-----|
| astria-ingress | rpc.evm.dusk-1.devnet.astria.org | 34.160.214.22 |
| blockscout-ingress | explorer.evm.dusk-1.devnet.astria.org | 34.111.167.16 |
| faucet-ingress | faucet.evm.dusk-1.devnet.astria.org | 130.211.4.120 |
| sequencer-faucet | faucet.sequencer.dusk-1.devnet.astria.org | 34.36.8.102 |
| sequencer-ingress | rpc.sequencer.dusk-1.devnet.astria.org | 34.111.73.187 |

## Get the Current Sequencer Block Height

Take the `sequencer-ingress` URL and run the following command to get the
current block height of the sequencer.

<!-- TODO: replace with the cli command -->
```sh
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height
```

Keep track of this block height as it will be used for making the rollup config
later on. You will use this printed height in place of
`<INITIAL_SEQUENCER_BLOCK_HEIGHT>` in the steps below.

## Build the `astria-cli`

Clone the [Astria repo](https://github.com/astriaorg/astria/tree/main), checkout
the `feature/self-serve-rollup-cli` branch, and build the new config using the `astria-cli`.

<!-- TODO: update this once the cli in merged -->
```bash
git clone git@github.com:astriaorg/astria.git
cd astria
git checkout feature/self-serve-rollup-cli
cd crates/astria-cli
cargo build --release
# return to the root dir of the `astria` repo
cd ../..
```
## Using the `astria-cli`

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup |
| `<YOUR_ROLLUP_ID>` | String | Recommended to be the same as your rollup name |
| `<YOUR_NETWORK_ID>` | u64 | The id of your network |
| `<INITIAL_SEQUENCER_BLOCK_HEIGHT>` | u64 | The height of the sequencer (found above) |
| `<GENESIS_ADDRESS>` | [u8; 40] | A wallet address |
| `<BALANCE>` | u64 | A balance |
<!-- TODO: potentially remove the initial sequencer block height as that may be found automatically -->

<!-- TODO: add this back in when the automated block height is added -->
<!-- :::tip
You can also optionally leave out the `--sequencer.initial-block-height` input
in the command above, and the cli will fetch the initial sequencer block height
for you.
::: -->

## Environment Variables + cli

Instead of setting the entire config in one command, you can optionally set the
following environment variables first:

```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_CHAIN_ID=0x<YOUR_CHAIN_ID>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
```

:::tip
See the [Creating your own Genesis Account](#creating-your-own-genesis-account) section below if you would like to
add a pre-funded account genesis account.
:::

Then just run the basic config create command:

```sh
./target/release/astria-cli rollup config create
```

You can then run:

```sh
cat <YOUR_ROLLUP_NAME>-rollup-conf.yaml
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
    genesisAccounts: []
  sequencer:
    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>
    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org
  celestia:
    fullNodeUrl: http://celestia-service:26658
```

At this point, if you do not want to add any genesis accounts to your rollup you
can move on to the next section.

If you do want to add an account(s), see the next section.

## Creating your own Genesis Account

You can optionally add a genesis account(s) to your rollup during configuration.
This is done by `export`ing the additional `ROLLUP_GENESIS_ACCOUNTS` environment variable.

```bash
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:100000000000000000000
```

You can create an account using

```bash
cast w new
```

to create a new account:

```bash
Successfully created new keypair.
Address:     0xfFe9...5f8b # <GENESIS_ADDRESS>
Private key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>
```

Set `<GENESIS_ADDRESS>` to the address printed out from the new command, and
`export` the private key to the env vars using:
```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

:::danger
__NEVER__ use a private key you use on a live a network. 

For ease of use we recommend you set this to an  key which you have access to
:::

If you do use a genesis account, your full env var export will look something
like this:
```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_CHAIN_ID=<YOUR_CHAIN_ID>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:100000000000000000000
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=418933
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
export ROLLUP_CELESTIA_FULL_NODE_URL=http://celestia-service:26658
```
