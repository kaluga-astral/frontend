import { type MouseEvent, useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type PopoverOrigin } from '@mui/material';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { styled } from '../styles';
import { Grid } from '../Grid';

import { Popover } from './Popover';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?type=design&node-id=8444-83809&mode=design)
 * ### [Guide]()
 */

const meta: Meta<typeof Popover> = {
  title: 'Components/Layout/Popover',
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

const PopoverContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Interaction: Story = {
  args: {
    open: true,
    children: 'контент popover',
    anchorPosition: { top: 50, left: 50 },
    anchorReference: 'anchorPosition',
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

  return (
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

const GridContainer = styled(Grid)`
  grid-template-columns: 1fr;
  flex-direction: row;
  gap: 10px;

  margin-top: 30px;

  ${({ theme }) => theme.spacing(2)};
`;

export const TransformOrigin = () => {
  const transformOriginVariants = [
    { vertical: 'top', horizontal: 'left' },
    { vertical: 'top', horizontal: 'center' },
    { vertical: 'top', horizontal: 'right' },
    { vertical: 'center', horizontal: 'left' },
    { vertical: 'center', horizontal: 'center' },
    { vertical: 'center', horizontal: 'right' },
    { vertical: 'bottom', horizontal: 'left' },
    { vertical: 'bottom', horizontal: 'center' },
    { vertical: 'bottom', horizontal: 'right' },
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<PopoverOrigin>({
    vertical: 'top',
    horizontal: 'right',
  });

  const handleOpen = (
    position: { vertical: string; horizontal: string },
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedPosition({
      vertical: position.vertical as PopoverOrigin['vertical'],
      horizontal: position.horizontal as PopoverOrigin['horizontal'],
    });

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <GridContainer container columns={3}>
        {transformOriginVariants.map(({ vertical, horizontal }) => (
          <Button
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              handleOpen({ vertical, horizontal }, event)
            }
          >
            Open {vertical}-{horizontal}
          </Button>
        ))}

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          transformOrigin={selectedPosition}
        >
          <PopoverContainer>
            <Typography>Контент Popover</Typography>
          </PopoverContainer>
        </Popover>
      </GridContainer>
    </>
  );
};

export const AnchorOrigin = () => {
  const anchorOriginVariants = [
    { vertical: 'top', horizontal: 'left' },
    { vertical: 'top', horizontal: 'center' },
    { vertical: 'top', horizontal: 'right' },
    { vertical: 'center', horizontal: 'left' },
    { vertical: 'center', horizontal: 'center' },
    { vertical: 'center', horizontal: 'right' },
    { vertical: 'bottom', horizontal: 'left' },
    { vertical: 'bottom', horizontal: 'center' },
    { vertical: 'bottom', horizontal: 'right' },
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<PopoverOrigin>({
    vertical: 'top',
    horizontal: 'right',
  });

  const handleOpen = (
    position: { vertical: string; horizontal: string },
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedPosition({
      vertical: position.vertical as PopoverOrigin['vertical'],
      horizontal: position.horizontal as PopoverOrigin['horizontal'],
    });

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <GridContainer container columns={3}>
        {anchorOriginVariants.map(({ vertical, horizontal }) => (
          <Button
            onClick={(event: MouseEvent<HTMLButtonElement>) =>
              handleOpen({ vertical, horizontal }, event)
            }
          >
            Open {vertical}-{horizontal}
          </Button>
        ))}

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={selectedPosition}
        >
          <PopoverContainer>
            <Typography>Контент Popover</Typography>
          </PopoverContainer>
        </Popover>
      </GridContainer>
    </>
  );
};
