import {
  type ClipboardEvent,
  type KeyboardEvent,
  useEffect,
  useState,
} from 'react';

import { type CodeFieldInputType } from '../../types';
import { formatInitialValue } from '../../utils';
import { DIGITS_REGEX, DIGIT_KEYS, KEYBOARD_KEYS } from '../../constants';

export const useCodeState = (
  initialValue: string | undefined,
  codeLength: number,
  setFocusIndexNext: (index: number) => void,
  setFocusIndexPrevious: (index: number) => void,
  setBlur: () => void,
  onFieldChange?: (value: string) => void,
  onComplete?: (value: string) => void,
) => {
  const [codeValue, setCodeValue] = useState<CodeFieldInputType[]>(() =>
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

  const clearCodeValue = () => {
    setCodeValue(Array.from({ length: codeLength }));
  };

  const deletePreviousSymbol = (index: number) => {
    // если фокус на заполненном инпуте, то очищаем его;
    // если фокус на пустом инпуте, то очищаем предыдущий инпут.
    const deleteIndex = codeValue[index]?.toString() ? index : index - 1;

    let newCodeValue = [...codeValue];

    newCodeValue[deleteIndex] = '';
    setCodeValue(newCodeValue);
  };

  const changeValue = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // если поле кода пустое, всегда начинаем ввод с первого инпута
    const inputIndex = isCodeValueEmpty() ? 0 : index;

    let newCodeValue = [...codeValue];

    newCodeValue[inputIndex] = parseInt(e.key);
    setCodeValue(newCodeValue);
    setFocusIndexNext(inputIndex);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    switch (e.key) {
      case KEYBOARD_KEYS.moveCaretLeft:
        setFocusIndexPrevious(index);

        break;
      case KEYBOARD_KEYS.moveCaretRight:
        setFocusIndexNext(index);

        break;
      case KEYBOARD_KEYS.backspace:
        deletePreviousSymbol(index);

        break;
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyCode = parseInt(e.key);

    if (e.key === KEYBOARD_KEYS.backspace) {
      setFocusIndexPrevious(index);
    } else if (
      keyCode >= DIGIT_KEYS.zeroDigit &&
      keyCode <= DIGIT_KEYS.nineDigit
    ) {
      changeValue(e, index);
    }
  };

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    let pasteText: string = event.clipboardData?.getData('text') || '';

    // оставляем только цифры + отсекаем лишние символы, если их кол-во больше, чем символов в коде
    const cleanedValue = pasteText
      .replace(DIGITS_REGEX, '')
      .slice(0, codeLength)
      .split('');

    if (cleanedValue.length === 0) {
      clearCodeValue();

      return;
    }

    const newCodeValue = cleanedValue.map((num) => Number(num));

    // если длина вставленного кода меньше, чем кол-во символов в коде,
    // устанавливаем фокус на элемент, следующий за последним встравленным
    if (newCodeValue.length < codeValue.length) {
      setCodeValue([
        ...newCodeValue,
        ...codeValue.slice(newCodeValue.length - 1, codeLength - 1),
      ]);

      setFocusIndexNext(newCodeValue.length - 1);
    } else {
      setCodeValue(newCodeValue);
      setBlur();
    }
  };

  return { codeValue, onKeyUp, onKeyDown, onPaste, clearCodeValue };
};
