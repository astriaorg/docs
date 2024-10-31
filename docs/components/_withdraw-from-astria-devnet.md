<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [To Celestia]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$CELESTIA_ADDRESS \
    --source-channel channel-0 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.sequencer.dusk-11.devnet.astria.org \
    --sequencer.chain-id astria-dusk-11 \
    --asset transfer/channel-0/utia \
    --fee-asset nria
```

```bash [To Noble]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$NOBLE_ADDRESS \
    --source-channel channel-2 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.sequencer.dusk-11.devnet.astria.org \
    --sequencer.chain-id astria-dusk-11 \
    --asset transfer/channel-2/uusdc \
    --fee-asset nria
```

:::

<!-- <Tabs>
  <TabItem value="To Celestia" label="To Celestia"> </TabItem>
  <TabItem value="To Noble" label="To Noble"> </TabItem>
</Tabs> -->
