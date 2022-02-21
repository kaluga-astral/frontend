import {
  Palette as MuiPalette,
  Theme as MuiTheme,
  PaletteColor,
  ThemeOptions,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { TypographyThemeOptions, typography } from './typography';
import { Background, Color, getPalette } from './palette';
import { FontsUrls, getComponents } from './components';
import { Brand, SPACING } from './constants';
import { Elevation, elevation } from './elevation';
import { Shape, shape } from './shape';

export type Palette = Omit<MuiPalette, 'grey' | 'background'> & {
  red: Color;
  green: Color;
  yellow: Color;
  grey: Color;
  primary: PaletteColor & Color;
  background: Background;
};

export type Theme = Omit<
  MuiTheme,
  'shadows' | 'palette' | 'shape' | 'typography'
> & {
  elevation: Elevation;
  palette: Palette;
  shape: Shape;
  typography: TypographyThemeOptions;
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
