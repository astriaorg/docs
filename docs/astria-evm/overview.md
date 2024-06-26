# Astria EVM

## Network Information

| Property | Value |
|-----|-----|
| Network Name | dusk-8 |
| RPC URL | [https://rpc.evm.dusk-8.devnet.astria.org](https://rpc.evm.dusk-8.devnet.astria.org) |
| Chain ID | 912559 |
| Currency Symbol | RIA |
| Dora | [https://www.ondora.xyz/network/astria-devnet](https://www.ondora.xyz/network/astria-devnet) |
| Faucet | [https://faucet.evm.dusk-8.devnet.astria.org](https://faucet.evm.dusk-8.devnet.astria.org) |
| Block Scout | [https://explorer.evm.dusk-8.devnet.astria.org/](https://explorer.evm.dusk-8.devnet.astria.org/) |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

* Network Name: `dusk-8`
* New RPC URL: `https://rpc.evm.dusk-8.devnet.astria.org`
* Chain ID: `912559`
* Currency symbol: `RIA`
* Block Explorer URL: `<empty>`

## Using Cast

Set your `ETH_RPC_URL`:

```bash
export ETH_RPC_URL=https://rpc.evm.dusk-8.devnet.astria.org
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
