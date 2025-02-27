<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const config = siteConfig
</script>

# Flame on Testnet

Flame is the EVM for Celestia Native DeFi. The information below is specifically
for Flame running on the Astria `dawn-{{config.dawn.num}}` Testnet.

## EVM Information

| Property | Value |
|-----|-----|
| Network Name | `{{config.flame.dawn.info.network_name}}` |
| Chain ID | `{{config.flame.dawn.info.chain_id}}` |
| RPC URL | <a :href="config.dawn.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_rpc}}</a> |
| Flame EVM Block Explorer | <a :href="config.dawn.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_explorer}}</a>  |
| Native sequencer Asset | `{{config.flame.dawn.info.native_asset}}` |
| Currency Symbol | `{{config.flame.dawn.info.currency_symbol}}` |
| Auctioneer RPC URL | `{{config.flame.dawn.info.auctioneer_rpc_url}}` |

## Adding to Metamask

Follow Metamask's official documentation to [manually add a custom network.](https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5)

Your settings should be the following:

| Property | Value |
| --- | --- |
| Network Name | `{{config.flame.dawn.info.network_name}}` |
| New RPC URL | <a :href="config.dawn.flame_rpc" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_rpc}}</a> |
| Chain ID | `{{config.flame.dawn.info.chain_id}}` |
| Currency symbol | `{{config.flame.dawn.info.currency_symbol}}` |
| Block Explorer | <a :href="config.dawn.flame_explorer" target="_blank" rel="noopener noreferrer">{{config.dawn.flame_explorer}}</a> |

## Auctioneer

The top of the block (ToB) in a DeFi-enabled rollup is particularly valuable
because it provides an execution guarantee. Flame’s trusted Auctioneer simply
needs to allocate, sign and include the auction-winning bundle in the
sequencing-layer block. Flame’s execution enforces a sequencing rule that places
the Auctioneer’s signed `Allocation` deterministically at the top of the block
it was successfully included in.

Auctioneer RPC URL: <a :href="config.flame.dawn.info.auctioneer_rpc_url"
target="_blank"><code>{{config.flame.dawn.info.auctioneer_rpc_url}}</code></a>

Flame’s Auctioneer runs a first price auction for a bundle, restricted to a slot.

Bundles/bids submitted to the Auctioneer are simulated against the latest block
to calculate the bid paid to the Auctioneer.

:::tip
*Since V1 uses `eth_sendTransaction` for submission, only single transaction
bids are supported. Bids are calculated from the tip paid by the transaction.
The calculation is as follows:*

`totalFee = tx.Gas * min(tx.GasTipCap, tx.GasFeeCap - tx.baseFee)`
:::

To submit a bid to the auction using `cast`, set up your env vars:

```bash
export ETH_RPC_URL=https://tob.flame.dawn-1.astria.org
export DEST_ADDR=<destination-address>
export PRIV_KEY=<your-private-key>
export BID=<your-bid-value>
```

Submit your bid:

```bash
cast send $DEST_ADDR \
    --value 10000000000000000000 \
    --gas-price $BID \
    --private-key $PRIV_KEY
```

### Searcher Simulations

If you are interested in running searcher simulations when using the Auctioneer,
see the
[`auctioneer-searcher-simulation`](https://github.com/astriaorg/auctioneer-searcher-simulation)
tool.

## Bridging

### [https://astria-bridge-web-app-dawn.vercel.app/](https://astria-bridge-web-app-dawn.vercel.app/)

![Bridge UI](/bridge-ui-screen.png)

### Celestia Mocha (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `TIA` |
| `mocha` -> `dawn` | `{{config.flame.dawn.bridging.ibc_mocha_to_dawn}}` |
| `dawn` -> `mocha` | `{{config.flame.dawn.bridging.ibc_dawn_to_mocha}}` |
| Astria Sequencer TIA Bridge Address | `{{config.flame.dawn.bridging.sequencer_mocha_address}}` |
| Flame TIA Withdrawal Address| `{{config.flame.dawn.bridging.flame_tia_address}}` |

### Noble Grand (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `USDC` |
| `grand` -> `astria` | `{{config.flame.dawn.bridging.ibc_grand_to_dawn}}` |
| `astria` -> `grand` | `{{config.flame.dawn.bridging.ibc_dawn_to_grand}}` |
| Astria Sequencer USDC Bridge Address | `{{config.flame.dawn.bridging.sequencer_grand_address}}` |
| Flame USDC Withdrawal Address| `{{config.flame.dawn.bridging.flame_usdc_address}}` |

## Uniswap V3

| Name | Address |
|---|---|
| Descriptor Proxy Address | `{{config.dawn.descriptorProxyAddress}}` |
| Multicall 2 Address | `{{config.dawn.multicall2Address}}` |
| NFT Position Descriptor Address | `{{config.dawn.nftPositionDescriptorAddress}}` |
| NFT Position Manager Address | `{{config.dawn.nftPositionManagerAddress}}` |
| Proxy Admin Address | `{{config.dawn.proxyAdminAddress}}` |
| Quoter V2 Address | `{{config.dawn.quoterV2Address}}` |
| Swap Router 02 Address | `{{config.dawn.swapRouter02Address}}` |
| Tick Lens Address | `{{config.dawn.tickLensAddress}}` |
| v3 Core Factory Address | `{{config.dawn.v3CoreFactoryAddress}}` |
| v3 Migrator Address | `{{config.dawn.v3MigratorAddress}}` |
| v3 Staker Address | `{{config.dawn.v3StakerAddress}}` |
| wTIA9 Address | `{{config.dawn.weth9Address}}` |

## Using Cast

Set your `ETH_RPC_URL`:

```bash
export ETH_RPC_URL=https://rpc.flame.dawn-1.astria.org
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
