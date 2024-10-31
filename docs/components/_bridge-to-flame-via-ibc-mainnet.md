<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [From Celestia]
celestia-appd tx ibc-transfer transfer \
    transfer \
    channel-48 \
    astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p \
    "10000utia" \
    --fees=420utia \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="celestia" \
    --from="$CELESTIA_KEY_NAME" \
    --node=https://celestia-rpc.polkachu.com:443 \
    --packet-timeout-height 0-0
```

```bash [From Noble]
nobled tx ibc-transfer transfer \
    transfer \
    channel-104 \
    astriacompat1eg8hhey0n4untdvqqdvlyl0e7zx8wfcaz3l6wu \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="noble-1" \
    --from="$NOBLE_KEY_NAME" \
    --node=https://noble-rpc.polkachu.com:443 \
    --packet-timeout-height 0-0
```

```bash [From Osmosis]
osmosisd tx ibc-transfer transfer \
    transfer \
    channel-85486 \
    $ASTRIA_ADDRESS \
    1000000uusdc \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
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
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="stride-1" \
    --from=$STRIDE_KEY_NAME \
    --node=https://stride-rpc.polkachu.com:443 \
    --packet-timeout-height "0-0" \
    --fees=500ustrd
```

:::

<!-- <Tabs>
  <TabItem value="From Celestia" label="From Celestia"> </TabItem>
  <TabItem value="From Noble" label="From Noble"> </TabItem>
  <TabItem value="From Osmosis" label="From Osmosis"> </TabItem>
  <TabItem value="From Stride" label="From Stride"> </TabItem>
</Tabs> -->
