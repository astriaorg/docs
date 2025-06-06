export const siteConfig = {
  flame: {
    mainnet: {
      info: {
        network_name: "Flame",
        chain_id: "253368190",
        // for rpc url set in the dawn/dusk sections below
        // for explorer url set in the dawn/dusk sections below
        native_asset: "transfer/channel-0/utia",
        currency_symbol: "TIA",
        auctioneer_rpc_url: "",
      },
      bridging: {
        ui_link: "https://bridge.astria.org",
        ibc_celestia_to_astria: "channel-48",
        ibc_astria_to_celestia: "channel-0",
        ibc_noble_to_astria: "channel-104",
        ibc_astria_to_noble: "channel-1",
        ibc_osmosis_to_astria: "channel-85486",
        ibc_astria_to_osmosis: "channel-2",
        ibc_stride_to_astria: "channel-285",
        ibc_astria_to_stride: "channel-3",
        ibc_neutron_to_astria: "channel-6236",
        ibc_astria_to_neutron: "channel-4",
        sequencer_celestia_address:
          "astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p",
        sequencer_noble_address:
          "astria1eg8hhey0n4untdvqqdvlyl0e7zx8wfca48kglh",
        sequencer_milktia_address:
          "astria1kgxhyhvynhcwwrylkzzx6q3a8rn3tuvasxvuy8",
        sequencer_sttia_address:
          "astria1dllx9d9karss9ca8le25a4vqhf67a67d5d4l6r",
        sequencer_dtia_address: "astria15juwcclg07xs38757q257evltequawcejzzs4l",
        flame_tia_address: "0xB086557f9B5F6fAe5081CC5850BE94e62B1dDE57",
        flame_usdc_address: "0x3f65144F387f6545bF4B19a1B39C94231E1c849F",
        flame_milktia_address: "0xcbb93e854AA4EF5Db51c3b094F28952eF0dC67bE",
        flame_sttia_address: "0xdf941D092b10FF07eAb44bD174dEe915c13FECcd",
        flame_dtia_address: "0x1E3b0f82d049379FEd8C0b67D915Ea925067e5f2",
      },
    },
    dawn: {
      info: {
        network_name: "dawn-1",
        chain_id: "16604737732183",
        // for rpc url set in the dawn/dusk sections below
        // for explorer url set in the dawn/dusk sections below
        native_asset: "transfer/channel-0/utia",
        currency_symbol: "TIA",
        auctioneer_rpc_url: "https://tob.flame.dawn-1.astria.org",
      },
      bridging: {
        ui_link: "https://astria-bridge-web-app-dawn.vercel.app",
        ibc_mocha_to_dawn: "channel-160",
        ibc_dawn_to_mocha: "channel-0",
        ibc_grand_to_dawn: "channel-232",
        ibc_dawn_to_grand: "channel-1",
        ibc_osmosis_to_dawn: "channel-9186",
        ibc_dawn_to_osmosis: "channel-3",
        ibc_stride_to_dawn: "channel-53",
        ibc_dawn_to_stride: "channel-2",
        sequencer_mocha_address:
          "astria1lepnry7tlpzvrukp5xej4v5wp532k2f94vxqnr",
        sequencer_grand_address:
          "astria1u6ewl0tejz0df2l6tzc7k2degx6mqsjahldqxd",
        flame_tia_address: "0x77Af806d724699B3644F9CCBFD45CC999CCC3d49",
        flame_usdc_address: "0x6e18cE6Ec3Fc7b8E3EcFca4fA35e25F3f6FA879a",
      },
    },
    dusk: {
      info: {
        network_name: "dusk-11",
        chain_id: "912559",
        // for rpc url set in the dawn/dusk sections below
        // for explorer url set in the dawn/dusk sections below
        native_asset: "transfer/channel-0/uria",
        currency_symbol: "nRIA",
        auctioneer_rpc_url: "",
      },
      bridging: {
        ui_link: "https://astria-bridge-web-app-develop.vercel.app/",
        ibc_mocha_to_dusk: "channel-159",
        ibc_dusk_to_mocha: "channel-0",
        ibc_grand_to_dusk: "channel-231",
        ibc_dusk_to_grand: "channel-2",
        sequencer_usdc_address: "astria12saluecm8dd7hkutk83eavkl2p70lf5w7txezg",
        sequencer_ria_address: "astria1yqdjnnmrp7w5ygwj0dkldsgzjhv5vcakp7yeu9",
        flame_usdc_address: "0xa4f59B3E97EC22a2b949cB5b6E8Cd6135437E857",
        flame_ria_address: "0xA58639fB5458e65E4fA917FF951C390292C24A15",
      },
    },
  },
  mainnet: {
    flame_rpc: "https://rpc.flame.astria.org",
    flame_explorer: "https://explorer.flame.astria.org",
    sequencer_rpc: "https://rpc.astria.org/",
    sequencer_grpc: "https://grpc.astria.org/",
    sequencer_explorer: "https://astrotrek.io/",
    celestia_signer_address: "celestia1ldf3mhs0z5h5effkkyvc5scpy0xah00t98xfml",
    celenium_signer_link:
      "https://celenium.io/address/celestia1ldf3mhs0z5h5effkkyvc5scpy0xah00t98xfml?tab=transactions",
    celestia_namespace:
      "0000000000000000000000000000000000005bb944ec2fd3ae9c22f6",
    celenium_namespace_link:
      "https://celenium.io/namespace/0000000000000000000000000000000000005bb944ec2fd3ae9c22f6?tab=Blobs",
    // services
    conductor_version: "v2.0.0-rc.1",
    conductor_release:
      "https://github.com/astriaorg/astria/releases/tag/conductor-v2.0.0-rc.1",
    conductor_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-conductor",
    composer_version: "v1.0.0",
    composer_release:
      "https://github.com/astriaorg/astria/releases/tag/composer-v1.0.0",
    composer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-composer",
    sequencer_relayer_version: "v1.0.1",
    sequencer_relayer_release:
      "https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v1.0.1",
    sequencer_relayer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer",
    sequencer_version: "v2.0.1",
    sequencer_release:
      "https://github.com/astriaorg/astria/releases/tag/sequencer-v2.0.1",
    sequencer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer",
    flame_version: "v1.1.0",
    flame_release:
      "https://github.com/astriaorg/astria-geth/releases/tag/v1.1.0",
    flame_repo: "https://github.com/astriaorg/astria-geth",
    cometbft_version: "v0.38.17",
    cometbft_release:
      "https://github.com/cometbft/cometbft/releases/tag/v0.38.17",
    cometbft_repo: "https://github.com/cometbft/cometbft",
    // deployments
    descriptorProxyAddress: "0x7c7B695e0043647FAaf8F2D1B4E521E2261E8802",
    multicall2Address: "0x86AceBA84efCb6cd03939186A598141a33260436",
    nftPositionDescriptorAddress: "0x3d197d029C28Ea982feDAB1B7f6Be26FA7B338Df",
    nftPositionManagerAddress: "0x1dAfd262A228571125f36f1a1333389dB0444edA",
    proxyAdminAddress: "0xE1dD432a94F72da79AD1B3410C16b999463300e9",
    quoterV2Address: "0x066c175fb0B8B4D1c4c2F89796Ba17D916a86eAD",
    swapRouter02Address: "0x29bBaFf21695fA41e446c4f37c07C699d9f08021",
    tickLensAddress: "0x8d9a1428683a003F1686e47640D721293a27432d",
    v3CoreFactoryAddress: "0xE1EE203f374EE6CA6B72420844796c7acDf16A8b",
    v3MigratorAddress: "0x65F23e6C7eAdd8824f944773c4BED3016d5E24FC",
    v3StakerAddress: "0xE9fA9ceb079Fc208003BE7C2112E7A9afF7C8015",
    weth9Address: "0x61B7794B6A0Cc383B367c327B91E5Ba85915a071",
  },
  dawn: {
    num: 1,
    flame_rpc: "https://rpc.flame.dawn-1.astria.org",
    flame_explorer: "https://explorer.flame.dawn-1.astria.org",
    sequencer_rpc: "https://rpc.sequencer.dawn-1.astria.org",
    sequencer_grpc: "https://grpc.sequencer.dawn-1.astria.org",
    sequencer_explorer: "https://dawn.astrotrek.io/",
    celestia_signer_address: "celestia1zple28c6qw29g33q5eltz0pdeekngsjxuq6ug0",
    celenium_signer_link:
      "https://mocha-4.celenium.io/address/celestia1zple28c6qw29g33q5eltz0pdeekngsjxuq6ug0?tab=transactions",
    celestia_namespace:
      "000000000000000000000000000000000000115d4fedc8915bb3e875",
    celenium_namespace_link:
      "https://mocha-4.celenium.io/namespace/000000000000000000000000000000000000115d4fedc8915bb3e875?tab=Blobs",
    // services
    conductor_version: "v2.0.0-rc.1",
    conductor_release:
      "https://github.com/astriaorg/astria/releases/tag/conductor-v2.0.0-rc.1",
    conductor_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-conductor",
    composer_version: "v1.0.1",
    composer_release:
      "https://github.com/astriaorg/astria/releases/tag/composer-v1.0.1",
    composer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-composer",
    sequencer_relayer_version: "v1.0.1",
    sequencer_relayer_release:
      "https://github.com/astriaorg/astria/releases/tag/sequencer-relayer-v1.0.1",
    sequencer_relayer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer-relayer",
    sequencer_version: "v3.0.0-rc.2",
    sequencer_release:
      "https://github.com/astriaorg/astria/releases/tag/sequencer-v3.0.0-rc.2",
    sequencer_repo:
      "https://github.com/astriaorg/astria/tree/main/crates/astria-sequencer",
    flame_version: "v2.0.0-beta.2",
    flame_release:
      "https://github.com/astriaorg/astria-geth/releases/tag/v2.0.0-beta.2",
    flame_repo: "https://github.com/astriaorg/astria-geth",
    cometbft_version: "v0.38.17",
    cometbft_release:
      "https://github.com/cometbft/cometbft/releases/tag/v0.38.17",
    cometbft_repo: "https://github.com/cometbft/cometbft",
    // deployments
    descriptorProxyAddress: "0x9A8C4000e213777b6181204FAC55Be7080F7D996",
    multicall2Address: "0x6536Ed5401F595dcFE055Eeb0829C0537eF2d247",
    nftPositionDescriptorAddress: "0xb9e8F174Cf4943C8d00744Ef84aD27C5d6162ADB",
    nftPositionManagerAddress: "0x186C4bFBef4748d78Bc3C7B7628298528BbFEe47",
    proxyAdminAddress: "0x41C71f7db64731367f3ACD47ec53808F8d63FE93",
    quoterV2Address: "0xa96ad5AC05cFd6a6c3D4FC4fe95f97262266ea18",
    swapRouter02Address: "0x0DA34E6C6361f5B8f5Bdb6276fEE16dD241108c8",
    tickLensAddress: "0x730bB85De1eC42b77f8C05a27a519772502e9809",
    v3CoreFactoryAddress: "0xbdb7C721ae69f36A303162E1e1FBC5ec445824E7",
    v3MigratorAddress: "0x349e965F2abf8366F013f1525a9FbCf07a6982ea",
    v3StakerAddress: "0x4eb076cf3F6206ba8eb39bCFc54eF6589831415E",
    weth9Address: "0xb1ed550217B33fdBeA6aA81b074A2DF8979AfA94",
  },
  dusk: {
    num: 11,
    flame_rpc: "https://rpc.evm.dusk-11.devnet.astria.org",
    flame_explorer: "https://explorer.evm.dusk-11.devnet.astria.org",
    flame_faucet: "https://faucet.evm.dusk-11.devnet.astria.org",
    sequencer_rpc: "https://rpc.sequencer.dusk-11.devnet.astria.org",
    sequencer_grpc: "https://grpc.sequencer.dusk-11.devnet.astria.org",
    sequencer_faucet: "https://faucet.sequencer.dusk-11.devnet.astria.org",
    sequencer_explorer: "https://dusk.astrotrek.io/",
    celestia_signer_address: "celestia18fvwhg5z4z27m752yc59z9nrncmpvvdzhw4qsd",
    celenium_signer_link:
      "https://mocha.celenium.io/address/celestia18fvwhg5z4z27m752yc59z9nrncmpvvdzhw4qsd?tab=transactions",
    celestia_namespace:
      "0000000000000000000000000000000000005d251311f25b13a549e0",
    celenium_namespace_link:
      "https://mocha.celenium.io/namespace/0000000000000000000000000000000000005d251311f25b13a549e0?tab=Blobs",
    // deployments
    descriptorProxyAddress: "0x5a7eb0a7A8d8D9C81604f5D22619389F20340433",
    multicall2Address: "0x247718235bec841187bb46C70cdEA0fd6EEa316E",
    nftPositionDescriptorAddress: "0x1584eb4Cfc6ff5ad06d422BE084f4B1eE7cd4930",
    nftPositionManagerAddress: "0x371cC275651E799890E8409102D7Cc1910647ceD",
    proxyAdminAddress: "0x9037ea90635640dDaAE6aBe8031D13cDBA35A5b4",
    quoterV2Address: "0x5293068Cf96795c0cda7144Fa57B58cbAEfFf711",
    swapRouter02Address: "0x9ed37af540E50ddcCD2dd4D71d61BD458e9229c6",
    tickLensAddress: "0xD66B3E98dbB58594eBCBdBbf1F0476aA02d8991f",
    v3CoreFactoryAddress: "0xc40CAc88C65B5fa4B3EE4FEAe2Cea443287f3879",
    v3MigratorAddress: "0x76dA40BD63e9F5c42edBB1d5e82deA66A8F35F27",
    v3StakerAddress: "0x18e99d37d8A7D08c61D9FE5D74864C9828988815",
    weth9Address: "0x6D71eb44a65560D1E917861059288200209054b4",
  },
  local: {
    cli: {
      rollup_rpc: "http://localhost:8545",
      sequencer_rpc: "http://localhost:26657",
    },
    charts: {
      rollup_rpc: "http://executor.astria.127.0.0.1.nip.io",
      rollup_faucet: "http://faucet.astria.127.0.0.1.nip.io",
      rollup_explorer: "http://blockscout.astria.127.0.0.1.nip.io",
      sequencer_rpc: "http://rpc.sequencer.127.0.0.1.nip.io/health",
    },
  },
  cli: {
    rust: "v0.6.0",
    go: "v0.16.0",
  },
};
