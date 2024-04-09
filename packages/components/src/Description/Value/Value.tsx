import { type ReactNode, useContext, useState } from 'react';

import { type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { Tooltip } from '../../Tooltip';

import { StyledCopyIcon, StyledText } from './styles';

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
};

const ValueTextC = ({
  children,
  stub,
  copyPosition = 'right',
  ...props
}: ValueProps) => {
  const { emptySymbol } = useContext(ConfigContext);

  return (
    <StyledText {...props} $copyPosition={copyPosition}>
      {children ?? stub ?? emptySymbol}
    </StyledText>
  );
};

export const Value = ({ canCopy, ...props }: ValueProps) => {
  const [isCopied, setCopied] = useState(false);

  if (!canCopy) {
    return <ValueTextC {...props} />;
  }

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(props.children?.toString() || '');
  };

  const handleMouseLeave = () => {
    if (isCopied) {
      // Ставим таймер чтобы тултип успел скрыться
      // В ином случае пользователь увидит изменение текста
      setTimeout(() => {
        setCopied(false);
      }, 100);
    }
  };

  const tooltipText = isCopied ? 'Скопировано' : 'Скопировать';

  return (
    <Tooltip
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      withoutContainer={false}
      placement="bottom"
      title={tooltipText}
    >
      <ValueTextC {...props}>
        {props.children}

        <StyledCopyIcon color={props.color as 'secondary'} />
      </ValueTextC>
    </Tooltip>
  );
};
