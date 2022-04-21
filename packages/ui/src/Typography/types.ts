import React from 'react';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

export type OverrideComponentProps<P, C extends React.ElementType> = P &
  Omit<React.ComponentPropsWithRef<C>, keyof P>;

export interface OverridableFC<P, D extends React.ElementType> {
  <C extends React.ElementType = D>(
    props: OverrideComponentProps<P, C> & {
      component?: C;
    }
  ): React.ReactElement;
}

export type TypographyPropsMap = Omit<MuiTypographyProps, 'variant'> & {
  variant?:
    | Variant
    | 'h7'
    | 'h8'
    | 'h9'
    | 'ui'
    | 'link'
    | 'pointer'
    | 'small'
    | 'code';
};

export type TypographyProps<C extends React.ElementType = 'span'> =
  OverrideComponentProps<TypographyPropsMap, C>;
