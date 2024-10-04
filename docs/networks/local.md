# Local Network

You can deploy a local Astria Network and EVM rollup in multiple ways. Deploying
with the [`astria-go` CLI](../tutorials/run-local-rollup-and-sequencer.md) will
setup a minimum viable sequencer and rollup for lightweight local development,
and using the [Astria Deployment Charts](../developer/deployment-charts.md)
will deploy the entire Astria Stack but requires more resources.

## Endpoints

### If deploy with the `astria-go` CLI

| Name | Endpoint |
| --- | --- |
| Rollup RPC | [http://localhost:8545](http://localhost:8545) |
| Sequencer RPC | [http://localhost:26657](http://localhost:26657) |

Deploy with the `astria-go` CLI [here](../tutorials/run-local-rollup-and-sequencer.md).

### If deploy with the `Astria deployment charts`

| Name | Endpoint |
| --- | --- |
| Rollup RPC | [http://executor.astria.localdev.me](http://executor.astria.localdev.me) |
| EVM Rollup Faucet | [http://faucet.astria.localdev.me](http://faucet.astria.localdev.me) |
| EVM Rollup Blockscout | [http://blockscout.astria.localdev.me](http://blockscout.astria.localdev.me) |
| Sequencer RPC | [http://rpc.sequencer.localdev.me/health](http://rpc.sequencer.localdev.me/health) |

Deploy with the `Astria Development Charts` [here](../developer/deployment-charts.md).
