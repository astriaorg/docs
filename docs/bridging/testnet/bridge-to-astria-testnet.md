# Bridging to the Astria `dawn` Testnet

Bridging commands from Celestia and Noble testnets to the Astria `dawn` testnet.

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

## Bridge to Astria

### From Celestia

```bash
celestia-appd tx ibc-transfer transfer transfer channel-160 $ASTRIA_ADDRESS 1000000utia --fees=420utia --from $CELESTIA_KEY_NAME --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4 --packet-timeout-height 0-0
```

### From Noble

```bash
nobled tx ibc-transfer transfer transfer channel-232 $ASTRIA_ADDRESS 1000000uusdc --from $NOBLE_KEY_NAME --node https://noble-testnet-rpc.polkachu.com:443 --chain-id grand-1 --packet-timeout-height 0-0
```

## Check Your Balances on Astria

```bash
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dawn-1.astria.org/
```

### View Transactions on [Mintscan](https://www.mintscan.io/)

You can view your transactions by visiting
`https://www.mintscan.io/noble-testnet/address/<your-celestia-address>` or
`https://www.mintscan.io/noble-testnet/address/<your-noble-address>`. You can
also go directly to [Mintscan](https://www.mintscan.io/) and search for the
`txhash` that is returned after sending your transaction, but it is recommended
to view your address transaction history as this will show if an acknowledgement
for your transfer was received.
