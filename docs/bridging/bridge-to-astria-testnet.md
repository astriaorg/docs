# Bridging to the Astria `dawn` Testnet Sequencer

Bridging from Celestia and Nobel testnets to the Astria `dawn` testnet.

You can export the following to make the commands below easily copy and
pastable.

```bash
export ASTRIA_ADDRESS="<your-astria-address>"
export PRIV_KEY="<your-astria-address-private-key>"
export CELESTIA_KEY_NAME="<name-of-your-celestia-key>"
export NOBEL_KEY_NAME="<name-of-your-nobel-key>"
export NOBLE_ADDRESS="<your-nobel-address>"
export CELESTIA_ADDRESS="<your-celestia-address>"
```

## Bridge from Celestia to Astria

```bash
celestia-appd tx ibc-transfer transfer transfer channel-160 $ASTRIA_ADDRESS 1000000utia --fees=420utia --from $CELESTIA_KEY_NAME --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4
```

## Bridge from Noble to Astria

```bash
nobled tx ibc-transfer transfer transfer channel-232 $ASTRIA_ADDRESS 1000000uusdc --from $NOBEL_KEY_NAME --node https://noble-testnet-rpc.polkachu.com:443 --chain-id grand-1
```

## Check Your Balances on Astria

```bash
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dawn-1.astria.org/
```

## Bridge from Astria to Celestia

```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$CELESTIA_ADDRESS --source-channel channel-0 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/ --sequencer.chain-id dawn-1 --asset transfer/channel-0/utia --fee-asset transfer/channel-0/utia
```

## Bridge from Astria to Nobel

```bash
astria-cli sequencer ics20-withdrawal --amount 1000 --destination-chain-address=$NOBLE_ADDRESS --source-channel channel-1 --private-key=$PRIV_KEY --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/ --sequencer.chain-id dawn-1 --asset transfer/channel-1/uusdc --fee-asset transfer/channel-0/utia
```

## Check your Balances on Celestia and Nobel

### Nobel Balance

```bash
nobled query bank balances $NOBLE_ADDRESS --node https://noble-testnet-rpc.polkachu.com:443

```

### Celestia Balance

```bash
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4

```
