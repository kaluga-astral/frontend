const path = require('path');

const getDirNames = require('read-dir-names');
// test
const packagesNames = getDirNames(path.resolve(__dirname, 'packages'));
const componentsNames = getDirNames(
  path.resolve(__dirname, 'packages', 'ui', 'src')
);

console.log(componentsNames);

module.exports = {
  rules: {
    // Описание не может быть пустым
    'subject-empty': [2, 'never'],

    // Описание не должно заканчиваться '.'
    'subject-full-stop': [2, 'never', '.'],

    // Тип не может быть пустым
    'type-empty': [2, 'never'],

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
        'test',
        'wip',
      ],
    ],

    // Перечисления доступных scope
    'scope-enum': [2, 'always', [...packagesNames, ...componentsNames]],
  },
};
