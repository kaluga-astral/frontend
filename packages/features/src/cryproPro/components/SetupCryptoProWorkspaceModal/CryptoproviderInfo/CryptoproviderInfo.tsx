import { Button, Description, Tooltip } from '@astral/ui';
import { InfoFillSm, OpenLinkOutlineMd } from '@astral/ui';

import { WorkspaceInfoItem } from '../styles';
import { CheckWorkspace } from '../../../services';

import { CryptoproviderInfoIconWrapper } from './styles';

type Props = {
  workspaceSetupInfo: CheckWorkspace;
};

export const CryptoproviderInfo = ({ workspaceSetupInfo }: Props) => {
  const descriptionValueOfInstalation = workspaceSetupInfo.hasCryptoProvider
    ? 'Установлен'
    : 'Не установлен';

  const descriptionValueForInstalation =
    !workspaceSetupInfo.isPluginInstalled ? (
      <>
        Нет данных
        <Tooltip title="Данные о криптопровайдере будут получены после установки приложения “КриптоПро ЭЦП Browser plug-in” и обновления страницы браузера.">
          <CryptoproviderInfoIconWrapper>
            <InfoFillSm />
          </CryptoproviderInfoIconWrapper>
        </Tooltip>
      </>
    ) : null;

  const getDescription = () =>
    descriptionValueForInstalation ?? descriptionValueOfInstalation;

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
