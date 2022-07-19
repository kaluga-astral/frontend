import { useState } from 'react';
import { Box, Switch } from '@mui/material';
import { Story } from '@storybook/react';
import { HomeOutlineMd } from '@astral/icons';

import { FormControlLabel } from '../FormControlLabel';

import { Slide } from './Slide';

export default {
  title: 'Components/Slide',
  component: Slide,
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
        <Slide in={open} direction="up" mountOnEnter unmountOnExit>
          <div>
            <HomeOutlineMd />
          </div>
        </Slide>
        <Slide in={open} direction="down" mountOnEnter unmountOnExit>
          <div>
            <HomeOutlineMd />
          </div>
        </Slide>
        <Slide in={open} direction="right" mountOnEnter unmountOnExit>
          <div>
            <HomeOutlineMd />
          </div>
        </Slide>
        <Slide in={open} direction="left" mountOnEnter unmountOnExit>
          <div>
            <HomeOutlineMd />
          </div>
        </Slide>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
