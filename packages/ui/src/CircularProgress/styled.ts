import { CircularProgress, Theme } from '@mui/material';
import styled from '@emotion/styled';

import { CircularProgressColors } from './constants';
import { CircularProgressColor, CircularProgressProps } from './types';

type StyledCircularProgressProps = Omit<
  CircularProgressProps,
  'color' | 'size'
> & {
  customColor?: CircularProgressColor;
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

export const StyledCircularProgress = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})<StyledCircularProgressProps>`
  color: ${(props) => getColor(props)};
`;
