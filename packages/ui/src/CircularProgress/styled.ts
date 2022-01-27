import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

import { Theme } from '../theme';

import { СircularProgressColors, СircularProgressSizes } from './constants';
import {
  СircularProgressColor,
  СircularProgressProps,
  СircularProgressSize,
} from './types';

type StyledСircularProgressProps = Omit<
  СircularProgressProps,
  'color' | 'size'
> & {
  customColor?: СircularProgressColor;
  customSize?: СircularProgressSize;
};

type StyledСircularProgressThemeProps = StyledСircularProgressProps & {
  theme: Theme;
};

const getColor = ({
  theme,
  customColor,
}: StyledСircularProgressThemeProps): string => {
  if (customColor === СircularProgressColors.PRIMARY)
    return theme.palette.primary.dark;

  return theme.palette.primary.contrastText;
};

const getСircularProgressSize = ({
  customSize,
}: StyledСircularProgressThemeProps): string => {
  if (customSize === СircularProgressSizes.SMALL) return '16px';

  return '24px';
};

export const StyledCircularProgress = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'customSize',
})<StyledСircularProgressProps>`
  width: ${getСircularProgressSize};
  height: ${getСircularProgressSize};
  color: ${(props) => getColor(props)};
`;
