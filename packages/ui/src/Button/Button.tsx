import { LoadingButton } from '@mui/lab';
import { forwardRef, useMemo } from 'react';

import { ButtonVariants } from '../ButtonBase';
import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = ButtonVariants.CONTAINED, ...restProps } = props;

    const loadingIndicatorColor = useMemo(() => {
      if (variant !== ButtonVariants.CONTAINED) {
        return CircularProgressColors.PRIMARY;
      }

      return CircularProgressColors.INVERTED;
    }, [variant]);

    return (
      <LoadingButton
        ref={ref}
        {...restProps}
        variant={variant}
        loadingIndicator={
          <CircularProgress color={loadingIndicatorColor} size="small" />
        }
      />
    );
  },
);

export default Button;
