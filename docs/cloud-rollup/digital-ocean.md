---
sidebar_position: 1
---

# Digital Ocean

This guide will walk you through deploying a rollup full node on
a Kubernetes cluster on Digital Ocean which uses the Astria shared sequencer network.

## Local Dependencies

<!--@include: ./../components/_cli-cloud.md-->

<!-- <RemoteCli /> -->

## Dusknet Endpoints

<!--@include: ../components/_remote-endpoints.md-->

<!-- <RemoteEndpoints /> -->

## Create a New Cluster

This guide assumes you're using Digital Ocean's Kubernetes (K8s) service.

Install and configure `doctl`: [https://docs.digitalocean.com/reference/doctl/how-to/install/](https://docs.digitalocean.com/reference/doctl/how-to/install/)

Follow the instructions in Digital Ocean's [Quick Start Guide](https://docs.digitalocean.com/products/kubernetes/getting-started/)
to create a new cluster in the region of your choosing.

:::tip
The celestia pod has a minimum requirement of 1vCPU and 4GB RAM and will not start if the
cluster has no nodes that meet those requirements. You will need a node with >1vCPU and >4GB RAM.
:::

## Configure `kubectl` with `doctl`

Once your k8s cluster is created configure `kubectl`.

![doctl screenshot](assets/do-setup.png)

## Deploy Ingress Nginx Controller

We use the Nginx Ingress Controller, documentation can be found [here](https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean/)

To install it run:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/do/deploy.yaml
```

This will create several Kubernetes (k8s) resources and a Digital Ocean loadbalancer.

## Verify Loadbalancer with external IP

You should see a new loadbalancer being created in the Digital Ocean console: [https://cloud.digitalocean.com/networking/load_balancers](https://cloud.digitalocean.com/networking/load_balancers)

You can also check that your Digital Ocean load balancer was created with:

```bash
kubectl get svc -n ingress-nginx
```

It may take a few minutes for the `EXTERNAL-IP` field to be populated,
you should eventually see something like this:

```bash
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.245.63.28    161.35.240.50   80:32656/TCP,443:30158/TCP   44h
ingress-nginx-controller-admission   ClusterIP      10.245.106.99   <none>          443/TCP                      44h
```

## Create an `A` Record

:::tip
You must configure a DNS record because our ingress configuration uses name
based virtual routing.  

More info can be found [here](https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting)
:::

How you create an `A` record will depend on where you manage your domain.

An example for Google domains can be seen here: [https://support.google.com/a/answer/2579934?hl=en](https://support.google.com/a/answer/2579934?hl=en)

Create a wildcard record `*` pointing to the `EXTERNAL-IP` of your `ingress-nginx-controller`:

![a record screenshot](assets/a-record.png)

## Create your Rollup Genesis Account(s)

:::danger
__NEVER__ use a private key you use on a live network.
:::

Specify the accounts which will be funded at the genesis block of your EVM rollup.

You can create an account using:

```bash
cast w new
```

```bash
Successfully created new keypair.
Address:     0xfFe9...5f8b # <GENESIS_ADDRESS>
Private key: 0x332e...a8fb # <GENESIS_PRIVATE_KEY>
```

Export the genesis private key,
this will be used by the faucet included with the rollup:

```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

Export the genesis address alongside with your desired initial balance in Wei.  
We recommend using a value of `100000000000000000000` or larger:

```bash
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>
```

You can specify multiple accounts to be funded at genesis as
 comma deliminated tuples of `<ADDRESS>:<BALANCE>`

```bash
export ROLLUP_GENESIS_ACCOUNTS=<ADDRESS_1>:<BALANCE_1>,<ADDRESS_2>:<BALANCE_2>
```

## Create Rollup Config

Create the configuration manifest for your rollup.

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup. This must be alphanumeric, `-` is allowed, this will be included in URLs. Must not be more than 21 characters.|
| `<YOUR_NETWORK_ID>` | u64 | The id of your network. Pick a > 6 digit number (eg. `123456`) |
| `<YOUR_HOSTNAME>` | String | The chosen hostname for your network (eg. `astria.org`) |

You can use environment variables to set the configuration for the rollup
config creation. Replace all the `<>` tags with their corresponding values.

```bash
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_HOSTNAME=<YOUR_HOSTNAME>
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

```bash
cat $ROLLUP_CONF_FILE
```

```bash
global:
  namespace: astria-dev-cluster
  useTTY: false
  logLevel: debug
config:
  rollup:
    name: <YOUR_ROLLUP_NAME>
    chainId: <YOUR_ROLLUP_NAME>-chain
    networkId: '<YOUR_NETWORK_ID>'
    genesisAccounts:
    - address: <GENESIS_ADDRESS>
      balance: '<BALANCE>'
  sequencer:
    initialBlockHeight: <INITIAL_SEQUENCER_BLOCK_HEIGHT>
    websocket: wss://rpc.sequencer.dusk-3.devnet.astria.org/websocket
    rpc: https://rpc.sequencer.dusk-3.devnet.astria.org
ingress:
  hostname: <YOUR_HOSTNAME>
celestia-node:
  config:
    labelPrefix: <YOUR_ROLLUP_NAME>
```

## Create new sequencer account

Create an account on the Astria shared sequencer network
 for your rollup to submit transactions.

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
export SEQUENCER_PRIV_KEY=5562...1622
export SEQUENCER_ACCOUNT_ADDRESS=8a2f...5f68
```

## Fund your Sequencer Account

Navigate to [https://faucet.sequencer.dusk-3.devnet.astria.org/](https://faucet.sequencer.dusk-3.devnet.astria.org/)
to view the sequencer faucet.

Enter your `<SEQUENCER_ACCOUNT_ADDRESS>` into the text box
 to send funds to your account:

![Sequencer Faucet](assets/sequencer-faucet.png)

Verify your account received the funds

```bash
astria-cli sequencer account balance $SEQUENCER_ACCOUNT_ADDRESS
```

## Deploy the Rollup Node

Use the `astria-cli` to deploy the rollup node

```bash
astria-cli rollup deployment create \
  --config $ROLLUP_CONF_FILE \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $SEQUENCER_PRIV_KEY
```

## Watch for rollup startup

You can watch for the Kubernetes pods of the rollup to start with:

```bash
kubectl get pods -n astria-dev-cluster -w
```

```bash
NAME                                               READY   STATUS    RESTARTS      AGE
<YOUR_ROLLUP_NAME>-blockscout-647745c66d-vz4ks     6/6     Running   1 (56s ago)   72s
<YOUR_ROLLUP_NAME>-celestia-node-light-mocha-4-0   2/2     Running   1 (56s ago)   72s
<YOUR_ROLLUP_NAME>-faucet-68667bd895-pwqmz         1/1     Running   0             72s
<YOUR_ROLLUP_NAME>-geth-755cb8dd97-k5xp8           3/3     Running   0             72s
```

## Your Rollup Endpoints

Your rollup will automatically be configured with
several public endpoints using the DNS you configured:

| Utility | URL |
|-----|-----|
| Block Explorer | `http://blockscout.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/` |
| Faucet | `http://faucet.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/` |
| RPC | `http://executor.<YOUR_ROLLUP_NAME>.<YOUR_HOSTNAME>/` |

## Interact with your Rollup

```bash
export ETH_RPC_URL=http://executor.$ROLLUP_NAME.$ROLLUP_HOSTNAME/
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
