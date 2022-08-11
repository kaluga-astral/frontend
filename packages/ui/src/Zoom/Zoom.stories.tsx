import { useState } from 'react';
import { Box, Paper, Switch } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Story } from '@storybook/react';

import { FormControlLabel } from '../FormControlLabel';

import { Zoom } from './Zoom';

export default {
  title: 'Components/Zoom',
  component: Zoom,
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

const Template: Story = () => {
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
        <Zoom in={checked}>{icon}</Zoom>
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? '500ms' : '0ms' }}
        >
          {icon}
        </Zoom>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
