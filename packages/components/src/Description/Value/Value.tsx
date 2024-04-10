import { type ReactNode, useContext, useState } from 'react';

import { Typography, type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { Tooltip } from '../../Tooltip';

import { StyledCopyIcon, StyledTypography } from './styles';

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

type CopyStatus = 'error' | 'copied' | 'canCopy';

export const Value = ({
  canCopy,
  copyPosition = 'right',
  children,
  stub,
  ...props
}: ValueProps) => {
  const [status, setStatus] = useState<CopyStatus>('canCopy');
  const { emptySymbol } = useContext(ConfigContext);

  const resultChildren = children ?? stub ?? emptySymbol;

  if (!canCopy) {
    return <Typography children={resultChildren} {...props} />;
  }

  const handleClick = () => {
    navigator.clipboard
      .writeText(children?.toString() || '')
      .then(() => setStatus('copied'))
      .catch(() => setStatus('error'));
  };

  const handleMouseLeave = () => {
    if (status !== 'canCopy') {
      // Ставим таймер чтобы тултип успел скрыться
      // В ином случае пользователь увидит изменение текста
      setTimeout(() => {
        setStatus('canCopy');
      }, 100);
    }
  };

  const getTooltipText = (): string => {
    switch (status) {
      case 'copied':
        return 'Скопировано';
      case 'error':
        return 'Ошибка копирования';
      default:
        return 'Скопировать';
    }
  };
  const tooltipText = getTooltipText();

  return (
    <Tooltip
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      withoutContainer={false}
      placement="bottom"
      title={tooltipText}
    >
      <StyledTypography {...props}>
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
      </StyledTypography>
    </Tooltip>
  );
};
