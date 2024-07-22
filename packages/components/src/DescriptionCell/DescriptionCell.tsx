import { type ReactNode } from 'react';

import { Typography } from '../Typography';

import { IconWrapper, ItemWrapper, SubTitle, Wrapper } from './styles';

export type DescriptionCellProps = {
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

export const DescriptionCell = ({
  title,
  icon,
  subtitle,
  iconPosition = 'left',
}: DescriptionCellProps) => {
  return (
    <Wrapper $iconPosition={iconPosition}>
      <IconWrapper>{icon}</IconWrapper>
      <ItemWrapper>
        <Typography>{title}</Typography>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </ItemWrapper>
    </Wrapper>
  );
};
