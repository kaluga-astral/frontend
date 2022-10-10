import { MaskField, MaskFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';
import { useMemo } from 'react';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

export const MOBILE_PHONE_MASK = '+0 (000) 00-00-000';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormMobilePhoneFieldValue = string;

export type FormMobilePhoneFieldProps<FieldValues extends object> =
  WithFormFieldProps<
    Omit<MaskFieldProps, 'mask'> & { mask?: string },
    FieldValues
  >;

/**
 * @description Адаптер для MaskField с маской ввода номера мобильного телефона
 */
export function FormMobilePhoneField<FieldValues extends object>({
  mask = MOBILE_PHONE_MASK,
  rules,
  ...props
}: FormMobilePhoneFieldProps<FieldValues>) {
  const customRules = useMemo(() => {
    if (rules?.validate) {
      return rules;
    }

    return {
      ...rules,
      // TODO: Подставить правило валидации мобильного телефона
      validate: () => false,
    };
  }, [rules]);

  const { field, fieldState } = useController({ ...props, rules: customRules });
  const errorProps = useFieldErrorProps(fieldState);

  return <MaskField mask={mask} {...field} {...props} {...errorProps} />;
}
