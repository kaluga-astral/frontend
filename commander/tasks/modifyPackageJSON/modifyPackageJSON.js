const fs = require('fs');

const { PACKAGES_NAMES } = require('../../constants');

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

const modifyPackageJSON = ({
  /**
   * @description Флаг, указывающий, на то содержит ли пакет только статичные файлы (изображения, шрифты...)
   * */
  isStaticPackage = false,
  /**
   * @description Новая версия пакета
   * @example modifyPackageJSON({ releaseTag: '1.1.0' })
   * */
  releaseTag,
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
    // обнуляем main, если оно есть
    main: undefined,
  };

  if (!isStaticPackage) {
    Object.assign(modifiedPackageData, {
      types: './esm/index.d.ts',
      main: './src/index.js',
      module: './src/esm/index.js',
      browser: './src/esm/index.js',
      exports: {
        '.': {
          import: './src/esm/index.js',
          require: './src/index.js',
        },
        './server': {
          import: './src/esm/server/index.js',
          require: './src/server/index.js',
        },
      },
    });
  }

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify(modifiedPackageData, null, 2),
  );

  console.log('Finish modifyPackageJSON');
};

module.exports = { modifyPackageJSON };
