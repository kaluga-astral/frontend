import '@emotion/react';
import { Theme as UIKitTheme } from '../theme';

declare module '@emotion/react' {
  export interface Theme extends UIKitTheme {}
}
