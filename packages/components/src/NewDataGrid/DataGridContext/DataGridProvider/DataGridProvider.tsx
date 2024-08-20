import { type ReactNode, useState } from 'react';

import { DataGridContext } from '../DataGridContext';

type DataGridContextProviderProps = {
  children: ReactNode;
  keyId: string;
};

type KeyType = string;

type RowFlags = {
  isOpenedItems: true;
  iOpenedMoreItems: boolean;
};

const ROW_FLAGS_BY_DEFAULT: RowFlags = {
  isOpenedItems: true,
  iOpenedMoreItems: false,
};

export const DataGridContextProvider = ({
  children,
  keyId,
}: DataGridContextProviderProps) => {
  const [openedItems, setOpenedItems] = useState<Record<KeyType, RowFlags>>({});
  const [actions, setActions] = useState<Record<KeyType, object>>({});

  const updateAction = (key: KeyType, action: object) => {
    setActions((prevState) => ({
      ...prevState,
      [key]: action,
    }));
  };
  const checkIsOpened = (key: KeyType) => {
    if (openedItems[key]) {
      return true;
    }

    return false;
  };

  const checkIsMoreOpened = (key: KeyType) => {
    if (openedItems[key]) {
      return openedItems[key].iOpenedMoreItems;
    }

    return false;
  };

  const toggleOpenItems = (key: KeyType) =>
    setOpenedItems((currentOpenedItems) => {
      if (checkIsOpened(key)) {
        const newOpenedItems = { ...currentOpenedItems };

        delete newOpenedItems[key];

        return newOpenedItems;
      }

      return { ...currentOpenedItems, [key]: ROW_FLAGS_BY_DEFAULT };
    });

  const toggleOpenMoreItems = (key: KeyType) =>
    setOpenedItems((currentOpenedItems) => {
      if (checkIsMoreOpened(key)) {
        const newOpenedItems = { ...currentOpenedItems };

        newOpenedItems[key] = ROW_FLAGS_BY_DEFAULT;

        return newOpenedItems;
      }

      return {
        ...currentOpenedItems,
        [key]: { ...ROW_FLAGS_BY_DEFAULT, iOpenedMoreItems: true },
      };
    });

  return (
    <DataGridContext.Provider
      value={{
        checkIsOpened,
        checkIsMoreOpened,
        toggleOpenItems,
        toggleOpenMoreItems,
        keyId,
        updateAction,
        actions,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
};
