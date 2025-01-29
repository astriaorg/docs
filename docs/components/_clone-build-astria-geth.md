<!-- markdownlint-disable MD041 -->

::: code-group

```bash [SSH]
git clone git@github.com:astriaorg/astria-geth.git
cd astria-geth
just -f dev/justfile build
./build/bin/geth version
```

```bash [HTTPS]
git clone https://github.com/astriaorg/astria-cli-go.git
cd astria-geth
just -f dev/justfile build
./build/bin/geth version
```

:::

<!-- <Tabs>
  <TabItem value="SSH" label="SSH"> </TabItem>
  <TabItem value="HTTPS" label="HTTPS" default> </TabItem>
</Tabs> -->
