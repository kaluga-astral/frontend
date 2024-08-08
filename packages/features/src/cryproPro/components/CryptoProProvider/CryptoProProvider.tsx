import { type PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { Global } from '@astral/ui';

import { SetupCryptoProWorkspaceModal } from '../SetupCryptoProWorkspaceModal';
import { type CryptoProStore } from '../../stores/CryptoProStore';

/**
 * Провайдер, который в случае отсутствия или неактивности
 * @deprecated Используйте пакет @astral-private/crypto https://cryptodocs.astralnalog.ru/
 * Причина отказа от поддержки: поддержка функционала теперь осуществляется централизовано командой Астрал-Софт в закрытом контуре.
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
        {children}
        <SetupCryptoProWorkspaceModal
          workspaceSetupInfo={cryptoProStore.workspaceSetupInfo}
          isDialogOpen={
            cryptoProStore.isRequestSetupWorkspace &&
            !cryptoProStore.isPluginInstalled
          }
          onCloseButtonClick={cryptoProStore.resetIsRequestSetupWorkspace}
        />

        {/* При установленном плагине, но неактивном расширении, в Firefox и Opera инжектится нативная модалка */}
        <Global
          styles={{
            '#cadesplugin_ovr': {
              display: 'none !important',
            },
          }}
        />
      </>
    );
  },
);
