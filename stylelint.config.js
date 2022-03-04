module.exports = {
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
        'stylelint-prettier/recommended',
      ],
      plugins: ['stylelint-prettier', 'stylelint-order'],
      rules: {
        // отключено из-за несовместимости со styled
        'function-no-unknown': null,
        // отключено из-за несовместимости со styled
        'function-name-case': null,
        // отключено из-за несовместимости со styled
        'value-keyword-case': null,
        // разрешен kebab case (используется в mui)
        'selector-class-pattern': '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$',
      },
    },
  ],
};
