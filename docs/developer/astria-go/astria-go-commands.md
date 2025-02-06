---
outline: [1,2] 
---
<!-- markdownlint-disable MD024 -->
<!-- Disabling MD024 to allow for repeat "Usage" heading -->

# `astria-go` cli Commands

## Global Flags

Flags that can be used on any command in the cli.

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `-h`, `--help` | bool | None | Display the help information for a given command |
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
| `--local-native-denom` | string | `ASTRIA_GO_LOCAL_NATIVE_DENOM` | Set the native denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "ntia") |
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

Delete all downloaded binaries for a given instance. `astria-go dev init` must
be run before `astria-go dev run` can be used.

### Usage

```bash
astria-go dev purge binaries [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |

## `dev purge logs`

Delete all logs for a given instance. This deletes all data in the
`~/.astria/logs` directory. Re-initializing is NOT required after using this command.

### Usage

```bash
astria-go dev purge logs [flags]
```

## `dev reset`

The root command for resetting the local development instance data.

### Usage

```bash
astria-go dev reset [command] [flags]
```

## `dev reset config`

Reset config files. This will return all files in the instance config directory
to their default state as though initially created.

### Usage

```bash
astria-go dev reset config [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--local-native-denom` | string | `ASTRIA_GO_LOCAL_NATIVE_DENOM` | Set the native denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "ntia") |
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
| `--local-native-denom` | string | `ASTRIA_GO_LOCAL_NATIVE_DENOM` | Set the native denom for the local instance. This is used to set the 'native_asset_base_denomination' and 'allowed_fee_assets' in the CometBFT genesis.json file. (default "ntia") |
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
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet (default "dawn") |
| `--cometbft-path` | string | `ASTRIA_GO_COMETBFT_PATH` | Provide an override path to a specific cometbft binary. |
| `--composer-path` | string | `ASTRIA_GO_COMPOSER_PATH` | Provide an override path to a specific composer binary. |
| `--conductor-path` | string | `ASTRIA_GO_CONDUCTOR_PATH` | Provide an override path to a specific conductor binary. |
| `--sequencer-path` | string | `ASTRIA_GO_SEQUENCER_PATH` | Provide an override path to a specific sequencer binary. |
| `--service-log-level` | string | `ASTRIA_GO_SERVICE_LOG_LEVEL` | Set the log level for services (debug, info, error) (default "info") |

## `dev set-config`

The root command for all config update commands within a development instance.

### Usage

```bash
astria-go dev set-config [command] [flags]
```

## `dev set-config default-denom`

Set the default sequencer denom across all config for the instance.

### Usage

```bash
astria-go dev set-config default-denom [denom] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet (default "dawn") |
| `--default-denom` | string | `ASTRIA_GO_DEFAULT_DENOM` | Set the default sequencer denom across all config for the instance. (default "ntia") |

## `dev set-config rollup-name`

Set the rollup name across all config for the instance.

### Usage

```bash
astria-go dev set-config rollup-name [name] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet (default "dawn") |
| `--rollup-port` | string | `ASTRIA_GO_ROLLUP_PORT` | Select the localhost port that the rollup will be running on. (default "8546") |

## `dev set-config sequencer-chain-id`

Set the default sequencer chain id across all config for the instance.

### Usage

```bash
astria-go dev set-config sequencer-chain-id [chain-id] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet (default "dawn") |
| `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | Set the default sequencer chain id across all config for the instance. (default "sequencer-test-chain-0") |

## `dev version`

Print the version of the services used by the CLI.

### Usage

```bash
astria-go dev version [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--instance` | string | `ASTRIA_GO_INSTANCE` | Choose the target instance. (default "default") |
| `--network` | string | `ASTRIA_GO_NETWORK` | Select the network to run the services against. Valid networks are: local, dusk, dawn, mainnet (default "dawn") |

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
| `--json` | bool | `ASTRIA_GO_JSON` | Output an account's balances in JSON format. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to retrieve the balance from. |

## `sequencer block`

Get sequencer block at specified height.

### Usage

```bash
astria-go sequencer block [height] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | bool | `ASTRIA_GO_JSON` | Output an account's balances in JSON format. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to retrieve the balance from. |

## `sequencer blockheight`

Get the current block height of the Sequencer.

### Usage

```bash
astria-go sequencer blockheight [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | bool | `ASTRIA_GO_JSON` | Output an account's balances in JSON format. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to retrieve the balance from. |

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
| `--asset` | string | `ASTRIA_GO_ASSET_ID`  | The asset id of the asset we want to bridge (default "transfer/channel-0/utia") |
| `--async` | bool | `ASTRIA_GO_ASYNC` | If true, the function will return immediately. If false, the function will wait for the transaction to be seen on the network. |
| `--fee-asset` | string | `ASTRIA_GO_FEE_ASSET_ID` | The fee asset id of the asset used for fees (default "ntia") |
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "dawn-1") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to init bridge account. |
| `--sudo-address` | string | `ASTRIA_GO_SUDO_ADDRESS` | Set the sudo address to use for the bridge account. The address of the sender is used if this is not set. |
| `--withdrawer-address` | string | `ASTRIA_GO_WITHDRAWER_ADDRESS` | Set the withdrawer address to use for the bridge account. The address of the sender is used if this is not set. |

## `sequencer bridge lock`

Locks tokens on the bridge account.

### Usage

```bash
astria-go sequencer bridge lock [address] [amount] [destination-chain-address] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--asset` | string | `ASTRIA_GO_ASSET_ID`  | The asset id of the asset we want to bridge (default "transfer/channel-0/utia") |
| `--async` | bool | `ASTRIA_GO_ASYNC` | If true, the function will return immediately. If false, the function will wait for the transaction to be seen on the network. |
| `--fee-asset` | string | `ASTRIA_GO_FEE_ASSET_ID` | The fee asset id of the asset used for fees (default "ntia") |
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "dawn-1") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to init bridge account. |
| `--sudo-address` | string | `ASTRIA_GO_SUDO_ADDRESS` | Set the sudo address to use for the bridge account. The address of the sender is used if this is not set. |
| `--withdrawer-address` | string | `ASTRIA_GO_WITHDRAWER_ADDRESS` | Set the withdrawer address to use for the bridge account. The address of the sender is used if this is not set. |

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

## `sequencer ibctransfer`

Ibc Transfer tokens from a sequencer account to another chain account.

### Usage

```bash
  astria-go sequencer ibctransfer [amount] [to] [src-channel] [--keyfile | --keyring-address | --privkey] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--asset` | string | `ASTRIA_GO_ASSET_ID`  | The asset id of the asset we want to bridge (default "transfer/channel-0/utia") |
| `--async` | bool | `ASTRIA_GO_ASYNC` | If true, the function will return immediately. If false, the function will wait for the transaction to be seen on the network. |
| `--fee-asset` | string | `ASTRIA_GO_FEE_ASSET_ID` | The fee asset id of the asset used for fees (default "ntia") |
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "dawn-1") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to init bridge account. |

## `sequencer nonce`

Retrieves and prints the nonce of an account.

### Usage

```bash
astria-go sequencer nonce [address] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--json` | bool | `ASTRIA_GO_JSON` | Output in JSON format. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer. |

## `sequencer set-config`

Update the configuration for the sequencer commands config.

### Usage

```bash
astria-go sequencer set-config [command] [flags]
```

## `sequencer set-config asset`

Sets the asset and fee asset in the sequencer command configs.

### Usage

```bash
astria-go sequencer set-config asset [denom] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |

## `sequencer set-config sequencer-chain-id`

Sets the sequencer chain id in the sequencer command configs.

### Usage

```bash
astria-go sequencer set-config sequencer-chain-id [chain-id] [flags]
```

### Flags

| Flag | Arg Type | Override Env Var | Description |
|---|---|---|---|
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |

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
| `--asset` | string | `ASTRIA_GO_ASSET_ID`  | The asset id of the asset we want to bridge (default "transfer/channel-0/utia") |
| `--async` | bool | `ASTRIA_GO_ASYNC` | If true, the function will return immediately. If false, the function will wait for the transaction to be seen on the network. |
| `--fee-asset` | string | `ASTRIA_GO_FEE_ASSET_ID` | The fee asset id of the asset used for fees (default "ntia") |
| `--json` | bool | `ASTRIA_GO_JSON` | Output bridge account as JSON |
| `--keyfile` | string | `ASTRIA_GO_KEYFILE` | Path to secure keyfile for the bridge account. |
| `--keyring-address` | string | `ASTRIA_GO_KEYRING_ADDRESS` | The address of the bridge account. Requires private key be stored in keyring. |
| `--network` | string | `ASTRIA_GO_NETWORK` | Configure the values to target a specific network. (default "dawn") |
| `--privkey` | string | `ASTRIA_GO_PRIVKEY` | The private key of the bridge account. |
| `-c`, `--sequencer-chain-id` | string | `ASTRIA_GO_SEQUENCER_CHAIN_ID` | The chain ID of the sequencer. (default "dawn-1") |
| `-u`, `--sequencer-url` | string | `ASTRIA_GO_SEQUENCER_URL` | The URL of the sequencer to init bridge account. |
