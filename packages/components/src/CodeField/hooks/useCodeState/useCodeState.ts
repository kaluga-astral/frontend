import { KeyboardEvent, useEffect, useState } from 'react';

import { CodeFieldInputType } from '../../types';
import { formatInitialValue } from '../../utils';
import { DIGITS_REGEX, KEYBOARD_KEYS } from '../../constants';

export const useCodeState = (
  initialValue: string | undefined,
  codeLength: number,
  setFocusIndexNext: (index: number) => void,
  setFocusIndexPrevious: (index: number) => void,
  setBlur: () => void,
  onFieldChange?: (value: string) => void,
  onComplete?: (value: string) => void,
  disabled?: boolean,
) => {
  const [codeValue, setCodeValue] = useState<CodeFieldInputType[]>(
    formatInitialValue(codeLength, initialValue),
  );

  const isCodeValueEmpty = () => {
    return codeValue.join('') === '';
  };

  const isCodeValueFilled = () => {
    return codeValue.join('').length === codeLength;
  };

  useEffect(() => {
    const formattedValue = codeValue.join('');

    if (onFieldChange) {
      onFieldChange(formattedValue);
    }

    if (onComplete && isCodeValueFilled()) {
      onComplete(formattedValue);
    }
  }, [codeValue]);

  const deletePreviousSymbol = (index: number) => {
    let newCodeValue = [...codeValue];

    if (codeValue[index]?.toString()) {
      newCodeValue[index] = '';
      setCodeValue(newCodeValue);
    } else if (codeValue[index - 1]?.toString()) {
      newCodeValue[index - 1] = '';
      setCodeValue(newCodeValue);
      setFocusIndexPrevious(index);
    }
  };

  const onChange = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.key);

    // @ts-ignore
    e.target.value = newValue;

    setCodeValue((preValue: CodeFieldInputType[]) => {
      let newCodeValue = [...preValue];

      if (isCodeValueEmpty()) {
        // всегда начинаем ввод кода с 1го инпута, если поле пустое
        newCodeValue[0] = newValue;
        setFocusIndexNext(0);
      } else {
        newCodeValue[index] = newValue;
        setFocusIndexNext(index);
      }

      return newCodeValue;
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

    const newCodeValue = cleanedValue.map((num) => Number(num));

    if (newCodeValue.length < codeValue.length) {
      const lastIndexOfCode = codeLength - 1;

      setCodeValue([
        ...newCodeValue,
        ...codeValue.slice(newCodeValue.length - 1, lastIndexOfCode),
      ]);

      setFocusIndexNext(newCodeValue.length - 1);
    } else {
      setCodeValue(newCodeValue);
      setBlur();
    }
  };

  useEffect(() => {
    document.addEventListener('paste', onPaste);

    return () => {
      document.removeEventListener('paste', onPaste);
    };
  }, []);

  return { codeValue, onKeyUp, onKeyDown };
};
