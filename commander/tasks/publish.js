const shell = require('shelljs');

const { DIST_DIR_NAME } = require('../constants');

const publish = () => {
  console.log('Starting publish...');

  const { NPM_PUBLISH_TOKEN } = process.env;

  const { code } = shell.exec(
    `npm publish ./${DIST_DIR_NAME} --_authToken=${NPM_PUBLISH_TOKEN}`
  );

  if (code !== 0) {
    shell.exit(code);
  }

  console.log('Finish publish');
};

module.exports = { publish };
