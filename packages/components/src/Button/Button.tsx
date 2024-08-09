import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  useMemo,
} from 'react';
import type { LoadingButtonProps } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';
import type { WithoutEmotionSpecific } from '../types';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import { ButtonColors, ButtonVariants } from './enums';
import { StyledLoadingButton } from './styles';

export type ButtonProps<TComponent extends ElementType = ElementType> = Omit<
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
  component?: TComponent;

  /**
   * Состояние кнопки - selected
   */
  selected?: boolean;
  // TODO Хак через Omit позволяет решить проблему с потерей типов для props
  // Необходимо решить в рамках тех.долга https://track.astral.ru/soft/browse/UIKIT-1451
} & Omit<
    ComponentPropsWithRef<
      ElementType extends TComponent ? 'button' : TComponent
    >,
    ''
  >;

const UnwrappedButton = <TComponent extends ElementType>(
  props: ButtonProps<TComponent>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const {
    variant = ButtonVariants.Contained,
    color = ButtonColors.Primary,
    disabled,
    disabledReason,
    note,
    ...restProps
  } = props;

  const loadingIndicatorColor = useMemo(() => {
    if (variant !== ButtonVariants.Contained) {
      return CircularProgressColors.PRIMARY;
    }

    return CircularProgressColors.INVERTED;
  }, [variant]);

  return (
    <StyledLoadingButton
      {...restProps}
      ref={ref}
      disabled={disabled}
      variant={variant}
      color={color}
      loadingIndicator={
        <CircularProgress color={loadingIndicatorColor} size="small" />
      }
    />
  );
};

export const Button = forwardRefWithGeneric(UnwrappedButton);

export default Button;
