<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [From Noble]
nobled tx ibc-transfer transfer \
    transfer \
    channel-231 \
    astria12saluecm8dd7hkutk83eavkl2p70lf5w7txezg \
    "100000uusdc" \
    --memo="{\"rollupDepositAddress\":\"$FLAME_ADDRESS\"}" \
    --chain-id="grand-1" \
    --from="grand-test-1" \
    --node=https://noble-testnet-rpc.polkachu.com:443
    --packet-timeout-height 0-0
```

:::

<!-- <Tabs>
  <TabItem value="From Noble" label="From Noble"> </TabItem>
</Tabs> -->
