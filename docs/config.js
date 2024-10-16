export const siteConfig = {
    flame: {
        info: {
            network_name: "dawn-0",
            chain_id: "16604737732183",
            // for rpc url set in the dawn/dusk sections below
            // for explorer url set in the dawn/dusk sections below
            native_asset: "transfer/channel-3/utia",
            currency_symbol: "TIA",
        },
        bridging: {
            sequencer_flame_bridge_address: "astria1yxzlr2um0c9mt6ym8q4f0jdk8ea4r7es4cgkw5",
            ibc_mocha_to_dawn: "channel-129",
            ibc_dawn_to_mocha: "channel-3",
        },
    },
    dawn: {
      num: 0,
      flame_rpc: "https://rpc.flame.dawn-0.astria.org",
      flame_explorer: "https://explorer.flame.dawn-0.astria.org",
      sequencer_rpc: "https://rpc.sequencer.dawn-0.astria.org",
      sequencer_grpc: "https://grpc.sequencer.dawn-0.astria.org",
      sequencer_explorer: "https://dawn.astrotrek.io/",
      celestia_signer_address: "celestia182t89y2esh02a6eyqvthn7l478c6aa80st70vn",
      celenium_signer_link: "https://mocha-4.celenium.io/address/celestia182t89y2esh02a6eyqvthn7l478c6aa80st70vn?tab=transactions",
      celestia_namespace: "00000000000000000000000000000000000059dfee4267024677d4d4",
      celenium_namespace_link: "https://mocha.celenium.io/namespace/00000000000000000000000000000000000059dfee4267024677d4d4?tab=Blobs",
      // services
      conductor_version: "v0.20.0",
      conductor_release: "https://github.com/astriaorg/astria/releases/tag/conductor-v0.20.0",
      conductor_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-conductor",
      composer_version: "v0.8.2",
      composer_release: "https://github.com/astriaorg/astria/releases/tag/composer-v0.8.2",
      composer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-composer",
      sequencer_relayer_version: "v0.16.1",
      sequencer_relayer_release: "https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v0.16.1",
      sequencer_relayer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer",
      sequencer_version: "v0.16.0",
      sequencer_release: "https://github.com/astriaorg/astria/releases/tag/sequencer-v0.16.0",
      sequencer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer",
      flame_version: "v0.14.0",
      flame_release: "https://github.com/astriaorg/astria-geth/releases/tag/v0.14.0",
      flame_repo: "https://github.com/astriaorg/astria-geth",
      cometbft_version: "v0.38.8",
      cometbft_release: "https://github.com/cometbft/cometbft/releases/tag/v0.38.8",
      cometbft_repo: "https://github.com/cometbft/cometbft",
    },
    dusk: {
        num: 10,
        flame_rpc: "https://rpc.evm.dusk-10.devnet.astria.org",
        flame_explorer: "https://explorer.evm.dusk-10.devnet.astria.org",
        flame_faucet: "https://faucet.evm.dusk-10.devnet.astria.org",
        sequencer_rpc: "https://rpc.sequencer.dusk-10.devnet.astria.org",
        sequencer_grpc: "https://grpc.sequencer.dusk-10.devnet.astria.org",
        sequencer_faucet: "https://faucet.sequencer.dusk-10.devnet.astria.org",
        sequencer_explorer: "https://dusk.astrotrek.io/",
        celestia_signer_address: "celestia1qnyk26e49syzzng8sxzxwqd4mg7y4c9erlcnfm",
        celenium_signer_link: "https://mocha.celenium.io/address/celestia1qnyk26e49syzzng8sxzxwqd4mg7y4c9erlcnfm?tab=transactions",
        celestia_namespace: "00000000000000000000000000000000000031a3172717024ab8f1db",
        celenium_namespace_link: "https://mocha.celenium.io/namespace/00000000000000000000000000000000000031a3172717024ab8f1db?tab=Blobs",
        // services
        conductor_version: "v0.20.0",
        conductor_release: "https://github.com/astriaorg/astria/releases/tag/conductor-v0.20.0",
        conductor_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-conductor",
        composer_version: "v0.8.2",
        composer_release: "https://github.com/astriaorg/astria/releases/tag/composer-v0.8.2",
        composer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-composer",
        sequencer_relayer_version: "v0.16.1",
        sequencer_relayer_release: "https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v0.16.1",
        sequencer_relayer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer",
        sequencer_version: "v0.16.0",
        sequencer_release: "https://github.com/astriaorg/astria/releases/tag/sequencer-v0.16.0",
        sequencer_repo: "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer",
        flame_version: "v0.14.0",
        flame_release: "https://github.com/astriaorg/astria-geth/releases/tag/v0.14.0",
        flame_repo: "https://github.com/astriaorg/astria-geth",
        cometbft_version: "v0.38.8",
        cometbft_release: "https://github.com/cometbft/cometbft/releases/tag/v0.38.8",
        cometbft_repo: "https://github.com/cometbft/cometbft",
    },
    local: {
      // Local-specific configuration
      rpc: "http://localhost:9933",
    },
  };
