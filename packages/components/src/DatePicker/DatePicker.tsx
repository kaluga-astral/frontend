import {
  type ReactNode,
  type RefObject,
  type SyntheticEvent,
  forwardRef,
} from 'react';

import { type TextFieldProps } from '../TextField';
import { useForwardedRef, useInputPopover } from '../hooks';
import { type DateMask } from '../utils/date';
import { type CloseEventReason } from '../types';

import { DatePickerInput } from './DatePickerInput';
import { DatePickerPopover } from './DatePickerPopover';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from './MinMaxDateContext';
import { type MinMaxDate } from './types';
import { YearMonthDayPicker } from './YearMonthDayPicker';
import { type MondayFirst } from './DayPicker';
import { DEFAULT_DATE_MASK } from './constants';
import { useDatePickerOptions } from './hooks';

export type DatePickerProps = MondayFirst &
  Partial<MinMaxDate> & {
    /**
     * @description Маска для инпута даты
     * @default 'DD.MM.YYYY'
     * */
    mask?: DateMask;
    /**
     * @description Обработчик изменения состояния. Передает только Date object, если дата невалидна, то будет Invalid date
     * */
    onChange?: (date?: Date) => void;
    onBlur?: () => void;
    onOpen?: () => void;
    onClose?: (
      event?: SyntheticEvent<Element, Event> | Event,
      reason?: CloseEventReason,
    ) => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    inputRef?: RefObject<HTMLInputElement>;
    disabled?: boolean;
    /**
     * @description Принимает только Date object, включая невалидную дату Invalid date
     * */
    value?: Date;
    className?: string;
    /**
     * @description Определяет размер компонента
     * @default 	'medium'
     */
    size?: 'small' | 'medium';
    label?: ReactNode;
    required?: boolean;
    helperText?: ReactNode;
  } & Pick<TextFieldProps, 'label' | 'required' | 'helperText'>;

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      onChange,
      onOpen,
      onClose,
      onBlur,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      inputProps,
      inputRef,
      disabled,
      value,
      className,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      size,
      label,
      required,
      helperText,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef<HTMLDivElement>(forwardedRef);

    const { isOpenPopover, openPopover, closePopover } = useInputPopover({
      ref,
      onOpen,
      onClose,
      onBlur,
    });
    const handleDayPick = () => closePopover(undefined, 'selectOption');
    const {
      onAccept,
      inputProps: calculatedInputProps,
      pickerProps,
    } = useDatePickerOptions({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: value,
      onChange,
    });

    return (
      <div ref={ref} className={className}>
        <DatePickerInput
          label={label}
          required={required}
          helperText={helperText}
          {...inputProps}
          {...calculatedInputProps}
          onAccept={onAccept}
          mask={mask}
          size={size}
          disabled={disabled}
          ref={inputRef}
          onFocus={openPopover}
          onClick={openPopover}
        />
        <DatePickerPopover open={isOpenPopover} anchorEl={ref?.current}>
          <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...pickerProps}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopover>
      </div>
    );
  },
);
