// eslint-disable-next-line
module.exports = {
  'packages/ui/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/ui',
    () => 'npm run lint:types --workspace=@astral/ui',
  ],
  'packages/icons/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@astral/icons',
    () => 'npm run lint:types --workspace=@astral/icons',
  ],
  'commander/**/*.{js}': ['npm run lint --workspace=@astral/commander'],
};
