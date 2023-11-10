import { Button, Description, Typography } from '@astral/ui';
import { DownloadOutlineMd } from '@astral/ui';

import { WorkspaceInfoItem } from '../styles';
import type { CheckWorkspace } from '../../../services';

type Props = {
  workspaceSetupInfo: CheckWorkspace;
};

export const PluginInfo = ({ workspaceSetupInfo }: Props) => {
  return (
    <WorkspaceInfoItem>
      <Description>
        <Description.Name>Приложение</Description.Name>
        <Description.Value>КриптоПро ЭЦП Browser plug-in</Description.Value>
      </Description>
      {workspaceSetupInfo.isPluginInstalled ? (
        <Typography color="green" colorIntensity="900">
          Установлено
        </Typography>
      ) : (
        <Button
          variant="text"
          endIcon={<DownloadOutlineMd />}
          href="https://www.cryptopro.ru/products/cades/plugin/get_2_0"
          /*
        проблемы с типами кнопки
        // @ts-ignore */
          target="_blank"
          rel="noopener noreferrer"
        >
          Скачать
        </Button>
      )}
    </WorkspaceInfoItem>
  );
};
