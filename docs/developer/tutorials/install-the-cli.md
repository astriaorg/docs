# Install the Astria CLI

The astria-go cli is a tool designed to make local rollup development as simple and dependency free as possible. It provides functionality to easily run the Astria stack and interact with the Sequencer.
## Download using Curl

<!--@include: ../../components/_astria-go-cli-install.md-->

View all releases [here](https://github.com/astriaorg/astria-cli-go/releases).

## Build from Source

This requires `Go` and `just` to be installed on your system.

- Go: https://go.dev/doc/install
- just: https://github.com/casey/just

```bash
git clone git@github.com:astriaorg/astria-cli-go.git
cd astria-cli-go
just build

# run the cli in the repo directory
just run "version"

# OR you can move the binary to a location in your PATH if you'd like
mv ./bin/astria-go /usr/local/bin/
astria-go version
```

## Available Commands

<!--@include: ../../components/_astria-go-cli-commands.md-->
