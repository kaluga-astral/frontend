// eslint-disable-next-line import/no-extraneous-dependencies
const getDirNames = require('read-dir-names');

// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = {
  // Область всегда только в верхнем регистре
  'scope-case': [2, 'always', 'upper-case'],

  // Описание не может быть пустым
  'subject-empty': [2, 'never'],

  // Описание не должно заканчиваться '.'
  'subject-full-stop': [2, 'never', '.'],

  // Тип всегда только в нижнем регистре
  'type-case': [2, 'always', 'lower-case'],

  // Тип не может быть пустым
  'type-empty': [2, 'never'],

  // Перечислим все возможные варианты коммитов
  'type-enum': [
    2,
    'always',
    [
      'build',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
      'wip',
    ],
  ],
};
