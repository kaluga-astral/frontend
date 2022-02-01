import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Typography } from '../Typography';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
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

export const ButtonShowcase: Story = () => (
  <Stack gap={4}>
    <Typography variant="h3">Contained</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="primary" variant="contained">
          Label
        </Button>
        <Button color="primary" variant="contained" loading>
          Loading
        </Button>
        <Button color="primary" variant="contained" size="large">
          Large
        </Button>
        <Button color="primary" variant="contained" startIcon={svg}>
          With icon
        </Button>
        <Button color="primary" variant="contained" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="success" variant="contained">
          Label
        </Button>
        <Button color="success" variant="contained" loading>
          Loading
        </Button>
        <Button color="success" variant="contained" size="large">
          Large
        </Button>
        <Button color="success" variant="contained" startIcon={svg}>
          With icon
        </Button>
        <Button color="success" variant="contained" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="warning" variant="contained">
          Label
        </Button>
        <Button color="warning" variant="contained" loading>
          Loading
        </Button>
        <Button color="warning" variant="contained" size="large">
          Large
        </Button>
        <Button color="warning" variant="contained" startIcon={svg}>
          With icon
        </Button>
        <Button color="warning" variant="contained" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="error" variant="contained">
          Label
        </Button>
        <Button color="error" variant="contained" loading>
          Loading
        </Button>
        <Button color="error" variant="contained" size="large">
          Large
        </Button>
        <Button color="error" variant="contained" startIcon={svg}>
          With icon
        </Button>
        <Button color="error" variant="contained" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Typography variant="h3">Light</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="primary" variant="light">
          Label
        </Button>
        <Button color="primary" variant="light" loading>
          Loading
        </Button>
        <Button color="primary" variant="light" size="large">
          Large
        </Button>
        <Button color="primary" variant="light" startIcon={svg}>
          With icon
        </Button>
        <Button color="primary" variant="light" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="success" variant="light">
          Label
        </Button>
        <Button color="success" variant="light" loading>
          Loading
        </Button>
        <Button color="success" variant="light" size="large">
          Large
        </Button>
        <Button color="success" variant="light" startIcon={svg}>
          With icon
        </Button>
        <Button color="success" variant="light" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="warning" variant="light">
          Label
        </Button>
        <Button color="warning" variant="light" loading>
          Loading
        </Button>
        <Button color="warning" variant="light" size="large">
          Large
        </Button>
        <Button color="warning" variant="light" startIcon={svg}>
          With icon
        </Button>
        <Button color="warning" variant="light" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button color="error" variant="light">
          Label
        </Button>
        <Button color="error" variant="light" loading>
          Loading
        </Button>
        <Button color="error" variant="light" size="large">
          Large
        </Button>
        <Button color="error" variant="light" startIcon={svg}>
          With icon
        </Button>
        <Button color="error" variant="light" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Typography variant="h3">Text</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button variant="text">Label</Button>
        <Button variant="text" loading>
          Loading
        </Button>
        <Button variant="text" size="large">
          Large
        </Button>
        <Button variant="text" startIcon={svg}>
          With icon
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>

    <Typography variant="h3">Link</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center">
        <Button variant="link">Label</Button>
        <Button variant="link" loading>
          Loading
        </Button>
        <Button variant="link" size="large">
          Large
        </Button>
        <Button variant="link" startIcon={svg}>
          With icon
        </Button>
        <Button variant="link" disabled>
          Disabled
        </Button>
      </Stack>
    </Stack>
  </Stack>
);

ButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => <Button {...args}>Label</Button>;

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};
ButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
