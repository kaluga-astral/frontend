const path = require('path');

const getDirNames = require('read-dir-names');

const packagesNames = getDirNames(path.resolve(__dirname, 'packages'));
const componentsNames = getDirNames(
  path.resolve(__dirname, 'packages', 'ui', 'src')
);

module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],

  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:UIKIT-[0-9]{2,4}:\s)?(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: ["type", "scope", "subject"],
      issuePrefixes: ["^UIKIT-[0-9]{2,4}"],
    },
  },

  rules: {
    // Тело коммита должно начинаться с пустой строки
    "body-leading-blank": [2, "always"],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    "footer-leading-blank": [2, "always"],

    // Максимальная длина заголовка 72 символа
    "header-max-length": [2, "always", 72],

    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    // Описание не может быть пустым
    "subject-empty": [2, "never"],

    // Описание не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],

    // Описание должно начинаться с большой буквы
    "subject-case": [2, "always", "sentence-case"],

    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],

    // Тип не может быть пустым
    "type-empty": [2, "never"],

    // Перечислим все возможные варианты коммитов
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'bug',
        'wip',
        'refactor',
        'doc',
        'build',
        'chore',
        'revert',
        'style',
        'wip',
      ],
    ],

    // Перечисления доступных scope
    'scope-enum': [2, 'always', [...packagesNames, ...componentsNames]],
  },
};
