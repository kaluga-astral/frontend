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

export const CONFIRMATION_CODE_LENGTH_DEFAULT = 6;

// const KEYBOARD_KEYS = {
//   removeDigit: 'Backspace',
//   moveCaretLeft: 'ArrowLeft',
//   moveCaretRight: 'ArrowRight',
// };

export const CodeField = forwardRef<HTMLInputElement, CodeFieldInputProps>(
  ({
    label,
    disabled = false,
    time = 1000 * 60,
    codeLength = CONFIRMATION_CODE_LENGTH_DEFAULT,
    ...props
  }) => {
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

    // const getKeyDownHandler = (index) => (event) => {
    //   switch (event.key) {
    //     case KEYBOARD_KEYS.removeDigit: {
    //       let newValue = '';
    //
    //       if (event.target.value.trim()) {
    //         newValue = value.slice(0, index) + ' ' + value.slice(index + 1);
    //       } else {
    //         newValue = index
    //           ? value.slice(0, index - 1) + ' ' + value.slice(index + 1)
    //           : value.slice(index + 1);
    //
    //         setDigitsState({
    //           prevIndex: index,
    //           currentIndex: index - 1,
    //         });
    //       }
    //
    //       onChange(newValue.padEnd(CONFIRMATION_CODE_LENGTH, ' '));
    //
    //       break;
    //     }
    //     case KEYBOARD_KEYS.moveCaretLeft: {
    //       setDigitsState({
    //         prevIndex: index,
    //         currentIndex: index - 1,
    //       });
    //
    //       break;
    //     }
    //     case KEYBOARD_KEYS.moveCaretRight: {
    //       setDigitsState({
    //         prevIndex: index,
    //         currentIndex: index + 1,
    //       });
    //
    //       break;
    //     }
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

    const [arrayValue, setArrayValue] = useState<(string | number)[]>(
      Array.from({ length: codeLength }),
    );
    const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);

    const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

    const onChange = (e: BaseSyntheticEvent, index: number) => {
      console.log(e.target.value);

      setArrayValue((preValue: (string | number)[]) => {
        const newArray = [...preValue];

        if (parseInt(e.target.value)) {
          newArray[index] = parseInt(e.target.value);
        } else {
          newArray[index] = e.target.value;
        }

        return newArray;
      });
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace') {
        if (index === 0) {
          setCurrentFocusedIndex(0);
        } else {
          setCurrentFocusedIndex(index - 1);

          if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
            inputRefs.current[index - 1].focus();
          }
        }
      } else {
        if (
          (parseInt(e.key) || parseInt(e.key) === 0) &&
          index <= arrayValue.length - 2
        ) {
          setCurrentFocusedIndex(index + 1);

          if (inputRefs && inputRefs.current && index === currentFocusedIndex) {
            inputRefs.current[index + 1].focus();
          }
        }
      }
    };

    //todo мне не нравится что идет привязка к keyCode
    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = parseInt(e.key);

      console.log(e.key, e.metaKey, e);

      if (
        !(keyCode >= 0 && keyCode <= 9) &&
        e.key !== 'Backspace' &&
        !(e.metaKey && e.key === 'v')
      ) {
        console.log(88787878);
        e.preventDefault();
      }
    };

    const onFocus = (e: BaseSyntheticEvent, index: number) => {
      setCurrentFocusedIndex(index);
    };

    useEffect(() => {
      document.addEventListener('paste', async () => {
        // const pastePermission = await navigator.permissions.query({
        //   name: 'clipboard-read' as PermissionName,
        // });
        //
        // if (pastePermission.state === 'denied') {
        //   console.log(111);
        //   throw new Error('Not allowed to read clipboard');
        // }

        const clipboardContent = await navigator.clipboard.readText();

        try {
          let newArray: Array<number | string> = clipboardContent.split('');

          newArray = newArray.map((num) => Number(num));

          const lastIndex = arrayValue.length - 1;

          if (currentFocusedIndex > 0) {
            const remainingPlaces = lastIndex - currentFocusedIndex;
            const partialArray = newArray.slice(0, remainingPlaces + 1);

            setArrayValue([
              ...arrayValue.slice(0, currentFocusedIndex),
              ...partialArray,
            ]);
          } else {
            setArrayValue([
              ...newArray,
              ...arrayValue.slice(newArray.length - 1, lastIndex),
            ]);
          }

          if (
            newArray.length < arrayValue.length &&
            currentFocusedIndex === 0
          ) {
            setCurrentFocusedIndex(newArray.length - 1);
            inputRefs.current[newArray.length - 1].focus();
          } else {
            setCurrentFocusedIndex(arrayValue.length - 1);
            inputRefs.current[arrayValue.length - 1].focus();
          }
        } catch (err) {
          console.error(err);
        }
      });

      return () => {
        document.removeEventListener('paste', () =>
          console.log('Removed paste listner'),
        );
      };
    }, [arrayValue, currentFocusedIndex]);

    return (
      <CodeFieldWrapper>
        {label && <Typography>{label}</Typography>}
        <div>
          {console.log('value', arrayValue)}
          currentFocusedIndex: {currentFocusedIndex}, value: {arrayValue}
        </div>
        <CodeFieldDigitsWrapper>
          {arrayValue.map((value: string | number, index: number) => (
            <Digit
              // autofocus
              key={index}
              disabled={disabled}
              // hasError={!!error}
              // onChange={onChange(index)}
              // onClick={getClickHandler(index)}
              // onKeyDown={getKeyDownHandler(index)}
              // ref={(ref) => {
              //   inputsRef.current[index] = ref;
              // }}
              type="text"
              // value={value?.[index] || ''}
              maxLength={1}
              inputMode="numeric"
              // pattern="\d{1}"
              value={value}
              ref={(el) => el && (inputRefs.current[index] = el)}
              onChange={(e) => onChange(e, index)}
              onKeyUp={(e) => onKeyUp(e, index)}
              onKeyDown={(e) => onKeyDown(e)}
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
