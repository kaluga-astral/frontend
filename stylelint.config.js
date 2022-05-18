module.exports = {
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
      extends: [
        'stylelint-config-standard',
        // группирует правила по блокам
        'stylelint-config-rational-order',
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
        'selector-class-pattern': '(([A-Z][a-z0-9]+)*)+(\_[a-z0-9]+([A-Z][a-z0-9]+)*)?(\-[a-z0-9]+([A-Z][a-z0-9]+)*)?',
        'plugin/rational-order': [
          true,
          {
            'empty-line-between-groups': true,
          },
        ],
        // отключено из-за конфликта с plugin/rational-order
        'declaration-empty-line-before': null,
      },
    },
  ],
};
