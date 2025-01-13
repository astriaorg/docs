<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [TIA]
astria-cli sequencer bridge-lock astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-0/utia
```

```bash [USDC]
astria-cli sequencer bridge-lock astria1eg8hhey0n4untdvqqdvlyl0e7zx8wfca48kglh \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-1/uusdc
```

```bash [milkTIA]
astria-cli sequencer bridge-lock astria1kgxhyhvynhcwwrylkzzx6q3a8rn3tuvasxvuy8 \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.astria.org/ \
    --fee-asset=transfer/channel-0/utia\ \
    --asset=transfer/channel-2/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA
```

```bash [stTIA]
astria-cli sequencer bridge-lock astria1dllx9d9karss9ca8le25a4vqhf67a67d5d4l6r \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-3/stutia
```

```bash [dTIA]
astria-cli sequencer bridge-lock astria15juwcclg07xs38757q257evltequawcejzzs4l \
    --amount 10000 \
    --destination-chain-address $FLAME_ADDRESS \
    --private-key $PRIV_KEY \
    --sequencer.chain-id astria \
    --sequencer-url https://rpc.astria.org/ \
    --fee-asset=transfer/channel-0/utia \
    --asset=transfer/channel-4/factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia
```

:::

<!-- <Tabs>
  <TabItem value="TIA" label="TIA"> </TabItem>
  <TabItem value="USDC" label="USDC"> </TabItem>
  <TabItem value="milkTIA" label="milkTIA"> </TabItem>
  <TabItem value="stTIA" label="stTIA"> </TabItem>
</Tabs> -->
