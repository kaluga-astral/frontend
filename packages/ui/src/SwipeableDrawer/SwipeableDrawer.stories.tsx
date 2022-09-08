import { useState } from 'react';
import { Story } from '@storybook/react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { SwipeableDrawer } from './SwipeableDrawer';

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey['100']
      : theme.palette.background.default,
}));

export default {
  title: 'Components/SwipeableDrawer',
  component: SwipeableDrawer,
};

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <Root>
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={handleToggle(true)}>Open</Button>
      </Box>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        drawerBleedingTitle="Все новые документы"
      >
        <Skeleton variant="rectangular" height="1500px" />
      </SwipeableDrawer>
    </Root>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
