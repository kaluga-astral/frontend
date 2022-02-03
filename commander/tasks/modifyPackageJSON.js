const fs = require('fs');

const modifyPackageJSON = () => {
  const {
    scripts,
    devDependencies,
    keywords = [],
    ...packageData
  } = JSON.parse(fs.readFileSync('./package.json'));

  fs.writeFileSync(
    './lib/package.json',
    JSON.stringify(
      {
        ...packageData,
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
