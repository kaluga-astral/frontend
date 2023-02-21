import { MaskField, MaskFieldProps } from '@astral/components';
import { useMemo } from 'react';
import { InitializedRule, compose, isMobilePhone } from '@astral/validations';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

const MOBILE_PHONE_MASK = '+{7} (000) 00-00-000';

const IS_MOBILE_PHONE_MESSAGE = 'Начинается с +7 (9**)...';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormMobilePhoneFieldValue = string;

export type FormMobilePhoneFieldProps = WithFormFieldProps<
  Omit<MaskFieldProps, 'mask'>
>;

/**
 * @description Поле для ввода личного мобильного номера телефона, начинающего на 79
 */
export function FormMobilePhoneField({
  rules,
  ...props
}: FormMobilePhoneFieldProps) {
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

  const fieldProps = useFormFieldProps({
    ...props,
    rules: customRules,
  });

  return (
    <MaskField
      placeholder="+7 (9**) ***-**-**"
      {...fieldProps}
      mask={MOBILE_PHONE_MASK}
      autoComplete="tel"
    />
  );
}
