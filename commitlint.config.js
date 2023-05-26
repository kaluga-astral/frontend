const path = require('path');

const { createConfig } = require('@astral/commitlint-config');
const getDirNames = require('read-dir-names');

const packagesNames = getDirNames(path.resolve(__dirname, 'packages'));
const componentsNames = getDirNames(
  path.resolve(__dirname, 'packages', 'ui', 'src'),
);

module.exports = createConfig({
  scopes: [...packagesNames, ...componentsNames],
  ticketPrefix: 'UIKIT',
});
