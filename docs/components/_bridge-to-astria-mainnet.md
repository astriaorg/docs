<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [From Celestia]
celestia-appd tx ibc-transfer transfer \
    transfer \
    channel-48 \
    $ASTRIA_ADDRESS \
    1000000utia \
    --fees=420utia \
    --from $CELESTIA_KEY_NAME \
    --node=https://celestia-rpc.polkachu.com:443 \
    --chain-id celestia \
    --packet-timeout-height 0-0
```

```bash [From Noble]
nobled tx ibc-transfer transfer \
    transfer \
    channel-104 \
    $ASTRIA_ADDRESS \
    1000000uusdc \
    --from $NOBLE_KEY_NAME \
    --node https://noble-rpc.polkachu.com:443 \
    --chain-id noble-1 \
    --packet-timeout-height 0-0
```

```bash [From Osmosis]
osmosisd tx ibc-transfer transfer \
    transfer \
    channel-85486 \
    $ASTRIA_ADDRESS \
    1000000uusdc \
    --from $OSMOSIS_KEY_NAME \
    --node https://osmosis-rpc.polkachu.com:443 \
    --chain-id osmosis-1 \
    --packet-timeout-height 0-0
```

```bash [From Stride]
strided tx ibc-transfer transfer \
    transfer \
    channel-285 \
    $ASTRIA_ADDRESS \
    "100000stutia" \
    --chain-id="stride-1" \
    --from=$STRIDE_KEY_NAME \
    --node=https://stride-rpc.polkachu.com:443 \
    --packet-timeout-height "0-0" \
    --fees=500ustrd
```

```bash [From Neutron]
strided tx ibc-transfer transfer \
    transfer \
    channel-6236 \
    $ASTRIA_ADDRESS \
    "100000factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia" \
    --chain-id="neutron-1" \
    --from=$NEUTRON_KEY_NAME \
    --node=https://stride-rpc.polkachu.com:443 \
    --packet-timeout-height "0-0" \
    --fees=500untrn \
    --gas=310000
```
:::

<!-- <Tabs>
  <TabItem value="From Celestia" label="From Celestia"> </TabItem>
  <TabItem value="From Noble" label="From Noble"> </TabItem>
  <TabItem value="From Osmosis" label="From Osmosis"> </TabItem>
  <TabItem value="From Stride" label="From Stride"> </TabItem>
</Tabs> -->
