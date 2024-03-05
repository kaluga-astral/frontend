import { Button, Description, Tooltip } from '@astral/ui';
import { InfoFillSm, OpenLinkOutlineMd } from '@astral/ui';

import { WorkspaceInfoItem } from '../styles';
import { type CheckWorkspace } from '../../../services';

import { IconWrapper } from './styles';

type Props = {
  workspaceSetupInfo: CheckWorkspace;
};

export const CryptoproviderInfo = ({ workspaceSetupInfo }: Props) => {
  const getDescription = () => {
    if (!workspaceSetupInfo.isPluginInstalled) {
      return (
        <>
          Нет данных
          <Tooltip
            title="Данные о криптопровайдере будут получены после
          установки приложения “КриптоПро ЭЦП Browser plug-in” и обновления страницы браузера."
          >
            <IconWrapper>
              <InfoFillSm />
            </IconWrapper>
          </Tooltip>
        </>
      );
    } else if (workspaceSetupInfo.hasCryptoProvider) {
      return 'Установлен';
    } else {
      return 'Не установлен';
    }
  };

  return (
    <WorkspaceInfoItem>
      <Description>
        <Description.Name>Криптопровайдер</Description.Name>
        <Description.Value>
          {workspaceSetupInfo.cspVersion
            ? `Крипто Про CSP v${workspaceSetupInfo.cspVersion}`
            : getDescription()}
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
