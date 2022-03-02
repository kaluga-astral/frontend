const commonConfig = require('./svgr.common.config');

module.exports = {
  ...commonConfig,
  outDir: 'generated-themed-icons',
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
      { name: 'removeAttrs', params: { attrs: '^fill$|^stroke$' } },
    ],
  },
};
