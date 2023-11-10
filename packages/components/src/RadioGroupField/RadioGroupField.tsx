import { useContext } from 'react';

import { RadioGroupContext } from '../RadioGroup';
import type { RadioFieldProps } from '../RadioField';
import { RadioField } from '../RadioField';

export type RadioGroupFieldProps = Omit<RadioFieldProps, 'isError'>;

/**
 *
 * @description Компонент RadioField, адаптирован под использование внутри RadioGroup,
 * Использует контекст RadioGroupContext
 */
export const RadioGroupField = (props: RadioGroupFieldProps) => {
  const { isError } = useContext(RadioGroupContext);

  return <RadioField {...props} isError={isError} />;
};
