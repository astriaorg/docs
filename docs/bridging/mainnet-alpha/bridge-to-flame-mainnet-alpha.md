# Bridging to Flame on Mainnet Alpha

Bridging commands from Astria, Celestia, Noble, Osmosis, and Stride Mainnets to
Flame running on Astria Mainnet Alpha.

You will need the `astria-cli`, `celestia-appd`, `nobled`, `osmosisd`, and
`strided` installed. Follow the install steps
[here](../cli-bridging-overview.md#cli-bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBLE_KEY_NAME="<name-of-your-noble-key>"
export NOBLE_ADDRESS="<your-noble-address>"
export OSMOSIS_KEY_NAME="<name-of-your-osmosis-key>"
export OSMOSIS_ADDRESS="<your-osmosis-address>"
export STRIDE_KEY_NAME="<name-of-your-stride-key>"
export STRIDE_ADDRESS="<your-stride-address>"
```

## Bridge to Flame

### Via IBC

<!--@include: ../../components/_bridge-to-flame-via-ibc-mainnet.md-->

### Direct from Astria

<!--@include: ../../components/_bridge-to-flame-via-astria-mainnet.md-->

## Check Your Balances on Flame

<!--@include: ../../components/_check-flame-balances-mainnet.md-->

## View Your Transactions on Flame

Open the [Flame Block Explorer](https://explorer.flame.astria.org) and
search for your Flame address to see your transactions.

On the account page you can view your TIA balance directly. To view your USDC
balance, select the `Tokens` tab.

## View Transactions on [Mintscan](https://www.mintscan.io/)

If you bridge from an IBC chain, you can view your transactions by visiting
the following:

- `https://www.mintscan.io/celestia/address/<your-celestia-address>`
- `https://www.mintscan.io/noble/address/<your-noble-address>`
- `https://www.mintscan.io/osmosis/address/<your-osmosis-address>`
- `https://www.mintscan.io/stride/address/<your-stride-address>`

You can also go directly to [Mintscan](https://www.mintscan.io/) and search for
the `txhash` that is returned after sending your transaction, but it is
recommended to view your address transaction history as this will show if an
acknowledgement for your transfer was received.
