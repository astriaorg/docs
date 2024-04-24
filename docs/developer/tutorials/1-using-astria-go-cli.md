# Overview

This guide will walk you through deploying a rollup full node locally against
both local and remote sequencer with the Astria stack using the Astria CLI.

See the code [here](https://github.com/astriaorg/astria-cli-go).

## Download the CLI

### Using curl

```bash
# download the binary for your platform, e.g. macOS silicon
curl -L https://github.com/astriaorg/astria-cli-go/releases/download/v0.7.0/astria-go-v0.7.0-darwin-arm64.tar.gz \
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

## Setup a Geth Rollup

Requires `Go`, `just`, and `Foundry`:

- Go: https://go.dev/doc/install
- just: https://github.com/casey/just
- Foundry: https://book.getfoundry.sh/getting-started/installation

```bash
git clone git@github.com:astriaorg/go-ethereum.git
cd go-etherium
git checkout local-dev
just build
```

Create a new genesis account for your Geth rollup:

```bash
cast w new
```

Open the `geth-genesis-local.json` file in your Geth repo and update the
`"alloc"` account with your new one:

```json
   "alloc": {
        "<you new address>": { "balance": "300000000000000000000" }
    }
```

You will use the private key for your new account with the [test
transactions](#test-transactions) later on.

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

If you need to restart the rollup, you can use:

```bash
# in go-etherium dir
just clean-restart
```

### Start the Local Astria Sequencer

```bash
astria-go dev init
astria-go dev run --local
```

## Run a Local Rollup against a Remote Sequencer

### Initialize and Start Geth

Once you have [built Geth](#setup-a-geth-rollup), you will need to update some
additional genesis information to work with the remote sequencer. Run the
following using the Astira cli:

```bash
astria-go dev init
astria-go sequencer get-blockheight
```

Then, open the `geth-genesis-local.json` file and update the chain ID and rollup
name to something of your choosing, as well as updating the starting block
height for your rollup:

```json
    "config": {
        ...
        "chainId": <6 digit number>,
        "astriaRollupName": "<your rollup name>",
        "astriaSequencerInitialHeight": <sequencer block height>,
        ...
    },
```

:::tip
When starting a new rollup, it is always best to use the most recent height of
the remote Sequencer. The Astria Conductor will always start syncing the rollup
from the `"astriaSequencerInitialHeight"` provided. Using older block heights
will cause your rollup to sync potentially millions of blocks that have no
relevant data for your rollup.
:::

Then initialized and start Geth:

```bash
# in go-etherium dir
just init
just run
```

If you need to restart the rollup, you can use

```bash
# in go-etherium dir
just clean-restart
```

## Setup and run the Local Astria components to communicate with the Remote Sequencer

When running against the remote sequencer, you will also need to create a new
sequencer account.

```bash
astria-go dev init
astria-go sequencer create-account
```

Navigate to the `~/.astria` directory. If you have run the commands shown above, you should find a `default` directory.

Open the `/.astria/default/config-remote/.env` file and update the following
environment variables. Use the same rollup name you used for setting up Geth
above, and the private key from the sequencer account you just created.

```bash
ASTRIA_COMPOSER_ROLLUPS="<your rollup name>::ws://127.0.0.1:8546"
ASTRIA_COMPOSER_PRIVATE_KEY="<sequencer account private key>"
```

You can then use the [Sequencer Faucet](https://faucet.sequencer.dusk-4.devnet.astria.org/) to fund the account you just created using the account address.

Use the following command to run the local Astria components against the remote
sequencer:

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

Open the .env and update the chain id and private key. The private key used here
should be the private key for the account you used when [setting up
geth](#setup-a-geth-rollup) previously:

```bash
# this value should be the same as what you used for configuring Geth above
CHAIN_ID=<6 digit number>
PRIVATE_KEY=<your account private key>
```

Save the file and then run:

```rust
just generate-transactions
```

If everything worked correctly you see the transactions going through in both
the `forge` script and in the `conductor` and `composer` windows in the go cli.

:::note
These test transactions should work if you are running everything locally with
`astria-go dev run --local` or if you are running against a remote sequencer
with `astria-go dev run --remote`. If test transactions are not going through
when running remote, the first thing to check would be the sequencer account you
created is funded and configured correctly for use with the Composer.
:::
