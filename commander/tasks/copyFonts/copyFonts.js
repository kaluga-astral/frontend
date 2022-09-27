const copy = require('recursive-copy');

const { DIST_DIR_NAME } = require('../../constants');

const copyFonts = () => {
  console.log('Starting copyFonts...');

  copy('./src', `./${DIST_DIR_NAME}`, {
    filter: ['**/*.woff2', '**/*.otf', '**/*.ttf', '**/*.woff'],
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

module.exports = { copyFonts };
