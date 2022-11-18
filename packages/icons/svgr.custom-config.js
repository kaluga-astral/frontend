const commonConfig = require('./svgr.common.config');

module.exports = {
  ...commonConfig,
  outDir: 'generated-custom-icons',
  svgoConfig: {
    multipass: true,
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
      { name: 'removeAttrs', params: { attrs: '^fill-rule$|^clip-rule$' } },
    ],
  },
};
