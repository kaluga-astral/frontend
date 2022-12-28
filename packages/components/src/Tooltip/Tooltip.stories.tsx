import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Typography } from '../Typography/Typography';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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

const Template: Story = (args) => {
  return (
    <Tooltip title="Всплывающая подсказка" {...args}>
      <IconButton variant="contained">{svg}</IconButton>
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
      <Tooltip title="Всплывающая подсказка">
        <Button color="primary" variant="contained">
          Текст
        </Button>
      </Tooltip>
      <Tooltip title="Всплывающая подсказка">
        <IconButton variant="contained">{svg}</IconButton>
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
        <IconButton variant="contained">{svg}</IconButton>
      </Tooltip>
    </Stack>

    <Typography variant="h5">Right menu tooltip</Typography>
    <Stack gap={3}>
      <Tooltip placement="right" title="Элемент 1">
        <IconButton>{svg}</IconButton>
      </Tooltip>
      <Tooltip placement="right" title="Элемент 2">
        <IconButton>{svg}</IconButton>
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
