import { MaskField, MaskFieldProps, useForwardedRef } from '@astral/ui';
import { useController } from 'react-hook-form';
import { useMemo } from 'react';
import { InitializedRule, compose, isMobilePhone } from '@astral/validations';

import { useFieldErrorProps, useInputProps } from '../hooks';
import { WithFormFieldProps } from '../types';

const MOBILE_PHONE_MASK = '+{7} (000) 00-00-000';

const IS_MOBILE_PHONE_MESSAGE = 'Начинается с +7 (9**)...';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormMobilePhoneFieldValue = string;

export type FormMobilePhoneFieldProps<FieldValues extends object> =
  WithFormFieldProps<Omit<MaskFieldProps, 'mask'>, FieldValues>;

/**
 * @description Поле для ввода личного мобильного номера телефона, начинающего на 79
 */
export function FormMobilePhoneField<FieldValues extends object>({
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

  const inputProps = useInputProps(props);
  const { field, fieldState } = useController({ ...props, rules: customRules });
  const errorProps = useFieldErrorProps(fieldState);

  const ref = useForwardedRef(field.ref);

  return (
    <MaskField
      placeholder="+7 (9**) ***-**-**"
      {...field}
      ref={ref}
      {...inputProps}
      {...errorProps}
      mask={MOBILE_PHONE_MASK}
      autoComplete="tel"
    />
  );
}
