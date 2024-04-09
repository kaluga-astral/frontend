import { type ReactElement, type ReactNode, useContext, useState } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { Tooltip } from '../../Tooltip';

import { CopyWrapper, StyledCopyIcon } from './styles';

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

const TooltipWrapper = (props: { children: ReactElement; title: string }) => {
  return (
    <Tooltip placement="bottom" title={props.title}>
      {props.children}
    </Tooltip>
  );
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
    <CopyWrapper
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      copyPosition={copyPosition}
    >
      <TooltipWrapper title={tooltipText}>{ValueText}</TooltipWrapper>

      <TooltipWrapper title={tooltipText}>
        <StyledCopyIcon color={props.color as 'secondary'} />
      </TooltipWrapper>
    </CopyWrapper>
  );
};
