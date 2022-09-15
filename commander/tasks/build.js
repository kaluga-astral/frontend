const shell = require('shelljs');

const { TSCONFIG_PATH, DIST_DIR_NAME } = require('../constants');

const { copyCommonFiles } = require('./copyCommonFiles');
const { modifyPackageJSON } = require('./modifyPackageJSON');

const build = () => {
  console.log('Starting build...');

  const { code } = shell.exec(
    `tsc -p ${TSCONFIG_PATH} --module es2015 --outDir ${DIST_DIR_NAME}/esm && tsc -p ${TSCONFIG_PATH} --module commonjs --outDir ${DIST_DIR_NAME}`,
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyCommonFiles();
  modifyPackageJSON();
  console.log('Finish build');
};

module.exports = { build };
