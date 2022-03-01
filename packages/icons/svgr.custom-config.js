const commonConfig = require('./svgr.common.config');

module.exports = {
  ...commonConfig,
  outDir: 'generated-custom-icons',
  svgoConfig: {
    plugins: [
      'prefixIds',
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
