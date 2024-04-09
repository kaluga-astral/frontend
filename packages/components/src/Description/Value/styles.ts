import { CopyOutlineSm } from '@astral/icons';
import { type SvgIconProps } from '@mui/material';

import { styled } from '../../styles';
import { Typography } from '../../Typography';

import { type ValueProps } from './Value';

export const StyledText = styled(Typography)`
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

  /* Выравниваем иконку по вертикали */
  margin-bottom: -4px;

  /* Добавляем горизонтальный отступ от текста */
  margin-left: ${({ $copyPosition, theme }) =>
    $copyPosition === 'right' ? theme.spacing(1) : ''};

  font-size: ${({ theme }) => theme.spacing(4)};

  fill: ${({ color }) => color};
`;
