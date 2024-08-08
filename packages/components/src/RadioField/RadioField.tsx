import { type ReactNode } from 'react';

import { Radio, type RadioProps } from '../Radio';
import { type FormControlLabelProps } from '../FormControlLabel';
import { Tooltip } from '../Tooltip';

import { StyledFormControlLabel } from './styles';

export type RadioFieldProps = Omit<RadioProps, 'title' | 'LinkComponent'> & {
  /**
   * Радио лейбл
   */
  label: ReactNode;
  /**
   * Пропсы для FormControlLabel. Дают возможность конфигурации лейбла
   */
  formControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;
  /**
   * Причина дизейбла поля. Переданный текст будет отображаться в тултипе при наведении на задизейбленный radio-элемент
   */
  disabledReason?: ReactNode;
};

/**
 * Составной компонент radio. Содержит label, tooltip и т.п.
 */
export const RadioField = ({
  id,
  disabled,
  label,
  isError,
  disabledReason,
  formControlLabelProps,
  ...restFieldProps
}: RadioFieldProps) => {
  return (
    <Tooltip
      key={id}
      title={disabled && disabledReason}
      placement="bottom-start"
      withoutContainer={false}
    >
      <StyledFormControlLabel
        {...formControlLabelProps}
        label={label}
        control={<Radio {...restFieldProps} isError={isError} />}
        disabled={disabled}
      />
    </Tooltip>
  );
};
