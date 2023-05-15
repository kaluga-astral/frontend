import { ElementType, forwardRef, useMemo } from 'react';
import { LoadingButtonProps } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';
import { WithoutEmotionSpecific } from '../types';

import { ButtonColors, ButtonVariants } from './enums';
import { LoadingButtonWrapper } from './styles';

export type ButtonProps = Omit<
  WithoutEmotionSpecific<LoadingButtonProps>,
  'variant' | 'color'
> & {
  variant?: `${ButtonVariants}`;
  color?: `${ButtonColors}`;
  // https://github.com/mui/material-ui/issues/30038
  component?: ElementType;
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
