const { copyCommonFiles } = require('./tasks/copyCommonFiles');
const { modifyPackageJSON } = require('./tasks/modifyPackageJSON');
const { build } = require('./tasks/build');
const { copyFonts } = require('./tasks/copyFonts');
const { publish } = require('./tasks/publish');
const { copyImages } = require('./tasks/copyImages');
const { lintPRTitle } = require('./tasks/lintPRTitle');

const runTask = async ({ task, args }) => {
  switch (task) {
    case 'build':
      build({ isStaticPackage: args.isStaticPackage });

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
      modifyPackageJSON({ isStaticPackage: args.isStaticPackage });

      break;
    case 'lintPRTitle':
      await lintPRTitle({ title: args.title });

      break;
    default:
      throw Error('Task not found');
  }
};

module.exports = { runTask };
