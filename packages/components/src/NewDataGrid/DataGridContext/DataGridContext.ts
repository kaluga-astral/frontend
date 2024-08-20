import { createContext } from 'react';

export type DataGridContextProps = {
  checkIsOpened: (key: string) => boolean;
  checkIsMoreOpened: (key: string) => boolean;
  toggleOpenItems: (key: string) => void;
  toggleOpenMoreItems: (key: string) => void;
  keyId: string;
  actions: Record<string, object>;
  updateAction: (key: string, actions: object) => void;
};

export const DataGridContext = createContext<DataGridContextProps>({
  checkIsOpened: () => false,
  checkIsMoreOpened: () => false,
  toggleOpenItems: () => {},
  toggleOpenMoreItems: () => {},
  updateAction: () => {},
  keyId: '',
  actions: { main: [] },
});
