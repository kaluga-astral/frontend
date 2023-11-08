import { useRef } from 'react';

export const useFocusIndex = (codeLength: number) => {
  const inputRefs = useRef<Array<HTMLInputElement> | []>([]);

  const setFocusIndex = (index: number) => {
    inputRefs.current[index].focus();
  };

  const setFocusIndexNext = (index: number) => {
    const lastIndexOfCode = codeLength - 1;

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

  return { inputRefs, setFocusIndex, setFocusIndexNext, setFocusIndexPrevious };
};
