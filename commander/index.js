#!/usr/bin/env node

const { copyCommonFiles } = require('./tasks/copyCommonFiles');
const { modifyPackageJSON } = require('./tasks/modifyPackageJSON');
const { build } = require('./tasks/build');
const { copyFonts } = require('./tasks/copyFonts');
const { publish } = require('./tasks/publish');
const { copyImages } = require('./tasks/copyImages');

const [, , task] = process.argv;

switch (task) {
  case 'build':
    build();

    break;
  case 'copyFonts':
    copyFonts();

    break;
  case 'copyImages':
    copyImages();

    break;
  case 'publish':
    publish();

    break;
  case 'copyCommonFiles':
    copyCommonFiles();

    break;
  case 'modifyPackageJSON':
    modifyPackageJSON();

    break;
  default:
    console.error('Task not found');
    process.exit(1);

    break;
}
