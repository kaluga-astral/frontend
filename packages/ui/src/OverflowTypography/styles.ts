import { styled } from '../styles';
import { Typography } from '../Typography';

import { OverflowedProps } from './OverflowTypography';

type OverflowTypographyWrapperProps = {
  hasMultipleRows: boolean;
} & Required<OverflowedProps>;

// проверки на rowsCount в стилях нужны для того, чтобы элементы в одну строку обрезались бы по буквенно
// но если нужно обрезание по нескольким строчкам, тогда элементы будут обрезаться по словам
export const OverflowTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) =>
    name !== 'rowsCount' && name !== 'hasMultipleRows',
})<OverflowTypographyWrapperProps>`
  /* stylelint-disable-next-line */
  display: ${({ hasMultipleRows }) => (hasMultipleRows ? '-webkit-box' : '')};
  max-width: 100%;
  overflow: hidden;

  white-space: ${({ hasMultipleRows }) =>
    hasMultipleRows ? 'initial' : 'nowrap'};
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
  -webkit-box-orient: ${({ hasMultipleRows }) =>
    hasMultipleRows ? 'vertical' : ''};
`;
