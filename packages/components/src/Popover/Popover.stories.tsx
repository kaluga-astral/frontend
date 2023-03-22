import { useState } from 'react';
import { Story } from '@storybook/react';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { Popover } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
};

const PopoverContainer = styled(Grid)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Template: Story = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        open={open}
        anchorEl={Boolean(anchorEl)}
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
