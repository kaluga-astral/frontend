import { useEffect, useRef } from 'react';

/**
 * @description предоставляет методы работы с фокусом на инпутах
 */
export const useFocusInput = (codeLength: number, isAutoFocus?: boolean) => {
  const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

  /**
   * @description устанавливает фокус на инпуте
   */
  const setFocusIndex = (index: number) => {
    inputRefs.current[index].focus();
  };

  /**
   * @description устанавливает фокус на следующем инпуте
   */
  const setFocusIndexNext = (index: number) => {
    const lastIndexOfCode = codeLength - 1;

    if (index === lastIndexOfCode) {
      inputRefs.current[index].blur();
    } else {
      setFocusIndex(index + 1);
    }
  };

  /**
   * @description устанавливает фокус на предыдущем инпуте
   */
  const setFocusIndexPrevious = (index: number) => {
    if (index !== 0) {
      setFocusIndex(index - 1);
    }
  };

  /**
   * @description вызывает блюр на всех инпутах
   */
  const setBlur = () => {
    inputRefs.current.forEach((elem) => elem.blur());
  };

  useEffect(() => {
    if (isAutoFocus) {
      setFocusIndex(0);
    }
  }, []);

  return {
    inputRefs,
    setFocusIndexNext,
    setFocusIndexPrevious,
    setBlur,
  };
};
