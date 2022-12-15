const { copyCommonFiles } = require('./tasks/copyCommonFiles');
const { modifyPackageJSON } = require('./tasks/modifyPackageJSON');
const { build } = require('./tasks/build');
const { copyFonts } = require('./tasks/copyFonts');
const { copyImages } = require('./tasks/copyImages');

const { RELEASE_TAG } = process.env;

const runTask = async ({ task, args }) => {
  switch (task) {
    case 'build':
      build({
        isStaticPackage: args.isStaticPackage,
        packageExports: args.packageExports,
        releaseTag: RELEASE_TAG,
      });

      break;
    case 'copyFonts':
      copyFonts();

      break;
    case 'copyImages':
      copyImages();

      break;
    case 'copyCommonFiles':
      copyCommonFiles();

      break;
    case 'modifyPackageJSON':
      modifyPackageJSON({
        isStaticPackage: args.isStaticPackage,
        packageExports: args.packageExports,
        releaseTag: RELEASE_TAG,
      });

      break;

    default:
      throw Error('Task not found');
  }
};

module.exports = { runTask };
