<!-- markdownlint-disable MD024 -->
<!-- Disabling MD024 to allow for repeat "Usage" heading -->

# `astria-cli` cli Commands

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

Collect withdrawals actions.

### Usage

```bash
astria-cli bridge collect-withdrawals [OPTIONS] --rollup-endpoint <ROLLUP_ENDPOINT> --contract-address <CONTRACT_ADDRESS> --from-rollup-height <FROM_ROLLUP_HEIGHT> --bridge-address <BRIDGE_ADDRESS> --output <OUTPUT>

```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--rollup-endpoint <ROLLUP_ENDPOINT>` | string | The websocket endpoint of a geth compatible rollup |
| `--contract-address <CONTRACT_ADDRESS>` | string | The eth address of the astria bridge contracts |
| `--from-rollup-height <FROM_ROLLUP_HEIGHT>` | u64 | The start rollup height from which blocks will be checked for withdrawal events |
| `--to-rollup-height <TO_ROLLUP_HEIGHT>` | u64 | The end rollup height from which blocks will be checked for withdrawal events. If not set, then this tool will stream blocks until SIGINT is received |
| `--fee-asset <FEE_ASSET>` | string | The asset that will be used to pay the Sequencer fees (should the generated actions be submitted to the Sequencer) default: ntia |
| `--sequencer-asset-to-withdraw <SEQUENCER_ASSET_TO_WITHDRAW>` | string | The sequencer asset withdrawn through the bridge |
| `--ics20-asset-to-withdraw <ICS20_ASSET_TO_WITHDRAW>` | string | The is20 asset withdrawn through the bridge |
| `--bridge-address <BRIDGE_ADDRESS>` | string | The bech32-encoded bridge address corresponding to the bridged rollup asset on the sequencer. Should match the bridge address in the geth rollup's bridge configuration for that asset |
| `--use-compat-address` | bool | Use Astria compat addresses when withdrawing assets to chains that require bech32 addresses (like for noble USDC). |
| `-o, --output <OUTPUT>` | string | The path to write the collected withdrawal events converted to Sequencer actions |
| `-f, --force` | bool | Overwrites "output" if it exists |

## `bridge submit-withdrawals`

Submit collected withdrawal actions.

### Usage

```bash
astria-cli bridge submit-withdrawals [OPTIONS] --input <INPUT> --signing-key <SIGNING_KEY> --sequencer-chain-id <SEQUENCER_CHAIN_ID> --sequencer-url <SEQUENCER_URL>
```

| Flag | Arg Type | Description |
|---|---|---|
| `-i, --input <INPUT>` | string | Path to the file containing the actions to submit |
| `--signing-key <SIGNING_KEY>` | string | Path to the file containing the signing key |
| `--sequencer-address-prefix <SEQUENCER_ADDRESS_PREFIX>` | string | The address prefix for the sequencer account [default: astria] |
| `--sequencer-chain-id <SEQUENCER_CHAIN_ID>` | string | The chain ID of the sequencer |
| `--sequencer-url <SEQUENCER_URL>` | string | The URL of the sequencer rpc |

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

| Flag | Arg Type | Description |
|---|---|---|
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |

## `sequencer account nonce`

Get the nonce of an account on the Astria Sequencer.

### Usage

```bash
astria-cli sequencer account nonce [OPTIONS] <ADDRESS>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |

## `sequencer address bech32m`

Create a `bech32m` sequencer address from the hex byte data of an existing
account address.

### Usage

```bash
astria-cli sequencer address bech32m [OPTIONS] --bytes <BYTES>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--bytes <BYTES>` | string | The hex formatted byte part of the bech32m address |
| `--prefix <PREFIX>` | string | The human readable prefix (Hrp) of the bech32m address [default: astria] |

## `sequencer balance get`

Get the balance of an account on the Astria sequencer.

### Usage

```bash
astria-cli sequencer balance get
```

| Flag | Arg Type | Description |
|---|---|---|
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |

## `sequencer blockheight get`

Get the current blockheight of the Astria sequencer.

### Usage

```bash
astria-cli sequencer blockheight get [OPTIONS]
```

| Flag | Arg Type | Description |
|---|---|---|
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |

## `sequencer bridge-lock`

Command for transferring to a bridge account.

### Usage

```bash
astria-cli sequencer bridge-lock [OPTIONS] --amount <AMOUNT> --destination-chain-address <DESTINATION_CHAIN_ADDRESS> --private-key <PRIVATE_KEY> <TO_ADDRESS>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--amount <AMOUNT>` | u128 | The amount being locked |
| `--destination-chain-address <DESTINATION_CHAIN_ADDRESS>` | string | The address on the destination chain |
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the account locking the funds [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--asset <ASSET>` | string | The asset to lock [default: nria] |
| `--fee-asset <FEE_ASSET>` | string | The asset to pay the transfer fees with [default: nria] |

## `sequencer init-bridge-account`

Command for initializing a bridge account.

### Usage

```bash
astria-cli sequencer init-bridge-account [OPTIONS] --private-key <PRIVATE_KEY> --rollup-name <ROLLUP_NAME>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the account initializing the bridge account [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--rollup-name <ROLLUP_NAME>` | string | Plaintext rollup name (to be hashed into a rollup ID) to initialize the bridge account with |
| `--asset <ASSET>` | string | The asset to transer [default: nria] |
| `--fee-asset <FEE_ASSET>` | string | The asset to pay the transfer fees with [default: nria] |

## `sequencer sudo ibc-relayer add`

Add an IBC-relayer address to the list of relayers on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo ibc-relayer add [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the account authorizing the change [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--address <ADDRESS>` | string | The address to add or remove as an IBC relayer |

## `sequencer sudo ibc-relayer remove`

Remove an IBC-relayer address from the list of relayers on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo ibc-relayer remove [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the account authorizing the change [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--address <ADDRESS>` | string | The address to add or remove as an IBC relayer |

## `sequencer sudo fee-asset add`

Add a fee-asset to the list of available fee-assets that can be used on the
Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo fee-asset add [OPTIONS] --private-key <PRIVATE_KEY> --asset <ASSET>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the sudo account authorizing change [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--address <ADDRESS>` | string | The address to add or remove as an IBC relayer |

## `sequencer sudo fee-asset remove`

Remove a fee-asset from the list of available fee-assets that can be used on the
Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo fee-asset remove [OPTIONS] --private-key <PRIVATE_KEY> --asset <ASSET>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the sudo account authorizing change [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--address <ADDRESS>` | string | The address to add or remove as an IBC relayer |

## `sequencer sudo sudo-address-change`

Update the sudo address for the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo sudo-address-change [OPTIONS] --private-key <PRIVATE_KEY> --address <ADDRESS>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--prefix <PREFIX>` | string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the sudo account authorizing change [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--address <ADDRESS>` | string | The address to add or remove as an IBC relayer |

## `sequencer sudo validator-update`

Update a validators power on the Astria sequencer.

### Usage

```bash
astria-cli sequencer sudo validator-update [OPTIONS] --private-key <PRIVATE_KEY> --validator-public-key <VALIDATOR_PUBLIC_KEY> --power <POWER>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--prefix <PREFIX>` | string | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the sudo account authorizing change [env: SEQUENCER_PRIVATE_KEY=] |
| `--validator-public-key <VALIDATOR_PUBLIC_KEY>` | string | The address of the Validator being updated |
| `--power <POWER>` | string | The power the validator is being updated to |

## `sequencer transfer`

Send a transfer between accounts on the Astria sequencer.

### Usage

```bash
astria-cli sequencer transfer [OPTIONS] --amount <AMOUNT> --private-key <PRIVATE_KEY> <TO_ADDRESS>
```

| Flag | Arg Type | Description |
|---|---|---|
| `--amount <AMOUNT>` | u128 | The amount being sent |
| `--prefix <PREFIX>` | string | The bech32m prefix that will be used for constructing addresses using the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of account being sent from [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--asset <ASSET>` | string | The asset to transer [default: ntia] |
| `--fee-asset <FEE_ASSET>` | string | The asset to pay the transfer fees with [default: ntia] |

## `sequencer threshold dkg`

Distributed key generation command.

### Usage

```bash
astria-cli sequencer threshold dkg [OPTIONS] --index <INDEX> --min-signers <MIN_SIGNERS> --max-signers <MAX_SIGNERS> --secret-key-package-path <SECRET_KEY_PACKAGE_PATH> --public-key-package-path <PUBLIC_KEY_PACKAGE_PATH>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--index <INDEX>` | u16 | Index of the participant of the DKG protocol. must be 1 <= index <= n, where n is the maximum number of signers |
| `--min-signers <MIN_SIGNERS>` | u16 | Minimum number of signers required to sign a transaction |
| `--max-signers <MAX_SIGNERS>` | u16 | Maximum number of signers that can sign a transaction |
| `--secret-key-package-path <SECRET_KEY_PACKAGE_PATH>` | string | Path to a file with the output secret key package from keygen ceremony |
| `--public-key-package-path <PUBLIC_KEY_PACKAGE_PATH>` | string | Path to a file with the output public key package from keygen ceremony |
| `--prefix <PREFIX>` | string | The address prefix for the generated address [default: astria] |

## `sequencer threshold sign part1`

Perform part 1 of the signing protocol.

### Usage

```bash
astria-cli sequencer threshold sign part1 --secret-key-package-path <SECRET_KEY_PACKAGE_PATH> --nonces-path <NONCES_PATH>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--secret-key-package-path <SECRET_KEY_PACKAGE_PATH>` | string | Path to a file with the secret key package from keygen ceremony |
| `--nonces-path <NONCES_PATH>` | string | Path to a file to output the nonces |

## `sequencer threshold sign prepare-message`

Generate a signing package given a message to be signed and commitments from
part 1.

### Usage

```bash
astria-cli sequencer threshold sign prepare-message [OPTIONS] --message-path <MESSAGE_PATH> --signing-package-path <SIGNING_PACKAGE_PATH>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--message-path <MESSAGE_PATH>` | string | Path to file with message (json-formatted `TransactionBody`) to be signed |
| `--plaintext` | bool | If set, the message is treated as plaintext and signed as-is, without re-encoding into protobuf bytes |
| `--signing-package-path <SIGNING_PACKAGE_PATH>` | string | Path to the signing package output file |

## `sequencer threshold sign part2`

Perform part 2 of the signing protocol.

### Usage

```bash
astria-cli sequencer threshold sign part2 --secret-key-package-path <SECRET_KEY_PACKAGE_PATH> --nonces-path <NONCES_PATH> --signing-package-path <SIGNING_PACKAGE_PATH>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--secret-key-package-path <SECRET_KEY_PACKAGE_PATH>` | string | Path to a file with the secret key package from keygen ceremony |
| `--nonces-path <NONCES_PATH>` | string | Path to nonces file from part 1 |
| `--signing-package-path <SIGNING_PACKAGE_PATH>` | string | Path to the signing package |

## `sequencer threshold sign aggregate`

Aggregate signature shares from part 2 to produce the final signature.

### Usage

```bash
astria-cli sequencer threshold sign aggregate [OPTIONS] --signing-package-path <SIGNING_PACKAGE_PATH> --public-key-package-path <PUBLIC_KEY_PACKAGE_PATH>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--signing-package-path <SIGNING_PACKAGE_PATH>` | string | Path to the signing package |
| `--public-key-package-path <PUBLIC_KEY_PACKAGE_PATH>` | string | Path to a file with the public key package from keygen ceremony |
| `--message-path <MESSAGE_PATH>` | string | Optionally, path to the message bytes that were signed |
| `--output-path <OUTPUT_PATH>` | string | Optionally, path to output the signed message as a sequencer transaction |
| `--plaintext` | bool | Whether the message is plaintext (not a `TransactionBody`) |

## `sequencer threshold verify`

Verify an ed25519 signature.

### Usage

```bash
astria-cli sequencer threshold verify [OPTIONS] --verifying-key <VERIFYING_KEY> --message-path <MESSAGE_PATH> --signature <SIGNATURE>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--verifying-key <VERIFYING_KEY>` | string | Hex-encoded verifying key |
| `--message-path <MESSAGE_PATH>` | string | Path to file with message bytes to verify |
| `--signature <SIGNATURE>` | string | Hex-encoded signature |
| `--plaintext` | bool | Set if the incoming message is plaintext, otherwise it is assumed to be `TransactionBody` in pbjson format |

## `sequencer ics20-withdrawal`

Command for withdrawing an ICS20 asset.

### Usage

```bash
astria-cli sequencer ics20-withdrawal [OPTIONS] --amount <AMOUNT> --destination-chain-address <DESTINATION_CHAIN_ADDRESS> --source-channel <SOURCE_CHANNEL> --private-key <PRIVATE_KEY>
```

### Flags

| Flag | Arg Type | Description |
|---|---|---|
| `--amount <AMOUNT>` | u128 | The transfer amount to send |
| `--destination-chain-address <DESTINATION_CHAIN_ADDRESS>` | string | The address on the destination chain |
| `--source-channel <SOURCE_CHANNEL>` | string | The source channel used for withdrawal |
| `--return-address <RETURN_ADDRESS>` | string | The address to refund on timeout, if unset refunds the signer |
| `--memo <MEMO>` | string | An optional memo to send with transaction |
| `--bridge-address <BRIDGE_ADDRESS>` | string | The bridge account to transfer from |
| `--compat` | bool | Use compatibility address format (for example: when sending USDC to Noble) |
| `--prefix <PREFIX>`| string | The prefix to construct a bech32m address given the private key [default: astria] |
| `--private-key <PRIVATE_KEY>` | string | The private key of the account withdrawing the funds [env: SEQUENCER_PRIVATE_KEY=] |
| `--sequencer-url <SEQUENCER_URL>` | string | The url of the Sequencer node [env: SEQUENCER_URL=] |
| `--sequencer.chain-id <SEQUENCER_CHAIN_ID>` | string | The chain id of the sequencing chain being used [env: ROLLUP_SEQUENCER_CHAIN_ID=] |
| `--asset <ASSET>` | string | The asset to withdraw [default: nria] |
| `--fee-asset <FEE_ASSET>` | string | The asset to be used to pay the fees [default: nria] |

## `sequencer submit`

Submit the signed pbjson formatted Transaction.

### Usage

```bash
astria-cli sequencer submit [OPTIONS] <INPUT>
```

### Flags and Inputs

| Flag | Arg Type | Description |
|---|---|---|
| `<INPUT>` | string | The source to read the pbjson formatted astra.protocol.transaction.v1.Transaction (use `-` to pass via STDIN) |
| `--sequencer-url <SEQUENCER_URL>` | string | The URL at which the Sequencer node is listening for ABCI commands [env: SEQUENCER_URL=] |

## `sequencer sign`

Sign a pbjson formatted TransactionBody to produce a Transaction.

### Usage

```bash
astria-cli sequencer sign [OPTIONS] --private-key <PRIVATE_KEY> <INPUT>
```

### Flags and Inputs

| Flag | Arg Type | Description |
|---|---|---|
| `<INPUT>` | string | The source to read the pbjson formatted astra.protocol.transaction.v1.Transaction (use `-` to pass via STDIN) |
| `--private-key <PRIVATE_KEY>` | string | The private key of account being sent from [env: SEQUENCER_PRIVATE_KEY=] |
| `-o`, `--output <OUTPUT>` | string | Target to write the signed transaction in pbjson format (omit to write to STDOUT) |
| `-f`, `--force` | bool | Forces an overwrite of `--output` if a file at that location exists |
