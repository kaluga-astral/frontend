import { useEffect } from 'react';

import { type AutoSaveIndicatorStore } from '../AutoSaveIndicatorStore';

type UseInitAutoSaveIndicatorStoreParams = AutoSaveIndicatorStore;

export const useInitAutoSaveIndicatorStore = (
  store: UseInitAutoSaveIndicatorStoreParams,
) => {
  useEffect(() => {
    store.show();

    return () => {
      store.hide();
      store.reset();
    };
  }, []);
};
