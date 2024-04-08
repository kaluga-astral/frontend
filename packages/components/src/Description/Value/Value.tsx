import { type ReactNode, useContext, useState } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { Tooltip } from '../../Tooltip';

import { StyledCopyIcon, Wrapper } from './styles';

export type ValueProps = Pick<
  TypographyProps,
  'color' | 'variant' | 'children'
> & {
  /**
   * @example <Description.Item stub="нет значения">value</Description.Item>
   * Заглушка, отображающаяся, если нет значения
   */
  stub?: ReactNode;
  canCopy?: boolean;
  copyPosition?: 'left' | 'right';
};

export const Value = ({
  children,
  stub,
  canCopy,
  copyPosition = 'right',
  ...props
}: ValueProps) => {
  const { emptySymbol } = useContext(ConfigContext);
  const [isCopied, setCopied] = useState(false);

  const ValueText = (
    <Typography {...props}>{children ?? stub ?? emptySymbol}</Typography>
  );

  if (!canCopy) {
    return ValueText;
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
    <Tooltip placement="bottom" title={tooltipText}>
      <Wrapper
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        copyPosition={copyPosition}
      >
        {ValueText}

        <StyledCopyIcon color={props.color as 'secondary'} />
      </Wrapper>
    </Tooltip>
  );
};
