const shell = require('shelljs');

const { DEFAULT_CONFIG_PATH, DIST_DIR_NAME } = require('../constants');

const { copyCommonFiles } = require('./copyCommonFiles');
const { modifyPackageJSON } = require('./modifyPackageJSON');

const build = (args) => {
  console.log('Starting build...');

  const { config = DEFAULT_CONFIG_PATH } = args;

  const { code } = shell.exec(
    `tsc -p ${config} --module es2015 --outDir ${DIST_DIR_NAME}/esm && tsc -p ${config} --module commonjs --outDir ${DIST_DIR_NAME}`,
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyCommonFiles();
  modifyPackageJSON();
  console.log('Finish build');
};

module.exports = { build };
