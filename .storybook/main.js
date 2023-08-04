module.exports = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['storybook-addon-swc', '@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#emotion11-quasi-compatibility
    // у storybook в 6 версии есть проблемы с 11 emotion - не работает темиация
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true,
  },
  // storybook по-дефолту не отображает вычисляемые типы (Union, Pick, Omit, любые generic) и типы, импортируемые из node_modules
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      skipChildrenPropWithoutDoc: false,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        // не добавляет в сгенерированное API для пропсов стандартные типы из react (Html атрибуты и тп)
        // если в declarations один элемент и он из @types/react, то это стандартный атрибут
        if (
          prop?.declarations?.length === 1 && prop?.declarations[0]?.fileName.includes('node_modules/@types/react')
        ) {
          return false;
        }

        return true;
      },
    },
  },
}
