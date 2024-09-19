import { CopyOutlineSm } from '@astral/icons';

import { styled } from '../styles';
import { Typography } from '../Typography';

export const Wrapper = styled(Typography)`
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCopyIcon = styled(CopyOutlineSm, {
  shouldForwardProp: (prop) => !['$copyPosition'].includes(prop),
})<{ $copyPosition: 'left' | 'right' }>`
  margin-right: ${({ $copyPosition, theme }) =>
    $copyPosition === 'left' ? theme.spacing(1) : ''};
  margin-left: ${({ $copyPosition, theme }) =>
    $copyPosition === 'right' ? theme.spacing(1) : ''};

  /* Задаем размер иконки */
  font-size: 16px;

  fill: ${({ color }) => color};
`;
