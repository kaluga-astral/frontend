import { forwardRef, useMemo } from 'react';

import { type ButtonProps, ButtonVariants } from '../Button';
import {
  CircularProgress,
  type CircularProgressProps,
} from '../CircularProgress';

import { StyledButton } from './styles';

export type IconButtonProps = ButtonProps & {
  /**
   * @description Флаг отображения индикатора загрузки
   * @example <IconButton loading />
   */
  loading?: boolean;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, loading, variant, ...props }, ref) => {
    const progressColor = useMemo((): CircularProgressProps['color'] => {
      if (variant === ButtonVariants.Contained) {
        return 'inverted';
      }

      return 'primary';
    }, [variant]);

    return (
      <StyledButton
        loading={loading}
        variant={variant}
        tabIndex={loading ? -1 : 0}
        {...props}
        ref={ref}
      >
        {loading ? (
          <CircularProgress size="small" color={progressColor} />
        ) : (
          children
        )}
      </StyledButton>
    );
  },
);
