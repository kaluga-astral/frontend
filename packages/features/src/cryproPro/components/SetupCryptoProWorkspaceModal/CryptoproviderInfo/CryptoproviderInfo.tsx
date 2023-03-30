import { Button, Description, Tooltip } from '@astral/components';
import { InfoFillSm, OpenLinkOutlineMd } from '@astral/icons';

import { WorkspaceInfoItem } from '../styles';
import { CheckWorkspace } from '../WorkspaceSetup';

import { CryptoproviderInfoIconWrapper } from './styles';

type Props = {
  workspaceSetupInfo: CheckWorkspace;
};

export const CryptoproviderInfo = ({ workspaceSetupInfo }: Props) => {
  return (
    <WorkspaceInfoItem>
      <Description>
        <Description.Name>Криптопровайдер</Description.Name>
        <Description.Value>
          {!workspaceSetupInfo.isPluginInstalled ? (
            <>
              Нет данных
              <Tooltip title="Данные о криптопровайдере будут получены после установки приложения “КриптоПро ЭЦП Browser plug-in” и обновления страницы браузера.">
                <CryptoproviderInfoIconWrapper>
                  <InfoFillSm />
                </CryptoproviderInfoIconWrapper>
              </Tooltip>
            </>
          ) : workspaceSetupInfo.cspVersion ? (
            `Крипто Про CSP v${workspaceSetupInfo.cspVersion}`
          ) : workspaceSetupInfo.hasCryptoProvider ? (
            'Установлен'
          ) : (
            'Не установлен'
          )}
        </Description.Value>
      </Description>
      {!workspaceSetupInfo.isPluginInstalled && (
        <Button
          variant="link"
          endIcon={<OpenLinkOutlineMd />}
          href="https://cryptopro.ru/downloads"
          /*
        проблемы с типами кнопки
        // @ts-ignore */
          target="_blank"
          rel="noopener noreferrer"
        >
          Рекомендуем КриптоПро CSP
        </Button>
      )}
    </WorkspaceInfoItem>
  );
};
