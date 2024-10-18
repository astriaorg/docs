<!-- markdownlint-disable MD041 MD013-->

::: code-group
```bash [ARM Mac]

curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-aarch64-apple-darwin.tar.gz > astria-cli.tar.gz
tar -xvzf astria-cli.tar.gz
mv astria-cli /usr/local/bin/
```

```bash [X86_64 Mac]
curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-x86_64-apple-darwin.tar.gz > astria-cli.tar.gz
tar -xvzf astria-cli.tar.gz
mv astria-cli /usr/local/bin/
```

```bash [x86_64 Linux]
curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-x86_64-unknown-linux-gnu.tar.gz > astria-cli.tar.gz
tar -xvzf astria-cli.tar.gz
mv astria-cli /usr/local/bin/
```

```bash [From Source]
cargo install astria-cli --git=https://github.com/astriaorg/astria --tag=cli-v0.5.0 --locked
```

:::

<!-- <Tabs>
  <TabItem value="ARM Mac" label="ARM Mac" default> </TabItem>
  <TabItem value="X86_64 Mac" label="X86_64 Mac"> </TabItem>
  <TabItem value="x86_64 Linux" label="x86_64 Linux"> </TabItem>
  <TabItem value="From Source" label="From Source"> </TabItem>
</Tabs> -->
