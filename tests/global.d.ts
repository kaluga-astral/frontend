/// <reference types="../packages/ui/src/declaration/emotion" />
/// <reference types="../packages/ui/src/declaration/mui-material" />
/// <reference types="@emotion/react/types/css-prop" />

declare module '*.svg' {
  const image: string;

  export default image;
}
