# Run a `noVM` Messenger Rollup on Astria

Rollups on Astria are virtual machine (VM) agnostic, which means that they can
function without relying on a VM — a concept we refer to as a **noVM rollup**.

Using [Astria's Execution API](../developer/apis.md#execution-apis), developers
can build rollups tailored to any application type that operates on
transactions, messages, and blocks.

The following tutorial demonstrates running a simplified noVM messenger rollup
app which users can interact with using [a cli](#install-the-rollup-cli) to
submit messages and access message history from the rollup.

View the code for the [`noVM-messenger` here](https://github.com/astriaorg/noVM-messenger).

## Prerequisites

You will need the following installed to complete the tutorial:

- [`astria-go` cli](../developer/astria-go/astria-go-installation.md#install-the-astria-go-cli)
- [Cargo and Rust](https://www.rust-lang.org/tools/install)
- [`astria-go`
  cli](https://docs.astria.org/developer/astria-go/astria-go-installation)
- [just](https://github.com/casey/just)

## Clone the `noVM-messenger` Rollup Repo

<!--@include: ../components/_clone-novm-messenger.md-->

## Configure the `astria-go` CLI for Running the `noVM` Rollup

### CLI Configuration

Create a new instance with the cli:

```bash
astria-go dev init --instance novm
```

Update the `tui-config.toml` using the following command:

```bash
cat << 'EOF' > ~/.astria/tui-config.toml
auto_scroll = true
wrap_lines = false
borderless = false
override_instance_name = 'novm'
cometbft_starts_minimized = false
conductor_starts_minimized = false
composer_starts_minimized = false
sequencer_starts_minimized = true
generic_starts_minimized = false
generic_start_position = 'after'
highlight_color = 'blue'
border_color = 'gray'
EOF
```

The previous step is optional but will make viewing the running rollup much
easier in the TUI.

Make sure you are in the `noVM-messenger` repo directory and then run the
following to add the noVM rollup binary as a new service of the `astria-go` TUI:

```bash
ROLLUP_PATH="$(pwd)/target/debug/chat-rollup"
cat << EOF >> ~/.astria/novm/networks-config.toml
[networks.local.services.rollup]
name = 'rollup'
version = 'v0.1.0'
download_url = ''
local_path = '${ROLLUP_PATH}'
args = []
EOF
```

Still in the `noVM-messenger` directory, use the following to copy the default
rollup genesis file in the instance config:

```bash
cp ./crates/chat-rollup/example.genesis.json ~/.astria/novm/config/rollup_genesis.json
```

Add the environment variables required for running the `noVM` rollup to the
`base-config.toml` for the instance:

```bash
cat << EOF >> ~/.astria/novm/config/base-config.toml
metrics_http_listener_addr = 'http://127.0.0.1:50053'
log = 'debug'
composer_addr = 'http://127.0.0.1:50052'
db_filepath = '~/.astria/novm/data/rollup_data'
genesis_filepath = '~/.astria/novm/config/rollup_genesis.json'
execution_grpc_addr = '0.0.0.0:50051'
force_stdout = 'true'
pretty_print = 'true'
no_otel = 'true'
no_metrics = 'true'
EOF
```

Update the rollup name in the rest of the `novm` instance config to
match the rollup name in your `rollup_genesis.json` file:

```bash
astria-go dev setconfig rollupname astria-chat --instance novm
```

Then update the env vars for Composer to communicate properly with the rollup:

On MacOS:

```bash
sed -i '' "s|.*astria_composer_grpc_addr.*|astria_composer_grpc_addr = '127.0.0.1:50052'|" ~/.astria/novm/config/base-config.toml
sed -i '' "s|.*astria_composer_rollups.*|astria_composer_rollups = ''|" ~/.astria/novm/config/base-config.toml
```

On Linux:

```bash
sed "s|.*astria_composer_grpc_addr.*|astria_composer_grpc_addr = '127.0.0.1:50052'|" ~/.astria/novm/config/base-config.toml
sed "s|.*astria_composer_rollups.*|astria_composer_rollups = ''|" ~/.astria/novm/config/base-config.toml
```

The instance is now configured for running a local Astria Sequencer Network and
the `noVM` rollup.

### Manual Configuration

::: tip
You can skip this section if you have configured your `astria-go` `novm`
instance using the steps above.
:::

Create a new instance with the cli:

```bash
astria-go dev init --instance novm
```

Go to `~/.astria/` and update the `tui-config.toml` to have the following:

This step is optional but will make viewing the running rollup much easier in
the TUI.

```bash
auto_scroll = true
wrap_lines = false
borderless = false
override_instance_name = 'novm'
cometbft_starts_minimized = false
conductor_starts_minimized = false
composer_starts_minimized = false
sequencer_starts_minimized = true
generic_starts_minimized = false
generic_start_position = 'after'
highlight_color = 'blue'
border_color = 'gray'
```

Navigate to `~/.astria/novm/networks-config.toml`. Scroll through the
file to find the `[networks.local]` heading. Update the `rollup_name` to be
`astria-chat`. Afterwards, that section should look like the following:

```toml
[networks.local]
sequencer_chain_id = 'sequencer-test-chain-0'
sequencer_grpc = 'http://127.0.0.1:8080'
sequencer_rpc = 'http://127.0.0.1:26657'
rollup_name = 'astria-chat'
default_denom = 'ntia'
```

Continue scrolling through the `[networks.local]` items in the toml until you
pass the last service heading within the local services. That section should
look like the following:

```toml
[networks.local.services.sequencer]
```

Add the following at the end of that section. Make sure that the `local_path` is
set to point at the `target` dir within the example transfer rollup directory.
This dir should already be present in the repo once you have run `cargo build`.

If you are in the `noVM-messenger` directory, you can get this full path by
running:

```bash
echo "$(pwd)/target/debug/chat-rollup"
```

```toml {5}
[networks.local.services.rollup]
name = 'rollup'
version = 'v0.1.0'
download_url = ''
local_path = '<absolute path to>/noVM-messenger/target/debug/chat-rollup'
args = []
```

Then add a new rollup genesis file in the `novm/config/` directory at
`$HOME/.astria/novm/config/rollup_genesis.json`:

```json
{
    "rollup_name": "chat-rollup",
    "accounts": [
        {
            "address": {
                "bech32m": "astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm"
            },
            "balance": {
                "lo": 100000000000000000
            }
        }
    ],
    "sequencer_genesis_block_height": 2,
    "celestia_genesis_block_height": 2,
    "celestia_block_variance": 100,
    "authority_sudo_address": {
        "bech32m": "astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm"
    }
}
```
<!-- TODO: add a link to an FAQ about how to update the genesis file to add new
accounts -->

Then open `~/.astria/novm/config/base-config.toml` and add the configuration for
the rollup.

Add the following to the end of the file:

```toml {4,5}
metrics_http_listener_addr = 'http://127.0.0.1:50053'
log = 'debug'
composer_addr = 'http://127.0.0.1:50052'
db_filepath = '<absolute path of your home dir>/.astria/novm/data/rollup_data'
genesis_filepath = '<absolute path of your home dir>/.astria/novm/config/rollup_genesis.json'
execution_grpc_addr = '0.0.0.0:50051'
force_stdout = 'true'
pretty_print = 'true'
no_otel = 'true'
no_metrics = 'true'
```

Then update the `db_filepath` and `genesis_filepath`. You can get both of these
paths by running the following:

```bash
echo "db_filepath = '$HOME/.astria/novm/data/rollup_data'"
echo "genesis_filepath = '$HOME/.astria/novm/config/rollup_genesis.json'"
```

Then update the `astria_composer_grpc_addr` already present in the
`base-config.toml` to match the `composer_addr` address you just added above.

```toml
astria_composer_grpc_addr = '127.0.0.1:50052'
```

Lastly, update the `astria_composer_rollups` variable to enable
generic submissions to the Composer:

```toml
astria_composer_rollups = ''
```

## Run the rollup and sequencer

```bash
astria-go dev run --instance novm --network local
```

## Install the `rollup-cli`

In the `noVM-messenger` repo run the following:

```bash
just install-cli
```

Export some environment variables to make the following commands easier:

```bash
export PRIV_KEY="2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90"
export ROLLUP_URL="http://localhost:3030"
export ALICE_ADDRESS="astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm"
export BOB_ADDRESS="astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2"
```

## Submit New Messages

Send a transfer on the rollup:

```bash
rollup-cli submit transfer --amount 1 --private-key $PRIV_KEY --rollup-url $ROLLUP_URL $BOB_ADDRESS
```

Submit new text to the rollup:

```bash
rollup-cli submit text --private-key $PRIV_KEY --rollup-url $ROLLUP_URL "a new message" "username"
```

> [!TIP]
> You may see an `ERROR astria_composer::metrics:` error in the Composer when
> submitting new messages. This results from setting `astria_composer_rollups =
> ''` to an empty value and can be ignored when testing the rollup.

## Query the Rollup

To view recent messages that have been submitted to the rollup you can use:

```bash
rollup-cli query texts --rollup-url $ROLLUP_URL
```

See the balance of an account:

```bash
rollup-cli query balance --rollup-url $ROLLUP_URL $BOB_ADDRESS
rollup-cli query balance --rollup-url $ROLLUP_URL $ALICE_ADDRESS
```

See the nonce of an account:

```bash
rollup-cli query nonce --rollup-url $ROLLUP_URL $BOB_ADDRESS
rollup-cli query nonce --rollup-url $ROLLUP_URL $ALICE_ADDRESS
```

## Deposit From Sequencer

Sending deposits requires the `astria-cli`:

<!--@include: ../components/_astria-rust-cli-install.md-->

To deposit from the Astria Sequencer to the `noVM-messenger` rollup you need to
fund an account on the sequencer with at least `48 utia` to cover the
`InitBridgeAccount` action cost, then convert that account to a bridge account:

```bash
export PRIV_KEY="2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90"
export SEQUENCER_URL="http://127.0.0.1:26657"
export BRIDGE_ADDRESS="astria1f6yydwp23ucl6kfxt2gqt9vufgpsl3zvz5hwxk"
export BRIDGE_PRIV_KEY="0e951afdcbefc420fe6f71b82b0c28c11eb6ee5d95be0886ce9dbf6fa512debc"
export BOB_ADDRESS="astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2"

# Fund the account
astria-cli sequencer transfer --amount 50 \
    --private-key $PRIV_KEY \
    --sequencer.chain-id sequencer-test-chain-0 \
    --sequencer-url $SEQUENCER_URL \
    --fee-asset=ntia \
    --asset=ntia \
    $BRIDGE_ADDRESS

sleep 5

astria-cli sequencer balance get --sequencer-url $SEQUENCER_URL $BRIDGE_ADDRESS

# Convert to a bridge account
astria-cli sequencer init-bridge-account --private-key $BRIDGE_PRIV_KEY --sequencer-url $SEQUENCER_URL \
    --sequencer.chain-id sequencer-test-chain-0 \
    --rollup-name astria-chat \
    --asset ntia \
    --fee-asset ntia

```

Deposit `ntia` from the sequencer to the rollup:

```bash
astria-cli sequencer bridge-lock $BRIDGE_ADDRESS \
    --amount 1 \
    --destination-chain-address $BOB_ADDRESS \
    --private-key $PRIV_KEY  \
    --sequencer.chain-id sequencer-test-chain-0 \
    --sequencer-url $SEQUENCER_URL \
    --fee-asset=ntia \
    --asset=ntia
```

The native asset on the sequencer is `ntia`, and the native asset on the
`noVM-messenger` is `nria`. You can check the balance of both assets on the
rollup as follows:

```bash
rollup-cli query balance --rollup-url $ROLLUP_URL --asset ntia $BOB_ADDRESS
rollup-cli query balance --rollup-url $ROLLUP_URL --asset nria $BOB_ADDRESS
```
