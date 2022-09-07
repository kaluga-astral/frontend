import { Global } from '@emotion/react';
import { SwipeableDrawer as MuiSwipeableDrawer } from '@mui/material';

import { SwipeableDrawerProps } from './types';
import {
  StyleTypography,
  StyledDrawerBody,
  StyledDrawerHeader,
  StyledPuller,
} from './styled';

const SwipeableDrawer = ({
  drawerBleeding = 56,
  drawerBleedingIcon,
  drawerBleedingTitle,
  children,
  ...rest
}: SwipeableDrawerProps) => {
  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            maxHeight: `calc(100vh - ${drawerBleeding}px * 2)`,
            overflow: 'visible',
          },
        }}
      />

      <MuiSwipeableDrawer {...rest}>
        <StyledDrawerHeader drawerBleeding={drawerBleeding}>
          <StyledPuller>{drawerBleedingIcon}</StyledPuller>

          <StyleTypography>{drawerBleedingTitle}</StyleTypography>
        </StyledDrawerHeader>

        <StyledDrawerBody>{children}</StyledDrawerBody>
      </MuiSwipeableDrawer>
    </>
  );
};

export default SwipeableDrawer;
