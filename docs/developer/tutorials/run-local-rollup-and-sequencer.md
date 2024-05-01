# Run a Local Rollup and Sequencer

This guide will walk you through running a local Geth rollup against the Astria
sequencer, using the `astria-go` cli to run the required components of the
Astria stack locally on your machine.

## Setup a Geth Rollup

Requires `Go`, `just`, and `Foundry`:

- Go: https://go.dev/doc/install
- just: https://github.com/casey/just
- Foundry: https://book.getfoundry.sh/getting-started/installation

Open a new terminal window and clone and build Geth:

```bash
git clone git@github.com:astriaorg/astria-geth.git
cd astria-geth
git checkout local-dev
just build
```

Create a new genesis account for your Geth rollup:

```bash
cast w new
```

Open the `geth-genesis-local.json` file in your Geth repo and update the
`"alloc"` account with the new address you just created, as well as updating the
`"chainId"` and `"astriaRollupName"` to something of your choosing:

```json
{
    "config": {
        "chainId": <6 digit number>,
        ...
        "astriaRollupName": "<your rollup name>",
        ...
        "alloc": {
            "<your new address>": { "balance": "300000000000000000000" }
        }
    }
}
```

You will use the private key for your new account, and the `"chainId"` you chose,
with the [test transactions](./test-transactions.md) later on.

<!-- ## Download and Build the Messenger Rollup

tbd -->

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

## Start the Local Astria Sequencer

Open a new terminal window and initialize and run a local Astria sequencer using
the cli:

```bash
astria-go dev init
astria-go dev run
```

:::tip
When running an Astria sequencer using the cli, the `--local` setting is the
default. `astria-go dev run` is effectively an alias for `astria-go dev run --local`.
:::

When running the Astria stack locally, you will see a TUI that displays the logs
of the Astria Sequencer, the underlying Cometbft node, the Astria Conductor, and
Astria Composer:
![Running a local sequencer in the Astria
cli](./assets/go-cli-local-sequencer.png)

## Test your Rollup

To test that your rollup and the sequencer are configured and running correctly,
you can follow the [Test Transactions instructions here](./test-transactions.md).
