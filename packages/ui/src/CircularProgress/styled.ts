import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

import { Theme } from '../theme';

import { CircularProgressColors, CircularProgressSizes } from './constants';
import {
  CircularProgressColor,
  CircularProgressProps,
  CircularProgressSize,
} from './types';

type StyledCircularProgressProps = Omit<
  CircularProgressProps,
  'color' | 'size'
> & {
  customColor?: CircularProgressColor;
  customSize?: CircularProgressSize;
};

type StyledCircularProgressThemeProps = StyledCircularProgressProps & {
  theme: Theme;
};

const getColor = ({
  theme,
  customColor,
}: StyledCircularProgressThemeProps): string => {
  if (customColor === CircularProgressColors.PRIMARY)
    return theme.palette.primary.dark;

  return theme.palette.primary.contrastText;
};

const getCircularProgressSize = ({
  customSize,
}: StyledCircularProgressThemeProps): string => {
  if (customSize === CircularProgressSizes.SMALL) return '16px';

  return '24px';
};

export const StyledCircularProgress = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'customSize',
})<StyledCircularProgressProps>`
  width: ${(props) => getCircularProgressSize(props)} !important;
  height: ${(props) => getCircularProgressSize(props)} !important;
  color: ${(props) => getColor(props)};
`;
