import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';

import { SetupCryptoProWorkspaceModal } from '../../components';
import { CryptoProStore } from '../CryptoProStore';

export const CryptoProProvider = observer(
  ({
    children,
    cryptoProStore,
  }: PropsWithChildren<{ cryptoProStore: CryptoProStore }>) => {
    return (
      <>
        {cryptoProStore.isPluginChecked && cryptoProStore.isPluginInstalled ? (
          children
        ) : (
          <SetupCryptoProWorkspaceModal
            isDialogOpen={
              cryptoProStore.isPluginChecked &&
              !cryptoProStore.isPluginInstalled
            }
            onCloseButtonClick={() => {}}
          />
        )}
      </>
    );
  },
);
