import { ReactNode, useMemo } from 'react';

import { Checkbox, CheckboxProps } from '../Checkbox';
import { FormControl } from '../FormControl';
import { FormControlLabel } from '../FormControlLabel';
import { FormHelperText } from '../FormHelperText';
import { Tooltip } from '../Tooltip';

export type CheckboxFieldProps = CheckboxProps & {
  /**
   * Флаг отображения успешного состояния текстовой ошибки (helperText)
   */
  success?: boolean;
  /**
   * Текст-подсказка
   */
  helperText?: ReactNode;
  /**
   * Флаг принудительного скрытия блока helperText
   */
  hideHelperText?: boolean;
  /**
   * Текст или элемент около чекбокса (обычно краткое описание назначения чекбокса)
   */
  label: ReactNode;
};

/**
 * @description Составной компонент чекбокса. Содержит label, tooltip, helperText и т.д.
 */
export const CheckboxField = ({
  success,
  helperText,
  hideHelperText = false,
  label,
  isError,
  ...restProps
}: CheckboxFieldProps) => {
  const showTooltip = useMemo(
    () => Boolean(isError && hideHelperText),
    [isError, hideHelperText],
  );

  return (
    <FormControl>
      <Tooltip
        title={showTooltip && helperText}
        placement="bottom-start"
        withoutContainer={false}
      >
        <FormControlLabel
          control={<Checkbox isError={isError} {...restProps} />}
          label={label}
        />
      </Tooltip>
      {!hideHelperText && (
        <FormHelperText error={isError} success={success}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
