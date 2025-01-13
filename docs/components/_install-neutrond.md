<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [SSH]
git clone git@github.com:neutron-org/neutron.git
cd neutron
git fetch --all
git checkout v5.0.5
make build
cp build/nobled /usr/local/bin/nobled
```

```bash [HTTP]
git clone https://github.com/neutron-org/neutron.git
cd noble
git fetch --all
git checkout v5.0.5
make build
cp build/nobled /usr/local/bin/nobled
```

:::

<!-- <Tabs>
  <TabItem value="SSH" label="SSH"> </TabItem>
  <TabItem value="HTTP" label="HTTP"> </TabItem>
</Tabs> -->
