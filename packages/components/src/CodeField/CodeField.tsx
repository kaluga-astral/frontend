import { forwardRef } from 'react';
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

//todo вынести в пропсы, дефотлное значение 6
export const CONFIRMATION_CODE_LENGTH = 6;

// const KEYBOARD_KEYS = {
//   removeDigit: 'Backspace',
//   moveCaretLeft: 'ArrowLeft',
//   moveCaretRight: 'ArrowRight',
// };

export const CodeField = forwardRef<HTMLInputElement, CodeFieldInputProps>(
  ({ label, disabled = false, time = 1000 * 60, ...props }) => {
    // const [digitsState, setDigitsState] = useState({
    //   currentIndex: 0,
    //   prevIndex: 0,
    // });
    //
    // const onChange = (index: number) => (event) => {
    //   // const diff = event.target.value.replace(value[index], '');
    //   //
    //   // const isOnlyNonDigitDiff = !diff.match(/[0-9]/g);
    //   //
    //   // if (isOnlyNonDigitDiff) {
    //   //   return;
    //   // }
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
    //
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
    //
    // //timer
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

    return (
      <CodeFieldWrapper>
        {label && <Typography>{label}</Typography>}
        <CodeFieldDigitsWrapper>
          {Array.from({ length: CONFIRMATION_CODE_LENGTH }).map((_, index) => (
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
