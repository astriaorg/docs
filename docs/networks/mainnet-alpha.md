<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const mainnet = siteConfig.mainnet
</script>

# Astria Mainnet Alpha

## Mainnet Endpoints

| Name | Endpoint |
|---|---|
| Flame RPC                            | <a :href="mainnet.flame_rpc"               target="_blank" rel="noopener noreferrer">{{mainnet.flame_rpc}}</a>               |
| Flame Block Explorer                 | <a :href="mainnet.flame_explorer"          target="_blank" rel="noopener noreferrer">{{mainnet.flame_explorer}}</a>          |
| Sequencer RPC                        | <a :href="mainnet.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="mainnet.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_grpc}}</a>          |
| Sequencer Block Explorer             | <a :href="mainnet.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_explorer}}</a>      |
| Celestia Signer                      | <a :href="mainnet.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{mainnet.celestia_signer_address}}</a> |
| Celestia Mainnet Namespace | <a :href="mainnet.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{mainnet.celestia_namespace}}</a>      |

## Mainnet Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="mainnet.conductor_release" target="_blank" rel="noopener noreferrer">{{mainnet.conductor_version}}</a>                 | <a :href="mainnet.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="mainnet.composer_release" target="_blank" rel="noopener noreferrer">{{mainnet.composer_version}}</a>                   | <a :href="mainnet.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="mainnet.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_relayer_version}}</a> | <a :href="mainnet.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="mainnet.sequencer_release" target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_version}}</a>                 | <a :href="mainnet.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| CometBFT                 | <a :href="mainnet.cometbft_release" target="_blank" rel="noopener noreferrer">{{mainnet.cometbft_version}}</a>                   | <a :href="mainnet.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
