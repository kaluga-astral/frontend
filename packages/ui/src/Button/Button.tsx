import { forwardRef, useMemo } from 'react';

import { ButtonColors, ButtonVariants } from '../ButtonBase';
import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';

import { LoadingButtonWrapper } from './styles';
import { ButtonProps } from './types';

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
