import { type ReactNode, useContext } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';

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

export const Value = ({ children, stub, ...props }: ValueProps) => {
  const { emptySymbol } = useContext(ConfigContext);

  return <Typography {...props}>{children ?? stub ?? emptySymbol}</Typography>;
};
