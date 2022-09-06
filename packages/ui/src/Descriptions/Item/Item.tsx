import { ReactNode } from 'react';

import { Typography, TypographyColor } from '../../Typography';
import { TypographyColors } from '../../Typography/enums';

import { DescriptionItem } from './styles';

export type DescriptionProps = {
  /**
   * @example <Description.Item color="success">value</Description.Item>
   * Цвет значения
   */
  color?: TypographyColor;
  /**
   * @example <Description.Item stub="нет значения">value</Description.Item>
   * Заглушка, отображающаяся, если нет значения
   */
  stub?: ReactNode;
  /**
   * Значение
   */
  children?: ReactNode;
  /**
   * @example <Description.Item title="Название значения">value</Description.Item>
   * Название значения
   */
  title: string;
};

const STUB = <>&ndash;</>;

export const Item = ({
  color = TypographyColors.text,
  title,
  children,
  stub = STUB,
}: DescriptionProps) => {
  // TODO: в палитре у textSecondary цвет такой же, как у text.main. Нужно либо добавить textSecondary, либо расширить цвета в TypographyColors
  return (
    <DescriptionItem>
      <Typography color="grey.500">{title}:&nbsp;</Typography>
      <Typography color={color}>{children || stub}</Typography>
    </DescriptionItem>
  );
};
