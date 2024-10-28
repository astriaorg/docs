<!-- markdownlint-disable MD051 -->

# Withdraw from the Astria Mainnet Alpha

Withdrawal commands from Astria Mainnet to Celestia and Nobel Mainnets.

You will need the `astria-cli`, `celestia-appd`, and `nobeld` installed. Follow
the install steps [here](../overview.md#bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBEL_KEY_NAME="<name-of-your-nobel-key>"
export NOBLE_ADDRESS="<your-nobel-address>"
```

## Withdraw from Astria

### Astria to Celestia

<!-- TODO: update -->
```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$CELESTIA_ADDRESS --source-channel channel-0 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.astria.org/ --sequencer.chain-id astria --asset transfer/channel-0/utia --fee-asset transfer/channel-0/utia
```

### Astria to Nobel

<!-- TODO: update -->
```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$NOBLE_ADDRESS --source-channel channel-1 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.astria.org/ --sequencer.chain-id astria --asset transfer/channel-1/uusdc --fee-asset transfer/channel-0/utia
```

### View Transactions on [Astrotrek](https://astrotrek.io/)

Go to `https://astrotrek.io/account/<your-astria-account>?tab=transactions`
to see the withdrawal transactions. You can also search the returned transaction
hash directly in [Astrotrek](https://astrotrek.io/).

You will also see the received transactions on
[Mintscan](#view-transactions-on-mintscan).

## Check your Balances on Celestia and Nobel

### Celestia Balance

<!-- TODO: update -->
```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=!!! --chain-id !!!

```

### Nobel Balance

<!-- TODO: update -->
```bash
nobled query bank balances $NOBLE_ADDRESS --node !!!

```
