<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [From Celestia]
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

```bash [From Noble]
nobled tx ibc-transfer transfer \
    transfer \
    channel-232 \
    astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="grand-1" \
    --from="$NOBLE_KEY_NAME" \
    --node=https://noble-testnet-rpc.polkachu.com:443 \
    --packet-timeout-height 0-0
```

:::

<!-- <Tabs>
  <TabItem value="From Celestia" label="From Celestia"> </TabItem>
  <TabItem value="From Noble" label="From Noble"> </TabItem>
</Tabs> -->
