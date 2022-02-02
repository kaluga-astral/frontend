import { styled } from '../styles';
import { Theme } from '../theme';
import { ButtonBase, ButtonVariants } from '../ButtonBase';

import { ButtonProps } from './types';

type StyledButtonThemeProps = ButtonProps & {
  theme: Theme;
};

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
  color: ${({ loading }) => loading && 'transparent'};

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
    transform: translate(-50%, -50%);
    position: absolute;

    color: ${getProgressColor};
  }
`;
