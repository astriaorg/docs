---
sidebar_position: 3
---

# Local Rollup Deployment

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

## Create Rollup Config

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

## Setup Local Environment

We use part of the [Astria
dev-cluster](https://github.com/astriaorg/dev-cluster) to setup a local
Kubernetes (k8s) cluster where we will deploy our local rollup.

:::tip
Make sure that Docker is running before deploying with `just`.
:::

In the __dev-cluster repo__, run:

```sh
git clone git@github.com:astriaorg/dev-cluster.git
cd dev-cluster
just create-cluster
just deploy-ingress-controller
just wait-for-ingress-controller
```

This gives us a local environment compatible with our helm charts.

## Create a New Sequencer Account

Back in the __Astria repo__, run the cli to create the address and key
information for a new sequencer account. 

```bash
astria-cli sequencer account create
```

The address, public and private keys will be different from those below. Save
these values for later use.

```bash
Create Sequencer Account

Private Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>
Public Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>
Address:     "8a2f...5f68"
```

Keep track of the `<SEQUENCER_ACCOUNT_PUB_KEY>` as it will be used with the
Faucet later on for funding your sequencer account.

Now export the private key printed above:
```bash
export SEQUENCER_PRIV_KEY=<SEQUENCER_ACCOUNT_PRIV_KEY>
```

## Deploy the Configuration

Then deploy the configuration with:

```bash
astria-cli rollup deployment create \
  --config $ROLLUP_CONF_FILE \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $SEQUENCER_PRIV_KEY
```

## Observe your Deployment

Your rollups utility endpoints are as follows:

| Utility | URL |
|-----|-----|
| Block Explorer | http://blockscout.<YOUR_ROLLUP_NAME>.localdev.me/ |
| Faucet | http://faucet.<YOUR_ROLLUP_NAME>.localdev.me/ |
| RPC | http://executor.<YOUR_ROLLUP_NAME>.localdev.me/ |

Open the URLs in your browser to view your running rollup.

You can also open the Block Explorer in a new browser window to see the faucet
transaction appear, or any of the transactions you have sent using `cast`.

## Use `cast` to Interact with your Rollup

Use `cast` to view the blocks on your rollup.

```bash
# replace <your_rollup_name> with the name you used in your configuration
export ETH_RPC_URL=http://executor.$ROLLUP_NAME.localdev.me/
cast block 0
```

Which should print something like this:

```bash
baseFeePerGas        1000000000
difficulty           10000000
extraData            0x
gasLimit             8000000
gasUsed              0
hash                 0xa2d5f000ef275b5f6ce6af5a0de50c17e5893c5ea664b77f534eb62f317caff1
logsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
miner                0x0000000000000000000000000000000000000000
mixHash              0x0000000000000000000000000000000000000000000000000000000000000000
nonce                0x0000000000000000
number               0
parentHash           0x0000000000000000000000000000000000000000000000000000000000000000
receiptsRoot         0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421
sealFields           []
sha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
size                 512
stateRoot            0xc1a913facf57b18de72d25155293c53b2a463d93a1de735269410b8663f2efca
timestamp            0
withdrawalsRoot
totalDifficulty      10000000
transactions:        []
```

If you have an address you would like to deposit funds to, export that address
to the env vars:
```bash
export REC_ADDR=<ADDRESS>
```

You can also use `cast` to view your balance:
```bash
cast balance $REC_ADDR
```

Send an ammount to your address:
```bash
cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY
```

And view your new balance:
```bash
cast balance $REC_ADDR
```

## Fund you Sequencer Account

Using your sequencer pub key you created in the [Create a New Sequencer
Account](#create-a-new-sequencer-account), copy and past the
`<SEQUENCER_ACCOUNT_PUB_KEY>` into the input on the faucet page, and mint funds
to your account:

![Sequencer Faucet](./assets/sequencer-faucet.png)
