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

## Bridge From Celestia `mocha-4` Testnet to the Astria Dawn Testnet on the Command Line

1. Install
   [`celestia-appd`](https://github.com/celestiaorg/celestia-app?tab=readme-ov-file#install).
2. Create a new Celestia account:
```bash
celestia-appd keys add <name-of-your-key>
```
3. Fund the account using [Celestia's Testnet
   Faucet](https://docs.celestia.org/how-to-guides/mocha-testnet#mocha-testnet-faucet).
4. Create a new Astria account:
```bash
astria-go sequencer createaccount
```
5. Export the Astria Address:
```bash
export ASTRIA_ADDR="astria1..."
```
6. Perform an IBC transfer from Celetia's Testnet to Astria's Testnet:
```bash
celestia-appd tx ibc-transfer transfer transfer channel-160 $ASTRIA_ADDR 1000000utia --fees=420utia --from <name-of-your-celestia-key> --node=https://rpc-mocha.pops.one:443 --chain-id mocha-4
```

## Dawn-{{ dawn.num }} Service Versions

| Service Name | Version | Source |
|---|---|---|
| Astria Conductor         | <a :href="dawn.conductor_release" target="_blank" rel="noopener noreferrer">{{dawn.conductor_version}}</a>                 | <a :href="dawn.conductor_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Astria Composer          | <a :href="dawn.composer_release" target="_blank" rel="noopener noreferrer">{{dawn.composer_version}}</a>                   | <a :href="dawn.composer_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
| Astria Sequencer-relayer | <a :href="dawn.sequencer_relayer_release" target="_blank" rel="noopener noreferrer">{{dawn.sequencer_relayer_version}}</a> | <a :href="dawn.sequencer_relayer_repo" target="_blank" rel="noopener noreferrer">repo</a> |
| Astria Sequencer         | <a :href="dawn.sequencer_release" target="_blank" rel="noopener noreferrer">{{dawn.sequencer_version}}</a>                 | <a :href="dawn.sequencer_repo" target="_blank" rel="noopener noreferrer">repo</a>         |
| Flame                    | <a :href="dawn.flame_release" target="_blank" rel="noopener noreferrer">{{dawn.flame_version}}</a>                         | <a :href="dawn.flame_repo" target="_blank" rel="noopener noreferrer">repo</a>             |
| CometBFT                 | <a :href="dawn.cometbft_release" target="_blank" rel="noopener noreferrer">{{dawn.cometbft_version}}</a>                   | <a :href="dawn.cometbft_repo" target="_blank" rel="noopener noreferrer">repo</a>          |
