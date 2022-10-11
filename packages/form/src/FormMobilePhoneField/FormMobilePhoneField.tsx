import { MaskField, MaskFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';
import { useMemo } from 'react';
import { InitializedRule, compose, isMobilePhone } from '@astral/validations';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

export const MOBILE_PHONE_MASK = '+0 (000) 00-00-000';

export const IS_MOBILE_PHONE_MESSAGE = 'Начинается с +7 (9**)...';

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
      return {
        ...rules,
        validate: compose(
          rules.validate as InitializedRule,
          isMobilePhone({ message: IS_MOBILE_PHONE_MESSAGE }),
        ),
      };
    }

    return {
      ...rules,
      validate: isMobilePhone({ message: IS_MOBILE_PHONE_MESSAGE }),
    };
  }, [rules]);

  const { field, fieldState } = useController({ ...props, rules: customRules });
  const errorProps = useFieldErrorProps(fieldState);

  return (
    <MaskField
      placeholder="+7 (900) 000-00-00"
      mask={mask}
      {...field}
      {...props}
      {...errorProps}
    />
  );
}
