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
  color: ${({ loading }) => loading && 'transparent'};
  pointer-events: ${({ loading }) => (loading ? 'none' : 'inherit')};

  &:focus {
    color: ${({ loading }) => loading && 'transparent'};
  }

  > span:first-of-type {
    display: inherit;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  > span:last-of-type {
    display: inherit;
    margin-left: ${({ theme }) => theme.spacing(2)};
  }

  .MuiCircularProgress-root {
    position: absolute;
    width: 16px !important;
    height: 16px !important;
    color: ${getProgressColor};
    transform: translate(-50%, -50%);
  }
`;
