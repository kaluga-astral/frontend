import styled from '@emotion/styled';
import { Theme } from '@mui/material';

import { ButtonBase, ButtonSizes } from '../ButtonBase';
import { ButtonProps } from '../Button';

type StyledIconButtonThemeProps = ButtonProps & {
  theme: Theme;
};

export const getButtonHeight = ({
  size,
}: StyledIconButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return '40px';

  return '32px';
};

export const StyledIconButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  height: ${getButtonHeight};
  width: ${getButtonHeight};
  padding: ${({ theme }) => theme.spacing(1)};
`;
