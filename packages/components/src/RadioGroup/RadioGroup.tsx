import {
  RadioGroup as MuiRadioGroup,
  type RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';
import { type ReactNode } from 'react';

import { useId } from '../hooks/useId';
import { type WithoutEmotionSpecific } from '../types';
import { FormControl, type FormControlProps } from '../FormControl';
import { FormLabel } from '../FormLabel';
import { Tooltip } from '../Tooltip';

import { RadioGroupContextProvider } from './RadioGroupContext';

export type RadioGroupProps = WithoutEmotionSpecific<MuiRadioGroupProps> & {
  /**
   * @description Флаг состояния ошибки
   */
  isError?: boolean;
  /**
   * @description Текстовая информация об ошибке, будет отображен в тултипе при isError: true
   */
  errorText?: ReactNode;
  /**
   * @description Лейбл для группы
   */
  groupLabel?: string;
  /**
   * @description Лейбл будет помечен как обязательный
   */
  required?: boolean;

  /**
   * @description Пропсы для управления FormControl
   */
  formControlProps?: Omit<FormControlProps, 'error'>;
};

/**
 * @description Компонент RadioGroup с расширенным функционалом
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    groupLabel,
    errorText,
    isError,
    required,
    formControlProps,
    row,
    ...otherMuiRadioGroupProps
  } = props;

  const labelId = useId();

  return (
    <Tooltip
      title={isError && errorText}
      placement={'right-start'}
      followCursor
    >
      <FormControl {...formControlProps}>
        {groupLabel && (
          <FormLabel id={labelId} required={required}>
            {groupLabel}
          </FormLabel>
        )}
        <MuiRadioGroup
          {...otherMuiRadioGroupProps}
          aria-labelledby={labelId}
          row={row}
        >
          <RadioGroupContextProvider isError={isError}>
            {children}
          </RadioGroupContextProvider>
        </MuiRadioGroup>
      </FormControl>
    </Tooltip>
  );
};
