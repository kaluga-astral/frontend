import { Table, TableBody } from '@mui/material';

import { styled } from '../styles';

export const StyledTable = styled(Table)`
  .MuiTableCell-root {
    padding: 0;

    border: none;
  }

  .MuiTableHead-root {
    .MuiTableCell-root {
      border-bottom: 2px solid ${({ theme }) => theme.palette.grey[300]};
    }
  }

  .MuiCheckbox-root {
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiSvgIcon-root {
      width: 14px;
      height: 14px;
    }
  }

  .MuiTableRow-root {
    height: 44px;
    padding: 0;
  }
`;

export const StyledTableBody = styled(TableBody, {
  shouldForwardProp(prop) {
    return prop !== 'loading';
  },
})<{ loading: boolean }>`
  opacity: ${({ loading }) => loading && '0.5'};

  user-select: ${({ loading }) => loading && 'none'};
  pointer-events: ${({ loading }) => loading && 'none'};
`;
