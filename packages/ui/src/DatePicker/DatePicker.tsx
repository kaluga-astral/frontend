import { SyntheticEvent, forwardRef } from 'react';

import { TextFieldProps } from '../TextField';
import { useForwardedRef, useToggle } from '../hooks';
import { DateMask } from '../utils/date';
import { CloseEventReason } from '../types';
import { ClickAwayListener } from '../ClickAwayListener';

import { DatePickerInput } from './DatePickerInput';
import { DatePickerPopper } from './DatePickerPopper';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from './MinMaxDateContext';
import { MinMaxDate } from './types';
import { YearMonthDayPicker } from './YearMonthDayPicker';
import { useBaseDateInRange } from './hooks';
import { MondayFirst } from './DayPicker';
import { DEFAULT_DATE_MASK } from './constants/defaultDateMask';
import { useMaskedValueAndSelectedBaseDate } from './hooks/useMaskedValueAndSelectedBaseDate';

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
    disabled?: boolean;
    /**
     * @description Принимает только Date object, включая невалидную дату Invalid date
     * */
    value?: Date;
    className?: string;
  };

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      onChange,
      onOpen,
      onClose,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      inputProps,
      disabled,
      value,
      className,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
    },
    forwardedRef,
  ) => {
    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const ref = useForwardedRef(forwardedRef);

    const [isOpenPopper, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });
    const handleDayPick = () => closePopper(undefined, 'selectOption');
    const { inputProps: calculatedPickerProps, pickerProps } =
      useMaskedValueAndSelectedBaseDate({
        maxDate,
        minDate,
        mask,
        onDatePick: handleDayPick,
        currentValue: value,
        onChange,
        baseDate,
      });

    return (
      <ClickAwayListener isActive={isOpenPopper} onClickAway={closePopper}>
        <div className={className}>
          <DatePickerInput
            {...inputProps}
            {...calculatedPickerProps}
            mask={mask}
            disabled={disabled}
            ref={ref}
            onFocus={openPopper}
          />
          <DatePickerPopper
            open={isOpenPopper}
            onClose={closePopper}
            anchorEl={ref?.current}
          >
            <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
              <YearMonthDayPicker
                isMondayFirst={isMondayFirst}
                {...pickerProps}
              />
            </MinMaxDateContextProvider>
          </DatePickerPopper>
        </div>
      </ClickAwayListener>
    );
  },
);
