const shell = require('shelljs');

const { TSCONFIG_PATH, DIST_DIR_NAME } = require('../constants');
const { copyCommonFiles } = require('../copyCommonFiles');
const { modifyPackageJSON } = require('../modifyPackageJSON');

const buildTs = ({
  /**
   * @description Новая версия пакета
   * @example modifyPackageJSON({ releaseTag: '1.1.0' })
   * */
  releaseTag,
  /**
   * @description Какие exports в package.json присутсвуют для данного пакета
   * @example modifyPackageJSON({ packageExports: { fonts: { import: './fonts/*' }  } })
   * */
  packageExports,
}) => {
  console.log('Starting build...');

  const { code: buildCode } = shell.exec(
    `tsc -p ${TSCONFIG_PATH} --module es2015 --outDir ${DIST_DIR_NAME}/esm & tsc -p ${TSCONFIG_PATH} --module commonjs --outDir ${DIST_DIR_NAME}`,
  );

  if (buildCode !== 0) {
    shell.exit(buildCode);
  }

  copyCommonFiles();
  modifyPackageJSON({ packageExports, releaseTag });
  console.log('Finish build');
};

module.exports = { buildTs };
