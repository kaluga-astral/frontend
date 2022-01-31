import styled from '@emotion/styled';

import { ButtonBase } from '../ButtonBase';
import { ButtonProps } from '../types';
import { Theme } from '../../theme';
import { ButtonVariants } from '../constants';

interface StyledButtonThemeProps extends ButtonProps {
  theme: Theme;
}

const getProgressColor = ({
  theme,
  variant,
}: StyledButtonThemeProps): string => {
  if (variant === ButtonVariants.CONTAINED)
    return theme.palette.primary.contrastText;

  return theme.palette.grey['900'];
};

export const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  pointer-events: ${({ loading }) => (loading ? 'none' : 'inherit')};

  > span:first-of-type {
    display: inherit;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  > span:last-of-type {
    display: inherit;
    margin-left: ${({ theme }) => theme.spacing(2)};
  }

  .MuiCircularProgress-root {
    width: 16px !important;
    height: 16px !important;

    color: ${getProgressColor};
  }
`;
