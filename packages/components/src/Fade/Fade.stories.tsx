import { useState } from 'react';
import { Box, Paper, Switch } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type StoryFn } from '@storybook/react';

import { FormControlLabel } from '../FormControlLabel';

import { Fade } from './Fade';

export default {
  title: 'Components/Fade',
  component: Fade,
};

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

const Template: StoryFn = () => {
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
        <Fade in={checked}>{icon}</Fade>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
