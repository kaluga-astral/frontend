import { LoaderProps, LoaderColor, LoaderSize } from './types';
import { LoaderSizes, LoaderColors } from './constants';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

import { Theme } from '../theme';

interface StyledLoaderProps extends Omit<LoaderProps, 'color'|'size'> {
  customColor?: LoaderColor;
  customSize?: LoaderSize;
}

type StyledLoaderThemeProps = StyledLoaderProps & {
  theme: Theme;
};

const getColor = ({ theme, customColor }: StyledLoaderThemeProps): string => {
  if (customColor === LoaderColors.PRIMARY) return theme.palette.primary.dark;

  return theme.palette.background.default;
};

const getLoaderSize = ({ customSize }: StyledLoaderThemeProps): string => {
  switch (customSize) {
    case LoaderSizes.SMALL:
      return '16px';
    case LoaderSizes.MEDIUM:
      return '24px';
    default:
      return typeof customSize;
  }
};

export const StyledLoader = styled(CircularProgress, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customSize',
})<StyledLoaderProps>`
  width: ${getLoaderSize};
  height: ${getLoaderSize};
  color: ${(props) =>
    getColor({ ...props })};
`;
