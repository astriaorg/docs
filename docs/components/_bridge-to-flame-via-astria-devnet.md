<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [RIA]
astria-cli sequencer bridge-lock astria1yqdjnnmrp7w5ygwj0dkldsgzjhv5vcakp7yeu9 \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria-dusk-11 \
    --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org \
    --fee-asset=nria \
    --asset=nria
```

```bash [USDC]
astria-cli sequencer bridge-lock astria12saluecm8dd7hkutk83eavkl2p70lf5w7txezg \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria-dusk-11 \
    --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org \
    --fee-asset=nria \
    --asset=transfer/channel-2/uusdc
```

:::

<!-- <Tabs>
  <TabItem value="RIA" label="RIA"> </TabItem>
  <TabItem value="USDC" label="USDC"> </TabItem>
</Tabs> -->
