import { dirname, join } from 'path';
import remarkGfm from 'remark-gfm';

module.exports = {
  stories: [
    '../packages/**/*.mdx',
    '../docs/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath("storybook-addon-swc"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("storybook-addon-mock"),
    "@chromatic-com/storybook",
    "@storybook/addon-webpack5-compiler-swc",

    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  staticDirs: ['./public'],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },

  docs: {},

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),

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

// Сторибук использует абсолютные пути в моно репозиториях
// Функция автоматически сгенерена при миграции до 8 версии
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
