<!-- markdownlint-disable MD051 -->

# Withdraw from the Astria `dawn` Testnet

Withdrawal commands from Astria `dawn` Testnet to Celestia, Noble, and Stride
Testnets.

You will need the `astria-cli`, `celestia-appd`, `nobled` and `strided`
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

## Withdraw from Astria

<!--@include: ../../components/_withdraw-from-astria-testnet.md-->

## View Transactions on [Astrotrek](https://dawn.astrotrek.io/)

Go to `https://dawn.astrotrek.io/account/<your-astria-account>?tab=transactions`
to see the withdrawal transactions. You can also search the returned transaction
hash directly in [Astrotrek](https://dawn.astrotrek.io/).

## View Transactions on [Mintscan](https://www.mintscan.io/)

If you bridge out to an IBC chain, you can view your transactions by visiting
the following:

- `https://www.mintscan.io/celestia/address/<your-celestia-address>`
- `https://www.mintscan.io/noble/address/<your-noble-address>`
- `https://www.mintscan.io/stride/address/<your-stride-address>`

You can also go directly to [Mintscan](https://www.mintscan.io/) and search for
the `txhash` that is returned after sending your transaction, but it is
recommended to view your address transaction history as this will show if an
acknowledgement for your transfer was received.

## Check your Testnet Balances

<!--@include: ../../components/_check-testnet-balances.md-->
