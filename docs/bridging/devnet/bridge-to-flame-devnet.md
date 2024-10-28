# Bridging to Flame on `dusk` Devnet

Bridging commands from Celestia and Nobel testnets to the Astria `dusk` devnet.

You will need the `astria-cli`, `celestia-appd`, and `nobeld` installed. Follow
the install steps [here](./overview.md#bridging-dependencies).

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export CELESTIA_ADDRESS="<your-celestia-address>"
export NOBEL_KEY_NAME="<name-of-your-nobel-key>"
export NOBLE_ADDRESS="<your-nobel-address>"
export FLAME_ADDRESS="<your-flame-address>"
```

## Bridge to Flame on `dusk` Devnet

### From Celestia

::: tip
There is no $TIA `BridgeLockAccount` configured for `dusk-11`.
:::

### From Nobel

```bash
nobled tx ibc-transfer transfer \
    transfer \
    channel-231 \
    astria12saluecm8dd7hkutk83eavkl2p70lf5w7txezg \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="grand-1" \
    --from="grand-test-1" \
    --node=https://noble-testnet-rpc.polkachu.com:443
    --packet-timeout-height 0-0
```

### nRIA from Astria

```bash
astria-cli sequencer bridge-lock astria1yqdjnnmrp7w5ygwj0dkldsgzjhv5vcakp7yeu9 \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria-dusk-11 \
    --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org \
    --fee-asset=nria --asset=nria
```

### USDC from Astria

```bash
astria-cli sequencer bridge-lock astria12saluecm8dd7hkutk83eavkl2p70lf5w7txezg \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria-dusk-11 \
    --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org \
    --fee-asset=nria --asset=transfer/channel-2/uusdc
```

## Check Your Balances on Flame

### TIA

```bash
cast balance $FLAME_ADDRESS --rpc-url https://rpc.flame.dusk-11.devnet.astria.org

```

### USDC

```bash
cast balance $FLAME_ADDRESS --erc20 0x6e18cE6Ec3Fc7b8E3EcFca4fA35e25F3f6FA879a --rpc-url https://rpc.flame.dusk-11.devnet.astria.org

```

## View Your Transactions

Open the [Flame Block Explorer](https://explorer.flame.dusk-11.devnet.astria.org) and
search for your Flame address to see your transactions.

On the account page you can view your TIA balance directly. To view your USDC
balance, select the `Tokens` tab.
