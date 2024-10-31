<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [TIA]
astria-cli sequencer bridge-lock astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id dawn-1 \
    --sequencer-url https://rpc.sequencer.dawn-1.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-0/utia
```

```bash [USDC]
astria-cli sequencer bridge-lock astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id dawn-1 \
    --sequencer-url https://rpc.sequencer.dawn-1.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-1/uusdc
```

:::

<!-- <Tabs>
  <TabItem value="TIA" label="TIA"> </TabItem>
  <TabItem value="USDC" label="USDC"> </TabItem>
</Tabs> -->
