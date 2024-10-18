<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const dawn = siteConfig.dawn
</script>

# Astria Dawn Testnet

## Dawn-{{ dawn.num }} Endpoints

| Name | Endpoint |
|---|---|
| Flame RPC                            | <a :href="dawn.flame_rpc"               target="_blank" rel="noopener noreferrer">{{dawn.flame_rpc}}</a>               |
| Flame Block Explorer                 | <a :href="dawn.flame_explorer"          target="_blank" rel="noopener noreferrer">{{dawn.flame_explorer}}</a>          |
| Sequencer RPC                        | <a :href="dawn.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{dawn.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="dawn.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{dawn.sequencer_grpc}}</a>          |
| Sequencer Block Explorer             | <a :href="dawn.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{dawn.sequencer_explorer}}</a>      |
| Celestia Signer                      | <a :href="dawn.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{dawn.celestia_signer_address}}</a> |
| Celestia Dawn-{{dawn.num}} Namespace | <a :href="dawn.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{dawn.celestia_namespace}}</a>      |

## Dawn-0 Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="dawn.conductor_release" target="_blank" rel="noopener noreferrer">{{dawn.conductor_version}}</a>                 | <a :href="dawn.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="dawn.composer_release" target="_blank" rel="noopener noreferrer">{{dawn.composer_version}}</a>                   | <a :href="dawn.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="dawn.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{dawn.sequencer_relayer_version}}</a> | <a :href="dawn.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="dawn.sequencer_release" target="_blank" rel="noopener noreferrer">{{dawn.sequencer_version}}</a>                 | <a :href="dawn.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Flame                    | <a :href="dawn.flame_release" target="_blank" rel="noopener noreferrer">{{dawn.flame_version}}</a>                         | <a :href="dawn.flame_repo" target="_blank" rel="noopener noreferrer">repo</a>             |
| CometBFT                 | <a :href="dawn.cometbft_release" target="_blank" rel="noopener noreferrer">{{dawn.cometbft_version}}</a>                   | <a :href="dawn.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
