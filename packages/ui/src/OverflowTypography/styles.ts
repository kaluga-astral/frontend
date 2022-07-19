import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) => name !== 'rowsCount' && name !== 'overflowLimit',
})<Required<OverflowedProps>>`
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  // максимальная ширина должна зависеть от колличества отображаемых строк,
  // иначе, в случае привязки только к колличеству символов, например при 74символах и 2 строках,
  // проявится кейс, что на вторую строку символы никогда не перенесутся
  max-width: ${({ overflowLimit, rowsCount }) => overflowLimit / rowsCount}ch;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
`;
