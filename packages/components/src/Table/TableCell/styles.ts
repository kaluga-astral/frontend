import { TableCell } from '@mui/material';

import { styled } from '../../styles';

export const StyledTableCell = styled(TableCell)<{ $isDisabled?: boolean }>`
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;
