<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [To Celestia]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$CELESTIA_ADDRESS \
    --source-channel channel-0 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.astria.org/ \
    --sequencer.chain-id astria \
    --asset transfer/channel-0/utia \
    --fee-asset transfer/channel-0/utia
```

```bash [To Noble]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$NOBLE_ADDRESS \
    --source-channel channel-1 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.astria.org/ \
    --sequencer.chain-id astria \
    --asset transfer/channel-1/uusdc \
    --fee-asset transfer/channel-0/utia
```

```bash [To Osmosis]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$OSMOSIS_ADDRESS \
    --source-channel channel-2 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.astria.org/ \
    --sequencer.chain-id astria \
    --asset transfer/channel-2/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA \
    --fee-asset transfer/channel-0/utia
```

```bash [To Stride]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$STRIDE_ADDRESS \
    --source-channel channel-3 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.astria.org/ \
    --sequencer.chain-id astria \
    --asset transfer/channel-3/stutia\
    --fee-asset transfer/channel-0/utia
```

```bash [To Neutron]
astria-cli sequencer ics20-withdrawal \
    --amount 1000 \
    --destination-chain-address=$NEUTRON_ADDRESS \
    --source-channel channel-4 \
    --private-key=$PRIV_KEY \
    --sequencer-url=https://rpc.astria.org/ \
    --sequencer.chain-id astria \
    --asset transfer/channel-4/factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia \
    --fee-asset transfer/channel-0/utia
```

:::

<!-- <Tabs>
  <TabItem value="To Celestia" label="To Celestia"> </TabItem>
  <TabItem value="To Noble" label="To Noble"> </TabItem>
  <TabItem value="To Osmosis" label="To Osmosis"> </TabItem>
  <TabItem value="To Stride" label="To Stride"> </TabItem>
</Tabs> -->
