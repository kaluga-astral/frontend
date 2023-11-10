import type { Theme as MuiTheme } from '@mui/material/styles';

import type { Elevation, Palette, Shape } from '../theme';
import type { TypographyThemeOptions } from '../theme/typography';

declare module '@mui/material/styles' {
  export interface Theme
    extends Omit<MuiTheme, 'shadows' | 'palette' | 'shape' | 'typography'> {
    elevation: Elevation;
    palette: Palette;
    shape: Shape;
    typography: TypographyThemeOptions;
  }
}
