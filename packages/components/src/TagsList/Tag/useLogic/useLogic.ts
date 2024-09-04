import { type MouseEvent } from 'react';

export const useLogic = () => {
  const onMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return {
    onMouseDown,
  };
};
