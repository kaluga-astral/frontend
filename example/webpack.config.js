const path = require('path');

const { useTs } = require('@webpackon/use-ts');
const { useHtml } = require('@webpackon/use-html');
const { useBabel } = require('@webpackon/use-babel');
const { useFonts } = require('@webpackon/use-fonts');
const { useTranspileModules } = require('@webpackon/use-transpile-modules');
const { useOptimization } = require('@webpackon/use-optimization');
const { compose } = require('@webpackon/core');

const {
  useUrlImages,
  useEnv,
  useSvgr,
} = require('./config/webpack');

const { ENV_NAME = 'local' } = process.env;

const publicDirPath = path.resolve(__dirname, 'public');

module.exports = (_, { mode }) =>
  compose(
    useTranspileModules({
      transpileModules: ['@astral/illustrations', '@astral/fonts'],
    }),
    useEnv({ envFilePath: path.resolve(__dirname, 'env', `.env.${ENV_NAME}`) }),
    useHtml({
      mode,
      templatePath: path.join(publicDirPath, 'index.html'),
    }),
    useBabel({ useTs: true }),
    useTs(),
    useFonts(),
    useSvgr(),
    useUrlImages({ mode }),
    useOptimization({
      mode,
      splitChunkCacheGroups: [
        { chunkName: 'react', includePackages: ['react', 'react-dom'] },
      ],
    }),
  )({
    target: 'web',
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    // убирает warnings из за отключения проверки типов в babel-loader
    ignoreWarnings: [/export .* was not found in/],
    output: {
      publicPath: '/'
    }
  });
