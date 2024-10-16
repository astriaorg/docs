<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const dusk = siteConfig.dusk
</script>

# Astria Dusk Devnet

## Dusk-{{dusk.num}} Endpoints

| Name | Endpoint |
|---|---|
| Sequencer Faucet | [https://faucet.sequencer.dusk-10.devnet.astria.org](https://faucet.sequencer.dusk-10.devnet.astria.org) |
| Sequencer Block Explorer | [https://dusk.astrotrek.io/](https://dusk.astrotrek.io/) |
| Celestia Signer Account | [celestia1qnyk26e49syzzng8sxzxwqd4mg7y4c9erlcnfm](https://mocha.celenium.io/address/celestia1qnyk26e49syzzng8sxzxwqd4mg7y4c9erlcnfm?tab=transactions) |
| Celestia Sequencer Namespace | [00000000000000000000000000000000000031a3172717024ab8f1db](https://mocha.celenium.io/namespace/00000000000000000000000000000000000031a3172717024ab8f1db?tab=Blobs) |
| Flame RPC                            | <a :href="dusk.flame_rpc"               target="_blank" rel="noopener noreferrer">{{dusk.flame_rpc}}</a>               |
| Flame Block Explorer                 | <a :href="dusk.flame_explorer"          target="_blank" rel="noopener noreferrer">{{dusk.flame_explorer}}</a>          |
| Flame Faucet                         | <a :href="dusk.flame_faucet"            target="_blank" rel="noopener noreferrer">{{dusk.flame_faucet}}</a>            |
| Sequencer RPC                        | <a :href="dusk.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{dusk.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="dusk.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{dusk.sequencer_grpc}}</a>          |
| Sequencer Faucet                     | <a :href="dusk.sequencer_faucet"        target="_blank" rel="noopener noreferrer">{{dusk.sequencer_faucet}}</a>        |
| Sequencer Block Explorer             | <a :href="dusk.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{dusk.sequencer_explorer}}</a>      |
| Celestia Signer Address              | <a :href="dusk.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{dusk.celestia_signer_address}}</a> |
| Celestia Dusk-{{dusk.num}} Namespace | <a :href="dusk.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{dusk.celestia_namespace}}</a>      |

## Dusk-{{dusk.num}} Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="dusk.conductor_release" target="_blank" rel="noopener noreferrer">{{dusk.conductor_version}}</a>                 | <a :href="dusk.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="dusk.composer_release" target="_blank" rel="noopener noreferrer">{{dusk.composer_version}}</a>                   | <a :href="dusk.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="dusk.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{dusk.sequencer_relayer_version}}</a> | <a :href="dusk.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="dusk.sequencer_release" target="_blank" rel="noopener noreferrer">{{dusk.sequencer_version}}</a>                 | <a :href="dusk.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Flame                    | <a :href="dusk.flame_release" target="_blank" rel="noopener noreferrer">{{dusk.flame_version}}</a>                         | <a :href="dusk.flame_repo" target="_blank" rel="noopener noreferrer">repo</a>             |
| CometBFT                 | <a :href="dusk.cometbft_release" target="_blank" rel="noopener noreferrer">{{dusk.cometbft_version}}</a>                   | <a :href="dusk.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
