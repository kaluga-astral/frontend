import { CopyOutlineSm } from '@astral/icons';
import { type SvgIconProps } from '@mui/material';

import { styled } from '../../styles';
import { Typography } from '../../Typography';

import { type ValueProps } from './Value';

type StyledTypographyProps = {
  $leader?: boolean;
  $canCopy?: boolean;
};

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== '$canCopy' && prop !== '$leader',
})<StyledTypographyProps>`
  cursor: ${({ $canCopy }) => ($canCopy ? 'pointer' : 'default')};

  hyphens: auto;
  text-align: ${({ $leader }) => ($leader ? 'right' : 'left')};
  overflow-wrap: break-word;

  &:hover {
    text-decoration: ${({ $canCopy }) => ($canCopy ? 'underline' : 'none')};
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

export const Wrapper = styled.dd`
  margin: 0;
`;
