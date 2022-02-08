const path = require('path');

const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

const copyCommonFiles = () => {
  copy(
    path.resolve(__dirname, '..', '..', 'LICENSE'),
    `./${DIST_DIR_NAME}/LICENSE`
  ).catch((error) => {
    console.error(error);

    process.exit(1);
  });

  copy(
    path.join(process.cwd(), 'README.md'),
    `./${DIST_DIR_NAME}/README.md`
  ).catch((error) => {
    console.error(error);

    process.exit(1);
  });
};

module.exports = { copyCommonFiles };
