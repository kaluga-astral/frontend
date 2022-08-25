import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) => name !== 'rowsCount',
})<Required<OverflowedProps>>`
  /* stylelint-disable-next-line */
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;

  white-space: initial;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  -webkit-box-orient: vertical;
`;
