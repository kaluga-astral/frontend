import { useState } from 'react';
import { Box, Switch } from '@mui/material';
import { Story } from '@storybook/react';
import { HomeOutlineMd } from '@astral/icons';

import { FormControlLabel } from '../FormControlLabel';

import { Zoom } from './Zoom';

export default {
  title: 'Components/Zoom',
  component: Zoom,
};

const Template: Story = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={open} onChange={handleClick} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Zoom in={open}>
          <div>
            <HomeOutlineMd />
          </div>
        </Zoom>
        <Zoom in={open} style={{ transitionDelay: open ? '500ms' : '0ms' }}>
          <div>
            <HomeOutlineMd />
          </div>
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
