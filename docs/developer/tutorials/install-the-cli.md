# Install the Astria CLI

The astria-go cli is a tool designed to make local rollup development as simple and dependency free as possible. It provides functionality to easily run the Astria stack and interact with the Sequencer.

## Download using Curl

<!--@include: ../../components/_astria-go-cli-install.md-->

View all releases [here](https://github.com/astriaorg/astria-cli-go/releases).

## Build from Source

This requires `Go` and `just` to be installed on your system.

- [Go](https://go.dev/doc/install)
- [just](https://github.com/casey/just)

<!--@include: ../../components/_astria-go-cli-build-from-source.md-->

## Commands Used in this Tutorial

For more details on the avaliable commands and other cli features, see the
[cli resources](../references/astria-go/cli-commands.md).

| Command                   | Description                                               |
|---------------------------|-----------------------------------------------------------|
| `version`                 | Prints the cli version.                                   |
| `help`                    | Show help.                                                |
| `dev init`                | Downloads binaries and initializes the local environment. |
| `dev run`                 | Runs a minimal, local Astria stack.                       |
| `sequencer blockheight`   | Get the current block height of the sequencer.            |
| `sequencer createaccount` | Create a new sequencer account.                           |
