import {
  BaseSyntheticEvent,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
// import { forwardRef, useEffect, useState } from 'react';
// import { Link } from '@mui/material';

import { TextFieldProps } from '../TextField';
import { Typography } from '../Typography';

import { CodeFieldDigitsWrapper, CodeFieldWrapper, Digit } from './styles';

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
   * @description время, после которого разрешен перезапрос кода (в мс)
   */
  time?: number;
  /**
   * @description кол-во символов в коде
   */
  codeLength?: number;
  /**
   * @description если true, отображается ошибка
   */
  error?: boolean;
  // /**
  //  * @description если true, показывается анимация загрузки
  //  */
  // loading?: boolean;
  // /**
  //  * @description если true, показываются символы, редактирование запрещено
  //  */
  // disabled?: boolean;
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
    time = 1000 * 60,
    codeLength = CONFIRMATION_CODE_LENGTH_DEFAULT,
    ...props
  }) => {
    const lastIndexOfCode = codeLength - 1;
    // const [digitsState, setDigitsState] = useState({
    //   currentIndex: 0,
    //   prevIndex: 0,
    // });

    // const onChange = (index: number) => (event) => {
    //   const diff = event.target.value.replace(value[index], '');
    //
    //   const isOnlyNonDigitDiff = !diff.match(/[0-9]/g);
    //
    //   if (isOnlyNonDigitDiff) {
    //     return;
    //   }
    //
    //   const restSubstring = value.slice(index + 1);
    //
    //   let firstNonEmptyIndex = [...restSubstring].findIndex(
    //     (char) => char !== ' ',
    //   );
    //
    //   firstNonEmptyIndex =
    //     firstNonEmptyIndex === -1 ? restSubstring.length : firstNonEmptyIndex;
    //
    //   // отбрасываем не цифры + обработка для кейса вставки текста из буфера обмена
    //   const cleanedValue = event.target.value
    //     .replace(/\D/g, '')
    //     .slice(0, firstNonEmptyIndex + 1);
    //
    //   if (
    //     cleanedValue &&
    //     value.replace(/ /g, '').length < CONFIRMATION_CODE_LENGTH
    //   ) {
    //     const newValue =
    //       value.slice(0, index) +
    //       cleanedValue +
    //       value.slice(index + cleanedValue.length);
    //
    //     onChange(newValue);
    //
    //     setDigitsState({
    //       prevIndex: index,
    //       currentIndex: index + cleanedValue.length,
    //     });
    //   }
    // };

    //timer
    // const [counter, setCounter] = useState(-1);
    //
    // useEffect(() => {
    //   if (counter < 0) {
    //     return () => {};
    //   }
    //
    //   const timeoutId = setTimeout(() => {
    //     setCounter((counter) => counter - 1);
    //   }, time);
    //
    //   return () => {
    //     clearTimeout(timeoutId);
    //   };
    // }, [counter]);
    //
    // useEffect(() => {
    //   if (shouldStartTimer) {
    //     setCounter(timerSecondsLeft);
    //     setFormState((state) => ({ ...state, shouldStartTimer: false }));
    //   }
    //
    //   return () => {};
    // });
    //
    // useEffect(() => {
    //   shouldStopTimer && setCounter(-1);
    //
    //   return () => {
    //     setFormState((state) => ({ ...state, shouldStopTimer: false }));
    //   };
    // }, [shouldStopTimer]);

    const [arrayValue, setArrayValue] = useState<NumbersInputType>(
      Array.from({ length: codeLength }),
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
        {label && <Typography>{label}</Typography>}
        <CodeFieldDigitsWrapper>
          {arrayValue.map((value: string | number, index: number) => (
            <Digit
              key={index}
              disabled={disabled}
              // hasError={!!error}
              type="tel"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              // autofocus
              value={value || ''}
              ref={(el) => el && (inputRefs.current[index] = el)}
              onChange={(e) => onChange(e, index)}
              onKeyUp={(e) => onKeyUp(e, index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              onFocus={(e) => onFocus(e, index)}
            />
          ))}
        </CodeFieldDigitsWrapper>
        {/*<Typography color="textSecondary">*/}
        {/*  Отправить код повторно <>{counter} сек.</>*/}
        {/*</Typography>*/}
        {/*<Link>*/}
        {/*  <Typography color="info">Отправить код повторно</Typography>*/}
        {/*</Link>*/}
      </CodeFieldWrapper>
    );
  },
);
