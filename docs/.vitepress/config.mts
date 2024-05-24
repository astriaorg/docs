import { defineConfig } from 'vitepress'
const { BASE: base = "/" } = process.env;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astria",
  description: "The Shared Sequencer Network",
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

      items: [
        {
          text: 'What is Astria?',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/overview/introduction' },
            { text: 'How Rollups Work', link: '/overview/how-rollups-work'},
            { text: 'The Astria Sequencer Network', link: '/overview/the-astria-sequencer-network' },
            { text: 'Bridging', link: '/overview/bridging' },
            { text: 'Transaction Flow', link: '/overview/transaction-flow' },
            {
              text: 'Components',
              collapsed: true,
              items: [
                { text: 'Composer', link: '/overview/components/composer' },
                { text: 'The Astria Sequencer', link: '/overview/components/the-astria-sequencer' },
                { text: 'Relayer', link: '/overview/components/relayer' },
                { text: 'Data Availability Layer', link: '/overview/components/data-availability-layer' },
                { text: 'Conductor', link: '/overview/components/conductor' },

              ]
            },
          ]
        }
      ],
    },
    {
      text: 'Developers',
      collapsed: true,
      items: [
        {
          text: 'Tutorials',
          collapsed: true,
          items: [
            { text: 'Deploy a Local Rollup', link: '/local-rollup/dev-cluster-local-rollup' },
            {
              text: 'Deploy a Cloud Rollup',
              collapsed: true,
              items: [
                { text: 'Digital Ocean', link: '/cloud-rollup/digital-ocean' },
              ]
            },
            { text: 'Using the astria cli', link: '/developer/tutorials/1-using-astria-go-cli.md' },

          ]
        },
        {
          text: 'The Astria EVM', link: '/astria-evm/overview'
        },
      ]
    },
    {
      text: 'Resources',
      collapsed: true,
      items: [
        {
          text: 'Community',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/community/1-overview' }
          ]
        },
        { text: 'Dusknet FAQ', link: '/dusk-faq/1-information' }
      ]
    }
  ]
}

function nav() {
  return [
    { text: 'Home', link: '/' },
    {
      text: "Join the network",
      items: [
        { text: "Learn", link: "/overview/introduction" },
        { text: "Developers", link: "/developer/tutorials/1-using-astria-cli-go" },
        { text: "Community", link: '/community/1-overview' },
      ],
    },
  ];
}
