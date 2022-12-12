module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  }
};
