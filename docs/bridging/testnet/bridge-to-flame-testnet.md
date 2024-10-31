# Bridging to Flame on `dawn` Testnet

Bridging commands from Celestia and Noble testnets to the Astria `dawn` testnet.

You will need the `astria-cli`, `celestia-appd`, and `nobled` installed. Follow
the install steps [here](./overview.md#bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBLE_KEY_NAME="<name-of-your-noble-key>"
export NOBLE_ADDRESS="<your-noble-address>"
export FLAME_ADDRESS="<your-flame-address>"
```

## Bridge to Flame

### Via IBC

<!--@include: ../../components/_bridge-to-flame-via-ibc-testnet.md-->

### Direct from Astria

<!--@include: ../../components/_bridge-to-flame-via-astria-testnet.md-->

## Check Your Balances on Flame

<!--@include: ../../components/_check-flame-balances-testnet.md-->

## View Your Transactions on Flame

Open the [Flame `dawn` Block Explorer](https://explorer.flame.dawn-1.astria.org)
and search for your Flame address to see your transactions.

On the account page you can view your TIA balance directly. To view your USDC
balance, select the `Tokens` tab.

## View Transactions on [Mintscan](https://www.mintscan.io/)

If you bridge from an IBC chain, you can view your transactions by visiting
the following:

- `https://www.mintscan.io/celestia-testnet/address/<your-celestia-address>`
- `https://www.mintscan.io/noble-testnet/address/<your-noble-address>`

You can also go directly to [Mintscan](https://www.mintscan.io/) and search for
the `txhash` that is returned after sending your transaction, but it is
recommended to view your address transaction history as this will show if an
acknowledgement for your transfer was received.
