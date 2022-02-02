import { CircularProgress } from '@mui/material';

import { styled } from '../styles';
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
  width: ${getCircularProgressSize};
  height: ${getCircularProgressSize};
  color: ${(props) => getColor(props)};
`;
