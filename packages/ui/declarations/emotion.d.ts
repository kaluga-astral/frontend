import { Theme as CustomTheme } from '../src';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
