import { FC, forwardRef } from 'react';
import { Box } from '@mui/material';

export const Main: FC = forwardRef(({ children, ref }) => {
  return (
    <Box ref={ref} overflow="hidden" component="main">
      {children}
    </Box>
  );
});

export default Main;
