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
      <Typography variant="h6">small</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">medium</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="medium" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">large</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="large" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>
  </>
);

export const Colors = () => (
  <>
    <Stack gap={4}>
      <Typography variant="h6">default</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="primary">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">success</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="success">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="warning">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">error</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="error">
          {svg}
        </Fab>
      </Stack>
    </Stack>
  </>
);

export const Variants = () => (
  <>
    <Stack gap={4}>
      <Typography variant="h6">square</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">circular</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab variant="circular" size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>
  </>
);

export const States = () => (
  <>
    <Stack gap={4}>
      <Typography variant="h6">active</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default">
          {svg}
        </Fab>
      </Stack>
    </Stack>

    <Stack gap={4}>
      <Typography variant="h6">disabled</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Fab size="small" color="default" disabled>
          {svg}
        </Fab>
      </Stack>
    </Stack>
  </>
);
