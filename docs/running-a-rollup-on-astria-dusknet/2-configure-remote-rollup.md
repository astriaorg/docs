---
sidebar_position: 2
---

# Configure the Remote Rollup

## Endpoints

Endpoints for the remote cluster are the following:

| NAME | HOSTS | ADDRESS |
|-----|-----|-----|
| EVM JSON RPC | rpc.evm.dusk-1.devnet.astria.org | 34.160.214.22 |
| EVM Block Explorer | explorer.evm.dusk-1.devnet.astria.org | 34.111.167.16 |
| EVM Faucet | faucet.evm.dusk-1.devnet.astria.org | 130.211.4.120 |
| Sequencer RPC | rpc.sequencer.dusk-1.devnet.astria.org | 34.111.73.187 |
| Sequencer Faucet | faucet.sequencer.dusk-1.devnet.astria.org | 34.36.8.102 |


## Creating your own Genesis Account

You can add genesis account(s) to your rollup during configuration.
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

This export is also shown in the export block in the next section.

:::danger
__NEVER__ use a private key you use on a live network. 

For ease of use we recommend you set this to an  key which you have access to
:::

## Build the `astria-cli`

Clone the [Astria repo](https://github.com/astriaorg/astria/tree/main) and build
a new config using the `astria-cli`.

```bash
git clone git@github.com:astriaorg/astria.git
cd astria
just install-cli
```

## Using the `astria-cli`

### Get Current Sequencer Block Height

```bash
astria-cli sequencer blockheight get \
  --sequencer-url https://rpc.sequencer.dusk-1.devnet.astria.org/
```

Keep track of this block height as it will be used for making the rollup config
later on. You will use this printed height in place of
`<INITIAL_SEQUENCER_BLOCK_HEIGHT>` in the steps below.

Replace the following tags in the sections below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup |
| `<YOUR_NETWORK_ID>` | u64 | The id of your network |
| `<INITIAL_SEQUENCER_BLOCK_HEIGHT>` | u64 | The height of the sequencer (found above) |
| `<GENESIS_ADDRESS>` | [u8; 40] | A wallet address |
| `<BALANCE>` | u64 | A balance. It is useful to make this a large value. |
<!-- TODO?: potentially remove the initial sequencer block height as that may be found automatically -->

<!-- TODO: add this back in when the automated block height is added -->
<!-- :::tip
You can also optionally leave out the `--sequencer.initial-block-height` input
in the command above, and the cli will fetch the initial sequencer block height
for you.
::: -->

## Environment Variables + cli

You can use environment variables to set the configuration for the rollup
config creation. Replace all the `<>` tags with their corresponding values. 

```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
```

Then just run the config create command:

```sh
astria-cli rollup config create
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
    chainId: # derived from rollup name
    networkId: <YOUR_NETWORK_ID>
    skipEmptyBlocks: true
    genesisAccounts: 
      - address: 0x<GENESIS_ADDRESS>
        balance: '<BALANCE>'
  sequencer:
    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>
    websocket: ws://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: http://rpc.sequencer.dusk-1.devnet.astria.org
  celestia:
    fullNodeUrl: http://celestia-service:26658
```

Export this file to the env vars as follows:
```bash
export ROLLUP_CONF_FILE=<YOUR_ROLLUP_NAME>-rollup-conf.yaml
```

At this point, if you do not want to add any genesis accounts to your rollup you
can move on to the next section.

If you do want to add an account(s), see the next section.
