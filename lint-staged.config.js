module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) => `npm run lint --workspace=@astral/ui -- ${fileNames}`,
    () => 'npm run lint:types --workspace=@astral/ui',
  ],

  'packages/components/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) =>
      `npm run lint --workspace=@astral/components -- ${fileNames.join(' ')}`,
    () => 'npm run lint:types --workspace=@astral/components',
  ],
  'packages/components/**/styles.{ts,tsx}': [
    (fileNames) =>
      `npm run lint:styles --workspace=@astral/components -- ${fileNames.join(
        ' ',
      )}`,
  ],

  'packages/icons/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) =>
      `npm run lint --workspace=@astral/icons -- ${fileNames.join(' ')}`,
    () => 'npm run lint:types --workspace=@astral/icons',
  ],

  'packages/form/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) =>
      `npm run lint --workspace=@astral/form -- ${fileNames.join(' ')}`,
    () => 'npm run lint:types --workspace=@astral/form',
  ],

  'packages/features/**/*.{js,jsx,ts,tsx}': [
    (fileNames) => `npm run spellcheck ${fileNames.join(' ')}`,
    (fileNames) =>
      `npm run lint --workspace=@astral/features -- ${fileNames.join(' ')}`,
    () => 'npm run lint:types --workspace=@astral/features',
  ],
  'packages/features/**/styles.{ts,tsx}': [
    (fileNames) =>
      `npm run lint:styles --workspace=@astral/features -- ${fileNames.join(
        ' ',
      )}`,
  ],

  'commander/**/*.js': ['npm run lint --workspace=@astral/commander'],

  'PRTitleLinter/**/*.js': ['npm run lint --workspace=@astral/PRTitleLinter'],
};
