import { Story } from '@storybook/react';

import { SetupCryptoProWorkspaceModal } from './SetupCryptoProWorkspaceModal';

export default {
  title: 'Features/SetupCryptoProWorkspaceModal',
  component: null,
};

const Template: Story = () => {
  return <SetupCryptoProWorkspaceModal />;
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
