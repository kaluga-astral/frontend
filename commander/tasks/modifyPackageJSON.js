const fs = require('fs');

const updatePackageVersion = (packageData, rootPackageVersion) => {
  fs.writeFileSync(
    './package.json',
    JSON.stringify({ ...packageData, version: rootPackageVersion }, null, 2)
  );
};

const modifyPackageJSON = () => {
  const packageData = JSON.parse(fs.readFileSync('./package.json'));

  const {
    scripts,
    devDependencies,
    keywords = [],
    ...restPackageData
  } = packageData;

  const { version: rootPackageVersion } = JSON.parse(
    fs.readFileSync('../../package.json')
  );

  updatePackageVersion(packageData, rootPackageVersion);

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify(
      {
        ...restPackageData,
        version: rootPackageVersion,
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
        main: './cjs/index.js',
        types: './esm/index.d.ts',
        module: './esm/index.js',
      },
      null,
      2
    )
  );
};

module.exports = { modifyPackageJSON };
