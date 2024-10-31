# Bridging to the Astria `dawn` Testnet

Bridging commands from Celestia, Noble, and Stride Testnets to the Astria `dawn`
Testnet.

You will need the `astria-cli`, `celestia-appd`, `nobled`, and `strided`
installed. Follow the install steps
[here](../overview.md#bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBLE_KEY_NAME="<name-of-your-noble-key>"
export NOBLE_ADDRESS="<your-noble-address>"
export STRIDE_KEY_NAME="<name-of-your-stride-key>"
export STRIDE_ADDRESS="<your-stride-address>"
```

## Bridge to Astria

<!--@include: ../../components/_bridge-to-astria-testnet.md-->

## Check Your Balances on Astria

```bash
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dawn-1.astria.org/
```

## View Transactions on [Mintscan](https://www.mintscan.io/)

You can view your transactions by visiting the following:

- `https://www.mintscan.io/celestia/address/<your-celestia-address>`
- `https://www.mintscan.io/noble/address/<your-noble-address>`
- `https://www.mintscan.io/stride/address/<your-stride-address>`

You can also go directly to [Mintscan](https://www.mintscan.io/) and search for
the `txhash` that is returned after sending your transaction, but it is
recommended to view your address transaction history as this will show if an
acknowledgement for your transfer was received.
