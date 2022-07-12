import { styled } from '../styles';
import { ButtonBase, ButtonSizes } from '../ButtonBase';
import { Theme } from '../theme';
import { ButtonProps } from '../Button';

type StyledIconButtonThemeProps = ButtonProps & {
  theme: Theme;
};

export const getButtonHeight = ({
  size,
}: StyledIconButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) {
    return '40px';
  }

  return '32px';
};

export const StyledIconButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  width: ${getButtonHeight};
  height: ${getButtonHeight};
  padding: ${({ theme }) => theme.spacing(1)};
`;
