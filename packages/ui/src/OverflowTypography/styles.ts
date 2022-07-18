import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) => name !== 'rowsCount' && name !== 'overflowLimit',
})<Required<OverflowedProps>>`
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  line-clamp: ${({ rowsCount }) => rowsCount};
  max-width: ${({ overflowLimit, rowsCount }) => overflowLimit / rowsCount}ch;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
`;
