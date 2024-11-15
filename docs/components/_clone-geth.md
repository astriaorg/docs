<!-- markdownlint-disable MD041 -->

::: code-group

```bash [SSH]
git clone git@github.com:astriaorg/astria-geth.git
cd astria-geth
git checkout tags/v1.0.0
just -f dev/justfile build

# You can move the binary to a location in your PATH if you'd like
mv ./build/bin/astria-geth /usr/local/bin/
astria-geth version
```

```bash [HTTPS]
git clone https://github.com/astriaorg/astria-cli-go.git
cd astria-geth
git checkout tags/v1.0.0
just -f dev/justfile build

# You can move the binary to a location in your PATH if you'd like
mv ./build/bin/astria-geth /usr/local/bin/
astria-geth version
```

:::

<!-- <Tabs>
  <TabItem value="SSH" label="SSH"> </TabItem>
  <TabItem value="HTTPS" label="HTTPS" default> </TabItem>
</Tabs> -->
