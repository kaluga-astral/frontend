const fs = require('fs');

const { PACKAGES_NAMES } = require('../constants');

const { RELEASE_TAG } = process.env;

// обновляет до последней версии пакеты, которые есть в репозитории
const updateDepsVersions = (packageDeps, rootPackageVersion) =>
  PACKAGES_NAMES.reduce((newPackageDeps, packageName) => {
    if (!newPackageDeps[packageName]) return newPackageDeps;

    return { ...newPackageDeps, [packageName]: `^${rootPackageVersion}` };
  }, packageDeps);

const updatePackagesVersions = (packageData, rootPackageVersion) => {
  fs.writeFileSync(
    './package.json',
    JSON.stringify(
      {
        ...packageData,
        dependencies: updateDepsVersions(
          packageData.dependencies || {},
          rootPackageVersion
        ),
        version: rootPackageVersion,
      },
      null,
      2
    )
  );
};

const modifyPackageJSON = () => {
  console.log('Starting modifyPackageJSON...');

  const packageData = JSON.parse(fs.readFileSync('./package.json'));

  const {
    scripts,
    devDependencies,
    keywords = [],
    ...restPackageData
  } = packageData;

  console.log('Update packages versions and deps');

  updatePackagesVersions(packageData, RELEASE_TAG);

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
      },
      null,
      2
    )
  );

  console.log('Finish modifyPackageJSON');
};

module.exports = { modifyPackageJSON };
