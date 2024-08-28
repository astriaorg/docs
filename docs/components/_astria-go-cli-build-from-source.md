
::: code-group

```bash [SSH]
git clone git@github.com:astriaorg/astria-cli-go.git
cd astria-cli-go
just build-cli

# run the cli in the repo directory
just run version

# OR you can move the binary to a location in your PATH if you'd like
mv ./bin/astria-go /usr/local/bin/
astria-go version
```

```bash [HTTPS]
git clone https://github.com/astriaorg/astria-cli-go.git
cd astria-cli-go
just build-cli

# run the cli in the repo directory
just run version

# OR you can move the binary to a location in your PATH if you'd like
mv ./bin/astria-go /usr/local/bin/
astria-go version
```

:::

<!-- <Tabs>
  <TabItem value="SSH" label="SSH"> </TabItem>
  <TabItem value="HTTPS" label="HTTPS" default> </TabItem>
</Tabs> -->
