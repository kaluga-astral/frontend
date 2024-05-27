import { TableCell } from '../../Table';
import { styled } from '../../styles';

export const StyledTableCell = styled(TableCell)`
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2)};
`;
