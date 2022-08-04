const path = require('path');

const loadConfig = require('@commitlint/load').default;
const lint = require('@commitlint/lint').default;

const lintPRTitle = async ({ title, configName = 'commitlint.config.js' }) => {
  const config = await loadConfig(
    {},
    { file: path.join(process.cwd(), configName), cwd: process.cwd() },
  );

  const lintingResult = await lint(title, config.rules, config);

  if (lintingResult.valid) {
    console.log('Title is valid');

    return;
  }

  const errorMessage = lintingResult.errors
    .map(({ message, name }) => `${name}:${message}`)
    .join('\n');

  throw Error(errorMessage);
};

module.exports = { lintPRTitle };
