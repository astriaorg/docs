<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [Astria]
astria-cli sequencer balance get $ASTRIA_ADDRESS --sequencer-url https://rpc.astria.org/
```

```bash [Celestia]
celestia-appd query bank balances $CELESTIA_ADDRESS --node=https://celestia-rpc.polkachu.com:443 --chain-id celestia
```

```bash [Noble]
nobled query bank balances $NOBLE_ADDRESS --node https://noble-rpc.polkachu.com:443
```

```bash [Osmosis]
osmosisd query bank balances $OSMOSIS_ADDRESS --node https://osmosis-rpc.polkachu.com:443
```

```bash [Stride]
strided query bank balances $STRIDE_ADDRESS --node https://stride-rpc.polkachu.com:443
```

```bash [Neutron]
neutrond query bank balances $NEUTRON_ADDRESS --node https://neutron-rpc.polkachu.com:443
```

```bash [Flame]
cast balance --rpc-url https://rpc.flame.astria.org $FLAME_ADDRESS
```

:::

<!-- <Tabs>
  <TabItem value="Astria" label="Astria"> </TabItem>
  <TabItem value="Celestia" label="Celestia"> </TabItem>
  <TabItem value="Noble" label="Noble"> </TabItem>
  <TabItem value="Stride" label="Stride"> </TabItem>
  <TabItem value="Neutron" label="Neutron"> </TabItem>
  <TabItem value="Flame" label="Flame"> </TabItem>
</Tabs> -->
