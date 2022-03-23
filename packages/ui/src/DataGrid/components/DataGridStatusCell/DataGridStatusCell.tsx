import { VFC } from 'react';
import { Box } from '@mui/material';
import { SortFillSm } from '@astral/icons';

import { Typography } from '../../..';

export const DataGridStatusCell: VFC<{ active: boolean }> = ({ active }) => {
  return (
    <Box display="flex" alignItems="center" marginRight={2}>
      <SortFillSm
        fill="#2165CC"
        style={{
          marginRight: 8,
        }}
      />

      <Typography
        color={(theme) =>
          active ? theme.palette.grey[900] : theme.palette.grey[600]
        }
        variant="small"
      >
        {active ? 'Действует' : 'Не действует'}
      </Typography>
    </Box>
  );
};
