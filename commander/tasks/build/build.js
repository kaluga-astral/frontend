const shell = require('shelljs');

const { TSCONFIG_PATH, DIST_DIR_NAME } = require('../../constants');
const { copyCommonFiles } = require('../copyCommonFiles');
const { modifyPackageJSON } = require('../modifyPackageJSON');

const build = ({
  /**
   * @description Флаг, указывающий, на то содержит ли пакет только статичные файлы (изображения, шрифты...)
   * */
  isStaticPackage,
  /**
   * @description Новая версия пакета
   * @example modifyPackageJSON({ releaseTag: '1.1.0' })
   * */
  releaseTag,
  /**
   * @description Какие exports в package.json присутсвуют для данного пакета
   * @example modifyPackageJSON({ packageExports: { fonts: { path: './fonts', isStatic: true }  } })
   * */
  packageExports,
}) => {
  console.log('Remove prev dist directory');

  const { code: rmCode } = shell.exec(`rimraf ${DIST_DIR_NAME}`);

  if (rmCode !== 0) {
    shell.exit(rmCode);
  }

  console.log('Starting build...');

  const { code: buildCode } = shell.exec(
    `tsc -p ${TSCONFIG_PATH} --module es2015 --outDir ${DIST_DIR_NAME}/esm & tsc -p ${TSCONFIG_PATH} --module commonjs --outDir ${DIST_DIR_NAME}`,
  );

  if (buildCode !== 0) {
    shell.exit(buildCode);
  }

  copyCommonFiles();
  modifyPackageJSON({ isStaticPackage, packageExports, releaseTag });
  console.log('Finish build');
};

module.exports = { build };
