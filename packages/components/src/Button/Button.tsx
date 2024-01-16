import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  useMemo,
} from 'react';
import type { LoadingButtonProps } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';
import type { FixedForwardRef, WithoutEmotionSpecific } from '../types';

import { ButtonColors, ButtonVariants } from './enums';
import { LoadingButtonWrapper } from './styles';

const typedForwardRef = forwardRef as FixedForwardRef;

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
};

type ForwardedRefButton = <TComponent extends ElementType>(
  props: ButtonProps<TComponent> &
    Omit<
      ComponentPropsWithRef<
        ElementType extends TComponent ? 'button' : TComponent
      >,
      'ref'
    >,
  // eslint-disable-next-line
  ref: ForwardedRef<any>,
) => JSX.Element;

const UnwrappedButton: ForwardedRefButton = (props, ref) => {
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
};

export const Button = typedForwardRef(UnwrappedButton);

export default Button;
