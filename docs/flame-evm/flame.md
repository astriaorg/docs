# Astria EVM

## Network Information

| Property | Value |
|-----|-----|
| Network Name | dusk-10 |
| RPC URL | [https://rpc.flame.dawn-0.astria.org](https://rpc.flame.dawn-0.astria.org) |
| Chain ID | `912559` |
| Currency Symbol | `TIA` |
| Dora | TODO |
| EVM Faucet | TODO |
| Block Explorer | [https://explorer.flame.dawn-0.astria.org/](https://explorer.flame.dawn-0.astria.org/) |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

| Property | Value |
| --- | --- |
| Network Name | `dawn-0` |
| New RPC URL | [https://rpc.flame.dawn-0.astria.org](https://rpc.flame.dawn-0.astria.org) |
| Chain ID | `912559` |
| Currency symbol | `TIA` |
| Block Explorer | [https://explorer.flame.dawn-0.astria.org/](https://explorer.flame.dawn-0.astria.org/) |

## Using Cast

Set your `ETH_RPC_URL`:

```bash
export ETH_RPC_URL=https://rpc.flame.dawn-0.astria.org
```

```bash
export REC_ADDR=<SOME_ADDRESS>
```

```bash
cast balance $REC_ADDR
```

```bash
cast send $REC_ADDR --value 10000000000000000000 --private-key <PRIVATE-KEY>
```

```bash
cast balance $REC_ADDR
```
