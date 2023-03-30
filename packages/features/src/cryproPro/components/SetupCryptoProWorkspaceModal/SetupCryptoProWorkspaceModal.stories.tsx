import { FormControlLabel, Switch } from '@astral/components';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { SetupCryptoProWorkspaceModal } from './SetupCryptoProWorkspaceModal';

export default {
  title: 'Features/SetupCryptoProWorkspaceModal',
  component: null,
};

const Template: Story = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleChange = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <>
      <FormControlLabel
        control={<Switch checked={isDialogOpen} onChange={handleChange} />}
        label="Показать окно настройки рабочего места"
      />
      <SetupCryptoProWorkspaceModal
        isDialogOpen={isDialogOpen}
        handleCloseButtonClick={handleChange}
      />
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
