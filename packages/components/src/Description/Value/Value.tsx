import { ReactNode } from 'react';

import { Typography, TypographyProps } from '../../Typography';

import { ValueWrapper } from './styles';

export type ValueProps = Pick<
  TypographyProps,
  'color' | 'variant' | 'children'
> & {
  /**
   * @example <Description.Item stub="нет значения">value</Description.Item>
   * Заглушка, отображающаяся, если нет значения
   */
  stub?: ReactNode;
};

const STUB = <>&ndash;</>;

export const Value = ({ children, stub = STUB, ...props }: ValueProps) => (
  <ValueWrapper>
    <Typography {...props}>{children || stub}</Typography>
  </ValueWrapper>
);
