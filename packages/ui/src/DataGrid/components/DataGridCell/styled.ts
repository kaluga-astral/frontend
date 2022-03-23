import { TableCell } from '@mui/material';

import { styled } from '../../../styles';

const getCursorStyles = (pointer: boolean | undefined) =>
  pointer ? 'pointer' : 'default';

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp(prop) {
    return prop !== 'pointer';
  },
})<{ pointer?: boolean }>`
  cursor: ${({ pointer }) => getCursorStyles(pointer)};
`;
