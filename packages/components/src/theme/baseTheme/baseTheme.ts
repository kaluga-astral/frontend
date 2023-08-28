import {
  BreakpointsOptions,
  Palette as MuiPalette,
  Theme as MuiTheme,
  PaletteColor,
  ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { getTypography } from '../typography';
import { Background, Color, getPalette } from '../palette';
import { FontsUrls, getComponents } from '../components';
import { Brand, SPACING } from '../constants';
import { elevation } from '../elevation';
import { shape } from '../shape';
import { defaultBreakpoints } from '../breakpoints';

export type Palette = Omit<MuiPalette, 'grey' | 'background'> & {
  red: Color;
  green: Color;
  yellow: Color;
  grey: Color;
  primary: PaletteColor & Color;
  background: Background;
};

export type Theme = MuiTheme;

type CreateThemeParams = {
  brand: Brand;
  options?: ThemeOptions;
  fontsUrls: FontsUrls;
  breakpoints?: BreakpointsOptions;
  htmlFontSizeForScope?: number;
};

export const createTheme = (params: CreateThemeParams) => {
  const {
    brand,
    options,
    fontsUrls,
    breakpoints = defaultBreakpoints,
    htmlFontSizeForScope,
  } = params;
  const themeOptions = {
    typography: getTypography(htmlFontSizeForScope),
    breakpoints,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(fontsUrls),
  };
  const muiTheme = createMuiTheme(merge({}, themeOptions, options));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return merge(muiTheme as any, { elevation, shape }) as Theme;
};
