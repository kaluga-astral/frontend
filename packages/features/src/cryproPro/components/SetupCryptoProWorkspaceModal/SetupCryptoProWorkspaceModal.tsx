import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@astral/ui';
import { RefreshOutlineMd } from '@astral/ui';

import { type CheckWorkspace } from '../../services/WorkspaceSetupService';

import { CryptoproviderInfo } from './CryptoproviderInfo';
import { PluginInfo } from './PluginInfo';
import { WorkspaceInfoWrapper } from './styles';

type SetupCryptoProWorkspaceModalProps = {
  isDialogOpen: boolean;
  onCloseButtonClick: () => void;
  workspaceSetupInfo: CheckWorkspace;
};

export const SetupCryptoProWorkspaceModal = ({
  isDialogOpen,
  onCloseButtonClick,
  workspaceSetupInfo,
}: SetupCryptoProWorkspaceModalProps) => {
  const handleRefreshButtonClick = () => {
    location.reload();
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onCloseButtonClick}
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
        <Button variant="text" onClick={onCloseButtonClick}>
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
