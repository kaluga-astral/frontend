import {
  Theme as MuiTheme,
  ThemeOptions,
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { merge } from 'lodash-es';

import { typography } from './typography';
import { getPalette } from './palette';
import { FontsUrls, getComponents } from './components';
import { Brand, SPACING } from './constants';
import { Elevation, elevation } from './elevation';

export type Theme = Omit<MuiTheme, 'shadows'> & { elevation: Elevation };

type CreateThemeParams = {
  brand: Brand;
  options?: ThemeOptions;
  fontsUrls: FontsUrls;
};

export const createTheme = ({
  brand,
  options,
  fontsUrls,
}: CreateThemeParams) => {
  const themeOptions: ThemeOptions = {
    typography,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(brand, fontsUrls),
  };

  const muiTheme = responsiveFontSizes(
    createMuiTheme(merge({}, themeOptions, options))
  );

  return merge(muiTheme, { elevation }) as Theme;
};
