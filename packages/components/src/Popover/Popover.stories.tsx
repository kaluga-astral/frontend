import { type MouseEvent, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';


import { Button } from '../Button';
import { LegacyGrid } from '../LegacyGrid';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { Popover } from './Popover';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?type=design&node-id=8444-83809&mode=design)
 * ### [Guide]()
 */


const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;


const PopoverContainer = styled(LegacyGrid)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Interaction: Story = {
  args: {    
    open:true,
    children:'контент popover',
    anchorPosition:{ 'top': 50, 'left': 50 },
    anchorReference:'anchorPosition'
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
 
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
  <>
      <Button variant="contained" onClick={handleClick}>
        Открыть Popover
      </Button>
      <Popover
        title="Заголовок"
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
export const transformOrig = () => {
 
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
  <>
      <Button variant="contained" onClick={handleClick}>
        Открыть Popover
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
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
export const Anchor = () => {
 
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
  <>
    <>
      <Button variant="contained" onClick={handleClick}>
        Открыть Popover
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          
        }}
      >
        <PopoverContainer>
          <Typography>Контент Popover</Typography>
        </PopoverContainer>
      </Popover>
    </>
  </>
  );
};

export const MouseOnTypography = () => {
 
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Typography
        aria-owns={Boolean(anchorEl) ? 'mouse-over-popover' : undefined}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Наведите, чтобы открыть popover.
      </Typography>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Контент popover.</Typography>
      </Popover>
    </div>
  );
};
