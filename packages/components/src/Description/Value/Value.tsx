import type { ReactNode } from 'react';
import { useContext } from 'react';

import type { TypographyProps } from '../../Typography';
import { Typography } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';

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

export const Value = ({ children, stub, ...props }: ValueProps) => {
  const { emptySymbol } = useContext(ConfigContext);

  return (
    <ValueWrapper>
      <Typography {...props}>{children ?? stub ?? emptySymbol}</Typography>
    </ValueWrapper>
  );
};
