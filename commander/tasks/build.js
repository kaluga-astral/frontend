const shell = require('shelljs');

const { DIST_DIR_NAME } = require('../constants');

const { copyCommonFiles } = require('./copyCommonFiles');
const { modifyPackageJSON } = require('./modifyPackageJSON');

const build = () => {
  console.log('Starting build...');

  const { code } = shell.exec(
    `tsc -p ./tsconfig.json --module es2015 --outDir ${DIST_DIR_NAME}/esm && tsc -p ./tsconfig.json --module commonjs --outDir ${DIST_DIR_NAME}`
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyCommonFiles();
  modifyPackageJSON();

  console.log('Finish build');
};

module.exports = { build };
