<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const local = siteConfig.local
</script>

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
| Rollup RPC | <a :href="local.cli.rollup_rpc" target="_blank" rel="noopener noreferrer">{{local.cli.rollup_rpc}}</a>  |
| Sequencer RPC | <a :href="local.cli.sequencer_rpc" target="_blank" rel="noopener noreferrer">{{local.cli.sequencer_rpc}}</a> |

Deploy with the `astria-go` CLI [here](../tutorials/run-local-rollup-and-sequencer.md).

### If deploy with the `Astria deployment charts`

| Name | Endpoint |
| --- | --- |
| Rollup RPC | <a :href="local.charts.rollup_rpc" target="_blank" rel="noopener noreferrer">{{local.charts.rollup_rpc}}</a> |
| EVM Rollup Faucet | <a :href="local.charts.rollup_faucet" target="_blank" rel="noopener noreferrer">{{local.charts.rollup_faucet}}</a> |
| EVM Rollup Blockscout | <a :href="local.charts.rollup_explorer" target="_blank" rel="noopener noreferrer">{{local.charts.rollup_explorer}}</a> |
| Sequencer RPC | <a :href="local.charts.sequencer_rpc" target="_blank" rel="noopener noreferrer">{{local.charts.sequencer_rpc}}</a> |

Deploy with the `Astria Development Charts` [here](../developer/deployment-charts.md).
