import { useState } from 'react';
import { Box, Switch } from '@mui/material';
import { Story } from '@storybook/react';
import { HomeOutlineMd } from '@astral/icons';

import { FormControlLabel } from '../FormControlLabel';

import { Fade } from './Fade';

export default {
  title: 'Components/Fade',
  component: Fade,
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

      <Fade in={open} timeout={150}>
        <Box>
          <HomeOutlineMd />
        </Box>
      </Fade>
    </Box>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
