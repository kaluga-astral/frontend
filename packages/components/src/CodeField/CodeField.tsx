import {
  BaseSyntheticEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { FormHelperText } from '../FormHelperText';

import {
  CodeFieldDigitsWrapper,
  CodeFieldLabel,
  CodeFieldWrapper,
  Digit,
} from './styles';
import ResendCodeButton from './ResendСodeButton/ResendСodeButton';

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

const CODE_LENGTH_DEFAULT = 6;
const RESTART_TIME_DEFAULT = 60;
const ERROR_TEXT_DEFAULT = 'Код подтверждения недействителен';

const DIGITS_REGEX = /[^0-9]/g;

const KEYBOARD_KEYS = {
  backspace: 'Backspace',
  moveCaretLeft: 'ArrowLeft',
  moveCaretRight: 'ArrowRight',
};

type CodeFieldInputType = '' | number;

export const CodeField = forwardRef<HTMLInputElement, CodeFieldInputProps>(
  ({
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
  }) => {
    const lastIndexOfCode = codeLength - 1;

    const [arrayValue, setArrayValue] = useState<CodeFieldInputType[]>(() => {
      const initialArray = Array.from({ length: codeLength });

      if (initialValue) {
        initialValue.split('').forEach((symbol, index) => {
          initialArray[index] = symbol;
        });
      }

      return initialArray as CodeFieldInputType[];
    });

    useEffect(() => {
      const formattedValue = arrayValue.join('');

      if (onFieldChange) {
        onFieldChange(formattedValue);
      }

      if (onComplete) {
        onComplete(formattedValue);
      }
    }, [arrayValue]);

    const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

    const setFocusIndex = (index: number) => {
      inputRefs.current[index].focus();
    };

    const setFocusIndexNext = (index: number) => {
      if (index === lastIndexOfCode) {
        return;
      } else {
        setFocusIndex(index + 1);
      }
    };

    const setFocusIndexPrevious = (index: number) => {
      if (index === 0) {
        return;
      } else {
        setFocusIndex(index - 1);
      }
    };

    const deletePreviousSymbol = (index: number) => {
      let newArrayValue = [...arrayValue];

      if (arrayValue[index]) {
        newArrayValue[index] = '';
        setArrayValue(newArrayValue);
      } else if (arrayValue[index - 1]) {
        newArrayValue[index - 1] = '';
        setArrayValue(newArrayValue);
        setFocusIndexPrevious(index);
      }
    };

    const onChange = (e: BaseSyntheticEvent, index: number) => {
      const newValue = e.target.value.replace(DIGITS_REGEX, '');

      e.target.value = newValue;

      setArrayValue((preValue: CodeFieldInputType[]) => {
        const newArrayValue = [...preValue];

        if (parseInt(newValue) || newValue === '0') {
          newArrayValue[index] = newValue;
        }

        return newArrayValue;
      });
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      switch (e.key) {
        case KEYBOARD_KEYS.moveCaretLeft:
          setFocusIndexPrevious(index);
          e.preventDefault();

          break;
        case KEYBOARD_KEYS.moveCaretRight:
          setFocusIndexNext(index);
          e.preventDefault();

          break;
        case KEYBOARD_KEYS.backspace:
          deletePreviousSymbol(index);
          e.preventDefault();

          break;
      }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      const keyCode = parseInt(e.key);

      if (e.key === KEYBOARD_KEYS.backspace) {
        setFocusIndexPrevious(index);
      } else if (keyCode >= 0 && keyCode <= 9) {
        setFocusIndexNext(index);
      }
    };

    const onFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      e.target?.select();
    };

    const onPaste = (event: ClipboardEvent) => {
      event.preventDefault();

      let pasteText: string = event.clipboardData?.getData('text') || '';

      // оставляем только цифры + отсекаем лишние символы, если их кол-во больше, чем символов в коде
      const cleanedValue = pasteText
        .replace(DIGITS_REGEX, '')
        .slice(0, codeLength)
        .split('');

      if (cleanedValue.length === 0) {
        return;
      }

      const newArrayValue = cleanedValue.map((num) => Number(num));

      if (newArrayValue.length < arrayValue.length) {
        setArrayValue([
          ...newArrayValue,
          ...arrayValue.slice(newArrayValue.length - 1, lastIndexOfCode),
        ]);

        setFocusIndex(newArrayValue.length - 1);
      } else {
        setArrayValue(newArrayValue);
        setFocusIndex(arrayValue.length - 1);
      }
    };

    useEffect(() => {
      document.addEventListener('paste', onPaste);

      return () => {
        document.removeEventListener('paste', onPaste);
      };
    }, []);

    return (
      <CodeFieldWrapper>
        {label && <CodeFieldLabel>{label}</CodeFieldLabel>}
        <CodeFieldDigitsWrapper>
          {arrayValue.map((value: CodeFieldInputType, index: number) => (
            <Digit
              key={index}
              disabled={disabled || loading}
              type="tel"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              value={value || ''}
              ref={(el) => el && (inputRefs.current[index] = el)}
              onChange={(e) => onChange(e, index)}
              onKeyUp={(e) => onKeyUp(e, index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              onFocus={(e) => onFocus(e)}
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
