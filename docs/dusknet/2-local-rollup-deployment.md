---
sidebar_position: 2
---

# Local Rollup Deployment

## Setup Local Environment

We use part of the [Astria
dev-cluster](https://github.com/astriaorg/dev-cluster) to setup a local
Kubernetes (k8s) cluster where we will deploy our local rollup.

:::tip
Make sure that Docker is running before continuing.
:::

In the __dev-cluster repo__, run:

```sh
just create-cluster
just deploy-ingress-controller
```

This gives us a local environment compatible with our helm charts.

## Create your Rollup Genesis Account(s)

:::danger
__NEVER__ use a private key you use on a live network.
:::

You can add genesis account(s) to your rollup during configuration.

You can create an account using:

```bash
cast w new
```

```bash
Successfully created new keypair.
Address:     0xfFe9...5f8b # <GENESIS_ADDRESS>
Private key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>
```

Export the genesis private key, this will be used by the
 faucet included with the rollup:

```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

Export the genesis address alongside with your desired initial balance,
 in Wei, we recommend using a value of `100000000000000000000` or larger:

```bash
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>
```

You can specify multiple accounts to be funded at
 genesis as comma deliminated tuples of `<ADDRESS>:<BALANCE>`

```bash
export ROLLUP_GENESIS_ACCOUNTS=<ADDRESS_1>:<BALANCE_1>,<ADDRESS_2>:<BALANCE_2>
```

## Install the `astria-cli`

Navigate to your [Astria repo](https://github.com/astriaorg/astria/tree/main)
and install the `astria-cli`.

```bash
cd astria
just install-cli
```

## Create Rollup Config

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup. This must be lowercase alphanumeric, `-` is allowed, this will be included in your rollup's URLs.|
| `<YOUR_NETWORK_ID>` | u64 | The id of your network. Pick a >= 6 digit number (eg. `123456`) |

You can use environment variables to set the configuration for the rollup
config creation. Replace all the `<>` tags with their corresponding values.

```bash
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
```

Run the config create command:

```sh
astria-cli rollup config create
```

Export the config file name as an env vars:

```bash
export ROLLUP_CONF_FILE=$ROLLUP_NAME-rollup-conf.yaml
```

Verify the config

```sh
cat $ROLLUP_CONF_FILE
```

```sh
namespace: astria-dev-cluster
config:
  useTTY: false
  logLevel: debug
  rollup:
    name: <YOUR_ROLLUP_NAME>
    chainId: <YOUR_ROLLUP_NAME>-chain
    networkId: '<YOUR_NETWORK_ID>'
    skipEmptyBlocks: false
    genesisAccounts:
    - address: <GENESIS_ADDRESS>
      balance: '<BALANCE>'
  sequencer:
    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>
    websocket: wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: https://rpc.sequencer.dusk-1.devnet.astria.org
  ingress:
    hostname: localdev.me
```

## Create a New Sequencer Account

```bash
astria-cli sequencer account create
```

```bash
Create Sequencer Account

Private Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>
Public Key:  "ec20...f613" # 
Address:     "8a2f...5f68" # <SEQUENCER_ACCOUNT_ADDRESS>
```

Export your sequencer private key and address as environment variables:

```bash
export SEQUENCER_PRIV_KEY=9c78...710d
export SEQUENCER_ACCOUNT_ADDRESS=8a2f...5f68
```

## Fund your Sequencer Account

Navigate to <https://faucet.sequencer.dusk-1.devnet.astria.org/> to view the
 sequencer faucet.

Enter your `<SEQUENCER_ACCOUNT_ADDRESS>` into the text box to send
 funds to your account:

![Sequencer Faucet](assets/sequencer-faucet.png)

Verify your account received the funds

```bash
astria-cli sequencer balance get $SEQUENCER_ACCOUNT_ADDRESS --sequencer-url=https://rpc.sequencer.dusk-1.devnet.astria.org
```

## Deploy the Configuration

Then deploy the configuration with:

```bash
astria-cli rollup deployment create \
  --config $ROLLUP_CONF_FILE \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $SEQUENCER_PRIV_KEY
```

## Watch for pod startup

```bash
kubectl get pods -n astria-dev-cluster -w
```

```bash
NAME                                             READY   STATUS    RESTARTS      AGE
<YOUR_ROLLUP_NAME>-blockscout-647745c66d-vz4ks   6/6     Running   1 (56s ago)   72s
<YOUR_ROLLUP_NAME>-faucet-68667bd895-pwqmz       1/1     Running   0             72s
<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5xp8         3/3     Running   0             72s
```

## Observe your Deployment

Your rollups utility endpoints are as follows:

| Utility | URL |
|-----|-----|
| Block Explorer | `http://blockscout.<YOUR_ROLLUP_NAME>.localdev.me/` |
| Faucet | `http://faucet.<YOUR_ROLLUP_NAME>.localdev.me/` |
| RPC | `http://executor.<YOUR_ROLLUP_NAME>.localdev.me/` |

Open the URLs in your browser to view your running rollup.

You can also open the Block Explorer in a new browser window to see the faucet
transaction appear, or any of the transactions you have sent using `cast`.

## Use `cast` to Interact with your Rollup

Use `cast` to view the blocks on your rollup.

```bash
# set the Eth RPC url to point at your rollup
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
