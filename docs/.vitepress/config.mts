import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astria",
  description: "The Shared Sequencer Network",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    editLink: {
      pattern: "https://github.com/astriaorg/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    logo: { src: '/astria-logo-mini.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Just Rollup', link: '/local-rollup/1-introduction' }
    ],

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/overview/1-introduction' },
          { text: 'Why Decentralized Sequencers?', link: '/overview/2-why-decentralized-sequencers' },
          { text: 'Cross-Rollup Composability', link: '/overview/3-cross-rollup-composability' },

          {
            text: 'Architecture',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/overview/architecture/1-overview' },
              { text: 'Transaction Flow', link: '/overview/architecture/2-transaction-flow' },
              { text: 'Rollups', link: '/overview/architecture/3-rollup' },
              { text: 'Composer', link: '/overview/architecture/4-composer' },
              { text: 'The Astria Sequencer', link: '/overview/architecture/5-the-astria-sequencer' },
              { text: 'Relayer', link: '/overview/architecture/6-relayer' },
              { text: 'Conductor', link: '/overview/architecture/7-conductor' },
              { text: 'Data Availability Layer', link: '/overview/architecture/8-data-availability-layer' },
            ]
          },
        ]
      },
      {
        text: 'Deploy a Local Rollup', link: '/local-rollup/1-introduction',
      },
      {
        text: 'Deploy a Cloud Rollup',
        collapsed: true,
        items: [
          { text: 'Digital Ocean', link: '/cloud-rollup/digital-ocean' },
        ]
      },
      {
        text: 'The Astria EVM', link: '/astria-evm/overview',
      },
      {
        text: 'Dusknet FAQ', link: '/dusk-faq/1-information',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/astriaorg/astria' }
    ]
  }
})
