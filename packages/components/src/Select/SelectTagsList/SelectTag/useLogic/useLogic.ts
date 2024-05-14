import { type MouseEvent } from 'react';

export function useLogic() {
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return {
    onMouseDown,
  };
}
