// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astria Docs',
  tagline: 'The Shared Sequencer Network',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.astria.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AstriaOrg', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/astriaorg/docs',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/astriaorg/docs',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/astria-social.png',
      navbar: {
        logo: {
          alt: 'Astria Docs',
          src: 'img/astria-logo.svg',
          width: 120,
          srcDark: 'img/astria-logo-inverted.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/astriaorg/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview-of-astria/introduction/',
              },
              {
                label: 'Dev Cluster',
                to: '/docs/dev-cluster/overview/',
              },
              {
                label: 'Remote Rollup',
                to: '/docs/running-a-remote-rollup/overview/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/astriaorg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://www.astria.org',
              },
              {
                label: 'Blog',
                href: 'https://blog.astria.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/astriaorg/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Settler Labs Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
