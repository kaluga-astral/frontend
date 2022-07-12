import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Typography } from '../Typography';

import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 230 230"
    fill="currentColor"
    width="16px"
    height="16px"
  >
    <path d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083  c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083  C235.26,57.99,236.537,96.466,213.588,120.982z" />
  </svg>
);

export const IconButtonShowcase: Story = () => (
  <Stack gap={4}>
    <Typography variant="h3">Contained</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="primary" variant="contained">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="contained" size="large">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="contained" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="success" variant="contained">
          {svg}
        </IconButton>
        <IconButton color="success" variant="contained" size="large">
          {svg}
        </IconButton>
        <IconButton color="success" variant="contained" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="warning" variant="contained">
          {svg}
        </IconButton>
        <IconButton color="warning" variant="contained" size="large">
          {svg}
        </IconButton>
        <IconButton color="warning" variant="contained" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="error" variant="contained">
          {svg}
        </IconButton>
        <IconButton color="error" variant="contained" size="large">
          {svg}
        </IconButton>
        <IconButton color="error" variant="contained" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Typography variant="h3">Light</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="primary" variant="light">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="light" size="large">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="light" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="success" variant="light">
          {svg}
        </IconButton>
        <IconButton color="success" variant="light" size="large">
          {svg}
        </IconButton>
        <IconButton color="success" variant="light" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="warning" variant="light">
          {svg}
        </IconButton>
        <IconButton color="warning" variant="light" size="large">
          {svg}
        </IconButton>
        <IconButton color="warning" variant="light" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="error" variant="light">
          {svg}
        </IconButton>
        <IconButton color="error" variant="light" size="large">
          {svg}
        </IconButton>
        <IconButton color="error" variant="light" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Typography variant="h3">Text</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="primary" variant="text">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="text" size="large">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="text" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>

    <Typography variant="h3">Link</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <IconButton color="primary" variant="link">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="link" size="large">
          {svg}
        </IconButton>
        <IconButton color="primary" variant="link" disabled>
          {svg}
        </IconButton>
      </Stack>
    </Stack>
  </Stack>
);

IconButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <IconButton {...args}>{svg}</IconButton>;

export const IconButtonStory = Template.bind({});

IconButtonStory.storyName = 'Icon Button';

IconButtonStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

IconButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
