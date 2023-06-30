module.exports = {
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['storybook-addon-swc', '@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#emotion11-quasi-compatibility
    // у storybook в 6 версии есть проблемы с 11 emotion - не работает темиация
    emotionAlias: false
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};
