import { type ReactNode, type SyntheticEvent } from 'react';
import {
  type IconContainerProps as MuiIconContainerProps,
  type RatingProps as MuiRatingProps,
} from '@mui/material';

import { DEFAULT_HINTS } from './constants';
import { IconContainer } from './IconContainer';
import { StyledRating } from './styles';

export type RatingProps = Omit<MuiRatingProps, 'size' | 'onChange'> & {
  /**
   * Кастомные иконки
   */
  icons?: ReactNode[];

  /**
   * Кастомные подсказки
   */
  hints?: string[];

  /**
   * Флаг, отвечающий за отображение подсказок
   * @default false
   */
  isVisibleHints?: boolean;

  /**
   * Функция, вызывающаяся при изменении значения
   * @param value - выбранное значение
   */
  onChange: (value: number | null) => void;
};

// Компонент не экспортируется из пакета и пока не предназначен для использования в продуктах
// Это связано с тем что он пока не стандартизирован на стороне дизайна и сейчас необходим для реализации компонента обратной связи
export const Rating = ({
  isVisibleHints,
  icons,
  hints = DEFAULT_HINTS,
  onChange,
  ...props
}: RatingProps) => {
  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    value: number | null,
  ) => onChange(value);

  const renderIconContainer = ({
    value,
    ...iconContainerProps
  }: MuiIconContainerProps) => (
    <IconContainer
      {...iconContainerProps}
      value={value}
      isVisibleHints={isVisibleHints}
      icon={icons ? icons[value - 1] : null}
      hint={hints[value - 1]}
    />
  );

  return (
    <StyledRating
      IconContainerComponent={renderIconContainer}
      getLabelText={(value: number) => hints[value - 1]}
      {...props}
      onChange={handleChange}
    />
  );
};
