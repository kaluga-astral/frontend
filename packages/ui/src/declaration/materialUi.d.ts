import { Theme as MuiTheme } from '@mui/material/styles';

import { Elevation } from '../theme';
import { Shape } from '../theme';
import { TypographyThemeOptions } from '../theme/typography';
import { Palette } from '../theme';

declare module '@mui/material/styles' {
  export interface Theme
    extends Omit<MuiTheme, 'shadows' | 'palette' | 'shape' | 'typography'> {
    elevation: Elevation;
    palette: Palette;
    shape: Shape;
    typography: TypographyThemeOptions;
  }
}
