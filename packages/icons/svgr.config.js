module.exports = {
  jsxRuntime: 'automatic',
  typescript: true,
  replaceAttrValues: {
    '#1D3F66': '{props.fill || props.color}',
  },
  outDir: 'src',
  template: require('./svgr.template'),
};
