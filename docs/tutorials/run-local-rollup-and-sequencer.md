# Run a Local Rollup and Sequencer

This guide will walk you through running a local Geth rollup against the Astria
sequencer, using the `astria-go` cli to run the required components of the
Astria stack locally on your machine.

## Setup an `astria-geth` Rollup

`astria-geth` is a fork of `go-ethereum` modified to work with
the Astria sequencing layer.

View the source code
[here](https://github.com/astriaorg/astria-geth).

Requires `Go`, `just`, `make`, and `Foundry`:

- [Go](https://go.dev/doc/install) - specifically Go 1.21
- [just](https://github.com/casey/just)
- [make](https://www.gnu.org/software/make/)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)

Open a new terminal window and clone and build Geth:

<!--@include: ../../components/_clone-build-astria-geth.md-->

Create a new genesis account for your Geth rollup:

```bash
cast w new
```

Open the `dev/geth-genesis-local.json` file in the `astria-geth` repo and update
the `"alloc"` account with the new address you just created, as well as updating
the `"chainId"` and `"astriaRollupName"` to something of your choosing:

```json{4-5,8}
{
    "config": {
        ...
        "chainId": <6 digit number>,
        "astriaRollupName": "<your rollup name>",
        ...
        "alloc": {
            "<your new address>": { "balance": "300000000000000000000" }
        }
    }
}
```

You will use the private key for your new account to send [test
transactions](./test-transactions.md) later on.

## Start Geth

In your Geth terminal window, run the following to initialize and run the Geth rollup:

```bash
just -f dev/justfile init
just -f dev/justfile run
```

If you need to restart the rollup, you can stop the program with `Ctrl+C` and
restart with:

```bash
just -f dev/justfile run
```

If you need to restart the rollup and want to also clear the state data, you can
use:

```bash
just -f dev/justfile clean-restart
```

## Configure and Start the Local Astria Sequencer

Open a new terminal window and initialize the cli:

```bash
astria-go dev init
```

Navigate to the `~/.astria` directory. If you have run the commands shown above,
you should find a `default` directory.

Open the `~/.astria/default/networks-config.toml` file and update the
`rollup_name` variable in the `[local]` sections using the same
`"astriaRollupName"` you used when [setting up your astria-geth
 rollup](#setup-an-astria-geth-rollup).

```toml{5}
[networks.local]
sequencer_chain_id = 'sequencer-test-chain-0'
sequencer_grpc = 'http://127.0.0.1:8080'
sequencer_rpc = 'http://127.0.0.1:26657'
rollup_name = '<your rollup name>'
default_denom = 'ntia'
```

::: tip

You can perform the above steps using the following commands. `NEW_NAME` should
match the `"astriaRollupName"` in your `dev/geth-genesis-local.json`:

```shell
export NEW_NAME="my-new-chain"
cd ~/.astria/default/
sed -i '' '/\[networks\.local\]/,/^$/ s/rollup_name = .*/rollup_name = "'"$NEW_NAME"'"/' ~/.astria/default/networks-config.toml
```

:::

Use the cli to run a local Astria Sequencer.

```bash
astria-go dev run --network local
```

:::tip
When running an Astria sequencer using the cli, the `--network local` setting is
the default. `astria-go dev run` is effectively an alias for `astria-go dev run
--network local`.
:::

When running the Astria stack locally, you will see a TUI that displays the logs
of the Astria Sequencer, the underlying Cometbft node, the Astria Conductor, and
Astria Composer:
![Running a local sequencer in the Astria
cli](./assets/dusk-10-go-cli-local-sequencer.png)

## Test your Rollup

To test that your rollup and the sequencer are configured and running correctly,
you can follow the [Test Transactions instructions here](./test-transactions.md).
