import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@astral/components';
import { RefreshOutlineMd } from '@astral/icons';
import { useEffect, useState } from 'react';

import { CryptoproviderInfo } from './CryptoproviderInfo';
import { PluginInfo } from './PluginInfo';
import { WorkspaceInfoWrapper } from './styles';
import { CheckWorkspace, createWorkspaceSetupStore } from './WorkspaceSetup';

type SetupCryptoProWorkspaceModalProps = {
  isDialogOpen: boolean;
  handleCloseButtonClick: () => void;
};

export const SetupCryptoProWorkspaceModal = ({
  isDialogOpen,
  handleCloseButtonClick,
}: SetupCryptoProWorkspaceModalProps) => {
  const workspaceSetupStore = createWorkspaceSetupStore();
  const [workspaceSetupInfo, setWorkspaceSetupInfo] = useState(
    {} as CheckWorkspace,
  );

  useEffect(() => {
    workspaceSetupStore
      .checkWorkspace()
      .then((res) => setWorkspaceSetupInfo(res));
  }, []);

  const handleRefreshButtonClick = () => {
    location.reload();
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleCloseButtonClick}
      title="Настройка рабочего места"
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <Typography>
          Настройка рабочего места необходима для выполнения криптографических
          операций. Установите необходимые дополнения, а затем обновите
          страницу.
        </Typography>
        <WorkspaceInfoWrapper>
          <PluginInfo workspaceSetupInfo={workspaceSetupInfo} />
          <CryptoproviderInfo workspaceSetupInfo={workspaceSetupInfo} />
        </WorkspaceInfoWrapper>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleCloseButtonClick}>
          Закрыть
        </Button>
        <Button
          endIcon={<RefreshOutlineMd />}
          onClick={handleRefreshButtonClick}
        >
          Обновить страницу
        </Button>
      </DialogActions>
    </Dialog>
  );
};
