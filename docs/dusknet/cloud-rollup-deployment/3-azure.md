---
sidebar_position: 3
---

# Azure

Deploy your rollup to Azure.

## Create an Azure Account

https://azure.microsoft.com/en-us/free

## Install Azure `az` CLI

https://learn.microsoft.com/en-us/cli/azure/install-azure-cli

```bash
brew update && brew install azure-cli
```

## AKS Quickstart

https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli

### Prerequisites

```bash
az provider show -n Microsoft.OperationsManagement -o table
az provider show -n Microsoft.OperationalInsights -o table
```

```bash
az provider register --namespace Microsoft.OperationsManagement
az provider register --namespace Microsoft.OperationalInsights
```

### Create Resource Group

```bash
az group create --name myResourceGroup --location eastus
```

### Create Cluster

```bash
az aks create -g myResourceGroup -n myAKSCluster --enable-managed-identity --node-count 1 --generate-ssh-keys
```

### Configure Kubectl

```bash
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

# Setup Ingress Controller

### Deploy Nginx Ingress Controller

https://kubernetes.github.io/ingress-nginx/deploy/#azure

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
```

### Verify Loadbalancer with external IP

```bash
kubectl get svc -n ingress-nginx

NAME                                 TYPE           CLUSTER-IP    EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.0.25.103   20.72.189.135   80:30513/TCP,443:30321/TCP   5m43s
ingress-nginx-controller-admission   ClusterIP      10.0.242.54   <none>          443/TCP                      5m43s
```

```bash
curl 20.72.189.135
<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```

## Configure and Deploy Rollup

### Modify Dev-Cluster

<aside>
❗ **********TODO:********** Create an example PR for this to show the diff

</aside>

Modify https://github.com/astriaorg/dev-cluster/blob/main/charts/rollup/templates/ingress.yaml

```yaml
metadata:
  name: {{ .Values.config.rollup.name }}-ingress
  namespace: {{ .Values.namespace }}
  annotations:
    kubernetes.io/ingress.class: nginx
```

```yaml
- host: executor.{{ .Values.config.rollup.name }}.basedon.io
- host: ws-executor.{{ .Values.config.rollup.name }}.basedon.io
- host: faucet.{{ .Values.config.rollup.name }}.basedon.io
- host: blockscout.{{ .Values.config.rollup.name }}.basedon.io
```

### Get Sequencer Block Height

```bash
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height

"6567"
```

### Set Environment Variables

```yaml
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=josh-azure
export ROLLUP_CHAIN_ID=0x1234
export ROLLUP_NETWORK_ID=111120
export ROLLUP_SKIP_EMPTY_BLOCKS=false
# address from cast new
export ROLLUP_GENESIS_ACCOUNTS=0x7380E82605879574c468959508A7A5868b8AB022:100000000000000000000
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=6567
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
```

### Create Config

```bash
./target/release/astria-cli rollup config create
```

```bash
cat josh-azure-rollup-conf.yaml

config:
  useTTY: true
  logLevel: DEBUG
  rollup:
    name: josh-azure
    chainId: '0x1234'
    networkId: 111120
    skipEmptyBlocks: false
    genesisAccounts:
    - address: 7380E82605879574c468959508A7A5868b8AB022
      balance: '100000000000000000000'
  sequencer:
    initialBlockHeight: 6567
    websocket: wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: https://rpc.sequencer.dusk-1.devnet.astria.org
```

```bash
./astria-cli sequencer account create

Create Sequencer Account

Private Key: "09812cff76bf921ddacd6b2079b5b2baee4bb6ccf1f0929617e77087b68a691c"
Public Key:  "f08ea29bc9fed30409a4b57d028628d88dd4b35754239d2393d037a241a48a4d"
Address:     "8f40bdc756e6f6c67f48b5b80ad5a3097ef264fb"
```

```bash
export COMPOSER_PRIV_KEY=09812cff76bf921ddacd6b2079b5b2baee4bb6ccf1f0929617e77087b68a691c
# priv key from cast new
export ROLLUP_FAUCET_PRIV_KEY=e71016b4bd662720f8424972bad190a9ed1793a020a4a96af93772c3eae6e05f
```

### Create Namespace

```bash
kubectl apply -f kubernetes/namespace.yml
```

### Deploy Rollup

```bash
./astria-cli rollup deployment create \
  --config josh-azure-rollup-conf.yaml \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $COMPOSER_PRIV_KEY --chart-path charts/rollup
```
