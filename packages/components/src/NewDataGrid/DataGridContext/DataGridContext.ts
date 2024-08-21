import { createContext } from 'react';

type DisabledRows = {
  key: string;
  loadingNote?: string;
};

export type DataGridContextProps = {
  checkIsOpened: (key: string) => boolean;
  checkIsMoreOpened: (key: string) => boolean;
  toggleOpenItems: (key: string) => void;
  toggleOpenMoreItems: (key: string) => void;
  keyId: string;
  disabledRowsData: DisabledRows[];
  addDisabledRow: (key: string, loadingNote?: string) => void;
  removeDisabledRow: (key: string) => void;
};

export const DataGridContext = createContext<DataGridContextProps>({
  checkIsOpened: () => false,
  checkIsMoreOpened: () => false,
  toggleOpenItems: () => {},
  toggleOpenMoreItems: () => {},
  addDisabledRow: () => {},
  removeDisabledRow: () => {},
  disabledRowsData: [],
  keyId: '',
});
