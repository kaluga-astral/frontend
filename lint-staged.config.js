module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/ui',
    'npm run lint:styles --workspace=@astral/ui',
    () => 'npm run lint:types --workspace=@astral/ui',
  ],
  'packages/icons/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/icons',
    () => 'npm run lint:types --workspace=@astral/icons',
  ],
  'packages/form/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/form',
    () => 'npm run lint:types --workspace=@astral/form',
  ],
  'packages/validations/**/*.{js,ts}': [
    'npm run lint --workspace=@astral/validations',
    () => 'npm run lint:types --workspace=@astral/validations',
  ],
  'commander/**/*.{js}': ['npm run lint --workspace=@astral/commander'],
};
