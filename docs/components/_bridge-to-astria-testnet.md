<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [From Celestia]
celestia-appd tx ibc-transfer transfer \
    transfer \
    channel-160 \
    $ASTRIA_ADDRESS \
    1000000utia \
    --fees=420utia \
    --from $CELESTIA_KEY_NAME \
    --node=https://rpc-mocha.pops.one:443 \
    --chain-id mocha-4 \
    --packet-timeout-height 0-0
```

```bash [From Noble]
nobled tx ibc-transfer transfer \
    transfer \
    channel-232 \
    $ASTRIA_ADDRESS \
    1000000uusdc \
    --from $NOBLE_KEY_NAME \
    --node https://noble-testnet-rpc.polkachu.com:443 \
    --chain-id grand-1 \
    --packet-timeout-height 0-0
```

```bash [From Stride]
strided tx ibc-transfer transfer \
    transfer \
    channel-53 \
    $ASTRIA_ADDRESS \
    "100000stutia" \
    --chain-id="stride-testnet-1" \
    --from=$STRIDE_KEY_NAME \
    --node=https://stride-testnet-rpc.polkachu.com:443 \
    --packet-timeout-height "0-0" \
    --fees=500ustrd
```

:::

<!-- <Tabs>
  <TabItem value="From Celestia" label="From Celestia"> </TabItem>
  <TabItem value="From Noble" label="From Noble"> </TabItem>
  <TabItem value="From Stride" label="From Stride"> </TabItem>
</Tabs> -->
