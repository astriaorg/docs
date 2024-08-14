# Astria Cli Networks Configuration

For each instance created with the `astria-go` cli, a `networks-config.toml`
file can found in the `~/.astria/<instance>/` directory. This file allows for
simplified configurations of different sequencer networks that can be targeted
by the cli.

Selecting which network the cli is targeting can be controlled by using the
`--network` flag when using the `astria-go dev run` command.

## Primary Use Case

In general, the default values in the networks config should not need to be
changed for most development situations. The most likely case where a user will
need to update the configs is if they are trying to test their local components
against a different sequencer rpc/grpc.

For example, the default Astria Dusk dev net configuration is as follows:

```toml
[dusk]
sequencer_chain_id = 'astria-dusk-8'
sequencer_grpc = 'https://grpc.sequencer.dusk-8.devnet.astria.org/'
sequencer_rpc = 'https://rpc.sequencer.dusk-8.devnet.astria.org/'
rollup_name = ''
default_denom = 'nria'
```

If you needed to instead test against different endpoints, you would update the
values above to suit your needs, the can run the command:

```bash
astria-go dev run --network dusk
```

To have you local components use the `dusk` configuration you just set.

## What the Networks Config Doesn't Do

The networks config does not control the creation of a sequencer network, even
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
[local]
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
