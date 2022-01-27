module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
  replaceAttrValues: {
    '#1D3F66': '{props.color}',
  },
  outDir: 'generated',
  template: require('./svgr.template'),
};
