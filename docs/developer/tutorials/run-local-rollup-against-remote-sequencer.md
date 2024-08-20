# Run a Local Rollup against a Remote Sequencer

This guide will walk you through running a local Geth rollup against a remote Astria
sequencer, using the `astria-go` cli to run the required components of the
Astria stack locally on your machine.

## Setup a Geth Rollup

### Build Geth

Requires `Go`, `just`, and `Foundry`:

- Go: <https://go.dev/doc/install>
- just: <https://github.com/casey/just>
- Foundry: <https://book.getfoundry.sh/getting-started/installation>

Open a new terminal window and clone and build Geth.

```bash
git clone git@github.com:astriaorg/astria-geth.git
cd astria-geth
git checkout local-dev
just build
```

### Configure the Geth Genesis Information

Once you have built the Geth node, you will need to update some
additional genesis information to work with the remote sequencer.

Run the following using the Astira cli:

```bash
astria-go sequencer blockheight
```

Then, open the `geth-genesis-local.json` file and update the `chainId` and
`astriaRollupName` to something of your choosing, as well as updating
`astriaSequencerInitialHeight` using the block height from the previous command
to choose which sequencer block the first block of your rollup will be in:

Create a new genesis account for your Geth rollup:

```bash
cast w new
```

Also in the `geth-genesis-local.json` file, update the `"alloc"` account with
your new one:

```json
{
    "config": {
        ...
        "chainId": <6 digit number>,
        "astriaRollupName": "<your rollup name>",
        "astriaSequencerInitialHeight": <sequencer block height>,
        ...
        "alloc": {
            "<your new address>": { "balance": "300000000000000000000" }
        }
    }
}
```

Keep the `chainId` and `astriaRollupName` you chose on hand, as they will also
be needed for running the [test transactions](./test-transactions.md) and
[configuring the Astria composer](#configure-the-local-astria-components) later on.

:::tip
When starting a new rollup, it is always best to use the most recent height of
the remote Sequencer for your rollup's initial sequencer height. The Astria
Conductor will always start syncing the rollup from the
`"astriaSequencerInitialHeight"` provided. Using older block heights
will work but will cause your rollup to sync potentially millions of blocks that
have no relevant data for your new rollup.
:::

You will use the private key for your new account with the [test
transactions](./test-transactions.md) later on.

## Start Geth

In your Geth terminal window, run the following to initialize and run the Geth rollup:

```bash
# in astria-geth dir
just init
just run
```

If you need to restart the rollup, you can stop the program with `Ctrl+C` and
restart with:

```bash
just run
```

If you need to restart the rollup and want to also clear the state data, you can use:

```bash
# in astria-geth dir
just clean-restart
```

## Configure the Local Astria components

Open a new terminal window and initialize the cli:

```bash
astria-go dev init
```

When running against the remote sequencer, you will also need to create a new
sequencer account.

```bash
astria-go sequencer createaccount --insecure
```

Navigate to the `~/.astria` directory. If you have run the commands shown above,
you should find a `default` directory.

Open the `~/.astria/default/networks-config.toml` file and update the
`rollup_name` variable in the `[dusk]` sections using the same
`"astriaRollupName"` you used when [setting up your Geth
rollup](#setup-a-geth-rollup).

```toml
[dusk]
sequencer_chain_id = 'astria-dusk-8'
sequencer_grpc = 'https://grpc.sequencer.dusk-8.devnet.astria.org/'
sequencer_rpc = 'https://rpc.sequencer.dusk-8.devnet.astria.org/'
rollup_name = '<your rollup name>' # update this value
default_denom = 'nria'
```

Then open the `~/.astria/default/config/composer_dev_priv_key` and replace dev private
key in that file with your private key from the sequencer account you just
created. 

:::warning
If you skip updating the priv key the Astria services will still start correctly
but your Composer will not be able to write transactions to the sequencer.
:::

You can then use the [Sequencer
Faucet](https://faucet.sequencer.dusk-8.devnet.astria.org/) to fund the account
you just created using the account address.

## Run the local Astria components against the Remote Sequencer

Run the local Astria components against the remote sequencer:

```bash
astria-go dev run --network dusk
```

When running against the remote sequencer, you will see a TUI that displays the logs
of the Astria Conductor and Composer:
![Running against a remote sequencer using the Astria
cli](./assets/go-cli-remote-sequencer.png)

## Test your Rollup

To test that your rollup and the sequencer are configured and running correctly,
you can follow the [Test Transactions instructions
here](./test-transactions.md).
