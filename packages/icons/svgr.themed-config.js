module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
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
  template: require('./svgr.template'),
};
