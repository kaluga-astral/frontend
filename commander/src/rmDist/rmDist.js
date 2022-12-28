const shell = require('shelljs');

const { DIST_DIR_NAME } = require('../constants');

/**
 * @description Команда для удаление директории предыдущего билда
 * */
const rmDist = () => {
  console.log('Remove prev dist directory');

  const { code: rmCode } = shell.exec(`rimraf ${DIST_DIR_NAME}`);

  if (rmCode !== 0) {
    shell.exit(rmCode);
  }

  console.log('Finish remove prev dist directory');
};

module.exports = { rmDist };
