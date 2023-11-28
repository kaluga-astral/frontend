import { useRef } from 'react';

/**
 * @description предоставляет методы работы с фокусом на инпутах
 */
export const useFocusIndex = (codeLength: number) => {
  const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

  /**
   * @description установливает фокус на инпуте
   */
  const setFocusIndex = (index: number) => {
    inputRefs.current[index].focus();
  };

  /**
   * @description установливает фокус на следующем инпуте
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
   * @description установливает фокус на предыдущем инпуте
   */
  const setFocusIndexPrevious = (index: number) => {
    if (index !== 0) {
      setFocusIndex(index - 1);
    }
  };

  /**
   * @description вызвает блюр на всех инпутах
   */
  const setBlur = () => {
    inputRefs.current.forEach((elem) => elem.blur());
  };

  return { inputRefs, setFocusIndexNext, setFocusIndexPrevious, setBlur };
};
