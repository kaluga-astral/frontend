import { Typography } from '../../Typography';
import { styled } from '../../styles';
import { alignToJustifyContent } from '../utils';
import type { AlignVariant } from '../types';

type HeadCellProps = {
  $align?: AlignVariant;
  $sortable?: boolean;
};

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['$align', '$sortable'].includes(prop),
})<HeadCellProps>`
  cursor: ${({ $sortable }) => ($sortable ? 'pointer' : 'initial')};
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => alignToJustifyContent($align)};

  padding: ${({ theme }) => theme.spacing(3, 2)};

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
