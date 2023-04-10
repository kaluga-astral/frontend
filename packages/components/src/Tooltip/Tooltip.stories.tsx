import { Story } from '@storybook/react';
import { Stack } from '@mui/material';
import { AddOutlineMd } from '@astral/icons';

import { Typography } from '../Typography/Typography';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template: Story = (args) => {
  return (
    <Tooltip title="Всплывающая подсказка" {...args}>
      <IconButton variant="contained">
        <AddOutlineMd />
      </IconButton>
    </Tooltip>
  );
};

export const Showcase: Story = () => (
  <Stack gap={4}>
    <Typography variant="h5">Medium</Typography>
    <Stack gap={3} direction="row" alignItems="center">
      <Tooltip title="Всплывающая подсказка">
        <span>Текст</span>
      </Tooltip>
      <Tooltip title="Всплывающая подсказка" withoutContainer={false}>
        <Button color="primary" variant="contained" disabled>
          <AddOutlineMd />
        </Button>
      </Tooltip>
      <Tooltip title="Всплывающая подсказка">
        <IconButton variant="contained">
          <AddOutlineMd />
        </IconButton>
      </Tooltip>
      <Tooltip title="Всплывающая подсказка" withoutContainer={false}>
        <IconButton variant="contained" disabled>
          <AddOutlineMd />
        </IconButton>
      </Tooltip>
    </Stack>

    <Typography variant="h5">Small</Typography>
    <Stack gap={3} direction="row" alignItems="center">
      <Tooltip size="small" title="Всплывающая подсказка">
        <span>Текст</span>
      </Tooltip>
      <Tooltip size="small" title="Всплывающая подсказка">
        <Button color="primary" variant="contained">
          Текст
        </Button>
      </Tooltip>
      <Tooltip size="small" title="Всплывающая подсказка">
        <IconButton variant="contained">
          <AddOutlineMd />
        </IconButton>
      </Tooltip>
    </Stack>

    <Typography variant="h5">Right menu tooltip</Typography>
    <Stack gap={3}>
      <Tooltip placement="right" title="Элемент 1">
        <IconButton>
          <AddOutlineMd />
        </IconButton>
      </Tooltip>
      <Tooltip placement="right" title="Элемент 2">
        <IconButton>
          <AddOutlineMd />
        </IconButton>
      </Tooltip>
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
