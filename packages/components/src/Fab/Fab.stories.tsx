import { Story } from '@storybook/react';
import { Stack } from '@mui/material';
import { LikeOutlineMd } from '@astral/icons';

import { Typography } from '../Typography';

import { Fab } from './Fab';

export default {
  title: 'Components/Fab',
  component: Fab,
};

const svg = <LikeOutlineMd />;

export const FabShowcase: Story = () => (
  <Stack gap={4}>
    <Stack gap={4}>
      <Typography variant="h3">Default Type (Square)</Typography>
      <Stack gap={1}>
        <Typography variant="h4">Small </Typography>
        <Stack gap={3} direction="row" alignItems="center">
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
          <Fab size="small" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4">Medium </Typography>
        <Stack gap={3} direction="row" alignItems="center">
          <Fab size="medium" color="default">
            {svg}
          </Fab>
          <Fab size="medium" color="primary">
            {svg}
          </Fab>
          <Fab size="medium" color="success">
            {svg}
          </Fab>
          <Fab size="medium" color="warning">
            {svg}
          </Fab>
          <Fab size="medium" color="error">
            {svg}
          </Fab>
          <Fab size="medium" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4">Large </Typography>
        <Stack gap={3} direction="row" alignItems="center">
          <Fab size="large" color="default">
            {svg}
          </Fab>
          <Fab size="large" color="primary">
            {svg}
          </Fab>
          <Fab size="large" color="success">
            {svg}
          </Fab>
          <Fab size="large" color="warning">
            {svg}
          </Fab>
          <Fab size="large" color="error">
            {svg}
          </Fab>
          <Fab size="large" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
    </Stack>
    <Stack gap={4}>
      <Typography variant="h3">Сircular Type</Typography>
      <Stack gap={1}>
        <Typography variant="h4">Small </Typography>
        <Stack gap={3} direction="row" alignItems="center">
          <Fab variant="circular" size="small" color="default">
            {svg}
          </Fab>
          <Fab variant="circular" size="small" color="primary">
            {svg}
          </Fab>
          <Fab variant="circular" size="small" color="success">
            {svg}
          </Fab>
          <Fab variant="circular" size="small" color="warning">
            {svg}
          </Fab>
          <Fab variant="circular" size="small" color="error">
            {svg}
          </Fab>
          <Fab variant="circular" size="small" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4">Medium </Typography>
        <Stack gap={3} direction="row" alignItems="center">
          <Fab variant="circular" size="medium" color="default">
            {svg}
          </Fab>
          <Fab variant="circular" size="medium" color="primary">
            {svg}
          </Fab>

          <Fab variant="circular" size="medium" color="success">
            {svg}
          </Fab>
          <Fab variant="circular" size="medium" color="warning">
            {svg}
          </Fab>
          <Fab variant="circular" size="medium" color="error">
            {svg}
          </Fab>
          <Fab variant="circular" size="medium" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4">Large </Typography>
        <Stack gap={3} direction="row" alignItems="center">
          <Fab variant="circular" size="large" color="default">
            {svg}
          </Fab>
          <Fab variant="circular" size="large" color="primary">
            {svg}
          </Fab>
          <Fab variant="circular" size="large" color="success">
            {svg}
          </Fab>
          <Fab variant="circular" size="large" color="warning">
            {svg}
          </Fab>
          <Fab variant="circular" size="large" color="error">
            {svg}
          </Fab>
          <Fab variant="circular" size="large" color="error" disabled>
            {svg}
          </Fab>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

FabShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <Fab {...args}>{svg}</Fab>;

export const FabStory = Template.bind({});

FabStory.storyName = 'Fab';

FabStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'square',
  size: 'medium',
};

FabStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
