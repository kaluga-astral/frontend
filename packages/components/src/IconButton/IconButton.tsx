import { forwardRef, useMemo } from 'react';

import { BaseButtonProps, ButtonVariants } from '../ButtonBase';
import { CircularProgress, CircularProgressProps } from '../CircularProgress';

import { IconButtonWrapper } from './styles';

export type IconButtonProps = BaseButtonProps & {
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
      <IconButtonWrapper
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
      </IconButtonWrapper>
    );
  },
);
