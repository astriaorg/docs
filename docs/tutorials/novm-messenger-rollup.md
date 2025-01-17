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

- [Cargo and Rust](https://www.rust-lang.org/tools/install)
- [`astria-go`
  cli](https://docs.astria.org/developer/astria-go/astria-go-installation)
- [just](https://github.com/casey/just)

## Clone the `noVM-messenger` Rollup Repo

<!--@include: ../components/_clone-novm-messenger.md-->

## Configure the `astria-go` cli

Create a new instance with the cli:

```bash
astria-go dev init --instance novm
```

Go to `~/.astria/` and update the `tui-config.toml` to have the following:

This step is optional but will make viewing the running rollup much easier in
the TUI.

```toml
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

Navigate to `~/.astria/novm/sequencer-networks-config.toml`. Scroll through the
file to find the following heading:

```toml
[networks.local.services]
```

Continue scrolling through that section until you pass the last service heading
within the local services:

```toml
[networks.local.services.sequencer]
```

Add the following at the end of that section. Make sure that the `local_path` is
set to point at the `target` dir within the example transfer rollup directory.
This dir should already be present in the repo once you have run `cargo build`.

```toml {5}
[networks.local.services.rollup]
name = 'rollup'
version = 'v0.1.0'
download_url = ''
local_path = '<your local path to>/noVM-messenger/target/debug/chat-rollup'
args = []
```

Then open `~/.astria/novm/config/base-config.toml` and add the following to that
file. You will need to manually update the `db_filepath`:

```toml {4}
metrics_http_listener_addr = 'http://127.0.0.1:50053'
log = 'debug'
composer_addr = 'http://127.0.0.1:50052'
db_filepath = '<absolute path of your home dir>/.astria/novm/data/rollup_data'
execution_grpc_addr = '0.0.0.0:50051'
force_stdout = 'true'
pretty_print = 'true'
no_otel = 'true'
no_metrics = 'true'
rollup_name = 'astria-chat'
sequencer_genesis_block_height = '0'
celestia_genesis_block_height = '0'
celestia_block_variance = '100'
```

You will also need to update the `astria_composer_grpc_addr` already present in
the `base-config.toml` to match the `composer_addr` address you just added
above.

```toml
astria_composer_grpc_addr = '127.0.0.1:50052'
```

And remove the rollups list from `astria_composer_rollups` variable to enable
generic submissions to the Composer:

```toml
astria_composer_rollups = ''
```

## Run the rollup

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
```

## Submit New Messages

Send a transfer on the rollup:

```bash
rollup-cli submit transfer --amount 1 --private-key $PRIV_KEY --rollup-url $ROLLUP_URL astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2
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
rollup-cli query balance --rollup-url $ROLLUP_URL astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2
rollup-cli query balance --rollup-url $ROLLUP_URL astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm
```

See the nonce of an account:

```bash
rollup-cli query nonce --rollup-url $ROLLUP_URL astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2
rollup-cli query nonce --rollup-url $ROLLUP_URL astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm
```
