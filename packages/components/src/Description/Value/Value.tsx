import { type ReactNode, useContext, useState } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
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

export const Value = ({
  canCopy,
  copyPosition = 'right',
  children,
  stub,
  ...props
}: ValueProps) => {
  const [isCopied, setCopied] = useState(false);
  const { emptySymbol } = useContext(ConfigContext);

  const resultChildren = children ?? stub ?? emptySymbol;

  if (!canCopy) {
    return <Typography children={resultChildren} {...props} />;
  }

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(children?.toString() || '');
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
      <StyledText {...props}>
        {copyPosition === 'left' && (
          <StyledCopyIcon
            $copyPosition={copyPosition}
            color={props.color as 'secondary'}
          />
        )}

        {resultChildren}

        {copyPosition === 'right' && (
          <StyledCopyIcon
            $copyPosition={copyPosition}
            color={props.color as 'secondary'}
          />
        )}
      </StyledText>
    </Tooltip>
  );
};
