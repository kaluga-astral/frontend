import { addons } from '@storybook/manager-api';

import { create } from '@storybook/theming/create';

import logoSrc from './public/logo.svg';

const storybookTheme =  create({
  brandTitle: 'Астрал-Софт',
  brandImage: logoSrc,
});

addons.setConfig({
  theme: storybookTheme,
});
