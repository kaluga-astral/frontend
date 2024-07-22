import { type ReactNode } from 'react';

import { Typography } from '../Typography';

import {
  DescriptionCellWrapper,
  IconWrapper,
  ItemWrapper,
  SubTitle,
} from './styles';

export type TableDescriptionCellProps = {
  /**
   * Заголовок элемента таблицы
   */
  title: ReactNode;
  /**
   * Иконка элемента таблицы
   */
  icon?: ReactNode;
  /**
   * Подзаголовок элемента таблицы
   */
  subtitle?: ReactNode;
  /**
   * Позиционирует иконку (слева/справа от текста)
   */
  iconPosition?: 'left' | 'right';
};

export const TableDescriptionCell = ({
  title,
  icon,
  subtitle,
  iconPosition = 'left',
}: TableDescriptionCellProps) => {
  return (
    <DescriptionCellWrapper>
      {iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      <ItemWrapper>
        <Typography>{title}</Typography>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </ItemWrapper>
      {iconPosition === 'right' && (
        <IconWrapper $iconPosition={iconPosition}>{icon}</IconWrapper>
      )}
    </DescriptionCellWrapper>
  );
};
