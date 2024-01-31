import { type TableContainerProps } from '@mui/material';

import { styled } from '../styles';
import { TableCell, TableContainer, TableRow } from '../Table';
import { DataGridContainer } from '../DataGrid/styles';

type DataGridInfiniteTableContainerProps = TableContainerProps & {
  inert?: '' | false;
};

export const DataGridInfiniteHead = styled(TableRow)`
  background: ${({ theme }) => theme.palette.background.default};
  td {
    border-bottom:${({ theme }) => `2px solid ${theme.palette.grey['300']}`};
`;

export const DataGridInfiniteLoaderWrapper = styled(TableCell)`
  text-align: center;
`;

export const DataGridInfiniteTableContainer = styled(
  TableContainer,
)<DataGridInfiniteTableContainerProps>`
  height: 100%;
  tfoot {
    position: relative !important;
    z-index: auto !important;
  }
`;

export const DataGridInfiniteContainer = styled(DataGridContainer)`
  min-height: 320px;
`;
