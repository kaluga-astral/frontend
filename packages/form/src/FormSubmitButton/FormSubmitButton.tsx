import type { ButtonProps } from '@astral/components';
import { Button } from '@astral/components';

import { useFormContext } from '../hooks';

export type FormSubmitButtonProps = Omit<ButtonProps, 'type'>;

/**
 * @description Используется для форм, отображает состояние загрузки, когда форма isSubmitting
 */
export const FormSubmitButton = ({
  children,
  loading,
  ...props
}: FormSubmitButtonProps) => {
  const { formState } = useFormContext();

  return (
    <Button
      type="submit"
      loading={loading || formState.isSubmitting}
      {...props}
    >
      {children}
    </Button>
  );
};
