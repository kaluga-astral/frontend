const path = require('path');

const {
  createConfigDecorator,
  addLoaders,
  addPlugins,
} = require('@webpackon/core');
const {
  useUrlImages: useWebpackoneUrlImages,
} = require('@webpackon/use-url-images');
const Dotenv = require('dotenv-webpack');

const SVGO_CONFIG = {
  plugins: [
    'prefixIds',
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertPathData: false,
          cleanupIDs: false,
        },
      },
    },
  ],
};

const useUrlImages = ({ mode }) =>
  useWebpackoneUrlImages({
    mode,
    imageminPlugins: [
      ['jpegtran', { progressive: true }],
      ['svgo', SVGO_CONFIG],
    ],
    loaderParams: {
      exclude: [
        // исключаем icons для того, чтобы не было пересечений с svgr
        new RegExp(`icons\\${path.sep}.*\\.svg$`, 'i'),
      ],
    },
  });

const useSvgr = () =>
  addLoaders([
    {
      test: new RegExp(`icons\\${path.sep}.*\\.svg$`, 'i'),
      exclude: /node_modules/,
      resourceQuery: /component/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgProps: {
              fill: 'currentColor',
            },
            svgoConfig: SVGO_CONFIG,
          },
        },
      ],
    },
  ]);

const useEnv = createConfigDecorator((config, { envFilePath }) =>
  addPlugins([
    new Dotenv({
      path: envFilePath,
    }),
  ])(config),
);

module.exports = {
  useUrlImages,
  useSvgr,
  useEnv,
};
