import React from 'react';
import { Breakpoint } from '@mui/material/styles';

type StyleCSSType<Type extends keyof React.CSSProperties> =
  | React.CSSProperties[Type]
  | Partial<Record<Breakpoint, React.CSSProperties[Type]>>;

export type GridContainerProps = {
  container?: boolean;
  templateColumns?: StyleCSSType<'gridTemplateColumns'>;
  templateRows?: StyleCSSType<'gridTemplateRows'>;
  templateAreas?: StyleCSSType<'gridTemplateAreas'>;
  columnSpacing?: StyleCSSType<'gridColumnGap'>;
  rowSpacing?: StyleCSSType<'gridRowGap'>;
  spacing?: StyleCSSType<'gridGap'>;
  justifyItems?: StyleCSSType<'justifyItems'>;
  alignItems?: StyleCSSType<'alignItems'>;
  justifyContent?: StyleCSSType<'justifyContent'>;
  alignContent?: StyleCSSType<'alignContent'>;
  autoColumns?: StyleCSSType<'gridAutoColumns'>;
  autoRows?: StyleCSSType<'gridAutoRows'>;
  autoFlow?: StyleCSSType<'gridAutoFlow'>;
};

export type GridElementsProps = {
  column?: StyleCSSType<'gridColumn'>;
  row?: StyleCSSType<'gridRow'>;
  area?: StyleCSSType<'gridArea'>;
  justifySelf?: StyleCSSType<'justifySelf'>;
  alignSelf?: StyleCSSType<'alignSelf'>;
};

export type GridProps = GridContainerProps &
  GridElementsProps & { children?: React.ReactNode };
