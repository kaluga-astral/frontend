import { ReactNode } from 'react';

import { Typography, TypographyProps } from '../../Typography';

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
  <Typography {...props}>{children || stub}</Typography>
);
