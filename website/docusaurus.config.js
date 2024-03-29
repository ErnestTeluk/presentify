// @ts-check

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

const organizationName = 'ErnestTeluk';
const projectName = 'presentify';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Presentify',
  tagline: 'Presentation decks using MDX in React',
  favicon: 'img/favicon.ico',
  url: `https://${organizationName}.github.io/`,
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Presentify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            position: 'left',
            label: 'Playground',
            to: '/playground',
          },
          {
            href: 'https://github.com/ErnestTeluk/presentify',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Ernest Teluk, All Rights Reserved.`,
      },
      algolia: {
        apiKey: '17f03502a8a7e9902498823a788b50b8',
        appId: '6LFE2FYNAP',
        contextualSearch: false,
        indexName: 'presentify',
        searchPagePath: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
