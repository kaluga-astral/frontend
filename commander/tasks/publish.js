const shell = require('shelljs');

const { DIST_DIR_NAME } = require('../constants');

const publish = () => {
  const { NPM_PUBLISH_TOKEN } = process.env;

  const { code } = shell.exec(
    `npm publish ./${DIST_DIR_NAME} --_auth=${NPM_PUBLISH_TOKEN}`
  );

  if (code !== 0) {
    shell.exit(code);
  }
};

module.exports = { publish };
