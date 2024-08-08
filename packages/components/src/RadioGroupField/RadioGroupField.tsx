import { useContext } from 'react';

import { RadioGroupContext } from '../RadioGroup';
import { RadioField, type RadioFieldProps } from '../RadioField';

export type RadioGroupFieldProps = Omit<RadioFieldProps, 'isError'>;

/**
 *
 * Компонент RadioField, адаптирован под использование внутри RadioGroup,
 * Использует контекст RadioGroupContext
 */
export const RadioGroupField = (props: RadioGroupFieldProps) => {
  const { isError } = useContext(RadioGroupContext);

  return <RadioField {...props} isError={isError} />;
};
