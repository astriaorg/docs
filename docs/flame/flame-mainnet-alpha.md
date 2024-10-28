<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const config = siteConfig
</script>

# Flame on Mainnet

Flame is the EVM for Celestia Native DeFi. The information below is specifically
for Flame running on the Astria Mainnet.

## EVM Information

| Property | Value |
|-----|-----|
| Network Name | `{{config.flame.mainnet.info.network_name}}` |
| Chain ID | `{{config.flame.mainnet.info.chain_id}}` |
| RPC URL | <a :href="config.mainnet.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.mainnet.flame_rpc}}</a> |
| Flame EVM Block Explorer | <a :href="config.mainnet.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.mainnet.flame_explorer}}</a>  |
| Native sequencer Asset | `{{config.flame.mainnet.info.native_asset}}` |
| Currency Symbol | `{{config.flame.mainnet.info.currency_symbol}}` |

## Bridging

| Property | Value |
|-----|-----|
| IBC Channel: mocha-4 -> dawn-1 | `{{config.flame.mainnet.bridging.ibc_celestia_to_astria}}` |
| IBC Channel: dawn-1 -> mocha-4 | `{{config.flame.mainnet.bridging.ibc_astria_to_celestia}}` |
| IBC Channel: grand-1 -> dawn-1 | `{{config.flame.mainnet.bridging.ibc_nobel_to_astria}}` |
| IBC Channel: dawn-1 -> grand-1 | `{{config.flame.mainnet.bridging.ibc_astria_to_nobel}}` |
| Astria Sequencer TIA Bridge Address | `{{config.flame.mainnet.bridging.sequencer_celestia_address}}` |
| Astria Sequencer USDC Bridge Address | `{{config.flame.mainnet.bridging.sequencer_nobel_address}}` |
| Flame TIA Withdrawal Address| `{{config.flame.mainnet.bridging.flame_tia_address}}` |
| Flame USDC Withdrawal Address| `{{config.flame.mainnet.bridging.flame_usdc_address}}` |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

| Property | Value |
| --- | --- |
| Network Name | `{{config.flame.mainnet.info.network_name}}` |
| New RPC URL | <a :href="config.mainnet.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.mainnet.flame_rpc}}</a> |
| Chain ID | `{{config.flame.mainnet.info.chain_id}}` |
| Currency symbol | `{{config.flame.mainnet.info.currency_symbol}}` |
| Block Explorer | <a :href="config.mainnet.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.mainnet.flame_explorer}}</a> |

## Uniswap V3

| Name | Address |
|---|---|
| Descriptor Proxy Address | `{{config.mainnet.descriptorProxyAddress}}` |
| Multicall 2 Address | `{{config.mainnet.multicall2Address}}` |
| nft Position Descriptor Address | `{{config.mainnet.nftPositionDescriptorAddress}}` |
| nft Position Manager Address | `{{config.mainnet.nftPositionManagerAddress}}` |
| Proxy Admin Address | `{{config.mainnet.proxyAdminAddress}}` |
| Quoter V2 Address | `{{config.mainnet.quoterV2Address}}` |
| Swap Router 02 Address | `{{config.mainnet.swapRouter02Address}}` |
| Tick Lens Address | `{{config.mainnet.tickLensAddress}}` |
| v3 Core Factory Address | `{{config.mainnet.v3CoreFactoryAddress}}` |
| v3 Migrator Address | `{{config.mainnet.v3MigratorAddress}}` |
| v3 Staker Address | `{{config.mainnet.v3StakerAddress}}` |
| weth9 Address | `{{config.mainnet.weth9Address}}` |

## Using Cast

Set your `ETH_RPC_URL`:

```bash
export ETH_RPC_URL=https://rpc.flame.astria.org
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
