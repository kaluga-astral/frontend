import { type ReactNode, useState } from 'react';

import { RowContext } from '../RowContext';

type RowContextProviderProps = {
  children: ReactNode;
};

export const RowContextProvider = ({ children }: RowContextProviderProps) => {
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [disabledReason, setDisabledReason] = useState<string | undefined>();

  const addDisabledRow = (reason?: string) => {
    setDisabled(true);
    setDisabledReason(reason);
  };

  const removeDisabledRow = () => {
    setDisabled(false);
    setDisabledReason(undefined);
  };

  return (
    <RowContext.Provider
      value={{
        isDisabled,
        disabledReason,
        addDisabledRow,
        removeDisabledRow,
      }}
    >
      {children}
    </RowContext.Provider>
  );
};
