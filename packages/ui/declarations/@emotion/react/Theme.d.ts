import '@emotion/react';
import { Theme as BaseTheme } from '../../../src/theme/baseTheme';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
