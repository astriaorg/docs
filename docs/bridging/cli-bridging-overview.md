<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const link = siteConfig.flame.mainnet.bridging.ui_link
</script>

# Bridge to Astria

The Astria Bridge UI is the recommend method for bridging to Astria.
Visit the Astria Bridging UI <a :href="link" target="_blank" rel="noopener
noreferrer">here</a>. If you prefer the command line, manual bridging is also
possible.

## CLI Bridging Dependencies

To bridge funds directly on the command line, install the following.

Make sure Go is installed and the `/go/bin` is added to your path. This is
required for building and successfully using `nobled` and `celestia-appd`:

- [Go](https://go.dev/doc/install)

Install the `astria-cli`:

- See [`astria-cli` installation
  docs](../developer/astria-cli/astria-cli-installation.md)

Install the `celestia-appd` cli:

- See [`celestia-appd` installation
  docs](https://docs.celestia.org/how-to-guides/celestia-app)

Install Foundry:

- See the [Foundry installation
  docs](https://book.getfoundry.sh/getting-started/installation).

Build the `nobled` cli from source:

<!--@include: ../components/_install-nobled.md-->

Build the `strided` cli from source:

<!--@include: ../components/_install-strided.md-->

Build the `osmosisd` cli from source:

<!--@include: ../components/_install-osmosisd.md-->

## Creating Accounts

You will need an account for all networks you are interacting with.

<!--@include: ../components/_create-accounts.md-->

## Funding Testnet Accounts

### Celestia Mocha Testnet

Fund your Celestia address using the Celestia testnet faucet
[here](https://docs.celestia.org/how-to-guides/mocha-testnet#mocha-testnet-faucet).

### Noble Testnet

Fund your Noble address using the Noble testnet faucet
[here](https://faucet.circle.com/). Select `Noble Testnet` in the dropdown.

### Astria `dusk` Devnet

Fund your Astria address using the Astria `dusk` network faucet
[here](https://faucet.sequencer.dusk-11.devnet.astria.org/).

### Astria `dawn` Testnet

Fund your Astria address using the Astria `dawn` network faucet
[here](https://faucet.sequencer.dawn-1.astria.org/).

## Checking Account Balances

To make the following commands easily copy and pasted, export your account
addresses to the environment:

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export FLAME_ADDRESS="<your-flame-address>"
export NOBLE_ADDRESS="<your-noble-address>"
export STRIDE_ADDRESS="<your-stride-address>"
```

### Check **Mainnet** Balances

<!--@include: ../components/_check-mainnet-balances.md-->

### Check **Testnet** Balances

<!--@include: ../components/_check-testnet-balances.md-->

### Check **Devnet** Balances

<!--@include: ../components/_check-devnet-balances.md-->
