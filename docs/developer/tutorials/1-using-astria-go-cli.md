# Overview

This guide will walk you through deploying a rollup full node locally against both local and remote sequencer with the Astria stack using the Astria CLI.

## Download the CLI

### Using curl

```bash
# download the binary for your platform, e.g. macOS silicon
curl -L https://github.com/astriaorg/astria-cli-go/releases/download/v0.4.0/astria-cli-v0.3.0-darwin-arm64.tar.gz \
  --output astria-go.tar.gz
# extract the binary
tar -xzvf astria-go.tar.gz
# run the binary and check version
./astria-go version

# you can move the binary to a location in your PATH if you'd like
mv astria-go /usr/local/bin/
astria-go version
```

### Build from Source

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

## Download and Build Geth

Requires `Go` and `just`:

- Go: https://go.dev/doc/install
- just: https://github.com/casey/just

```bash
git clone git@github.com:astriaorg/go-ethereum.git
cd go-etherium
git checkout local-dev
just build
```

<!-- ## Download and Build the Messenger Rollup

tbd -->

## Run a Local Rollup and a Local Sequencer

### Start Geth

In one terminal window, start Geth:

```bash
# in go-etherium dir
just init
just run
```

If you need to restart the rollup, you can use

```bash
just clean-restart
```

### Start the Local Astria Sequencer

```bash
astria-go dev init
astria-go dev run --local
```

## Run a Local Rollup against a Remote Sequencer

### Initialize and Start Geth

Once you have pulled the Geth repo, you will need to update some genesis information. Open the `geth-gensis-local.json` file and update the chain ID and rollup name to something of your choosing:

```json
    "config": {
        "chainId": <6 digit number>,
				...
        "astriaRollupName": "<rollup name>"
    },
```

Then initialized and start Geth:

```bash
# in go-etherium dir
just init
just run
```

If you need to restart the rollup, you can use

```bash
just clean-restart
```

## Setup and run the Local Astria components to communicate with the Remote Sequencer

```bash
astria-go dev init
astria-go sequencer get-blockheight # NOTE - this command doesn't exist yet
astria-go sequencer create-account
```

Navigate to the `~/.astria` directory. If you have run the commands shown above, you should find a `default` directory.

Open the `/.astria/default/config-remote/.env` file and update the following environment variables. Use the same rollup name you used for setting up Geth above, and the block height and private key from the other two commands.

```bash
ASTRIA_CONDUCTOR_INITIAL_SEQUENCER_BLOCK_HEIGHT=<the value found above>
ASTRIA_CONDUCTOR_CHAIN_ID="<your rollup name>"
ASTRIA_COMPOSER_ROLLUPS="<your rollup name>::ws://127.0.0.1:8546"
ASTRIA_COMPOSER_PRIVATE_KEY="<sequencer account private key>"
```

You can then use the [Sequencer Faucet](https://faucet.sequencer.dusk-3.devnet.astria.org/) to fund the account you just created using the account address.

Then run the local Astria components that will talk to the remote sequencer as follows:

```bash
astria-go dev run --remote
```

## Test Transactions

In a new terminal window, clone and configure the evm test transactions repo:

```rust
git clone --recurse-submodules git@github.com:astriaorg/astria-web3.git
cd astria-web3
git checkout local-evm
cd packages/evm-test-data/
forge install
cp .env.example .env
```

Open the .env and update the chain id:

```rust
# this value should be the same as what you used for configuring Geth above
CHAIN_ID=<6 digit number>
```

Save the file and then run:

```rust
just generate-transactions
```

If everything worked correctly you see the transactions going through in both the `forge` script and in the `conductor` and `composer` windows in the go cli.