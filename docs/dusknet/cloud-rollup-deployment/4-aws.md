---
sidebar_position: 4
---

# AWS

Deploy your rollup to AWS.

# Astria Prerequisites?

## Create an AWS Account

https://portal.aws.amazon.com/gp/aws/developer/registration/index.html

## Install `aws` CLI

https://formulae.brew.sh/formula/awscli

```bash
brew install awscli
```

## Create an Access Key

https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

<aside>
❗ This doesn’t follow best security practices, do not do this on an important AWS account which has production resources on it

</aside>

Go to IAM section of console: https://console.aws.amazon.com/iam/

Create an access key for your `root` user 

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

NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                                     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.100.151.220   ac1f86093ea7240c89457da3d5f71fc4-947b3172412ab75c.elb.us-east-1.amazonaws.com   80:30416/TCP,443:31448/TCP   3m55s
ingress-nginx-controller-admission   ClusterIP      10.100.208.56    <none>                                                                          443/TCP                      3m55s
```

Check the console for a new Elastic Load Balancer (ELB) in the EC2 > Load Balancers section

```bash
curl ac1f86093ea7240c89457da3d5f71fc4-947b3172412ab75c.elb.us-east-1.amazonaws.com

<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```

## Create a friendly CNAME record

<aside>
❗ You must configure a DNS record because our ingress configuration uses name based virtual routing (https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting)

</aside>

![Screenshot 2023-10-17 at 8.14.12 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/c6b9fdea-c5a3-4c8e-aa04-45f2a9a65eca/2dcc4c16-0813-461c-bd34-7ee65a4e7cf9/Screenshot_2023-10-17_at_8.14.12_PM.png)

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
- host: executor.{{ .Values.config.rollup.name }}.cryptarch.xyz
- host: ws-executor.{{ .Values.config.rollup.name }}.cryptarch.xyz
- host: faucet.{{ .Values.config.rollup.name }}.cryptarch.xyz
- host: blockscout.{{ .Values.config.rollup.name }}.cryptarch.xyz
```

### Get Sequencer Block Height

```bash
curl -s https://rpc.sequencer.dusk-1.devnet.astria.org/block | jq .result.block.header.height

"9452"
```

### Set Environment Variables

```yaml
export ROLLUP_USE_TTY=true
export ROLLUP_LOG_LEVEL=DEBUG
export ROLLUP_NAME=josh-aws
export ROLLUP_CHAIN_ID=0x1234
export ROLLUP_NETWORK_ID=111121
export ROLLUP_SKIP_EMPTY_BLOCKS=false
# address from cast new
export ROLLUP_GENESIS_ACCOUNTS=0x7380E82605879574c468959508A7A5868b8AB022:100000000000000000000
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=9452
export ROLLUP_SEQUENCER_WEBSOCKET=wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
export ROLLUP_SEQUENCER_RPC=https://rpc.sequencer.dusk-1.devnet.astria.org
```

### Create Config

```bash
./astria-cli rollup config create
```

```bash
cat josh-aws-rollup-conf.yaml

config:
  useTTY: true
  logLevel: DEBUG
  rollup:
    name: josh-aws
    chainId: '0x1234'
    networkId: 111121
    skipEmptyBlocks: false
    genesisAccounts:
    - address: 7380E82605879574c468959508A7A5868b8AB022
      balance: '100000000000000000000'
  sequencer:
    initialBlockHeight: 9452
    websocket: wss://rpc.sequencer.dusk-1.devnet.astria.org/websocket
    rpc: https://rpc.sequencer.dusk-1.devnet.astria.org
```

```bash
./astria-cli sequencer account create

Create Sequencer Account

Private Key: "7ff36352b6348e72ef0a1578f6b350ee0f2d6e4c3c3f2490915f805af2ad7c2d"
Public Key:  "76d8d3b44ef9ddf4b3b554c04c78620934142dc86cc9db83283a0bc3c66d1e91"
Address:     "34f2832ff6d3c23404a4adbe3eef504f82bc6b50"
```

```bash
export COMPOSER_PRIV_KEY=7ff36352b6348e72ef0a1578f6b350ee0f2d6e4c3c3f2490915f805af2ad7c2d
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
  --config josh-aws-rollup-conf.yaml \
  --faucet-private-key $ROLLUP_FAUCET_PRIV_KEY \
  --sequencer-private-key $COMPOSER_PRIV_KEY --chart-path charts/rollup
```
