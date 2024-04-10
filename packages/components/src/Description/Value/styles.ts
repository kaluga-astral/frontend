import { CopyOutlineSm } from '@astral/icons';
import { type SvgIconProps } from '@mui/material';

import { styled } from '../../styles';
import { Typography } from '../../Typography';

import { type ValueProps } from './Value';

export const StyledTypography = styled(Typography)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

type StyledCopyIconProps = SvgIconProps & {
  $copyPosition: ValueProps['copyPosition'];
};

export const StyledCopyIcon = styled(CopyOutlineSm)<StyledCopyIconProps>`
  margin-right: ${({ $copyPosition, theme }) =>
    $copyPosition === 'left' ? theme.spacing(1) : ''};
  margin-bottom: -4px;
  margin-left: ${({ $copyPosition, theme }) =>
    $copyPosition === 'right' ? theme.spacing(1) : ''};

  /* Задаем размер иконки */
  font-size: 16px;

  fill: ${({ color }) => color};
`;
