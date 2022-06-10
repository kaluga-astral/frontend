const path = require('path');

const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

const copyCommonFiles = () => {
  console.log('Starting copyCommonFiles...');
  console.log('Copy LICENSE');

  copy(
    path.resolve(__dirname, '..', '..', 'LICENSE'),
    `./${DIST_DIR_NAME}/LICENSE`,
  ).catch((error) => {
    console.error(error);
    process.exit(1);
  });

  console.log('Copy README.md');

  copy(
    path.join(process.cwd(), 'README.md'),
    `./${DIST_DIR_NAME}/README.md`,
  ).catch((error) => {
    console.error(error);
    process.exit(1);
  });

  console.log('Finish copyCommonFiles...');
};

module.exports = { copyCommonFiles };
