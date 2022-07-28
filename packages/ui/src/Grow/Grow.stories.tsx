import { useState } from 'react';
import { Box, Switch } from '@mui/material';
import { Story } from '@storybook/react';
import { HomeOutlineMd } from '@astral/icons';

import { FormControlLabel } from '../FormControlLabel';

import { Grow } from './Grow';

export default {
  title: 'Components/Grow',
  component: Grow,
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
        <Grow in={open}>
          <div>
            <HomeOutlineMd />
          </div>
        </Grow>
        <Grow
          in={open}
          style={{ transformOrigin: '0 0 0' }}
          {...(open ? { timeout: 1000 } : {})}
        >
          <div>
            <HomeOutlineMd />
          </div>
        </Grow>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
