<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const dawn = siteConfig.dawn
</script>

# Astria Dawn Testnet

## Dawn-{{ dawn.num }} Endpoints

| Name | Endpoint |
|---|---|
| Flame EVM JSON RPC                   | <a :href="dawn.flame_rpc"               target="_blank" rel="noopener noreferrer">{{dawn.flame_rpc }}</a>              |
| Flame EVM Block Explorer             | <a :href="dawn.flame_explorer"          target="_blank" rel="noopener noreferrer">{{dawn.flame_explorer }}</a>         |
| Sequencer RPC                        | <a :href="dawn.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{dawn.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="dawn.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{dawn.sequencer_grpc}}</a>          |
| Sequencer Block Explorer             | <a :href="dawn.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{dawn.sequencer_explorer}}</a>      |
| Celestia Signer                      | <a :href="dawn.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{dawn.celestia_signer_address}}</a> |
| Celestia Dawn-{{dawn.num}} Namespace | <a :href="dawn.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{dawn.celestia_namespace}}</a>      |

## Dawn-0 Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor | [v0.20.0](https://github.com/astriaorg/astria/releases/tag/conductor-v0.20.0) | [repo](https://github.com/astriaorg/astria/tree/main/crates/astria-conductor) |
| Astria Composer | [v0.8.2](https://github.com/astriaorg/astria/releases/tag/composer-v0.8.2) | [repo](https://github.com/astriaorg/astria/tree/main/crates/astria-composer) |
| Astria Sequencer-relayer | [v0.16.a](https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v0.16.1) | [repo](https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer) |
| Astria Sequencer | [v0.16.0](https://github.com/astriaorg/astria/releases/tag/sequencer-v0.16.0) | [repo](https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer) |
| Astria-Geth EVM | [v0.14.0](https://github.com/astriaorg/astria-geth/releases/tag/v0.14.0) | [repo](https://github.com/astriaorg/astria-geth) |
| CometBFT | [v0.38.8](https://github.com/cometbft/cometbft/releases/tag/v0.38.8) | [repo](https://github.com/cometbft/cometbft) |

Testing some stuff with a link <a :href="dawn.rpc">{{dawn.rpc }}</a>.
