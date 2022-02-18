import { Box } from '@mui/material';
import { forwardRef } from 'react';

export const Main: React.FC = forwardRef(({ children, ref }) => {
  return (
    <Box ref={ref} overflow="hidden" component="main">
      {children}
    </Box>
  );
});

export default Main;
