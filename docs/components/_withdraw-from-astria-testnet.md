<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [To Celestia]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$CELESTIA_ADDRESS \
    --source-channel channel-0 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/ \
    --sequencer.chain-id dawn-1 \
    --asset transfer/channel-0/utia \
    --fee-asset transfer/channel-0/utia
```

```bash [To Noble]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$NOBLE_ADDRESS \
    --source-channel channel-1 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/ \
    --sequencer.chain-id dawn-1 \
    --asset transfer/channel-1/uusdc \
    --fee-asset transfer/channel-0/utia
```

```bash [To Stride]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$STRIDE_ADDRESS \
    --source-channel channel-2 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/ \
    --sequencer.chain-id dawn-1 \
    --asset transfer/channel-3/stutia \
    --fee-asset transfer/channel-0/utia
```

:::

<!-- <Tabs>
  <TabItem value="To Celestia" label="To Celestia"> </TabItem>
  <TabItem value="To Noble" label="To Noble"> </TabItem>
  <TabItem value="To Stride" label="To Stride"> </TabItem>
</Tabs> -->
