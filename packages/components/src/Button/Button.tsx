import { type ElementType, forwardRef, useMemo } from 'react';
import type { LoadingButtonProps } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';
import type { WithoutEmotionSpecific } from '../types';

import { ButtonColors, ButtonVariants } from './enums';
import { LoadingButtonWrapper } from './styles';

export type ButtonProps = Omit<
  WithoutEmotionSpecific<LoadingButtonProps>,
  'variant' | 'color'
> & {
  /**
   * Тип кнопки
   */
  variant?: `${ButtonVariants}`;
  /**
   * Цвет текста кнопки
   */
  color?: `${ButtonColors}`;
  // https://github.com/mui/material-ui/issues/30038
  /**
   * Тип html-элемента
   */
  component?: ElementType;
  /**
   * Состояние кнопки - selected
   */
  selected?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = ButtonVariants.Contained,
      color = ButtonColors.Primary,
      ...restProps
    } = props;

    const loadingIndicatorColor = useMemo(() => {
      if (variant !== ButtonVariants.Contained) {
        return CircularProgressColors.PRIMARY;
      }

      return CircularProgressColors.INVERTED;
    }, [variant]);

    return (
      <LoadingButtonWrapper
        ref={ref}
        {...restProps}
        variant={variant}
        color={color}
        loadingIndicator={
          <CircularProgress color={loadingIndicatorColor} size="small" />
        }
      />
    );
  },
);

export default Button;
