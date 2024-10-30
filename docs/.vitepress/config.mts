import { defineConfig } from 'vitepress'
const { BASE: base = "/" } = process.env;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astria",
  description: "The Sequencing Layer",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  base: base,
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/astriaorg/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    logo: { src: '/astria-logo-mini.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    sidebar: sidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/astriaorg" },
      { icon: "twitter", link: "https://twitter.com/AstriaOrg" },
    ],
  }
})

function sidebar() {
  return [
    {
      text: 'Learn',
      collapsed: true,
      items: [
        { text: 'Astria Overview', link: '/overview/introduction.md' },
        { text: 'How Rollups Work', link: '/overview/how-rollups-work.md'},
        { text: 'Bridging', link: '/overview/bridging.md' },
        { text: 'Transaction Flow', link: '/overview/transaction-flow.md' },
        {
          text: 'Components',
          collapsed: true,
          items: [
            { text: 'Composer', link: '/overview/components/composer.md' },
            { text: 'The Astria Sequencing Layer', link: '/overview/components/the-astria-sequencing-layer.md' },
            { text: 'Relayer', link: '/overview/components/relayer.md' },
            { text: 'Data Availability Layer', link: '/overview/components/data-availability-layer.md' },
            { text: 'Conductor', link: '/overview/components/conductor.md' },

          ]
        },
      ]
    },
    {
      text: 'Flame',
      collapsed: true,
      items: [
        { text: 'On Mainnet Alpha', link: '/flame/flame-mainnet-alpha.md' },
        { text: 'On Testnet', link: '/flame/flame-testnet.md' },
        { text: 'On Devnet', link: '/flame/flame-devnet.md' },
      ]
    },
    {
      text: 'Bridging',
      collapsed: true,
      items: [
        { text: 'Use the Bridge UI', link: '/bridging/bridge-ui.md' },
        { text: 'CLI Bridging Overview', link: '/bridging/cli-bridging-overview.md' },
        { text: 'Bridge on Mainnet Alpha', collapsed: true, items: [
          { text: 'Bridge To Astria', link: '/bridging/mainnet-alpha/bridge-to-astria-mainnet-alpha.md' },
          { text: 'Withdraw From Astria', link: '/bridging/mainnet-alpha/withdraw-from-astria-mainnet-alpha.md' },
          { text: 'Bridge to Flame', link: '/bridging/mainnet-alpha/bridge-to-flame-mainnet-alpha.md' },
          { text: 'Withdraw from Flame', link: '/bridging/mainnet-alpha/withdraw-from-flame-mainnet-alpha.md' },
        ]
      },
        { text: 'Bridge on Dawn Testnet', collapsed: true, items: [
            { text: 'Bridge To Astria', link: '/bridging/testnet/bridge-to-astria-testnet.md' },
            { text: 'Withdraw From Astria', link: '/bridging/testnet/withdraw-from-astria-testnet.md' },
            { text: 'Bridge to Flame', link: '/bridging/testnet/bridge-to-flame-testnet.md' },
            { text: 'Withdraw from Flame', link: '/bridging/testnet/withdraw-from-flame-testnet.md' },
          ]
        },
        { text: 'Bridge on Dusk Devnet', collapsed: true, items: [
          { text: 'Bridge To Astria', link: '/bridging/devnet/bridge-to-astria-devnet.md' },
          { text: 'Withdraw From Astria', link: '/bridging/devnet/withdraw-from-astria-devnet.md' },
          { text: 'Bridge to Flame', link: '/bridging/devnet/bridge-to-flame-devnet.md' },
          { text: 'Withdraw from Flame', link: '/bridging/devnet/withdraw-from-flame-devnet.md' },
        ]
      },
      ]
    },
    {
      text: 'Networks',
      collapsed: true,
      items: [
        { text: 'Astria Mainnet Alpha', link: '/networks/mainnet-alpha.md' },
        { text: 'Astria Dawn Testnet', link: '/networks/testnet.md' },
        { text: 'Astria Dusk Devnet', link: '/networks/devnet.md' },
        { text: 'Local Network', link: '/networks/local.md' },
      ]
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        {
          text: 'Rollup Development CLI',
          collapsed: true,
          items: [
            {text: 'Installation', link: '/developer/astria-go/astria-go-installation.md'},
            {text: 'Commands', link: '/developer/astria-go/astria-go-commands.md'},
            {text: 'CLI Configuration', link: '/developer/astria-go/astria-go-config.md'},
          ]
        },
        {
          text: 'Astria Sequencer CLI',
          collapsed: true,
          items: [
            {text: 'Installation', link: '/developer/astria-cli/astria-cli-installation.md'},
            {text: 'Commands', link: '/developer/astria-cli/astria-cli-commands.md'},
          ]
        },
        {
          text: 'Deployment Charts',
          link: '/developer/deployment-charts.md',
        },
        {
          text: 'Load testing with spamooor',
          link: '/developer/spamooor.md',
        },
        {
          text: 'APIs',
          link: '/developer/apis.md',
        },
      ]
    },
    {
      text: 'Tutorials',
      collapsed: true,
      items: [
        {text: 'Run a Local Rollup and Sequencer', link: '/tutorials/run-local-rollup-and-sequencer.md' },
        {text: 'Run a Local Rollup against a Remote Sequencer', link: '/tutorials/run-local-rollup-against-remote-sequencer.md' },
        {text: 'Test Transactions', link: '/tutorials/test-transactions.md' }
      ]
    }
  ]
}

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: "Learn", link: "/overview/introduction" },
    { text: "Flame", link: "/flame/flame-testnet" },
    { text: "Networks", link: "/networks/testnet" },
    { text: "Developers", link: "/developer/astria-go/astria-go-installation" },
    { text: "Tutorials", link: "/tutorials/run-local-rollup-against-remote-sequencer" },
  ];
}
