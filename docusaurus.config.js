// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astria',
  tagline: 'The Shared Sequencer Network',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.astria.org',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'AstriaOrg',
  projectName: 'docs', // repo name.
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
          showLastUpdateTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/astriaorg/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-RKYWRJTV6J',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Local Rollup on Dusknet',
                to: '/docs/local-rollup/introduction/',
              },
              {
                label: 'Cloud Rollup on Dusknet',
                to: '/docs/cloud-rollup/digital-ocean/',
              },
              {
                label: 'Overview',
                to: '/docs/overview/introduction/',
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
                href: 'https://github.com/astriaorg',
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
    }),
};

module.exports = config;
