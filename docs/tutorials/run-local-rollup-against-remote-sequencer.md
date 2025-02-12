# Run a Local Rollup against a Remote Sequencer

This guide will walk you through running a local Geth rollup against a remote Astria
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

Open a new terminal window and clone and build Geth.

<!--@include: ../components/_clone-build-astria-geth.md-->

### CLI Configuration of Astria-Geth Genesis

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

Get the current block height of the Astria sequencer to properly configure that
rollup:

```bash
export BLOCK_HEIGHT=$(astria-go sequencer blockheight --network dawn --json | jq -r '.blockheight')
```

Once all env vars are set you can print their values for confirmation:

```bash
echo $ADDRESS
echo $PRIV_KEY
echo $CHAIN_ID
echo $ROLLUP_NAME
echo $STARTING_BALANCE
echo $BLOCK_HEIGHT
```

Update the genesis file:

```bash
jq --arg chain_id "$CHAIN_ID" \
   --arg rollup_name "$ROLLUP_NAME" \
   --arg address "$ADDRESS" \
   --arg starting_balance "$STARTING_BALANCE" \
   --arg initial_seq_height "$BLOCK_HEIGHT" \
   '.config.chainId = ($chain_id|tonumber) |
    .config.astriaRollupName = $rollup_name |
    .config.astriaSequencerInitialHeight = $initial_seq_height |
    .alloc = {($address): { "balance": $starting_balance }}' \
    ./dev/geth-genesis-local.json > temp.json && mv temp.json ./dev/geth-genesis-local.json
```

### Manually Configure the Geth Genesis Information

::: tip
You can skip this section if you have updated the genesis file using the
commands in the previous section.
:::

Once you have built the Geth node, you will need to update some
additional genesis information to work with the remote sequencer.

Run the following using the Astira cli:

```bash
astria-go sequencer blockheight --network dawn
```

Then, open the `dev/geth-genesis-local.json` file and update the `chainId` and
`astriaRollupName` to something of your choosing, as well as updating
`astriaSequencerInitialHeight` using the block height from the previous command
to choose which sequencer block the first block of your rollup will be in:

Create a new genesis account for your Geth rollup:

```bash
cast w new
```

Also in the `dev/geth-genesis-local.json` file, update the `"alloc"` account with
your new one:

```json{4-6,9}
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
[configuring the Astria composer](#configure-the-local-astria-services) later
on.

:::tip
When starting a new rollup, it is always best to use the most recent height of
the remote Sequencer for your rollup's initial sequencer height. The Astria
Conductor will always start syncing the rollup from the
`"astriaSequencerInitialHeight"` provided. Using older block heights
will work but will cause your rollup to sync potentially millions of blocks that
have no relevant data for your new rollup.
:::

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

## Configure the Local Astria Services

With Astria-Geth running, open a new terminal window to configure the local
services. Specifically, the Astria Conductor and Composer.

### CLI Configuration of the Local Services

Initialize a new instance with the `astria-go` cli.

```bash
astria-go dev init
```

Export the rollup name. This *must* be the same as the rollup name you used
when [configuring the Astria-Geth
genesis](#cli-configuration-of-astria-geth-genesis).

```bash
export ROLLUP_NAME="<your rollup name>"
```

Update the rollup name for your sequencer instance:

```bash
astria-go dev setconfig rollupname $ROLLUP_NAME
```

When running against the remote sequencer, you will also need to create a new
sequencer account to fund the Composer so that it can act as a gas station for
your rollup. The following commands will create a new sequencer account and
update the `composer_dev_priv_key` file in your `default` instance for use with
the Composer.

```bash
eval $(astria-go sequencer createaccount --insecure --json | jq -r '@sh "export COMPOSER_DEV_ADDRESS=\(.address) COMPOSER_DEV_PRIV_KEY=\(.private_key)"')
echo "$COMPOSER_DEV_PRIV_KEY" > ~/.astria/default/config/composer_dev_priv_key
echo "\nFund this address with the sequencer faucet: $COMPOSER_DEV_ADDRESS\n"
```

:::warning
If you skip updating the priv key the Astria services will still start correctly
but your Composer will not be able to submit transactions to the sequencer.
:::

You can then use the [Sequencer
Faucet](https://faucet.sequencer.dawn-1.astria.org/) to fund the account
you just created using the account address.

### Manually Configure the Local Services

::: tip
You can skip this section if you have initialized and updated the local services
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

When running against the remote sequencer, you will also need to create a new
sequencer account.

```bash
astria-go sequencer createaccount --insecure
```

Then open the `~/.astria/default/config/composer_dev_priv_key` and replace dev private
key in that file with your private key from the sequencer account you just
created.

:::warning
If you skip updating the priv key the Astria services will still start correctly
but your Composer will not be able to submit transactions to the sequencer.
:::

You can then use the [Sequencer
Faucet](https://faucet.sequencer.dawn-1.astria.org/) to fund the account
you just created using the account address.

## Run the local Astria services against the Remote Sequencer

Run the local Astria components against the remote sequencer:

```bash
astria-go dev run --network dawn
```

When running against the remote sequencer, you will see that the TUI only
displays the logs of the Astria Conductor and Composer:
![Running against a remote sequencer using the Astria
cli](./assets/dusk-10-go-cli-remote-sequencer.png)

## Test your Rollup

To test that your rollup and the sequencer are configured and running correctly,
you can follow the [Test Transactions instructions
here](./test-transactions.md).
