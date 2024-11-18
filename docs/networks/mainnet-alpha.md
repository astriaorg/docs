<!-- markdownlint-disable MD041 MD033 -->

<script setup>
import { siteConfig } from '../config.js'

const mainnet = siteConfig.mainnet
const mainnet_ibc = siteConfig.flame.mainnet.bridging
</script>

# Astria Mainnet Alpha

## Mainnet Endpoints

| Name | Endpoint |
|---|---|
| Sequencer RPC                        | <a :href="mainnet.sequencer_rpc"           target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_rpc}}</a>           |
| Sequencer gRPC                       | <a :href="mainnet.sequencer_grpc"          target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_grpc}}</a>          |
| Sequencer Block Explorer             | <a :href="mainnet.sequencer_explorer"      target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_explorer}}</a>      |
| Celestia Signer                      | <a :href="mainnet.celenium_signer_link"    target="_blank" rel="noopener noreferrer">{{mainnet.celestia_signer_address}}</a> |
| Celestia Mainnet Namespace | <a :href="mainnet.celenium_namespace_link" target="_blank" rel="noopener noreferrer">{{mainnet.celestia_namespace}}</a>      |

## Bridge Channels

### Celestia (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `TIA` |
| `celestia` -> `astria` | `{{mainnet_ibc.ibc_celestia_to_astria}}` |
| `astria` -> `celestia` | `{{mainnet_ibc.ibc_astria_to_celestia}}` |
| Astria Sequencer TIA Bridge Address | `{{mainnet_ibc.sequencer_celestia_address}}` |

### Noble (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `USDC` |
| `noble` -> `astria` | `{{mainnet_ibc.ibc_noble_to_astria}}` |
| `astria` -> `noble` | `{{mainnet_ibc.ibc_astria_to_noble}}` |
| Astria Sequencer USDC Bridge Address | `{{mainnet_ibc.sequencer_noble_address}}` |

### Osmosis (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `milkTIA` |
| `osmosis` -> `astria` | `{{mainnet_ibc.ibc_osmosis_to_astria}}` |
| `astria` -> `osmosis` | `{{mainnet_ibc.ibc_astria_to_osmosis}}` |
| Astria Sequencer milkTIA Bridge Address | `{{mainnet_ibc.sequencer_milktia_address}}` |

### Stride (IBC)

| Property | Value |
|-----|-----|
| Supported Asset | `stTIA` |
| `stride` -> `astria` | `{{mainnet_ibc.ibc_stride_to_astria}}` |
| `astria` -> `stride` | `{{mainnet_ibc.ibc_astria_to_stride}}` |
| Astria Sequencer stTIA Bridge Address | `{{mainnet_ibc.sequencer_sttia_address}}` |

## Mainnet Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="mainnet.conductor_release" target="_blank" rel="noopener noreferrer">{{mainnet.conductor_version}}</a>                 | <a :href="mainnet.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="mainnet.composer_release" target="_blank" rel="noopener noreferrer">{{mainnet.composer_version}}</a>                   | <a :href="mainnet.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="mainnet.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_relayer_version}}</a> | <a :href="mainnet.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="mainnet.sequencer_release" target="_blank" rel="noopener noreferrer">{{mainnet.sequencer_version}}</a>                 | <a :href="mainnet.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| CometBFT                 | <a :href="mainnet.cometbft_release" target="_blank" rel="noopener noreferrer">{{mainnet.cometbft_version}}</a>                   | <a :href="mainnet.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
