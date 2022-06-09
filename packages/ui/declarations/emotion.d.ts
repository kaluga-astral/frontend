/// <reference types="@emotion/react/types/css-prop" />

// import '@emotion/react';
import { Theme as BaseTheme } from '../src/theme/baseTheme';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}

export {};
