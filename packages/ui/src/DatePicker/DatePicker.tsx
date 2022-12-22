import { ChangeEvent, SyntheticEvent, forwardRef } from 'react';

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
import {
  useBaseDateInRange,
  useMaskedValue,
  useSelectedBaseDate,
} from './hooks';
import { MondayFirst } from './DayPicker';
import { DEFAULT_DATE_MASK } from './constants/defaultDateMask';

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
      onBlur,
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
    const ref = useForwardedRef(forwardedRef);
    const [isOpenPopper, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });

    const handleClosePopper = () => {
      // для данного компонента onBlur должен срабатывать после закрытия popover, а не во время выбора даты
      onBlur?.();
      closePopper(undefined, 'selectOption');
    };

    const { maskedValue, onChangeMaskedValue, onChangeMaskedDate } =
      useMaskedValue({
        currentValue: value,
        mask,
        onChangeValue: onChange,
      });

    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const selectedBaseDate = useSelectedBaseDate({
      currentValue: value,
      minDate,
      maxDate,
    });

    const handleDayPick = (date: Date) => {
      onChangeMaskedDate(date);
      handleClosePopper();
    };

    const handleChangeMaskInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeMaskedValue(e.target.value);
    };

    return (
      <ClickAwayListener
        isActive={isOpenPopper}
        onClickAway={handleClosePopper}
      >
        <div className={className}>
          <DatePickerInput
            {...inputProps}
            mask={mask}
            onNativeChange={handleChangeMaskInput}
            disabled={disabled}
            value={maskedValue}
            ref={ref}
            onFocus={openPopper}
          />
          <DatePickerPopper
            open={isOpenPopper}
            onClose={handleClosePopper}
            anchorEl={ref?.current}
          >
            <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
              <YearMonthDayPicker
                isMondayFirst={isMondayFirst}
                selectedDate={selectedBaseDate}
                onChange={handleDayPick}
                date={selectedBaseDate || baseDate}
              />
            </MinMaxDateContextProvider>
          </DatePickerPopper>
        </div>
      </ClickAwayListener>
    );
  },
);
