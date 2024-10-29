<!-- markdownlint-disable MD041 MD013 -->

::: code-group

```bash [SSH]
git clone git@github.com:noble-assets/noble.git
cd noble
git fetch --all
git checkout v8.0.0-rc.2
make build
cp build/nobled /usr/local/bin/nobled
```

```bash [HTTP]
git clone https://github.com/noble-assets/noble.git
cd noble
git fetch --all
git checkout v8.0.0-rc.2
make build
cp build/nobled /usr/local/bin/nobled
```

:::

<!-- <Tabs>
  <TabItem value="SSH" label="SSH"> </TabItem>
  <TabItem value="HTTP" label="HTTP"> </TabItem>
</Tabs> -->
