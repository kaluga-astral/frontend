import { Story } from '@storybook/react';
import { SyntheticEvent, useState } from 'react';
import { Stack } from '@mui/material';

import { Tabs } from '../Tabs';
import { Typography } from '../Typography';

import { Tab } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
};

export const TabShowcase: Story = () => {
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

TabShowcase.parameters = { options: { showPanel: false } };
