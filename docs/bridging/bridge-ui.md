<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const bridge = siteConfig
</script>

# Use the Astria Bridge UI

The Astria Bridging UI is the recommend method for bridging to Astria.
Visit the Astria Bridging UI <a :href="bridge.flame.mainnet.bridging.ui_link"
target="_blank" rel="noopener noreferrer">here</a>.

## Navigate to the Bridge UI for your Desired Network

| Network | Bridge UI Link |
|---|---|
| Astria Mainnet Alpha | <a :href="bridge.flame.mainnet.bridging.ui_link" target="_blank" rel="noopener noreferrer">Mainnet Bridge UI</a> |
| Astria `dawn` Testnet | <a :href="bridge.flame.dawn.bridging.ui_link" target="_blank" rel="noopener noreferrer">Testnet Bridge UI</a> |
| Astria `dusk` Devnet | <a :href="bridge.flame.dusk.bridging.ui_link" target="_blank" rel="noopener noreferrer">Devnet Bridge UI</a> |

## Supported Wallets

[Keplr](https://www.keplr.app/) is supported for bridging from Celestia and
Nobel.

For Flame, any [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) compatible
wallet should be supported. However, [Metamask](https://metamask.io/) and [Coinbase
Wallet](https://www.coinbase.com/wallet) have been tested specifically.

## Bridge to Flame

1. Confirm that the Bridge UI is set to **Deposit**.
2. Select your desired starting network (Celestia or Nobel)
   and connect your Keplr wallet
    - Selecting Celestia will bridge `TIA` to Flame
    - Selecting Nobel will bridge `USDC` to Flame
3. Select Flame as the destination and connect your EVM wallet.
4. Set an amount.
5. Click `Deposit`.

## Withdraw from Flame

1. Confirm that the Bridge UI is set to **Withdraw**.
2. Select Flame as the starting network and connect your EVM wallet.
3. Select your desired destination network (Celestia or Nobel) and connect your
   Keplr wallet.
    - Selecting Celestia will withdraw `TIA` from Flame
    - Selecting Nobel will withdraw `USDC` from Flame
4. Set an amount.
5. Click `Withdraw`.
