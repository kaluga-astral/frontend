import { styled } from '../../styles';
import { TableCell } from '../../Table';

export const StyledTableCell = styled(TableCell)`
  padding: ${({ theme }) => theme.spacing(1, 0)};
`;