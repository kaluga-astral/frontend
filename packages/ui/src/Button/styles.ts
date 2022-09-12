import { LoadingButton } from '@mui/lab';

import { styled } from '../styles';
import { ButtonSizes } from '../ButtonBase';
import { StyledButtonBaseThemeProps } from '../ButtonBase/styles';

import { ButtonProps } from './types';

export const getButtonPaddingMobile = ({
  size,
  theme,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.Small) {
    return theme.spacing(2, 3);
  }

  return theme.spacing(4, 3);
};

export const getButtonHeightMobile = ({
  size,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.Small) {
    return '32px';
  }

  return '48px';
};

const getBreakPoint = ({ theme }: StyledButtonBaseThemeProps): string => {
  return `${theme.breakpoints.values.sm}px`;
};

export const StyledLoadingButton = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<ButtonProps>`
  @media screen and (max-width: ${getBreakPoint}) {
    height: ${getButtonHeightMobile};
    padding: ${getButtonPaddingMobile};

    font-size: 16px;
    white-space: nowrap;
  }
`;
