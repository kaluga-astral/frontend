import { forwardRef } from 'react';

import { FormHelperText } from '../FormHelperText';
import { Grid, type GridProps } from '../Grid';
import {
  DEFAULT_DATE_MASK,
  DatePickerPopover,
  type DatePickerProps,
  MinMaxDateContextProvider,
  PopoverHoveredContextProvider,
  YearMonthDayPicker,
} from '../DatePicker';

import { useLogic } from './useLogic';
import { PickerSplitter, StyledDatePickerInput } from './styles';

const DEFAULT_SPACING = 1;

export type DateRangePickerValue = {
  from?: Date | null;
  to?: Date | null;
} | null;

export type DateItemProps = Pick<
  DatePickerProps,
  'inputProps' | 'startAdornment'
>;

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'required' | 'disabled' | 'inputProps'
> & {
  /**
   * Специфичные пропсы для управления датой слева
   */
  startDateProps?: DateItemProps;

  /**
   * Специфичные пропсы для управления датой справа
   */
  endDateProps?: DateItemProps;

  /**
   * Отступ между инпутами дат
   * @default 1
   */
  spacing?: GridProps['spacing'];

  /**
   * Если true, поля будут недоступны для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Если true, поля будут подсвечены, как содержащие ошибку
   */
  isError?: boolean;

  /**
   * Текущее значение
   */
  value?: DateRangePickerValue;

  /**
   * Функция, которая запускается при изменении состояния
   */
  onChange?: (value?: DateRangePickerValue) => void;
};

export const NewDateRangePicker = forwardRef<
  HTMLDivElement,
  DateRangePickerProps
>((props, forwardedRef) => {
  const {
    ref,
    startDatePickerInputProps,
    endDatePickerInputProps,
    popoverHoveredContextProviderProps,
    datePickerPopoverProps,
    minMaxDateContextProviderProps,
    startYearMonthDayPickerProps,
    endYearMonthDayPickerProps,
  } = useLogic(props, forwardedRef);

  const {
    startDateProps = {},
    endDateProps = {},
    mask = DEFAULT_DATE_MASK,
    spacing = DEFAULT_SPACING,
    size,
    isMondayFirst,
    isDisabled,
    isError,
    helperText,
  } = props;

  return (
    <Grid>
      <Grid container spacing={spacing} ref={ref} direction="column">
        <StyledDatePickerInput
          {...startDateProps.inputProps}
          startAdornment={startDateProps.startAdornment}
          // TODO Пропс margin=none пока не работает, поэтому стилизуем компонент
          // https://track.astral.ru/soft/browse/UIKIT-1333
          margin="none"
          mask={mask}
          size={size}
          disabled={isDisabled}
          error={isError}
          {...startDatePickerInputProps}
        />

        <StyledDatePickerInput
          {...endDateProps.inputProps}
          startAdornment={endDateProps.startAdornment}
          margin="none"
          size={size}
          mask={mask}
          disabled={isDisabled}
          error={isError}
          {...endDatePickerInputProps}
        />
      </Grid>

      {helperText && (
        <FormHelperText error={isError}>{helperText}</FormHelperText>
      )}

      <PopoverHoveredContextProvider {...popoverHoveredContextProviderProps}>
        <DatePickerPopover {...datePickerPopoverProps}>
          <MinMaxDateContextProvider {...minMaxDateContextProviderProps}>
            <YearMonthDayPicker
              isRange
              isMondayFirst={isMondayFirst}
              {...startYearMonthDayPickerProps}
            />

            <PickerSplitter />

            <YearMonthDayPicker
              isRange
              isMondayFirst={isMondayFirst}
              {...endYearMonthDayPickerProps}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopover>
      </PopoverHoveredContextProvider>
    </Grid>
  );
});
