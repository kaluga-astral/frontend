import { Button, ButtonProps } from '@astral/components';

import { useFormContext } from '../hooks';

export type SubmitButtonProps = Omit<ButtonProps, 'type'>;

/**
 * @description SubmitButton используется для форм, отображает состояние загрузки, когда форма isSubmitting
 */
export const SubmitButton = ({ children, loading }: SubmitButtonProps) => {
  const { formState } = useFormContext();

  return (
    <Button type="submit" loading={loading || formState.isSubmitting}>
      {children}
    </Button>
  );
};
