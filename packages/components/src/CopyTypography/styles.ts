import { typographyClasses } from '@mui/material';
import { CopyOutlineSm } from '@astral/icons';

import { styled } from '../styles';
import { Typography } from '../Typography';

import { type CopyTypographyProps } from './CopyTypography';

export const Wrapper = styled(Typography, {
  shouldForwardProp: (props) => !['$copyPosition'].includes(props),
})<{
  $copyPosition: CopyTypographyProps['copyPosition'];
}>`
  cursor: pointer;

  display: flex;
  flex-direction: ${({ $copyPosition }) =>
    $copyPosition === 'left' && 'row-reverse'};
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
  & > .${typographyClasses.root} {
    cursor: inherit;

    &:hover {
      text-decoration: inherit;
    }
  }
`;

export const StyledCopyIcon = styled(CopyOutlineSm, {
  shouldForwardProp: (prop) => !['$copyPosition'].includes(prop),
})<{ $copyPosition: CopyTypographyProps['copyPosition'] }>`
  margin-right: ${({ $copyPosition, theme }) =>
    $copyPosition === 'left' ? theme.spacing(1) : ''};
  margin-left: ${({ $copyPosition, theme }) =>
    $copyPosition === 'right' ? theme.spacing(1) : ''};

  /* Задаем размер иконки */
  font-size: 16px;

  fill: ${({ color }) => color};
`;
