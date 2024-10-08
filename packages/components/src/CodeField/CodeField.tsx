import { type ReactNode, forwardRef } from 'react';

import { FormHelperText } from '../FormHelperText';

import {
  Digit,
  DigitsItem,
  DigitsWrapper,
  FieldLabel,
  StyledSkeleton,
  Wrapper,
} from './styles';
import ResendCodeButton from './ResendСodeButton/ResendСodeButton';
import { ERROR_TEXT_DEFAULT, RESEND_TIMEOUT_DEFAULT } from './constants';
import { useCodeState, useFocusInput } from './hooks';

export type CodeFieldProps = {
  /**
   * Текст над полем
   */
  label?: string;
  /**
   * Время, после которого разрешен перезапрос кода (в сек)
   */
  resendTimeout?: number;
  /**
   * Кол-во символов в поле кода
   */
  codeLength: number;
  /**
   * Если true, показывается кнопка переотправки с таймером
   */
  isAllowResendCode?: boolean;
  /**
   * Функция, которая вызовется при перезапросе кода по кнопке
   */
  onResendCode?: () => Promise<void>;
  /**
   * Начальное значение поля
   */
  initialValue?: string;
  /**
   * Если true, показывается анимация загрузки
   */
  loading?: boolean;
  /**
   * Если true, показываются символы, редактирование запрещено
   */
  disabled?: boolean;
  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;
  /**
   * Текстовая информация об ошибке, будет отображен при isError: true
   */
  errorText?: ReactNode;
  /**
   * Вызывается при изменении поля
   */
  onChange?: (value: string) => void;
  /**
   * Вызывается при заполнении поля
   */
  onComplete?: (value: string) => void;
  /**
   * Если true, автоматически устанавливает фокус на первый инпут
   */
  isAutoFocus?: boolean;
};

/**
 * Поле для ввода кода подтверждения
 */
export const CodeField = forwardRef<HTMLInputElement, CodeFieldProps>(
  (
    {
      label,
      resendTimeout = RESEND_TIMEOUT_DEFAULT,
      codeLength,
      isAllowResendCode = false,
      onResendCode,
      initialValue,
      loading = false,
      disabled = false,
      isError = false,
      errorText = ERROR_TEXT_DEFAULT,
      onChange: onFieldChange,
      onComplete,
      isAutoFocus = false,
    },
    ref,
  ) => {
    const { inputRefs, setFocusIndexNext, setFocusIndexPrevious, setBlur } =
      useFocusInput(codeLength, isAutoFocus);

    const { codeValue, onKeyDown, onKeyUp, onPaste, clearCodeValue } =
      useCodeState(
        initialValue,
        codeLength,
        setFocusIndexNext,
        setFocusIndexPrevious,
        setBlur,
        onFieldChange,
        onComplete,
        isError,
      );

    const setRef = (index: number) => (el: HTMLInputElement) => {
      if (el) {
        inputRefs.current[index] = el;
      }
    };

    return (
      <Wrapper ref={ref}>
        {label && <FieldLabel>{label}</FieldLabel>}
        <DigitsWrapper>
          {codeValue.map((value, index) => (
            <DigitsItem>
              {loading ? (
                <StyledSkeleton variant="rounded" height={60} />
              ) : (
                <Digit
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]"
                  key={index}
                  disabled={disabled || loading}
                  value={value ?? ''}
                  ref={setRef(index)}
                  onKeyUp={(e) => onKeyUp(e, index)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                  isError={isError}
                  onPaste={(e) => !disabled && !loading && onPaste(e)}
                />
              )}
            </DigitsItem>
          ))}
        </DigitsWrapper>
        {isError && <FormHelperText error>{errorText}</FormHelperText>}
        {isAllowResendCode && (
          <ResendCodeButton
            resendTimeout={resendTimeout}
            disabled={disabled}
            loading={loading}
            isError={isError}
            onResendCode={onResendCode}
            clearCodeValue={clearCodeValue}
          />
        )}
      </Wrapper>
    );
  },
);
