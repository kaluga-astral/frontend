const fs = require('fs');

const { modifyPackageJSON } = require('./modifyPackageJSON');

jest.mock('fs');

const DEFAULT_PACKAGE_DATA = {
  name: '@astral/ui',
  version: '1.0.0',
  browser: './src/index.ts',
  main: './src/index.ts',
  scripts: {
    dev: 'tsc --watch',
  },
  dependencies: {
    '@astral/icons': '^0.31.0',
    '@emotion/cache': '11.7.1',
  },
  peerDependencies: {
    react: '>=17.0.0',
  },
  devDependencies: {
    '@types/lodash-es': '^4.17.5',
    '@types/react-datepicker': '4.4.0',
  },
};

describe('modifyPackageJSON', () => {
  let packageFileData;

  beforeEach(() => {
    fs.writeFileSync.mockImplementation((path, data) => {
      packageFileData = JSON.parse(data);
    });

    fs.readFileSync.mockImplementation(() => JSON.stringify(packageFileData));
  });

  it('isStaticPackage: false - в package добавляются поля с перезаписью', () => {
    packageFileData = DEFAULT_PACKAGE_DATA;

    const newPackageVersion = '1.1.0';

    const expectedPackageData = {
      name: '@astral/ui',
      version: newPackageVersion,
      dependencies: {
        '@astral/icons': `^${newPackageVersion}`,
        '@emotion/cache': '11.7.1',
      },
      peerDependencies: {
        react: '>=17.0.0',
      },
      author: 'Astral.Soft',
      license: 'MIT',
      repository: {
        type: 'git',
        url: 'git+https://github.com/kaluga-astral/frontend',
      },
      bugs: {
        url: 'https://github.com/kaluga-astral/frontend/issues',
      },
      sideEffects: false,
      keywords: [],
      types: './esm/index.d.ts',
      main: './index.js',
      module: './esm/index.js',
      browser: './esm/index.js',
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
    };

    modifyPackageJSON({ releaseTag: newPackageVersion });
    expect(packageFileData).toEqual(expectedPackageData);
  });
});
