import { createContext } from 'react';

export type RowContextProps = {
  isDisabled: boolean;
  disabledReason?: string;
  addDisabledRow: (disabledReason?: string) => void;
  removeDisabledRow: () => void;
};

export const RowContext = createContext<RowContextProps>({
  isDisabled: false,
  addDisabledRow: () => {},
  removeDisabledRow: () => {},
});
