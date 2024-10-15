export const siteConfig = {
    urls: {
      homepage: 'https://example.com',
      docs: 'https://docs.example.com',
      // Add more URLs as needed
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
      // TODO add service version info
    },
    dusk: {
      // Dusk-specific configuration
      rpc: "https://rpc.flame.dusk-0.astria.org",
    },
    local: {
      // Local-specific configuration
      rpc: "http://localhost:9933",
    },
  };
