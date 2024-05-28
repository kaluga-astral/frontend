import { styled } from '../styles';
import { Table, TableCell, TableContainer, TableRow } from '../Table';

export const DataGridInfiniteLoaderWrapper = styled(TableCell)`
  text-align: center;
`;

export const DataGridInfiniteTable = styled(Table)`
  border-collapse: separate;
`;

export const FooterRow = styled(TableRow)`
  height: 68px;
`;

export const DataGridInfiniteTableContainer = styled(TableContainer)`
  height: 100%;

  tfoot {
    position: relative !important;
    z-index: auto !important;
  }
`;
