import { styled } from '../../styles';
import { TableRow } from '../../Table';

export const DataGridInfiniteHead = styled(TableRow)`
  background: ${({ theme }) => theme.palette.background.default};

  td {
    border-bottom: ${({ theme }) => `2px solid ${theme.palette.grey['300']}`};
  }
`;
