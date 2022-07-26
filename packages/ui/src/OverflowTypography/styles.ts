import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) => name !== 'rowsCount',
})<Required<OverflowedProps>>`
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  -webkit-box-orient: vertical;
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
`;
