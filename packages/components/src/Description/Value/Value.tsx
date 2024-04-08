import { type ReactElement, type ReactNode, useContext, useState } from 'react';
import CopyIcon from '@astral/icons/generated-themed-icons/CopyOutlineSm';

import { Typography, type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { IconButton } from '../../IconButton';
import { Tooltip } from '../../Tooltip';

import { Wrapper } from './styles';

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

  if (!canCopy) {
    return (
      <Typography {...props}>{children ?? stub ?? emptySymbol}</Typography>
    );
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
    <Wrapper
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      copyPosition={copyPosition}
    >
      <TooltipWrapper title={tooltipText}>
        <Typography {...props}>{children ?? stub ?? emptySymbol}</Typography>
      </TooltipWrapper>

      <TooltipWrapper title={tooltipText}>
        <IconButton aria-label="Скопировать" variant="text">
          <CopyIcon width={16} height={16} color={props.color as 'secondary'} />
        </IconButton>
      </TooltipWrapper>
    </Wrapper>
  );
};
