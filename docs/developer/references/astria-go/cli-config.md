# `astria-go` Configuration

Config for the `astria-go` CLI can be broken out into the following catagories:
- [CLI TUI/devrunner](#tui-config)
- [Services](#service-config) and [networks](#devrunner-networks-config) run by the TUI
- Presets for running [`sequencer` commands](#sequencer-networks-config) used when interacting with the Astria sequencer.

## TUI Config

Once `astria-go dev init` has been run, a `~/.astria/tui-config.toml` file will
be created. This config file control the starting settings of the TUI app.

| Setting | Description |
| --- | --- |
| `auto_scroll` | Control if the TUI starts with auto scrolling logs enabled |
| `wrap_lines` | Control if the TUI starts with word enabled |
| `borderless` | Control if the full screen log views start in borderless mode |
| `override_instance_name` | Override the default instance name that the `--instance` flag defaults to when running `astria-go dev` commands |
| `cometbft_starts_minimized` | Control if the CometBFT process pane starts minimized or not |
| `conductor_starts_minimized` | Control if the CometBFT process pane starts minimized or not |
| `composer_starts_minimized` | Control if the Composer process pane starts minimized or not |
| `sequencer_starts_minimized` | Control if the Sequencer process pane starts minimized or not |
| `generic_starts_minimized` | Control if the generic process pane(s) starts minimized or not |
| `highlight_color` | Override the highlight color for focused process panes |
| `border_color` | Override the border color for focused process panes |

The default TUI settings are as follows:

```toml
auto_scroll = true
wrap_lines = false
borderless = false
override_instance_name = 'default'
cometbft_starts_minimized = false
conductor_starts_minimized = true
composer_starts_minimized = true
sequencer_starts_minimized = false
generic_starts_minimized = false 
highlight_color = "blue"
border_color = "#808080"
```

The `highlight_color` and `border_color` accept both [W3C named
colors](https://www.w3schools.com/tags/ref_colornames.asp) and hexadecimal
notation:

```toml
highlight_color = "deepskyblue" # names should be all lowercase with no spaces
border_color = "#808080"
```



## Sequencer Networks Config

The `~/.astria/sequencer-networks-config.toml` provides presets for interacting
with different sequencer networks when using `astria-go sequencer` commands. Use
the `--network <network name>` flag to simplify your commands.

To add presets for a new network, append to `sequencer-networks-config.toml`:

```toml
[networks.new_network]
sequencer_chain_id = 'new-network'
sequencer_url = '<rpc endpoint for the sequencer>'
asset = '<new asset>'
fee_asset = '<new fee asset>'
```

Use the new config with:

```bash
astria-go sequencer nonce <other args> --network new_network
```

## Devrunner Networks Config

The devrunner networks config provides simplified and powerful options for
running different Astria services for your own local sequencer network or
running services to target a remote sequencer network.

A `networks-config.toml` exists for each instance managed by the cli, and
exists at `~/.astria/<instance>/networks-config.toml`. The `--network` flag is
used with the `astria-go dev run` command to select which network config the
devrunner will use.

```bash
# Run services against the Astria Dusk dev-net
astria-go dev run --network dusk
```

> NOTE: The `network-config.toml` overrides the default values in the [services
> base config](#service-config).

### Config Structure

Each network in the toml is defined by three different toml tables:

```toml
[network.network_name]
[network.network_name.services]
[network.network_name.services.service_name]
```

Each of these tables also contains values to update the settings for your
network and the services that are run to create that network.

A filled out example for a local sequencer network is as follows:

```toml
[networks.local]
sequencer_chain_id = 'sequencer-test-chain-0'
sequencer_grpc = 'http://127.0.0.1:8080'
sequencer_rpc = 'http://127.0.0.1:26657'
rollup_name = 'astria-test-chain-1'
default_denom = 'nria'

[networks.local.services]
[networks.local.services.cometbft]
name = 'cometbft'
version = 'v0.38.8'
download_url = 'https://github.com/cometbft/cometbft/releases/download/v0.38.8/cometbft_0.38.8_darwin_arm64.tar.gz'
local_path = '<your home directory>/.astria/default/bin/cometbft-v0.38.8'
args = []

[networks.local.services.composer]
name = 'astria-composer'
version = 'v0.8.2'
download_url = 'https://github.com/astriaorg/astria/releases/download/composer-v0.8.2/astria-composer-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-composer-v0.8.2'
args = []

[networks.local.services.conductor]
name = 'astria-conductor'
version = 'v0.20.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/conductor-v0.20.0/astria-conductor-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-conductor-v0.20.0'
args = []

[networks.local.services.sequencer]
name = 'astria-sequencer'
version = 'v0.16.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/sequencer-v0.16.0/astria-sequencer-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-sequencer-v0.16.0'
args = []
```

A filled out network config for running against the Dusk dev-net is as follows:

```toml
[networks.dusk]
sequencer_chain_id = 'astria-dusk-10'
sequencer_grpc = 'https://grpc.sequencer.dusk-10.devnet.astria.org/'
sequencer_rpc = 'https://rpc.sequencer.dusk-10.devnet.astria.org/'
rollup_name = ''
default_denom = 'nria'

[networks.dusk.services]
[networks.dusk.services.composer]
name = 'astria-composer'
version = 'v0.8.1'
download_url = 'https://github.com/astriaorg/astria/releases/download/composer-v0.8.2/astria-composer-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-composer-0.8.2'
args = []

[networks.dusk.services.conductor]
name = 'astria-conductor'
version = 'v0.19.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/conductor-v0.20.0/astria-conductor-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-conductor-v0.20.0'
args = []
```

### Dynamic Services

In the previous section, you can see that the local network config has four
services defined and the dusk network has two services defined. The devrunner
read in the config and spins up a service for each item defined in the
`[networks.network_name.services]` table.

If you would like to add or remove services you can delete a named service or
add a new one:

```toml
[networks.dusk.services.new_service_name]
name = 'new-service-name'
version = '' # update the version
download_url = '' # provide a download to a release if applicable
local_path = '<the local path to your binary>'
args = ["arg1", "arg2"] # args to be passed to the service
```

If you do provide a `download_url`, that binary will be downloaded and extracted
to the `~/.astria/<instance>/bin` directory. This download link is also required
to be a `.tar.gz` download. When extracting the file, it will be renamed as the
`name-version` as specified in the service table in the toml.

If you are pointing to a local binary, you only need to provide the local path
without a download url.

### Dynamic Networks

Similar to specifying individual services, you can also specify entire networks.
An example case for this is if you need to rollback the versions for specific
services for some local testing:

```toml
[networks.local-rollback]
sequencer_chain_id = 'rollback-test-chain'
sequencer_grpc = 'http://127.0.0.1:8080'
sequencer_rpc = 'http://127.0.0.1:26657'
rollup_name = 'astria-test-chain-1'
default_denom = 'nria'

[networks.local-rollback.services]
[networks.local-rollback.services.cometbft]
name = 'cometbft'
version = 'v0.38.6'
download_url = 'https://github.com/cometbft/cometbft/releases/download/v0.38.6/cometbft_0.38.6_darwin_arm64.tar.gz'
local_path = '<your home directory>/.astria/default/bin/cometbft-v0.38.6'
args = []

[networks.local-rollback.services.composer]
name = 'astria-composer'
version = 'v0.7.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/composer-v0.7.0/astria-composer-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-composer-v0.7.0'
args = []

[networks.local-rollback.services.conductor]
name = 'astria-conductor'
version = 'v0.16.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/conductor-v0.16.0/astria-conductor-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-conductor-v0.16.0'
args = []

[networks.local-rollback.services.sequencer]
name = 'astria-sequencer'
version = 'v0.12.0'
download_url = 'https://github.com/astriaorg/astria/releases/download/sequencer-v0.12.0/astria-sequencer-aarch64-apple-darwin.tar.gz'
local_path = '<your home directory>/.astria/default/bin/astria-sequencer-v0.12.0'
args = []
```

You can then have the cli download all of the services specified in the new
network that was added by running:

```bash
astria-go dev init --log-level info
```

You will see a log message for this new network:

```bash
INFO[0000] --Downloading binaries for network: local-rollback
```

And then you can run the new network with:

```bash
astria-go dev run --network local-rollback
```

### What the Networks Config Doesn't Do

The networks config does not control the genesis of a sequencer network, even
if you are only running a local sequencer. It is used for configuring the Astria
services interacting with a given sequencer network at runtime. If you are
running a local sequencer stack, you need to use the `astria-go dev init`
command with the `--local-network-name` and `--local-default-denom` flags to set
the sequencer chain id and default denom respectively.

For example, if you initialize your local sequencer stack with the following
command:

```bash
astria-go dev init \
    --local-network-name test-chain \
    --local-default-denom testdenom
```

Your local networks config will look like this:

```toml
[networks.local]
sequencer_chain_id = 'test-chain'
sequencer_grpc = 'http://127.0.0.1:8080'
sequencer_rpc = 'http://127.0.0.1:26657'
rollup_name = 'astria-test-chain'
default_denom = 'testdenom'
```

If you then update `sequencer_chain_id`:

```toml
sequencer_chain_id = 'different-chain'
```

And then run `astria-go dev run`, your local sequencer will still be started
with a chain id of `test-chain`, but the services run by the `astria-go` cli
will be trying to communicate with a sequencer that has a chain id of
`different-chain`.

To communicate with the correct sequencer, you need to either revert
`sequencer_chain_id` to `'test-chain'` or run the following commands to
re-initialize your local sequencer to the new chain id:

```bash
astria-go dev purge all
astria-go dev init \
    --local-network-name different-chain \
    --local-default-denom testdenom

```

## Service Config

The full configuration for all Astria services can be found in the
`~/.astria/<instance>/config/base-config.toml` file. All Astria services are
configured using environment variables and the contents of the
`base-config.toml` represent all of the required values. The config file is
generated when `astria-go dev init` is run and then dynamically loaded and
parsed at runtime of an `astria-go dev run` command.

All key value pairs defined in the config toml are parsed in the following way:

```toml
astria_composer_sequencer_url = 'http://127.0.0.1:26657'
```

Becomes the env var:

```bash
ASTRIA_COMPOSER_SEQUENCER_URL=http://127.0.0.1:26657
```

All values loaded from the `base-config.toml` are then passed to the devrunners
that run the services for the CLI TUI.

Because this config is loaded dynamically, you can also add new values of your
choosing to the `base-config.toml` and those values will be added to the
environment.

```toml
lower_snake_case_var_name = 'value'
```

Will end up in the service environment as:

```bash
LOWER_SNAKE_CASE_VAR_NAME=value
```

> NOTE: The `network-config.toml` overrides the default values in the
> `base-config.toml`.
