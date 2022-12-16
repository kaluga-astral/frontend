const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');
// eslint-disable-next-line import/no-extraneous-dependencies
const copy = require('recursive-copy');

const packagesNames = ['ui', 'components', 'form', 'validations', 'icons'];

const packagesSourcePath = path.resolve(__dirname, '..', 'packages');

shell.rm('-rf', path.resolve(__dirname, 'packages'));
shell.cd('..');

shell.exec(
  'cross-env RELEASE_TAG=1.0.0-test.0 npm run build --workspaces --if-present',
);

packagesNames.forEach((packageName) => {
  copy(
    path.join(packagesSourcePath, packageName, 'lib'),
    path.resolve(__dirname, 'packages', packageName),
    {
      overwrite: true,
      expand: true,
      dot: true,
      junk: true,
    },
  ).catch((error) => {
    console.error(error);
    process.exit(1);
  });
});
