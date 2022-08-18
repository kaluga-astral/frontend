import { PropsWithChildren, createContext, useRef } from 'react';
import { nanoid } from 'nanoid';

type PopId = string;
type PointerId = string;

type PopTuple = [Reasons | undefined, PointerId];

type PopOptions = {
  reason?: Reasons;
  cleanOnPop: boolean;
};

type PopFunc = (id: PopId, options: PopOptions) => boolean;

type StackOptions = {
  push: (id: PopId) => void;
  pop: PopFunc;
  clean: () => void;
  remove: (id: PopId) => void;
};

export type Reasons =
  | 'escapeKeyDown'
  | 'backdropClick'
  | 'toggleInput'
  | 'blur'
  | string;

export const BackdropStackContext = createContext<StackOptions>({
  push: () => {},
  pop: () => true,
  clean: () => {},
  remove: () => {},
});

let currentPointerId: PointerId = '';

document.addEventListener('pointerdown', () => (currentPointerId = nanoid()));

export const BackdropStackProvider = ({ children }: PropsWithChildren<{}>) => {
  const stack = useRef<PopId[]>([]);
  const previousPopInfo = useRef<PopTuple>(['', '']);

  const checkOnBackdropAndBlurCombination = (reason?: Reasons): boolean => {
    const [previousReason, previousPointerId] = previousPopInfo.current;

    return (
      reason === 'backdropClick' &&
      previousReason === 'blur' &&
      previousPointerId === currentPointerId
    );
  };

  const clean = () => {
    stack.current = [];
  };

  const remove = (id: PopId) => {
    stack.current = stack.current.filter((item) => item !== id);
  };

  const push = (id: PopId) => {
    stack.current.push(id);
  };

  const pop: PopFunc = (id, { reason, cleanOnPop }) => {
    if (checkOnBackdropAndBlurCombination(reason)) {
      return false;
    }

    const lastOpenedElement = stack.current[stack.current.length - 1];

    if (lastOpenedElement === id) {
      previousPopInfo.current = [reason, currentPointerId];
      stack.current.pop();

      if (cleanOnPop) {
        clean();
      }

      return true;
    }

    return false;
  };

  return (
    <BackdropStackContext.Provider value={{ push, pop, clean, remove }}>
      {children}
    </BackdropStackContext.Provider>
  );
};
