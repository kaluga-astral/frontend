import {
  Palette as MuiPalette,
  PaletteColor,
  Theme,
  ThemeOptions,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { typography } from './typography';
import { Background, Color, getPalette } from './palette';
import { FontsUrls, getComponents } from './components';
import { Brand, SPACING } from './constants';
import { elevation } from './elevation';
import { shape } from './shape';

export type Palette = Omit<MuiPalette, 'grey' | 'background'> & {
  red: Color;
  green: Color;
  yellow: Color;
  grey: Color;
  primary: PaletteColor & Color;
  background: Background;
};

type CreateThemeParams = {
  brand: Brand;
  options?: ThemeOptions;
  fontsUrls: FontsUrls;
};

export const createTheme = (params: CreateThemeParams) => {
  const { brand, options, fontsUrls } = params;
  const themeOptions = {
    typography,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(fontsUrls),
  };

  const muiTheme = responsiveFontSizes(
    createMuiTheme(merge({}, themeOptions, options))
  );

  return merge(muiTheme as any, { elevation, shape }) as Theme;
};
