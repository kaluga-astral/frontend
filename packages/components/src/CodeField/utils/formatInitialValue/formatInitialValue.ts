import { CodeFieldInputType } from '../../types';

export const formatInitialValue = (
  codeLength: number,
  initialValue?: string,
) => {
  const initialArray = Array.from({ length: codeLength });

  if (initialValue) {
    initialValue.split('').forEach((symbol, index) => {
      initialArray[index] = symbol;
    });
  }

  return initialArray as CodeFieldInputType[];
};
