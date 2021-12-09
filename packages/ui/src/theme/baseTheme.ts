import {
  Theme as MuiTheme,
  ThemeOptions,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { typography } from './typography';
import { getPalette } from './palette';
import { getComponents } from './components';
import { Brand, SPACING } from './constants';
import { elevation } from './elevation';

export type { Theme } from '@mui/material/styles';

export const createTheme = (
  brand: Brand,
  options: ThemeOptions = {}
): Omit<MuiTheme, 'shadows'> => {
  const themeOptions: ThemeOptions = {
    elevation,
    typography,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(brand),
  };

  return responsiveFontSizes(createMuiTheme(merge({}, themeOptions, options)));
};
