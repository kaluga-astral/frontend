import { Story } from '@storybook/react';
import { Stack } from '@mui/material';
import { CheckOutlineMd, LikeOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const svg = <LikeOutlineMd />;

export const ButtonShowcase: Story = () => (
  <Stack gap={4}>
    <Typography variant="h3">Contained</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button size="small">Small</Button>
        <Button>Label</Button>
        <Button loading>Loading</Button>
        <Button color="primary" variant="contained" size="large">
          Large
        </Button>
        <Button color="primary" variant="contained" startIcon={svg}>
          With icon
        </Button>
        <Button color="primary" variant="contained" disabled>
          Disabled
        </Button>
        <Button color="primary" variant="contained" selected>
          Selected
        </Button>
        <IconButton color="primary" variant="contained" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="primary" variant="contained" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="success" variant="contained" size="small">
          Small
        </Button>
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
        <Button color="success" variant="contained" selected>
          Selected
        </Button>
        <IconButton color="success" variant="contained" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="success" variant="contained" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="warning" variant="contained" size="small">
          Small
        </Button>
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
        <Button color="warning" variant="contained" selected>
          Selected
        </Button>
        <IconButton color="warning" variant="contained" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="warning" variant="contained" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="error" variant="contained" size="small">
          Small
        </Button>
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
        <Button color="error" variant="contained" selected>
          Selected
        </Button>
        <IconButton color="error" variant="contained" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="error" variant="contained" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Typography variant="h3">Light</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="primary" variant="light" size="small">
          Small
        </Button>
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
        <Button color="primary" variant="light" selected>
          Selected
        </Button>
        <IconButton color="primary" variant="light" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="primary" variant="light" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">success</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="success" variant="light" size="small">
          Small
        </Button>
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
        <Button color="success" variant="light" selected>
          Selected
        </Button>
        <IconButton color="success" variant="light" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="success" variant="light" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">warning</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="warning" variant="light" size="small">
          Small
        </Button>
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
        <Button color="warning" variant="light" selected>
          Selected
        </Button>
        <IconButton color="warning" variant="light" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="warning" variant="light" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Stack gap={1}>
      <Typography variant="code">error</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button color="error" variant="light" size="small">
          Small
        </Button>
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
        <Button color="error" variant="light" selected>
          Selected
        </Button>
        <IconButton color="error" variant="light" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton color="error" variant="light" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Typography variant="h3">Text</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button variant="text" size="small">
          Small
        </Button>
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
        <Button variant="text" selected>
          Selected
        </Button>
        <IconButton variant="text" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton variant="text" selected>
          <CheckOutlineMd />
        </IconButton>
      </Stack>
    </Stack>
    <Typography variant="h3">Link</Typography>
    <Stack gap={1}>
      <Typography variant="code">primary</Typography>
      <Stack gap={3} direction="row" alignItems="center" flexWrap="wrap">
        <Button variant="link" size="small">
          Small
        </Button>
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
        <Button variant="link" selected>
          Selected
        </Button>
        <IconButton variant="link" size="small" selected>
          <CheckOutlineMd />
        </IconButton>
        <IconButton variant="link" selected>
          <CheckOutlineMd />
        </IconButton>
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
