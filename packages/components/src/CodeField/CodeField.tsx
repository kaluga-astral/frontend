import {
  BaseSyntheticEvent,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TextFieldProps } from '../TextField';
import { FormHelperText } from '../FormHelperText';

import {
  CodeFieldDigitsWrapper,
  CodeFieldLabel,
  CodeFieldWrapper,
  Digit,
} from './styles';
import ResendCodeButton from './ResendСodeButton/ResendСodeButton';

export type CodeFieldInputProps = TextFieldProps & {
  /**
   * @description текст над полем
   */
  label?: string;
  /**
   * @description кол-во символов в поле кода
   */
  count?: number;
  /**
   * @description время, после которого разрешен перезапрос кода (в сек)
   */
  time?: number;
  /**
   * @description кол-во символов в коде
   */
  codeLength?: number;
  /**
   * @description если true, отображается ошибка
   */
  isError?: boolean;
  /**
   * @description текст ошибки
   */
  errorText?: string;
  /**
   * @description если true, показывается анимация загрузки
   */
  loading?: boolean;
  /**
   * @description если true, показываются символы, редактирование запрещено
   */
  disabled?: boolean;
  /**
   * @description фукция, которая вызовется при перезапросе
   */
  onRestart?: () => void;
  /**
   * @description начальное значение поля
   */
  initialValue?: NumbersInputType;
};

const CONFIRMATION_CODE_LENGTH_DEFAULT = 6;

const DIGITS_REGEX = /[^0-9]/g;

const KEYBOARD_KEYS = {
  backspace: 'Backspace',
  moveCaretLeft: 'ArrowLeft',
  moveCaretRight: 'ArrowRight',
};

type NumbersInputType = ('' | number)[];

export const CodeField = forwardRef<HTMLInputElement, CodeFieldInputProps>(
  ({
    label,
    disabled = false,
    time = 3, // todo поменять на 60
    codeLength = CONFIRMATION_CODE_LENGTH_DEFAULT,
    isError = false,
    errorText = 'Код подтверждения недействителен',
    initialValue,
    loading = false,
  }) => {
    const lastIndexOfCode = codeLength - 1;

    const [arrayValue, setArrayValue] = useState<NumbersInputType>(
      () => initialValue || Array.from({ length: codeLength }),
    );
    const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);

    const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

    const onChange = (e: BaseSyntheticEvent, index: number) => {
      const newValue = e.target.value.replace(DIGITS_REGEX, '');

      e.target.value = newValue;

      setArrayValue((preValue: NumbersInputType) => {
        const newArrayValue = [...preValue];

        if (parseInt(newValue) || newValue === '0') {
          newArrayValue[index] = newValue;
        }

        return newArrayValue;
      });
    };

    const setFocusIndex = (index: number) => {
      setCurrentFocusedIndex(index);
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

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === KEYBOARD_KEYS.moveCaretLeft) {
        setFocusIndexPrevious(index);
      } else if (e.key === KEYBOARD_KEYS.moveCaretRight) {
        setFocusIndexNext(index);
      } else if (e.key === KEYBOARD_KEYS.backspace) {
        e.preventDefault();

        let newArrayValue = [...arrayValue];

        if (arrayValue[index]) {
          newArrayValue[index] = '';
          setArrayValue(newArrayValue);
        } else if (arrayValue[index - 1]) {
          newArrayValue[index - 1] = '';
          setArrayValue(newArrayValue);
          setFocusIndexPrevious(index);
        }
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

    const onFocus = (e: FocusEvent, index: number) => {
      e.target?.select(e);
      setCurrentFocusedIndex(index);
    };

    // todo поделить на отдельные функции
    const onPaste = (event: ClipboardEvent) => {
      event.preventDefault();

      let pasteText: string = event.clipboardData?.getData('text') || '';

      // оставляем только цифры + отсекаем лишние символы (кол-во)
      const cleanedValue = pasteText
        .replace(DIGITS_REGEX, '')
        .slice(0, codeLength)
        .split('');

      try {
        const newArrayValue = cleanedValue.map((num) => Number(num));

        if (currentFocusedIndex > 0) {
          const remainingPlaces = lastIndexOfCode - currentFocusedIndex; //осталось мест 6-3=3
          const partialArray = newArrayValue.slice(0, remainingPlaces + 1);

          setArrayValue([
            ...arrayValue.slice(0, currentFocusedIndex),
            ...partialArray,
          ]);
        } else {
          setArrayValue([
            ...newArrayValue,
            ...arrayValue.slice(newArrayValue.length - 1, lastIndexOfCode),
          ]);
        }

        if (
          newArrayValue.length < arrayValue.length &&
          currentFocusedIndex === 0
        ) {
          setFocusIndex(newArrayValue.length - 1);
        } else {
          setFocusIndex(arrayValue.length - 1);
        }
      } catch (err) {
        console.error(err);
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
          {arrayValue.map((value: string | number, index: number) => (
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
              onFocus={(e) => onFocus(e, index)}
              isError={isError}
            />
          ))}
        </CodeFieldDigitsWrapper>
        {isError && <FormHelperText error>{errorText}</FormHelperText>}
        <ResendCodeButton
          disabled={disabled}
          loading={loading}
          isError={isError}
          time={time}
          onRestart={() => {}}
        />
      </CodeFieldWrapper>
    );
  },
);
