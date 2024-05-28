
### Install the latest [astria cli](https://github.com/astriaorg/astria/releases/tag/cli-v0.2.2)

::: code-group

  ```bash [ARM Mac]
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-aarch64-apple-darwin.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ```

  ```bash [X86_64 Mac]
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-apple-darwin.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ```

  ```bash [x86_64 Linux]
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-unknown-linux-gnu.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ```
  
  ```bash [From Source]
  cargo install astria-cli --git=https://github.com/astriaorg/astria --tag=cli-v0.3.1 --locked
  ```

:::

<!-- <Tabs>
  <TabItem value="ARM Mac" label="ARM Mac" default>

  ```bash
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-aarch64-apple-darwin.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ```

  </TabItem>
  <TabItem value="X86_64 Mac" label="X86_64 Mac">

  ```bash
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-apple-darwin.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ``` 

  </TabItem>
  <TabItem value="x86_64 Linux" label="x86_64 Linux">

  ```bash
  curl -L https://github.com/astriaorg/astria/releases/download/cli-v0.3.1/astria-cli-x86_64-unknown-linux-gnu.tar.gz > astria-cli.tar.gz
  tar -xvzf astria-cli.tar.gz
  mv astria-cli /usr/local/bin/
  ```

  </TabItem>
   <TabItem value="From Source" label="From Source">

  ```bash
  cargo install astria-cli --git=https://github.com/astriaorg/astria --tag=cli-v0.3.1 --locked
  ```

  </TabItem>
</Tabs> -->

You'll also need to install the following tools:

:::warning
There is a bug in the latest Docker desktop release for MacOS  
Please install the following release: [https://docs.docker.com/desktop/release-notes/#4252](https://docs.docker.com/desktop/release-notes/#4252)  
For more details see [here](https://github.com/docker/for-mac/issues/7100)
:::
