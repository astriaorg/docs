<!-- markdownlint-disable MD051 -->

# Withdraw from the Astria `dusk` Devnet

Withdrawal commands from Astria `dusk` devnet to Celestia and Noble testnets.

You will need the `astria-cli`, `celestia-appd`, and `nobled` installed. Follow
the install steps [here](../overview.md#bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBLE_KEY_NAME="<name-of-your-noble-key>"
export NOBLE_ADDRESS="<your-noble-address>"
```

## Withdraw from Astria

### Astria to Celestia

```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$CELESTIA_ADDRESS --source-channel channel-0 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.dusk-11.devnet.astria.org --sequencer.chain-id astria-dusk-11 --asset transfer/channel-0/utia --fee-asset nria
```

### Astria to Noble

```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$NOBLE_ADDRESS --source-channel channel-2 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.dusk-11.devnet.astria.org --sequencer.chain-id astria-dusk-11 --asset transfer/channel-2/uusdc --fee-asset nria
```

### View Transactions on [Astrotrek](https://dusk.astrotrek.io/)

Go to `https://dusk.astrotrek.io/account/<your-astria-account>?tab=transactions`
to see the withdrawal transactions. You can also search the returned transaction
hash directly in [Astrotrek](https://dusk.astrotrek.io/).

You will also see the received transactions on
[Mintscan](#view-transactions-on-mintscan).

## Check your Balances on Celestia and Noble

### Celestia Balance

```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4

```

### Noble Balance

```bash
nobled query bank balances $NOBLE_ADDRESS --node https://noble-testnet-rpc.polkachu.com:443

```
