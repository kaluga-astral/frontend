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

type CustomTheme = Omit<MuiTheme, 'shadows'> & { elevation: Elevation };

export const createTheme = (
  brand: Brand,
  options: ThemeOptions = {}
): CustomTheme => {
  const themeOptions: ThemeOptions = {
    typography,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(brand),
  };

  const theme = responsiveFontSizes(
    createMuiTheme(merge({}, themeOptions, options))
  );

  return merge(theme, { elevation }) as CustomTheme;
};
