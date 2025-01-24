# `astria-go` CLI FAQ

Common issues and solutions when using the `astria-go` cli.

## Resetting State

The `dev reset state` command removes everything in the
`~/.astria/<instance>/data` directory. If you are running a custom rollup
alongside the sequencer using the TUI, a best practice is to point your rollup
data to this same directory so that all state data can be reset together.

```bash
astria-go dev reset state --instance <instance name>
```

## Error: "Did you reset CometBFT without resetting your application's data?"

This error comes from Cometbft when there is a mismatch in data between Cometbft
and the Astria Sequencer. This can be fixed by resetting the state of your
`astria-go` cli instance.

```bash
astria-go dev reset state --instance <instance name>
```

If the error still persists after a restart of the TUI, check if there are any
services running that should not be:

```bash
ps aux | grep -E '[c]omposer|[c]onductor|[s]equencer|[c]ometbft'
```

If the above command returns any output, you can forcibly terminate the running
services with:

```bash
ps aux | grep -E '[c]omposer|[c]onductor|[s]equencer|[c]ometbft' | awk '{print $2}' | xargs kill -9
```

Then you can restart the TUI:

```bash
astria-go dev run --instance <instance name> [flags]
```

## Creating Instances

If you are developing different rollups in parallel, you can create multiple
instances to allow the different configurations you may need to persists. 

```bash
astria-go dev init --instance <new instance name>
```

The only limitation on new instance is that they need unique names.

You can then [update the
configurations](../developer/astria-go/astria-go-config.md) for your
instance(s), then run a specific instance using the `--instance` flag when using
the `dev run` command:

```bash
astria-go dev run --instance <you instance name>
```

## Deleting Instances

To remove an instance you can use the following command. This will delete the
entire `~/.astria/<instance name>` directory and all of its contents:

```bash
astria-go dev purge all --instance <instance name>
```

## Redownload Binaries

The `dev init` command will skip downloading new binaries if they are already
present in the `bin/` dir. To delete and redownload them you need to run the
following commands:

```bash
INSTANCE="instance name"
astria-go dev purge binaries --instance $INSTANCE
astria-go dev init --instance $INSTANCE
```

## Filtering Logs

The TUI currently doesn't have a way of natively filtering the service outputs.
To enable this, use the `--export-logs` flag when running the TUI:

```bash
astria-go dev run --instance <instance name> --export-logs
```

This will output the logs of all services to the `~/.astria/<instance
name>/logs` directory. You can then open a new terminal window and filter the
logs of your choosing with:

```bash
tail -f <timestamp>-<service name>.log | grep "your grep filter"
```
