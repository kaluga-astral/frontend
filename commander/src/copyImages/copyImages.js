const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../constants');

const copyImages = () => {
  console.log('Starting copyImages...');

  copy('./src', `./${DIST_DIR_NAME}`, {
    filter: ['**/*.svg', '**/*.png', '**/*.jpeg', '**/*.webp'],
    overwrite: true,
    expand: true,
    dot: true,
    junk: true,
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });

  console.log('Finish copyImages');
};

module.exports = { copyImages };
