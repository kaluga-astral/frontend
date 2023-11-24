import { ReactNode, forwardRef } from 'react';

import { FormHelperText } from '../FormHelperText';

import {
  CodeFieldDigit,
  CodeFieldDigitsWrapper,
  CodeFieldLabel,
  CodeFieldWrapper,
} from './styles';
import ResendCodeButton from './ResendСodeButton/ResendСodeButton';
import {
  CODE_LENGTH_DEFAULT,
  ERROR_TEXT_DEFAULT,
  RESEND_TIMEOUT_DEFAULT,
} from './constants';
import { useCodeState, useFocusIndex } from './hooks';

export type CodeFieldProps = {
  /**
   * @description Текст над полем
   */
  label?: string;
  /**
   * @description Время, после которого разрешен перезапрос кода (в сек)
   */
  resendTimeout?: number;
  /**
   * @description Кол-во символов в поле кода
   */
  codeLength?: number;
  /**
   * @description Фукция, которая вызовется при перезапросе кода по кнопке
   */
  onResendCode?: () => Promise<void>;
  /**
   * @description Начальное значение поля
   */
  initialValue?: string;
  /**
   * @description Если true, показывается анимация загрузки
   */
  loading?: boolean;
  /**
   * @description Если true, показываются символы, редактирование запрещено
   */
  disabled?: boolean;
  /**
   * @description Флаг состояния ошибки
   */
  isError?: boolean;
  /**
   * @description Текстовая информация об ошибке, будет отображен при isError: true
   */
  errorText?: ReactNode;
  /**
   * @description Вызывается при изменении поля
   */
  onChange?: (value: string) => void;
  /**
   * @description Вызывается при заполнении поля
   */
  onComplete?: (value: string) => void;
};

export const CodeField = forwardRef<HTMLInputElement, CodeFieldProps>(
  (
    {
      label,
      resendTimeout = RESEND_TIMEOUT_DEFAULT,
      codeLength = CODE_LENGTH_DEFAULT,
      onResendCode,
      initialValue,
      loading = false,
      disabled = false,
      isError = false,
      errorText = ERROR_TEXT_DEFAULT,
      onChange: onFieldChange,
      onComplete,
    },
    ref,
  ) => {
    const { inputRefs, setFocusIndexNext, setFocusIndexPrevious, setBlur } =
      useFocusIndex(codeLength);

    const { codeValue, onKeyDown, onKeyUp } = useCodeState(
      initialValue,
      codeLength,
      setFocusIndexNext,
      setFocusIndexPrevious,
      setBlur,
      onFieldChange,
      onComplete,
      disabled,
    );

    const setRef = (index: number) => (el: HTMLInputElement) =>
      el && (inputRefs.current[index] = el);

    return (
      <CodeFieldWrapper ref={ref}>
        {label && <CodeFieldLabel>{label}</CodeFieldLabel>}
        <CodeFieldDigitsWrapper>
          {codeValue.map((value, index) => (
            <CodeFieldDigit
              type="tel"
              inputMode="numeric"
              pattern="[0-9]"
              key={index}
              disabled={disabled || loading}
              value={value ?? ''}
              ref={setRef(index)}
              onKeyUp={(e) => onKeyUp(e, index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              isError={isError}
            />
          ))}
        </CodeFieldDigitsWrapper>
        {isError && <FormHelperText error>{errorText}</FormHelperText>}
        {onResendCode && (
          <ResendCodeButton
            resendTimeout={resendTimeout}
            disabled={disabled}
            loading={loading}
            isError={isError}
            onResendCode={onResendCode}
          />
        )}
      </CodeFieldWrapper>
    );
  },
);
