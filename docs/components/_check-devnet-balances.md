<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [Astria]
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.sequencer.dusk-11.devnet.astria.org/
```

```bash [Celestia]
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4
```

```bash [Flame]
cast balance --rpc-url https://rpc.flame.dusk-11.devnet.astria.org $FLAME_ADDRESS
```

```bash [Noble]
nobled query bank balances $NOBLE_ADDRESS --node https://noble-testnet-rpc.polkachu.com:443
```

```bash [Osmosis]
osmosisd query bank balances $OSMOSIS_ADDRESS --node https://osmosis-testnet-rpc.polkachu.com:443
```

```bash [Stride]
strided query bank balances $STRIDE_ADDRESS --node https://stride-testnet-rpc.polkachu.com:443
```

:::

<!-- <Tabs>
  <TabItem value="Astria" label="Astria"> </TabItem>
  <TabItem value="Celestia" label="Celestia"> </TabItem>
  <TabItem value="Flame" label="Flame"> </TabItem>
  <TabItem value="Noble" label="Noble"> </TabItem>
  <TabItem value="Stride" label="Stride"> </TabItem>
</Tabs> -->
