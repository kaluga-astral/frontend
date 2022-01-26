import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

import { Theme } from '../theme';

import { LoaderColors, LoaderSizes } from './constants';
import { LoaderColor, LoaderProps, LoaderSize } from './types';

type StyledLoaderProps = Omit<LoaderProps, 'color' | 'size'> & {
  customColor?: LoaderColor;
  customSize?: LoaderSize;
};

type StyledLoaderThemeProps = StyledLoaderProps & {
  theme: Theme;
};

const getColor = ({ theme, customColor }: StyledLoaderThemeProps): string => {
  if (customColor === LoaderColors.PRIMARY) return theme.palette.primary.dark;

  return theme.palette.primary.contrastText;
};

const getLoaderSize = ({ customSize }: StyledLoaderThemeProps): string => {
  if (customSize === LoaderSizes.SMALL) return '16px';

  return '24px';
};

export const StyledCircularProgress = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== 'customColor' && prop !== 'customSize',
})<StyledLoaderProps>`
  width: ${getLoaderSize};
  height: ${getLoaderSize};
  color: ${(props) => getColor(props)};
`;
