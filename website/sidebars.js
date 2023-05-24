// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/why-presentify',
        'getting-started/roadmap',
        'getting-started/installation',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [
        'tutorials/presentify-usage-example',
        'tutorials/theming-example',
        'tutorials/components-overriding',
        'tutorials/diagram-example',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api-reference/presentify-provider',
        'api-reference/slide',
        'api-reference/code-highlighting',
      ],
    },
  ],
};

module.exports = sidebars;
