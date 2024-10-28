# Bridging to Flame on `dawn` Testnet

Bridging commands from Celestia and Nobel testnets to the Astria `dawn` testnet.

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

## Bridge to Flame

### From Celestia

```bash
celestia-appd tx ibc-transfer transfer \
    transfer \
    channel-160 \
    astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr \
    "10000utia" \
    --fees=420utia \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="mocha-4" \
    --from="$CELESTIA_KEY_NAME" \
    --node=https://rpc-mocha.pops.one:443 \
    --packet-timeout-height 0-0
```

### From Nobel

```bash
nobled tx ibc-transfer transfer \
    transfer \
    channel-232 \
    astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="grand-1" \
    --from="$NOBEL_KEY_NAME" \
    --node=https://noble-testnet-rpc.polkachu.com:443 \
    --packet-timeout-height 0-0
```

### TIA from Astria

```bash
astria-cli sequencer bridge-lock astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id dawn-1 \
    --sequencer-url https://rpc.sequencer.dawn-1.astria.org/ \
    --fee-asset=transfer/channel-0/utia --asset=transfer/channel-0/utia
```

### USDC from Astria

```bash
astria-cli sequencer bridge-lock astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id dawn-1 \
    --sequencer-url https://rpc.sequencer.dawn-1.astria.org/ \
    --fee-asset=transfer/channel-0/utia --asset=transfer/channel-1/uusdc
```

## Check Your Balances on Flame

### TIA

```bash
cast balance $FLAME_ADDRESS --rpc-url https://rpc.flame.dawn-1.astria.org

```

### USDC

```bash
cast balance $FLAME_ADDRESS --erc20 0x6e18cE6Ec3Fc7b8E3EcFca4fA35e25F3f6FA879a --rpc-url https://rpc.flame.dawn-1.astria.org

```

## View Your Transactions

Open the [Flame Block Explorer](https://explorer.flame.dawn-1.astria.org) and
search for your Flame address to see your transactions.

On the account page you can view your TIA balance directly. To view your USDC
balance, select the `Tokens` tab.
