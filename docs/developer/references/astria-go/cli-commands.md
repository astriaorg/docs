# `astria-go` cli Commands

## Global Flags

Flags that can be used on any command in the cli.

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `-h`, `--help` | bool | None | Display the help information for a given command|
| `--log-level` | string | `ASTRIA_GO_LOG_LEVEL` | Set the log level for the cli. |

## `help`

Print the help information for the given command.

### Usage

```bash
astria-go help
# or
astria-go [command] help
```

## `version`

Prints the version of the cli.

### Usage

```bash
astria-go version
```

## `dev`

The root command for all development commands.

### Usage

```bash
astria-go dev [command] [flags]
```

## `dev init`

Downloads service binaries and initializes the local environment. This command
must be run before the `dev run` command can be used.

### Usage

```bash
astria-go dev init [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--local-default-denom` | string | `ASTRIA_GO_LOCAL_DEFAULT_DENOM` | Set the default denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "nria") |
| `--local-network-name` | string | `ASTRIA_GO_LOCAL_NETWORK_NAME` | Set the local network name for the instance. This is used to set the chain ID in the CometBFT genesis.json file. (default "sequencer-test-chain-0") |

## `dev purge`

The root command for all purge commands.

### Usage

```bash
astria-go dev purge [command] [flags]
```

## `dev purge all`

Delete all data for a given instance. This deletes the entire instance directory
within `~/.astria`. `astria-go dev init` must be run before `astria-go dev run`
can be used.

### Usage

```bash
astria-go dev purge all [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |

## `dev purge binaries`

Delete all downloaded binaries for a given instance. `astria-go dev init` must be run before `astria-go dev run`
can be used.

### Usage

```bash
astria-go dev purge binaries [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |

## `dev reset`

The root command for resetting the local development instance data.

### Usage

```bash
astria-go dev reset [command] [flags]
```

## `dev reset config`

Reset config files. This will return all files in the instance config directory to their
default state as though initially created.

### Usage

```bash
astria-go dev reset config [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--local-default-denom` | string | `ASTRIA_GO_LOCAL_DEFAULT_DENOM` | Set the default denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "nria") |
| `--local-network-name` | string | `ASTRIA_GO_LOCAL_NETWORK_NAME` | Set the local network name for the instance. This is used to set the chain ID in the CometBFT genesis.json file. (default "sequencer-test-chain-0") |

## `dev reset networks`

Reset the networks config for the cli. This command only resets the
networks-config.toml file for the instance. No other config files are affected.

### Usage

```bash
astria-go dev reset networks [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--local-default-denom` | string | `ASTRIA_GO_LOCAL_DEFAULT_DENOM` | Set the default denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "nria") |
| `--local-network-name` | string | `ASTRIA_GO_LOCAL_NETWORK_NAME` | Set the local network name for the instance. This is used to set the chain ID in the CometBFT genesis.json file. (default "sequencer-test-chain-0") |

## `dev reset state`

Reset Sequencer state. This will reset both the sequencer and Cometbft data to
their initial state.

### Usage

```bash
astria-go dev reset state [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |

## `dev run`

Runs a minimal, local Astria stack. You can choose to run a local sequencer
stack or target a remote network by using the `--network` flag.

### Usage

```bash
# run a local sequencer
astria-go dev run [flags]
# run a local sequencer
astria-go dev run --network local [flags]
# run against a remote dev net
astria-go dev run --network dusk [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet |
| `--cometbft-path` | string | `ASTRIA_GO_COMETBFT_PATH` | Provide an override path to a specific cometbft binary. |
| `--composer-path` | string | `ASTRIA_GO_COMPOSER_PATH` | Provide an override path to a specific composer binary. |
| `--conductor-path` | string | `ASTRIA_GO_CONDUCTOR_PATH` | Provide an override path to a specific conductor binary. |
| `--sequencer-path` | string | `ASTRIA_GO_SEQUENCER_PATH` | Provide an override path to a specific sequencer binary. |
| `--service-log-level` | string | `ASTRIA_GO_SERVICE_LOG_LEVEL` | Set the log level for services (debug, info, error) (default "info") |

## `sequencer`

The root command for all sequencer commands.

### Usage

```bash
astria-go sequencer [command] [flags]
```

## `sequencer balances`

Get the balances of an account on the Sequencer.

### Usage

```bash
astria-go sequencer balance [address] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | N/A | bool | `ASTRIA_GO_JSON` | Output an account's balances in JSON format. |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to retrieve the balance from. (default "<http://127.0.0.1:26657>") |

## `sequencer blockheight`

Get the current block height of the Sequencer.

### Usage

```bash
astria-go sequencer blockheight [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | N/A | bool | `ASTRIA_GO_JSON` | Output an account's balances in JSON format. |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to retrieve the balance from. (default "<http://127.0.0.1:26657>") |

## `sequencer bridge`

The root command for the sequencer bridge commands.

### Usage

```bash
astria-go sequencer bridge [command]
```

## `sequencer bridge init`

Initialize a bridge account.

### Usage

```bash
astria-go sequencer bridge init [rollup-id] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--asset-id` | string | `ASTRIA_GO_ASSET_ID`  | The asset id of the asset we want to bridge (default "transfer/channel-0/utia") |
| `--fee-asset-id` | string | `ASTRIA_GO_FEE_ASSET_ID` | The fee asset id of the asset used for fees (default "nria") |
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "astria-dusk-5") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to init bridge account (default "<http://127.0.0.1:26657>") |

## `sequencer bridge lock`

Locks tokens on the bridge account.

### Usage

```bash
astria-go sequencer bridge lock [address] [amount] [destination-chain-address] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "astria-dusk-5") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer where the bridge account resides (default "<http://127.0.0.1:26657>") |

## `sequencer createaccount`

Create an account for the sequencer. The account will be used to sign
transactions and blocks. The account will be created with a private key, public
key, and address.

### Usage

```bash
astria-go sequencer createaccount [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--insecure` | bool | `ASTRIA_GO_INSECURE` | Print the account private key to terminal instead of storing securely. |
| `--json` | bool | `ASTRIA_GO_JSON` | Output the account information in JSON format. |
| `--keyfile` | bool | `ASTRIA_GO_KEYFILE` | Store the account private key in a keyfile. |
| `--keyring` | bool | `ASTRIA_GO_KEYRING` | Store the account private key in the system keyring. |

## `sequencer getkey`

Get private key for an address in system keyring.

### Usage

```bash
astria-go sequencer getkey [address] [flags]
```

## `sequencer nonce`

Retrieves and prints the nonce of an account.

### Usage

```bash
astria-go sequencer nonce [address] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | N/A | bool | `ASTRIA_GO_JSON` | Output in JSON format. |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer. (default "<http://127.0.0.1:26657>") |

## `sequencer setkey`

Set private key for an address in system keyring.

### Usage

```bash
astria-go sequencer setkey [address] [private key] [flags]
```

## `sequencer transfer`

Transfer tokens from one account to another.

### Usage

```bash
astria-go sequencer transfer [amount] [to] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | bool | `ASTRIA_GO_JSON` | Output in JSON format. |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for sender. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the sender. Requires private key be stored in keyring. |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the sender. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "astria-dusk-5") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer. (default "<http://127.0.0.1:26657>") |
