<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const config = siteConfig
</script>

# Flame on Devnet

Flame is the EVM for Celestia Native DeFi. The information below is specifically
for Flame running on the Astria `dusk-{{config.dusk.num}}` Devnet.

## EVM Information

| Property | Value |
|-----|-----|
| Network Name | `{{config.flame.dusk.info.network_name}}` |
| Chain ID | `{{config.flame.dusk.info.chain_id}}` |
| RPC URL | <a :href="config.dusk.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dusk.flame_rpc}}</a> |
| Flame EVM Block Explorer | <a :href="config.dusk.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dusk.flame_explorer}}</a>  |
| Native sequencer Asset | `{{config.flame.dusk.info.native_asset}}` |
| Currency Symbol | `{{config.flame.dusk.info.currency_symbol}}` |

## Bridging

| Property | Value |
|-----|-----|
| IBC Channel: grand-1 -> dawn-1 | `{{config.flame.dusk.bridging.ibc_grand_to_dusk}}` |
| IBC Channel: dawn-1 -> grand-1 | `{{config.flame.dusk.bridging.ibc_dusk_to_grand}}` |
| Flame USDC Withdrawal Address| `{{config.flame.dusk.bridging.flame_usdc_address}}` |
| Flame nRIA Withdrawal Address| `{{config.flame.dusk.bridging.flame_ria_address}}` |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

| Property | Value |
| --- | --- |
| Network Name | `{{config.flame.dusk.info.network_name}}` |
| New RPC URL | <a :href="config.dusk.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dusk.flame_rpc}}</a> |
| Chain ID | `{{config.flame.dusk.info.chain_id}}` |
| Currency symbol | `{{config.flame.dusk.info.currency_symbol}}` |
| Block Explorer | <a :href="config.dusk.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dusk.flame_explorer}}</a> |

## Uniswap V3

| Name | Address |
|---|---|
| Descriptor Proxy Address | `{{config.dusk.descriptorProxyAddress}}` |
| Multicall 2 Address | `{{config.dusk.multicall2Address}}` |
| NFT Position Descriptor Address | `{{config.dusk.nftPositionDescriptorAddress}}` |
| NFT Position Manager Address | `{{config.dusk.nftPositionManagerAddress}}` |
| Proxy Admin Address | `{{config.dusk.proxyAdminAddress}}` |
| Quoter V2 Address | `{{config.dusk.quoterV2Address}}` |
| Swap Router 02 Address | `{{config.dusk.swapRouter02Address}}` |
| Tick Lens Address | `{{config.dusk.tickLensAddress}}` |
| v3 Core Factory Address | `{{config.dusk.v3CoreFactoryAddress}}` |
| v3 Migrator Address | `{{config.dusk.v3MigratorAddress}}` |
| v3 Staker Address | `{{config.dusk.v3StakerAddress}}` |
| wTIA9 Address | `{{config.dusk.weth9Address}}` |

## Using Cast

Set your `ETH_RPC_URL`:

```bash
export ETH_RPC_URL=https://rpc.evm.dusk-11.devnet.astria.org
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

## Fork Diff

Flame is a fork of [go-ethereum](https://github.com/ethereum/go-ethereum). See
the fork diff [here](https://astriaorg.github.io/astria-geth/).
