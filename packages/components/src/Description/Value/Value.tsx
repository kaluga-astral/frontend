import { type ReactNode, useContext } from 'react';

import { type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { DescriptionContext } from '../DescriptionContext';

import { StyledCopyTypography, StyledTypography, Wrapper } from './styles';

export type ValueProps = Pick<
  TypographyProps,
  'color' | 'variant' | 'children'
> & {
  /**
   * @example <Description.Item stub="нет значения">value</Description.Item>
   * Заглушка, отображающаяся, если нет значения
   */
  stub?: ReactNode;

  /**
   * Добавляет возможность копирования
   */
  canCopy?: boolean;

  /**
   * Позиционирует иконку "копировать" (слева / справа от текста)
   */
  copyPosition?: 'left' | 'right';
  /**
   * Текст, который будет скопирован. Перекрывает обычное копирование если children является строкой
   */
  copyText?: string;
};

export const Value = ({
  canCopy,
  copyPosition = 'right',
  copyText,
  children,
  stub,
  ...props
}: ValueProps) => {
  const { leader, direction } = useContext(DescriptionContext);

  const { emptySymbol } = useContext(ConfigContext);

  const resultChildren = children || stub || emptySymbol;

  if (!canCopy) {
    return (
      <StyledTypography
        $direction={direction}
        component="dd"
        children={resultChildren}
        $leader={leader}
        {...props}
      />
    );
  }

  return (
    <Wrapper>
      <StyledCopyTypography
        copyPosition={copyPosition}
        copyText={copyText}
        $direction={direction}
        $leader={leader}
        component="div"
        {...props}
      >
        {resultChildren}
      </StyledCopyTypography>
    </Wrapper>
  );
};
