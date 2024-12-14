<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { onMounted, ref } from 'vue';
import { siteConfig } from '../config.js'
const bridge = siteConfig.flame
const videoRefs = ref([]);

// pause all videos on page load
onMounted(() => {
  videoRefs.value.forEach((video) => {
    if (video) {
      video.pause();
    }
  });
});

</script>

# Use the Astria Bridge UI

Astria is an IBC chain and is connected to Celestia, Noble, Osmosis, and Stride.

> [!IMPORTANT]
> The Astria Bridge UI is the recommended method for bridging to Astria.
>
> Visit the Astria Bridging UI <a :href="bridge.mainnet.bridging.ui_link" target="_blank"
> rel="noopenernoreferrer">here</a>.

## Navigate to the Bridge UI for your Desired Network

| Network | Bridge UI Link |
|---|---|
| Astria Mainnet Alpha | <a :href="bridge.mainnet.bridging.ui_link" target="_blank" rel="noopener noreferrer">Mainnet Bridge UI</a> |
| Astria `dawn-1` Testnet | <a :href="bridge.dawn.bridging.ui_link" target="_blank" rel="noopener noreferrer">Testnet Bridge UI</a> |
| Astria `dusk-11` Devnet | <a :href="bridge.dusk.bridging.ui_link" target="_blank" rel="noopener noreferrer">Devnet Bridge UI</a> |

## Supported Wallets

> [!TIP]
> If Flame doesn't show in your Keplr wallet you can add it
> [here](https://chains.keplr.app/). Search for 'Flame'.

[Keplr](https://www.keplr.app/) is supported for bridging from Celestia, Noble,
Osmosis, and Stride as well as the Flame EVM.

Any [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) compatible
wallet should work with Flame, we have tested [Keplr](https://www.keplr.app/),
[Metamask](https:/metamask.io/) and [Coinbase
Wallet](https://www.coinbase.com/wallet).

## Bridge to Flame

### 1. Go to the [Astria Bridge UI](https://bridge.astria.org/)

### 2. Confirm that the Bridge UI is set to **Deposit**

### 3. Select your desired starting network and connect your Keplr wallet

Celestia is used in this example.

<video src="./assets/bridge-clip-1-select-starting-wallet.mp4" controls muted loop style="max-width: 100%;"></video>

### 4. Select Flame as the destination and connect your EVM wallet

<video src="./assets/bridge-clip-2-select-evm-wallet.mp4" controls muted loop style="max-width: 100%;"></video>

### 5. Confirm Flame is selected in Metamask

If Flame is not present in you wallet, you can [add it
here](../flame/flame-mainnet-alpha#adding-to-metamask).

<video src="./assets/bridge-clip-3-confirm-flame-in-evm-wallet.mp4" controls muted loop style="max-width: 100%;"></video>

### 6. Set a deposit amount and approve the transaction

<video src="./assets/bridge-clip-4-set-deposit-amount.mp4" controls muted loop style="max-width: 100%;"></video>

## Withdraw from Flame

### 1. Go to the [Astria Bridge UI](https://bridge.astria.org/)

### 2. Set the Bridge UI to **Withdraw** and Connect your EVM Wallet

Metamask is used in this example. If Flame is not present in your wallet, you
can [add it here](../flame/flame-mainnet-alpha#adding-to-metamask).

<video src="./assets/withdrawal-clip-1-set-starting-wallet.mp4" controls muted loop style="max-width: 100%;"></video>

### 3. Select your desired destination network and connect your Keplr wallet

Celestia is used in this example.

<video src="./assets/withdrawal-clip-2-select-keplr-wallet.mp4" controls muted loop style="max-width: 100%;"></video>

### 4. Set a withdrawal amount and approve the transaction

<video src="./assets/withdrawal-clip-3-approve-tx.mp4" controls muted loop style="max-width: 100%;"></video>
