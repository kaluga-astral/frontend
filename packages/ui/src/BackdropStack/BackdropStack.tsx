import { PropsWithChildren, createContext, useRef } from 'react';

type StackOptions = {
  push: (id: string) => void;
  pop: (id: string) => boolean;
  clean: () => void;
  remove: (id: string) => void;
};

export const BackdropStackContext = createContext<StackOptions>({
  push: () => {},
  pop: () => true,
  clean: () => {},
  remove: () => {},
});

export const BackdropStackProvider = ({ children }: PropsWithChildren<{}>) => {
  const stack = useRef<string[]>([]);
  const nextIdToClose = useRef<string | null>(null);

  const planToClean = () => {
    setTimeout(() => {
      nextIdToClose.current = null;
    }, 100);
  };

  const push = (id: string) => {
    stack.current.push(id);
  };

  const pop = (id: string): boolean => {
    if (nextIdToClose.current !== null) {
      return false;
    }

    const lastOpenedElement = stack.current[stack.current.length - 1];

    if (lastOpenedElement === id) {
      nextIdToClose.current = id;
      stack.current.pop();
      planToClean();

      return true;
    }

    return false;
  };

  const clean = () => {
    stack.current = [];
  };

  const remove = (id: string) => {
    stack.current = stack.current.filter((item) => item !== id);
  };

  return (
    <BackdropStackContext.Provider value={{ push, pop, clean, remove }}>
      {children}
    </BackdropStackContext.Provider>
  );
};
