const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

const copyIllustrations = () => {
  console.log('Starting copyIllustrations...');

  copy('./src', `./${DIST_DIR_NAME}`, {
    filter: ['**/*.svg'],
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch((error) => {
    console.error(error);

    process.exit(1);
  });

  console.log('Finish copyFonts');
};

module.exports = { copyIllustrations };
