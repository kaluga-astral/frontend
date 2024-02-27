import { styled } from '../styles';
import { TableCell, TableContainer } from '../Table';
import { Container } from '../DataGrid';

export const DataGridInfiniteLoaderWrapper = styled(TableCell)`
  text-align: center;
`;

export const DataGridInfiniteTableContainer = styled(TableContainer)`
  height: 100%;

  tfoot {
    position: relative !important;
    z-index: auto !important;
  }
`;

export const DataGridInfiniteContainer = styled(Container)`
  min-height: 320px;
`;
