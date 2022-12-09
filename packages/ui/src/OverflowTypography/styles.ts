import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

// проверки на rowsCount в стилях нужны для того, чтобы элементы в одну строку обрезались бы по буквенно
// но если нужно обрезание по нескольким строчкам, тогда элементы будут обрезаться по словам
export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) => name !== 'rowsCount',
})<Required<OverflowedProps>>`
  /* stylelint-disable-next-line */
  display: ${({ rowsCount }) => (rowsCount > 1 ? '-webkit-box' : '')};
  max-width: 100%;
  overflow: hidden;

  white-space: ${({ rowsCount }) => (rowsCount > 1 ? 'initial' : 'nowrap')};
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  -webkit-box-orient: ${({ rowsCount }) => (rowsCount > 1 ? 'vertical' : '')};
`;
