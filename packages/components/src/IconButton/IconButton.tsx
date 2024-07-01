import { type ElementType, type ForwardedRef, useMemo } from 'react';

import { type ButtonProps, ButtonVariants } from '../Button';
import {
  CircularProgress,
  type CircularProgressProps,
} from '../CircularProgress';
import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import { StyledButton } from './styles';

export type IconButtonProps<TComponent extends ElementType> =
  ButtonProps<TComponent> & {
    /**
     * @description Флаг отображения индикатора загрузки
     * @example <IconButton loading />
     */
    loading?: boolean;
  };

const UnwrappedIconButton = <TComponent extends ElementType>(
  props: IconButtonProps<TComponent>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const {
    variant = ButtonVariants.Contained,
    loading,
    children,
    ...restProps
  } = props;

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
      {...restProps}
      ref={ref}
    >
      {loading ? (
        <CircularProgress size="small" color={progressColor} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export const IconButton = forwardRefWithGeneric(UnwrappedIconButton);

export default IconButton;
