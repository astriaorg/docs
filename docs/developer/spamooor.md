# Load testing with `spamooor`

`spamooor` is a load testing tool for EVMs that is a fork
[ethpandaops/goomy-blob](https://github.com/ethpandaops/goomy-blob).

## Clone and Build `spamooor`

Clone and build the [`spamooor` transaction spamming
tool](https://github.com/astriaorg/spamooor).

Requirements:

- [Go](https://go.dev/doc/install)

<!--@include: ../components/_clone-build-spamooor.md-->


## Setup Your Environment for `spamooor`

There are several `spamooor` settings that you can configure:

- `max-wallets`: The number of child wallets that will be created.
- `throughput`: The number of transactions to send per block.
- `count`: The total number of transfer transactions to send.
- `timeout`: The number of seconds to wait before the `spamooor` test times out.
- `gas-units-to-burn`: The approximate amount of gas your transactions will
  burn.

Add these settings to your environment:

```bash
export SPAMOOOR_MAX_WALLETS="10"
export SPAMOOOR_THROUGHPUT="50"
export SPAMOOOR_COUNT="100"
export SPAMOOOR_TIMEOUT="20"
export SPAMOOOR_GAS_UNITS_TO_BURN="5000000"
```

## Generate Transactions

With your sequencer, rollup, and `spamooor` setup, you can now send test
transactions:

Send transfers:

```bash
./spamooor eoatx --privkey $PRIV_KEY --rpchost $ROLLUP_RPC --max-wallets $SPAMOOOR_MAX_WALLETS --throughput $SPAMOOOR_THROUGHPUT --count $SPAMOOOR_COUNT
```

Send ERC20 transfers:

```bash
./spamooor erctx --privkey $PRIV_KEY --rpchost $ROLLUP_RPC --max-wallets $SPAMOOOR_MAX_WALLETS --throughput $SPAMOOOR_THROUGHPUT --count $SPAMOOOR_COUNT --timeout $SPAMOOOR_TIMEOUT
```

Send gas burner transactions:

```bash
./spamooor gasburnertx --privkey $PRIV_KEY --rpchost $ROLLUP_RPC --max-wallets $SPAMOOOR_MAX_WALLETS --throughput $SPAMOOOR_THROUGHPUT --count $SPAMOOOR_COUNT --timeout $SPAMOOOR_TIMEOUT --gas-units-to-burn $SPAMOOOR_GAS_UNITS_TO_BURN
```

Send transactions that will revert:

```bash
./spamooor revertingtx --privkey $PRIV_KEY --rpchost $ROLLUP_RPC --max-wallets $SPAMOOOR_MAX_WALLETS --throughput $SPAMOOOR_THROUGHPUT --count $SPAMOOOR_COUNT
```
