import { VFC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const TableLoader: VFC = () => {
  return (
    <Box
      position="absolute"
      top="calc(50% - 90px)"
      left="calc(50% - 90px)"
      bottom="50%"
    >
      <CircularProgress value={200} size={90} />
    </Box>
  );
};
