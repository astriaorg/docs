---
sidebar_position: 4
---

# AWS

Deploy your rollup to AWS.

:::info
The list of local dependencies for the following instructions [can be found here](/docs/dusknet/1-overview.md).
:::

# Astria Prerequisites?

## Create an AWS Account

https://portal.aws.amazon.com/gp/aws/developer/registration/index.html

## Install `aws` CLI

Installation links for your OS can be found here:
- https://aws.amazon.com/cli/

## Create an Access Key

To create an access key, follow the instructions here:
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

:::danger
This doesn’t follow best security practices, do not do this on an important AWS
account which has production resources on it. 
:::

Go to IAM section of console: https://console.aws.amazon.com/iam/

Create an access key for your `root` user.

## Authenticate the `aws` cli

```bash
aws configure

# Fill out interactive fields with your access key
AWS Access Key ID [None]: 
AWS Secret Access Key [None]: 
Default region name [None]:
Default output format [None]:
```

# Create Amazon EKS Cluster

https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html

```bash
aws cloudformation create-stack \
  --region <region-code> \
  --stack-name <my-eks-vpc-stack> \
  --template-url https://s3.us-west-2.amazonaws.com/amazon-eks/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml
```

```bash
aws iam create-role \
  --role-name myAmazonEKSClusterRole \
  --assume-role-policy-document file://"eks-cluster-role-trust-policy.json"
```

```bash
aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEKSClusterPolicy \
  --role-name myAmazonEKSClusterRole
```

Complete the rest of the steps on the Console

## Authenticate `kubectl` to EKS Cluster

```bash
aws eks update-kubeconfig --region <region-code> --name <my-cluster>
```

```bash
> kubectl get svc

NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
svc/kubernetes   ClusterIP   10.100.0.1   <none>        443/TCP   1m
```

## Deploy Ingress Controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/aws/deploy.yaml
```

### Check Ingress Service

```bash
kubectl get svc -n ingress-nginx
```

You should see something like this:

```bash
NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.100.151.220   ac1f86093ea7240c89457da3d5f71fc4-947b3172412ab75c.elb.us-east-1.amazonaws.com   80:30416/TCP,443:31448/TCP   3m55s
ingress-nginx-controller-admission   ClusterIP      10.100.208.56    <none>                                                                          443/TCP                      3m55s
```

Check the console for a new Elastic Load Balancer (ELB) in the EC2 > Load
Balancers section using the `EXTERNAL-IP` from the previous `kubectl` output. 

```bash
curl ac1f86093ea7240c89457da3d5f71fc4-947b3172412ab75c.elb.us-east-1.amazonaws.com
```

```html
<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```

## Create a CNAME record

:::danger
You must configure a DNS record because our ingress configuration uses name
based virtual routing.
More info here: https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting
:::

![CNAME record Example](../assets/cname-record-example.png)

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
export ROLLUP_GENESIS_ACCOUNTS=<GENESIS_ADDRESS>:<BALANCE>
```

`export` the private key to the env vars using:
```bash
export ROLLUP_FAUCET_PRIV_KEY=<GENESIS_PRIVATE_KEY>
```

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
  --sequencer-url https://rpc.sequencer.dusk-1.devnet.astria.org/
```

Save the returned value for later. You will replace the
`<INITIAL_SEQUENCER_BLOCK_HEIGHT>` tag in the following sections with this
value.

### Set Environment Variables

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

### Create Config

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
astria-cli sequencer account create
```

```bash
Create Sequencer Account

Private Key: "0981...691c"
Public Key:  "f08e...8a4d"
Address:     "8f40...64fb"
```

```bash
export SEQUENCER_PRIV_KEY=0981...691c
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

## Fund you Sequencer Account

Using your sequencer pub key you created in the [Create a New Sequencer
Account](#create-a-new-sequencer-account), copy and past the
`<SEQUENCER_ACCOUNT_PUB_KEY>` into the input on the faucet page, and mint funds
to your account:

![Sequencer Faucet](../assets/sequencer-faucet.png)
