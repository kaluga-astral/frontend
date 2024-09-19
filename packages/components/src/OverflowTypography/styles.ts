import { styled } from '../styles';
import { Typography } from '../Typography';

type OverflowTypographyWrapperProps = {
  hasMultipleRows: boolean;
  rowsCount: number;
};

// проверки на rowsCount в стилях нужны для того, чтобы элементы в одну строку обрезались бы по буквенно
// но если нужно обрезание по нескольким строчкам, тогда элементы будут обрезаться по словам
export const StyledTypography = styled(Typography, {
  shouldForwardProp: (name) =>
    name !== 'rowsCount' && name !== 'hasMultipleRows',
})<OverflowTypographyWrapperProps>`
  /* stylelint-disable-next-line */
  overflow: hidden;
  /* stylelint-disable-next-line */
  display: ${({ hasMultipleRows }) => (hasMultipleRows ? '-webkit-box' : '')};

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: ${({ hasMultipleRows }) =>
    hasMultipleRows ? 'initial' : 'nowrap'};
  -webkit-box-orient: ${({ hasMultipleRows }) =>
    hasMultipleRows ? 'vertical' : ''};
  -webkit-line-clamp: ${({ rowsCount }) => rowsCount};
`;

export const Wrapper = styled(Typography, {
  shouldForwardProp: (prop) => !['$align'].includes(prop),
})<{ $align: string }>`
  display: flex;
  justify-content: ${({ $align }) => $align};

  white-space: nowrap;
`;
