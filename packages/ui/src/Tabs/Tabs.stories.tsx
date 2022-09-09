import { Story } from '@storybook/react';
import { Stack, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import { Typography } from '../Typography';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

export const TabsShowcase: Story = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack gap={4}>
      <Stack gap={4}>
        <Typography variant="h3">Tab</Typography>
        <Stack gap={1}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Tab" />
            <Tab label="Tab" />
            <Tab label="Tab" disabled />
          </Tabs>
        </Stack>
      </Stack>
    </Stack>
  );
};

TabsShowcase.parameters = { options: { showPanel: false } };
