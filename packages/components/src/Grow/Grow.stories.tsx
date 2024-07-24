import { useState } from 'react';
import { Box, Paper, Switch } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type Meta, type StoryObj } from '@storybook/react';

import { FormControlLabel } from '../FormControlLabel';

import { Grow } from './Grow';

const meta: Meta<typeof Grow> = {
  title: 'Components/Transitions/Grow',
  component: Grow,
};

export default meta;

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

type Story = StoryObj<typeof Grow>;

export const Interaction: Story = {
  args: {
    children: icon,
    in: true,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
  );
};
