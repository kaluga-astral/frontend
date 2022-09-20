const fs = require('fs');

const { PACKAGES_NAMES } = require('../constants');

const { RELEASE_TAG } = process.env;

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

  fs.writeFileSync(
    packageJSONPath,
    JSON.stringify(
      {
        ...packageData,
        dependencies: updateDepsVersions(
          packageData.dependencies || {},
          rootPackageVersion,
        ),
        version: rootPackageVersion,
      },
      null,
      2,
    ),
  );

  return readPackageJSON(packageJSONPath);
};

const modifyPackageJSON = () => {
  console.log('Starting modifyPackageJSON...');
  console.log('Update packages versions and deps');

  const packageData = updatePackagesVersions('./package.json', RELEASE_TAG);

  const {
    scripts,
    devDependencies,
    keywords = [],
    ...restPackageData
  } = packageData;

  console.log('Write data to lib package.json');

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify(
      {
        ...restPackageData,
        version: RELEASE_TAG,
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
        exports: {
          '.': {
            import: './esm/index.js',
            require: './index.js',
          },
          './server': {
            import: './esm/server/index.js',
            require: './server/index.js',
          },
        },
      },
      null,
      2,
    ),
  );

  console.log('Finish modifyPackageJSON');
};

module.exports = { modifyPackageJSON };
