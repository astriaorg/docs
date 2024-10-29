# Bridging to Flame on Mainnet Alpha

Bridging commands from Celestia and Noble Mainnets to the Astria Mainnet.

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

### From Celestia

<!-- TODO: update -->
```bash
celestia-appd tx ibc-transfer transfer \
    transfer \
    channel-48 \
    astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr \
    "10000utia" \
    --fees=420utia \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="!!!" \
    --from="$CELESTIA_KEY_NAME" \
    --node=!!! \
    --packet-timeout-height 0-0
```

### From Noble

<!-- TODO: update -->
```bash
nobled tx ibc-transfer transfer \
    transfer \
    channel-104 \
    astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="!!!" \
    --from="$NOBLE_KEY_NAME" \
    --node=!!! \
    --packet-timeout-height 0-0
```

### TIA from Astria

<!-- TODO: update -->
```bash
astria-cli sequencer bridge-lock astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.sequencer.astria.org/ \
    --fee-asset=transfer/channel-0/utia --asset=transfer/channel-0/utia
```

### USDC from Astria

<!-- TODO: update -->
```bash
astria-cli sequencer bridge-lock astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.sequencer.astria.org/ \
    --fee-asset=transfer/channel-0/utia --asset=transfer/channel-1/uusdc
```

## Check Your Balances on Flame

### TIA

```bash
cast balance $FLAME_ADDRESS --rpc-url https://rpc.flame.astria.org

```

### USDC

<!-- TODO: verify correct address -->
```bash
cast balance $FLAME_ADDRESS --erc20 0x6e18cE6Ec3Fc7b8E3EcFca4fA35e25F3f6FA879a --rpc-url https://rpc.flame.astria.org

```

## View Your Transactions

Open the [Flame Block Explorer](https://explorer.flame.astria.org) and
search for your Flame address to see your transactions.

On the account page you can view your TIA balance directly. To view your USDC
balance, select the `Tokens` tab.
