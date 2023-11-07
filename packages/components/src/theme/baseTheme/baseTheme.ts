import {
  BreakpointsOptions,
  Palette as MuiPalette,
  PaletteColor,
  ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { typography } from '../typography';
import { Background, Color, getPalette } from '../palette';
import { FontsUrls, getComponents } from '../components';
import { Brand, SPACING } from '../constants';
import { elevation } from '../elevation';
import { shape } from '../shape';
import { defaultBreakpoints } from '../breakpoints';
import { Theme } from '../types';

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
  breakpoints?: BreakpointsOptions;
};

export const createTheme = (params: CreateThemeParams) => {
  const {
    brand,
    options,
    fontsUrls,
    breakpoints = defaultBreakpoints,
  } = params;
  const themeOptions = {
    typography,
    breakpoints,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(fontsUrls),
  };
  const muiTheme = createMuiTheme(merge({}, themeOptions, options));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return merge(muiTheme as any, { elevation, shape }) as Theme;
};