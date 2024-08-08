import { type ReactNode, useMemo } from 'react';

import { type CheckboxProps } from '../Checkbox';
import { FormControl } from '../FormControl';
import { FormHelperText } from '../FormHelperText';
import { Tooltip } from '../Tooltip';

import { StyledCheckbox, StyledFormControlledLabel } from './styles';

export type CheckboxFieldProps = CheckboxProps & {
  /**
   * Флаг отображения успешного состояния текстовой ошибки (helperText)
   */
  isSuccess?: boolean;
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
 * Составной компонент чекбокса. Содержит label, tooltip, helperText и т.д.
 */
export const CheckboxField = ({
  isSuccess,
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
        <StyledFormControlledLabel
          control={<StyledCheckbox isError={isError} {...restProps} />}
          label={label}
        />
      </Tooltip>
      {!hideHelperText && (
        <FormHelperText error={isError} success={isSuccess}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
