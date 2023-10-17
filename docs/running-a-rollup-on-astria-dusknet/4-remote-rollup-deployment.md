---
sidebar_position: 4
---

# Remote Rollup Deployment

The following assumes you are using [Digital Ocean Kubernetes
(DOKS)](https://www.digitalocean.com/products/kubernetes).

:::warning
You must use at least a 2 node cluster.
:::

## Manually Setup Digital Ocean Ingress

Follow the steps here to setup the nginx ingress controller:
- https://marketplace.digitalocean.com/apps/nginx-ingress-controller

Follow the steps here to add your own domain:
- https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/
- This is where you will set `<YOUR_HOSTNAME>`

Follow the steps here to set up an `A` record for DNS:
- https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records

:::tip
When configure=ing the `A` record for DNS, the `directs to` value should specify the `loadbalancer` which was created for the `nginx-ingress-controller` using the console. 
:::

## Watching Ingress Deployment

Look for `ingress-nginx`

```bash
kubectl get ns -w
```

Look for two pods starting with `ingress-nginx-controller` in STATUS `Running`

```bash
kubectl get po -n ingress-nginx -w
```

## Digital Ocean Loadbalancer

Look for a new loadbalancer being created:
https://cloud.digitalocean.com/networking/load_balancers

## Endpoints

Endpoints for the remote cluster are the following:

| NAME (as helm creates) | HOSTS | ADDRESS |
|-----|-----|-----|
| astria-ingress | rpc.evm.dusk-1.devnet.astria.org | 34.160.214.22 |
| blockscout-ingress | explorer.evm.dusk-1.devnet.astria.org | 34.111.167.16 |
| faucet-ingress | faucet.evm.dusk-1.devnet.astria.org | 130.211.4.120 |
| sequencer-faucet | faucet.sequencer.dusk-1.devnet.astria.org | 34.36.8.102 |
| sequencer-ingress | rpc.sequencer.dusk-1.devnet.astria.org | 34.111.73.187 |

## Update the `helm` Chart

Pull the [Astria dev-cluster repo](https://github.com/astriaorg/dev-cluster):
```bash
git clone git@github.com:astriaorg/dev-cluster.git
cd dev-cluster
```

Within the dev-cluster repo, update the ingress template `chart/rollup/templates/ingress.yaml` so that each hostname ends in `<YOUR_HOSTNAME>` instead of `localdev.me`

```bash
...
- host: executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>
...
- host: ws-executor.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>
...
- host: faucet.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>
...
- host: blockscout.{{ .Values.config.rollup.name }}.<YOUR_HOSTNAME>
...
```

Add an IngressClass so that the `metadata` section in the same file looks like:

```bash
metadata:
  name: {{ .Values.config.rollup.name }}-ingress
  namespace: {{ .Values.namespace }}
  annotations:
    kubernetes.io/ingress.class: nginx
```

## Get Current Sequencer Block Height

```bash
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height
```

Save the returned value for later. You will replace the
`<INITIAL_SEQUENCER_BLOCK_HEIGHT>` tag in the following sections with this
value.

## Creating your own Genesis Account

You can add genesis account(s) to your rollup during configuration.

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

You can then `export` the genesis accounts like so:
```bash
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:100000000000000000000
```

Set `<GENESIS_ADDRESS>` to the address printed out from the new command, and
`export` the private key to the env vars using:
```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

Exporting the genesis account(s) is also shown in the export block in the next section.

:::danger
__NEVER__ use a private key you use on a live network. 

For ease of use we recommend you set this to an  key which you have access to
:::

## Get and Build the `astria-cli`

Pull the [Astria repo](https://github.com/astriaorg/astria).

```bash
git clone git@github.com:astriaorg/astria.git
cd astria
```

Build `astria-cli` binary.

```bash
cd crates/astria-cli
cargo build --release
# return to top level astria dir
cd ../..
```

## Using the `astria-cli`

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup |
| `<YOUR_NETWORK_ID>` | u64 | The id of your network |
| `<INITIAL_SEQUENCER_BLOCK_HEIGHT>` | u64 | The height of the sequencer (found above) |
| `<GENESIS_ADDRESS>` | [u8; 40] | A wallet address |
| `<BALANCE>` | u64 | A balance. It is useful to make this a large value. |
<!-- TODO: potentially remove the initial sequencer block height as that may be found automatically -->

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

## Create new sequencer account

```bash
./target/release/astria-cli sequencer account create

Create Sequencer Account

Private Key: "9c78...710d" # <SEQUENCER_PRIV_KEY>
Public Key:  "d890...d747"
Address:     "48fa...8145"
```

```bash
export SEQUENCER_PRIV_KEY=9c78...710d
```

## Use locally modified chart

Because you needed to modify the host names inside your ingress template you must deploy your rollup using your local chart:

```bash
export ROLLUP_CHART_PATH="/your_path_to/dev-cluster/charts/rollup"
```

## Deploy the Rollup Node

Use the `astria-cli` to deploy the node.

```bash
./target/release/astria-cli rollup deployment create \
  --config $ROLLUP_CONF_FILE \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $SEQUENCER_PRIV_KEY
```

## Delete Rollup Node

If there was an error during deployment, you can delete your deployment and try
again with the following:

```bash
./target/release/astria-cli rollup deployment delete --config $ROLLUP_CONF_PATH
```

## Default to `astria-dev-cluster` namespace

Set `kubectl` to the correct namespace.

```bash
kubectl config set-context --current --namespace=astria-dev-cluster
```

## Watch for pod startup

```bash
kubectl get pods -w
```

```bash
NAME                                             READY   STATUS    RESTARTS      AGE
<YOUR_ROLLUP_NAME>-blockscout-647745c66d-vz4ks   6/6     Running   1 (56s ago)   72s
<YOUR_ROLLUP_NAME>-faucet-68667bd895-pwqmz       1/1     Running   0             72s
<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5xp8         3/3     Running   0             72s
```

## Check Block Retrieval on the Conductor

```bash
export GETH_POD_NAME=<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5x
```

```bash
kubectl logs $GETH_POD_NAME -c conductor
```

```bash
2023-10-16T20:49:16.858852Z  INFO run_until_stopped: astria_conductor::executor: executed sequencer block sequencer_block_hash=Hash::Sha256(93C233F2A2A109FF6CC3162A98916BECAE6D8EC43520C995E82B6D1F2B2742EF) sequencer_block_height=423755 execution_block_hash="2d8b2219a30ea4cc409347320f377de937b9ca2425f670c4f913724a2d53b2aa"
2023-10-16T20:49:18.922694Z  INFO run_until_stopped: astria_conductor::executor: executing block with given parent block height=423756 parent_block_hash="2d8b2219a30ea4cc409347320f377de937b9ca2425f670c4f913724a2d53b2aa"
2023-10-16T20:49:18.926380Z  INFO run_until_stopped: astria_conductor::executor: executed sequencer block sequencer_block_hash=Hash::Sha256(EAD8701CB15D9B487DC7400ABC2FCB7A4F7E09E09F39D4D6B8FA97B74B5EC50F) sequencer_block_height=423756 execution_block_hash="de20c29febc808b7a2ded8513eb23be116fe441745ccf62d1366b4b9bb160d04"
```

## Observe your Deployment

Your rollups utility endpoints are as follows:

| Utility | URL |
|-----|-----|
| Block Explorer | http://blockscout.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/ |
| Faucet | http://faucet.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/ |
| RPC | http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/ |

Open the URLs in your browser to view your running rollup.

## Debug Ingress

If you would like to view the ingress logs you can use the following:

```bash
kubectl get po -n ingress-nginx
# get the name of one of the pods
export INGRESS_POD_1=ingress-nginx-controller-6d6559598-ll8gv
# view the logs
kubectl logs $INGRESS_POD_1 -n ingress-nginx
```

## Use `cast` to Interact with your Rollup

```bash
export ETH_RPC_URL=http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/
```

```bash
cast block 0
```

Use an address of your choice.

```bash
export REC_ADDR=<SOME_ADDRESS>
```

```bash
cast balance $REC_ADDR
```

```bash
cast send $REC_ADDR --value 10000000000000000000 --private-key $ROLLUP_FAUCET_PRIV_KEY
```

```bash
cast balance $REC_ADDR
```
