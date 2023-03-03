module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/ui',
    () => 'npm run lint:types --workspace=@astral/ui',
  ],

  'packages/components/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/components',
    'npm run lint:styles --workspace=@astral/components',
    () => 'npm run lint:types --workspace=@astral/components',
  ],
  'packages/components/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@astral/components',
  ],

  'packages/icons/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/icons',
    () => 'npm run lint:types --workspace=@astral/icons',
  ],

  'packages/form/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/form',
    () => 'npm run lint:types --workspace=@astral/form',
  ],

  'packages/features/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/features',
    () => 'npm run lint:types --workspace=@astral/features',
  ],
  'packages/features/**/styles.{ts,tsx}': [
    'npm run lint:styles --workspace=@astral/features',
  ],

  'packages/validations/**/*.{js,ts}': [
    'npm run lint --workspace=@astral/validations',
    () => 'npm run lint:types --workspace=@astral/validations',
  ],

  'commander/**/*.{js}': ['npm run lint --workspace=@astral/commander'],

  'PRTitleLinter/**/*.{js}': ['npm run lint --workspace=@astral/PRTitleLinter'],
};
