<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const config = siteConfig
</script>

# Flame EVM

Flame is the EVM for Celestia Native DeFi.

## EVM Information

| Property | Value |
|-----|-----|
| Network Name | `{{config.flame.info.network_name}}` |
| Chain ID | `{{config.flame.info.chain_id}}` |
| RPC URL | <a :href="config.dawn.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_rpc}}</a> |
| Flame EVM Block Explorer | <a :href="config.dawn.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_explorer}}</a>  |
| Native sequencer Asset | `{{config.flame.info.native_asset}}` |
| Currency Symbol | `{{config.flame.info.currency_symbol}}` |

## Bridging

| Property | Value |
|-----|-----|
| Sequencer <-> Flame Bridge Account | `{{config.flame.bridging.sequencer_flame_bridge_address}}` |
| IBC Channel: mocha-4 -> dawn-0 | `{{config.flame.bridging.ibc_mocha_to_dawn}}` |
| IBC Channel: dawn-0 -> mocha-4 | `{{config.flame.bridging.ibc_dawn_to_mocha}}` |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

| Property | Value |
| --- | --- |
| Network Name | `{{config.flame.info.network_name}}` |
| New RPC URL | <a :href="config.dawn.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_rpc}}</a> |
| Chain ID | `{{config.flame.info.chain_id}}` |
| Currency symbol | `{{config.flame.info.currency_symbol}}` |
| Block Explorer | <a :href="config.dawn.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_explorer}}</a> |

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
