# Run a Local Rollup and Sequencer

This guide will walk you through running a local Geth rollup against the Astria
sequencer, using the `astria-go` cli to run the required components of the
Astria stack locally on your machine.

## Setup an `astria-geth` Rollup

### Clone and Build Astria Geth

`astria-geth` is a fork of `go-ethereum` modified to work with
the Astria sequencing layer.

View the source code
[here](https://github.com/astriaorg/astria-geth).

Requires `Go`, `just`, `make`, `Foundry`, and `jq`:

- [Go](https://go.dev/doc/install) - specifically Go 1.21
- [just](https://github.com/casey/just)
- [make](https://www.gnu.org/software/make/)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- [jq](https://jqlang.org/download/)

Open a new terminal window and clone and build Geth:

<!--@include: ../components/_clone-build-astria-geth.md-->

### CLI Configuration of the Astria-Geth Genesis

Create an account with `cast` and export the address and private key to env
vars.

```bash
eval $(cast w new --json | jq -r '@sh "export ADDRESS=\(.[:1][].address) PRIV_KEY=\(.[:1][].private_key)"')
```

You will use the private key for your new account to send [test
transactions](./test-transactions.md) later on as the same env var.

Set a rollup name, chain id, and starting balance:

```bash
export CHAIN_ID=<some 6 digit number>
export ROLLUP_NAME="<your rollup name>"
export STARTING_BALANCE=300000000000000000000
```

Once all env vars are set you can print their values for confirmation:

```bash
echo $ADDRESS
echo $PRIV_KEY
echo $CHAIN_ID
echo $ROLLUP_NAME
echo $STARTING_BALANCE
```

Update the genesis file:

```bash
jq --arg chain_id "$CHAIN_ID" \
   --arg rollup_name "$ROLLUP_NAME" \
   --arg address "$ADDRESS" \
   --arg starting_balance "$STARTING_BALANCE" \
   '.config.chainId = ($chain_id|tonumber) |
    .config.astriaRollupName = $rollup_name |
    .alloc = {($address): { "balance": $starting_balance }}' \
    ./dev/geth-genesis-local.json > temp.json && mv temp.json ./dev/geth-genesis-local.json
```

### Manually Update Astria-Geth Genesis

::: tip
You can skip this section if you have updated the genesis file using the
commands in the previous section.
:::

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

## Configure the Local Astria Sequencer

With Astria-Geth running, open a new terminal window to configure the local
sequencer.

### CLI Configuration of the Astria Sequencer

Initialize a new instance with the `astria-go` cli:

```bash
astria-go dev init
```

Export the rollup name. This *must* be the same as the rollup name you used
when [configuring the Astria-Geth
genesis](#cli-configuration-of-the-astria-geth-genesis).

```bash
export ROLLUP_NAME="<your rollup name>"
```

Update the rollup name for your sequencer instance:

```bash
astria-go dev setconfig rollupname $ROLLUP_NAME
```

### Manually Configure the Sequencer

::: tip
You can skip this section if you have initialized and updated the sequencer
config using the commands in the previous section.
:::

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

Open the `~/.astria/default/config/base-config.toml` and update the
`"astria_composer_rollups"` value to have your rollup name:

```toml
astria_composer_rollups = '<your rollup name>::ws://127.0.0.1:8546'
```

::: tip

You can perform the above steps using the following commands. `NEW_NAME` should
match the `"astriaRollupName"` in your `dev/geth-genesis-local.json`:

```shell
export NEW_NAME="my-new-chain"
export INSTANCE="default"
cd ~/.astria/$INSTANCE/
sed -i '' '/\[networks\.local\]/,/^$/ s/rollup_name = .*/rollup_name = "'"$NEW_NAME"'"/' \
    ./networks-config.toml
sed -i '' \
    's/\(astria_composer_rollups = '"'"'\)[^:]*::/\1'"$NEW_NAME"'::/g' \
    ./config/base-config.toml
```

:::

## Start the Sequencer

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
