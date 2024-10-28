# Bridge to Astria

<!-- TODO: add the actual url here -->
The Astria Bridge UI is the recommend method for bridging to Astria.
Visit the Astria Bridging UI [here](https://www.astria.org/).

If you prefer the command line, manual bridging is also possible.

## CLI Bridging Dependencies

To bridge funds directly on the command line, install the following.

Make sure Go is installed and the `/go/bin` is added to your path. This is
required for building and successfully using `nobeld` and `celestia-appd`:

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

Install the `nobeld` cli:

<!--@include: ../components/_install-nobeld.md-->

## Creating Accounts

You will need an account for all networks you are interacting with.

### Create an Astria account

```bash
astria-cli sequencer account create
```

### Create a Celestia account

```bash
celestia-appd keys add <name-of-your-celestia-key>
```

### Create a Flame account

```bash
cast w new
```

### Create a Nobel account

```bash
nobled keys add <name-of-your-nobel-key>
```

## Funding Testnet Accounts

### Celestia Mocha Testnet

Fund your Celestia address using the Celestia testnet faucet
[here](https://docs.celestia.org/how-to-guides/mocha-testnet#mocha-testnet-faucet).

### Nobel Testnet

Fund your Nobel address using the Nobel testnet faucet
[here](https://faucet.circle.com/). Select `Nobel Testnet` in the dropdown.

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
export NOBLE_ADDRESS="<your-nobel-address>"
```

### Astria Dawn Balance

```bash
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dawn-1.astria.org/
```

### Astria Dusk Balance

```bash
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org/
```

### Celestia Balance

```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4

```

### Flame Dawn Balance

```bash
cast balance --rpc-url https://rpc.flame.dawn-1.astria.org $FLAME_ADDRESS
```

### Flame Dusk Balance

```bash
cast balance --rpc-url https://rpc.flame.dusk-11.devnet.astria.org $FLAME_ADDRESS
```

### Nobel Balance

```bash
nobled query bank balances $NOBLE_ADDRESS --node https://noble-testnet-rpc.polkachu.com:443

```
