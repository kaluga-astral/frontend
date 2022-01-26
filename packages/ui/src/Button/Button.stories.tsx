import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story = (args) => <Button {...args}>Label</Button>;

export const Showcase: Story = () => (
  <Stack direction="row" gap={2}>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button color="primary" variant="contained">
        Contained
      </Button>
      <Button color="primary" variant="contained" size="large">
        Large
      </Button>
      <Button color="primary" variant="contained" loading>
        Contained
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="light" size="large">
        Large
      </Button>
      <Button color="primary" variant="light" loading>
        Light
      </Button>
      <Button color="primary" disabled>
        Disabled
      </Button>
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button color="warning" variant="contained">
        Contained
      </Button>
      <Button color="warning" variant="contained" size="large">
        Large
      </Button>
      <Button color="warning" variant="contained" loading>
        Contained
      </Button>
      <Button color="warning" variant="light">
        Light
      </Button>
      <Button color="warning" variant="light" size="large">
        Large
      </Button>
      <Button color="warning" variant="light" loading>
        Light
      </Button>
      <Button color="warning" disabled>
        Disabled
      </Button>
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button color="error" variant="contained">
        Contained
      </Button>
      <Button color="error" variant="contained" size="large">
        Large
      </Button>
      <Button color="error" variant="contained" loading>
        Contained
      </Button>
      <Button color="error" variant="light">
        Light
      </Button>
      <Button color="error" variant="light" size="large">
        Large
      </Button>
      <Button color="error" variant="light" loading>
        Light
      </Button>
      <Button color="error" disabled>
        Disabled
      </Button>
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <Button color="success" variant="contained" size="large">
        Large
      </Button>
      <Button color="success" variant="contained" loading>
        Contained
      </Button>
      <Button color="success" variant="light">
        Light
      </Button>
      <Button color="success" variant="light" size="large">
        Large
      </Button>
      <Button color="success" variant="light" loading>
        Light
      </Button>
      <Button color="success" disabled>
        Disabled
      </Button>
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button variant="text">Text</Button>
      <Button variant="text" size="large">
        Large Text
      </Button>
      <Button variant="text" size="large" loading>
        Loading
      </Button>
      <Button variant="text" disabled>
        Disabled
      </Button>
    </Stack>
    <Stack sx={{ maxWidth: 200 }} gap={2}>
      <Button variant="link">Link</Button>
      <Button variant="link" size="large">
        Large Text
      </Button>
      <Button variant="link" size="large" loading>
        Loading
      </Button>
      <Button variant="link" disabled>
        Disabled
      </Button>
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
