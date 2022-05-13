const path = require('path');

const getDirNames = require('read-dir-names');

const packagesNames = getDirNames(path.resolve(__dirname, 'packages'));
const componentsNames = getDirNames(
  path.resolve(__dirname, 'packages', 'ui', 'src')
);

module.exports = {
  parserOpts: {
    headerPattern: /^(?:UI-KIT-[0-9]{4}:\s)?(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject"],
    issuePrefixes: ["^UI-KIT-[0-9]{4}"],
  },
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
        'wip',
      ],
    ],

    // Перечисления доступных scope
    'scope-enum': [2, 'always', [...packagesNames, ...componentsNames]],
  },
};
