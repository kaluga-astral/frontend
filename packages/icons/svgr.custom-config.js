module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
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
  template: require('./svgr.template'),
};
