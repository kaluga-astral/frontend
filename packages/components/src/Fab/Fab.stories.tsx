import { LikeOutlineMd } from '@astral/icons';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';

import { Fab } from './Fab';

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
};

const svg = <LikeOutlineMd />;

export default meta;

type Story = StoryObj<typeof Fab>;

export const Interaction: Story = {
  args: {
    children: svg,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <Fab size="small" color="default">
    {svg}
  </Fab>
);

export const Sizes = () => (
  <>
    <Stack gap={4}>
      <Typography variant="h5">Small</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h5">Medium</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="medium" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h5">Large</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="large" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>
  </>
);

export const Colors = () => (
  <Stack gap={4} direction="row" alignItems="center">
    <Fab size="small" color="default">
      {svg}
    </Fab>

    <Fab size="small" color="primary">
      {svg}
    </Fab>

    <Fab size="small" color="success">
      {svg}
    </Fab>

    <Fab size="small" color="warning">
      {svg}
    </Fab>

    <Fab size="small" color="error">
      {svg}
    </Fab>
  </Stack>
);

export const Сircular = () => (
  <Fab variant="circular" size="small" color="default">
    {svg}
  </Fab>
);

export const Disabled = () => (
  <Fab size="small" color="default" disabled>
    {svg}
  </Fab>
);
