export const COMMIT_TYPE = {
  Feat: 'feat',
  Refactor: 'refactor',
  Bug: 'bug',
  Test: 'test',
  Chore: 'chore',
  Build: 'build',
  Doc: 'doc',
} as const;

export const GROUP_HEADERS = {
  [COMMIT_TYPE.Feat]: '✨ Features',
  [COMMIT_TYPE.Refactor]: '🛠 Refactors',
  [COMMIT_TYPE.Bug]: '🐞 Bugs',
  [COMMIT_TYPE.Test]: '🧪 Tests',
  [COMMIT_TYPE.Chore]: '⌛️ Chore',
  [COMMIT_TYPE.Build]: '📦 Build',
  [COMMIT_TYPE.Doc]: '📑 Docs',
};
