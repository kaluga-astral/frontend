const fs = require('fs');

const { PACKAGES_NAMES } = require('../constants');

const readPackageJSON = (packageJSONPath) =>
  JSON.parse(fs.readFileSync(packageJSONPath));

// обновляет до последней версии пакеты, которые есть в репозитории
const updateDepsVersions = (packageDeps, rootPackageVersion) =>
  PACKAGES_NAMES.reduce((newPackageDeps, packageName) => {
    if (!newPackageDeps[packageName]) {
      return newPackageDeps;
    }

    return { ...newPackageDeps, [packageName]: `^${rootPackageVersion}` };
  }, packageDeps);

const updatePackagesVersions = (packageJSONPath, rootPackageVersion) => {
  const packageData = readPackageJSON(packageJSONPath);

  return {
    ...packageData,
    dependencies: updateDepsVersions(
      packageData.dependencies || {},
      rootPackageVersion,
    ),
    version: rootPackageVersion,
  };
};

const modifyPackageJSON = ({
  /**
   * @description Новая версия пакета
   * @example modifyPackageJSON({ releaseTag: '1.1.0' })
   * */
  releaseTag,
  /**
   * @description Какие exports в package.json присутсвуют для данного пакета
   * @example modifyPackageJSON({ packageExports: { fonts: { import: './fonts/*' }  } })
   * */
  packageExports,
}) => {
  if (!releaseTag) {
    throw Error('modifyPackageJSON: releaseTag is not defined');
  }

  console.log('Starting modifyPackageJSON...');
  console.log('Update packages versions and deps');

  const packageData = updatePackagesVersions('./package.json', releaseTag);

  const {
    scripts,
    devDependencies,
    typesVersions,
    keywords = [],
    ...restPackageData
  } = packageData;

  console.log('Write data to lib package.json');

  const modifiedPackageData = {
    ...restPackageData,
    version: releaseTag,
    author: 'Astral.Soft',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/kaluga-astral/frontend',
    },
    bugs: {
      url: 'https://github.com/kaluga-astral/frontend/issues',
    },
    keywords,
    sideEffects: false,
    types: './esm/index.d.ts',
    main: './index.js',
    module: './esm/index.js',
    browser: './esm/index.js',
    exports: {
      '.': {
        import: './esm/index.js',
        require: './index.js',
      },
      ...packageExports,
    },
  };

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify(modifiedPackageData, null, 2),
  );

  console.log('Finish modifyPackageJSON');
};

module.exports = { modifyPackageJSON };
