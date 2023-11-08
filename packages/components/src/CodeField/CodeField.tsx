import { ReactNode, forwardRef } from 'react';

import { FormHelperText } from '../FormHelperText';

import {
  CodeFieldDigitsWrapper,
  CodeFieldLabel,
  CodeFieldWrapper,
  Digit,
} from './styles';
import ResendCodeButton from './ResendСodeButton/ResendСodeButton';
import {
  CODE_LENGTH_DEFAULT,
  ERROR_TEXT_DEFAULT,
  RESTART_TIME_DEFAULT,
} from './constants';
import { useCodeState, useFocusIndex } from './hooks';

export type CodeFieldInputProps = {
  /**
   * @description Текст над полем
   */
  label?: string;
  /**
   * @description Время, после которого разрешен перезапрос кода (в сек)
   */
  time?: number;
  /**
   * @description Кол-во символов в поле кода
   */
  codeLength?: number;
  /**
   * @description Фукция, которая вызовется при перезапросе
   */
  onRestart?: () => void;
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

export const CodeField = forwardRef<HTMLInputElement, CodeFieldInputProps>(
  (
    {
      label,
      time = RESTART_TIME_DEFAULT,
      codeLength = CODE_LENGTH_DEFAULT,
      onRestart,
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
    const {
      inputRefs,
      setFocusIndex,
      setFocusIndexNext,
      setFocusIndexPrevious,
    } = useFocusIndex(codeLength);

    const { arrayValue, onKeyDown, onKeyUp } = useCodeState(
      initialValue,
      codeLength,
      setFocusIndex,
      setFocusIndexNext,
      setFocusIndexPrevious,
      onFieldChange,
      onComplete,
      disabled,
    );

    return (
      <CodeFieldWrapper ref={ref}>
        {label && <CodeFieldLabel>{label}</CodeFieldLabel>}
        <CodeFieldDigitsWrapper>
          {arrayValue.map((value, index) => (
            <Digit
              type="tel"
              inputMode="numeric"
              pattern="[0-9]"
              key={index}
              disabled={disabled || loading}
              value={value ?? ''}
              ref={(el) => el && (inputRefs.current[index] = el)}
              onKeyUp={(e) => onKeyUp(e, index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              onChange={() => {}}
              isError={isError}
            />
          ))}
        </CodeFieldDigitsWrapper>
        {isError && <FormHelperText error>{errorText}</FormHelperText>}
        {onRestart && (
          <ResendCodeButton
            time={time}
            disabled={disabled}
            loading={loading}
            isError={isError}
            onRestart={onRestart}
          />
        )}
      </CodeFieldWrapper>
    );
  },
);
