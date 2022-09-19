module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  }
};
