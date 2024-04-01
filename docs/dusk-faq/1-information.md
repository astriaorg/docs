---
sidebar_position: 5
---

# FAQ and Debugging

<!--@include: ./../components/_deployment-instructions-redirect.md-->

<DeploymentsRedirect />

## Endpoints

Endpoints for the remote cluster are the following:

| NAME | HOSTS | ADDRESS |
|-----|-----|-----|
| EVM JSON RPC | rpc.evm.dusk-3.devnet.astria.org | 34.160.214.22 |
| EVM Block Explorer | explorer.evm.dusk-3.devnet.astria.org | 34.111.167.16 |
| EVM Faucet | faucet.evm.dusk-3.devnet.astria.org | 130.211.4.120 |
| Sequencer RPC | rpc.sequencer.dusk-3.devnet.astria.org | 34.111.73.187 |
| Sequencer Faucet | faucet.sequencer.dusk-3.devnet.astria.org | 34.36.8.102 |

## Software Versions

The latest Devnet (dusk-3) runs the following software versions:
- [conductor v0.11.1](https://github.com/astriaorg/astria/releases/tag/conductor-v0.11.1)
- [composer v0.3.1](https://github.com/astriaorg/astria/releases/tag/composer-v0.3.1)
- [sequencer-relayer v0.9.1](https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v0.9.1)
- [sequencer v0.8.0](https://github.com/astriaorg/astria/releases/tag/sequencer-v0.8.0)
- [Geth EVM v0.5.2](https://github.com/astriaorg/go-ethereum/releases/tag/geth1.13-v0.5.2)
- [CometBFT v0.37.x](https://github.com/cometbft/cometbft/releases/tag/v0.37.4)

## Install the latest Astria cli
<!--@include: ./../components/_cli-local.md-->

<CLI />

## Manually Fetch Sequencer Block Height

### Sequencer Block Height

The initial sequencer block height is automatically fetched and set
(if not manually specified) when creating the rollup config.

You can manually retrieve it with the `astria-cli`:

```bash
astria-cli sequencer blockheight get
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
