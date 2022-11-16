module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  reporters: ['default', 'jest-junit'],
};
