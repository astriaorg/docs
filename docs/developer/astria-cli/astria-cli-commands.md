<!-- markdownlint-disable MD024 -->
<!-- Disabling MD024 to allow for repeat "Usage" heading -->

# `astria-go` cli Commands

## Version

Print the version of the cli. The flag only works at the top level.

| Flag | Arg Type | Description |
|---|---|---|
| `-v`, `--version` | bool | Print the version of the cli. |

## Global Flags

Flags that can be used on any command in the cli.

| Flag | Arg Type | Description |
|---|---|---|
| `-h`, `--help` | bool | Display the help information for a given command. |

## `help`

Print the help information for the given command.

### Usage

```bash
astria-cli help
# or
astria-cli [command] help
```

## `bridge collect-withdrawals`

TODO

### Usage

```bash
astria-cli bridge collect-withdrawals [OPTIONS] --rollup-endpoint <ROLLUP_ENDPOINT> --contract-address <CONTRACT_ADDRESS> --from-rollup-height <FROM_ROLLUP_HEIGHT> --bridge-address <BRIDGE_ADDRESS> --output <OUTPUT>

```

### Flags

| Flag | Description |
|---|---|
| `--rollup-endpoint <ROLLUP_ENDPOINT>` | The websocket endpoint of a geth compatible rollup |
| `--contract-address <CONTRACT_ADDRESS>` | The eth address of the astria bridge contracts |
| `--from-rollup-height <FROM_ROLLUP_HEIGHT>` | The start rollup height from which blocks will be checked for withdrawal events |
| `--to-rollup-height <TO_ROLLUP_HEIGHT>` | The end rollup height from which blocks will be checked for withdrawal events. If not set, then this tool will stream blocks until SIGINT is received |
| `--fee-asset <FEE_ASSET>` | The asset that will be used to pay the Sequencer fees (should the generated actions be submitted to the Sequencer) default: nria |
| `--sequencer-asset-to-withdraw <SEQUENCER_ASSET_TO_WITHDRAW>` | The sequencer asset withdrawn through the bridge |
| `--ics20-asset-to-withdraw <ICS20_ASSET_TO_WITHDRAW>` | The is20 asset withdrawn through the bridge |
| `--bridge-address <BRIDGE_ADDRESS>` | The bech32-encoded bridge address corresponding to the bridged rollup asset on the sequencer. Should match the bridge address in the geth rollup's bridge configuration for that asset |
| `-o, --output <OUTPUT>` | The path to write the collected withdrawal events converted to Sequencer actions |
| `-f, --force` | Overwrites "output" if it exists |

## `bridge submit-withdrawals`

TODO

### Usage

```bash
astria-cli bridge submit-withdrawals [OPTIONS] --input <INPUT> --signing-key <SIGNING_KEY> --sequencer-chain-id <SEQUENCER_CHAIN_ID> --sequencer-url <SEQUENCER_URL>
```

| Flag | Description |
|---|---|
| `-i, --input <INPUT>` | TODO |
| `--signing-key <SIGNING_KEY>` | TODO |
| `--sequencer-address-prefix <SEQUENCER_ADDRESS_PREFIX>` | TODO [default: astria] |
| `--sequencer-chain-id <SEQUENCER_CHAIN_ID>` | TODO |
| `--sequencer-url <SEQUENCER_URL>` | TODO |

## `sequencer account create`

Create a new account on the Astria Sequencer.

### Usage

```bash
astria-cli sequencer account create
```

## `sequencer account balance`

Get the balance of an account on the Astria Sequencer.

### Usage

```bash
sequencer account balance [OPTIONS] <ADDRESS>
```

| Flag | Description |
|---|---|
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |

## `sequencer account nonce`

Get the nonce of an account on the Astria Sequencer.

### Usage

```bash
astria-cli sequencer account nonce [OPTIONS] <ADDRESS>
```

| Flag | Description |
|---|---|
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |

## `sequencer address bech32m`

Create a `bech32m` sequencer address from the hex byte data of an existing
account address.

### Usage

```bash
astria-cli sequencer address bech32m [OPTIONS] --bytes <BYTES>
```

| Flag | Description |
|---|---|
| `--bytes <BYTES>` | The hex formatted byte part of the bech32m address |
| `--prefix <PREFIX>` | The human readable prefix (Hrp) of the bech32m adress [default: astria] |

## `sequencer balance get`

Get the balance of an account on the Astria sequencer.

### Usage

```bash
astria-cli sequencer balance get
```

| Flag | Description |
|---|---|
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |

## `sequencer blockheight get`

Get the current blockheight of the Astria sequencer.

### Usage

```bash
astria-cli sequencer blockheight get [OPTIONS]
```

| Flag | Description |
|---|---|
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |

## `sequencer sudo ibc-relayer add`

Add an IBC-relayer address to the list of relayers on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo ibc-relayer add [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--address <ADDRESS>` | The address to add or remove as an IBC relayer |

## `sequencer sudo ibc-relayer remove`

Remove an IBC-relayer address from the list of relayers on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo ibc-relayer remove [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--address <ADDRESS>` | The address to add or remove as an IBC relayer |

## `sequencer sudo fee-asset add`

Add a fee-asset to the list of available fee-assets that can be used on the
Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo fee-asset add [OPTIONS] --private-key <PRIVATE_KEY> --asset <ASSET>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--address <ADDRESS>` | The address to add or remove as an IBC relayer |

## `sequencer sudo fee-asset remove`

Remove a fee-asset from the list of available fee-assets that can be used on the
Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo fee-asset remove [OPTIONS] --private-key <PRIVATE_KEY> --asset <ASSET>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--address <ADDRESS>` | The address to add or remove as an IBC relayer |

## `sequencer sudo sudo-address-change`

Update the sudo address for the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo sudo-address-change [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--address <ADDRESS>` | The address to add or remove as an IBC relayer |

## `sequencer sudo validator-update`

Update a validators power on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo validator-update [OPTIONS] --private-key <PRIVATE_KEY> --validator-public-key <VALIDATOR_PUBLIC_KEY> --power <POWER>
```

| Flag | Description |
|---|---|
| `--sequencer-url <SEQUENCER_URL>`  |  The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--prefix <PREFIX>` | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | The private key of the sudo account authorizing change [env: SEQUENCER_PRIVATE_KEY=] |
| `--validator-public-key <VALIDATOR_PUBLIC_KEY>` | The address of the Validator being updated |
| `--power <POWER>` | The power the validator is being updated to |

## `sequencer transfer`

Send a transfer between accounts on the Astria sequencer.

### Usage

```bash
astria-cli sequencer transfer [OPTIONS] --amount <AMOUNT> --private-key <PRIVATE_KEY> <TO_ADDRESS>
```

| Flag | Description |
|---|---|
| `--amount <AMOUNT>` |  TODO |
| `--prefix <PREFIX>` | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | The private key of account being sent from [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--asset <ASSET>` | The asset to transer [default: nria] |
| `--fee-asset <FEE_ASSET>` | The asset to pay the transfer fees with [default: nria] |

## `sequencer init-bridge-account`

Initialize a bridge account pointing to a specific rollup on the Astria sequencer.

### Usage

```bash
astria-cli sequencer init-bridge-account [OPTIONS] --private-key <PRIVATE_KEY> --rollup-name <ROLLUP_NAME>
```

| Flag | Description |
|---|---|
| `--prefix <PREFIX>` | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | The private key of account being sent from [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--asset <ASSET>` | The asset to transer [default: nria] |
| `--fee-asset <FEE_ASSET>` | The asset to pay the transfer fees with [default: nria] |

## `sequencer bridge-lock`

TODO

### Usage

```bash
astria-cli sequencer bridge-lock [OPTIONS] --amount <AMOUNT> --destination-chain-address <DESTINATION_CHAIN_ADDRESS> --private-key <PRIVATE_KEY> <TO_ADDRESS>
```

| Flag | Description |
|---|---|
| `--amount <AMOUNT>` | The amount being locked |
| `--destination-chain-address <DESTINATION_CHAIN_ADDRESS>` | TODO |
| `--prefix <PREFIX>` | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | The url of the Sequencer node [env: SEQUENCER_URL=] [default: https://rpc.sequencer.dusk-10.devnet.astria.org] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] [default: astria-dusk-10] |
| `--asset <ASSET>` | The asset to lock [default: nria] |
| `--fee-asset <FEE_ASSET>` | The asset to pay the transfer fees with [default: nria] |
