import { type ReactNode, useContext, useState } from 'react';

import { type TypographyProps } from '../../Typography';
import { ConfigContext } from '../../ConfigProvider';
import { Tooltip } from '../../Tooltip';
import { DescriptionContext } from '../DescriptionContext';

import {
  DescriptionDefinition,
  StyledCopyIcon,
  StyledTypography,
} from './styles';
import { CopyStatus } from './enums';

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
  const { leader } = useContext(DescriptionContext);
  const [status, setStatus] = useState<CopyStatus>(CopyStatus.CanCopy);
  const { emptySymbol } = useContext(ConfigContext);

  const resultChildren = children || stub || emptySymbol;

  if (!canCopy) {
    return (
      <StyledTypography
        component="dd"
        children={resultChildren}
        $leader={leader}
        {...props}
      />
    );
  }

  const handleClick = () => {
    navigator.clipboard
      .writeText(children?.toString() || '')
      .then(() => setStatus(CopyStatus.Copied))
      .catch(() => setStatus(CopyStatus.Error));
  };

  const handleMouseLeave = () => {
    if (status !== CopyStatus.CanCopy) {
      // Ставим таймер чтобы тултип успел скрыться
      // В ином случае пользователь увидит изменение текста
      setTimeout(() => {
        setStatus(CopyStatus.CanCopy);
      }, 100);
    }
  };

  return (
    <DescriptionDefinition onMouseLeave={handleMouseLeave}>
      <Tooltip placement="bottom" title={status}>
        <StyledTypography
          $canCopy={canCopy}
          $leader={leader}
          {...props}
          onClick={handleClick}
        >
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
    </DescriptionDefinition>
  );
};
