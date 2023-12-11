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

## Manually Fetch Sequencer Block Height

### Install the `astria-cli`

Pull the [Astria repo](https://github.com/astriaorg/astria) and install the `astria-cli`

```bash
git clone git@github.com:astriaorg/astria.git
cd astria
just install-cli
```

### Sequencer Block Height

The initial sequencer block height is automatically fetched and set (if not manually specified) when creating the rollup config. 

You can manually retrieve it with the `astria-cli`:

```bash
astria-cli sequencer blockheight get \
  --sequencer-url https://rpc.sequencer.dusk-2.devnet.astria.org/
```

If you need to set this to a different value you can set it as an an environment variable:

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

