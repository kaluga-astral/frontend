import { styled } from '../../styles';
import { Typography } from '../../Typography';
import { alignToJustifyContent } from '../utils';
import type { AlignVariant } from '../types';

type HeadCellProps = {
  $align?: AlignVariant;
  $isSortable?: boolean;
  $hasStartAdornment?: boolean;
};

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) =>
    !['$align', '$isSortable', '$hasStartAdornment'].includes(prop),
})<HeadCellProps>`
  cursor: ${({ $isSortable }) => ($isSortable ? 'pointer' : 'initial')};
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => alignToJustifyContent($align)};

  height: 40px;
  padding: ${({ theme, $hasStartAdornment }) =>
    $hasStartAdornment ? theme.spacing(1, 2, 1, 0) : theme.spacing(1, 2)};

  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;

  > svg {
    width: 16px;
    height: 16px;
  }
`;
