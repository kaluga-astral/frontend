import { type Meta, type StoryObj } from '@storybook/react';
import { type SyntheticEvent, useState } from 'react';
import { Stack } from '@mui/material';

import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { Tabs } from '../Tabs';

import { Tab } from './Tab';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=376-5801&mode=design&t=6DlItWfeBP8xOP7n-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Interaction: Story = {
  args: {
    label: 'Tab',
  },
  parameters: {
    options: { showPanel: false },
    docs: {
      disable: true,
    },
  },
};

export const TabsWithTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} rows={2}>
      <Typography>
        Пример Tab с компонентом Tabs, который является оберткой для размещения
        прочих компонентов в заголовке.
      </Typography>
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
    </Grid>
  );
};
