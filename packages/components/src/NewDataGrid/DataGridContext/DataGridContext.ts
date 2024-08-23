import { createContext } from 'react';

export type DataGridContextProps = {
  checkIsOpened: (key: string) => boolean;
  checkIsMoreOpened: (key: string) => boolean;
  toggleOpenItems: (key: string) => void;
  toggleOpenMoreItems: (key: string) => void;
};

export const DataGridContext = createContext<DataGridContextProps>({
  checkIsOpened: () => false,
  checkIsMoreOpened: () => false,
  toggleOpenItems: () => {},
  toggleOpenMoreItems: () => {},
});
