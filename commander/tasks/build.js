const shell = require('shelljs');

const { DIST_DIR_NAME } = require('../constants');

const { copyCommonFiles } = require('./copyCommonFiles');
const { modifyPackageJSON } = require('./modifyPackageJSON');

const build = () => {
  const { code } = shell.exec(
    `tsc --module es2015 --outDir ${DIST_DIR_NAME}/esm && tsc --module commonjs --outDir ${DIST_DIR_NAME}/cjs`
  );

  if (code !== 0) {
    shell.exit(code);
  }

  copyCommonFiles();
  modifyPackageJSON();
};

module.exports = { build };
