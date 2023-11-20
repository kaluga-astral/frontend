import { KeyboardEvent, useEffect, useState } from 'react';

import { CodeFieldInputType } from '../../types';
import { formatInitialValue } from '../../utils';
import { DIGITS_REGEX, KEYBOARD_KEYS } from '../../constants';

export const useCodeState = (
  initialValue: string | undefined,
  codeLength: number,
  setFocusIndexNext: (index: number) => void,
  setFocusIndexPrevious: (index: number) => void,
  onFieldChange?: (value: string) => void,
  onComplete?: (value: string) => void,
  disabled?: boolean,
) => {
  const [arrayValue, setArrayValue] = useState<CodeFieldInputType[]>(
    formatInitialValue(codeLength, initialValue),
  );

  const isArrayValueEmpty = () => {
    return arrayValue.join('') === '';
  };

  useEffect(() => {
    const formattedValue = arrayValue.join('');

    if (onFieldChange) {
      onFieldChange(formattedValue);
    }

    if (onComplete) {
      onComplete(formattedValue);
    }
  }, [arrayValue]);

  const deletePreviousSymbol = (index: number) => {
    let newArrayValue = [...arrayValue];

    if (arrayValue[index]?.toString()) {
      newArrayValue[index] = '';
      setArrayValue(newArrayValue);
    } else if (arrayValue[index - 1]?.toString()) {
      newArrayValue[index - 1] = '';
      setArrayValue(newArrayValue);
      setFocusIndexPrevious(index);
    }
  };

  const onChange = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.key);

    // @ts-ignore
    e.target.value = newValue;

    setArrayValue((preValue: CodeFieldInputType[]) => {
      let newArrayValue = [...preValue];

      if (isArrayValueEmpty()) {
        // всегда начинаем ввод кода с 1го инпута, если поле пустое
        newArrayValue[0] = newValue;
        setFocusIndexNext(0);
      } else {
        newArrayValue[index] = newValue;
        setFocusIndexNext(index);
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
      case KEYBOARD_KEYS.arrowUp:
      case KEYBOARD_KEYS.arrowDown:
        e.preventDefault();
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyCode = parseInt(e.key);

    if (e.key === KEYBOARD_KEYS.backspace) {
      setFocusIndexPrevious(index);
    } else if (keyCode >= 0 && keyCode <= 9) {
      onChange(e, index);
    }
  };

  const onPaste = (event: ClipboardEvent) => {
    event.preventDefault();

    if (disabled) {
      return;
    }

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
      const lastIndexOfCode = codeLength - 1;

      setArrayValue([
        ...newArrayValue,
        ...arrayValue.slice(newArrayValue.length - 1, lastIndexOfCode),
      ]);

      setFocusIndexNext(newArrayValue.length - 1);
    } else {
      setArrayValue(newArrayValue);
    }
  };

  useEffect(() => {
    document.addEventListener('paste', onPaste);

    return () => {
      document.removeEventListener('paste', onPaste);
    };
  }, []);

  return { arrayValue, onKeyUp, onKeyDown };
};
