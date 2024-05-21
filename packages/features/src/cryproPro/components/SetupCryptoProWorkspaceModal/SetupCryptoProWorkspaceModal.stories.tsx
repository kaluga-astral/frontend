import { FormControlLabel, Switch } from '@astral/ui';
import { type StoryFn } from '@storybook/react';
import { useState } from 'react';

import {
  type CheckWorkspace,
  createWorkspaceSetupService,
} from '../../services';

import { SetupCryptoProWorkspaceModal } from './SetupCryptoProWorkspaceModal';

export default {
  title: 'Features/SetupCryptoProWorkspaceModal',
  component: null,
};

const Template: StoryFn = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const workspaceSetupService = createWorkspaceSetupService();
  const [workspaceSetupInfo, setWorkspaceSetupInfo] = useState(
    {} as CheckWorkspace,
  );

  const handleChange = () => {
    workspaceSetupService
      .checkWorkspace()
      .then((res) => setWorkspaceSetupInfo(res));

    setIsDialogOpen((prev) => !prev);
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={isDialogOpen} onChange={handleChange} />}
        label="Показать окно настройки рабочего места"
      />
      <SetupCryptoProWorkspaceModal
        workspaceSetupInfo={workspaceSetupInfo}
        isDialogOpen={isDialogOpen}
        onCloseButtonClick={handleChange}
      />
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
