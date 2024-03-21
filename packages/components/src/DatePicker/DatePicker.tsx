import {
  type ReactNode,
  type RefObject,
  type SyntheticEvent,
  forwardRef,
  useState,
} from 'react';
import { type PopperProps } from '@mui/material';

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
     * Маска для инпута даты
     * @default 'DD.MM.YYYY'
     */
    mask?: DateMask;

    /**
     * Обработчик изменения состояния. Передает только Date object, если дата невалидна, то будет Invalid date
     */
    onChange?: (date?: Date) => void;

    onBlur?: () => void;
    onOpen?: () => void;
    onClose?: (
      event?: SyntheticEvent<Element, Event> | Event,
      reason?: CloseEventReason,
    ) => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    inputRef?: RefObject<HTMLInputElement>;

    /**
     * Блокирует взаимодействие с элементом
     */
    disabled?: boolean;

    /**
     * Принимает только Date object, включая невалидную дату Invalid date
     */
    value?: Date;

    /**
     * Название класса, применяется к корневому компоненту
     */
    className?: string;

    /**
     * Определяет размер компонента
     * @default 	'medium'
     */
    size?: 'small' | 'medium';

    /**
     * Название текстового поля
     */
    label?: ReactNode;

    /**
     * Лейбл будет помечен как обязательный
     */
    required?: boolean;

    /**
     * Вспомогательный текст под полем ввода
     */
    helperText?: ReactNode;
  } & Pick<TextFieldProps, 'label' | 'required' | 'helperText'>;

type PoperInstance = PopperProps['popperRef'];

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
    const [popoverEl, setPopoverEl] = useState<HTMLElement | null>(null);

    const { isOpenPopover, openPopover, closePopover } = useInputPopover({
      ref: { current: popoverEl },
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

    const handleSetPopperRef: PoperInstance = (instance) => {
      if (!instance) {
        return undefined;
      }

      setPopoverEl(instance.state.elements.popper);
    };

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
        <DatePickerPopover
          open={isOpenPopover}
          anchorEl={ref?.current}
          popperRef={handleSetPopperRef}
        >
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
