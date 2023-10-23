---
sidebar_position: 1
---

# Digital Ocean

Deploy your rollup to Digital Ocean.

:::info
The list of local dependencies for the following instructions [can be found here](/docs/dusknet/1-overview.md).
:::

The following assumes you are using [Digital Ocean Kubernetes
(DOKS)](https://www.digitalocean.com/products/kubernetes).

We recommend using Digital Ocean's Kubernetes [Quick Start Guide](https://docs.digitalocean.com/products/kubernetes/getting-started/quickstart/).

## Setup Digital Ocean Ingress

We use the Ingress NGINX Controller for consistency across deployment environments:
- <https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean>

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/do/deploy.yaml
```

## Configure Your Own Domain

:::tip
You must configure a DNS record because our ingress configuration uses name based virtual routing: https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting.
:::

Follow the instructions here:
- <https://docs.digitalocean.com/products/networking/dns/getting-started/dns-registrars/>
- This is where you will set `<YOUR_HOSTNAME>`


## Digital Ocean Loadbalancer

Look for a new loadbalancer being created in the Digital Ocean console:
https://cloud.digitalocean.com/networking/load_balancers

You can also check that your Digital Ocean load balancer was created using the
following command:

```bash
kubectl get svc -n ingress-nginx
```

You should see something like this:

```bash
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.245.63.28    161.35.240.50   80:32656/TCP,443:30158/TCP   44h
ingress-nginx-controller-admission   ClusterIP      10.245.106.99   <none>          443/TCP                      44h
```

## Set up an `A` Record for your Load Balancer
Follow the steps here to set up an `A` record for DNS:
- <https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#a-records>

:::tip
When configuring the `A` record for DNS, the `directs to` value should specify the `loadbalancer` which was created by the `nginx-ingress-controller`. 
:::

## Endpoints

Endpoints for the remote cluster are the following:

| NAME | HOSTS | ADDRESS |
|-----|-----|-----|
| EVM JSON RPC | rpc.evm.dusk-1.devnet.astria.org | 34.160.214.22 |
| EVM Block Explorer | explorer.evm.dusk-1.devnet.astria.org | 34.111.167.16 |
| EVM Faucet | faucet.evm.dusk-1.devnet.astria.org | 130.211.4.120 |
| Sequencer RPC | rpc.sequencer.dusk-1.devnet.astria.org | 34.111.73.187 |
| Sequencer Faucet | faucet.sequencer.dusk-1.devnet.astria.org | 34.36.8.102 |

## Update the `helm` Chart

:::danger
Deploying a rollup to a cloud provider requires manual changes to the `helm`
charts. Because the default `localdev.me` hostname will not work on a cloud
provider.
:::

Pull the [Astria dev-cluster repo](https://github.com/astriaorg/dev-cluster):
```bash
git clone git@github.com:astriaorg/dev-cluster.git
cd dev-cluster
```

Within the `dev-cluster` repo, update the `chart/rollup/values.yaml` file so that
the `ingress.hostname` value is set to your chosen hostname instead of
`localdev.me`: 

```yaml
ingress:
  hostname: <YOUR_HOSTNAME> # changed from localdev.me
```

## Creating your own Genesis Account

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

`export` the genesis address:
```bash
export GENESIS_ADDRESS=<GENESIS_ADDRESS>
```

`export` the genesis private key:
```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

Exporting the genesis account(s) is also shown in the export block in the next section.

:::danger
__NEVER__ use a private key you use on a live network. 
:::

## Using the `astria-cli`

Pull the [Astria repo](https://github.com/astriaorg/astria) and install the `astria-cli`

```bash
git clone git@github.com:astriaorg/astria.git
cd astria
just install-cli
```

### Create Rollup Config

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup |
| `<YOUR_NETWORK_ID>` | u64 | The id of your network |
| `<YOUR_HOSTNAME>` | String | The chosen hostname for your network |
| `<YOUR_NAMESPACE>` | String | The chosen k8s deployment namespace |
| `<BALANCE>` | u64 | A balance. We recommend using `100000000000000000000`. |

You can use environment variables to set the configuration for the rollup
config creation. Replace all the `<>` tags with their corresponding values. 

```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_HOSTNAME=<YOUR_HOSTNAME>
export ROLLUP_NAMESPACE=<YOUR_NAMESPACE>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_GENESIS_ACCOUNTS=$GENESIS_ADDRESS:<BALANCE>
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
```

:::tip
The initial sequencer block height is automatically fetched and set if not
specified when creating the config. If you need to set this value manually you
can export the height as an environment variable:

```bash
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
```

Or use the following flag when running the `astria-cli rollup config create`
command below:

```bash
--sequencer.initial-block-height <INITIAL_SEQUENCER_BLOCK_HEIGHT>
```

See the [FAQ and
Debugging](5-faq-debugging.md#manually-fetch-sequencer-block-height) docs for
how to manually fetch the sequencer block height. 

:::

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

### Create new sequencer account

```bash
astria-cli sequencer account create
```

```bash
Create Sequencer Account

Private Key: "5562...1622" # <SEQUENCER_ACCOUNT_PRIV_KEY>
Public Key:  "ec20...f613" # <SEQUENCER_ACCOUNT_PUB_KEY>
Address:     "8a2f...5f68"
```

Keep track of the `<SEQUENCER_ACCOUNT_PUB_KEY>` as it will be used with the
Faucet later on for funding your sequencer account.

Export your sequencer private key as an environment variable.

```bash
export SEQUENCER_PRIV_KEY=9c78...710d
```

### Use locally modified chart

:::danger
You __must__ have modified your local `helm` chart to use your own domain name
as described in [this section here](#update-the-helm-chart).
:::

Because you needed to modify the host names inside your ingress template you must deploy your rollup using your local chart:

```bash
export ROLLUP_CHART_PATH="/your_path_to/dev-cluster/charts/rollup"
```

### Deploy the Rollup Node

Use the `astria-cli` to deploy the node.

```bash
astria-cli rollup deployment create \
  --config $ROLLUP_CONF_FILE \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $SEQUENCER_PRIV_KEY
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

## Fund you Sequencer Account

Using your sequencer pub key you created in the 
[Create a New Sequencer Account](#create-new-sequencer-account) section, copy and past the
`<SEQUENCER_ACCOUNT_PUB_KEY>` into the input on the faucet page, and mint funds
to your account:

![Sequencer Faucet](../assets/sequencer-faucet.png)
