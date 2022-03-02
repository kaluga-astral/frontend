// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [2, 'always', ['foo']],
  },
};
