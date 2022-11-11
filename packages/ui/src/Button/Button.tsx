import { forwardRef, useMemo } from 'react';

import { ButtonColors, ButtonVariants } from '../ButtonBase';
import { CircularProgress } from '../CircularProgress';
import { CircularProgressColors } from '../CircularProgress/constants';

import { BUTTON_LOADER_TEST_ID, BUTTON_TEST_ID } from './constants';
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
        data-testid={BUTTON_TEST_ID}
        {...restProps}
        variant={variant}
        color={color}
        loadingIndicator={
          <CircularProgress
            color={loadingIndicatorColor}
            size="small"
            data-testid={BUTTON_LOADER_TEST_ID}
          />
        }
      />
    );
  },
);

export default Button;
