import {
  type ReactNode,
  type RefObject,
  type SyntheticEvent,
  forwardRef,
} from 'react';

import { type TextFieldProps } from '../TextField';
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
import { ButtonWrapper, StyledButton } from './styles';
import { useLogic } from './useLogic';

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
    onChange?: (date?: Date | null) => void;

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
    value?: Date | null;

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

    /**
     * Элемент в начале инпута
     */
    startAdornment?: ReactNode;
  } & Pick<TextFieldProps, 'label' | 'required' | 'helperText'>;

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, forwardedRef) => {
    const {
      ref,
      pickerProps,
      calculatedInputProps,
      handleOpen,
      handleClose,
      onAccept,
      isDisabledButton,
      isMobile,
      datePickerProps,
    } = useLogic({ ...props, forwardedRef });

    const {
      className,
      startAdornment,
      label,
      required,
      helperText,
      inputProps,
      mask = DEFAULT_DATE_MASK,
      size,
      disabled,
      inputRef,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      isMondayFirst,
    } = props;

    return (
      <div ref={ref} className={className}>
        <DatePickerInput
          startAdornment={startAdornment}
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
          onClick={handleOpen}
        />
        <DatePickerPopover {...datePickerProps}>
          <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...pickerProps}
            />
            {isMobile && (
              <ButtonWrapper>
                <StyledButton onClick={handleClose} disabled={isDisabledButton}>
                  {isDisabledButton
                    ? 'Выберите дату'
                    : `Выбрать ${calculatedInputProps.value}`}
                </StyledButton>
              </ButtonWrapper>
            )}
          </MinMaxDateContextProvider>
        </DatePickerPopover>
      </div>
    );
  },
);
