import type { MouseEvent } from 'react';
import { useState } from 'react';
import type { Story } from '@storybook/react';

import { Button } from '../Button';
import { LegacyGrid } from '../LegacyGrid';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { Popover } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
};

const PopoverContainer = styled(LegacyGrid)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Template: Story = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Открыть Popover
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopoverContainer>
          <Typography>Контент Popover</Typography>
        </PopoverContainer>
      </Popover>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
