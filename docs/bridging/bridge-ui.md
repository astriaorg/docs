<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const bridge = siteConfig.flame
</script>

# Use the Astria Bridge UI

Astria is an IBC chain and is connected to Celestia, Noble, Osmosis, and Stride.

> [!IMPORTANT]
> The Astria Bridge UI is the recommended method for bridging to Astria.
>
> Visit the Astria Bridging UI <a :href="link" target="_blank"
> rel="noopenernoreferrer">here</a>.

## Navigate to the Bridge UI for your Desired Network

| Network | Bridge UI Link |
|---|---|
| Astria Mainnet Alpha | <a :href="bridge.mainnet.bridging.ui_link" target="_blank" rel="noopener noreferrer">Mainnet Bridge UI</a> |
| Astria `dawn-1` Testnet | <a :href="bridge.dawn.bridging.ui_link" target="_blank" rel="noopener noreferrer">Testnet Bridge UI</a> |
| Astria `dusk-11` Devnet | <a :href="bridge.dusk.bridging.ui_link" target="_blank" rel="noopener noreferrer">Devnet Bridge UI</a> |

## Supported Wallets

> [!TIP]
> If Flame doesn't show in your Keplr wallet you can add it here: https://chains.keplr.app/

[Keplr](https://www.keplr.app/) is supported for bridging from Celestia, Noble,
Osmosis, and Stride as well as the Flame EVM.

Any [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) compatible
wallet should work with Flame, we have tested [Keplr](https://www.keplr.app/), [Metamask](https://metamask.io/) and [Coinbase
Wallet](https://www.coinbase.com/wallet). 

## Bridge to Flame

1. Confirm that the Bridge UI is set to **Deposit**.
2. Select your desired starting network and connect your Keplr wallet
3. Select Flame as the destination and connect your EVM wallet.
4. Set an amount.
5. Click `Deposit`.

## Withdraw from Flame

1. Confirm that the Bridge UI is set to **Withdraw**.
2. Select Flame as the starting network and connect your EVM wallet.
3. Select your desired destination network and connect your Keplr wallet.
4. Set an amount.
5. Click `Withdraw`.
