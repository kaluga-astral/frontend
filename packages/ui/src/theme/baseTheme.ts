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
import { Elevation } from './types';

export type Theme = Omit<MuiTheme, 'shadows'> & { elevation: Elevation };

export const createTheme = (
  brand: Brand,
  options: ThemeOptions = {}
): Theme => {
  const themeOptions: ThemeOptions = {
    typography,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(brand),
  };

  const muiTheme = responsiveFontSizes(
    createMuiTheme(merge({}, themeOptions, options))
  );

  return merge(muiTheme, { elevation }) as Theme;
};
