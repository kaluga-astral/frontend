import Stack from '@mui/material/Stack';
import { Story } from '@storybook/react';

import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template: Story = (args) => (
  <Stack sx={{ width: '624px', height: '108px' }} spacing={2}>
    <Alert {...args} onClose={() => {}}></Alert>
  </Stack>
);

export const AlertStory = Template.bind({});

AlertStory.args = {
  severity: 'info',
  title: 'Заголовок',
  message:
    'Заголовок и действия опциональны, их можно отключить, если требуется.',
  buttonLinkText: 'Кнопка ссылка',
};

AlertStory.storyName = 'AlertStories';

AlertStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
