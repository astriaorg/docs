---
sidebar_position: 3
---

# GCP

Deploy your rollup to GCP.

:::info
The list of local dependencies for the following instructions [can be found here](/docs/dusknet/1-overview.md).
:::

## Create a GCP (Google) Account

Follow instructions here: <https://console.cloud.google.com/>

## Install GCP `gcloud` CLI

Find the correct cli for your OS here:
<https://cloud.google.com/sdk/docs/install>

## Authenticate the CLI

Following instructions here:
<https://cloud.google.com/sdk/gcloud/reference/auth/login>

```bash
gcloud auth login
```

## Create a Google Cloud Project

See the full instructions here:
- <https://cloud.google.com/resource-manager/docs/creating-managing-projects>

We recommend using the cli commands, which can be found on the above page by selecting
the `gcloud` tabs within the instructions:

```bash
gcloud projects create PROJECT_ID
```

## Set Default Project

```bash
gcloud config set project PROJECT_ID
```

## Enable Billing

See the following page for setting up a billing account that suits your needs:
- <https://cloud.google.com/billing/docs/how-to/verify-billing-enabled#console>

## Enable GKE API

```bash
gcloud services enable container.googleapis.com
```

## GKE Quickstart

Follow the Quickstart guide to create your GKE cluster:
- <https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster>

### Create a GKE Cluster

```bash
gcloud container clusters create-auto hello-cluster \
    --region=us-central1
```

## Configure Kubectl 

:::danger
Due to https://github.com/kubernetes/kubectl/issues/1338 you must run the following commands before configuring your cluster’s credentials, otherwise `helm` will not work.

```bash
gcloud components install gke-gcloud-auth-plugin
export USE_GKE_GCLOUD_AUTH_PLUGIN=True
```
:::

Configure your credentials:

```bash
gcloud container clusters get-credentials hello-cluster \
    --region us-central1
```

## Deploy Ingress Nginx Controller

See the Kubernetes GCE-GKE nginx installation guid here:
- <https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke>

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
```

## Verify Loadbalancer with external IP

Run the following command:
```bash
kubectl get svc -n ingress-nginx
```

You should see something like this:

```bash
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   34.118.228.98   34.42.184.206   80:31623/TCP,443:31357/TCP   57s
ingress-nginx-controller-admission   ClusterIP      34.118.229.71   <none>          443/TCP                      57s
```

## Create an `A` Record

:::tip
You must configure a DNS record because our ingress configuration uses name
based virtual routing.  
More info here: https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting
:::

How you create an `A` record will depend on where you purchased your domain from. Each
domain provider will have different steps required to set up an A record.

An example for Google domains can be seen here: <https://support.google.com/a/answer/2579934?hl=en>

Create a wildcard `*` record pointing to the `EXTERNAL-IP` of your `ingress-nginx-controller`:

![a record screenshot](../assets/a-record.png)

## Creating your rollup Genesis Account(s)

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

## Configure and Deploy Rollup

### Update the `helm` Chart

Pull the [Astria dev-cluster repo](https://github.com/astriaorg/dev-cluster):
```bash
git clone git@github.com:astriaorg/dev-cluster.git
cd dev-cluster
```

Within the dev-cluster repo, update the ingress template
`chart/rollup/templates/ingress.yaml` so that each hostname ends in
`<YOUR_HOSTNAME>` instead of `localdev.me`

```yaml
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

```yaml
metadata:
  name: {{ .Values.config.rollup.name }}-ingress
  namespace: {{ .Values.namespace }}
  annotations:
    kubernetes.io/ingress.class: nginx
```

:::tip
You can see an example of these changes in [this PR here](https://github.com/astriaorg/dev-cluster/pull/119/files).
:::

## Install the `astria-cli`

Pull the [Astria repo](https://github.com/astriaorg/astria) and install the `astria-cli`

```bash
git clone git@github.com:astriaorg/astria.git
cd astria
just install-cli
```

### Get Current Sequencer Block Height

```bash
astria-cli sequencer blockheight get \
  --sequencer-url https://rpc.sequencer.dusk-2.devnet.astria.org/
```

`export` the initial sequencer block height as an environment variable:
```bash
export INITIAL_SEQUENCER_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
```

## Create Rollup Config

Replace the tags in the commands and env vars below, as follows:

| Var Name | Var Type | Description |
|-----|-----|-----|
| `<YOUR_ROLLUP_NAME>` | String | The name of your rollup |
| `<YOUR_NETWORK_ID>` | u64 | The id of your network |
| `<BALANCE>` | u64 | A balance. We recommend using `100000000000000000000`. |
<!-- TODO: potentially remove the initial sequencer block height as that may be found automatically -->

<!-- TODO: add this back in when the automated block height is added -->
<!-- :::tip
You can also optionally leave out the `--sequencer.initial-block-height` input
in the command above, and the cli will fetch the initial sequencer block height
for you.
::: -->

You can use environment variables to set the configuration for the rollup
config creation. Replace all the `<>` tags with their corresponding values. 

```bash
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=<YOUR_ROLLUP_NAME>
export ROLLUP_NETWORK_ID=<YOUR_NETWORK_ID>
export ROLLUP_SKIP_EMPTY_BLOCKS=false
export ROLLUP_GENESIS_ACCOUNTS=$GENESIS_ADDRESS:<BALANCE>
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=$INITIAL_SEQUENCER_BLOCK_HEIGHT
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-2.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-2.devnet.astria.org
```

Once the environment variables shown above are set, run the following command to
create the rollup config:
```bash
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
    websocket: ws://rpc.sequencer.dusk-2.devnet.astria.org/websocket
    rpc: http://rpc.sequencer.dusk-2.devnet.astria.org
  celestia:
    fullNodeUrl: http://celestia-service:26658
```

Export this file to the env vars as follows:
```bash
export ROLLUP_CONF_FILE=<YOUR_ROLLUP_NAME>-rollup-conf.yaml
```

## Create new sequencer account

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

### Create Namespace

```bash
kubectl apply -f kubernetes/namespace.yml
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
