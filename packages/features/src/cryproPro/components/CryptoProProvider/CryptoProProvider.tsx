import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';

import { SetupCryptoProWorkspaceModal } from '..';
import { CryptoProStore } from '../../stores/CryptoProStore';

/**
 * @description Провайдер, который в случае отсутствия или неактивности
 * КриптоПро browser plug-in или отсутствия КриптоПро провайдера на
 * устройстве пользователя - отображает окно настройки рабочего места
 * @param children все что необходимо обернуть в провайдер
 * @param cryptoProStore стор с информацией о плагине
 * */
export const CryptoProProvider = observer(
  ({
    children,
    cryptoProStore,
  }: PropsWithChildren<{
    cryptoProStore: CryptoProStore;
  }>) => {
    return (
      <>
        {cryptoProStore.isPluginInstalled && children}
        <SetupCryptoProWorkspaceModal
          isDialogOpen={
            cryptoProStore.isRequestSetupWorkspace &&
            !cryptoProStore.isPluginInstalled
          }
          onCloseButtonClick={cryptoProStore.resetIsRequestSetupWorkspace}
        />
      </>
    );
  },
);
