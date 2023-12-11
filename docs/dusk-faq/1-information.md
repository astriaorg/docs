---
sidebar_position: 5
---

# FAQ and Debugging

## Endpoints

Endpoints for the remote cluster are the following:

| NAME | HOSTS | ADDRESS |
|-----|-----|-----|
| EVM JSON RPC | rpc.evm.dusk-2.devnet.astria.org | 34.160.214.22 |
| EVM Block Explorer | explorer.evm.dusk-2.devnet.astria.org | 34.111.167.16 |
| EVM Faucet | faucet.evm.dusk-2.devnet.astria.org | 130.211.4.120 |
| Sequencer RPC | rpc.sequencer.dusk-2.devnet.astria.org | 34.111.73.187 |
| Sequencer Faucet | faucet.sequencer.dusk-2.devnet.astria.org | 34.36.8.102 |

## Software Versions

The latest Devnet (dusk-2) runs the following software versions:
- [conductor v0.11.0](https://github.com/astriaorg/astria/releases/tag/v0.11.0--conductor)
- [composer v0.3.0](https://github.com/astriaorg/astria/releases/tag/v0.3.0--composer)
- [sequencer-relayer v0.9.0](https://github.com/astriaorg/astria/releases/tag/v0.9.0--sequencer-relayer)
- [sequencer v0.7.0](https://github.com/astriaorg/astria/releases/tag/v0.7.0--sequencer)

## Manually Fetch Sequencer Block Height

### Install the latest [astria cli](https://github.com/astriaorg/astria/releases/tag/cli-v0.2.0)

#### ARM Mac

```bash
curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.2.0/astria-cli-aarch64-apple-darwin.tar.gz > astria-cli.tar.gz
tar -xvzf astria-cli.tar.gz 
```

#### x86_64 Linux

```bash
curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.2.0/astria-cli-x86_64-unknown-linux-gnu.tar.gz > astria-cli.tar.gz
tar -xvzf astria-cli.tar.gz 
```

#### From Source

```bash
cargo install astria-cli --git=https://github.com/astriaorg/astria --tag=cli-v2 --locked
```

### Sequencer Block Height

The initial sequencer block height is automatically fetched and set
(if not manually specified) when creating the rollup config.

You can manually retrieve it with the `astria-cli`:

```bash
astria-cli sequencer blockheight get \
  --sequencer-url https://rpc.sequencer.dusk-2.devnet.astria.org/
```

If you need to set this to a different value
you can set it as an an environment variable:

```bash
export ROLLUP_SEQUENCER_INITIAL_BLOCK_HEIGHT=<INITIAL_SEQUENCER_BLOCK_HEIGHT>
```

Or use the following flag when running the `astria-cli rollup config create`
command below:

```bash
--sequencer.initial-block-height <INITIAL_SEQUENCER_BLOCK_HEIGHT>
```

## Loadbalancer Information

You can retrieve the kubernetes service for your loadbalancer with

```bash
kubectl get svc -n ingress-nginx
```

```bash
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   34.118.228.98   34.42.184.206   80:31623/TCP,443:31357/TCP   57s
ingress-nginx-controller-admission   ClusterIP      34.118.229.71   <none>          443/TCP                      57s
```

You can check that the loadbalancer is working by making a `curl` request

```bash
# use the EXTERNAL-IP from the result above
curl 34.42.184.206 
```

This should return the nginx 404 page

```html
<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```

## Ingress Information

You can check the kubernetes ingress resource for your rollup with:

```bash
kubectl get ingress -n astria-dev-cluster
```
