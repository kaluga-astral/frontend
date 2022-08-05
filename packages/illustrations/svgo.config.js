module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true
  },
  floatPrecision: 1,
  plugins: [
    'preset-default',
    {
      name: 'prefixIds', params: {
        prefix: false
      }
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical'
      }
    }
  ]
}
