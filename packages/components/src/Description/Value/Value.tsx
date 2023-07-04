import { ReactNode } from 'react';

import { useConfig } from '../../ConfigProvider/ConfigProvider';
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

export const Value = ({ children, stub = STUB, ...props }: ValueProps) => {
  const { emptySymbol } = useConfig();

  return (
    <ValueWrapper>
      <Typography {...props}>{children || emptySymbol || stub}</Typography>
    </ValueWrapper>
  );
};
