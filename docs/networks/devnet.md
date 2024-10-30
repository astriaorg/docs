<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const dusk = siteConfig.dusk
const dusk_ibc = siteConfig.flame.dusk.bridging
</script>

# Astria Dusk Devnet

## Dusk-{{dusk.num}} Endpoints

| Name | Endpoint |
|---|---|
| Flame RPC                            | <a :href="dusk.flame_rpc"               target="_blank" rel="noopener noreferrer">{{dusk.flame_rpc}}</a>               |
| Flame Block Explorer                 | <a :href="dusk.flame_explorer"          target="_blank" rel="noopener noreferrer">{{dusk.flame_explorer}}</a>          |
| Flame Faucet                         | <a :href="dusk.flame_faucet"            target="_blank" rel="noopener noreferrer">{{dusk.flame_faucet}}</a>            |
| Sequencer RPC                        | <a :href="dusk.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{dusk.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="dusk.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{dusk.sequencer_grpc}}</a>          |
| Sequencer Faucet                     | <a :href="dusk.sequencer_faucet"        target="_blank" rel="noopener noreferrer">{{dusk.sequencer_faucet}}</a>        |
| Sequencer Block Explorer             | <a :href="dusk.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{dusk.sequencer_explorer}}</a>      |
| Celestia Signer Address              | <a :href="dusk.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{dusk.celestia_signer_address}}</a> |
| Celestia Dusk-{{dusk.num}} Namespace | <a :href="dusk.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{dusk.celestia_namespace}}</a>      |

## Bridge Channels

### Celestia Mocha (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `TIA` |
| `mocha` -> `dusk` | `{{dusk_ibc.ibc_mocha_to_dusk}}` |
| `dusk` -> `mocha` | `{{dusk_ibc.ibc_dusk_to_mocha}}` |

### Noble Grand (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `USDC` |
| `grand` -> `dusk` | `{{dusk_ibc.ibc_grand_to_dusk}}` |
| `dusk` -> `grand` | `{{dusk_ibc.ibc_dusk_to_grand}}` |
| Astria Sequencer USDC Bridge Address | `{{dusk_ibc.sequencer_usdc_address}}` |

## Dusk-{{dusk.num}} Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="dusk.conductor_release" target="_blank" rel="noopener noreferrer">{{dusk.conductor_version}}</a>                 | <a :href="dusk.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="dusk.composer_release" target="_blank" rel="noopener noreferrer">{{dusk.composer_version}}</a>                   | <a :href="dusk.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="dusk.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{dusk.sequencer_relayer_version}}</a> | <a :href="dusk.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="dusk.sequencer_release" target="_blank" rel="noopener noreferrer">{{dusk.sequencer_version}}</a>                 | <a :href="dusk.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Flame                    | <a :href="dusk.flame_release" target="_blank" rel="noopener noreferrer">{{dusk.flame_version}}</a>                         | <a :href="dusk.flame_repo" target="_blank" rel="noopener noreferrer">repo</a>             |
| CometBFT                 | <a :href="dusk.cometbft_release" target="_blank" rel="noopener noreferrer">{{dusk.cometbft_version}}</a>                   | <a :href="dusk.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
